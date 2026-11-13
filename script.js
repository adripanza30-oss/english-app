// 1. LOS DATOS — tu vocabulario
const vocabulario = [
  // --- Trabajo ---
  { en: 'outreach', es: 'alcance / contacto', ejemplo: "I'm doing outreach for guest posts this week.", categoria: 'trabajo' },
  { en: 'guest post', es: 'artículo invitado', ejemplo: "We'd love to contribute a guest post to your blog.", categoria: 'trabajo' },
  { en: 'backlink', es: 'enlace entrante', ejemplo: "This collaboration gives us a quality backlink.", categoria: 'trabajo' },
  { en: 'to follow up', es: 'dar seguimiento', ejemplo: "I'm following up on my previous email.", categoria: 'trabajo' },
  { en: 'draft', es: 'borrador', ejemplo: "I'll send you a draft by Friday.", categoria: 'trabajo' },
  { en: 'deadline', es: 'fecha límite', ejemplo: "The deadline is next Monday.", categoria: 'trabajo' },
  { en: 'to reach out', es: 'ponerse en contacto', ejemplo: "I'm reaching out to discuss a collaboration.", categoria: 'trabajo' },
  { en: 'availability', es: 'disponibilidad', ejemplo: "Please let me know your availability.", categoria: 'trabajo' },
  { en: 'attached', es: 'adjunto', ejemplo: "Please find the proposal attached.", categoria: 'trabajo' },
  { en: 'looking forward to', es: 'a la espera de', ejemplo: "Looking forward to hearing from you.", categoria: 'trabajo' },
  { en: 'pitch', es: 'propuesta / proponer una idea', ejemplo: "Pitch the idea first before writing the article.", categoria: 'trabajo' },
  { en: 'guidelines', es: 'directrices / normas', ejemplo: "Per their contributor guidelines, email the idea first.", categoria: 'trabajo' },
  { en: 'dofollow link', es: 'enlace dofollow (transmite autoridad SEO)', ejemplo: "Health media rarely give a free dofollow link.", categoria: 'trabajo' },
  { en: 'prospect', es: 'prospecto / cliente potencial', ejemplo: "The search didn't produce qualified prospects this week.", categoria: 'trabajo' },
  { en: 'to claim (a profile)', es: 'reclamar un perfil', ejemplo: "The profile hasn't been claimed, so no one controls it.", categoria: 'trabajo' },
  { en: 'outdated', es: 'desactualizado', ejemplo: "The description is outdated and needs correcting.", categoria: 'trabajo' },
  { en: 'to get listed', es: 'darse de alta / aparecer listado', ejemplo: "I'm building a list of directories for P5 to get listed in.", categoria: 'trabajo' },
  { en: 'byline', es: 'autoría (la firma del autor)', ejemplo: "A byline with my name, title and firm.", categoria: 'trabajo' },
  { en: 'to submit', es: 'enviar / presentar', ejemplo: "Submit the article in Word, not PDF.", categoria: 'trabajo' },
  { en: 'per', es: 'según / conforme a', ejemplo: "Noncommercial and instructional, per your guidelines.", categoria: 'trabajo' },
  { en: 'just let me know', es: 'solo avísame / házmelo saber', ejemplo: "Just let me know how you'd like to handle it.", categoria: 'trabajo' },
  { en: 'consistent with', es: 'en línea con / coherente con', ejemplo: "I'll keep the other directories consistent with your decision.", categoria: 'trabajo' },
  { en: 'subject line', es: 'línea de asunto (del correo)', ejemplo: "Subject line: Article idea — the content nobody finds.", categoria: 'trabajo' },
  { en: 'recipient', es: 'destinatario', ejemplo: "Recipient: Amara Rozgus, Editor in Chief.", categoria: 'trabajo' },
  { en: 'to handle', es: 'manejar / gestionar', ejemplo: "Just let me know how you'd like to handle it.", categoria: 'trabajo' },
  { en: 'wording', es: 'redacción / la forma exacta de escribirlo', ejemplo: "A short checklist with the exact wording to paste in.", categoria: 'trabajo' },
  { en: 'checklist', es: 'lista de verificación', ejemplo: "I put together a short checklist for you.", categoria: 'trabajo' },
  { en: 'outline', es: 'esquema / guion (de puntos)', ejemplo: "I can send an outline first if you'd rather judge it that way.", categoria: 'trabajo' },
  { en: 'abstract', es: 'resumen (de un texto)', ejemplo: "I can send an abstract before the full draft.", categoria: 'trabajo' },
  { en: 'disclaimer', es: 'aviso legal / descargo de responsabilidad', ejemplo: "The content cannot carry a required legal disclaimer.", categoria: 'trabajo' },
  { en: 'angle', es: 'enfoque / ángulo', ejemplo: "If that angle doesn't fit, here are two others.", categoria: 'trabajo' },
  { en: 'directory', es: 'directorio', ejemplo: "I'm building a list of directories to get listed in.", categoria: 'trabajo' },
  { en: 'qualified', es: 'cualificado / que cumple los requisitos', ejemplo: "The search didn't produce qualified prospects.", categoria: 'trabajo' },
  { en: 'to surface', es: 'hacer aparecer / sacar a la luz', ejemplo: "The process kept surfacing sites that failed the link check.", categoria: 'trabajo' },

  // --- Entrevistas ---
  { en: 'Thank you for having me', es: 'Gracias por recibirme / por la oportunidad', ejemplo: "Thank you for having me — I'm glad to be here.", categoria: 'entrevista' },
  { en: 'Could you repeat the question?', es: '¿Podría repetir la pregunta?', ejemplo: "Sorry, could you repeat the question, please?", categoria: 'entrevista' },
  { en: 'Let me think about that for a second', es: 'Déjame pensarlo un momento', ejemplo: "That's a great question — let me think about that for a second.", categoria: 'entrevista' },
  { en: 'I have experience with...', es: 'Tengo experiencia con/en...', ejemplo: "I have experience with SEO and link building.", categoria: 'entrevista' },
  { en: "I'd like to ask about...", es: 'Me gustaría preguntar sobre...', ejemplo: "I'd like to ask about the team I'd be working with.", categoria: 'entrevista' },

  // --- Llamadas ---
  { en: 'Can you hear me?', es: '¿Me escuchas / me oyen?', ejemplo: "Can you hear me okay now?", categoria: 'llamada' },
  { en: "The Wi-Fi is not working", es: 'El wifi no funciona', ejemplo: "Give me a second — the Wi-Fi is not working.", categoria: 'llamada' },
  { en: "You're breaking up", es: 'Se te corta (la señal)', ejemplo: "Sorry, you're breaking up — could you say that again?", categoria: 'llamada' },
  { en: "I think you're on mute", es: 'Creo que tienes el micrófono silenciado', ejemplo: "I think you're on mute — I can't hear you.", categoria: 'llamada' },
  { en: 'My internet is unstable', es: 'Mi internet está inestable', ejemplo: "My internet is a bit unstable today, sorry.", categoria: 'llamada' },
  { en: 'Let me reconnect', es: 'Déjame reconectarme', ejemplo: "The call is lagging — let me reconnect.", categoria: 'llamada' },
  { en: 'Can you see my screen?', es: '¿Ves mi pantalla?', ejemplo: "I'm sharing now — can you see my screen?", categoria: 'llamada' },

  // --- Día a día ---
  { en: 'Could you say that again, please?', es: '¿Podrías repetir, por favor?', ejemplo: "Sorry, could you say that again, please?", categoria: 'diario' },
  { en: 'How do you say ... in English?', es: '¿Cómo se dice... en inglés?', ejemplo: "How do you say 'propuesta' in English?", categoria: 'diario' },
  { en: "I'll get back to you", es: 'Te respondo luego / te aviso', ejemplo: "Let me check and I'll get back to you.", categoria: 'diario' },
  { en: 'Give me a moment', es: 'Dame un momento', ejemplo: "Give me a moment, please.", categoria: 'diario' },
];

