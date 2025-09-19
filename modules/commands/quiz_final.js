// quiz.js - single-file GoatBot module with quiz data (anime/game/bd/history) and quiz logic

const quizData = {
  "anime": [
    {
      "q": "What are the 'Big Three' shonen manga of the 2000s?",
      "options": [
        "Akira Toriyama",
        "Naruto, One Piece, Bleach",
        "Manga",
        "Studio Ghibli"
      ],
      "a": "naruto, one piece, bleach"
    },
    {
      "q": "Who is the main protagonist of One Piece?",
      "options": [
        "Equivalent Exchange",
        "Monkey D. Luffy",
        "Tsugumi Ohba",
        "Ryuk"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "Who is the author of One Piece?",
      "options": [
        "Goku",
        "Eiichiro Oda",
        "Goku",
        "Monkey D. Luffy"
      ],
      "a": "eiichiro oda"
    },
    {
      "q": "Which magazine serialises One Piece?",
      "options": [
        "Weekly Shonen Jump",
        "Goku",
        "Dragon Balls",
        "Shinichirō Watanabe"
      ],
      "a": "weekly shonen jump"
    },
    {
      "q": "Who is Luffy's first crewmate (swordsman)?",
      "options": [
        "Konohagakure",
        "Shinichirō Watanabe",
        "Ken Kaneki",
        "Roronoa Zoro"
      ],
      "a": "roronoa zoro"
    },
    {
      "q": "What item grants wishes in Dragon Ball?",
      "options": [
        "Dragon Balls",
        "Sasuke Uchiha",
        "Light Yagami",
        "Goku"
      ],
      "a": "dragon balls"
    },
    {
      "q": "Who is the main protagonist of Naruto?",
      "options": [
        "Naruto Uzumaki",
        "Tanjiro Kamado",
        "Zangetsu",
        "Makoto Shinkai"
      ],
      "a": "naruto uzumaki"
    },
    {
      "q": "What is Naruto's village?",
      "options": [
        "Naruto, One Piece, Bleach",
        "Konohagakure",
        "Death Note",
        "Zangetsu"
      ],
      "a": "konohagakure"
    },
    {
      "q": "Who is Naruto's rival and friend?",
      "options": [
        "Studio Ghibli",
        "My Hero Academia",
        "Kakarot",
        "Sasuke Uchiha"
      ],
      "a": "sasuke uchiha"
    },
    {
      "q": "What is the name of Ichigo's sword in Bleach?",
      "options": [
        "Death Note",
        "Zangetsu",
        "Ryuk",
        "Nen"
      ],
      "a": "zangetsu"
    },
    {
      "q": "Who is the creator of Dragon Ball?",
      "options": [
        "Monkey D. Luffy",
        "Manga",
        "Ufotable",
        "Akira Toriyama"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "Who is the protagonist of Dragon Ball?",
      "options": [
        "Goku",
        "Konohagakure",
        "Satoru Gojo",
        "Shinichirō Watanabe"
      ],
      "a": "goku"
    },
    {
      "q": "What is the name of Goku's Saiyan name?",
      "options": [
        "Light Yagami",
        "Yuji Itadori",
        "Naruto, One Piece, Bleach",
        "Kakarot"
      ],
      "a": "kakarot"
    },
    {
      "q": "Who first goes Super Saiyan in Dragon Ball Z's major event?",
      "options": [
        "Ryuk",
        "Roronoa Zoro",
        "Goku",
        "Hiromu Arakawa"
      ],
      "a": "goku"
    },
    {
      "q": "Which anime features humanity vs Titans?",
      "options": [
        "Goku",
        "MAPPA",
        "Studio Ghibli",
        "Attack on Titan"
      ],
      "a": "attack on titan"
    },
    {
      "q": "Who wrote Death Note?",
      "options": [
        "Tsugumi Ohba",
        "Manga",
        "Sasuke Uchiha",
        "Cowboy Bebop"
      ],
      "a": "tsugumi ohba"
    },
    {
      "q": "Who illustrated Death Note?",
      "options": [
        "Hideaki Anno",
        "Masashi Kishimoto",
        "Studio Ghibli",
        "Takeshi Obata"
      ],
      "a": "takeshi obata"
    },
    {
      "q": "Who is the main character of Death Note?",
      "options": [
        "Light Yagami",
        "Nen",
        "Equivalent Exchange",
        "Hideaki Anno"
      ],
      "a": "light yagami"
    },
    {
      "q": "What is the notebook used to kill people called?",
      "options": [
        "Death Note",
        "Attack on Titan",
        "Wit Studio",
        "Naruto, One Piece, Bleach"
      ],
      "a": "death note"
    },
    {
      "q": "Who is the Shinigami that drops the notebook?",
      "options": [
        "Light Yagami",
        "Ryuk",
        "Takeshi Obata",
        "Masashi Kishimoto"
      ],
      "a": "ryuk"
    },
    {
      "q": "Who is the main protagonist of Demon Slayer?",
      "options": [
        "Goku",
        "Yoshihiro Togashi",
        "Tanjiro Kamado",
        "Manga"
      ],
      "a": "tanjiro kamado"
    },
    {
      "q": "Which studio animated Demon Slayer's TV anime and movie?",
      "options": [
        "Ufotable",
        "Roronoa Zoro",
        "Zangetsu",
        "Akira Toriyama"
      ],
      "a": "ufotable"
    },
    {
      "q": "Who is the main character of Jujutsu Kaisen?",
      "options": [
        "Roronoa Zoro",
        "Eiichiro Oda",
        "Satoru Gojo",
        "Yuji Itadori"
      ],
      "a": "yuji itadori"
    },
    {
      "q": "Who is the powerful teacher in Jujutsu Kaisen with Six Eyes?",
      "options": [
        "Satoru Gojo",
        "Killua Zoldyck",
        "Dragon Balls",
        "Hayao Miyazaki"
      ],
      "a": "satoru gojo"
    },
    {
      "q": "Who is the main character of Tokyo Ghoul?",
      "options": [
        "My Hero Academia",
        "Wit Studio",
        "Goku",
        "Ken Kaneki"
      ],
      "a": "ken kaneki"
    },
    {
      "q": "Who created the manga 'Fullmetal Alchemist'?",
      "options": [
        "Shinichirō Watanabe",
        "Ryuk",
        "Hiromu Arakawa",
        "Attack on Titan"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "Who are the Elric brothers?",
      "options": [
        "Edward and Alphonse Elric",
        "Masashi Kishimoto",
        "Monkey D. Luffy",
        "My Hero Academia"
      ],
      "a": "edward and alphonse elric"
    },
    {
      "q": "What is the principle of alchemy in FMA?",
      "options": [
        "Manga",
        "Dragon Balls",
        "Equivalent Exchange",
        "Nen"
      ],
      "a": "equivalent exchange"
    },
    {
      "q": "Which studio created Spirited Away?",
      "options": [
        "Ryuk",
        "Studio Ghibli",
        "Death Note",
        "Satoru Gojo"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Who directed Spirited Away?",
      "options": [
        "Satoru Gojo",
        "Monkey D. Luffy",
        "Naruto, One Piece, Bleach",
        "Hayao Miyazaki"
      ],
      "a": "hayao miyazaki"
    },
    {
      "q": "Who directed Your Name?",
      "options": [
        "Eiichiro Oda",
        "Makoto Shinkai",
        "Killua Zoldyck",
        "Death Note"
      ],
      "a": "makoto shinkai"
    },
    {
      "q": "Which anime features a shounen about quirks and heroes?",
      "options": [
        "Masashi Kishimoto",
        "Nen",
        "Roronoa Zoro",
        "My Hero Academia"
      ],
      "a": "my hero academia"
    },
    {
      "q": "Who is the creator of Naruto?",
      "options": [
        "Manga",
        "Tsugumi Ohba",
        "Masashi Kishimoto",
        "Naruto Uzumaki"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "Who is the author of Hunter x Hunter?",
      "options": [
        "Nen",
        "Neon Genesis Evangelion",
        "Yoshihiro Togashi",
        "Weekly Shonen Jump"
      ],
      "a": "yoshihiro togashi"
    },
    {
      "q": "Who is Gon’s best friend in Hunter x Hunter?",
      "options": [
        "Ken Kaneki",
        "Killua Zoldyck",
        "Eiichiro Oda",
        "Shinichirō Watanabe"
      ],
      "a": "killua zoldyck"
    },
    {
      "q": "What is the power system called in Hunter x Hunter?",
      "options": [
        "Tsugumi Ohba",
        "Nen",
        "Japanese animation",
        "Light Yagami"
      ],
      "a": "nen"
    },
    {
      "q": "Which anime features a protagonist named Eren Yeager?",
      "options": [
        "Attack on Titan",
        "Killua Zoldyck",
        "Yuji Itadori",
        "Edward and Alphonse Elric"
      ],
      "a": "attack on titan"
    },
    {
      "q": "Which anime studio animated Attack on Titan (seasons 1-3)?",
      "options": [
        "Zangetsu",
        "Tanjiro Kamado",
        "Manga",
        "Wit Studio"
      ],
      "a": "wit studio"
    },
    {
      "q": "Which studio animated Attack on Titan final season?",
      "options": [
        "MAPPA",
        "Naruto Uzumaki",
        "Takeshi Obata",
        "Edward and Alphonse Elric"
      ],
      "a": "mappa"
    },
    {
      "q": "Which anime features a character named Spike Spiegel?",
      "options": [
        "Ufotable",
        "Cowboy Bebop",
        "Killua Zoldyck",
        "Satoru Gojo"
      ],
      "a": "cowboy bebop"
    },
    {
      "q": "Who directed Cowboy Bebop (TV)?",
      "options": [
        "Shinichirō Watanabe",
        "Monkey D. Luffy",
        "Studio Ghibli",
        "Manga"
      ],
      "a": "shinichirō watanabe"
    },
    {
      "q": "Which anime features Evangelions?",
      "options": [
        "Neon Genesis Evangelion",
        "Yoshihiro Togashi",
        "MAPPA",
        "Monkey D. Luffy"
      ],
      "a": "neon genesis evangelion"
    },
    {
      "q": "Who directed Neon Genesis Evangelion?",
      "options": [
        "Hideaki Anno",
        "Masashi Kishimoto",
        "Wit Studio",
        "Yoshihiro Togashi"
      ],
      "a": "hideaki anno"
    },
    {
      "q": "What is the term for Japanese comics?",
      "options": [
        "Manga",
        "Death Note",
        "Tsugumi Ohba",
        "Masashi Kishimoto"
      ],
      "a": "manga"
    },
    {
      "q": "What does 'anime' refer to in English?",
      "options": [
        "Tanjiro Kamado",
        "Japanese animation",
        "Studio Ghibli",
        "Konohagakure"
      ],
      "a": "japanese animation"
    },
    {
      "q": "Who created the Demon Slayer manga?",
      "options": [
        "Naruto Uzumaki",
        "Chihiro Ogino",
        "Koyoharu Gotouge",
        "Shinji Ikari"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "In which setting does Cowboy Bebop primarily take place?",
      "options": [
        "Bebop",
        "Edward Elric",
        "Goku",
        "Naruto Uzumaki"
      ],
      "a": "bebop"
    },
    {
      "q": "Which studio animated Hunter x Hunter (well-known adaptation)?",
      "options": [
        "Yoshihiro Togashi",
        "Ufotable",
        "Tanjiro Kamado",
        "Koyoharu Gotouge"
      ],
      "a": "ufotable"
    },
    {
      "q": "What term describes Japanese comics like Demon Slayer?",
      "options": [
        "Manga",
        "Ken Kaneki",
        "Gon Freecss",
        "Eren Yeager"
      ],
      "a": "manga"
    },
    {
      "q": "What term describes Japanese comics like My Hero Academia?",
      "options": [
        "Koyoharu Gotouge",
        "Eiichiro Oda",
        "Akira Toriyama",
        "Manga"
      ],
      "a": "manga"
    },
    {
      "q": "Who is the main protagonist of One Piece?",
      "options": [
        "Monkey D. Luffy",
        "Gon Freecss",
        "Shinji Ikari",
        "Masashi Kishimoto"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "In which decade did the original Demon Slayer manga begin serialization?",
      "options": [
        "Light Yagami",
        "1990s",
        "Chihiro Ogino",
        "Yoshihiro Togashi"
      ],
      "a": "1990s"
    },
    {
      "q": "Which studio animated Dragon Ball (well-known adaptation)?",
      "options": [
        "Akira Toriyama",
        "Izuku Midoriya",
        "Madhouse",
        "Hiromu Arakawa"
      ],
      "a": "madhouse"
    },
    {
      "q": "Who created the Naruto manga?",
      "options": [
        "Ichigo Kurosaki",
        "Eiichiro Oda",
        "Masashi Kishimoto",
        "Tanjiro Kamado"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "Which studio animated Death Note (well-known adaptation)?",
      "options": [
        "MAPPA",
        "Ken Kaneki",
        "Shinichirō Watanabe",
        "Tite Kubo"
      ],
      "a": "mappa"
    },
    {
      "q": "Who is the main protagonist of Fullmetal Alchemist?",
      "options": [
        "Koyoharu Gotouge",
        "Edward Elric",
        "Shinji Ikari",
        "Shinichirō Watanabe"
      ],
      "a": "edward elric"
    },
    {
      "q": "What term describes Japanese comics like Neon Genesis Evangelion?",
      "options": [
        "Hiromu Arakawa",
        "Manga",
        "Koyoharu Gotouge",
        "Akira Toriyama"
      ],
      "a": "manga"
    },
    {
      "q": "Who is the main protagonist of Naruto?",
      "options": [
        "Tanjiro Kamado",
        "Naruto Uzumaki",
        "Spike Spiegel",
        "Hideaki Anno"
      ],
      "a": "naruto uzumaki"
    },
    {
      "q": "Who created the Demon Slayer manga?",
      "options": [
        "Tsugumi Ohba",
        "Koyoharu Gotouge",
        "Tite Kubo",
        "Tanjiro Kamado"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "Who created the Demon Slayer manga?",
      "options": [
        "Gon Freecss",
        "Koyoharu Gotouge",
        "Hiromu Arakawa",
        "Sui Ishida"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "What term describes Japanese comics like Bleach?",
      "options": [
        "Gon Freecss",
        "Manga",
        "Shinji Ikari",
        "Edward Elric"
      ],
      "a": "manga"
    },
    {
      "q": "Who created the Jujutsu Kaisen manga?",
      "options": [
        "Hayao Miyazaki",
        "Tite Kubo",
        "Gege Akutami",
        "Hideaki Anno"
      ],
      "a": "gege akutami"
    },
    {
      "q": "Who created the Fullmetal Alchemist manga?",
      "options": [
        "Light Yagami",
        "Yuji Itadori",
        "Shinji Ikari",
        "Hiromu Arakawa"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "In which decade did the original Cowboy Bebop manga begin serialization?",
      "options": [
        "Edward Elric",
        "Akira Toriyama",
        "2010s",
        "Yuji Itadori"
      ],
      "a": "2010s"
    },
    {
      "q": "Who created the Naruto manga?",
      "options": [
        "Akira Toriyama",
        "Hayao Miyazaki",
        "Tanjiro Kamado",
        "Masashi Kishimoto"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "In which decade did the original Tokyo Ghoul manga begin serialization?",
      "options": [
        "1980s",
        "Shinji Ikari",
        "Yuji Itadori",
        "Monkey D. Luffy"
      ],
      "a": "1980s"
    },
    {
      "q": "What term describes Japanese comics like Tokyo Ghoul?",
      "options": [
        "Goku",
        "Koyoharu Gotouge",
        "Yoshihiro Togashi",
        "Manga"
      ],
      "a": "manga"
    },
    {
      "q": "What term describes Japanese comics like One Piece?",
      "options": [
        "Spike Spiegel",
        "Eren Yeager",
        "Manga",
        "Sui Ishida"
      ],
      "a": "manga"
    },
    {
      "q": "In which setting does Demon Slayer primarily take place?",
      "options": [
        "Eiichiro Oda",
        "Taisho era",
        "Yuji Itadori",
        "Hajime Isayama"
      ],
      "a": "taisho era"
    },
    {
      "q": "What term describes Japanese comics like My Hero Academia?",
      "options": [
        "Hiromu Arakawa",
        "Manga",
        "Ken Kaneki",
        "Goku"
      ],
      "a": "manga"
    },
    {
      "q": "In which setting does Fullmetal Alchemist primarily take place?",
      "options": [
        "Eren Yeager",
        "Spike Spiegel",
        "Sui Ishida",
        "Amestris"
      ],
      "a": "amestris"
    },
    {
      "q": "In which decade did the original Cowboy Bebop manga begin serialization?",
      "options": [
        "1980s",
        "Shinichirō Watanabe",
        "Hayao Miyazaki",
        "Tanjiro Kamado"
      ],
      "a": "1980s"
    },
    {
      "q": "Which studio animated Attack on Titan (well-known adaptation)?",
      "options": [
        "MAPPA",
        "Masashi Kishimoto",
        "Ichigo Kurosaki",
        "Hiromu Arakawa"
      ],
      "a": "mappa"
    },
    {
      "q": "In which decade did the original Death Note manga begin serialization?",
      "options": [
        "Sui Ishida",
        "1990s",
        "Masashi Kishimoto",
        "Light Yagami"
      ],
      "a": "1990s"
    },
    {
      "q": "Which studio animated Spirited Away (well-known adaptation)?",
      "options": [
        "Tsugumi Ohba",
        "Hayao Miyazaki",
        "Tanjiro Kamado",
        "MAPPA"
      ],
      "a": "mappa"
    },
    {
      "q": "In which decade did the original Naruto manga begin serialization?",
      "options": [
        "Edward Elric",
        "1990s",
        "Kohei Horikoshi",
        "Ichigo Kurosaki"
      ],
      "a": "1990s"
    },
    {
      "q": "In which decade did the original Dragon Ball manga begin serialization?",
      "options": [
        "Hideaki Anno",
        "Eiichiro Oda",
        "1990s",
        "Kohei Horikoshi"
      ],
      "a": "1990s"
    },
    {
      "q": "Who is the main protagonist of Cowboy Bebop?",
      "options": [
        "Spike Spiegel",
        "Monkey D. Luffy",
        "Sui Ishida",
        "Koyoharu Gotouge"
      ],
      "a": "spike spiegel"
    },
    {
      "q": "Who created the Jujutsu Kaisen manga?",
      "options": [
        "Hiromu Arakawa",
        "Naruto Uzumaki",
        "Gege Akutami",
        "Koyoharu Gotouge"
      ],
      "a": "gege akutami"
    },
    {
      "q": "Who created the Attack on Titan manga?",
      "options": [
        "Akira Toriyama",
        "Hajime Isayama",
        "Naruto Uzumaki",
        "Edward Elric"
      ],
      "a": "hajime isayama"
    },
    {
      "q": "Who is the main protagonist of Demon Slayer?",
      "options": [
        "Light Yagami",
        "Tanjiro Kamado",
        "Goku",
        "Koyoharu Gotouge"
      ],
      "a": "tanjiro kamado"
    },
    {
      "q": "What term describes Japanese comics like Attack on Titan?",
      "options": [
        "Manga",
        "Hayao Miyazaki",
        "Light Yagami",
        "Hajime Isayama"
      ],
      "a": "manga"
    },
    {
      "q": "In which setting does Attack on Titan primarily take place?",
      "options": [
        "Ichigo Kurosaki",
        "Yuji Itadori",
        "Paradis",
        "Masashi Kishimoto"
      ],
      "a": "paradis"
    },
    {
      "q": "Which studio animated Bleach (well-known adaptation)?",
      "options": [
        "MAPPA",
        "Tanjiro Kamado",
        "Kohei Horikoshi",
        "Yuji Itadori"
      ],
      "a": "mappa"
    },
    {
      "q": "Who created the Naruto manga?",
      "options": [
        "Eren Yeager",
        "Masashi Kishimoto",
        "Monkey D. Luffy",
        "Gon Freecss"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "Who is the main protagonist of Naruto?",
      "options": [
        "Naruto Uzumaki",
        "Tite Kubo",
        "Gege Akutami",
        "Shinichirō Watanabe"
      ],
      "a": "naruto uzumaki"
    },
    {
      "q": "What term describes Japanese comics like Spirited Away?",
      "options": [
        "Manga",
        "Chihiro Ogino",
        "Tite Kubo",
        "Koyoharu Gotouge"
      ],
      "a": "manga"
    },
    {
      "q": "In which decade did the original Bleach manga begin serialization?",
      "options": [
        "1990s",
        "Naruto Uzumaki",
        "Eren Yeager",
        "Shinji Ikari"
      ],
      "a": "1990s"
    },
    {
      "q": "Which studio animated My Hero Academia (well-known adaptation)?",
      "options": [
        "Tite Kubo",
        "Edward Elric",
        "Studio Ghibli",
        "Tanjiro Kamado"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "What term describes Japanese comics like Hunter x Hunter?",
      "options": [
        "Manga",
        "Hajime Isayama",
        "Chihiro Ogino",
        "Shinji Ikari"
      ],
      "a": "manga"
    },
    {
      "q": "Who is the main protagonist of Bleach?",
      "options": [
        "Ichigo Kurosaki",
        "Shinichirō Watanabe",
        "Koyoharu Gotouge",
        "Eren Yeager"
      ],
      "a": "ichigo kurosaki"
    },
    {
      "q": "Who is the main protagonist of Tokyo Ghoul?",
      "options": [
        "Ken Kaneki",
        "Hideaki Anno",
        "Chihiro Ogino",
        "Yuji Itadori"
      ],
      "a": "ken kaneki"
    },
    {
      "q": "Who created the Demon Slayer manga?",
      "options": [
        "Kohei Horikoshi",
        "Akira Toriyama",
        "Koyoharu Gotouge",
        "Eiichiro Oda"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "What term describes Japanese comics like Bleach?",
      "options": [
        "Sui Ishida",
        "Manga",
        "Spike Spiegel",
        "Monkey D. Luffy"
      ],
      "a": "manga"
    },
    {
      "q": "Which studio animated Tokyo Ghoul (well-known adaptation)?",
      "options": [
        "Tsugumi Ohba",
        "Izuku Midoriya",
        "Hideaki Anno",
        "Madhouse"
      ],
      "a": "madhouse"
    },
    {
      "q": "Who created the Demon Slayer manga?",
      "options": [
        "Kohei Horikoshi",
        "Koyoharu Gotouge",
        "Chihiro Ogino",
        "Shinji Ikari"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "What term describes Japanese comics like Tokyo Ghoul?",
      "options": [
        "Goku",
        "Sui Ishida",
        "Manga",
        "Gege Akutami"
      ],
      "a": "manga"
    },
    {
      "q": "Which studio animated Hunter x Hunter (well-known adaptation)?",
      "options": [
        "Masashi Kishimoto",
        "Gon Freecss",
        "Eren Yeager",
        "Bones"
      ],
      "a": "bones"
    },
    {
      "q": "Who created the Tokyo Ghoul manga?",
      "options": [
        "Naruto Uzumaki",
        "Sui Ishida",
        "Hiromu Arakawa",
        "Ichigo Kurosaki"
      ],
      "a": "sui ishida"
    },
    {
      "q": "What term describes Japanese comics like Demon Slayer?",
      "options": [
        "Tite Kubo",
        "Hideaki Anno",
        "Manga",
        "Edward Elric"
      ],
      "a": "manga"
    },
    {
      "q": "What term describes Japanese comics like Tokyo Ghoul?",
      "options": [
        "Eiichiro Oda",
        "Eren Yeager",
        "Manga",
        "Izuku Midoriya"
      ],
      "a": "manga"
    },
    {
      "q": "Who is the main protagonist of Neon Genesis Evangelion?",
      "options": [
        "Koyoharu Gotouge",
        "Sui Ishida",
        "Shinji Ikari",
        "Ken Kaneki"
      ],
      "a": "shinji ikari"
    },
    {
      "q": "Who created the Tokyo Ghoul manga?",
      "options": [
        "Edward Elric",
        "Akira Toriyama",
        "Yoshihiro Togashi",
        "Sui Ishida"
      ],
      "a": "sui ishida"
    },
    {
      "q": "In which decade did the original Bleach manga begin serialization?",
      "options": [
        "Hajime Isayama",
        "2010s",
        "Edward Elric",
        "Ichigo Kurosaki"
      ],
      "a": "2010s"
    },
    {
      "q": "Which studio animated Spirited Away (well-known adaptation)?",
      "options": [
        "Bones",
        "Akira Toriyama",
        "Hiromu Arakawa",
        "Gon Freecss"
      ],
      "a": "bones"
    },
    {
      "q": "In which setting does Fullmetal Alchemist primarily take place?",
      "options": [
        "Ichigo Kurosaki",
        "Amestris",
        "Eren Yeager",
        "Hayao Miyazaki"
      ],
      "a": "amestris"
    },
    {
      "q": "What term describes Japanese comics like One Piece?",
      "options": [
        "Manga",
        "Ichigo Kurosaki",
        "Tite Kubo",
        "Tanjiro Kamado"
      ],
      "a": "manga"
    },
    {
      "q": "What term describes Japanese comics like My Hero Academia?",
      "options": [
        "Eren Yeager",
        "Hayao Miyazaki",
        "Manga",
        "Tanjiro Kamado"
      ],
      "a": "manga"
    },
    {
      "q": "In which decade did the original Fullmetal Alchemist manga begin serialization?",
      "options": [
        "Ichigo Kurosaki",
        "Tanjiro Kamado",
        "Tsugumi Ohba",
        "1980s"
      ],
      "a": "1980s"
    },
    {
      "q": "Which studio animated My Hero Academia (well-known adaptation)?",
      "options": [
        "Ken Kaneki",
        "Tanjiro Kamado",
        "Ufotable",
        "Hiromu Arakawa"
      ],
      "a": "ufotable"
    },
    {
      "q": "In which decade did the original Dragon Ball manga begin serialization?",
      "options": [
        "Ken Kaneki",
        "2000s",
        "Yoshihiro Togashi",
        "Ichigo Kurosaki"
      ],
      "a": "2000s"
    },
    {
      "q": "Which studio animated Fullmetal Alchemist (well-known adaptation)?",
      "options": [
        "MAPPA",
        "Light Yagami",
        "Izuku Midoriya",
        "Eiichiro Oda"
      ],
      "a": "mappa"
    },
    {
      "q": "What term describes Japanese comics like Naruto?",
      "options": [
        "Shinichirō Watanabe",
        "Manga",
        "Light Yagami",
        "Hayao Miyazaki"
      ],
      "a": "manga"
    },
    {
      "q": "In which setting does Hunter x Hunter primarily take place?",
      "options": [
        "Hajime Isayama",
        "Chihiro Ogino",
        "Light Yagami",
        "Whale Island"
      ],
      "a": "whale island"
    },
    {
      "q": "Who is the main protagonist of Fullmetal Alchemist?",
      "options": [
        "Yoshihiro Togashi",
        "Yuji Itadori",
        "Sui Ishida",
        "Edward Elric"
      ],
      "a": "edward elric"
    },
    {
      "q": "Who is the main protagonist of Dragon Ball?",
      "options": [
        "Sui Ishida",
        "Edward Elric",
        "Gege Akutami",
        "Goku"
      ],
      "a": "goku"
    },
    {
      "q": "Who is the main protagonist of Neon Genesis Evangelion?",
      "options": [
        "Shinji Ikari",
        "Koyoharu Gotouge",
        "Monkey D. Luffy",
        "Izuku Midoriya"
      ],
      "a": "shinji ikari"
    },
    {
      "q": "In which decade did the original Death Note manga begin serialization?",
      "options": [
        "Naruto Uzumaki",
        "Eren Yeager",
        "Hayao Miyazaki",
        "1980s"
      ],
      "a": "1980s"
    },
    {
      "q": "Who is the main protagonist of Hunter x Hunter?",
      "options": [
        "Hideaki Anno",
        "Gon Freecss",
        "Ken Kaneki",
        "Hajime Isayama"
      ],
      "a": "gon freecss"
    },
    {
      "q": "What term describes Japanese comics like Tokyo Ghoul?",
      "options": [
        "Manga",
        "Tsugumi Ohba",
        "Hiromu Arakawa",
        "Koyoharu Gotouge"
      ],
      "a": "manga"
    },
    {
      "q": "In which setting does Hunter x Hunter primarily take place?",
      "options": [
        "Sui Ishida",
        "Gon Freecss",
        "Edward Elric",
        "Whale Island"
      ],
      "a": "whale island"
    },
    {
      "q": "What term describes Japanese comics like One Piece?",
      "options": [
        "Manga",
        "Tanjiro Kamado",
        "Sui Ishida",
        "Spike Spiegel"
      ],
      "a": "manga"
    },
    {
      "q": "Who created the One Piece manga?",
      "options": [
        "Hideaki Anno",
        "Eiichiro Oda",
        "Shinji Ikari",
        "Shinichirō Watanabe"
      ],
      "a": "eiichiro oda"
    },
    {
      "q": "Which studio animated Demon Slayer (well-known adaptation)?",
      "options": [
        "Ichigo Kurosaki",
        "Light Yagami",
        "Studio Ghibli",
        "Ken Kaneki"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Who created the Naruto manga?",
      "options": [
        "Hiromu Arakawa",
        "Masashi Kishimoto",
        "Gon Freecss",
        "Hideaki Anno"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "Who created the My Hero Academia manga?",
      "options": [
        "Tanjiro Kamado",
        "Kohei Horikoshi",
        "Akira Toriyama",
        "Yuji Itadori"
      ],
      "a": "kohei horikoshi"
    },
    {
      "q": "In which setting does Fullmetal Alchemist primarily take place?",
      "options": [
        "Gege Akutami",
        "Amestris",
        "Sui Ishida",
        "Spike Spiegel"
      ],
      "a": "amestris"
    },
    {
      "q": "In which decade did the original Fullmetal Alchemist manga begin serialization?",
      "options": [
        "Ken Kaneki",
        "Koyoharu Gotouge",
        "2000s",
        "Tanjiro Kamado"
      ],
      "a": "2000s"
    },
    {
      "q": "Who is the main protagonist of One Piece?",
      "options": [
        "Eren Yeager",
        "Gege Akutami",
        "Gon Freecss",
        "Monkey D. Luffy"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "Who is the main protagonist of Spirited Away?",
      "options": [
        "Izuku Midoriya",
        "Chihiro Ogino",
        "Masashi Kishimoto",
        "Eren Yeager"
      ],
      "a": "chihiro ogino"
    },
    {
      "q": "Who is the main protagonist of Death Note?",
      "options": [
        "Koyoharu Gotouge",
        "Light Yagami",
        "Hayao Miyazaki",
        "Yuji Itadori"
      ],
      "a": "light yagami"
    },
    {
      "q": "In which setting does Bleach primarily take place?",
      "options": [
        "Karakura Town",
        "Tsugumi Ohba",
        "Yoshihiro Togashi",
        "Shinji Ikari"
      ],
      "a": "karakura town"
    },
    {
      "q": "Who created the Jujutsu Kaisen manga?",
      "options": [
        "Hayao Miyazaki",
        "Hajime Isayama",
        "Izuku Midoriya",
        "Gege Akutami"
      ],
      "a": "gege akutami"
    },
    {
      "q": "Which studio animated Jujutsu Kaisen (well-known adaptation)?",
      "options": [
        "Koyoharu Gotouge",
        "Eren Yeager",
        "Edward Elric",
        "MAPPA"
      ],
      "a": "mappa"
    },
    {
      "q": "In which decade did the original Jujutsu Kaisen manga begin serialization?",
      "options": [
        "Eiichiro Oda",
        "Hiromu Arakawa",
        "Yuji Itadori",
        "2010s"
      ],
      "a": "2010s"
    },
    {
      "q": "What term describes Japanese comics like Naruto?",
      "options": [
        "Tite Kubo",
        "Kohei Horikoshi",
        "Manga",
        "Tanjiro Kamado"
      ],
      "a": "manga"
    },
    {
      "q": "Who created the Dragon Ball manga?",
      "options": [
        "Hideaki Anno",
        "Chihiro Ogino",
        "Akira Toriyama",
        "Eiichiro Oda"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "Who created the Bleach manga?",
      "options": [
        "Tite Kubo",
        "Hayao Miyazaki",
        "Eren Yeager",
        "Tsugumi Ohba"
      ],
      "a": "tite kubo"
    },
    {
      "q": "In which decade did the original Spirited Away manga begin serialization?",
      "options": [
        "2000s",
        "Masashi Kishimoto",
        "Yoshihiro Togashi",
        "Shinichirō Watanabe"
      ],
      "a": "2000s"
    },
    {
      "q": "What term describes Japanese comics like Death Note?",
      "options": [
        "Manga",
        "Gege Akutami",
        "Koyoharu Gotouge",
        "Masashi Kishimoto"
      ],
      "a": "manga"
    },
    {
      "q": "Who created the Tokyo Ghoul manga?",
      "options": [
        "Masashi Kishimoto",
        "Ichigo Kurosaki",
        "Sui Ishida",
        "Goku"
      ],
      "a": "sui ishida"
    },
    {
      "q": "Who is the main protagonist of My Hero Academia?",
      "options": [
        "Sui Ishida",
        "Hayao Miyazaki",
        "Izuku Midoriya",
        "Masashi Kishimoto"
      ],
      "a": "izuku midoriya"
    },
    {
      "q": "Who created the Attack on Titan manga?",
      "options": [
        "Naruto Uzumaki",
        "Tanjiro Kamado",
        "Hajime Isayama",
        "Tsugumi Ohba"
      ],
      "a": "hajime isayama"
    },
    {
      "q": "What term describes Japanese comics like Death Note?",
      "options": [
        "Edward Elric",
        "Tite Kubo",
        "Manga",
        "Ichigo Kurosaki"
      ],
      "a": "manga"
    },
    {
      "q": "Who created the Bleach manga?",
      "options": [
        "Tanjiro Kamado",
        "Ichigo Kurosaki",
        "Tite Kubo",
        "Sui Ishida"
      ],
      "a": "tite kubo"
    },
    {
      "q": "In which setting does Cowboy Bebop primarily take place?",
      "options": [
        "Gon Freecss",
        "Shinichirō Watanabe",
        "Bebop",
        "Hajime Isayama"
      ],
      "a": "bebop"
    },
    {
      "q": "Which studio animated Fullmetal Alchemist (well-known adaptation)?",
      "options": [
        "Monkey D. Luffy",
        "Ufotable",
        "Akira Toriyama",
        "Koyoharu Gotouge"
      ],
      "a": "ufotable"
    },
    {
      "q": "Which studio animated Attack on Titan (well-known adaptation)?",
      "options": [
        "MAPPA",
        "Yoshihiro Togashi",
        "Ichigo Kurosaki",
        "Light Yagami"
      ],
      "a": "mappa"
    },
    {
      "q": "In which setting does Tokyo Ghoul primarily take place?",
      "options": [
        "Tokyo",
        "Yoshihiro Togashi",
        "Hayao Miyazaki",
        "Ken Kaneki"
      ],
      "a": "tokyo"
    },
    {
      "q": "What term describes Japanese comics like Attack on Titan?",
      "options": [
        "Manga",
        "Light Yagami",
        "Goku",
        "Koyoharu Gotouge"
      ],
      "a": "manga"
    },
    {
      "q": "Which studio animated Neon Genesis Evangelion (well-known adaptation)?",
      "options": [
        "Kohei Horikoshi",
        "Hajime Isayama",
        "Ichigo Kurosaki",
        "Studio Ghibli"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Who is the main protagonist of Demon Slayer?",
      "options": [
        "Ken Kaneki",
        "Shinji Ikari",
        "Naruto Uzumaki",
        "Tanjiro Kamado"
      ],
      "a": "tanjiro kamado"
    },
    {
      "q": "In which decade did the original Attack on Titan manga begin serialization?",
      "options": [
        "Ken Kaneki",
        "Tite Kubo",
        "1980s",
        "Akira Toriyama"
      ],
      "a": "1980s"
    },
    {
      "q": "What term describes Japanese comics like Naruto?",
      "options": [
        "Akira Toriyama",
        "Tite Kubo",
        "Manga",
        "Ichigo Kurosaki"
      ],
      "a": "manga"
    },
    {
      "q": "In which decade did the original Attack on Titan manga begin serialization?",
      "options": [
        "Kohei Horikoshi",
        "2000s",
        "Gege Akutami",
        "Sui Ishida"
      ],
      "a": "2000s"
    },
    {
      "q": "Who is the main protagonist of Hunter x Hunter?",
      "options": [
        "Edward Elric",
        "Hideaki Anno",
        "Gon Freecss",
        "Koyoharu Gotouge"
      ],
      "a": "gon freecss"
    },
    {
      "q": "In which decade did the original Bleach manga begin serialization?",
      "options": [
        "Tanjiro Kamado",
        "Gege Akutami",
        "1990s",
        "Hiromu Arakawa"
      ],
      "a": "1990s"
    },
    {
      "q": "In which setting does Tokyo Ghoul primarily take place?",
      "options": [
        "Eiichiro Oda",
        "Naruto Uzumaki",
        "Hajime Isayama",
        "Tokyo"
      ],
      "a": "tokyo"
    },
    {
      "q": "What term describes Japanese comics like One Piece?",
      "options": [
        "Manga",
        "Masashi Kishimoto",
        "Akira Toriyama",
        "Yoshihiro Togashi"
      ],
      "a": "manga"
    },
    {
      "q": "In which decade did the original Naruto manga begin serialization?",
      "options": [
        "Hayao Miyazaki",
        "Ken Kaneki",
        "2010s",
        "Naruto Uzumaki"
      ],
      "a": "2010s"
    },
    {
      "q": "What term describes Japanese comics like Demon Slayer?",
      "options": [
        "Manga",
        "Tite Kubo",
        "Hayao Miyazaki",
        "Shinichirō Watanabe"
      ],
      "a": "manga"
    },
    {
      "q": "Which studio animated My Hero Academia (well-known adaptation)?",
      "options": [
        "Monkey D. Luffy",
        "Shinji Ikari",
        "Ufotable",
        "Hiromu Arakawa"
      ],
      "a": "ufotable"
    },
    {
      "q": "Which studio animated Demon Slayer (well-known adaptation)?",
      "options": [
        "Spike Spiegel",
        "Tanjiro Kamado",
        "Hiromu Arakawa",
        "Bones"
      ],
      "a": "bones"
    },
    {
      "q": "Who is the main protagonist of One Piece?",
      "options": [
        "Hayao Miyazaki",
        "Monkey D. Luffy",
        "Yoshihiro Togashi",
        "Light Yagami"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "Who is the main protagonist of Tokyo Ghoul?",
      "options": [
        "Ichigo Kurosaki",
        "Eiichiro Oda",
        "Ken Kaneki",
        "Gon Freecss"
      ],
      "a": "ken kaneki"
    },
    {
      "q": "Who is the main protagonist of Neon Genesis Evangelion?",
      "options": [
        "Light Yagami",
        "Akira Toriyama",
        "Shinji Ikari",
        "Hideaki Anno"
      ],
      "a": "shinji ikari"
    },
    {
      "q": "What term describes Japanese comics like Hunter x Hunter?",
      "options": [
        "Izuku Midoriya",
        "Tanjiro Kamado",
        "Manga",
        "Tsugumi Ohba"
      ],
      "a": "manga"
    },
    {
      "q": "Which studio animated Cowboy Bebop (well-known adaptation)?",
      "options": [
        "Yuji Itadori",
        "Ken Kaneki",
        "Madhouse",
        "Chihiro Ogino"
      ],
      "a": "madhouse"
    },
    {
      "q": "Which studio animated Death Note (well-known adaptation)?",
      "options": [
        "Chihiro Ogino",
        "Tsugumi Ohba",
        "Hayao Miyazaki",
        "Studio Ghibli"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Which studio animated Bleach (well-known adaptation)?",
      "options": [
        "Studio Ghibli",
        "Edward Elric",
        "Spike Spiegel",
        "Tite Kubo"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Who is the main protagonist of Dragon Ball?",
      "options": [
        "Goku",
        "Kohei Horikoshi",
        "Masashi Kishimoto",
        "Ken Kaneki"
      ],
      "a": "goku"
    },
    {
      "q": "Who is the main protagonist of My Hero Academia?",
      "options": [
        "Izuku Midoriya",
        "Kohei Horikoshi",
        "Hideaki Anno",
        "Gon Freecss"
      ],
      "a": "izuku midoriya"
    },
    {
      "q": "Which studio animated Attack on Titan (well-known adaptation)?",
      "options": [
        "Goku",
        "Spike Spiegel",
        "Sui Ishida",
        "Ufotable"
      ],
      "a": "ufotable"
    },
    {
      "q": "Who created the Hunter x Hunter manga?",
      "options": [
        "Spike Spiegel",
        "Yoshihiro Togashi",
        "Gon Freecss",
        "Goku"
      ],
      "a": "yoshihiro togashi"
    },
    {
      "q": "In which decade did the original Spirited Away manga begin serialization?",
      "options": [
        "Tanjiro Kamado",
        "1980s",
        "Hajime Isayama",
        "Naruto Uzumaki"
      ],
      "a": "1980s"
    },
    {
      "q": "Who created the Fullmetal Alchemist manga?",
      "options": [
        "Shinichirō Watanabe",
        "Hiromu Arakawa",
        "Tite Kubo",
        "Light Yagami"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "In which decade did the original Fullmetal Alchemist manga begin serialization?",
      "options": [
        "Hiromu Arakawa",
        "1990s",
        "Tite Kubo",
        "Gon Freecss"
      ],
      "a": "1990s"
    },
    {
      "q": "Which studio animated Spirited Away (well-known adaptation)?",
      "options": [
        "Studio Ghibli",
        "Gege Akutami",
        "Gon Freecss",
        "Koyoharu Gotouge"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Which studio animated Cowboy Bebop (well-known adaptation)?",
      "options": [
        "Yoshihiro Togashi",
        "Ichigo Kurosaki",
        "Hajime Isayama",
        "Madhouse"
      ],
      "a": "madhouse"
    },
    {
      "q": "Who created the My Hero Academia manga?",
      "options": [
        "Ichigo Kurosaki",
        "Tanjiro Kamado",
        "Chihiro Ogino",
        "Kohei Horikoshi"
      ],
      "a": "kohei horikoshi"
    },
    {
      "q": "In which decade did the original Tokyo Ghoul manga begin serialization?",
      "options": [
        "Tite Kubo",
        "Ken Kaneki",
        "Gege Akutami",
        "2010s"
      ],
      "a": "2010s"
    },
    {
      "q": "Who is the main protagonist of Tokyo Ghoul?",
      "options": [
        "Chihiro Ogino",
        "Gon Freecss",
        "Ken Kaneki",
        "Tite Kubo"
      ],
      "a": "ken kaneki"
    },
    {
      "q": "Who is the main protagonist of Neon Genesis Evangelion?",
      "options": [
        "Monkey D. Luffy",
        "Shinji Ikari",
        "Ken Kaneki",
        "Tanjiro Kamado"
      ],
      "a": "shinji ikari"
    },
    {
      "q": "In which decade did the original Dragon Ball manga begin serialization?",
      "options": [
        "1990s",
        "Eren Yeager",
        "Shinji Ikari",
        "Gege Akutami"
      ],
      "a": "1990s"
    },
    {
      "q": "Which studio animated Hunter x Hunter (well-known adaptation)?",
      "options": [
        "Koyoharu Gotouge",
        "Tsugumi Ohba",
        "Naruto Uzumaki",
        "Studio Ghibli"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Who created the Jujutsu Kaisen manga?",
      "options": [
        "Gon Freecss",
        "Gege Akutami",
        "Izuku Midoriya",
        "Koyoharu Gotouge"
      ],
      "a": "gege akutami"
    },
    {
      "q": "Which studio animated Naruto (well-known adaptation)?",
      "options": [
        "Eiichiro Oda",
        "Shinichirō Watanabe",
        "Madhouse",
        "Izuku Midoriya"
      ],
      "a": "madhouse"
    },
    {
      "q": "Who created the Neon Genesis Evangelion manga?",
      "options": [
        "Light Yagami",
        "Yoshihiro Togashi",
        "Monkey D. Luffy",
        "Hideaki Anno"
      ],
      "a": "hideaki anno"
    },
    {
      "q": "Who created the Demon Slayer manga?",
      "options": [
        "Koyoharu Gotouge",
        "Masashi Kishimoto",
        "Hajime Isayama",
        "Spike Spiegel"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "In which setting does Fullmetal Alchemist primarily take place?",
      "options": [
        "Eiichiro Oda",
        "Light Yagami",
        "Ichigo Kurosaki",
        "Amestris"
      ],
      "a": "amestris"
    },
    {
      "q": "What term describes Japanese comics like My Hero Academia?",
      "options": [
        "Hiromu Arakawa",
        "Eiichiro Oda",
        "Edward Elric",
        "Manga"
      ],
      "a": "manga"
    },
    {
      "q": "Which studio animated Jujutsu Kaisen (well-known adaptation)?",
      "options": [
        "Gege Akutami",
        "Izuku Midoriya",
        "Wit Studio",
        "Gon Freecss"
      ],
      "a": "wit studio"
    },
    {
      "q": "Who created the Death Note manga?",
      "options": [
        "Tanjiro Kamado",
        "Tsugumi Ohba",
        "Kohei Horikoshi",
        "Yoshihiro Togashi"
      ],
      "a": "tsugumi ohba"
    },
    {
      "q": "In which setting does Jujutsu Kaisen primarily take place?",
      "options": [
        "Ken Kaneki",
        "Sui Ishida",
        "Tokyo",
        "Kohei Horikoshi"
      ],
      "a": "tokyo"
    },
    {
      "q": "In which decade did the original Demon Slayer manga begin serialization?",
      "options": [
        "Edward Elric",
        "Hajime Isayama",
        "Gon Freecss",
        "1980s"
      ],
      "a": "1980s"
    },
    {
      "q": "In which decade did the original Attack on Titan manga begin serialization?",
      "options": [
        "1990s",
        "Akira Toriyama",
        "Chihiro Ogino",
        "Eren Yeager"
      ],
      "a": "1990s"
    },
    {
      "q": "What term describes Japanese comics like One Piece?",
      "options": [
        "Tsugumi Ohba",
        "Manga",
        "Koyoharu Gotouge",
        "Ken Kaneki"
      ],
      "a": "manga"
    },
    {
      "q": "In which decade did the original Hunter x Hunter manga begin serialization?",
      "options": [
        "Light Yagami",
        "Ichigo Kurosaki",
        "Eren Yeager",
        "2010s"
      ],
      "a": "2010s"
    },
    {
      "q": "What term describes Japanese comics like Attack on Titan?",
      "options": [
        "Manga",
        "Koyoharu Gotouge",
        "Hiromu Arakawa",
        "Tsugumi Ohba"
      ],
      "a": "manga"
    },
    {
      "q": "In which setting does Spirited Away primarily take place?",
      "options": [
        "Studio Ghibli",
        "Eiichiro Oda",
        "Shinji Ikari",
        "Koyoharu Gotouge"
      ],
      "a": "studio ghibli"
    }
  ],
  "game": [
    {
      "q": "When was PUBG Mobile globally released?",
      "options": [
        "Sony",
        "Joel",
        "Epic Games",
        "2018"
      ],
      "a": "2018"
    },
    {
      "q": "Who developed PUBG (original PC)?",
      "options": [
        "PUBG Corporation",
        "Epic Games",
        "Santa Monica Studio",
        "FIFA Coins"
      ],
      "a": "pubg corporation"
    },
    {
      "q": "Which company developed Fortnite?",
      "options": [
        "Epic Games",
        "Joel",
        "Santa Monica Studio",
        "PUBG"
      ],
      "a": "epic games"
    },
    {
      "q": "Which game popularized the battle royale genre in 2017?",
      "options": [
        "Epic Games",
        "Sony",
        "FIFA Coins",
        "PUBG"
      ],
      "a": "pubg"
    },
    {
      "q": "What is the main currency in FIFA Ultimate Team?",
      "options": [
        "PUBG Corporation",
        "GTA V",
        "FIFA Coins",
        "God of War"
      ],
      "a": "fifa coins"
    },
    {
      "q": "Which studio developed God of War (2018)?",
      "options": [
        "PUBG Corporation",
        "God of War",
        "Santa Monica Studio",
        "FIFA Coins"
      ],
      "a": "santa monica studio"
    },
    {
      "q": "Which console is PlayStation 5 made by?",
      "options": [
        "PUBG",
        "GTA V",
        "Sony",
        "2018"
      ],
      "a": "sony"
    },
    {
      "q": "What is the protagonist’s name in The Last of Us?",
      "options": [
        "GTA V",
        "Sony",
        "Joel",
        "PUBG Corporation"
      ],
      "a": "joel"
    },
    {
      "q": "Which game features the character Kratos?",
      "options": [
        "God of War",
        "Santa Monica Studio",
        "2018",
        "Sony"
      ],
      "a": "god of war"
    },
    {
      "q": "Which series features the city Los Santos?",
      "options": [
        "Epic Games",
        "GTA V",
        "Joel",
        "Sony"
      ],
      "a": "gta v"
    },
    {
      "q": "Fortnite is primarily played on which platform?",
      "options": [
        "2018",
        "PUBG Corporation",
        "FIFA Coins",
        "Multi-platform"
      ],
      "a": "multi-platform"
    },
    {
      "q": "In which year was GTA V first released?",
      "options": [
        "Epic Games",
        "2018",
        "Joel",
        "2013"
      ],
      "a": "2013"
    },
    {
      "q": "What is the main genre of God of War?",
      "options": [
        "Sony",
        "PUBG Corporation",
        "Sandbox",
        "2018"
      ],
      "a": "sandbox"
    },
    {
      "q": "What is the main genre of League of Legends?",
      "options": [
        "Battle Royale",
        "God of War",
        "Santa Monica Studio",
        "Santa Monica Studio"
      ],
      "a": "battle royale"
    },
    {
      "q": "Mobile Legends is primarily played on which platform?",
      "options": [
        "God of War",
        "Multi-platform",
        "Epic Games",
        "PUBG Corporation"
      ],
      "a": "multi-platform"
    },
    {
      "q": "What is the main genre of PUBG?",
      "options": [
        "Epic Games",
        "Epic Games",
        "Sony",
        "Sports"
      ],
      "a": "sports"
    },
    {
      "q": "FIFA is primarily played on which platform?",
      "options": [
        "PUBG",
        "Joel",
        "Mobile",
        "God of War"
      ],
      "a": "mobile"
    },
    {
      "q": "Which company developed GTA V?",
      "options": [
        "FIFA Coins",
        "Sony",
        "2018",
        "Rockstar Games"
      ],
      "a": "rockstar games"
    },
    {
      "q": "What is the main genre of Fortnite?",
      "options": [
        "Santa Monica Studio",
        "Action-adventure",
        "FIFA Coins",
        "Sony"
      ],
      "a": "action-adventure"
    },
    {
      "q": "What is the main genre of Minecraft?",
      "options": [
        "Sports",
        "God of War",
        "2018",
        "Santa Monica Studio"
      ],
      "a": "sports"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "2011",
        "Santa Monica Studio",
        "Epic Games",
        "Epic Games"
      ],
      "a": "2011"
    },
    {
      "q": "Fortnite is primarily played on which platform?",
      "options": [
        "Sony",
        "2018",
        "Joel",
        "Console"
      ],
      "a": "console"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "FIFA Coins",
        "God of War",
        "PUBG Corporation",
        "2011"
      ],
      "a": "2011"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "PUBG",
        "God of War",
        "2018",
        "2011"
      ],
      "a": "2011"
    },
    {
      "q": "What is the main genre of Call of Duty?",
      "options": [
        "Battle Royale",
        "PUBG",
        "Joel",
        "2018"
      ],
      "a": "battle royale"
    },
    {
      "q": "What is the main genre of Call of Duty?",
      "options": [
        "GTA V",
        "Joel",
        "Sony",
        "Sports"
      ],
      "a": "sports"
    },
    {
      "q": "What is the main genre of God of War?",
      "options": [
        "Epic Games",
        "Action-adventure",
        "2018",
        "FIFA Coins"
      ],
      "a": "action-adventure"
    },
    {
      "q": "League of Legends is primarily played on which platform?",
      "options": [
        "2018",
        "Santa Monica Studio",
        "2018",
        "PC"
      ],
      "a": "pc"
    },
    {
      "q": "In which year was Assassin's Creed first released?",
      "options": [
        "2007",
        "Epic Games",
        "Santa Monica Studio",
        "Santa Monica Studio"
      ],
      "a": "2007"
    },
    {
      "q": "What is the main genre of Minecraft?",
      "options": [
        "2018",
        "PUBG",
        "Sports",
        "2018"
      ],
      "a": "sports"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "GTA V",
        "2011",
        "Santa Monica Studio",
        "Sony"
      ],
      "a": "2011"
    },
    {
      "q": "League of Legends is primarily played on which platform?",
      "options": [
        "FIFA Coins",
        "FIFA Coins",
        "Mobile",
        "Sony"
      ],
      "a": "mobile"
    },
    {
      "q": "Mobile Legends is primarily played on which platform?",
      "options": [
        "Joel",
        "Mobile",
        "Santa Monica Studio",
        "God of War"
      ],
      "a": "mobile"
    },
    {
      "q": "GTA V is primarily played on which platform?",
      "options": [
        "Epic Games",
        "Epic Games",
        "PC",
        "PUBG"
      ],
      "a": "pc"
    },
    {
      "q": "What is the main genre of Call of Duty?",
      "options": [
        "Santa Monica Studio",
        "Sony",
        "PUBG Corporation",
        "Sandbox"
      ],
      "a": "sandbox"
    },
    {
      "q": "Fortnite is primarily played on which platform?",
      "options": [
        "PUBG Corporation",
        "Epic Games",
        "Mobile",
        "PUBG Corporation"
      ],
      "a": "mobile"
    },
    {
      "q": "In which year was FIFA first released?",
      "options": [
        "FIFA Coins",
        "1993",
        "Joel",
        "Santa Monica Studio"
      ],
      "a": "1993"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "Joel",
        "2018",
        "2011",
        "God of War"
      ],
      "a": "2011"
    },
    {
      "q": "League of Legends is primarily played on which platform?",
      "options": [
        "Console",
        "2018",
        "God of War",
        "Joel"
      ],
      "a": "console"
    },
    {
      "q": "What is the main genre of Mobile Legends?",
      "options": [
        "Santa Monica Studio",
        "Santa Monica Studio",
        "Epic Games",
        "Sports"
      ],
      "a": "sports"
    },
    {
      "q": "Which company developed Assassin's Creed?",
      "options": [
        "Sony",
        "Ubisoft",
        "PUBG",
        "PUBG"
      ],
      "a": "ubisoft"
    },
    {
      "q": "In which year was Assassin's Creed first released?",
      "options": [
        "FIFA Coins",
        "PUBG Corporation",
        "2007",
        "Santa Monica Studio"
      ],
      "a": "2007"
    },
    {
      "q": "Which company developed PUBG?",
      "options": [
        "Sony",
        "Joel",
        "2018",
        "PUBG Corporation"
      ],
      "a": "pubg corporation"
    },
    {
      "q": "In which year was Fortnite first released?",
      "options": [
        "PUBG Corporation",
        "2017",
        "Epic Games",
        "FIFA Coins"
      ],
      "a": "2017"
    },
    {
      "q": "Assassin's Creed is primarily played on which platform?",
      "options": [
        "2018",
        "Santa Monica Studio",
        "God of War",
        "Mobile"
      ],
      "a": "mobile"
    },
    {
      "q": "GTA V is primarily played on which platform?",
      "options": [
        "PUBG Corporation",
        "God of War",
        "Console",
        "God of War"
      ],
      "a": "console"
    },
    {
      "q": "Which company developed FIFA?",
      "options": [
        "PUBG",
        "EA Sports",
        "Epic Games",
        "Epic Games"
      ],
      "a": "ea sports"
    },
    {
      "q": "Which company developed Minecraft?",
      "options": [
        "Mojang Studios",
        "2018",
        "Santa Monica Studio",
        "FIFA Coins"
      ],
      "a": "mojang studios"
    },
    {
      "q": "Which company developed Fortnite?",
      "options": [
        "PUBG",
        "FIFA Coins",
        "Epic Games",
        "2018"
      ],
      "a": "epic games"
    },
    {
      "q": "Which company developed Fortnite?",
      "options": [
        "FIFA Coins",
        "GTA V",
        "Epic Games",
        "PUBG"
      ],
      "a": "epic games"
    },
    {
      "q": "Which company developed Fortnite?",
      "options": [
        "PUBG Corporation",
        "2018",
        "Epic Games",
        "GTA V"
      ],
      "a": "epic games"
    },
    {
      "q": "Fortnite is primarily played on which platform?",
      "options": [
        "FIFA Coins",
        "Joel",
        "Santa Monica Studio",
        "Console"
      ],
      "a": "console"
    },
    {
      "q": "In which year was GTA V first released?",
      "options": [
        "2013",
        "GTA V",
        "PUBG Corporation",
        "PUBG"
      ],
      "a": "2013"
    },
    {
      "q": "In which year was FIFA first released?",
      "options": [
        "1993",
        "Santa Monica Studio",
        "God of War",
        "Epic Games"
      ],
      "a": "1993"
    },
    {
      "q": "Call of Duty is primarily played on which platform?",
      "options": [
        "2018",
        "2018",
        "2018",
        "PC"
      ],
      "a": "pc"
    },
    {
      "q": "What is the main genre of Assassin's Creed?",
      "options": [
        "2018",
        "RPG",
        "God of War",
        "Santa Monica Studio"
      ],
      "a": "rpg"
    },
    {
      "q": "Which company developed Minecraft?",
      "options": [
        "Santa Monica Studio",
        "FIFA Coins",
        "Joel",
        "Mojang Studios"
      ],
      "a": "mojang studios"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "2018",
        "Moonton",
        "GTA V",
        "God of War"
      ],
      "a": "moonton"
    },
    {
      "q": "What is the main genre of PUBG?",
      "options": [
        "PUBG Corporation",
        "Sandbox",
        "Santa Monica Studio",
        "FIFA Coins"
      ],
      "a": "sandbox"
    },
    {
      "q": "In which year was Fortnite first released?",
      "options": [
        "2017",
        "Epic Games",
        "Santa Monica Studio",
        "FIFA Coins"
      ],
      "a": "2017"
    },
    {
      "q": "Mobile Legends is primarily played on which platform?",
      "options": [
        "2018",
        "PUBG",
        "Joel",
        "PC"
      ],
      "a": "pc"
    },
    {
      "q": "In which year was PUBG first released?",
      "options": [
        "Epic Games",
        "2017",
        "PUBG",
        "Epic Games"
      ],
      "a": "2017"
    },
    {
      "q": "PUBG is primarily played on which platform?",
      "options": [
        "Mobile",
        "2018",
        "PUBG",
        "GTA V"
      ],
      "a": "mobile"
    },
    {
      "q": "Assassin's Creed is primarily played on which platform?",
      "options": [
        "Console",
        "PUBG",
        "Sony",
        "Sony"
      ],
      "a": "console"
    },
    {
      "q": "In which year was GTA V first released?",
      "options": [
        "God of War",
        "God of War",
        "Sony",
        "2013"
      ],
      "a": "2013"
    },
    {
      "q": "GTA V is primarily played on which platform?",
      "options": [
        "Epic Games",
        "Joel",
        "Joel",
        "Mobile"
      ],
      "a": "mobile"
    },
    {
      "q": "In which year was GTA V first released?",
      "options": [
        "Santa Monica Studio",
        "2013",
        "Joel",
        "Sony"
      ],
      "a": "2013"
    },
    {
      "q": "What is the main genre of PUBG?",
      "options": [
        "God of War",
        "Santa Monica Studio",
        "Sports",
        "Santa Monica Studio"
      ],
      "a": "sports"
    },
    {
      "q": "In which year was Mobile Legends first released?",
      "options": [
        "FIFA Coins",
        "2016",
        "Santa Monica Studio",
        "PUBG Corporation"
      ],
      "a": "2016"
    },
    {
      "q": "What is the main genre of PUBG?",
      "options": [
        "PUBG Corporation",
        "RPG",
        "GTA V",
        "FIFA Coins"
      ],
      "a": "rpg"
    },
    {
      "q": "Which company developed Assassin's Creed?",
      "options": [
        "Epic Games",
        "FIFA Coins",
        "Ubisoft",
        "PUBG Corporation"
      ],
      "a": "ubisoft"
    },
    {
      "q": "What is the main genre of Mobile Legends?",
      "options": [
        "2018",
        "Sandbox",
        "FIFA Coins",
        "Epic Games"
      ],
      "a": "sandbox"
    },
    {
      "q": "What is the main genre of League of Legends?",
      "options": [
        "Santa Monica Studio",
        "Joel",
        "PUBG Corporation",
        "Sports"
      ],
      "a": "sports"
    },
    {
      "q": "Which company developed League of Legends?",
      "options": [
        "God of War",
        "God of War",
        "God of War",
        "Riot Games"
      ],
      "a": "riot games"
    },
    {
      "q": "What is the main genre of League of Legends?",
      "options": [
        "2018",
        "Battle Royale",
        "Sony",
        "God of War"
      ],
      "a": "battle royale"
    },
    {
      "q": "What is the main genre of League of Legends?",
      "options": [
        "Sports",
        "Sony",
        "GTA V",
        "2018"
      ],
      "a": "sports"
    },
    {
      "q": "What is the main genre of Minecraft?",
      "options": [
        "Battle Royale",
        "2018",
        "Sony",
        "Joel"
      ],
      "a": "battle royale"
    },
    {
      "q": "What is the main genre of Minecraft?",
      "options": [
        "Santa Monica Studio",
        "Joel",
        "Joel",
        "Sports"
      ],
      "a": "sports"
    },
    {
      "q": "In which year was Fortnite first released?",
      "options": [
        "Epic Games",
        "2017",
        "Joel",
        "GTA V"
      ],
      "a": "2017"
    },
    {
      "q": "In which year was Fortnite first released?",
      "options": [
        "2017",
        "PUBG",
        "Santa Monica Studio",
        "PUBG Corporation"
      ],
      "a": "2017"
    },
    {
      "q": "League of Legends is primarily played on which platform?",
      "options": [
        "Multi-platform",
        "God of War",
        "PUBG",
        "PUBG Corporation"
      ],
      "a": "multi-platform"
    },
    {
      "q": "In which year was FIFA first released?",
      "options": [
        "Joel",
        "Joel",
        "PUBG Corporation",
        "1993"
      ],
      "a": "1993"
    },
    {
      "q": "Which company developed FIFA?",
      "options": [
        "EA Sports",
        "2018",
        "2018",
        "Santa Monica Studio"
      ],
      "a": "ea sports"
    },
    {
      "q": "Assassin's Creed is primarily played on which platform?",
      "options": [
        "PUBG",
        "GTA V",
        "PC",
        "Sony"
      ],
      "a": "pc"
    },
    {
      "q": "What is the main genre of Call of Duty?",
      "options": [
        "Sports",
        "2018",
        "FIFA Coins",
        "Santa Monica Studio"
      ],
      "a": "sports"
    },
    {
      "q": "FIFA is primarily played on which platform?",
      "options": [
        "GTA V",
        "Console",
        "Epic Games",
        "2018"
      ],
      "a": "console"
    },
    {
      "q": "Which company developed PUBG?",
      "options": [
        "2018",
        "Epic Games",
        "PUBG Corporation",
        "2018"
      ],
      "a": "pubg corporation"
    },
    {
      "q": "GTA V is primarily played on which platform?",
      "options": [
        "Sony",
        "Santa Monica Studio",
        "Mobile",
        "Joel"
      ],
      "a": "mobile"
    },
    {
      "q": "What is the main genre of Fortnite?",
      "options": [
        "FIFA Coins",
        "PUBG Corporation",
        "Sony",
        "RPG"
      ],
      "a": "rpg"
    },
    {
      "q": "What is the main genre of GTA V?",
      "options": [
        "RPG",
        "Santa Monica Studio",
        "Santa Monica Studio",
        "Santa Monica Studio"
      ],
      "a": "rpg"
    },
    {
      "q": "League of Legends is primarily played on which platform?",
      "options": [
        "Joel",
        "PC",
        "2018",
        "Sony"
      ],
      "a": "pc"
    },
    {
      "q": "FIFA is primarily played on which platform?",
      "options": [
        "Multi-platform",
        "God of War",
        "GTA V",
        "Santa Monica Studio"
      ],
      "a": "multi-platform"
    },
    {
      "q": "Which company developed Assassin's Creed?",
      "options": [
        "Sony",
        "PUBG Corporation",
        "Ubisoft",
        "Santa Monica Studio"
      ],
      "a": "ubisoft"
    },
    {
      "q": "Call of Duty is primarily played on which platform?",
      "options": [
        "Multi-platform",
        "PUBG Corporation",
        "God of War",
        "PUBG"
      ],
      "a": "multi-platform"
    },
    {
      "q": "GTA V is primarily played on which platform?",
      "options": [
        "2018",
        "Multi-platform",
        "God of War",
        "2018"
      ],
      "a": "multi-platform"
    },
    {
      "q": "God of War is primarily played on which platform?",
      "options": [
        "FIFA Coins",
        "Epic Games",
        "Santa Monica Studio",
        "Console"
      ],
      "a": "console"
    },
    {
      "q": "Which company developed FIFA?",
      "options": [
        "EA Sports",
        "PUBG Corporation",
        "FIFA Coins",
        "FIFA Coins"
      ],
      "a": "ea sports"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "God of War",
        "PUBG",
        "2011",
        "2018"
      ],
      "a": "2011"
    },
    {
      "q": "In which year was Assassin's Creed first released?",
      "options": [
        "PUBG",
        "FIFA Coins",
        "2007",
        "PUBG Corporation"
      ],
      "a": "2007"
    },
    {
      "q": "League of Legends is primarily played on which platform?",
      "options": [
        "Console",
        "God of War",
        "Santa Monica Studio",
        "Epic Games"
      ],
      "a": "console"
    }
  ],
  "bd": [
    {
      "q": "When did Bangladesh gain independence?",
      "options": [
        "1971",
        "1972",
        "Cox's Bazar",
        "Jackfruit"
      ],
      "a": "1971"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Sundarbans",
        "1971",
        "Chattogram Port",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "What is the capital of Bangladesh?",
      "options": [
        "Dhaka",
        "1972",
        "Taka",
        "Jackfruit"
      ],
      "a": "dhaka"
    },
    {
      "q": "What is the national fruit of Bangladesh?",
      "options": [
        "Dhaka",
        "Jackfruit",
        "1971",
        "Chattogram Port"
      ],
      "a": "jackfruit"
    },
    {
      "q": "Which is the longest beach in the world located in Bangladesh?",
      "options": [
        "Cox's Bazar",
        "Chattogram Port",
        "Sundarbans",
        "Jackfruit"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "What is the currency of Bangladesh?",
      "options": [
        "Cox's Bazar",
        "Taka",
        "1971",
        "Sheikh Mujibur Rahman"
      ],
      "a": "taka"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Sundarbans",
        "Sheikh Mujibur Rahman",
        "Cox's Bazar",
        "Chattogram Port"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Which year was the constitution of Bangladesh adopted?",
      "options": [
        "1971",
        "Chattogram Port",
        "Jackfruit",
        "1972"
      ],
      "a": "1972"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Sundarbans",
        "Cox's Bazar",
        "Sheikh Mujibur Rahman",
        "Dhaka"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which port is the busiest seaport in Bangladesh?",
      "options": [
        "Chattogram Port",
        "Dhaka",
        "1971",
        "Sheikh Mujibur Rahman"
      ],
      "a": "chattogram port"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Jackfruit",
        "Rajshahi",
        "Bengal",
        "Sundarbans"
      ],
      "a": "bengal"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Chattogram Port",
        "Sheikh Mujibur Rahman",
        "Sylhet",
        "Cox's Bazar"
      ],
      "a": "sylhet"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Chattogram Port",
        "Sylhet",
        "Water Lily",
        "Dhaka"
      ],
      "a": "water lily"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Barisal",
        "Bengal",
        "1971",
        "Rajshahi"
      ],
      "a": "bengal"
    },
    {
      "q": "When did Bangladesh gain independence?",
      "options": [
        "1971",
        "Barisal",
        "Rajshahi",
        "Rupee"
      ],
      "a": "1971"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Taka",
        "Sylhet",
        "Sundarbans",
        "Barisal"
      ],
      "a": "sylhet"
    },
    {
      "q": "What is the national fruit of Bangladesh?",
      "options": [
        "Dhaka",
        "Rajshahi",
        "Chattogram Port",
        "Jackfruit"
      ],
      "a": "jackfruit"
    },
    {
      "q": "Which port is the busiest seaport in Bangladesh?",
      "options": [
        "Chattogram Port",
        "Dhaka",
        "Cox's Bazar",
        "1972"
      ],
      "a": "chattogram port"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Khulna",
        "Sundarbans",
        "Sylhet",
        "1972"
      ],
      "a": "sylhet"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Sylhet",
        "Sheikh Mujibur Rahman",
        "Khulna",
        "Dhaka"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Sundarbans",
        "Sheikh Mujibur Rahman",
        "Khulna",
        "Chattogram Port"
      ],
      "a": "sundarbans"
    },
    {
      "q": "What is the national fruit of Bangladesh?",
      "options": [
        "Rajshahi",
        "Jackfruit",
        "Sylhet",
        "Khulna"
      ],
      "a": "jackfruit"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Sundarbans",
        "Jackfruit",
        "1971"
      ],
      "a": "sundarbans"
    },
    {
      "q": "What is the currency of Bangladesh?",
      "options": [
        "1972",
        "Taka",
        "Khulna",
        "Sylhet"
      ],
      "a": "taka"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Padma",
        "Cox's Bazar",
        "Rupee",
        "1971"
      ],
      "a": "padma"
    },
    {
      "q": "Which is the longest beach in the world located in Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Sylhet",
        "Rupee",
        "Cox's Bazar"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Rajshahi",
        "Dhaka",
        "Jackfruit",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Taka",
        "Bengal",
        "Chattogram Port",
        "Taka"
      ],
      "a": "bengal"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Water Lily",
        "Taka",
        "Dhaka"
      ],
      "a": "water lily"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Bengal",
        "Dhaka",
        "Sundarbans",
        "Taka"
      ],
      "a": "bengal"
    },
    {
      "q": "Which year was the constitution of Bangladesh adopted?",
      "options": [
        "Rupee",
        "1971",
        "Sylhet",
        "1972"
      ],
      "a": "1972"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Rupee",
        "Sundarbans",
        "Taka",
        "Khulna"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Sundarbans",
        "Taka",
        "Sheikh Mujibur Rahman",
        "Sylhet"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Barisal",
        "Sundarbans",
        "Sylhet",
        "Dhaka"
      ],
      "a": "sylhet"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Sundarbans",
        "Taka",
        "Sylhet",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sylhet"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Cox's Bazar",
        "Barisal",
        "Sheikh Mujibur Rahman",
        "Chattogram Port"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Dhaka",
        "Sylhet",
        "Dhaka",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Cox's Bazar",
        "Jackfruit",
        "Rajshahi"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "What is the capital of Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Khulna",
        "Sylhet",
        "Dhaka"
      ],
      "a": "dhaka"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Water Lily",
        "Sundarbans",
        "Dhaka"
      ],
      "a": "water lily"
    },
    {
      "q": "Which year was the constitution of Bangladesh adopted?",
      "options": [
        "Cox's Bazar",
        "Rupee",
        "Taka",
        "1972"
      ],
      "a": "1972"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Barisal",
        "Cox's Bazar",
        "Sylhet",
        "Sundarbans"
      ],
      "a": "sylhet"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "1971",
        "Khulna",
        "Water Lily",
        "1972"
      ],
      "a": "water lily"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Cox's Bazar",
        "Sheikh Mujibur Rahman",
        "Water Lily",
        "1972"
      ],
      "a": "water lily"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "1971",
        "Taka",
        "Dhaka",
        "Water Lily"
      ],
      "a": "water lily"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Dhaka",
        "Taka",
        "Sylhet"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Taka",
        "1972",
        "Chattogram Port"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which port is the busiest seaport in Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Rupee",
        "Taka",
        "Chattogram Port"
      ],
      "a": "chattogram port"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "1971",
        "Padma",
        "Sundarbans",
        "Dhaka"
      ],
      "a": "padma"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Chattogram Port",
        "Jackfruit",
        "1971",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "What is the capital of Bangladesh?",
      "options": [
        "Dhaka",
        "Taka",
        "1971",
        "Chattogram Port"
      ],
      "a": "dhaka"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Sundarbans",
        "Taka",
        "1971",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Barisal",
        "Padma",
        "Sylhet",
        "Sheikh Mujibur Rahman"
      ],
      "a": "padma"
    },
    {
      "q": "What is the capital of Bangladesh?",
      "options": [
        "1972",
        "Dhaka",
        "Dhaka",
        "Sundarbans"
      ],
      "a": "dhaka"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Rupee",
        "Sheikh Mujibur Rahman",
        "Sundarbans",
        "Dhaka"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Which is the longest beach in the world located in Bangladesh?",
      "options": [
        "Taka",
        "Cox's Bazar",
        "Sheikh Mujibur Rahman",
        "Rupee"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "What is the currency of Bangladesh?",
      "options": [
        "Taka",
        "Sheikh Mujibur Rahman",
        "Barisal",
        "Cox's Bazar"
      ],
      "a": "taka"
    },
    {
      "q": "What is the capital of Bangladesh?",
      "options": [
        "Khulna",
        "Dhaka",
        "Taka",
        "Chattogram Port"
      ],
      "a": "dhaka"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Cox's Bazar",
        "Padma",
        "Jackfruit",
        "Sylhet"
      ],
      "a": "padma"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Taka",
        "Bengal",
        "Chattogram Port",
        "1971"
      ],
      "a": "bengal"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Sylhet",
        "Jackfruit",
        "Dhaka",
        "Khulna"
      ],
      "a": "sylhet"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Khulna",
        "Rupee",
        "1971",
        "Bengal"
      ],
      "a": "bengal"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Barisal",
        "Chattogram Port",
        "Sylhet",
        "Cox's Bazar"
      ],
      "a": "sylhet"
    },
    {
      "q": "What is the capital of Bangladesh?",
      "options": [
        "Jackfruit",
        "Dhaka",
        "Barisal",
        "Rajshahi"
      ],
      "a": "dhaka"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Dhaka",
        "Jackfruit",
        "Sheikh Mujibur Rahman",
        "Water Lily"
      ],
      "a": "water lily"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Taka",
        "Cox's Bazar",
        "Sheikh Mujibur Rahman",
        "Bengal"
      ],
      "a": "bengal"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "1971",
        "1972",
        "Sheikh Mujibur Rahman",
        "Chattogram Port"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Taka",
        "Padma",
        "Dhaka",
        "Khulna"
      ],
      "a": "padma"
    },
    {
      "q": "Which port is the busiest seaport in Bangladesh?",
      "options": [
        "Taka",
        "Chattogram Port",
        "Sheikh Mujibur Rahman",
        "Barisal"
      ],
      "a": "chattogram port"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Bengal",
        "Sheikh Mujibur Rahman",
        "Taka",
        "Cox's Bazar"
      ],
      "a": "bengal"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "1971",
        "Rajshahi",
        "Rupee"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Sylhet",
        "1972",
        "Sundarbans",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Rupee",
        "Khulna",
        "Padma",
        "Sheikh Mujibur Rahman"
      ],
      "a": "padma"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Sundarbans",
        "Taka",
        "Rupee"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "1971",
        "Sundarbans",
        "Sheikh Mujibur Rahman",
        "Rupee"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Khulna",
        "Padma",
        "Dhaka",
        "Rupee"
      ],
      "a": "padma"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Chattogram Port",
        "Sheikh Mujibur Rahman",
        "Rajshahi",
        "Dhaka"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Sylhet",
        "Padma",
        "Rajshahi"
      ],
      "a": "padma"
    },
    {
      "q": "Which is the longest beach in the world located in Bangladesh?",
      "options": [
        "Jackfruit",
        "1971",
        "Cox's Bazar",
        "Rajshahi"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "What is the currency of Bangladesh?",
      "options": [
        "Rupee",
        "1971",
        "Dhaka",
        "Taka"
      ],
      "a": "taka"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Cox's Bazar",
        "Barisal",
        "Taka"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Chattogram Port",
        "Bengal",
        "Sheikh Mujibur Rahman",
        "Cox's Bazar"
      ],
      "a": "bengal"
    },
    {
      "q": "Who is the current country name Bangladesh came from?",
      "options": [
        "Chattogram Port",
        "Cox's Bazar",
        "Bengal",
        "Khulna"
      ],
      "a": "bengal"
    },
    {
      "q": "Which river is known locally as Padma?",
      "options": [
        "Dhaka",
        "Padma",
        "Sheikh Mujibur Rahman",
        "Sylhet"
      ],
      "a": "padma"
    },
    {
      "q": "Which mangrove forest is famous in Bangladesh?",
      "options": [
        "Dhaka",
        "1971",
        "Sundarbans",
        "Barisal"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Which hill district is known for tea gardens in Bangladesh?",
      "options": [
        "Dhaka",
        "1971",
        "Sylhet",
        "Rajshahi"
      ],
      "a": "sylhet"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Dhaka",
        "Water Lily",
        "1971",
        "Chattogram Port"
      ],
      "a": "water lily"
    },
    {
      "q": "What is the national fruit of Bangladesh?",
      "options": [
        "Sundarbans",
        "1971",
        "Khulna",
        "Jackfruit"
      ],
      "a": "jackfruit"
    },
    {
      "q": "When did Bangladesh gain independence?",
      "options": [
        "Taka",
        "1971",
        "Dhaka",
        "Taka"
      ],
      "a": "1971"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Rupee",
        "1972",
        "Jackfruit",
        "Water Lily"
      ],
      "a": "water lily"
    },
    {
      "q": "Which is the longest beach in the world located in Bangladesh?",
      "options": [
        "Cox's Bazar",
        "Taka",
        "Sylhet",
        "1972"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Rupee",
        "Rajshahi",
        "Water Lily",
        "Cox's Bazar"
      ],
      "a": "water lily"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Rajshahi",
        "Sheikh Mujibur Rahman",
        "Chattogram Port",
        "Khulna"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Barisal",
        "Water Lily",
        "Khulna",
        "Sheikh Mujibur Rahman"
      ],
      "a": "water lily"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Sundarbans",
        "Sylhet",
        "Barisal",
        "Sheikh Mujibur Rahman"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Rupee",
        "Sheikh Mujibur Rahman",
        "Khulna",
        "1971"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which is the longest beach in the world located in Bangladesh?",
      "options": [
        "Cox's Bazar",
        "Taka",
        "Sylhet",
        "1972"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Rajshahi",
        "Sheikh Mujibur Rahman",
        "Sundarbans",
        "Sylhet"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "What is the national flower of Bangladesh?",
      "options": [
        "Sylhet",
        "Water Lily",
        "Sheikh Mujibur Rahman",
        "Sheikh Mujibur Rahman"
      ],
      "a": "water lily"
    },
    {
      "q": "What is the currency of Bangladesh?",
      "options": [
        "Taka",
        "Sylhet",
        "Dhaka",
        "Sheikh Mujibur Rahman"
      ],
      "a": "taka"
    }
  ],
  "history": [
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "1789",
        "Adolf Hitler",
        "1945",
        "George Washington"
      ],
      "a": "george washington"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1789",
        "Egyptians",
        "1945",
        "Alexander Fleming"
      ],
      "a": "1945"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Adolf Hitler",
        "Egyptians",
        "Mongol Empire",
        "1945"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Which empire was led by Genghis Khan?",
      "options": [
        "Mongol Empire",
        "Egyptians",
        "Thomas Jefferson",
        "1789"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year did the French Revolution begin?",
      "options": [
        "1789",
        "Mongol Empire",
        "Augustus",
        "Thomas Jefferson"
      ],
      "a": "1789"
    },
    {
      "q": "Who was the first Emperor of Rome?",
      "options": [
        "Mongol Empire",
        "Thomas Jefferson",
        "Egyptians",
        "Augustus"
      ],
      "a": "augustus"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "Thomas Jefferson",
        "Mongol Empire",
        "Egyptians",
        "Augustus"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "Which ancient civilization built the pyramids?",
      "options": [
        "Christopher Columbus",
        "Egyptians",
        "1789",
        "Alexander Fleming"
      ],
      "a": "egyptians"
    },
    {
      "q": "Who sailed to America in 1492?",
      "options": [
        "Christopher Columbus",
        "Thomas Jefferson",
        "1945",
        "George Washington"
      ],
      "a": "christopher columbus"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "Augustus",
        "Alexander Fleming",
        "1945",
        "Adolf Hitler"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year/event did Russian Revolution begin?",
      "options": [
        "1945",
        "Thomas Jefferson",
        "Thomas Jefferson",
        "1917"
      ],
      "a": "1917"
    },
    {
      "q": "Which empire was led by Genghis Khan?",
      "options": [
        "Augustus",
        "Mongol Empire",
        "George Washington",
        "Adolf Hitler"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1945",
        "1945",
        "Egyptians",
        "1945"
      ],
      "a": "1945"
    },
    {
      "q": "Who was the first Emperor of Rome?",
      "options": [
        "Thomas Jefferson",
        "Egyptians",
        "Augustus",
        "1789"
      ],
      "a": "augustus"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1945",
        "Alexander Fleming",
        "Alexander Fleming",
        "Thomas Jefferson"
      ],
      "a": "1945"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "Augustus",
        "Augustus",
        "Adolf Hitler",
        "Thomas Jefferson"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "Adolf Hitler",
        "Alexander Fleming",
        "George Washington",
        "1945"
      ],
      "a": "george washington"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "Thomas Jefferson",
        "Egyptians",
        "1789",
        "1947"
      ],
      "a": "1947"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "George Washington",
        "Egyptians",
        "1789",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did Industrial Revolution start (approx) begin?",
      "options": [
        "1945",
        "Egyptians",
        "1760s",
        "Alexander Fleming"
      ],
      "a": "1760s"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "Augustus",
        "Augustus",
        "1789",
        "Alexander Fleming"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year/event did World War II begin?",
      "options": [
        "Augustus",
        "1939",
        "1945",
        "Mongol Empire"
      ],
      "a": "1939"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "Egyptians",
        "Thomas Jefferson",
        "1947",
        "Christopher Columbus"
      ],
      "a": "1947"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Adolf Hitler",
        "1789",
        "1945",
        "Augustus"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Adolf Hitler",
        "Adolf Hitler",
        "1789",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "George Washington",
        "1789",
        "Mongol Empire",
        "1945"
      ],
      "a": "george washington"
    },
    {
      "q": "In which year/event did Magna Carta year begin?",
      "options": [
        "1215",
        "Adolf Hitler",
        "1945",
        "1945"
      ],
      "a": "1215"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "Alexander Fleming",
        "Egyptians",
        "1945",
        "Augustus"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year/event did Magna Carta year begin?",
      "options": [
        "1215",
        "Augustus",
        "1945",
        "Augustus"
      ],
      "a": "1215"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1945",
        "Thomas Jefferson",
        "1947",
        "Mongol Empire"
      ],
      "a": "1947"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1947",
        "Adolf Hitler",
        "1945",
        "Egyptians"
      ],
      "a": "1947"
    },
    {
      "q": "In which year/event did Russian Revolution begin?",
      "options": [
        "Alexander Fleming",
        "Mongol Empire",
        "Augustus",
        "1917"
      ],
      "a": "1917"
    },
    {
      "q": "Which empire was led by Genghis Khan?",
      "options": [
        "Alexander Fleming",
        "George Washington",
        "Adolf Hitler",
        "Mongol Empire"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "Augustus",
        "1945",
        "1947",
        "Christopher Columbus"
      ],
      "a": "1947"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Adolf Hitler",
        "Adolf Hitler",
        "Mongol Empire",
        "Augustus"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "Alexander Fleming",
        "Alexander Fleming",
        "1789",
        "Alexander Fleming"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1789",
        "Adolf Hitler",
        "Augustus",
        "1947"
      ],
      "a": "1947"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "1789",
        "Mongol Empire",
        "1776",
        "Thomas Jefferson"
      ],
      "a": "1776"
    },
    {
      "q": "Which ancient civilization built the pyramids?",
      "options": [
        "Egyptians",
        "George Washington",
        "Egyptians",
        "Christopher Columbus"
      ],
      "a": "egyptians"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "Thomas Jefferson",
        "Thomas Jefferson",
        "Adolf Hitler",
        "1776"
      ],
      "a": "1776"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "Mongol Empire",
        "Augustus",
        "Thomas Jefferson",
        "1776"
      ],
      "a": "1776"
    },
    {
      "q": "In which year/event did Magna Carta year begin?",
      "options": [
        "Egyptians",
        "1215",
        "1945",
        "Adolf Hitler"
      ],
      "a": "1215"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "1789",
        "Christopher Columbus",
        "Thomas Jefferson",
        "1945"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "In which year/event did Fall of Rome begin?",
      "options": [
        "Egyptians",
        "Thomas Jefferson",
        "476",
        "1945"
      ],
      "a": "476"
    },
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "George Washington",
        "Alexander Fleming",
        "George Washington",
        "Thomas Jefferson"
      ],
      "a": "george washington"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Mongol Empire",
        "George Washington",
        "Mongol Empire",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Who was the first Emperor of Rome?",
      "options": [
        "Egyptians",
        "Adolf Hitler",
        "Augustus",
        "Adolf Hitler"
      ],
      "a": "augustus"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1947",
        "Thomas Jefferson",
        "1789",
        "Adolf Hitler"
      ],
      "a": "1947"
    },
    {
      "q": "Which ancient civilization built the pyramids?",
      "options": [
        "1945",
        "Egyptians",
        "Augustus",
        "Christopher Columbus"
      ],
      "a": "egyptians"
    },
    {
      "q": "In which year/event did World War II begin?",
      "options": [
        "Christopher Columbus",
        "Adolf Hitler",
        "George Washington",
        "1939"
      ],
      "a": "1939"
    },
    {
      "q": "In which year/event did Fall of Rome begin?",
      "options": [
        "George Washington",
        "476",
        "Thomas Jefferson",
        "George Washington"
      ],
      "a": "476"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Egyptians",
        "Augustus",
        "George Washington",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did World War I begin?",
      "options": [
        "Egyptians",
        "1789",
        "1914",
        "Alexander Fleming"
      ],
      "a": "1914"
    },
    {
      "q": "In which year/event did Industrial Revolution start (approx) begin?",
      "options": [
        "1760s",
        "Thomas Jefferson",
        "Mongol Empire",
        "Mongol Empire"
      ],
      "a": "1760s"
    },
    {
      "q": "In which year/event did World War I begin?",
      "options": [
        "1789",
        "1914",
        "Christopher Columbus",
        "Christopher Columbus"
      ],
      "a": "1914"
    },
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "Adolf Hitler",
        "George Washington",
        "Mongol Empire",
        "1945"
      ],
      "a": "george washington"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "George Washington",
        "George Washington",
        "1789",
        "1789"
      ],
      "a": "1789"
    },
    {
      "q": "Which empire was led by Genghis Khan?",
      "options": [
        "Egyptians",
        "Augustus",
        "Thomas Jefferson",
        "Mongol Empire"
      ],
      "a": "mongol empire"
    },
    {
      "q": "Who sailed to America in 1492?",
      "options": [
        "Augustus",
        "Mongol Empire",
        "Christopher Columbus",
        "1789"
      ],
      "a": "christopher columbus"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "Thomas Jefferson",
        "Alexander Fleming",
        "Adolf Hitler",
        "Augustus"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "Thomas Jefferson",
        "Augustus",
        "Mongol Empire",
        "1947"
      ],
      "a": "1947"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1789",
        "Mongol Empire",
        "1945",
        "1947"
      ],
      "a": "1947"
    },
    {
      "q": "In which year/event did World War II begin?",
      "options": [
        "1789",
        "Mongol Empire",
        "1939",
        "Alexander Fleming"
      ],
      "a": "1939"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "George Washington",
        "1789",
        "1789",
        "George Washington"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did World War II begin?",
      "options": [
        "Christopher Columbus",
        "Egyptians",
        "1939",
        "Mongol Empire"
      ],
      "a": "1939"
    },
    {
      "q": "Who sailed to America in 1492?",
      "options": [
        "Christopher Columbus",
        "Egyptians",
        "Thomas Jefferson",
        "Egyptians"
      ],
      "a": "christopher columbus"
    },
    {
      "q": "Who sailed to America in 1492?",
      "options": [
        "Christopher Columbus",
        "Mongol Empire",
        "Adolf Hitler",
        "George Washington"
      ],
      "a": "christopher columbus"
    },
    {
      "q": "In which year/event did Renaissance century begin?",
      "options": [
        "14th-17th century",
        "George Washington",
        "Thomas Jefferson",
        "Christopher Columbus"
      ],
      "a": "14th-17th century"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Adolf Hitler",
        "Adolf Hitler",
        "George Washington",
        "George Washington"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1945",
        "Thomas Jefferson",
        "1789",
        "Mongol Empire"
      ],
      "a": "1945"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "George Washington",
        "George Washington",
        "Christopher Columbus",
        "1789"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did Magna Carta year begin?",
      "options": [
        "1215",
        "Augustus",
        "Augustus",
        "Christopher Columbus"
      ],
      "a": "1215"
    },
    {
      "q": "In which year/event did World War II begin?",
      "options": [
        "Adolf Hitler",
        "Augustus",
        "1939",
        "1945"
      ],
      "a": "1939"
    },
    {
      "q": "In which year/event did World War II begin?",
      "options": [
        "Alexander Fleming",
        "1945",
        "1939",
        "Thomas Jefferson"
      ],
      "a": "1939"
    },
    {
      "q": "Who sailed to America in 1492?",
      "options": [
        "Adolf Hitler",
        "Mongol Empire",
        "1789",
        "Christopher Columbus"
      ],
      "a": "christopher columbus"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "Alexander Fleming",
        "1945",
        "1947",
        "Adolf Hitler"
      ],
      "a": "1947"
    },
    {
      "q": "Who was the leader of Nazi Germany?",
      "options": [
        "Adolf Hitler",
        "Augustus",
        "George Washington",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "Christopher Columbus",
        "George Washington",
        "1789",
        "Augustus"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did Renaissance century begin?",
      "options": [
        "Christopher Columbus",
        "Alexander Fleming",
        "14th-17th century",
        "Thomas Jefferson"
      ],
      "a": "14th-17th century"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "Alexander Fleming",
        "Augustus",
        "Alexander Fleming",
        "1947"
      ],
      "a": "1947"
    },
    {
      "q": "Who was the first Emperor of Rome?",
      "options": [
        "Egyptians",
        "Augustus",
        "Thomas Jefferson",
        "Alexander Fleming"
      ],
      "a": "augustus"
    },
    {
      "q": "In which year/event did Renaissance century begin?",
      "options": [
        "Adolf Hitler",
        "14th-17th century",
        "Augustus",
        "Egyptians"
      ],
      "a": "14th-17th century"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "1776",
        "Augustus",
        "Augustus",
        "Egyptians"
      ],
      "a": "1776"
    },
    {
      "q": "In which year did the French Revolution begin?",
      "options": [
        "1789",
        "1945",
        "Thomas Jefferson",
        "Christopher Columbus"
      ],
      "a": "1789"
    },
    {
      "q": "Which empire was led by Genghis Khan?",
      "options": [
        "Christopher Columbus",
        "Mongol Empire",
        "1789",
        "Egyptians"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "1789",
        "1789",
        "Mongol Empire",
        "1789"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did Renaissance century begin?",
      "options": [
        "14th-17th century",
        "Mongol Empire",
        "Mongol Empire",
        "Thomas Jefferson"
      ],
      "a": "14th-17th century"
    },
    {
      "q": "In which year did the French Revolution begin?",
      "options": [
        "1945",
        "Mongol Empire",
        "1789",
        "1945"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did Magna Carta year begin?",
      "options": [
        "Christopher Columbus",
        "George Washington",
        "Alexander Fleming",
        "1215"
      ],
      "a": "1215"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "Christopher Columbus",
        "Egyptians",
        "1789",
        "Christopher Columbus"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did Industrial Revolution start (approx) begin?",
      "options": [
        "1789",
        "1760s",
        "Thomas Jefferson",
        "Egyptians"
      ],
      "a": "1760s"
    },
    {
      "q": "In which year/event did Russian Revolution begin?",
      "options": [
        "1917",
        "George Washington",
        "Christopher Columbus",
        "George Washington"
      ],
      "a": "1917"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "Egyptians",
        "1947",
        "Egyptians",
        "Thomas Jefferson"
      ],
      "a": "1947"
    },
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "Egyptians",
        "1789",
        "George Washington",
        "George Washington"
      ],
      "a": "george washington"
    },
    {
      "q": "Who sailed to America in 1492?",
      "options": [
        "Thomas Jefferson",
        "Adolf Hitler",
        "Christopher Columbus",
        "1945"
      ],
      "a": "christopher columbus"
    },
    {
      "q": "Which ancient civilization built the pyramids?",
      "options": [
        "Adolf Hitler",
        "Egyptians",
        "George Washington",
        "1945"
      ],
      "a": "egyptians"
    },
    {
      "q": "Who was the first Emperor of Rome?",
      "options": [
        "George Washington",
        "Augustus",
        "Egyptians",
        "1789"
      ],
      "a": "augustus"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "Thomas Jefferson",
        "1776",
        "Thomas Jefferson",
        "Christopher Columbus"
      ],
      "a": "1776"
    },
    {
      "q": "In which year did the French Revolution begin?",
      "options": [
        "1789",
        "Augustus",
        "1789",
        "Augustus"
      ],
      "a": "1789"
    },
    {
      "q": "Who sailed to America in 1492?",
      "options": [
        "1945",
        "1945",
        "Christopher Columbus",
        "1945"
      ],
      "a": "christopher columbus"
    }
  ]
};

