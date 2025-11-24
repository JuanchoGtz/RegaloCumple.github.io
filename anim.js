// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "“Mujer virtuosa, ¿quién la hallará?" , time: 15 },
  { text: "Porque su estima sobrepasa largamente a las piedras preciosas.”", time: 18 }, // Prov 31:10 RVR1960

  { text: "“Ella está vestida de fortaleza y dignidad,”", time: 27 },
  { text: "“y se ríe sin temor al futuro.”", time: 32 }, // Prov 31:25 NTV

  { text: "“Sus hijos se levantan y la bendicen;”", time: 41 },
  { text: "“su esposo la alaba.”", time: 47 }, // Prov 31:28 NTV

  { text: "“Muchas mujeres han hecho el bien,”", time: 54 },
  { text: "“pero tú las sobrepasas a todas.”", time: 59 }, // Prov 31:29 RVR1960

  { text: "“Charm is deceptive, and beauty does not last;”", time: 67 },
  { text: "“but a woman who fears the Lord will be greatly praised.”", time: 72 }, // Prov 31:30 NTV (en inglés, bonito contraste)
  
  { text: "“El Señor te bendiga y te guarde.”", time: 78 }, // Num 6:24 RVR1960
  { text: "“Haga resplandecer su rostro sobre ti.”", time: 83 }, // Num 6:25
  
  { text: "“El Señor es mi pastor; nada me faltará.”", time: 91 }, // Salmo 23:1 RVR1960

  { text: "“Dios está en medio de ella;”", time: 97 },
  { text: "“no será conmovida.”", time: 104 }, // Salmo 46:5 RVR1960

  { text: "“Todo lo puedo en Cristo que me fortalece.”", time: 108 }, // Fil 4:13 RVR1960

  { text: "“Porque yo sé los planes que tengo para ti,” dice el Señor.", time: 144 },
  { text: "“planes de bienestar y no de calamidad,”", time: 148 },
  { text: "“para darte un futuro y una esperanza.”", time: 153 }, // Jeremías 29:11 NTV

  { text: "“El Señor es bueno;”", time: 158 },
  { text: "“su fiel amor perdura para siempre.”", time: 164 }, // Salmo 100:5 NTV

  { text: "“Dios es amor.”", time: 169 }, // 1 Juan 4:8
  { text: "“Y el amor nunca falla.”", time: 176 }, // 1 Cor 13:8

  { text: "“Gracias mamá.”", time: 183 },
  { text: "“Con amor ❤️”", time: 188 },
  { text: "Tu hijo Juancho.", time: 194 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);