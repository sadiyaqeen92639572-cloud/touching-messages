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
      },
      "for-wife": {
        title: "Heart Touching Love Messages for Wife — Romantic Text & Quotes",
        description: "Heart touching love messages for wife: romantic texts, short love notes, and heartfelt quotes to remind your wife she is the queen of your heart and life.",
        h1: "Heart Touching Love Messages and Romantic Texts for Your Wife",
        introduction: "Your wife is the cornerstone of your life, your most trusted confidante, and the woman who holds your family together. While your wedding day may have been the start of your forever, love is a choice you make every single day. Sending heart touching love messages for your wife is one of the most effective ways to make her feel seen, beautiful, and deeply valued. These romantic texts for your wife are designed to celebrate her enduring grace, her patience, and the unconditional love she provides.",
        relatedKeywords: [
          "love messages for wife",
          "romantic texts for wife",
          "sweet love message for my wife",
          "deep paragraphs for wife",
          "short love message for wife",
          "love notes to wife",
          "heartfelt message to wife",
          "romantic text messages for wife"
        ],
        faqs: [
          {
            question: "How can I romance my wife with words?",
            answer: "Acknowledge the invisible work she does, compliment her beauty (both inside and out), and tell her that choosing her was the best decision of your life."
          },
          {
            question: "What is a short love message I can text my wife?",
            answer: "Keep it specific and present-tense: 'I fell in love with you again this morning watching you make coffee. Still the best decision of my life.' Short texts land best when they reference something real, not generic."
          },
          {
            question: "What's a romantic text to send my wife during the day?",
            answer: "Something unexpected mid-day works best: 'Thinking about you right now and how lucky I am to call you mine. Can't wait to see you tonight.' A surprise romantic text outside of morning/night routines feels more genuine."
          },
          {
            question: "How do I write a heartfelt love note to my wife?",
            answer: "Focus on one specific memory or quality rather than general praise — 'Watching you with our kids reminds me why I married you' means more than 'you're amazing.' Specificity is what makes a note feel heartfelt instead of generic."
          }
        ]
      },
      "anniversary": {
        title: "Heart Touching Happy Anniversary Messages for Couples",
        description: "Celebrate your relationship milestone with touching happy anniversary messages. Perfect anniversary quotes for him, her, husband, or wife.",
        h1: "Heart Touching Happy Anniversary Messages to Celebrate Your Love",
        introduction: "An anniversary is a beautiful milestone—a day to pause, reflect, and celebrate the journey you have built together. Whether you are celebrating your first year of dating or your fiftieth wedding anniversary, finding the right words to honor your shared history is essential. This collection of happy anniversary messages is crafted to express deep appreciation, unwavering loyalty, and excitement for the years still to come. These anniversary quotes for him and her go beyond simple congratulations. They are designed to acknowledge the storms you've weathered, the laughter you've shared, and the quiet moments that define your unique bond. Use these paragraphs in your anniversary card to make your partner feel completely cherished.",
        relatedKeywords: ["happy anniversary message", "anniversary quotes for him", "anniversary quotes for her", "wedding anniversary messages"],
        faqs: [{ question: "What is the best message for a wedding anniversary?", answer: "The best message acknowledges the passage of time, celebrates the growth of your relationship, and reaffirms the vows you made to each other." }]
      },
      "apology": {
        title: "Touching Love Messages to Make Him Cry After Fight — Apology Notes",
        description: "Heal the rift with touching love messages to make him or her cry after a fight. Sincere, emotional apologies to restore peace and romance.",
        h1: "Touching Love Messages to Heal and Apologize After a Fight",
        introduction: "Arguments and misunderstandings are natural occurrences in any deep romantic union. However, the silence that lingers after a storm can be heavy, carrying doubts and unexpressed sorrow. Finding the humility and eloquence to apologize is the first step toward restoring the harmony of your home. This collection of touching love messages to make him cry after a fight offers sincere, emotionally vulnerable templates to help you apologize and rebuild trust. When pride is laid down, true healing can begin. A powerful apology doesn't just ask for forgiveness; it validates the other person's hurt, reaffirms your unwavering adoration, and promises to protect the sanctuary of your love more fiercely. These paragraphs are crafted with a comforting, soft tone to melt any residual anger and remind your partner that your love remains a safe, warm harbor, even after a turbulent weather pattern.",
        relatedKeywords: ["touching love messages to make him cry after fight", "love messages after an argument", "how to apologize to your partner in a text", "touching heart apology paragraphs"],
        faqs: [{ question: "What should an apology love message include?", answer: "It should include an acknowledgment of the hurt caused, a clear expression of regret without excuses, and a reaffirmation of your deep love and commitment." }, { question: "How long should an apology text be?", answer: "It should be long enough to sound sincere and thorough, but not so long that it becomes self-absorbed. A single heart-felt paragraph is usually optimal." }]
      },
      "birthday": {
        title: "Heart Touching Birthday Love Messages for Boyfriend & Girlfriend",
        description: "Celebrate their special day with heart touching birthday love messages. Deep, poetic, and memorable birthday wishes to make them feel adored.",
        h1: "Heart Touching Birthday Love Messages to Celebrate Your Soulmate",
        introduction: "A birthday is more than just a marker of passing time; it is a celebration of the day the universe introduced your absolute favorite person to the world. When it is your partner's special day, standard greetings like 'Happy Birthday, have a great day' feel incredibly flat. They deserve a letter or a paragraph that honors the magic of their existence and the magnificent change they brought into your life. This collection features highly emotional and sweet birthday paragraphs designed to make your boyfriend or girlfriend feel deeply celebrated. These words go beyond the cake and balloons, reflecting on the quiet moments, the shared laughter, and the future you are eagerly building side-by-side. Make their birthday unforgettable by giving them a gift that costs nothing but carries the entire weight of your romantic devotion.",
        relatedKeywords: ["heart touching love messages for boyfriend on birthday", "long heart touching love messages for boyfriend", "romantic birthday paragraphs for girlfriend", "birthday love messages for soulmate"],
        faqs: [{ question: "How do I write a deep birthday message for my boyfriend?", answer: "Focus on how his presence has changed your life, list specific qualities you admire in him, and paint a beautiful picture of the future you wish to share." }, { question: "Can I use these birthday messages in a physical card?", answer: "Absolutely! These messages are perfect for handwritten letters, physical cards, or typed out in our custom visual style workshop." }]
      },
      "for-boyfriend": {
        title: "Long Heart Touching Love Messages for Boyfriend — Absolute Devotion",
        description: "Discover long heart touching love messages for your boyfriend. Express your loyalty, romantic passion, and emotional closeness elegantly.",
        h1: "Long Heart Touching Love Messages for Boyfriend",
        introduction: "A boyfriend is a partner, a co-conspirator in adventure, and a constant support system. Yet, we sometimes forget to remind him of the incredible impact he has on our lives. Writing long, descriptive paragraphs of love and appreciation acts as a continuous fuel for his confidence and affection. This collection of long heart touching love messages for boyfriend is designed to highlight his charm, his loyalty, and his role as your ultimate companion. When you send your boyfriend a long, emotional message, you create a tangible record of your affection that he can return to whenever he needs a boost. These paragraphs don't shy away from deep, poetic descriptions, capturing the texture of his laugh, the warmth of his embrace, and the silent promises you make to him every single night. Explore these declarations of loyalty and choose the one that resonates with your unique love story.",
        relatedKeywords: ["heart touching love messages for boyfriend", "long heart touching love messages for boyfriend", "sweet paragraphs for him to wake up to", "deep romantic messages for boyfriend"],
        faqs: [{ question: "How can I make my boyfriend feel valued through text?", answer: "Acknowledge his protective gestures, thank him for his emotional support, and remind him of how handsome and special he is to you." }, { question: "What makes a love message 'heart touching'?", answer: "Vulnerability. When you share a quiet fear, a beautiful dream, or a deep truth that you rarely say aloud, the message immediately connects at a deeper level." }]
      },
      "for-girlfriend": {
        title: "200 Heart Touching Love Messages for Girlfriend — Melt Her Heart",
        description: "Express your absolute adoration and romantic passion with heart touching love messages for your girlfriend. Copy, customize, and cherish her.",
        h1: "Heart Touching Love Messages for Your Girlfriend",
        introduction: "Your girlfriend is your queen, your confidante, and your deepest source of romantic inspiration. Sending her touching paragraphs is an incredible way to keep the flames of passion burning and make her feel completely cherished. This dedicated anthology contains sweet, raw, and highly romantic love messages specifically tailored for your girlfriend—guaranteed to make her feel loved, respected, and completely adored.",
        relatedKeywords: ["heart touching love messages for girlfriend", "sweet paragraphs for girlfriend to melt her heart", "long romantic messages for girlfriend", "deep love texts for her"],
        faqs: [{ question: "What should I text my girlfriend to make her feel special?", answer: "Praise her unique qualities, remind her of a beautiful shared memory, and express how much her love has enriched your everyday life." }, { question: "Is it good to send long paragraphs to my girlfriend?", answer: "Yes, receiving a long, thoughtfully written message shows her that you took time out of your day to translate your deep feelings into prose." }]
      },
      "for-husband": {
        title: "Deep Love Messages for Husband — Romantic Texts",
        description: "Express your devotion with deep love messages for your husband. Heart touching, romantic texts designed to make your husband feel truly appreciated.",
        h1: "Deeply Romantic Love Messages for Your Husband",
        introduction: "Marriage is a profound journey of partnership, growth, and enduring commitment. Amidst the daily routines, bills, and responsibilities, it is easy to forget to romance the man you married. Sending deep love messages for your husband is a beautiful way to interrupt the mundane and remind him that he is still your ultimate crush and greatest protector. These romantic texts for your husband are written with a tone of deep appreciation and established love. They focus on gratitude for his hard work, admiration for his character, and the peace you find in his embrace. Let him know that after all this time, your heart still skips a beat when he walks into the room.",
        relatedKeywords: ["love messages for husband", "romantic texts for husband", "deep love quotes for my husband", "sweet message for husband"],
        faqs: [{ question: "Do husbands care about receiving romantic texts?", answer: "Yes! Husbands often carry the weight of responsibility silently. A romantic text validating his efforts and expressing your love is highly uplifting." }]
      },
      "good-night": {
        title: "Romantic Good Night Texts for Him & Her — Sweet Dreams",
        description: "Send romantic good night texts for him and her. Ensure you are the last thing on their mind with these sweet, heart touching good night messages.",
        h1: "Romantic Good Night Texts to Ensure Sweet Dreams",
        introduction: "The moments right before sleep are the most peaceful, reflective, and vulnerable parts of the day. Sending a romantic good night text ensures that you are the final, comforting thought in your partner's mind as they drift into sleep. It provides emotional closure to their day and wraps them in a digital blanket of your affection. Whether you need sweet good night texts for her that make her feel cherished, or comforting good night messages for him that ease his stress, this collection has you covered. These short, poetic notes are designed to whisper love across the miles, wishing them angelic dreams and a beautiful tomorrow.",
        relatedKeywords: ["good night texts for her", "good night messages for him", "sweet good night quotes", "romantic good night paragraph"],
        faqs: [{ question: "Why are good night texts important in a relationship?", answer: "They demonstrate consistency and care. A good night text shows that no matter how busy the day was, your partner is a priority in your thoughts." }]
      },
      "i-love-you": {
        title: "I Love You Messages & Texts — Creative Ways to Say It",
        description: "Find beautiful and creative ways to say I Love You. Explore short, deep, and touching I love you messages and texts to melt their heart instantly.",
        h1: "Beautiful 'I Love You' Messages and Creative Ways to Say It",
        introduction: "The phrase 'I love you' contains the most powerful emotion in the human language, but saying the exact same three words every day can sometimes dilute their magic. If you are looking for creative, profound, and deeply touching ways to say I love you, you have arrived at the perfect sanctuary. This collection of 'I love you' messages and texts provides fresh, poetic ways to express your absolute devotion. From short, punchy SMS messages that spark instant joy, to long, descriptive paragraphs that explore the depths of your soul connection, these templates will help you communicate the magnitude of your feelings with elegance and sincerity.",
        relatedKeywords: ["i love you messages", "i love you texts", "ways to say i love you", "deep i love you quotes"],
        faqs: [{ question: "What is a deeper way to say I love you?", answer: "Saying 'I love you' deeply involves explaining the 'why' and 'how'. For example: 'I love the way my soul feels completely at peace when I am with you.'" }]
      },
      "i-miss-you": {
        title: "I Miss You Messages — Deeply Emotional Missing You Quotes",
        description: "Send emotional I miss you messages to your partner. Whether separated by a trip or a busy day, these missing you quotes for him and her bridge the gap.",
        h1: "Emotional 'I Miss You' Messages to Bridge the Gap",
        introduction: "The physical absence of the person you love can leave a profound ache in your chest. Whether they are away on a short business trip, navigating a busy work week, or temporarily out of reach, sending an 'I miss you' message is a powerful way to remind them that they are constantly on your mind. Unlike our Long Distance category, which focuses on permanent geographical separation, these messages are perfect for everyday longing and temporary absences. A beautifully crafted text expressing how much you miss their touch, their laugh, or their presence can instantly turn a mundane day into a romantic one. Use these heartfelt paragraphs and short SMS notes to send a warm, digital embrace to your partner when you can't hold them in your arms.",
        relatedKeywords: ["i miss you messages", "missing you quotes for him", "missing you quotes for her", "i miss you texts"],
        faqs: [{ question: "How do I say I miss you without sounding too clingy?", answer: "Focus on positive longing. Instead of complaining about their absence, tell them how much their presence brightens your day and how excited you are to see them." }]
      },
      "instagram-captions": {
        title: "Love Captions for Instagram — Cute Couple Quotes",
        description: "Discover the best love captions for Instagram. Short, aesthetic couple captions for your boyfriend or girlfriend. Perfect for the Customizer App.",
        h1: "Aesthetic Love Captions for Instagram & Couple Photos",
        introduction: "You finally took the perfect couple photo—the lighting is flawless, your smiles are genuine, and the moment is beautifully captured. Now, all you need is the perfect love caption for Instagram to match the aesthetic. Finding a caption that is romantic but not overly cheesy, short but deeply meaningful, is an art form. This dedicated collection features the best Instagram captions for your boyfriend, girlfriend, husband, or wife. These short, punchy, and highly shareable quotes are designed specifically for social media. Even better, you can load any of these captions directly into our Customizer App to create a stunning, stylized Square (1:1) or Story (9:16) image export to post alongside your photo.",
        relatedKeywords: ["love captions for instagram", "instagram captions for boyfriend", "instagram captions for girlfriend", "couple captions", "short love quotes for instagram"],
        faqs: [{ question: "How do I export these captions for Instagram?", answer: "Click on any caption to load it into our Applet Customizer. Select the Square (1:1) or Story (9:16) format, customize the font and background, and tap Export!" }]
      },
      "long-distance": {
        title: "Touching Love Messages to Make Her Cry Long Distance",
        description: "Bridge the miles with emotional touching love messages to make her or him cry long distance. Poetic paragraphs to keep your connection alive.",
        h1: "Touching Love Messages for Long Distance Relationships",
        introduction: "The separation of space is one of the most demanding tests a romantic bond can undergo. When oceans, borders, or state lines stand between you and the person who holds your heart, letters become your bridges, your touches, and your warm embrace. We have constructed this emotional category of touching love messages to make her cry long distance, as well as comforting notes for him, to keep the fires of your romance burning brightly across any distance. A long-distance relationship survives on the quality of its communication. Sending an emotionally raw, evocative paragraph forces the physical separation to vanish, if only for a few minutes. These love messages speak of midnight longing, of counting down the days, and of the unshakeable certainty that no amount of geographic space can ever dim the alignment of your souls. Browse these notes to send a warm digital kiss across the miles.",
        relatedKeywords: ["touching love messages to make her cry long distance", "touching love messages to make him cry long distance", "long distance love paragraphs", "heart touching love messages to make them feel closer"],
        faqs: [{ question: "How do you maintain intimacy in a long-distance relationship?", answer: "Through consistent, deep, and poetic messaging that shares daily moments, alongside setting clear future goals and sending surprise gifts or letters." }, { question: "What is an emotional text to send while apart?", answer: "An honest declaration that while physical spaces separate you, your hearts remain completely intertwined and every waking hour is a step closer to meeting again." }]
      },
      "make-her-cry": {
        title: "Touching Love Messages for Her to Make Her Cry — Deep Emotion",
        description: "Explore touching love messages for her to make her cry tears of pure happiness. Profoundly emotional paragraphs to capture absolute adoration.",
        h1: "Deeply Touching Love Messages for Her to Make Her Cry",
        introduction: "Tears are not always a sign of sorrow; they can be the physical overflow of an emotional cup that is completely full. When a woman is loved with a fierce, tender, and unshakeable devotion, hearing those feelings expressed in raw prose can trigger tears of absolute gratitude. This dedicated category of touching love messages for her to make her cry captures the zenith of romantic adoration. To move her to tears, you must look past the surface and speak directly to her soul. These paragraphs focus on her essence—how her presence calms your anxieties, how her laughter is the sweetest music you've ever heard, and how you promise to stand as her absolute shield against the hardships of the world. Sending these messages is a romantic gesture of the highest order, declaring that your devotion is eternal and your admiration boundless.",
        relatedKeywords: ["touching love messages for her to make her cry", "long touching love messages for her to make her cry", "touching love messages for her to make her cry paragraph", "heart touching love messages to melt her heart"],
        faqs: [{ question: "Why do emotional love messages make people cry?", answer: "Because they make the recipient feel seen, safe, and overwhelmingly loved at a deep, vulnerable level. It is a biological release of joy and comfort." }, { question: "How do I deliver a message to make her cry?", answer: "You can send it as a surprise letter, write it in a journal for her to find, or use our digital Style Workshop to format it beautifully and share it." }]
      },
      "make-him-cry": {
        title: "Touching Love Messages to Make Him Cry — Sincere & Deep",
        description: "Discover touching love messages to make him cry. Highly emotional, sincere, and vulnerable paragraphs designed to touch his soul deeply.",
        h1: "Touching Love Messages to Make Him Cry Tears of Gratitude",
        introduction: "There is a beautiful, sacred intimacy in seeing the man you love show emotional vulnerability. When you speak words of unvarnished truth and deep romantic devotion to him, you melt the protective armor he wears out in the world. This sanctuary of touching love messages to make him cry is designed to touch his soul at its deepest point, validating his character, his tenderness, and the incredible space he occupies in your life. These messages do not focus on superficial compliments. Instead, they delve into the core of your connection—expressing how his silent strength supports you, how his gentle eyes reassure you, and how you intend to hold his hand through every mountain and valley. Let your boyfriend or husband feel the absolute magnitude of your affection and watch him connect with you on a level of profound emotional sincerity.",
        relatedKeywords: ["touching love messages to make him cry", "touching love messages to make him cry long distance", "touching love messages to make him cry paragraph", "heart touching love messages for boyfriend"],
        faqs: [{ question: "Can romantic words make a man emotional?", answer: "Yes, when a man feels truly understood, respected, and loved for who he is behind his public persona, it can be a deeply moving and emotional experience." }, { question: "What themes resonate most with men in romantic writing?", answer: "Themes of partnership, loyalty, appreciation for his protective nature, and declaring him as your ultimate safe haven and best friend." }]
      },
      "reconciliation-after-a-fight": {
        title: "Heart Touching Reconciliation Messages After an Argument — Mend Your Bond",
        description: "Rebuild emotional closeness and heal the rift with sweet, heart touching reconciliation messages after a fight. Sincere templates to restore romance.",
        h1: "Heart Touching Reconciliation Messages to Mend Your Bond After a Fight",
        introduction: "Arguments and misunderstandings are common in any close relationship, but the true test of love is how we find our way back to one another. Healing a rift is about moving past pride, restoring emotional safety, and prioritizing the beautiful partnership you've built. These reconciliation messages are crafted to express deep remorse, request mutual understanding, and emphasize your desire to grow closer through the healing process. Let these soft words guide your relationship back into clear, warm skies.",
        relatedKeywords: ["reconciliation texts after a fight", "heart touching messages to heal relationship after fight", "love letters after argument", "how to resolve conflict in text"],
        faqs: [{ question: "How do you reconcile through a message?", answer: "Acknowledge the value of the relationship, express willingness to listen and heal, and validate your partner's feelings without shifting blame." }, { question: "When is the best time to send a reconciliation text?", answer: "Send it once the initial intense emotions have settled, giving both of you a little space to reflect with a calm, open heart." }]
      },
      "valentines-day": {
        title: "Valentine's Day Love Messages for Him & Her",
        description: "Celebrate romance with heartfelt Valentine's Day love messages. Find the perfect words to make your girlfriend, boyfriend, wife, or husband feel adored on February 14th.",
        h1: "Heart Touching Valentine's Day Messages to Melt Their Heart",
        introduction: "Valentine’s Day is the universal celebration of romantic love, but finding a message that stands out from the commercial clichés can be challenging. Whether you are writing a card for your long-term spouse or sending a sweet text to a new girlfriend or boyfriend, this collection of Valentine's Day love messages is designed to capture authentic emotion. The most impactful Valentine’s messages don't rely on generic rhymes; they highlight specific memories, express profound gratitude, and make a promise for the future. Explore these carefully crafted paragraphs to give your partner a gift that words alone can offer—absolute emotional reassurance and deep romantic devotion.",
        relatedKeywords: ["valentine messages for her", "valentine messages for him", "happy valentines day message for boyfriend", "valentine's day quotes for wife"],
        faqs: [{ question: "What should I write in a Valentine's Day card?", answer: "Include a sweet opening, mention a specific memory from the past year that made you smile, and express your excitement for your future together." }, { question: "Are these messages good for both him and her?", answer: "Yes, we have curated messages that work perfectly for boyfriends, girlfriends, husbands, and wives. You can also customize them in our Studio." }]
      },
    },
    messages: {},
    ui: {
      "nav_title": "Touching Texts",
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
      },
      "apology": {
        title: "Mensajes de Disculpa para Él o Ella — Sanar tras una Pelea",
        description: "Sana la herida con conmovedores mensajes de disculpa para tu pareja. Palabras sinceras y vulnerables para pedir perdón y restaurar el amor.",
        h1: "Mensajes de Disculpa para Restaurar el Amor tras una Pelea",
        introduction: "Los desacuerdos son parte de cualquier amor profundo, pero el silencio que queda después puede pesar mucho. Encontrar la humildad y las palabras adecuadas para disculparse es el primer paso para restaurar la armonía. Esta colección ofrece disculpas sinceras y emocionalmente honestas para pedir perdón y reconstruir la confianza.",
        relatedKeywords: ["mensajes de disculpa para mi pareja", "cómo pedir perdón en un mensaje", "textos de disculpa después de pelear"],
        faqs: [{ question: "¿Qué debe incluir un mensaje de disculpa?", answer: "Reconocimiento del daño causado, expresión clara de arrepentimiento sin excusas, y una reafirmación de tu amor y compromiso." }]
      },
      "birthday": {
        title: "Mensajes de Cumpleaños que Tocan el Corazón para Novio y Novia",
        description: "Celebra su día especial con conmovedores mensajes de cumpleaños de amor. Poéticos y memorables, para que se sienta verdaderamente adorado.",
        h1: "Mensajes de Cumpleaños que Tocan el Corazón para Tu Amor",
        introduction: "Un cumpleaños es mucho más que una marca en el calendario; es la celebración del día en que el universo te presentó a tu persona favorita. Estos mensajes van más allá de los pasteles y globos, capturando los momentos íntimos y el futuro que están construyendo juntos.",
        relatedKeywords: ["mensajes de cumpleaños románticos para novio", "feliz cumpleaños amor mío", "párrafos de cumpleaños para enamorar"],
        faqs: [{ question: "¿Cómo escribir un mensaje de cumpleaños profundo?", answer: "Enfócate en cómo su presencia ha cambiado tu vida, menciona cualidades específicas que admiras y describe el hermoso futuro que deseas compartir." }]
      },
      "for-boyfriend": {
        title: "Mensajes de Amor Largos para mi Novio — Devoción Absoluta",
        description: "Descubre mensajes de amor largos y conmovedores para tu novio. Expresa tu lealtad, pasión romántica y cercanía emocional con elegancia.",
        h1: "Mensajes de Amor Largos para tu Novio que Tocan el Corazón",
        introduction: "Un novio es compañero, cómplice de aventuras y apoyo constante. A veces olvidamos recordarle el increíble impacto que tiene en nuestra vida. Escribirle párrafos largos y emotivos es el combustible perfecto para su confianza y cariño. Esta colección resalta su encanto, su lealtad y su papel como tu compañero definitivo.",
        relatedKeywords: ["mensajes de amor para mi novio largos", "párrafos románticos para él", "textos de amor profundos para novio"],
        faqs: [{ question: "¿Cómo hacer sentir valorado a mi novio por mensaje?", answer: "Reconoce sus gestos protectores, agradécele su apoyo emocional y recuérdale lo especial e importante que es para ti." }]
      },
      "make-her-cry": {
        title: "Mensajes para Hacer Llorar a tu Novia de Amor — Emoción Profunda",
        description: "Explora mensajes de amor para hacer llorar a tu novia de alegría. Párrafos profundamente emotivos que capturan una adoración absoluta.",
        h1: "Mensajes para Hacer Llorar a tu Novia de Amor y Felicidad",
        introduction: "Las lágrimas no siempre son de tristeza; pueden ser el desbordamiento de una copa emocional completamente llena. Cuando una mujer es amada con devoción feroz y tierna, escuchar esos sentimientos expresados en palabras puede provocar lágrimas de gratitud absoluta. Esta colección captura el cénit de la adoración romántica.",
        relatedKeywords: ["mensajes para hacer llorar a mi novia de amor", "textos para hacer llorar de felicidad", "párrafos que hacen llorar de amor"],
        faqs: [{ question: "¿Por qué los mensajes emotivos hacen llorar?", answer: "Porque hacen que la persona se sienta vista, segura y profundamente amada. Es una liberación biológica de alegría y consuelo." }]
      },
      "make-him-cry": {
        title: "Mensajes para Hacer Llorar a tu Novio de Amor — Sinceros y Profundos",
        description: "Descubre mensajes para hacer llorar a tu novio. Párrafos altamente emotivos y vulnerables diseñados para tocar su alma profundamente.",
        h1: "Mensajes para Hacer Llorar a tu Novio de Emoción y Gratitud",
        introduction: "Hay una intimidad sagrada en ver al hombre que amas mostrar vulnerabilidad emocional. Cuando le hablas con verdad sin adornos y devoción romántica profunda, derrites la armadura protectora que lleva al mundo. Esta colección toca su alma en su punto más hondo, validando su carácter, su ternura y el espacio increíble que ocupa en tu vida.",
        relatedKeywords: ["mensajes para hacer llorar a mi novio de amor", "textos emotivos para él", "párrafos para hacer llorar a un hombre"],
        faqs: [{ question: "¿Pueden las palabras románticas emocionar a un hombre?", answer: "Sí, cuando un hombre se siente verdaderamente comprendido, respetado y amado por quien es, puede ser una experiencia profundamente emotiva." }]
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
      },
      "apology": {
        title: "Mensagens de Desculpa para Ele ou Ela — Curar após uma Briga",
        description: "Cure a ferida com mensagens emocionantes de desculpa para seu parceiro. Palavras sinceras e vulneráveis para pedir perdão e restaurar o amor.",
        h1: "Mensagens de Desculpa para Restaurar o Amor após uma Briga",
        introduction: "As discussões fazem parte de qualquer amor profundo, mas o silêncio que fica depois pode pesar muito. Encontrar a humildade e as palavras certas para se desculpar é o primeiro passo para restaurar a harmonia. Esta coleção oferece pedidos de desculpa sinceros e emocionalmente honestos para reconstruir a confiança.",
        relatedKeywords: ["mensagens de desculpa para namorado", "como pedir perdão por mensagem", "textos de desculpa depois de briga"],
        faqs: [{ question: "O que deve incluir uma mensagem de desculpa?", answer: "Reconhecimento do dano causado, expressão clara de arrependimento sem desculpas, e uma reafirmação do seu amor e compromisso." }]
      },
      "birthday": {
        title: "Mensagens de Aniversário que Tocam o Coração para Namorado e Namorada",
        description: "Celebre o dia especial dele(a) com mensagens de aniversário de amor. Poéticas e memoráveis, para que se sinta verdadeiramente adorado(a).",
        h1: "Mensagens de Aniversário que Tocam o Coração para o seu Amor",
        introduction: "Um aniversário é muito mais do que uma data no calendário; é a celebração do dia em que o universo apresentou a você a sua pessoa favorita. Estas mensagens vão além dos bolos e balões, capturando os momentos íntimos e o futuro que vocês estão construindo juntos.",
        relatedKeywords: ["mensagens de aniversário românticas para namorado", "feliz aniversário meu amor", "parágrafos de aniversário para apaixonar"],
        faqs: [{ question: "Como escrever uma mensagem de aniversário profunda?", answer: "Foque em como a presença dele(a) mudou a sua vida, mencione qualidades específicas que você admira e descreva o lindo futuro que deseja compartilhar." }]
      },
      "for-boyfriend": {
        title: "Mensagens de Amor Longas para meu Namorado — Devoção Absoluta",
        description: "Descubra mensagens de amor longas e tocantes para o seu namorado. Expresse sua lealdade, paixão romântica e proximidade emocional com elegância.",
        h1: "Mensagens de Amor Longas para o seu Namorado que Tocam o Coração",
        introduction: "Um namorado é companheiro, cúmplice de aventuras e apoio constante. Às vezes esquecemos de lembrá-lo do incrível impacto que tem na nossa vida. Escrever parágrafos longos e emotivos é o combustível perfeito para a sua confiança e carinho. Esta coleção destaca o seu charme, sua lealdade e o seu papel como companheiro definitivo.",
        relatedKeywords: ["mensagens de amor para namorado longas", "parágrafos românticos para ele", "textos de amor profundos para namorado"],
        faqs: [{ question: "Como fazer o namorado se sentir valorizado por mensagem?", answer: "Reconheça seus gestos protetores, agradeça pelo apoio emocional e lembre-o do quão especial e importante ele é para você." }]
      },
      "make-her-cry": {
        title: "Mensagens para Fazer Chorar sua Namorada de Amor — Emoção Profunda",
        description: "Explore mensagens de amor para fazer chorar sua namorada de alegria. Parágrafos profundamente emotivos que capturam uma adoração absoluta.",
        h1: "Mensagens para Fazer Chorar sua Namorada de Amor e Felicidade",
        introduction: "As lágrimas nem sempre são de tristeza; podem ser o transbordamento físico de uma taça emocional completamente cheia. Quando uma mulher é amada com devoção feroz e terna, ouvir esses sentimentos expressos em palavras pode provocar lágrimas de gratidão absoluta. Esta coleção captura o zênite da adoração romântica.",
        relatedKeywords: ["mensagens para fazer chorar minha namorada de amor", "textos para fazer chorar de felicidade", "parágrafos que fazem chorar de amor"],
        faqs: [{ question: "Por que mensagens emotivas fazem as pessoas chorarem?", answer: "Porque fazem a pessoa se sentir vista, segura e profundamente amada. É uma liberação biológica de alegria e conforto." }]
      },
      "make-him-cry": {
        title: "Mensagens para Fazer Chorar seu Namorado de Amor — Sinceras e Profundas",
        description: "Descubra mensagens para fazer chorar o seu namorado. Parágrafos altamente emotivos e vulneráveis criados para tocar a sua alma profundamente.",
        h1: "Mensagens para Fazer Chorar seu Namorado de Emoção e Gratidão",
        introduction: "Há uma intimidade sagrada em ver o homem que você ama mostrar vulnerabilidade emocional. Quando você lhe fala com verdade sem adornos e devoção romântica profunda, derrete a armadura protetora que ele carrega para o mundo. Esta coleção toca a sua alma em seu ponto mais profundo, validando seu caráter, ternura e o espaço incrível que ocupa na sua vida.",
        relatedKeywords: ["mensagens para fazer chorar meu namorado de amor", "textos emotivos para ele", "parágrafos para fazer um homem chorar"],
        faqs: [{ question: "Palavras românticas podem emocionar um homem?", answer: "Sim, quando um homem se sente verdadeiramente compreendido, respeitado e amado por quem é, pode ser uma experiência profundamente emotiva." }]
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
