/* ==========================================================
   AÑADIR RESPUESTAS A CATEGORÍAS EXISTENTES
   ----------------------------------------------------------
   Las categorías se fusionan por id, así que este bloque
   amplía las listas ya existentes sin reescribirlas.
   Todo lo añadido entra también en las variantes por letra,
   longitud, vocal inicial/final, etc.
   ========================================================== */

window.ANADIR_RESPUESTAS = function (EXTRA) {
  const porId = {};
  (window.CATEGORIAS || []).forEach(function (c) {
    if (!porId[c[0]]) porId[c[0]] = c;
  });

  Object.keys(EXTRA).forEach(function (id) {
    const base = porId[id];
    if (!base) {
      console.warn('Categoría desconocida en ampliación: ' + id);
      return;
    }
    window.CATEGORIAS.push([id, base[1], EXTRA[id]]);
  });
};
