# Plan de Implementación - Zipbird - Segunda Gran Actualización

## Análisis del Estado Actual

### ✅ Funcionalidades que YA funcionan bien:
- Sistema de preguntas por dificultad (Fácil 30s, Medio 25s, Difícil 20s)
- Puntuación y altitud (7 preguntas, 1000m por acierto)
- Rarezas: muy-común(10), poco-común(25), raro(45), muy-raro(70), legendario(100)
- 5 zonas de altitud: CIELO(0-999), MONTAÑAS(1000-2499), ESTRATOSFERA(2500-3999), ESPACIO(4000-5499), UNIVERSO(5500-7000)
- Sistema de combos básico (x1 a x5)
- 12 logros definidos con iconos SVG
- Toast notifications para logros
- Pantalla de logros (overlay + pantalla dedicada)
- Persistencia localStorage (récords, dificultad, logros)
- Sonidos Web Audio API
- PWA completo con cache-first
- Animaciones base del pájaro (aleteo, balanceo, estela)

### ❌ Problemas Identificados:
1. **Temporizadores inconsistentes**: Instrucciones dicen "25 segundos" pero Fácil=30s, Medio=25s, Difícil=20s
2. **Contador 0/0 en logros**: `logrosDesbloqueadosSet` se carga pero el contador muestra 0/0
3. **Combo system básico**: Falta visibilidad, multiplicadores progresivos, animaciones en hitos
4. **Animaciones del pájaro limitadas**: Sin reacciones específicas a aciertos/fallos, sin animación de palabra legendaria
5. **Transiciones bruscas**: Entre preguntas, zonas, fin de partida
6. **Falta feedback visual**: No hay contador visible de combo durante partida, no hay celebración de récords

---

## FASE 1: Correcciones Críticas (Temporizadores + Logros 0/0)

### 1.1 Fix Instrucciones vs Tiempos Reales
- **Archivo**: `index.html` línea 245: cambiar "25 segundos cada una" por texto dinámico
- **Archivo**: `game.js` función `inicializarDificultad()` actualizar texto del menú de ayuda

### 1.2 Fix Contador 0/0 Logros
- **Problema**: `cargarLogros()` se llama antes de que `LOGROS` esté definido o hay race condition
- **Archivo**: `game.js` - verificar orden de inicialización en DOMContentLoaded

### 1.3 Fix Temporizador Nunca se Desincronice
- **Archivo**: `game.js` - `iniciarTemporizador()` / `tiempoAgotado()` / `enviarRespuesta()`
- Asegurar `clearInterval` en TODOS los paths de salida
- Proteger contra doble envío con `transicionandoPregunta` flag

---

## FASE 2: Sistema de Combos Mejorado

### 2.1 HUD Combo Visible Siempre (no solo x2+)
- **Archivo**: `style.css` - `.hud-combo.activo` mostrar desde combo 1
- **Archivo**: `game.js` - `actualizarCombo()` mostrar siempre

### 2.2 Multiplicadores Progresivos Balanceados
```
Combo 1-2:  x1
Combo 3-4:  x2
Combo 5-7:  x3
Combo 8-10: x4
Combo 11+:  x5
```

### 2.3 Animaciones en Hitos de Combo
- x3: Partículas amarillas + "¡COMBO x3!"
- x5: Explosión dorada + "¡COMBO x5!"
- x10: Efecto especial + "¡COMBO x10!"
- x15: Efecto legendario + "¡COMBO x15!"

### 2.4 Notificación al Romper Combo
- Shake animation en HUD
- Partículas "rotas" cayendo
- Texto "Combo roto"

### 2.5 Bonificaciones por Rareza en Combo
- Legendario en combo: +50% puntos extra
- Muy raro en combo: +25% puntos extra

---

## FASE 3: Animaciones del Pájaro - Personalidad

### 3.1 Aleteo Durante Vuelo (ya existe, mejorar fluidez)
- Mantener animación `balanceo` y `frame-arr/frame-abj`
- Añadir variación aleatoria de velocidad

### 3.2 Movimiento Vertical al Ganar Altitud
- Ya existe `.trepando` con transición steps(14)
- Suavizar con cubic-bezier en lugar de steps

### 3.3 Reacción al Acertar (`.acertando`)
- Ya definida en CSS: rotación + escala + glow
- Añadir variación según rareza

### 3.4 Reacción al Fallar
- **NUEVA**: `.fallando` - shake + rojo + cabeza baja
- **Archivo**: `style.css` + `game.js` `sonidoFallo()`

### 3.5 Animación Palabra Extraordinaria (legendario/muy-raro)
- **NUEVA**: `.rara-legendaria` mejorada - pulso dorado/rosa intenso
- Partículas explosión extendida

