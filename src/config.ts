export type GalleryItem = {
  src: string;
  caption: string;
  category: string;
  alt: string;
  tone: string;
  title: string;
  quote: string;
  note?: string;
};

const image = (name: string) => `/images/${encodeURIComponent(name)}`;

export const config = {
  sisterName: 'Chelli',
  birthday: '2010-10-29T00:00:00+05:30',
  age: 16,
  musicSrc: '/audio/happy-birthday.wav',
  heroPhoto: image('forever-person-hero.jpeg'),
  finalPhoto: image('forever-person-hero.jpeg'),
  introKicker: 'Somewhere in this enormous universe, there is one girl who will always be my little world.',
  letter: `To my little sister,

Sixteen years ago, you began your own little story. Somewhere along the way, you became part of mine in a way nobody else ever could.

We fight, we tease, we laugh at the silliest things, and sometimes we annoy each other for absolutely no reason. But even on the ordinary days, I am grateful that I get to be your Akka.

I know you're growing up. I know there will be new dreams, new places, and a whole world waiting for you. Wherever life takes you, I hope you always remember that you have someone who will cheer for you, worry about you, laugh with you, and love you through every version of yourself.

I cannot stop time, and I would never ask you to stay little forever. But if there's one thing I could keep unchanged, it would be the privilege of being your sister.

Happy 16th birthday, my Chelli.

Always your Akka.`,
  giftMessage:
    "Surprise, my girl! No matter how old you become, you will always be my little sister. I'll always be here to annoy you, protect you, cheer for you, and love you endlessly. ❤️",
  finalMessage: `16 years of you.
A lifetime of being your Akka.

Happy Birthday, My Little Universe. ✦`,
  timeline: [
    {
      date: 'A little memory',
      title: 'Our first little chapter',
      text: 'The smallest moments with you became the beginning of a story I never wanted to stop telling.'
    },
    {
      date: 'Childhood',
      title: 'Birthday magic and tiny celebrations',
      text: 'Every cake, every laugh, and every little celebration felt brighter because you were right there.'
    },
    {
      date: 'Our silly years',
      title: 'The years of teasing and laughter',
      text: 'We turned ordinary days into unforgettable memories with our jokes, chaos, and endless giggles.'
    },
    {
      date: 'Forever us',
      title: 'The bond that kept growing',
      text: 'With every chapter, my love for you grew a little more, and somehow it still feels infinite.'
    }
  ],
  wishes: [
    'May your smile always shine brighter than every star in the sky.',
    'May your dreams grow as beautifully as your heart does.',
    'May your confidence stay strong, even when life gets loud.',
    'May your health, peace, and happiness always follow you.',
    'May every new day bring you a little more joy than the last.'
  ],
  reasons: [
    'Your beautiful smile.',
    'Your silly side.',
    'The way you make ordinary days special.',
    'Our unforgettable memories.',
    'The way we can laugh at the smallest things.',
    'The comfort of having you in my life.',
    'Your unique personality.',
    'The little moments we share.',
    'Our secret jokes.',
    'The memories we keep creating.',
    'The happiness you bring.',
    'Your courage to grow.',
    'The dreams you carry.',
    'The bond only we understand.',
    'The chance to be your Akka.',
    'Because you are simply my one and only Chelli.'
  ],
  gallery: [
    {
      src: image('WhatsApp Image 2026-10-28 at 7.18.24 PM (1).jpeg'),
      caption: 'A little princess, a peacock feather, and a moment straight out of a fairytale.',
      category: 'The little girl you were',
      alt: 'Sister in red traditional attire with pearl head jewellery and a peacock feather',
      tone: 'rose',
      title: 'The rarest thing in the frame',
      quote: 'You held a feather in your hands, but somehow you were the rarest thing in the frame.',
      note: 'Even then, there was a kind of quiet magic around you.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.18.24 PM.jpeg'),
      caption: 'Attitude, style, and a little bit of mischief — that\'s my Chelli!',
      category: 'Your beautiful, dramatic moments',
      alt: 'Sister in a black-and-white saree with sunglasses among green plants',
      tone: 'lavender',
      title: 'Main character energy',
      quote: 'Main character energy, sunglasses on, and absolutely no intention of behaving.',
      note: 'You knew exactly how to turn a simple moment into a scene.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.18.25 PM.jpeg'),
      caption: 'Under a sky full of lights, my little star shines the brightest.',
      category: 'The love that grows with you',
      alt: 'Sister in a light pink outfit beneath blue and golden decorative lights',
      tone: 'gold',
      title: 'A thousand little lights',
      quote: 'The whole street wore a thousand lights, but my eyes still found you first.',
      note: 'Some moments feel like they were glowing just for us.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.21.27 PM (1).jpeg'),
      caption: 'A timeless little portrait of my forever favorite girl.',
      category: 'The little girl you were',
      alt: 'Black-and-white portrait with heart stickers above her head',
      tone: 'peach',
      title: 'Tiny heart, big feeling',
      quote: 'Some pictures don\'t need color; your little expressions bring their own magic.',
      note: 'This was the kind of face that made everything softer.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.21.27 PM.jpeg'),
      caption: 'A little mystery, a beautiful smile, and endless charm.',
      category: 'The little girl you were',
      alt: 'Black-and-white traditional outfit with henna on her hand covering part of her face',
      tone: 'mint',
      title: 'Stillness and story',
      quote: 'A little mystery behind those fingers, and a whole story inside those eyes.',
      note: 'The quiet ones are always the ones I remember the most.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.21.28 PM (1).jpeg'),
      caption: 'Cake, cuddles, and birthday magic — some memories never get old.',
      category: 'The little girl you were',
      alt: 'Birthday celebration with a teddy bear, cake, and party hat',
      tone: 'plum',
      title: 'Birthday magic in miniature',
      quote: 'Tiny hands, a teddy twice your size, and a birthday I wish I could freeze forever.',
      note: 'You were the whole celebration, even before you knew it.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.21.28 PM.jpeg'),
      caption: 'Random selfies, silly expressions, and memories worth keeping.',
      category: 'Our ridiculous adventures',
      alt: 'Close-up selfie in a blue and yellow top with a pink time sticker',
      tone: 'sky',
      title: '9:03 PM, no plan',
      quote: '9:03 PM, one random selfie, and another memory I didn\'t know I\'d treasure.',
      note: 'The best memories were often the completely unplanned ones.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.23.51 PM (1).jpeg'),
      caption: 'Two fingers up, worries down — my little troublemaker!',
      category: 'Our ridiculous adventures',
      alt: 'Close-up selfie making a peace sign with a playful expression',
      tone: 'coral',
      title: 'Cheeky little chaos',
      quote: 'Two fingers, one cheeky smile, and a lifetime supply of your nonsense.',
      note: 'You always knew how to make even a silly moment feel like yours.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.23.51 PM (2).jpeg'),
      caption: 'Little moments from the days when every memory became a story.',
      category: 'The little things I never want to forget',
      alt: 'Close-up selfie with a friend or family member visible behind her',
      tone: 'rose',
      title: 'The best stories hide in the background',
      quote: 'The best stories hide in the background of our favorite memories.',
      note: 'The people, the frames, the little details — they all mattered.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.23.51 PM.jpeg'),
      caption: 'Our hands made a heart, but our bond has always lived in it.',
      category: 'The love that grows with you',
      alt: 'Two sisters forming a heart shape with their hands',
      tone: 'lavender',
      title: 'The shape of us',
      quote: 'Our hands made the shape; growing up together gave it meaning.',
      note: 'The heart was always there, even before we knew how to say it.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.24.57 PM (1).jpeg'),
      caption: 'From teasing each other to laughing together — that\'s our kind of love.',
      category: 'Our ridiculous adventures',
      alt: 'Two sisters laughing together outdoors, one in a black-and-white saree',
      tone: 'gold',
      title: 'Gravity-less laughter',
      quote: 'You can change a thousand times, Chelli, but making me laugh will always be your superpower.',
      note: 'The whole moment felt lighter because you were in it.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.24.57 PM.jpeg'),
      caption: 'A little hand to hold, a little heart to love, and memories to treasure.',
      category: 'The little things I never want to forget',
      alt: 'Sister holding a young child in a lavender outfit under festive lights',
      tone: 'peach',
      title: 'Softness in the middle of the lights',
      quote: 'A little hand in yours, and a moment that makes the whole world feel softer.',
      note: 'Some memories are gentle in a way that stays with you forever.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.24.58 PM.jpeg'),
      caption: 'Some moments belong only to us, and those are the ones I treasure most.',
      category: 'The little things I never want to forget',
      alt: 'Two sisters sharing a private moment beneath blue and golden festive lights',
      tone: 'lavender',
      title: 'This one stays with me',
      quote: 'The world was busy shining that night; I was busy remembering this moment with you.',
      note: 'The quietest memories are sometimes the brightest.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.30.55 PM (1).jpeg'),
      caption: 'Tradition, grace, and a princess who will always be my favorite.',
      category: 'The little girl you were',
      alt: 'Sister in a bright red traditional outfit with gold jewellery against a plain wall',
      tone: 'rose',
      title: 'A princess in plain light',
      quote: 'Sometimes the simplest background is the best place to see how beautifully you were made.',
      note: 'Grace has always lived in you so naturally.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.30.55 PM.jpeg'),
      caption: 'A little sparkle, a little elegance, and a whole lot of magic.',
      category: 'The love that grows with you',
      alt: 'Sister in a pale pink festive outfit posing beneath decorative lights',
      tone: 'gold',
      title: 'Evening light and your shine',
      quote: 'The lights were made for the celebration, but your smile made the whole evening glow.',
      note: 'You have always carried a kind of quiet brightness.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.30.56 PM (1).jpeg'),
      caption: 'Bright lights, happy smiles, and one more adventure to remember.',
      category: 'Our ridiculous adventures',
      alt: 'Sister smiling in a light blue shirt at a colourful fair with a Ferris wheel',
      tone: 'sky',
      title: 'The fair, the lights, and you',
      quote: 'The lights belonged to the fair, but that smile was my favorite attraction.',
      note: 'Even on the busiest nights, your joy was the brightest thing there.'
    },
    {
      src: image('WhatsApp Image 2026-10-28 at 7.30.56 PM.jpeg'),
      caption: 'Growing more beautiful every day, but always my little princess.',
      category: 'The little girl you were',
      alt: 'Sister in a pink traditional outfit with gold jewellery, smiling outdoors',
      tone: 'rose',
      title: 'My favorite girl, in full bloom',
      quote: 'Every year, you become more beautiful, and somehow you still feel just as lovingly mine.',
      note: 'The years changed you, but never your magic.'
    },
    {
      src: image('forever-person-hero.jpeg'),
      caption: 'One little kiss, a million feelings, and a love that words could never explain.',
      category: 'The love that grows with you',
      alt: 'Two sisters embracing and sharing a kiss on the cheek with light behind them',
      tone: 'lavender',
      title: 'One kiss, a million feelings',
      quote: 'One kiss on your cheek, and a feeling I will carry long after this moment.',
      note: 'This is the kind of photo that keeps my heart warm forever.'
    }
  ]
};
