// 1. LOS DATOS — tu vocabulario
const vocabulario = [
  { en: 'outreach', es: 'alcance / contacto', ejemplo: "I'm doing outreach for guest posts this week." },
  { en: 'guest post', es: 'artículo invitado', ejemplo: "We'd love to contribute a guest post to your blog." },
  { en: 'backlink', es: 'enlace entrante', ejemplo: "This collaboration gives us a quality backlink." },
  { en: 'to follow up', es: 'dar seguimiento', ejemplo: "I'm following up on my previous email." },
  { en: 'draft', es: 'borrador', ejemplo: "I'll send you a draft by Friday." },
  { en: 'deadline', es: 'fecha límite', ejemplo: "The deadline is next Monday." },
  { en: 'to reach out', es: 'ponerse en contacto', ejemplo: "I'm reaching out to discuss a collaboration." },
  { en: 'availability', es: 'disponibilidad', ejemplo: "Please let me know your availability." },
  { en: 'attached', es: 'adjunto', ejemplo: "Please find the proposal attached." },
  { en: 'looking forward to', es: 'a la espera de', ejemplo: "Looking forward to hearing from you." },
    { en: 'pitch', es: 'propuesta / proponer una idea', ejemplo: "Pitch the idea first before writing the article." },
  { en: 'guidelines', es: 'directrices / normas', ejemplo: "Per their contributor guidelines, email the idea first." },
  { en: 'dofollow link', es: 'enlace dofollow (transmite autoridad SEO)', ejemplo: "Health media rarely give a free dofollow link." },
  { en: 'prospect', es: 'prospecto / cliente potencial', ejemplo: "The search didn't produce qualified prospects this week." },
  { en: 'to claim (a profile)', es: 'reclamar un perfil', ejemplo: "The profile hasn't been claimed, so no one controls it." },
  { en: 'outdated', es: 'desactualizado', ejemplo: "The description is outdated and needs correcting." },
  { en: 'to get listed', es: 'darse de alta / aparecer listado', ejemplo: "I'm building a list of directories for P5 to get listed in." },
  { en: 'byline', es: 'autoría (la firma del autor)', ejemplo: "A byline with my name, title and firm." },
  { en: 'to submit', es: 'enviar / presentar', ejemplo: "Submit the article in Word, not PDF." },
  { en: 'per', es: 'según / conforme a', ejemplo: "Noncommercial and instructional, per your guidelines." },
  { en: 'just let me know', es: 'solo avísame / házmelo saber', ejemplo: "Just let me know how you'd like to handle it." },
  { en: 'consistent with', es: 'en línea con / coherente con', ejemplo: "I'll keep the other directories consistent with your decision." },
    { en: 'subject line', es: 'línea de asunto (del correo)', ejemplo: "Subject line: Article idea — the content nobody finds." },
  { en: 'recipient', es: 'destinatario', ejemplo: "Recipient: Amara Rozgus, Editor in Chief." },
  { en: 'to handle', es: 'manejar / gestionar', ejemplo: "Just let me know how you'd like to handle it." },
  { en: 'wording', es: 'redacción / la forma exacta de escribirlo', ejemplo: "A short checklist with the exact wording to paste in." },
  { en: 'checklist', es: 'lista de verificación', ejemplo: "I put together a short checklist for you." },
  { en: 'outline', es: 'esquema / guion (de puntos)', ejemplo: "I can send an outline first if you'd rather judge it that way." },
  { en: 'abstract', es: 'resumen (de un texto)', ejemplo: "I can send an abstract before the full draft." },
  { en: 'disclaimer', es: 'aviso legal / descargo de responsabilidad', ejemplo: "The content cannot carry a required legal disclaimer." },
  { en: 'angle', es: 'enfoque / ángulo', ejemplo: "If that angle doesn't fit, here are two others." },
  { en: 'directory', es: 'directorio', ejemplo: "I'm building a list of directories to get listed in." },
  { en: 'qualified', es: 'cualificado / que cumple los requisitos', ejemplo: "The search didn't produce qualified prospects." },
  { en: 'to surface', es: 'hacer aparecer / sacar a la luz', ejemplo: "The process kept surfacing sites that failed the link check." },
    // --- Entrevistas ---
  { en: 'Thank you for having me', es: 'Gracias por recibirme / por la oportunidad', ejemplo: "Thank you for having me — I'm glad to be here." },
  { en: 'Could you repeat the question?', es: '¿Podría repetir la pregunta?', ejemplo: "Sorry, could you repeat the question, please?" },
  { en: 'Let me think about that for a second', es: 'Déjame pensarlo un momento', ejemplo: "That's a great question — let me think about that for a second." },
  { en: 'I have experience with...', es: 'Tengo experiencia con/en...', ejemplo: "I have experience with SEO and link building." },
  { en: "I'd like to ask about...", es: 'Me gustaría preguntar sobre...', ejemplo: "I'd like to ask about the team I'd be working with." },

  // --- Problemas de conexión / videollamadas ---
  { en: 'Can you hear me?', es: '¿Me escuchas / me oyen?', ejemplo: "Can you hear me okay now?" },
  { en: "The Wi-Fi is not working", es: 'El wifi no funciona', ejemplo: "Give me a second — the Wi-Fi is not working." },
  { en: "You're breaking up", es: 'Se te corta (la señal)', ejemplo: "Sorry, you're breaking up — could you say that again?" },
  { en: "I think you're on mute", es: 'Creo que tienes el micrófono silenciado', ejemplo: "I think you're on mute — I can't hear you." },
  { en: 'My internet is unstable', es: 'Mi internet está inestable', ejemplo: "My internet is a bit unstable today, sorry." },
  { en: 'Let me reconnect', es: 'Déjame reconectarme', ejemplo: "The call is lagging — let me reconnect." },
  { en: 'Can you see my screen?', es: '¿Ves mi pantalla?', ejemplo: "I'm sharing now — can you see my screen?" },

  // --- Día a día / básicas ---
  { en: 'Could you say that again, please?', es: '¿Podrías repetir, por favor?', ejemplo: "Sorry, could you say that again, please?" },
  { en: 'How do you say ... in English?', es: '¿Cómo se dice... en inglés?', ejemplo: "How do you say 'propuesta' in English?" },
  { en: "I'll get back to you", es: 'Te respondo luego / te aviso', ejemplo: "Let me check and I'll get back to you." },
  { en: 'Give me a moment', es: 'Dame un momento', ejemplo: "Give me a moment, please." },
];

// 2. AGARRAR los elementos del HTML
const palabra = document.getElementById('palabra');
const traduccion = document.getElementById('traduccion');
const ejemplo = document.getElementById('ejemplo');
const reverso = document.getElementById('reverso');
const btnVoltear = document.getElementById('btnVoltear');
const btnSiguiente = document.getElementById('btnSiguiente');
const tarjeta = document.getElementById('tarjeta');

// 3. MOSTRAR una palabra al azar
function mostrarPalabra() {
  const i = Math.floor(Math.random() * vocabulario.length);
  const ficha = vocabulario[i];

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

// ESCRIBIR FRASES
const miFrase = document.getElementById('miFrase');
const btnGuardar = document.getElementById('btnGuardar');
const listaFrases = document.getElementById('listaFrases');

btnGuardar.addEventListener('click', function() {
  const texto = miFrase.value.trim();

  if (texto === '') return; // si está vacía, no hace nada

  const item = document.createElement('li');
  item.textContent = `${palabra.textContent}: ${texto}`;
  listaFrases.appendChild(item);

  miFrase.value = ''; // limpia la cajita
});