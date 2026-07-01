const fs = require('fs');
const path = require('path');

const msgFilePath = path.join(__dirname, 'data/messages.ts');
let msgContent = fs.readFileSync(msgFilePath, 'utf8');

const newMessages = `
  {
    id: "m20",
    title: "Valentine's Day Devotion",
    body: "Happy Valentine’s Day to my everything. Every moment spent by your side is a gift I will never take for granted. You are my greatest adventure and my ultimate safe haven.",
    relationshipTag: "Universal",
    occasionTag: "Valentine's Day",
    tone: "Sweet",
    keywords: ["valentine messages for her", "valentine messages for him", "happy valentines day message for boyfriend"],
    length: "Paragraph",
    slug: "valentines-day-devotion",
    likes: 88
  },
  {
    id: "m21",
    title: "I Miss You - My Heart Aches",
    body: "The clock seems to have stopped since you left. Every song on the radio reminds me of your smile, and every empty space in this room echoes with my longing for you. I miss you more than words can say. Please come back to me soon.",
    relationshipTag: "Universal",
    occasionTag: "I Miss You",
    tone: "Emotional",
    keywords: ["i miss you messages", "missing you quotes for him", "missing you quotes for her"],
    length: "Paragraph",
    slug: "i-miss-you-my-heart-aches",
    likes: 75
  },
  {
    id: "m22",
    title: "A Lifetime Anniversary",
    body: "Happy Anniversary, my love! Looking back on all the beautiful chapters we have written together, I am filled with overwhelming gratitude. You are the best decision I ever made, and I cannot wait to spend the rest of my life making you as incredibly happy as you make me.",
    relationshipTag: "Universal",
    occasionTag: "Anniversary",
    tone: "Romantic",
    keywords: ["happy anniversary message", "anniversary quotes for him", "anniversary quotes for her"],
    length: "Paragraph",
    slug: "a-lifetime-anniversary",
    likes: 104
  },
  {
    id: "m23",
    title: "Instagram Couple Caption 1",
    body: "You are my today and all of my tomorrows. 🤍",
    relationshipTag: "Universal",
    occasionTag: "Instagram Captions",
    tone: "Sweet",
    keywords: ["love captions for instagram", "couple captions"],
    length: "Short SMS",
    slug: "insta-couple-caption-1",
    likes: 45
  },
  {
    id: "m24",
    title: "Instagram Couple Caption 2",
    body: "Home is wherever I am with you.",
    relationshipTag: "Universal",
    occasionTag: "Instagram Captions",
    tone: "Sweet",
    keywords: ["love captions for instagram", "couple captions"],
    length: "Short SMS",
    slug: "insta-couple-caption-2",
    likes: 62
  }
`;

msgContent = msgContent.replace('];', newMessages + '\n];');
fs.writeFileSync(msgFilePath, msgContent, 'utf8');

const i18nFilePath = path.join(__dirname, 'data/i18n.ts');
let i18nContent = fs.readFileSync(i18nFilePath, 'utf8');

const esMessages = `
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
`;

const ptMessages = `
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
`;

i18nContent = i18nContent.replace(
  /es: \{[\s\S]*?messages: \{[\s\S]*?"m19": \{[\s\S]*?\}\s*\}/, 
  match => match + ",\n" + esMessages
);

i18nContent = i18nContent.replace(
  /pt: \{[\s\S]*?messages: \{[\s\S]*?"m19": \{[\s\S]*?\}\s*\}/, 
  match => match + ",\n" + ptMessages
);

fs.writeFileSync(i18nFilePath, i18nContent, 'utf8');
console.log('Messages updated');