module.exports = {
  config: {
    name: "quiz",
    aliases: ["qz"],
    version: "1.0",
    author: "ChatGPT",
    role: 0,
    description: "Multi-category MCQ quiz: anime/game/bd/history — reward/penalty money updates",
    category: "game",
    guide: { en: "{pn} <anime|game|bd|history>" }
  },

  // onStart: sends a question and caches it for the user
  onStart: async function({ api, event, args }) {
    const categories = Object.keys(quizData);
    const category = (args[0] || '').toLowerCase();
    if (!category || !categories.includes(category)) {
      return api.sendMessage(
        "📌 Usage: quiz <category>\nAvailable categories: " + categories.join(", "),
        event.threadID
      );
    }

    // pick random question
    const pool = quizData[category];
    if (!pool || pool.length === 0) return api.sendMessage("No questions in this category.", event.threadID);
    const q = pool[Math.floor(Math.random() * pool.length)];

    // format options as A) B) C) D)
    const opts = q.options.slice(0,4);
    const labels = ['A','B','C','D'];
    let optionsText = '';
    for (let i=0;i<opts.length;i++) optionsText += `${labels[i]}) ${opts[i]}\n`;

    const body = `🎯 [${category.toUpperCase()} QUIZ]\n\n${q.q}\n\n${optionsText}\nReply with the option letter (A, B, C or D) or number (1-4). You have 60 seconds.`;

    // send question
    const info = await api.sendMessage(body, event.threadID);

    // cache question for this user
    global.quizCache = global.quizCache || {};
    global.quizCache[event.senderID] = {
      category,
      question: q,
      msgID: info.messageID,
      time: Date.now()
    };

    // set auto-abandon timeout
    setTimeout(() => {
      const data = global.quizCache && global.quizCache[event.senderID];
      if (!data) return;
      try { api.unsendMessage(data.msgID); } catch(e){}
      delete global.quizCache[event.senderID];
      api.sendMessage("⌛ Time's up — quiz abandoned.", event.threadID);
    }, 60*1000);
  },

  // onReply: handle user's reply to the quiz
  onReply: async function({ api, event, usersData }) {
    // Only the sender who started the quiz may answer (cache keyed by senderID)
    global.quizCache = global.quizCache || {};
    const data = global.quizCache[event.senderID];
    if (!data) return; // no active quiz for this user

    // ensure within time
    if (Date.now() - data.time > 60*1000) {
      try { if (data.msgID) await api.unsendMessage(data.msgID); } catch(e){}
      delete global.quizCache[event.senderID];
      return api.sendMessage("⌛ Time's up — quiz abandoned.", event.threadID);
    }

    const raw = (event.body||'').trim().toLowerCase();
    let choiceIndex = -1;
    // accept A/B/C/D or 1/2/3/4
    if (/^[abcd]$/.test(raw)) choiceIndex = ['a','b','c','d'].indexOf(raw);
    else if (/^[1-4]$/.test(raw)) choiceIndex = parseInt(raw)-1;
    else {
      return api.sendMessage("⚠️ Reply with A/B/C/D or 1-4.", event.threadID);
    }

    const q = data.question;
    const selected = (q.options[choiceIndex] || '').toString().toLowerCase();
    const correctText = q.a.toString().toLowerCase();

    // clear cache and unsend question
    try { if (data.msgID) await api.unsendMessage(data.msgID); } catch(e){}
    delete global.quizCache[event.senderID];

    // compute reward/penalty
    const reward = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
    const penalty = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

    try {
      const userData = (await usersData.get(event.senderID)) || { money: 0 };
      if (selected === correctText) {
        userData.money = (userData.money || 0) + reward;
        await usersData.set(event.senderID, userData);
        return api.sendMessage(`✅ Correct! You earned $${reward.toLocaleString()}.\n💰 New balance: $${(userData.money).toLocaleString()}.`, event.threadID);
      } else {
        userData.money = Math.max(0, (userData.money || 0) - penalty);
        await usersData.set(event.senderID, userData);
        return api.sendMessage(`❌ Wrong! The correct answer was: ${correctText}.\n💸 You lost $${penalty.toLocaleString()}. New balance: $${(userData.money).toLocaleString()}.`, event.threadID);
      }
    } catch (err) {
      return api.sendMessage("❌ Error updating balance.", event.threadID);
    }
  }
};