// 2. AGARRAR los elementos del HTML
const palabra = document.getElementById('palabra');
const traduccion = document.getElementById('traduccion');
const ejemplo = document.getElementById('ejemplo');
const reverso = document.getElementById('reverso');
const btnVoltear = document.getElementById('btnVoltear');
const btnSiguiente = document.getElementById('btnSiguiente');
const tarjeta = document.getElementById('tarjeta');

let vocabularioFiltrado = vocabulario; // empieza mostrando todas

// 3. MOSTRAR una palabra al azar
function mostrarPalabra() {
  const i = Math.floor(Math.random() * vocabularioFiltrado.length);
  const ficha = vocabularioFiltrado[i];

  palabra.textContent = ficha.en;
  traduccion.textContent = ficha.es;
  ejemplo.textContent = ficha.ejemplo;

  tarjeta.classList.remove('volteada'); // esconde el reverso al cambiar
}

// 4. LOS BOTONES
btnVoltear.addEventListener('click', function() {
  tarjeta.classList.toggle('volteada');
});

btnSiguiente.addEventListener('click', function() {
  mostrarPalabra();
});

// 5. ARRANQUE: mostrar la primera palabra al cargar
mostrarPalabra();

// AUDIO: pronunciar la palabra en inglés
const btnAudio = document.getElementById('btnAudio');

