const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data/i18n.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The new ES categories
const esCategories = `
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
`;

const ptCategories = `
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
        introduction: "Sua esposa é a pedra angular da sua vida, sua confidente mais confiável e a mulher que mantém sua família unida. Enviar mensagens de amor que tocam o coração é uma das maneiras mais eficazes de fazê-la se sentir linda e profundamente valorizada.",
        relatedKeywords: ["mensagens de amor para minha esposa", "textos romanticos para ela", "frases lindas para minha mulher"],
        faqs: [{ question: "Como posso encantar minha esposa com palavras?", answer: "Reconheça o trabalho invisível que ela faz, elogie a sua beleza e diga-lhe que escolhê-la foi a melhor decisão da sua vida." }]
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
`;

// Regex to find insertion points for es and pt
content = content.replace(
  /es: \{[\s\S]*?categories: \{[\s\S]*?"for-girlfriend": \{[\s\S]*?\}\s*\}/, 
  match => match + ",\n" + esCategories
);

content = content.replace(
  /pt: \{[\s\S]*?categories: \{[\s\S]*?"for-girlfriend": \{[\s\S]*?\}\s*\}/, 
  match => match + ",\n" + ptCategories
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('i18n updated');
