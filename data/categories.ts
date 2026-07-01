export interface SEOCategory {
  slug: string;
  title: string;
  description: string;
  h1: string;
  introduction: string;
  relatedKeywords: string[];
  faqs: { question: string; answer: string }[];
  relationshipTag?: "For Her" | "For Him" | "Universal";
  occasionTag?: string;
  toneTag?: string;
  keywordsToMatch: string[];
}

export const SEO_CATEGORIES: Record<string, SEOCategory> = {
  "for-her": {
    slug: "for-her",
    title: "200 Heart Touching Love Messages for Her — Melt Her Heart",
    description: "Discover a curated list of touching love messages for her. Words designed to melt her heart, express deep adoration, and strengthen your beautiful bond.",
    h1: "200 Heart Touching Love Messages for Her to Melt Her Heart",
    introduction: `Finding the exact words to express how much she means to you can be a challenging journey. When you love a woman deeply, standard texts often fail to convey the profound admiration, reverence, and gratitude nestled inside your chest. That is why we have crafted this elegant anthology of touching love messages for her. Every message in this guide acts as a gentle whisper, designed to remind her of her irreplaceable place in your universe. 

    Whether you are waking up with her name on your lips, wishing her a sweet rest, or simply wanting to surprise her in the middle of a busy afternoon, these words provide a poetic sanctuary. A heartfelt message does more than just flatter; it establishes emotional safety, triggers joyous tears, and leaves an indelible mark of reassurance on her soul. Dive into our hand-selected paragraphs and find the perfect match to make your queen feel completely cherished and adored today.`,
    relatedKeywords: [
      "touching love messages for her to make her cry",
      "heart touching love messages to melt her heart",
      "200 heart touching love messages for her",
      "long touching love messages for her to make her cry paragraph",
    ],
    faqs: [
      {
        question: "How do I make her feel special with a message?",
        answer: "Speak to her specific qualities, acknowledge her inner beauty and strength, and express gratitude for her presence in your life. Use personal details and a gentle, poetic tone."
      },
      {
        question: "What is the best time to send a heart-touching message?",
        answer: "Surprise texts sent 'just because' in the middle of the day often hold the most emotional weight, alongside sweet good morning notes that welcome her to a new day."
      }
    ],
    relationshipTag: "For Her",
    keywordsToMatch: ["touching love messages for her", "heart touching love messages for her", "melt her heart"]
  },
  "for-him": {
    slug: "for-him",
    title: "Heart Touching Love Messages for Him — Poetic Devotion",
    description: "Explore deeply moving heart touching love messages for him. Express your love, admiration, and gratitude to the special man in your life with elegance.",
    h1: "Heart Touching Love Messages for Him to Connect Deeply",
    introduction: `Men are often praised for their physical strength or silent resilience, yet their hearts crave the soft, nurturing power of romantic validation just as much as anyone else. Finding the space to articulate your devotion to him can strengthen your connection in ways that actions alone cannot. This sanctuary of heart touching love messages for him is created to speak directly to his soul, acknowledging his protective nature, his kindness, and the peace he brings into your days.

    When you write to him, you give him permission to soften, to feel deeply loved, and to know that his efforts are seen and appreciated. Our collection blends comforting short texts with passionate declarations of partnership, ensuring that whether you are writing to a husband, a long-term partner, or a boyfriend, your words convey a timeless sincerity. Let him know he is your ultimate harbor and absolute best friend.`,
    relatedKeywords: [
      "touching love messages to make him cry",
      "heart touching love messages for boyfriend",
      "heart touching love messages for him",
      "long heart touching love messages for boyfriend",
    ],
    faqs: [
      {
        question: "Do men like receiving romantic messages?",
        answer: "Absolutely. Men deeply appreciate being verbally validated, receiving expressions of gratitude for their presence, and knowing they are a source of comfort and happiness."
      },
      {
        question: "How can I make a romantic message sound authentic for him?",
        answer: "Focus on how safe and happy he makes you feel, commend his character rather than just his achievements, and write in a clear, sincere, and direct voice."
      }
    ],
    relationshipTag: "For Him",
    keywordsToMatch: ["heart touching love messages for him", "heart touching love messages for boyfriend"]
  },
  "long-distance": {
    slug: "long-distance",
    title: "Touching Love Messages to Make Her Cry Long Distance",
    description: "Bridge the miles with emotional touching love messages to make her or him cry long distance. Poetic paragraphs to keep your connection alive.",
    h1: "Touching Love Messages for Long Distance Relationships",
    introduction: `The separation of space is one of the most demanding tests a romantic bond can undergo. When oceans, borders, or state lines stand between you and the person who holds your heart, letters become your bridges, your touches, and your warm embrace. We have constructed this emotional category of touching love messages to make her cry long distance, as well as comforting notes for him, to keep the fires of your romance burning brightly across any distance.

    A long-distance relationship survives on the quality of its communication. Sending an emotionally raw, evocative paragraph forces the physical separation to vanish, if only for a few minutes. These love messages speak of midnight longing, of counting down the days, and of the unshakeable certainty that no amount of geographic space can ever dim the alignment of your souls. Browse these notes to send a warm digital kiss across the miles.`,
    relatedKeywords: [
      "touching love messages to make her cry long distance",
      "touching love messages to make him cry long distance",
      "long distance love paragraphs",
      "heart touching love messages to make them feel closer",
    ],
    faqs: [
      {
        question: "How do you maintain intimacy in a long-distance relationship?",
        answer: "Through consistent, deep, and poetic messaging that shares daily moments, alongside setting clear future goals and sending surprise gifts or letters."
      },
      {
        question: "What is an emotional text to send while apart?",
        answer: "An honest declaration that while physical spaces separate you, your hearts remain completely intertwined and every waking hour is a step closer to meeting again."
      }
    ],
    occasionTag: "Long Distance",
    keywordsToMatch: ["long distance", "cry long distance", "across the silent miles"]
  },
  "apology": {
    slug: "apology",
    title: "Touching Love Messages to Make Him Cry After Fight — Apology Notes",
    description: "Heal the rift with touching love messages to make him or her cry after a fight. Sincere, emotional apologies to restore peace and romance.",
    h1: "Touching Love Messages to Heal and Apologize After a Fight",
    introduction: `Arguments and misunderstandings are natural occurrences in any deep romantic union. However, the silence that lingers after a storm can be heavy, carrying doubts and unexpressed sorrow. Finding the humility and eloquence to apologize is the first step toward restoring the harmony of your home. This collection of touching love messages to make him cry after a fight offers sincere, emotionally vulnerable templates to help you apologize and rebuild trust.

    When pride is laid down, true healing can begin. A powerful apology doesn't just ask for forgiveness; it validates the other person's hurt, reaffirms your unwavering adoration, and promises to protect the sanctuary of your love more fiercely. These paragraphs are crafted with a comforting, soft tone to melt any residual anger and remind your partner that your love remains a safe, warm harbor, even after a turbulent weather pattern.`,
    relatedKeywords: [
      "touching love messages to make him cry after fight",
      "love messages after an argument",
      "how to apologize to your partner in a text",
      "touching heart apology paragraphs",
    ],
    faqs: [
      {
        question: "What should an apology love message include?",
        answer: "It should include an acknowledgment of the hurt caused, a clear expression of regret without excuses, and a reaffirmation of your deep love and commitment."
      },
      {
        question: "How long should an apology text be?",
        answer: "It should be long enough to sound sincere and thorough, but not so long that it becomes self-absorbed. A single heart-felt paragraph is usually optimal."
      }
    ],
    occasionTag: "Apology",
    keywordsToMatch: ["reconciliation", "fight", "apology", "after fight"]
  },
  "birthday": {
    slug: "birthday",
    title: "Heart Touching Birthday Love Messages for Boyfriend & Girlfriend",
    description: "Celebrate their special day with heart touching birthday love messages. Deep, poetic, and memorable birthday wishes to make them feel adored.",
    h1: "Heart Touching Birthday Love Messages to Celebrate Your Soulmate",
    introduction: `A birthday is more than just a marker of passing time; it is a celebration of the day the universe introduced your absolute favorite person to the world. When it is your partner's special day, standard greetings like 'Happy Birthday, have a great day' feel incredibly flat. They deserve a letter or a paragraph that honors the magic of their existence and the magnificent change they brought into your life.

    This collection features highly emotional and sweet birthday paragraphs designed to make your boyfriend or girlfriend feel deeply celebrated. These words go beyond the cake and balloons, reflecting on the quiet moments, the shared laughter, and the future you are eagerly building side-by-side. Make their birthday unforgettable by giving them a gift that costs nothing but carries the entire weight of your romantic devotion.`,
    relatedKeywords: [
      "heart touching love messages for boyfriend on birthday",
      "long heart touching love messages for boyfriend",
      "romantic birthday paragraphs for girlfriend",
      "birthday love messages for soulmate",
    ],
    faqs: [
      {
        question: "How do I write a deep birthday message for my boyfriend?",
        answer: "Focus on how his presence has changed your life, list specific qualities you admire in him, and paint a beautiful picture of the future you wish to share."
      },
      {
        question: "Can I use these birthday messages in a physical card?",
        answer: "Absolutely! These messages are perfect for handwritten letters, physical cards, or typed out in our custom visual style workshop."
      }
    ],
    occasionTag: "Birthday",
    keywordsToMatch: ["birthday", "special day", "boyfriend on birthday"]
  },
  "for-boyfriend": {
    slug: "for-boyfriend",
    title: "Long Heart Touching Love Messages for Boyfriend — Absolute Devotion",
    description: "Discover long heart touching love messages for your boyfriend. Express your loyalty, romantic passion, and emotional closeness elegantly.",
    h1: "Long Heart Touching Love Messages for Boyfriend",
    introduction: `A boyfriend is a partner, a co-conspirator in adventure, and a constant support system. Yet, we sometimes forget to remind him of the incredible impact he has on our lives. Writing long, descriptive paragraphs of love and appreciation acts as a continuous fuel for his confidence and affection. This collection of long heart touching love messages for boyfriend is designed to highlight his charm, his loyalty, and his role as your ultimate companion.

    When you send your boyfriend a long, emotional message, you create a tangible record of your affection that he can return to whenever he needs a boost. These paragraphs don't shy away from deep, poetic descriptions, capturing the texture of his laugh, the warmth of his embrace, and the silent promises you make to him every single night. Explore these declarations of loyalty and choose the one that resonates with your unique love story.`,
    relatedKeywords: [
      "heart touching love messages for boyfriend",
      "long heart touching love messages for boyfriend",
      "sweet paragraphs for him to wake up to",
      "deep romantic messages for boyfriend",
    ],
    faqs: [
      {
        question: "How can I make my boyfriend feel valued through text?",
        answer: "Acknowledge his protective gestures, thank him for his emotional support, and remind him of how handsome and special he is to you."
      },
      {
        question: "What makes a love message 'heart touching'?",
        answer: "Vulnerability. When you share a quiet fear, a beautiful dream, or a deep truth that you rarely say aloud, the message immediately connects at a deeper level."
      }
    ],
    relationshipTag: "For Him",
    keywordsToMatch: ["boyfriend", "him", "for him"]
  },
  "make-her-cry": {
    slug: "make-her-cry",
    title: "Touching Love Messages for Her to Make Her Cry — Deep Emotion",
    description: "Explore touching love messages for her to make her cry tears of pure happiness. Profoundly emotional paragraphs to capture absolute adoration.",
    h1: "Deeply Touching Love Messages for Her to Make Her Cry",
    introduction: `Tears are not always a sign of sorrow; they can be the physical overflow of an emotional cup that is completely full. When a woman is loved with a fierce, tender, and unshakeable devotion, hearing those feelings expressed in raw prose can trigger tears of absolute gratitude. This dedicated category of touching love messages for her to make her cry captures the zenith of romantic adoration.

    To move her to tears, you must look past the surface and speak directly to her soul. These paragraphs focus on her essence—how her presence calms your anxieties, how her laughter is the sweetest music you've ever heard, and how you promise to stand as her absolute shield against the hardships of the world. Sending these messages is a romantic gesture of the highest order, declaring that your devotion is eternal and your admiration boundless.`,
    relatedKeywords: [
      "touching love messages for her to make her cry",
      "long touching love messages for her to make her cry",
      "touching love messages for her to make her cry paragraph",
      "heart touching love messages to melt her heart",
    ],
    faqs: [
      {
        question: "Why do emotional love messages make people cry?",
        answer: "Because they make the recipient feel seen, safe, and overwhelmingly loved at a deep, vulnerable level. It is a biological release of joy and comfort."
      },
      {
        question: "How do I deliver a message to make her cry?",
        answer: "You can send it as a surprise letter, write it in a journal for her to find, or use our digital Style Workshop to format it beautifully and share it."
      }
    ],
    relationshipTag: "For Her",
    keywordsToMatch: ["make her cry", "make her cry paragraph", "to make her cry"]
  },
  "make-him-cry": {
    slug: "make-him-cry",
    title: "Touching Love Messages to Make Him Cry — Sincere & Deep",
    description: "Discover touching love messages to make him cry. Highly emotional, sincere, and vulnerable paragraphs designed to touch his soul deeply.",
    h1: "Touching Love Messages to Make Him Cry Tears of Gratitude",
    introduction: `There is a beautiful, sacred intimacy in seeing the man you love show emotional vulnerability. When you speak words of unvarnished truth and deep romantic devotion to him, you melt the protective armor he wears out in the world. This sanctuary of touching love messages to make him cry is designed to touch his soul at its deepest point, validating his character, his tenderness, and the incredible space he occupies in your life.

    These messages do not focus on superficial compliments. Instead, they delve into the core of your connection—expressing how his silent strength supports you, how his gentle eyes reassure you, and how you intend to hold his hand through every mountain and valley. Let your boyfriend or husband feel the absolute magnitude of your affection and watch him connect with you on a level of profound emotional sincerity.`,
    relatedKeywords: [
      "touching love messages to make him cry",
      "touching love messages to make him cry long distance",
      "touching love messages to make him cry paragraph",
      "heart touching love messages for boyfriend",
    ],
    faqs: [
      {
        question: "Can romantic words make a man emotional?",
        answer: "Yes, when a man feels truly understood, respected, and loved for who he is behind his public persona, it can be a deeply moving and emotional experience."
      },
      {
        question: "What themes resonate most with men in romantic writing?",
        answer: "Themes of partnership, loyalty, appreciation for his protective nature, and declaring him as your ultimate safe haven and best friend."
      }
    ],
    relationshipTag: "For Him",
    keywordsToMatch: ["make him cry", "make him cry paragraph", "to make him cry"]
  },
  "reconciliation-after-a-fight": {
    slug: "reconciliation-after-a-fight",
    title: "Heart Touching Reconciliation Messages After an Argument — Mend Your Bond",
    description: "Rebuild emotional closeness and heal the rift with sweet, heart touching reconciliation messages after a fight. Sincere templates to restore romance.",
    h1: "Heart Touching Reconciliation Messages to Mend Your Bond After a Fight",
    introduction: `Arguments and misunderstandings are common in any close relationship, but the true test of love is how we find our way back to one another. Healing a rift is about moving past pride, restoring emotional safety, and prioritizing the beautiful partnership you've built. These reconciliation messages are crafted to express deep remorse, request mutual understanding, and emphasize your desire to grow closer through the healing process. Let these soft words guide your relationship back into clear, warm skies.`,
    relatedKeywords: [
      "reconciliation texts after a fight",
      "heart touching messages to heal relationship after fight",
      "love letters after argument",
      "how to resolve conflict in text"
    ],
    faqs: [
      {
        question: "How do you reconcile through a message?",
        answer: "Acknowledge the value of the relationship, express willingness to listen and heal, and validate your partner's feelings without shifting blame."
      },
      {
        question: "When is the best time to send a reconciliation text?",
        answer: "Send it once the initial intense emotions have settled, giving both of you a little space to reflect with a calm, open heart."
      }
    ],
    occasionTag: "Reconciliation After an Argument",
    keywordsToMatch: ["reconciliation", "healing", "after argument", "fight"]
  },
  "for-girlfriend": {
    slug: "for-girlfriend",
    title: "200 Heart Touching Love Messages for Girlfriend — Melt Her Heart",
    description: "Express your absolute adoration and romantic passion with heart touching love messages for your girlfriend. Copy, customize, and cherish her.",
    h1: "Heart Touching Love Messages for Your Girlfriend",
    introduction: `Your girlfriend is your queen, your confidante, and your deepest source of romantic inspiration. Sending her touching paragraphs is an incredible way to keep the flames of passion burning and make her feel completely cherished. This dedicated anthology contains sweet, raw, and highly romantic love messages specifically tailored for your girlfriend—guaranteed to make her feel loved, respected, and completely adored.`,
    relatedKeywords: [
      "heart touching love messages for girlfriend",
      "sweet paragraphs for girlfriend to melt her heart",
      "long romantic messages for girlfriend",
      "deep love texts for her"
    ],
    faqs: [
      {
        question: "What should I text my girlfriend to make her feel special?",
        answer: "Praise her unique qualities, remind her of a beautiful shared memory, and express how much her love has enriched your everyday life."
      },
      {
        question: "Is it good to send long paragraphs to my girlfriend?",
        answer: "Yes, receiving a long, thoughtfully written message shows her that you took time out of your day to translate your deep feelings into prose."
      }
    ],
    relationshipTag: "For Her",
    keywordsToMatch: ["girlfriend", "her", "for her", "girlfriend love"]
  },
  "valentines-day": {
    slug: "valentines-day",
    title: "Valentine's Day Love Messages for Him & Her",
    description: "Celebrate romance with heartfelt Valentine's Day love messages. Find the perfect words to make your girlfriend, boyfriend, wife, or husband feel adored on February 14th.",
    h1: "Heart Touching Valentine's Day Messages to Melt Their Heart",
    introduction: `Valentine’s Day is the universal celebration of romantic love, but finding a message that stands out from the commercial clichés can be challenging. Whether you are writing a card for your long-term spouse or sending a sweet text to a new girlfriend or boyfriend, this collection of Valentine's Day love messages is designed to capture authentic emotion. 

    The most impactful Valentine’s messages don't rely on generic rhymes; they highlight specific memories, express profound gratitude, and make a promise for the future. Explore these carefully crafted paragraphs to give your partner a gift that words alone can offer—absolute emotional reassurance and deep romantic devotion.`,
    relatedKeywords: [
      "valentine messages for her",
      "valentine messages for him",
      "happy valentines day message for boyfriend",
      "valentine's day quotes for wife"
    ],
    faqs: [
      {
        question: "What should I write in a Valentine's Day card?",
        answer: "Include a sweet opening, mention a specific memory from the past year that made you smile, and express your excitement for your future together."
      },
      {
        question: "Are these messages good for both him and her?",
        answer: "Yes, we have curated messages that work perfectly for boyfriends, girlfriends, husbands, and wives. You can also customize them in our Studio."
      }
    ],
    occasionTag: "Valentine's Day",
    keywordsToMatch: ["valentine", "valentines day", "february 14"]
  },
  "i-miss-you": {
    slug: "i-miss-you",
    title: "I Miss You Messages — Deeply Emotional Missing You Quotes",
    description: "Send emotional I miss you messages to your partner. Whether separated by a trip or a busy day, these missing you quotes for him and her bridge the gap.",
    h1: "Emotional 'I Miss You' Messages to Bridge the Gap",
    introduction: `The physical absence of the person you love can leave a profound ache in your chest. Whether they are away on a short business trip, navigating a busy work week, or temporarily out of reach, sending an 'I miss you' message is a powerful way to remind them that they are constantly on your mind. Unlike our Long Distance category, which focuses on permanent geographical separation, these messages are perfect for everyday longing and temporary absences.

    A beautifully crafted text expressing how much you miss their touch, their laugh, or their presence can instantly turn a mundane day into a romantic one. Use these heartfelt paragraphs and short SMS notes to send a warm, digital embrace to your partner when you can't hold them in your arms.`,
    relatedKeywords: [
      "i miss you messages",
      "missing you quotes for him",
      "missing you quotes for her",
      "i miss you texts"
    ],
    faqs: [
      {
        question: "How do I say I miss you without sounding too clingy?",
        answer: "Focus on positive longing. Instead of complaining about their absence, tell them how much their presence brightens your day and how excited you are to see them."
      }
    ],
    occasionTag: "I Miss You",
    keywordsToMatch: ["miss you", "missing you", "wish you were here"]
  },
  "anniversary": {
    slug: "anniversary",
    title: "Heart Touching Happy Anniversary Messages for Couples",
    description: "Celebrate your relationship milestone with touching happy anniversary messages. Perfect anniversary quotes for him, her, husband, or wife.",
    h1: "Heart Touching Happy Anniversary Messages to Celebrate Your Love",
    introduction: `An anniversary is a beautiful milestone—a day to pause, reflect, and celebrate the journey you have built together. Whether you are celebrating your first year of dating or your fiftieth wedding anniversary, finding the right words to honor your shared history is essential. This collection of happy anniversary messages is crafted to express deep appreciation, unwavering loyalty, and excitement for the years still to come.

    These anniversary quotes for him and her go beyond simple congratulations. They are designed to acknowledge the storms you've weathered, the laughter you've shared, and the quiet moments that define your unique bond. Use these paragraphs in your anniversary card to make your partner feel completely cherished.`,
    relatedKeywords: [
      "happy anniversary message",
      "anniversary quotes for him",
      "anniversary quotes for her",
      "wedding anniversary messages"
    ],
    faqs: [
      {
        question: "What is the best message for a wedding anniversary?",
        answer: "The best message acknowledges the passage of time, celebrates the growth of your relationship, and reaffirms the vows you made to each other."
      }
    ],
    occasionTag: "Anniversary",
    keywordsToMatch: ["anniversary", "wedding anniversary", "years together"]
  },
  "for-husband": {
    slug: "for-husband",
    title: "Deep Love Messages for Husband — Romantic Texts",
    description: "Express your devotion with deep love messages for your husband. Heart touching, romantic texts designed to make your husband feel truly appreciated.",
    h1: "Deeply Romantic Love Messages for Your Husband",
    introduction: `Marriage is a profound journey of partnership, growth, and enduring commitment. Amidst the daily routines, bills, and responsibilities, it is easy to forget to romance the man you married. Sending deep love messages for your husband is a beautiful way to interrupt the mundane and remind him that he is still your ultimate crush and greatest protector.

    These romantic texts for your husband are written with a tone of deep appreciation and established love. They focus on gratitude for his hard work, admiration for his character, and the peace you find in his embrace. Let him know that after all this time, your heart still skips a beat when he walks into the room.`,
    relatedKeywords: [
      "love messages for husband",
      "romantic texts for husband",
      "deep love quotes for my husband",
      "sweet message for husband"
    ],
    faqs: [
      {
        question: "Do husbands care about receiving romantic texts?",
        answer: "Yes! Husbands often carry the weight of responsibility silently. A romantic text validating his efforts and expressing your love is highly uplifting."
      }
    ],
    relationshipTag: "For Him",
    keywordsToMatch: ["husband", "hubby", "my husband"]
  },
  "for-wife": {
    slug: "for-wife",
    title: "Heart Touching Love Messages for Wife — Romantic Paragraphs",
    description: "Melt her heart with touching love messages for your wife. Romantic paragraphs to remind your wife she is the queen of your heart and life.",
    h1: "Heart Touching Love Messages to Adore Your Wife",
    introduction: `Your wife is the cornerstone of your life, your most trusted confidante, and the woman who holds your family together. While your wedding day may have been the start of your forever, love is a choice you make every single day. Sending heart touching love messages for your wife is one of the most effective ways to make her feel seen, beautiful, and deeply valued.

    These romantic texts for your wife are designed to celebrate her enduring grace, her patience, and the unconditional love she provides. Whether you slip a handwritten note into her purse or send a surprise text during her lunch break, these paragraphs will remind her that she is just as captivating to you today as the moment you first met.`,
    relatedKeywords: [
      "love messages for wife",
      "romantic texts for wife",
      "sweet love message for my wife",
      "deep paragraphs for wife"
    ],
    faqs: [
      {
        question: "How can I romance my wife with words?",
        answer: "Acknowledge the invisible work she does, compliment her beauty (both inside and out), and tell her that choosing her was the best decision of your life."
      }
    ],
    relationshipTag: "For Her",
    keywordsToMatch: ["wife", "my wife", "my beautiful wife"]
  },
  "i-love-you": {
    slug: "i-love-you",
    title: "I Love You Messages & Texts — Creative Ways to Say It",
    description: "Find beautiful and creative ways to say I Love You. Explore short, deep, and touching I love you messages and texts to melt their heart instantly.",
    h1: "Beautiful 'I Love You' Messages and Creative Ways to Say It",
    introduction: `The phrase 'I love you' contains the most powerful emotion in the human language, but saying the exact same three words every day can sometimes dilute their magic. If you are looking for creative, profound, and deeply touching ways to say I love you, you have arrived at the perfect sanctuary. 

    This collection of 'I love you' messages and texts provides fresh, poetic ways to express your absolute devotion. From short, punchy SMS messages that spark instant joy, to long, descriptive paragraphs that explore the depths of your soul connection, these templates will help you communicate the magnitude of your feelings with elegance and sincerity.`,
    relatedKeywords: [
      "i love you messages",
      "i love you texts",
      "ways to say i love you",
      "deep i love you quotes"
    ],
    faqs: [
      {
        question: "What is a deeper way to say I love you?",
        answer: "Saying 'I love you' deeply involves explaining the 'why' and 'how'. For example: 'I love the way my soul feels completely at peace when I am with you.'"
      }
    ],
    occasionTag: "Just Because",
    keywordsToMatch: ["i love you", "love you so much", "ways to say i love you"]
  },
  "good-night": {
    slug: "good-night",
    title: "Romantic Good Night Texts for Him & Her — Sweet Dreams",
    description: "Send romantic good night texts for him and her. Ensure you are the last thing on their mind with these sweet, heart touching good night messages.",
    h1: "Romantic Good Night Texts to Ensure Sweet Dreams",
    introduction: `The moments right before sleep are the most peaceful, reflective, and vulnerable parts of the day. Sending a romantic good night text ensures that you are the final, comforting thought in your partner's mind as they drift into sleep. It provides emotional closure to their day and wraps them in a digital blanket of your affection.

    Whether you need sweet good night texts for her that make her feel cherished, or comforting good night messages for him that ease his stress, this collection has you covered. These short, poetic notes are designed to whisper love across the miles, wishing them angelic dreams and a beautiful tomorrow.`,
    relatedKeywords: [
      "good night texts for her",
      "good night messages for him",
      "sweet good night quotes",
      "romantic good night paragraph"
    ],
    faqs: [
      {
        question: "Why are good night texts important in a relationship?",
        answer: "They demonstrate consistency and care. A good night text shows that no matter how busy the day was, your partner is a priority in your thoughts."
      }
    ],
    occasionTag: "Good Night",
    keywordsToMatch: ["good night", "sweet dreams", "sleep well"]
  },
  "instagram-captions": {
    slug: "instagram-captions",
    title: "Love Captions for Instagram — Cute Couple Quotes",
    description: "Discover the best love captions for Instagram. Short, aesthetic couple captions for your boyfriend or girlfriend. Perfect for the Customizer App.",
    h1: "Aesthetic Love Captions for Instagram & Couple Photos",
    introduction: `You finally took the perfect couple photo—the lighting is flawless, your smiles are genuine, and the moment is beautifully captured. Now, all you need is the perfect love caption for Instagram to match the aesthetic. Finding a caption that is romantic but not overly cheesy, short but deeply meaningful, is an art form.

    This dedicated collection features the best Instagram captions for your boyfriend, girlfriend, husband, or wife. These short, punchy, and highly shareable quotes are designed specifically for social media. Even better, you can load any of these captions directly into our Customizer App to create a stunning, stylized Square (1:1) or Story (9:16) image export to post alongside your photo.`,
    relatedKeywords: [
      "love captions for instagram",
      "instagram captions for boyfriend",
      "instagram captions for girlfriend",
      "couple captions",
      "short love quotes for instagram"
    ],
    faqs: [
      {
        question: "How do I export these captions for Instagram?",
        answer: "Click on any caption to load it into our Applet Customizer. Select the Square (1:1) or Story (9:16) format, customize the font and background, and tap Export!"
      }
    ],
    occasionTag: "Instagram Captions",
    keywordsToMatch: ["instagram", "caption", "couple caption", "photo"]
  }

};