btnAudio.addEventListener('click', function() {
  const voz = new SpeechSynthesisUtterance(palabra.textContent);
  voz.lang = 'en-US';   // acento de inglés de EE. UU.
  voz.rate = 0.9;       // un pelín más lento, para estudiar
  speechSynthesis.speak(voz);
});

// ESCRIBIR FRASES (con guardado en localStorage)
const miFrase = document.getElementById('miFrase');
const btnGuardar = document.getElementById('btnGuardar');
const listaFrases = document.getElementById('listaFrases');

// 1. Cargar las frases guardadas (o un array vacío si no hay nada)
let frasesGuardadas = JSON.parse(localStorage.getItem('misFrases')) || [];

// 2. Función para dibujar todas las frases en pantalla
function mostrarFrases() {
  listaFrases.innerHTML = ''; // limpia antes de redibujar
  frasesGuardadas.forEach(function(frase, indice) {
    const item = document.createElement('li');
    item.textContent = frase;

    // botón de borrar
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = '✕';
    btnBorrar.className = 'borrar-frase';
    btnBorrar.addEventListener('click', function() {
      frasesGuardadas.splice(indice, 1); // quita 1 frase en esa posición
      localStorage.setItem('misFrases', JSON.stringify(frasesGuardadas)); // actualiza el guardado
      mostrarFrases(); // redibuja la lista
    });

    item.appendChild(btnBorrar);
    listaFrases.appendChild(item);
  });
}

// 3. Mostrar lo que ya estaba guardado, al cargar la página
mostrarFrases();

// 4. Al guardar una frase nueva
btnGuardar.addEventListener('click', function() {
  const texto = miFrase.value.trim();
  if (texto === '') return;

  const fraseCompleta = `${palabra.textContent}: ${texto}`;
  frasesGuardadas.push(fraseCompleta); // la agrega al array
  localStorage.setItem('misFrases', JSON.stringify(frasesGuardadas)); // la guarda en el navegador

  mostrarFrases();   // redibuja la lista
  miFrase.value = ''; // limpia la cajita
});

// FILTROS por categoría
const filtroBtns = document.querySelectorAll('.filtro-btn');

filtroBtns.forEach(function(boton) {
  boton.addEventListener('click', function() {
    const cat = boton.dataset.cat;

    // 1. filtrar el vocabulario según la categoría
    if (cat === 'todas') {
      vocabularioFiltrado = vocabulario;
    } else {
      vocabularioFiltrado = vocabulario.filter(function(ficha) {
        return ficha.categoria === cat;
      });
    }

    // 2. marcar el botón activo (quitar a todos, poner al tocado)
    filtroBtns.forEach(function(b) { b.classList.remove('activo'); });
    boton.classList.add('activo');

    // 3. mostrar una palabra de la nueva categoría
    mostrarPalabra();
  });
});

// CORREGIR con LanguageTool
const btnCorregir = document.getElementById('btnCorregir');
const resultadoCorreccion = document.getElementById('resultadoCorreccion');

btnCorregir.addEventListener('click', async function() {
  const texto = miFrase.value.trim();
  if (texto === '') return;

  resultadoCorreccion.textContent = 'Revisando...';

  try {
    const respuesta = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'text=' + encodeURIComponent(texto) + '&language=en-US'
    });
    const datos = await respuesta.json();

    if (datos.matches.length === 0) {
      resultadoCorreccion.textContent = '✓ ¡Sin errores! Bien escrito.';
    } else {
      let mensaje = `Encontré ${datos.matches.length} sugerencia(s):\n`;
      datos.matches.forEach(function(m) {
        const sugerencia = m.replacements[0] ? m.replacements[0].value : '(sin sugerencia)';
        mensaje += `• ${m.message} → "${sugerencia}"\n`;
      });
      resultadoCorreccion.textContent = mensaje;
    }
  } catch (error) {
    resultadoCorreccion.textContent = 'No se pudo revisar. Revisa tu conexión.';
  }
});