### 3.6 Animación Nueva Zona (`.nivel-subida`)
- Ya existe - mejorar con más frames

### 3.7 Celebración Récord (`.celebrando`)
- Ya definida en CSS
- Activar en `terminarPartida()` si `nuevoRecord`

### 3.8 Animación Final de Partida
- **NUEVA**: Secuencia de celebración al terminar
- Pájaro da vueltas, confeti, etc.

---

## FASE 4: Sistema de Altitud y Zonas - Expandido

### 4.1 Zonas Diferenciadas Visuales (usar recursos existentes)
1. **CIELO** (0-999m): Globos + nubes bajas ✅
2. **MONTAÑAS** (1000-2499m): Capa montañas + nubes medias ✅
3. **ESTRATOSFERA** (2500-3999m): Capa estratosfera + aviones ✅
4. **ESPACIO** (4000-5499m): Cohetes + órbita + satélites ✅
5. **UNIVERSO** (5500-7000m): Planetas + galaxias ✅

### 4.2 Transiciones Visuales al Cambiar Zona
- Flash de pantalla con color de zona ✅ (parcial)
- Banner "NUEVA ZONA · NOMBRE" ✅
- Animación pájaro `.nivel-subida` ✅
- **MEJORAR**: Partículas de transición, sonido único por zona

### 4.3 Indicador de Zona Mejorado
- Mostrar siempre (no solo 2.5s)
- Progreso dentro de zona (barra mini)
- Nombre zona + rango altitud

### 4.4 Logros de Explorador por Zona
- Ya implementados en `comprobarLogro()`
- Verificar que se disparan correctamente

---

## FASE 5: Sala de Trofeos - Completa

### 5.1 Grid de Logros Funcional
- **Verificar**: `renderizarGridLogros()` muestra todos los 12 logros
- **Fix**: Contador `desbloqueados / total` correcto
- **Fix**: Logros bloqueados (gris, ?) vs desbloqueados (color, ✓)

### 5.2 Detalle de Cada Logro
- Icono SVG
- Nombre
- Descripción
- Requisito (texto explicativo)
- Fecha desbloqueo (si aplica)

### 5.3 Notificaciones Toast Mejoradas
- Animación entrada/salida suave
- Sonido único
- Auto-dismiss 3s

### 5.4 Persistencia Correcta
- `guardarLogros()` / `cargarLogros()` funcionando
- Verificar localStorage key: `'vueloLogros'`

---

## FASE 6: Pulido General y QA

### 6.1 7 Preguntas por Partida - Verificar
- `TOTAL_PREGUNTAS = 7`
- `preguntasPartida` se llena con 7 items
- Loop `siguientePregunta()` llega a 7

### 6.2 Sin Respuesta Doble
- Flag `respuestaDada` + `transicionandoPregunta`
- `btnAccion.disabled = true` tras envío

### 6.3 Temporizador en Transiciones
- `clearInterval` ANTES de `setTimeout(siguientePregunta)`
- No seguir descontando durante feedback

### 6.4 Errores No Provocan Reinicios
- Try/catch en localStorage
- Validación de datos cargados

### 6.5 Tiempo Claro
- Barra visual + número (opcional)
- Urgente ≤5s (rojo) ✅

---

## Archivos a Modificar (Orden de Prioridad)

1. **game.js** - Lógica principal (combos, zonas, logros, temporizadores, animaciones pájaro)
2. **style.css** - Animaciones nuevas, efectos visuales, HUD combo, transiciones
3. **index.html** - Textos instrucciones, pequeños ajustes estructura
4. **validacion-avanzada.js** - Solo si hay bugs en validación (probablemente no)

---

## Checklist de Verificación Final

- [ ] Fácil: 30s, Medio: 25s, Difícil: 20s - Instrucciones coinciden
- [ ] 7 preguntas exactas por partida
- [ ] Temporizador nunca desincronizado
- [ ] No doble respuesta posible
- [ ] Logros: contador correcto (ej: 3/12), no 0/0
- [ ] Logros persisten al cerrar app
- [ ] Combo visible desde 1, multiplicadores correctos
- [ ] Animaciones hitos combo (x3, x5, x10, x15)
- [ ] Notificación combo roto
- [ ] Pájaro: aleteo, reacciones acierto/fallo, legendaria, zona, récord, final
- [ ] 5 zonas visuales distintas funcionando
- [ ] Transiciones zona suaves con feedback
- [ ] Sala trofeos completa con detalle
- [ ] PWA offline funcional
- [ ] Sin regresiones visuales (paleta, tipografía, pájaro intactos)