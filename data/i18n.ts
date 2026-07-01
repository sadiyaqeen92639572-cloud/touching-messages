export interface LocalizedContent {
  title: string;
  description: string;
  h1: string;
  introduction: string;
  relatedKeywords: string[];
  faqs: { question: string; answer: string }[];
}

export interface LocalizedMessage {
  id: string;
  title: string;
  body: string;
}

export const I18N_DATA: Record<string, {
  name: string;
  pillar: LocalizedContent;
  categories: Record<string, LocalizedContent>;
  messages: Record<string, { title: string; body: string }>;
  ui: Record<string, string>;
}> = {
  en: {
    name: "English",
    pillar: {
      title: "Heart Touching Love Messages — The Ultimate Romantic Anthology",
      description: "An extensive, 2000+ word poetic guide featuring the most emotional, heartfelt, and touching love messages ever composed. Melt your partner's heart today.",
      h1: "The Ultimate Hub of Heart Touching Love Messages",
      introduction: "Welcome to the ultimate digital sanctuary of heart touching love messages. Love is the most powerful force in the human experience, yet articulating its depth often leaves us searching for words. This comprehensive pillar guide stands as a broad authority page, gathering the most emotionally rich, poetic, and authentic love messages ever written. Within this romantic anthology, you will find targeted clusters covering every conceivable relationship, tone, and occasion. From deep, heart-melting paragraphs that make her cry tears of joy, to comforting long-distance assurances, and sincere apologies to heal after an argument—every letter and paragraph is crafted with a modern-vintage editorial grace. Our mission is to banish repetitive, robotic AI cliches and provide a safe space where words carry the genuine warmth of human touch.",
      relatedKeywords: [
        "touching love messages for her",
        "heart touching love messages for boyfriend",
        "touching love messages to make him cry after fight",
        "long distance love paragraphs",
        "heart touching love messages to melt her heart"
      ],
      faqs: [
        {
          question: "What makes a love message truly heart-touching?",
          answer: "A heart-touching message avoids generic platitudes and focuses on raw emotional honesty, vulnerability, specific qualities you cherish in your partner, and describing how their presence changes your worldview."
        },
        {
          question: "How can I customize these messages for my partner?",
          answer: "You can use our interactive Style Workshop directly on this platform to change fonts, colors, and decorative backdrops, or use our server-side AI Writer to generate notes with specific mutual memories."
        }
      ]
    },
    categories: {
      "for-her": {
        title: "200 Heart Touching Love Messages for Her — Melt Her Heart",
        description: "Discover a curated list of touching love messages for her. Words designed to melt her heart, express deep adoration, and strengthen your beautiful bond.",
        h1: "200 Heart Touching Love Messages for Her to Melt Her Heart",
        introduction: "Finding the exact words to express how much she means to you can be a challenging journey. When you love a woman deeply, standard texts often fail to convey the profound admiration, reverence, and gratitude nestled inside your chest. That is why we have crafted this elegant anthology of touching love messages for her. Every message in this guide acts as a gentle whisper, designed to remind her of her irreplaceable place in your universe.",
        relatedKeywords: [
          "touching love messages for her to make her cry",
          "heart touching love messages to melt her heart",
          "200 heart touching love messages for her"
        ],
        faqs: [
          {
            question: "How do I make her feel special with a message?",
            answer: "Speak to her specific qualities, acknowledge her inner beauty and strength, and express gratitude for her presence in your life. Use personal details."
          }
        ]
      },
      "for-him": {
        title: "Heart Touching Love Messages for Him — Poetic Devotion",
        description: "Explore deeply moving heart touching love messages for him. Express your love, admiration, and gratitude to the special man in your life with elegance.",
        h1: "Heart Touching Love Messages for Him to Connect Deeply",
        introduction: "Men are often praised for their physical strength or silent resilience, yet their hearts crave the soft, nurturing power of romantic validation just as much as anyone else. Finding the space to articulate your devotion to him can strengthen your connection in ways that actions alone cannot.",
        relatedKeywords: [
          "heart touching love messages for boyfriend",
          "heart touching love messages for him",
          "romantic words for husband"
        ],
        faqs: [
          {
            question: "What should I write to make him feel deeply appreciated?",
            answer: "Highlight his protective strength, express how safe you feel in his arms, and praise his character, laughter, and support."
          }
        ]
      }
    },
    messages: {},
    ui: {
      "nav_title": "Heartfelt Atelier",
      "pwa_install": "Install App",
      "pwa_installed": "App Installed",
      "pwa_prompt": "Add to Home Screen",
      "all_categories": "All Categories",
      "back_home": "Back to Home",
      "copy": "Copy",
      "copied": "Copied!",
      "listen": "Listen",
      "stop": "Stop",
      "customize": "Customize",
      "related_topics": "Related Topics",
      "faqs_title": "Frequently Asked Questions",
      "read_time": "Read Time",
      "minutes": "mins",
      "likes": "Likes",
      "select_lang": "Language",
      "hreflang_notice": "Switch language to Spanish"
    }
  },
  es: {
    name: "Español",
    pillar: {
      title: "Mensajes de Amor que Tocan el Corazón — La Antología Romántica Definitiva",
      description: "Una extensa guía poética con los mensajes de amor más emotivos, sinceros y profundos jamás escritos. Derrite el corazón de tu pareja hoy mismo.",
      h1: "La Antología Definitiva de Mensajes de Amor que Tocan el Corazón",
      introduction: "Bienvenido al santuario digital definitivo de mensajes de amor que tocam el corazón. El amor es la fuerza más poderosa de la experiencia humana, pero articular su profundidad a menudo nos deja buscando palabras. Esta guía integral reúne los mensajes de amor más ricos emocionalmente, poéticos y auténticos jamás creados. Dentro de esta antología romántica, encontrarás grupos específicos que cubren cada tipo de relación, tono y ocasión. Desde párrafos profundos que hacen llorar de alegría, hasta tiernas palabras para la distancia o disculpas sinceras tras una discusión: cada frase está diseñada con gracia editorial. Nuestra misión es desterrar los clichés repetitivos y ofrecer un espacio donde las palabras transmitan la calidez del toque humano.",
      relatedKeywords: [
        "mensajes de amor que tocan el corazón",
        "frases de amor para mi novio",
        "párrafos de amor para mi novia",
        "cartas de amor a distancia",
        "mensajes sinceros de disculpa"
      ],
      faqs: [
        {
          question: "¿Qué hace que un mensaje de amor realmente toque el corazón?",
          answer: "Evita las frases hechas y se enfoca en la honestidad emocional pura, la vulnerabilidad y las cualidades únicas que valoras en tu pareja."
        },
        {
          question: "¿Cómo puedo personalizar estos mensajes para mi pareja?",
          answer: "Puedes usar nuestro Taller de Estilo interactivo para cambiar fuentes, colores y fondos decorativos, o usar nuestro Generador para incluir recuerdos compartidos."
        }
      ]
    },
    categories: {
      "for-her": {
        title: "Mensajes de Amor para Ella que Tocan el Corazón — Derretir su Corazón",
        description: "Descubre hermosos mensajes de amor para ella. Palabras diseñadas para derretir su corazón, expresar una profunda adoración y fortalecer su bello vínculo.",
        h1: "Mensajes de Amor para Ella que Tocan el Corazón",
        introduction: "Encontrar las palabras exactas para expresar cuánto significa ella para ti puede ser un viaje desafiante. Cuando amas a una mujer profundamente, los textos estándar no logran transmitir la admiración y la gratitud que llevas en el pecho. Por eso, hemos creado esta selecta colección. Cada mensaje actúa como un susurro tierno, diseñado para recordarle su lugar insustituible en tu universo.",
        relatedKeywords: [
          "mensajes de amor para hacer llorar a mi novia",
          "mensajes para derretir el corazón de una mujer",
          "textos de amor profundos para ella"
        ],
        faqs: [
          {
            question: "¿Cómo hago para que ella se sienta verdaderamente especial?",
            answer: "Menciona sus virtudes únicas, reconoce su belleza interior y expresa gratitud por tenerla en tu vida cotidiana."
          }
        ]
      },
      "for-him": {
        title: "Mensajes de Amor para Él que Tocan el Corazón — Devoción Poética",
        description: "Explora profundos mensajes de amor para él. Expresa tu devoción, admiración y gratitud al hombre especial de tu vida con absoluta elegancia.",
        h1: "Mensajes de Amor para Él que Tocan el Corazón",
        introduction: "A menudo se elogia a los hombres por su fuerza física o resistencia silenciosa, pero sus corazones también anhelan el poder reconfortante de la validación romántica. Darte el tiempo para articular tu devoción fortalece el vínculo de una manera que las acciones por sí solas no pueden.",
        relatedKeywords: [
          "mensajes de amor para mi novio largos",
          "palabras de amor para mi esposo",
          "textos románticos para él"
        ],
        faqs: [
          {
            question: "¿Qué puedo escribir para que se sienta profundamente apreciado?",
            answer: "Destaca su fuerza protectora, describe lo segura que te sientes en sus brazos y elogia su carácter, su risa y su constante apoyo."
          }
        ]
      },
      "long-distance": {
        title: "Mensajes de Amor a Distancia — Uniendo Corazones",
        description: "Cruza las millas con emotivos mensajes de amor a distancia. Palabras sinceras y poéticas para mantener viva la llama sin importar los kilómetros.",
        h1: "Mensajes de Amor a Distancia para Unir Sus Corazones",
        introduction: "La distancia física es solo una prueba de lo lejos que puede viajar el amor. Cada milla que nos separa es un testimonio de la fuerza de nuestro lazo. Dormir pensando en ti, sabiendo que el mañana nos acerca un paso más, hace que la espera valga la pena.",
        relatedKeywords: [
          "mensajes de amor a distancia para llorar",
          "párrafos de amor de lejos",
          "frases bonitas de amor a distancia"
        ],
        faqs: [
          {
            question: "¿Cómo mantener fuerte la conexión a distancia?",
            answer: "Envía mensajes constantes y detallados sobre tu día y tus sentimientos, haciéndole partícipe de tu rutina diaria."
          }
        ]
      },
      "reconciliation-after-a-fight": {
        title: "Mensajes de Reconciliación tras una Pelea — Sanar el Vínculo",
        description: "Restaura la cercanía emocional y sana el distanciamiento con mensajes de reconciliación tras una discusión. Palabras sinceras para volver a empezar.",
        h1: "Mensajes de Reconciliación para Sanar tras una Discusión",
        introduction: "Los desacuerdos son comunes en cualquier relación cercana, pero la verdadera prueba del amor es cómo encontramos el camino de regreso. Sanar un distanciamiento es dejar de lado el orgullo y dar prioridad a la hermosa relación que han construido juntos.",
        relatedKeywords: [
          "mensajes para pedir perdón a mi pareja",
          "palabras para reconciliarse después de pelear",
          "textos de amor después de una discusión"
        ],
        faqs: [
          {
            question: "¿Cómo reconciliarse a través de un mensaje?",
            answer: "Reconoce el valor de la relación, expresa tu disposición para escuchar y sanar, y valida los sentimientos de tu pareja sin culparla."
          }
        ]
      },
      "for-girlfriend": {
        title: "Mensajes de Amor para mi Novia — Derretir su Corazón de Amor",
        description: "Expresa tu adoración absoluta y pasión romántica con hermosos mensajes de amor para tu novia. Cópialos, personalízalos y hazla feliz.",
        h1: "Mensajes de Amor para tu Novia que Tocan el Alma",
        introduction: "Tu novia es tu reina, tu confidente y tu fuente de inspiración romántica. Enviarle un párrafo emotivo es una manera maravillosa de mantener encendido el fuego de la pasión y hacerla sentir plenamente valorada y adorada.",
        relatedKeywords: [
          "párrafos de amor para mi novia largos",
          "mensajes dulces para enviarle a mi novia",
          "frases románticas para enamorar más a mi novia"
        ],
        faqs: [
          {
            question: "¿Qué puedo mensajearle para que se sienta especial?",
            answer: "Elogia sus virtudes únicas, recuérdale un hermoso recuerdo compartido y dile cuánto ha enriquecido tu vida diaria."
          }
        ]
      },
      "valentines-day": {
        title: "Mensajes de San Valentín para Él y Ella — Amor Puro",
        description: "Celebra el romance con conmovedores mensajes de San Valentín. Encuentra las palabras perfectas para tu novio, novia, esposo o esposa el 14 de febrero.",
        h1: "Mensajes de San Valentín que Tocan el Corazón",
        introduction: "El Día de San Valentín es la celebración universal del amor, pero encontrar un mensaje que destaque entre los clichés puede ser un desafío. Ya sea que escribas una tarjeta para tu cónyuge de muchos años o un dulce texto para tu nueva pareja, esta colección está diseñada para capturar la emoción auténtica.",
        relatedKeywords: ["mensajes de san valentin para ella", "mensajes de san valentin para mi novio", "feliz dia de los enamorados"],
        faqs: [{ question: "¿Qué debo escribir en una tarjeta de San Valentín?", answer: "Incluye un saludo dulce, menciona un recuerdo específico del último año y expresa tu emoción por el futuro juntos." }]
      },
      "i-miss-you": {
        title: "Mensajes de Te Extraño — Frases Emotivas de Ausencia",
        description: "Envía mensajes emotivos de te extraño a tu pareja. Ya sea por un viaje o un día ocupado, estas frases acortan la distancia.",
        h1: "Mensajes Emotivos de 'Te Extraño' para Acortar la Distancia",
        introduction: "La ausencia física de la persona que amas puede dejar un profundo dolor en tu pecho. Ya sea por un corto viaje de negocios o un día ocupado, enviar un mensaje de 'te extraño' es una forma poderosa de recordarles que están constantemente en tu mente.",
        relatedKeywords: ["mensajes de te extraño", "frases para decir te extraño", "te echo de menos amor"],
        faqs: [{ question: "¿Cómo decir te extraño sin sonar desesperado?", answer: "Enfócate en la añoranza positiva. Dile cuánto ilumina tu día su presencia y lo emocionado que estás de volver a verle." }]
      },
      "anniversary": {
        title: "Mensajes de Feliz Aniversario que Tocan el Corazón",
        description: "Celebra su hito con conmovedores mensajes de feliz aniversario. Frases perfectas para él, ella, esposo o esposa.",
        h1: "Mensajes de Feliz Aniversario para Celebrar su Amor",
        introduction: "Un aniversario es un hermoso hito: un día para hacer una pausa, reflexionar y celebrar el viaje que han construido juntos. Ya sea el primer año de novios o las bodas de oro, encontrar las palabras adecuadas es esencial para honrar su historia compartida.",
        relatedKeywords: ["mensaje de feliz aniversario", "frases de aniversario para mi esposo", "textos de aniversario de bodas"],
        faqs: [{ question: "¿Cuál es el mejor mensaje para un aniversario?", answer: "El mejor mensaje reconoce el paso del tiempo, celebra el crecimiento de la relación y reafirma sus votos." }]
      },
      "for-husband": {
        title: "Mensajes de Amor Profundo para mi Esposo — Textos Románticos",
        description: "Expresa tu devoción con mensajes profundos para tu esposo. Textos románticos diseñados para que se sienta verdaderamente apreciado.",
        h1: "Mensajes Profundamente Románticos para tu Esposo",
        introduction: "El matrimonio es un viaje profundo de asociación, crecimiento y compromiso duradero. En medio de la rutina diaria, es fácil olvidar romancear al hombre con el que te casaste. Estos mensajes están escritos con un tono de aprecio profundo y amor establecido.",
        relatedKeywords: ["mensajes de amor para mi esposo", "textos romanticos para mi marido", "palabras lindas para mi esposo"],
        faqs: [{ question: "¿A los esposos les gustan los mensajes románticos?", answer: "¡Sí! Un texto romántico validando sus esfuerzos y expresando tu amor lo anima muchísimo." }]
      },
      "for-wife": {
        title: "Mensajes de Amor para mi Esposa que Tocan el Corazón",
        description: "Derrite su corazón con conmovedores mensajes de amor para tu esposa. Párrafos para recordarle que es la reina de tu vida.",
        h1: "Mensajes de Amor para Adorar a tu Esposa",
        introduction: "Tu esposa es la piedra angular de tu vida, tu confidente más confiable y la mujer que mantiene unida a tu familia. Enviar mensajes de amor que tocan el corazón es una de las maneras más efectivas de hacerla sentir hermosa y profundamente valorada.",
        relatedKeywords: ["mensajes de amor para mi esposa", "textos romanticos para ella", "frases lindas para mi mujer"],
        faqs: [{ question: "¿Cómo puedo romancear a mi esposa con palabras?", answer: "Reconoce el trabajo invisible que hace, elogia su belleza y dile que elegirla fue la mejor decisión de tu vida." }]
      },
      "i-love-you": {
        title: "Mensajes de Te Amo — Formas Creativas de Decirlo",
        description: "Encuentra formas creativas de decir Te Amo. Explora mensajes y textos cortos, profundos y conmovedores para derretir su corazón.",
        h1: "Hermosos Mensajes de 'Te Amo' y Formas Creativas de Decirlo",
        introduction: "La frase 'te amo' contiene la emoción más poderosa en el lenguaje humano, pero decir las mismas tres palabras todos los días puede diluir su magia. Si buscas formas creativas, profundas y conmovedoras de decirlo, has llegado al lugar indicado.",
        relatedKeywords: ["mensajes de te amo", "formas de decir te amo", "frases de amor profundas"],
        faqs: [{ question: "¿Cuál es una forma profunda de decir te amo?", answer: "Decir 'te amo' profundamente implica explicar el 'por qué' y el 'cómo', como 'amo la forma en que me das paz'." }]
      },
      "good-night": {
        title: "Textos Románticos de Buenas Noches — Dulces Sueños",
        description: "Envía románticos textos de buenas noches para él y ella. Asegúrate de ser lo último en su mente con estos dulces mensajes.",
        h1: "Textos Románticos de Buenas Noches para Dulces Sueños",
        introduction: "Los momentos justo antes de dormir son los más pacíficos y vulnerables del día. Enviar un texto romántico de buenas noches asegura que seas el último y reconfortante pensamiento en la mente de tu pareja mientras se queda dormida.",
        relatedKeywords: ["textos de buenas noches para ella", "mensajes de buenas noches para mi novio", "dulces sueños amor"],
        faqs: [{ question: "¿Por qué son importantes los mensajes de buenas noches?", answer: "Demuestran constancia. Muestran que, sin importar cuán ocupado haya estado el día, tu pareja es prioridad en tus pensamientos." }]
      },
      "instagram-captions": {
        title: "Frases de Amor para Instagram — Captions de Pareja",
        description: "Descubre las mejores frases de amor para Instagram. Captions estéticos y cortos para tu novio o novia. Ideal para fotos.",
        h1: "Frases Estéticas de Amor para Fotos de Instagram",
        introduction: "Finalmente tomaste la foto perfecta en pareja: la iluminación es impecable y sus sonrisas son genuinas. Ahora solo necesitas el caption perfecto de amor para Instagram. Encontrar una frase romántica pero no demasiado cursi es todo un arte.",
        relatedKeywords: ["frases de amor para instagram", "captions para novios", "descripciones para fotos con mi novio"],
        faqs: [{ question: "¿Cómo exporto estas frases para Instagram?", answer: "Toca cualquier frase para cargarla en el Applet. Elige el formato Story (9:16) o Square (1:1), personaliza y exporta." }]
      }
    },
    messages: {
      "m1": {
        title: "El Viento Susurrante del Amor",
        body: "Miré las estrellas alinearse esta noche, pero ninguna de ellas se compara con la luz de tus ojos. Cada latido de mi corazón susurra tu nombre. Eres mi santuario, mi ancla y mi hermosa eternidad. Nunca supe que el amor podía ser tan profundo hasta que tu alma encontró la mía, trazando un futuro donde cada camino me lleva de regreso a ti."
      },
      "m2": {
        title: "Para Hacerla Llorar de Absoluta Alegría",
        body: "Si pudiera darte un solo regalo en esta vida, sería la capacidad de verte a través de mis ojos. Solo entonces te darías cuenta de lo completamente impresionante que eres y de cuánto gira mi mundo alrededor de tu risa. Eres la poesía que nunca supe escribir, la canción que mi corazón ha tarareado en silencio durante años. Soy tuyo, por completo y sin condiciones, mientras el tiempo respire."
      },
      "m3": {
        title: "A Través de las Millas Silenciosas",
        body: "La distancia es solo una prueba de lo lejos que puede viajar el amor. Cada milla entre nosotros es un testimonio de la fuerza de nuestro vínculo. Me duermo abrazando mi almohada, simulando que eres tú, escuchando la promesa rítmica de mi corazón de que cada mañana me acerca más a sostenerte otra vez. Eres mi hogar, sin importar cuántos mapas intenten separarnos."
      },
      "m4": {
        title: "El Ancla Silenciosa de Mi Vida",
        body: "Al hombre que sostiene mi mundo con su fuerza silenciosa: eres la calma en mi tormenta, la luz en mis noches más oscuras. Te miro y veo todo lo que siempre esperé, envuelto en una risa que sana instantáneamente mi corazón cansado. Gracias por amarme cuando soy difícil de amar, y por abrazarme tan fuerte que todas mis piezas rotas encajan perfectamente de nuevo."
      },
      "m16": {
        title: "Mi Mayor Orgullo",
        body: "¡Felicitaciones, mi amor, por este increíble logro! He visto cómo has entregado tu sudor, tus lágrimas y tu absoluta devoción a tus sueños, y ver recompensado tu esfuerzo me llena de una alegría indescriptible. No solo eres la persona más brillante que conozco, sino mi inspiración diaria. Es un honor estar a tu lado y celebrar tu victoria."
      },
      "m17": {
        title: "Susurros de Sanación",
        body: "Verte enfermarme me rompe el corazón, porque el mundo se siente un poco menos vibrante sin tu hermosa sonrisa. Ojalá pudiera absorber tu malestar y darte mis fuerzas. Por favor, descansa, toma algo tibio y sabe que mi amor te sostiene fuerte cada segundo. Recupérate pronto, mi dulce alma gemela."
      },
      "m18": {
        title: "Remordimiento y Responsabilidad",
        body: "Te escribo esto porque mi orgullo finalmente se ha desmoronado, y solo queda la dolorosa certeza de que te lastimé. No hay excusas para mi comportamiento ni para las palabras descuidadas que pronuncié. Asumo toda la responsabilidad por oscurecer tu mundo luminoso. Por favor perdóname, no porque lo merezca, sino porque tu paz y nuestra unión lo valen todo."
      },
      "m19": {
        title: "Sanando Nuestro Espacio Sagrado",
        body: "La tormenta de nuestra discusión ha pasado, y el silencio que queda se siente demasiado pesado de sobrellevar. Quiero que dejemos atrás el enojo, nos tomemos de las manos y entendamos las heridas del otro. Elijamos el perdón y la sanación por encima de tener la razón. Nuestra conexión es demasiado sagrada para permitir que un desacuerdo nos separe. Te amo y estoy listo para reconstruir nuestra paz."
      },
      "m20": {
        title: "Devoción de San Valentín",
        body: "Feliz Día de San Valentín a mi todo. Cada momento a tu lado es un regalo que nunca daré por sentado. Eres mi mayor aventura y mi refugio más seguro."
      },
      "m21": {
        title: "Te Extraño - Me Duele el Corazón",
        body: "El reloj parece haberse detenido desde que te fuiste. Cada canción en la radio me recuerda a tu sonrisa, y cada espacio vacío hace eco de cuánto te anhelo. Vuelve pronto a mí."
      },
      "m22": {
        title: "Un Aniversario de por Vida",
        body: "¡Feliz Aniversario, mi amor! Mirando hacia atrás en todos los hermosos capítulos que hemos escrito juntos, me lleno de inmensa gratitud. Eres la mejor decisión que tomé en la vida."
      },
      "m23": {
        title: "Caption de Pareja 1",
        body: "Eres mi hoy y todos mis mañanas. 🤍"
      },
      "m24": {
        title: "Caption de Pareja 2",
        body: "El hogar es donde sea que esté contigo."
      }
    },
    ui: {
      "nav_title": "Taller del Corazón",
      "pwa_install": "Instalar Aplicación",
      "pwa_installed": "Aplicación Instalada",
      "pwa_prompt": "Añadir a la pantalla de inicio",
      "all_categories": "Todas las Categorías",
      "back_home": "Volver al Inicio",
      "copy": "Copiar",
      "copied": "¡Copiado!",
      "listen": "Escuchar",
      "stop": "Detener",
      "customize": "Personalizar",
      "related_topics": "Temas Relacionados",
      "faqs_title": "Preguntas Frecuentes",
      "read_time": "Tiempo de Lectura",
      "minutes": "min",
      "likes": "Me gusta",
      "select_lang": "Idioma",
      "hreflang_notice": "Cambiar idioma a Inglés"
    }
  },
  pt: {
    name: "Português",
    pillar: {
      title: "Mensagens de Amor que Tocam o Coração — A Antologia Romântica Definitiva",
      description: "Um guia poético extenso com as mensagens de amor mais emocionantes, sinceras e profundas já escritas. Derreta o coração do seu parceiro hoje mesmo.",
      h1: "A Antologia Definitiva de Mensagens de Amor que Tocam o Coração",
      introduction: "Bem-vindo ao santuário digital definitivo de mensagens de amor que tocam o coração. O amor é a força mais poderosa da experiência humana, mas articular sua profundidade muitas vezes nos deixa em busca de palavras. Este guia abrangente reúne as mensagens de amor mais ricas emocionalmente, poéticas e autênticas já criadas. Dentro desta antologia romântica, você encontrará grupos específicos cobrindo cada tipo de relacionamento, tom e ocasião. Desde parágrafos profundos que a fazem chorar de alegria, até palavras ternas para a distância ou desculpas sinceras após uma discussão: cada frase é desenhada com graça editorial. Nossa missão é banir os clichês repetitivos e oferecer um espaço onde as palavras transmitam o calor do toque humano.",
      relatedKeywords: [
        "mensagens de amor que tocam o coração",
        "frases de amor para meu namorado",
        "textos de amor para minha namorada",
        "cartas de amor à distância",
        "mensagens de desculpas sinceras"
      ],
      faqs: [
        {
          question: "O que faz uma mensagem de amor realmente tocar o coração?",
          answer: "Evitar clichês e focar na honestidade emocional pura, na vulnerabilidade e nas qualidades únicas que você valoriza no seu parceiro."
        },
        {
          question: "Como posso personalizar essas mensagens para o meu parceiro?",
          answer: "Você pode usar nossa Oficina de Estilo interativa para alterar fontes, cores e fundos decorativos, ou usar nosso Gerador para incluir memórias compartilhadas."
        }
      ]
    },
    categories: {
      "for-her": {
        title: "Mensagens de Amor para Ela que Tocam o Coração — Derreter Seu Coração",
        description: "Descubra lindas mensagens de amor para ela. Palavras desenhadas para derretir seu coração, expressar uma profunda adoração e fortalecer seu belo vínculo.",
        h1: "Mensagens de Amor para Ela que Tocam o Coração",
        introduction: "Encontrar as palavras exatas para expressar o quanto ela significa para você pode ser uma jornada desafiadora. Quando você ama uma mulher profundamente, os textos padrão não conseguem transmitir a admiração e a gratidão que você carrega no peito. Por isso, criamos esta coleção seleta. Cada mensagem age como um sussurro terno, desenhado para lembrá-la de seu lugar insubstituível em seu universo.",
        relatedKeywords: [
          "mensagens de amor para fazer minha namorada chorar",
          "mensagens para derreter o coração de uma mulher",
          "textos de amor profundos para ela"
        ],
        faqs: [
          {
            question: "Como faço para ela se sentir verdadeiramente especial?",
            answer: "Mencione suas virtudes únicas, reconheça sua beleza interior e expresse gratidão por tê-la em sua vida cotidiana."
          }
        ]
      },
      "for-him": {
        title: "Mensagens de Amor para Ele que Tocam o Coração — Devoção Poética",
        description: "Explore mensagens profundas de amor para ele. Expresse sua devoção, admiração e gratidão ao homem especial de sua vida com absoluta elegância.",
        h1: "Mensagens de Amor para Ele que Tocam o Coração",
        introduction: "Muitas vezes os homens são elogiados por sua força física ou resistência silenciosa, mas seus corações também anseiam pelo poder reconfortante da validação romântica. Tirar um tempo para articular sua devoção fortalece o vínculo de uma maneira que as ações por si só não podem.",
        relatedKeywords: [
          "mensagens de amor longas para meu namorado",
          "palavras de amor para meu marido",
          "textos românticos para ele"
        ],
        faqs: [
          {
            question: "O que posso escrever para que ele se sinta profundamente apreciado?",
            answer: "Destaque sua força protetora, descreva quão segura você se sente em seus braços e elogie seu caráter, sua risada e seu apoio constante."
          }
        ]
      },
      "long-distance": {
        title: "Mensagens de Amor à Distância — Unindo Corações",
        description: "Cruze as milhas com emocionantes mensagens de amor à distância. Palavras sinceras e poéticas para manter viva a chama sem importar os quilômetros.",
        h1: "Mensagens de Amor à Distância para Unir Seus Corações",
        introduction: "A distância física é apenas um teste de quão longe o amor pode viajar. Cada milha que nos separa é um testemunho da força de nosso laço. Dormir pensando em você, sabendo que o amanhã nos aproxima mais um passo, faz com que a espera valha a pena.",
        relatedKeywords: [
          "mensagens de amor à distância para chorar",
          "textos de amor de longe",
          "frases bonitas de amor à distância"
        ],
        faqs: [
          {
            question: "Como manter forte a conexão à distância?",
            answer: "Envie mensagens constantes e detalhadas sobre o seu dia e seus sentimentos, fazendo-o participar da sua rotina diária."
          }
        ]
      },
      "reconciliation-after-a-fight": {
        title: "Mensagens de Reconciliação após uma Briga — Curar o Vínculo",
        description: "Restaure a proximidade emocional e cure o distanciamento com mensagens de reconciliação após uma discussão. Palavras sinceras para recomeçar.",
        h1: "Mensagens de Reconciliação para Curar após uma Discussão",
        introduction: "Os desentendimentos são comuns em qualquer relacionamento próximo, mas o verdadeiro teste do amor é como encontramos o caminho de volta. Curar um distanciamento é deixar o orgulho de lado e priorizar o belo relacionamento que vocês construíram juntos.",
        relatedKeywords: [
          "mensagens para pedir perdão ao meu parceiro",
          "palavras para se reconciliar depois de brigar",
          "textos de amor depois de uma discussão"
        ],
        faqs: [
          {
            question: "Como se reconciliar através de uma mensagem?",
            answer: "Reconheça o valor do relacionamento, expresse sua disposição para ouvir e curar, e valide os sentimentos do seu parceiro sem culpá-lo."
          }
        ]
      },
      "for-girlfriend": {
        title: "Mensagens de Amor para minha Namorada — Derreter seu Coração",
        description: "Expresse sua adoração absoluta e paixão romântica com lindas mensagens de amor para sua namorada. Copie-as, personalize-as e a faça feliz.",
        h1: "Mensagens de Amor para sua Namorada que Tocam a Alma",
        introduction: "Sua namorada é sua rainha, sua confidente e sua fonte de inspiração romântica. Enviar a ela um parágrafo emocionante é uma maneira maravilhosa de manter aceso o fogo da paixão e fazê-la se sentir plenamente valorada e adorada.",
        relatedKeywords: [
          "textos de amor longos para minha namorada",
          "mensagens doces para enviar à minha namorada",
          "frases românticas para apaixonar mais minha namorada"
        ],
        faqs: [
          {
            question: "O que posso mandar de mensagem para que ela se sinta especial?",
            answer: "Elogie suas virtudes únicas, lembre a ela de uma bela memória compartilhada e diga o quanto ela enriqueceu sua vida diária."
          }
        ]
      },
      "valentines-day": {
        title: "Mensagens de Dia dos Namorados para Ele e Ela",
        description: "Celebre o romance com mensagens emocionantes de Dia dos Namorados. Encontre as palavras perfeitas para seu namorado ou esposa.",
        h1: "Mensagens de Dia dos Namorados que Tocam o Coração",
        introduction: "O Dia dos Namorados é a celebração universal do amor, mas encontrar uma mensagem que se destaque dos clichês comerciais pode ser um desafio. Quer você escreva um cartão para seu cônjuge de longa data ou um texto doce para seu novo amor, esta coleção foi criada para capturar a emoção autêntica.",
        relatedKeywords: ["mensagens de dia dos namorados", "feliz dia dos namorados meu amor", "textos romanticos de dia dos namorados"],
        faqs: [{ question: "O que devo escrever num cartão de Dia dos Namorados?", answer: "Inclua uma saudação doce, mencione uma memória específica do último ano e expresse sua empolgação com o futuro juntos." }]
      },
      "i-miss-you": {
        title: "Mensagens de Saudades — Frases Emocionantes de Falta",
        description: "Envie mensagens emocionantes de saudades ao seu parceiro. Seja por uma viagem ou um dia corrido, essas frases encurtam a distância.",
        h1: "Mensagens Emocionantes de 'Sinto Sua Falta' para Encurtar a Distância",
        introduction: "A ausência física da pessoa que você ama pode deixar uma dor profunda no peito. Seja por uma curta viagem de negócios ou um dia ocupado, enviar uma mensagem de 'sinto sua falta' é uma forma poderosa de lembrar que ela está constantemente na sua mente.",
        relatedKeywords: ["mensagens de saudades", "sinto sua falta amor", "textos de saudades para namorado"],
        faqs: [{ question: "Como dizer que sinto saudades sem soar carente?", answer: "Concentre-se na saudade positiva. Diga o quanto a presença dele(a) ilumina o seu dia e o quanto está animado para vê-lo(a) novamente." }]
      },
      "anniversary": {
        title: "Mensagens de Feliz Aniversário de Casamento e Namoro",
        description: "Celebre seu marco com mensagens emocionantes de feliz aniversário. Frases perfeitas para ele, ela, marido ou esposa.",
        h1: "Mensagens de Feliz Aniversário para Celebrar o seu Amor",
        introduction: "Um aniversário é um belo marco: um dia para fazer uma pausa, refletir e celebrar a jornada que vocês construíram juntos. Seja o primeiro ano de namoro ou as bodas de ouro, encontrar as palavras certas é essencial para honrar a história que compartilham.",
        relatedKeywords: ["mensagem de feliz aniversario de casamento", "frases de aniversario de namoro", "textos de aniversario para marido"],
        faqs: [{ question: "Qual é a melhor mensagem para um aniversário?", answer: "A melhor mensagem reconhece a passagem do tempo, celebra o crescimento do relacionamento e reafirma os seus votos." }]
      },
      "for-husband": {
        title: "Mensagens de Amor Profundo para meu Marido — Textos Românticos",
        description: "Expresse sua devoção com mensagens profundas para seu marido. Textos românticos criados para fazê-lo se sentir valorizado.",
        h1: "Mensagens Profundamente Românticas para o seu Marido",
        introduction: "O casamento é uma jornada profunda de parceria, crescimento e compromisso duradouro. Em meio à rotina diária, é fácil esquecer de encantar o homem com quem você se casou. Estas mensagens são escritas com um tom de profundo apreço e amor consolidado.",
        relatedKeywords: ["mensagens de amor para marido", "textos romanticos para meu esposo", "palavras lindas para marido"],
        faqs: [{ question: "Os maridos gostam de receber mensagens românticas?", answer: "Sim! Um texto romântico validando seus esforços e expressando seu amor o anima imensamente." }]
      },
      "for-wife": {
        title: "Mensagens de Amor para minha Esposa que Tocam o Coração",
        description: "Derreta o coração dela com mensagens emocionantes de amor. Parágrafos para lembrar à sua esposa que ela é a rainha da sua vida.",
        h1: "Mensagens de Amor para Adorar a sua Esposa",
        introduction: "Sua esposa é a pedra angular da sua vida, sua confidente mais confiável e a mulher que mantém sua família unida. Enviar mensagens de amor que tocan o coração é uma das maneiras mais eficazes de fazê-la se sentir linda e profundamente valorizada.",
        relatedKeywords: ["mensagens de amor para minha esposa", "textos romanticos para ela", "frases lindas para minha mulher"],
        faqs: [{ question: "Como posso encantar minha esposa com palavras?", answer: "Requeça o trabalho invisível que ela faz, elogie a sua beleza e diga-lhe que escolhê-la foi a melhor decisão da sua vida." }]
      },
      "i-love-you": {
        title: "Mensagens de Eu Te Amo — Formas Criativas de Dizer",
        description: "Encontre formas criativas de dizer Eu Te Amo. Explore mensagens e textos curtos, profundos e tocantes para derreter o coração dela(e).",
        h1: "Lindas Mensagens de 'Eu Te Amo' e Formas Criativas de Dizer",
        introduction: "A frase 'eu te amo' contém a emoção mais poderosa na linguagem humana, mas dizer as mesmas três palavras todos os dias pode diluir a sua magia. Se você procura maneiras criativas, profundas e tocantes de dizê-lo, chegou ao lugar certo.",
        relatedKeywords: ["mensagens de eu te amo", "formas de dizer eu te amo", "frases de amor profundas"],
        faqs: [{ question: "Qual é uma forma profunda de dizer eu te amo?", answer: "Dizer 'eu te amo' profundamente implica explicar o 'porquê' e o 'como', por exemplo: 'eu amo a forma como você me traz paz'." }]
      },
      "good-night": {
        title: "Textos Românticos de Boa Noite — Bons Sonhos",
        description: "Envie textos românticos de boa noite para ele e ela. Garanta que você será o último pensamento deles com essas doces mensagens.",
        h1: "Textos Românticos de Boa Noite para Bons Sonhos",
        introduction: "Os momentos logo antes de dormir são os mais pacíficos e vulneráveis do dia. Enviar um texto romântico de boa noite garante que você seja o último e reconfortante pensamento na mente do seu parceiro enquanto ele adormece.",
        relatedKeywords: ["textos de boa noite para ela", "mensagens de boa noite para meu namorado", "bons sonhos amor"],
        faqs: [{ question: "Por que as mensagens de boa noite são importantes?", answer: "Elas demonstram constância. Mostram que, por mais ocupado que o dia tenha sido, o seu parceiro é prioridade nos seus pensamentos." }]
      },
      "instagram-captions": {
        title: "Frases de Amor para Instagram — Legendas de Casal",
        description: "Descubra as melhores frases de amor para Instagram. Legendas estéticas e curtas para o seu namorado ou namorada. Ideais para fotos.",
        h1: "Frases Estéticas de Amor para Fotos do Instagram",
        introduction: "Você finalmente tirou a foto perfeita de casal: a iluminação está impecável e os sorrisos são genuínos. Agora você só precisa da legenda de amor perfeita para o Instagram. Encontrar uma frase romântica, mas não muito clichê, é uma arte.",
        relatedKeywords: ["frases de amor para instagram", "legendas para namorados", "descrições para fotos com namorado"],
        faqs: [{ question: "Como exporto essas frases para o Instagram?", answer: "Toque em qualquer frase para carregá-la no Applet. Escolha o formato Story (9:16) ou Square (1:1), personalize e exporte." }]
      }
    },
    messages: {
      "m1": {
        title: "O Vento Sussurrante do Amor",
        body: "Observei as estrelas se alinharem esta noite, mas nenhuma delas se compara à luz dos seus olhos. Cada batida do meu coração sussurra seu nome. Você é meu santuário, minha âncora e minha bela eternidade. Nunca soube que o amor podia ser tão profundo até que sua alma encontrou a minha, traçando um futuro onde cada caminho me leva de volta a você."
      },
      "m2": {
        title: "Para Fazê-la Chorar de Absoluta Alegria",
        body: "Se eu pudesse te dar apenas um presente nesta vida, seria a capacidade de ver a si mesma através dos meus olhos. Só então você perceberia o quão completamente impressionante você é e o quanto o meu mundo gira em torno do seu sorriso. Você é a poesia que eu nunca soube escrever, a música que o meu coração tem cantarolado em silêncio por anos. Sou seu, por inteiro e sem condições, enquanto o tempo respirar."
      },
      "m3": {
        title: "Através das Milhas Silenciosas",
        body: "A distância é apenas uma prova do quão longe o amor pode viajar. Cada milha entre nós é um testemunho da força do nosso vínculo. Adormeço abraçando meu travesseiro, fingindo que é você, ouvindo a promessa rítmica do meu coração de que cada manhã me aproxima mais de segurá-la de novo. Você é o meu lar, não importa quantos mapas tentem nos separar."
      },
      "m4": {
        title: "A Âncora Silenciosa da Minha Vida",
        body: "Ao homem que sustenta o meu mundo com sua força silenciosa: você é a calmaria na minha tempestade, a luz nas minhas noites mais escuras. Olho para você e vejo tudo o que sempre esperei, envolto em um sorriso que cura instantaneamente o meu coração cansado. Obrigado por me amar quando sou difícil de amar, e por me abraçar tão forte que todas as minhas peças quebradas se encaixam perfeitamente de novo."
      },
      "m16": {
        title: "Meu Maior Orgulho",
        body: "Parabéns, meu amor, por esta conquista incrível! Vi como você entregou seu suor, suas lágrimas e sua absoluta devoção aos seus sonhos, e ver seu esforço recompensado me enche de uma alegria indescritível. Você não é apenas a pessoa mais brilhante que conheço, mas minha inspiração diária. É uma honra estar ao seu lado e celebrar a sua vitória."
      },
      "m17": {
        title: "Sussurros de Cura",
        body: "Ver você ficar doente parte meu coração, porque o mundo parece um pouco menos vibrante sem o seu lindo sorriso. Gostaria de poder absorver o seu desconforto e lhe dar as minhas forças. Por favor, descanse, tome algo quente e saiba que o meu amor te segura firme a cada segundo. Recupere-se logo, minha doce alma gêmea."
      },
      "m18": {
        title: "Remorso e Responsabilidade",
        body: "Escrevo-lhe isto porque meu orgulho finalmente desmoronou, e resta apenas a dolorosa certeza de que a machuquei. Não há desculpas para o meu comportamento nem para as palavras descuidadas que proferi. Assumo toda a responsabilidade por escurecer o seu mundo luminoso. Por favor, perdoe-me, não porque eu mereça, mas porque a sua paz e a nossa união valem tudo."
      },
      "m19": {
        title: "Curando Nosso Espaço Sagrado",
        body: "A tempestade de nossa discussão passou, e o silêncio que resta parece pesado demais para suportar. Quero que deixemos a raiva para trás, demos as mãos e entendamos as feridas um do outro. Vamos escolher o perdão e a cura em vez de ter razão. Nossa conexão é sagrada demais para permitir que um desentendimento nos separe. Eu te amo e estou pronto para reconstruir nossa paz."
      },
      "m20": {
        title: "Devoção de Dia dos Namorados",
        body: "Feliz Dia dos Namorados para o meu tudo. Cada momento ao seu lado é um presente. Você é minha maior aventura e meu porto seguro."
      },
      "m21": {
        title: "Sinto Sua Falta - Meu Coração Dói",
        body: "O relógio parece ter parado desde que você partiu. Cada música no rádio me lembra o seu sorriso. Sinto sua falta mais do que as palavras podem dizer."
      },
      "m22": {
        title: "Um Aniversário para a Vida Toda",
        body: "Feliz Aniversário, meu amor! Olhando para trás em todos os belos capítulos que escrevemos juntos, sinto uma imensa gratidão. Você foi a melhor decisão da minha vida."
      },
      "m23": {
        title: "Legenda de Casal 1",
        body: "Você é o meu hoje e todos os meus amanhãs. 🤍"
      },
      "m24": {
        title: "Legenda de Casal 2",
        body: "O lar é onde quer que eu esteja com você."
      }
    },
    ui: {
      "nav_title": "Oficina do Coração",
      "pwa_install": "Instalar App",
      "pwa_installed": "App Instalado",
      "pwa_prompt": "Adicionar à Tela Inicial",
      "all_categories": "Todas as Categorias",
      "back_home": "Voltar ao Início",
      "copy": "Copiar",
      "copied": "Copiado!",
      "listen": "Ouvir",
      "stop": "Parar",
      "customize": "Personalizar",
      "related_topics": "Tópicos Relacionados",
      "faqs_title": "Perguntas Frequentes",
      "read_time": "Tempo de Leitura",
      "minutes": "min",
      "likes": "Curtidas",
      "select_lang": "Idioma",
      "hreflang_notice": "Mudar idioma para Inglês"
    }
  }
};
