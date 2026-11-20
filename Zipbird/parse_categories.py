#!/usr/bin/env python3
"""
Parse all datos-*.js files and create a comprehensive inventory of categories.
"""

import re
import json
import os
from pathlib import Path

# CERRADAS categories from questions.js
CERRADAS = {
    'paises', 'paises-europa', 'paises-america', 'paises-asia',
    'paises-africa', 'paises-oceania', 'paises-ue',
    'capitales-europa', 'capitales-america', 'capitales-asia',
    'capitales-africa', 'capitales-oceania',
    'provincias', 'comunidades', 'estados-eeuu', 'estados-mexico',
    'parques-nacionales', 'planetas', 'planetas-enanos',
    'continentes', 'oceanos', 'equipos-nba',
    'presidentes-espana', 'presidentes-eeuu'
}

def parse_tiers(tiers_str):
    """Parse the tiers string into a list of tiers, each containing responses."""
    if not tiers_str:
        return []

    tiers = tiers_str.split('|')
    result = []

    for tier in tiers:
        tier = tier.strip()
        if not tier:
            result.append([])
            continue

        # Split by comma, but be careful about ~ which is for synonyms
        responses = []
        for item in tier.split(','):
            item = item.strip()
            if not item:
                continue
            # Take the first part before ~ as the main response
            main_response = item.split('~')[0].strip()
            responses.append(main_response)

        result.append(responses)

    return result

def count_unique_responses(tiers):
    """Count total unique responses across all tiers."""
    all_responses = set()
    for tier in tiers:
        for resp in tier:
            all_responses.add(resp.lower().strip())
    return len(all_responses)

def parse_js_file(filepath):
    """Parse a single datos-*.js file and return list of categories."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    categories = []

    # Pattern to match CATEGORIAS.push([...]) with the array inside
    # We need to find all ['id', 'title', 'tiers'] arrays
    # The pattern handles multiline strings

    # Find all CATEGORIAS.push( ... ) blocks
    push_pattern = r'CATEGORIAS\.push\((.*?)\);'

    # We'll use a simpler approach: find all ['id', 'title', 'tiers'] patterns
    # This regex finds arrays with 3 elements: id, title, tiers
    array_pattern = r'\[\s*\'([^\']+)\'\s*,\s*\'([^\']+)\'\s*,\s*\'([^\']*)\'\s*\]'

    matches = re.findall(array_pattern, content, re.DOTALL)

    for match in matches:
        cat_id, title, tiers_str = match
        tiers = parse_tiers(tiers_str)

        # Count responses per tier
        tier_counts = [len(t) for t in tiers]
        total_responses = sum(tier_counts)
        unique_responses = count_unique_responses(tiers)

        is_cerrada = cat_id in CERRADAS

        categories.append({
            'id': cat_id,
            'title': title,
            'tier_counts': tier_counts,
            'total_responses': total_responses,
            'unique_responses': unique_responses,
            'is_cerrada': is_cerrada,
            'source_file': os.path.basename(filepath)
        })

    return categories

def main():
    data_dir = Path(r"C:\Users\usuario\Desktop\Vuelo de Palabras")
    js_files = sorted(data_dir.glob("datos-*.js"))

    all_categories = []

    for js_file in js_files:
        if js_file.name == 'datos-total-base.js':
            continue  # Skip the base file as it only contains the ANADIR_RESPUESTAS function
        try:
            cats = parse_js_file(js_file)
            all_categories.extend(cats)
            print(f"Parsed {js_file.name}: {len(cats)} categories")
        except Exception as e:
            print(f"Error parsing {js_file.name}: {e}")

    # Merge categories by ID (same ID across files = same category, merged tiers)
    merged = {}
    for cat in all_categories:
        cat_id = cat['id']
        if cat_id not in merged:
            merged[cat_id] = {
                'id': cat_id,
                'title': cat['title'],
                'tier_counts': cat['tier_counts'][:],
                'unique_responses': cat['unique_responses'],
                'is_cerrada': cat['is_cerrada'],
                'source_files': [cat['source_file']]
            }
        else:
            # Merge tier counts
            existing = merged[cat_id]
            # Extend tier_counts if new file has more tiers
            for i, count in enumerate(cat['tier_counts']):
                if i < len(existing['tier_counts']):
                    existing['tier_counts'][i] += count
                else:
                    existing['tier_counts'].append(count)
            # Update unique responses (approximate - would need actual responses to be exact)
            existing['unique_responses'] = max(existing['unique_responses'], cat['unique_responses'])
            existing['source_files'].append(cat['source_file'])

    # Convert to list and sort by ID
    result = list(merged.values())
    result.sort(key=lambda x: x['id'])

    # Calculate totals
    for cat in result:
        cat['total_responses'] = sum(cat['tier_counts'])

    # Output JSON
    output = {
        'total_categories': len(result),
        'cerradas_categories': [c['id'] for c in result if c['is_cerrada']],
        'categories': result
    }

    with open('category_inventory.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\nTotal unique categories: {len(result)}")
    print(f"CERRADAS categories: {len(output['cerradas_categories'])}")
    print("Results saved to category_inventory.json")

    # Print summary
    print("\n=== CATEGORY INVENTORY SUMMARY ===")
    for cat in result:
        cerrada_marker = " [CERRADA]" if cat['is_cerrada'] else ""
        print(f"{cat['id']}: {cat['title']} - Tiers: {cat['tier_counts']} (Total: {cat['total_responses']}, Unique: {cat['unique_responses']}){cerrada_marker}")

if __name__ == '__main__':
    main()