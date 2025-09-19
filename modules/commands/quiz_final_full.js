// quiz_final_full.js - single-file GoatBot module with 500 MCQs (hard distractors)

const quizData = {
  "anime": [
    {
      "q": "Who created One Piece?",
      "options": [
        "Madhouse",
        "Hajime Isayama",
        "Eiichiro Oda",
        "Hayao Miyazaki"
      ],
      "a": "eiichiro oda"
    },
    {
      "q": "Who created Naruto?",
      "options": [
        "Takehiko Inoue",
        "Sanji",
        "Planet Vegeta",
        "Masashi Kishimoto"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "Who created Bleach?",
      "options": [
        "Naoki Urasawa",
        "Hajime Isayama",
        "Tite Kubo",
        "Tsugumi Ohba"
      ],
      "a": "tite kubo"
    },
    {
      "q": "Who created Dragon Ball?",
      "options": [
        "Byakuya Kuchiki",
        "Edward Elric",
        "Akira Toriyama",
        "Dressrosa"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "Who is the protagonist of Demon Slayer?",
      "options": [
        "Goku",
        "Izuku Midoriya",
        "josei",
        "Tanjiro Kamado"
      ],
      "a": "tanjiro kamado"
    },
    {
      "q": "Which studio animated Demon Slayer?",
      "options": [
        "Goku",
        "Ufotable",
        "Nami",
        "Eren Yeager"
      ],
      "a": "ufotable"
    },
    {
      "q": "Who authored Attack on Titan?",
      "options": [
        "Hajime Isayama",
        "Kentaro Miura",
        "Naoki Urasawa",
        "Light Yagami"
      ],
      "a": "hajime isayama"
    },
    {
      "q": "Who authored Death Note (writer)?",
      "options": [
        "josei",
        "Tsugumi Ohba",
        "Koyoharu Gotouge",
        "Namek"
      ],
      "a": "tsugumi ohba"
    },
    {
      "q": "Who illustrated Death Note (artist)?",
      "options": [
        "Takeshi Obata",
        "2011",
        "Hiromu Arakawa",
        "Bertholdt Hoover"
      ],
      "a": "takeshi obata"
    },
    {
      "q": "Which studio animated Attack on Titan seasons 1-3?",
      "options": [
        "Alphonse Elric",
        "Ichigo Kurosaki",
        "Konoha",
        "Wit Studio"
      ],
      "a": "wit studio"
    },
    {
      "q": "Which studio animated Attack on Titan final season?",
      "options": [
        "Gohan",
        "Hiromu Arakawa",
        "MAPPA",
        "Whale Island"
      ],
      "a": "mappa"
    },
    {
      "q": "Who directed Spirited Away?",
      "options": [
        "Madhouse",
        "Vegeta",
        "Hayao Miyazaki",
        "Yuji Itadori"
      ],
      "a": "hayao miyazaki"
    },
    {
      "q": "Which studio produced Spirited Away?",
      "options": [
        "Armin Arlert",
        "Studio Ghibli",
        "MAPPA",
        "Byakuya Kuchiki"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "What is the Japanese term for comics?",
      "options": [
        "Studio Pierrot",
        "Portgas D. Ace",
        "manga",
        "Katsuki Bakugo"
      ],
      "a": "manga"
    },
    {
      "q": "What demographic does 'shonen' target?",
      "options": [
        "young boys",
        "2011",
        "Itachi Uchiha",
        "Bertholdt Hoover"
      ],
      "a": "young boys"
    },
    {
      "q": "What demographic does 'seinen' target?",
      "options": [
        "slice of life",
        "Amestris",
        "Whale Island",
        "young men"
      ],
      "a": "young men"
    },
    {
      "q": "Who is the protagonist of Naruto?",
      "options": [
        "josei",
        "Ryuk",
        "Naruto Uzumaki",
        "Cell"
      ],
      "a": "naruto uzumaki"
    },
    {
      "q": "Who is the protagonist of One Piece?",
      "options": [
        "Alphonse Elric",
        "2009",
        "Monkey D. Luffy",
        "2018"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "Who is the protagonist of Bleach?",
      "options": [
        "1999",
        "Misa Amane",
        "Ichigo Kurosaki",
        "2011"
      ],
      "a": "ichigo kurosaki"
    },
    {
      "q": "What is the village Naruto belongs to called?",
      "options": [
        "Konoha",
        "Roronoa Zoro",
        "Paradis Island",
        "Sakura Haruno"
      ],
      "a": "konoha"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Rem",
        "Goku",
        "Tokyo",
        "Ichigo Kurosaki"
      ],
      "a": "tokyo"
    },
    {
      "q": "Who is the main protagonist of Bleach?",
      "options": [
        "Studio Pierrot",
        "Ichigo Kurosaki",
        "Gohan",
        "Studio Ghibli"
      ],
      "a": "ichigo kurosaki"
    },
    {
      "q": "What does the term 'slice of life' usually refer to in manga/anime context?",
      "options": [
        "anime",
        "slice of life",
        "psychological",
        "fantasy"
      ],
      "a": "slice of life"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2020",
        "1990",
        "2013",
        "2018"
      ],
      "a": "2020"
    },
    {
      "q": "Who is the main protagonist of Demon Slayer?",
      "options": [
        "Winry Rockbell",
        "Edward Elric",
        "Vegeta",
        "Tanjiro Kamado"
      ],
      "a": "tanjiro kamado"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Hisoka",
        "Karakura Town",
        "Production I.G",
        "Usopp"
      ],
      "a": "karakura town"
    },
    {
      "q": "Who is the creator/author of Death Note?",
      "options": [
        "Killua Zoldyck",
        "Portgas D. Ace",
        "Leorio",
        "Tsugumi Ohba"
      ],
      "a": "tsugumi ohba"
    },
    {
      "q": "What does the term 'shonen' usually refer to in manga/anime context?",
      "options": [
        "mecha",
        "slice of life",
        "shonen",
        "seinen"
      ],
      "a": "shonen"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Kurapika",
        "U.A. High",
        "Dressrosa",
        "Roronoa Zoro"
      ],
      "a": "dressrosa"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Frieza",
        "Roy Mustang",
        "Karakura Town",
        "Wit Studio"
      ],
      "a": "karakura town"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2002",
        "2000",
        "2011",
        "2020"
      ],
      "a": "2002"
    },
    {
      "q": "Who is the main protagonist of Dragon Ball?",
      "options": [
        "Armin Arlert",
        "Megumi Fushiguro",
        "Ichigo Kurosaki",
        "Goku"
      ],
      "a": "goku"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Konoha",
        "Monkey D. Luffy",
        "Production I.G",
        "Namek"
      ],
      "a": "namek"
    },
    {
      "q": "Who is the main protagonist of Jujutsu Kaisen?",
      "options": [
        "Yuji Itadori",
        "Rukia Kuchiki",
        "Levi Ackerman",
        "Tite Kubo"
      ],
      "a": "yuji itadori"
    },
    {
      "q": "Who is the creator/author of My Hero Academia?",
      "options": [
        "Kohei Horikoshi",
        "Roy Mustang",
        "Nobara Kugisaki",
        "Roronoa Zoro"
      ],
      "a": "kohei horikoshi"
    },
    {
      "q": "Who is the creator/author of Naruto?",
      "options": [
        "Masashi Kishimoto",
        "Zenitsu Agatsuma",
        "Kentaro Miura",
        "MAPPA"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "What does the term 'shonen' usually refer to in manga/anime context?",
      "options": [
        "light novel",
        "manga",
        "novel",
        "shonen"
      ],
      "a": "shonen"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "1990",
        "2000",
        "2004",
        "1995"
      ],
      "a": "2004"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Sasuke Uchiha",
        "Amestris",
        "Ichigo Kurosaki",
        "Nobara Kugisaki"
      ],
      "a": "amestris"
    },
    {
      "q": "Who is the main protagonist of Hunter x Hunter?",
      "options": [
        "Gege Akutami",
        "Toshiro Hitsugaya",
        "Shanks",
        "Gon Freecss"
      ],
      "a": "gon freecss"
    },
    {
      "q": "Who is the creator/author of Hunter x Hunter?",
      "options": [
        "Ken Kaneki",
        "Satoru Gojo",
        "Yoshihiro Togashi",
        "Toshiro Hitsugaya"
      ],
      "a": "yoshihiro togashi"
    },
    {
      "q": "What does the term 'shonen' usually refer to in manga/anime context?",
      "options": [
        "shonen",
        "fantasy",
        "sports",
        "mecha"
      ],
      "a": "shonen"
    },
    {
      "q": "Who is the creator/author of Dragon Ball?",
      "options": [
        "Sui Ishida",
        "Trunks",
        "Toshiro Hitsugaya",
        "Akira Toriyama"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "Who is the main protagonist of One Piece?",
      "options": [
        "Masashi Kishimoto",
        "Shoto Todoroki",
        "Monkey D. Luffy",
        "Kohei Horikoshi"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "Who is the creator/author of Naruto?",
      "options": [
        "Yoshihiro Togashi",
        "Masashi Kishimoto",
        "Production I.G",
        "Katsuki Bakugo"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Tokyo",
        "Bones",
        "Studio Pierrot",
        "Namek"
      ],
      "a": "namek"
    },
    {
      "q": "Which studio animated Attack on Titan (notable adaptation)?",
      "options": [
        "MAPPA",
        "Frieza",
        "Franky",
        "Usopp"
      ],
      "a": "mappa"
    },
    {
      "q": "What does the term 'mecha' usually refer to in manga/anime context?",
      "options": [
        "light novel",
        "mecha",
        "shojo",
        "shonen"
      ],
      "a": "mecha"
    },
    {
      "q": "Who is the main protagonist of Fullmetal Alchemist?",
      "options": [
        "Masashi Kishimoto",
        "Edward Elric",
        "Light Yagami",
        "Eren Yeager"
      ],
      "a": "edward elric"
    },
    {
      "q": "Who is the creator/author of Death Note?",
      "options": [
        "Gohan",
        "Tsugumi Ohba",
        "Inosuke Hashibira",
        "Portgas D. Ace"
      ],
      "a": "tsugumi ohba"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2020",
        "2013",
        "1990",
        "2002"
      ],
      "a": "2013"
    },
    {
      "q": "Who is the main protagonist of Fullmetal Alchemist?",
      "options": [
        "Edward Elric",
        "Ryuk",
        "L Lawliet",
        "Goku"
      ],
      "a": "edward elric"
    },
    {
      "q": "Who is the creator/author of Attack on Titan?",
      "options": [
        "Ken Kaneki",
        "Hide",
        "Gaara",
        "Hajime Isayama"
      ],
      "a": "hajime isayama"
    },
    {
      "q": "Which studio animated Demon Slayer (notable adaptation)?",
      "options": [
        "Koyoharu Gotouge",
        "Toei Animation",
        "Ufotable",
        "Kakashi Hatake"
      ],
      "a": "ufotable"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Shoto Todoroki",
        "Portgas D. Ace",
        "Dressrosa",
        "Tokyo"
      ],
      "a": "tokyo"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Studio Pierrot",
        "Konoha",
        "Katsuki Bakugo",
        "Tanjiro Kamado"
      ],
      "a": "konoha"
    },
    {
      "q": "Who is the main protagonist of Demon Slayer?",
      "options": [
        "Satoru Gojo",
        "Tanjiro Kamado",
        "Portgas D. Ace",
        "Ken Kaneki"
      ],
      "a": "tanjiro kamado"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2009",
        "1990",
        "1995",
        "2016"
      ],
      "a": "1990"
    },
    {
      "q": "Who is the creator/author of Bleach?",
      "options": [
        "Tite Kubo",
        "Hajime Isayama",
        "Rem",
        "Franky"
      ],
      "a": "tite kubo"
    },
    {
      "q": "What does the term 'josei' usually refer to in manga/anime context?",
      "options": [
        "seinen",
        "mecha",
        "josei",
        "shojo"
      ],
      "a": "josei"
    },
    {
      "q": "Who is the creator/author of Dragon Ball?",
      "options": [
        "Frieza",
        "Armin Arlert",
        "Akira Toriyama",
        "Yuji Itadori"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2004",
        "2009",
        "2011",
        "1999"
      ],
      "a": "1999"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2009",
        "2016",
        "2013",
        "2020"
      ],
      "a": "2013"
    },
    {
      "q": "Which studio animated Attack on Titan (notable adaptation)?",
      "options": [
        "MAPPA",
        "Akira Toriyama",
        "Wit Studio",
        "Rize Kamishiro"
      ],
      "a": "mappa"
    },
    {
      "q": "What does the term 'psychological' usually refer to in manga/anime context?",
      "options": [
        "shojo",
        "psychological",
        "slice of life",
        "fantasy"
      ],
      "a": "psychological"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2009",
        "2016",
        "1995",
        "1984"
      ],
      "a": "2009"
    },
    {
      "q": "Who is the main protagonist of Jujutsu Kaisen?",
      "options": [
        "MAPPA",
        "Toei Animation",
        "Zenitsu Agatsuma",
        "Yuji Itadori"
      ],
      "a": "yuji itadori"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Yuji Itadori",
        "Planet Vegeta",
        "Kanao Tsuyuri",
        "Bertholdt Hoover"
      ],
      "a": "planet vegeta"
    },
    {
      "q": "Who is the creator/author of Hunter x Hunter?",
      "options": [
        "Yoshihiro Togashi",
        "Production I.G",
        "Light Yagami",
        "Ufotable"
      ],
      "a": "yoshihiro togashi"
    },
    {
      "q": "What does the term 'fantasy' usually refer to in manga/anime context?",
      "options": [
        "fantasy",
        "isekai",
        "novel",
        "shonen"
      ],
      "a": "fantasy"
    },
    {
      "q": "What does the term 'sports' usually refer to in manga/anime context?",
      "options": [
        "fantasy",
        "sports",
        "manga",
        "josei"
      ],
      "a": "sports"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2004",
        "2020",
        "1990",
        "2016"
      ],
      "a": "1990"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2005",
        "1995",
        "2002",
        "1999"
      ],
      "a": "2002"
    },
    {
      "q": "Who is the creator/author of Fullmetal Alchemist?",
      "options": [
        "All Might",
        "Hiromu Arakawa",
        "Yoshihiro Togashi",
        "Yuji Itadori"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2005",
        "2011",
        "2020",
        "2009"
      ],
      "a": "2020"
    },
    {
      "q": "Who is the main protagonist of Tokyo Ghoul?",
      "options": [
        "Mikasa Ackerman",
        "Trunks",
        "Ken Kaneki",
        "A-1 Pictures"
      ],
      "a": "ken kaneki"
    },
    {
      "q": "Who is the main protagonist of Hunter x Hunter?",
      "options": [
        "Gon Freecss",
        "Ufotable",
        "Gaara",
        "Izuku Midoriya"
      ],
      "a": "gon freecss"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Touka Kirishima",
        "Renji Abarai",
        "Amestris",
        "Gon Freecss"
      ],
      "a": "amestris"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Gohan",
        "Production I.G",
        "Amestris",
        "Majin Buu"
      ],
      "a": "amestris"
    },
    {
      "q": "Who is the creator/author of Attack on Titan?",
      "options": [
        "Eren Yeager",
        "Cell",
        "Leorio",
        "Hajime Isayama"
      ],
      "a": "hajime isayama"
    },
    {
      "q": "Who is the creator/author of Hunter x Hunter?",
      "options": [
        "Toshiro Hitsugaya",
        "Usopp",
        "Sunrise",
        "Yoshihiro Togashi"
      ],
      "a": "yoshihiro togashi"
    },
    {
      "q": "Which studio animated Cowboy Bebop (notable adaptation)?",
      "options": [
        "Sunrise",
        "Eren Yeager",
        "Production I.G",
        "Light Yagami"
      ],
      "a": "sunrise"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Killua Zoldyck",
        "Nezuko Kamado",
        "Toei Animation",
        "Konoha"
      ],
      "a": "konoha"
    },
    {
      "q": "What does the term 'slice of life' usually refer to in manga/anime context?",
      "options": [
        "novel",
        "slice of life",
        "light novel",
        "psychological"
      ],
      "a": "slice of life"
    },
    {
      "q": "Which studio animated Jujutsu Kaisen (notable adaptation)?",
      "options": [
        "MAPPA",
        "Ryuk",
        "Piccolo",
        "Bones"
      ],
      "a": "mappa"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2013",
        "1999",
        "2000",
        "1997"
      ],
      "a": "1997"
    },
    {
      "q": "Who is the main protagonist of Tokyo Ghoul?",
      "options": [
        "Piccolo",
        "Izuku Midoriya",
        "Gaara",
        "Ken Kaneki"
      ],
      "a": "ken kaneki"
    },
    {
      "q": "Which studio animated Attack on Titan (notable adaptation)?",
      "options": [
        "MAPPA",
        "Trunks",
        "Sakura Haruno",
        "Gaara"
      ],
      "a": "mappa"
    },
    {
      "q": "Who is the main protagonist of Hunter x Hunter?",
      "options": [
        "Sanji",
        "Shanks",
        "Gon Freecss",
        "Koyoharu Gotouge"
      ],
      "a": "gon freecss"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2002",
        "1990",
        "1984",
        "1995"
      ],
      "a": "1984"
    },
    {
      "q": "Who is the creator/author of Bleach?",
      "options": [
        "Tite Kubo",
        "Ufotable",
        "Hayao Miyazaki",
        "Nobara Kugisaki"
      ],
      "a": "tite kubo"
    },
    {
      "q": "Which studio animated Attack on Titan (notable adaptation)?",
      "options": [
        "Akira Toriyama",
        "Naruto Uzumaki",
        "Hiromu Arakawa",
        "Wit Studio"
      ],
      "a": "wit studio"
    },
    {
      "q": "What does the term 'josei' usually refer to in manga/anime context?",
      "options": [
        "anime",
        "manga",
        "josei",
        "shojo"
      ],
      "a": "josei"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2005",
        "1990",
        "1995",
        "2016"
      ],
      "a": "2016"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2020",
        "1990",
        "2004",
        "2016"
      ],
      "a": "2004"
    },
    {
      "q": "What does the term 'shojo' usually refer to in manga/anime context?",
      "options": [
        "sports",
        "shojo",
        "slice of life",
        "manga"
      ],
      "a": "shojo"
    },
    {
      "q": "What does the term 'seinen' usually refer to in manga/anime context?",
      "options": [
        "seinen",
        "novel",
        "manga",
        "psychological"
      ],
      "a": "seinen"
    },
    {
      "q": "What does the term 'slice of life' usually refer to in manga/anime context?",
      "options": [
        "novel",
        "isekai",
        "slice of life",
        "anime"
      ],
      "a": "slice of life"
    },
    {
      "q": "Which studio animated Jujutsu Kaisen (notable adaptation)?",
      "options": [
        "Light Yagami",
        "MAPPA",
        "Portgas D. Ace",
        "Satoru Gojo"
      ],
      "a": "mappa"
    },
    {
      "q": "What does the term 'mecha' usually refer to in manga/anime context?",
      "options": [
        "mecha",
        "josei",
        "seinen",
        "fantasy"
      ],
      "a": "mecha"
    },
    {
      "q": "Which studio animated Cowboy Bebop (notable adaptation)?",
      "options": [
        "All Might",
        "Nobara Kugisaki",
        "Rukia Kuchiki",
        "Sunrise"
      ],
      "a": "sunrise"
    },
    {
      "q": "Who is the main protagonist of Dragon Ball?",
      "options": [
        "Goku",
        "Sui Ishida",
        "All Might",
        "Kurapika"
      ],
      "a": "goku"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2005",
        "2011",
        "1995",
        "2020"
      ],
      "a": "2020"
    },
    {
      "q": "Who is the creator/author of Hunter x Hunter?",
      "options": [
        "Yoshihiro Togashi",
        "Frieza",
        "Sunrise",
        "Kakashi Hatake"
      ],
      "a": "yoshihiro togashi"
    },
    {
      "q": "What does the term 'fantasy' usually refer to in manga/anime context?",
      "options": [
        "fantasy",
        "sports",
        "mecha",
        "light novel"
      ],
      "a": "fantasy"
    },
    {
      "q": "Who is the creator/author of Naruto?",
      "options": [
        "Monkey D. Luffy",
        "Cell",
        "Masashi Kishimoto",
        "Rukia Kuchiki"
      ],
      "a": "masashi kishimoto"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2002",
        "2018",
        "2011",
        "1980"
      ],
      "a": "2011"
    },
    {
      "q": "Which studio animated Attack on Titan (notable adaptation)?",
      "options": [
        "Toshiro Hitsugaya",
        "MAPPA",
        "Studio Pierrot",
        "Naoki Urasawa"
      ],
      "a": "mappa"
    },
    {
      "q": "Who is the main protagonist of Fullmetal Alchemist?",
      "options": [
        "Rem",
        "A-1 Pictures",
        "Edward Elric",
        "Kakashi Hatake"
      ],
      "a": "edward elric"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Gon Freecss",
        "Ken Kaneki",
        "Planet Vegeta",
        "Killua Zoldyck"
      ],
      "a": "planet vegeta"
    },
    {
      "q": "Which studio animated Jujutsu Kaisen (notable adaptation)?",
      "options": [
        "Hajime Isayama",
        "Sunrise",
        "MAPPA",
        "Cell"
      ],
      "a": "mappa"
    },
    {
      "q": "Who is the creator/author of Bleach?",
      "options": [
        "Piccolo",
        "Kohei Horikoshi",
        "Tite Kubo",
        "Alphonse Elric"
      ],
      "a": "tite kubo"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "U.A. High",
        "Goku",
        "Ufotable",
        "Alphonse Elric"
      ],
      "a": "u.a. high"
    },
    {
      "q": "Which studio animated Cowboy Bebop (notable adaptation)?",
      "options": [
        "Mikasa Ackerman",
        "Satoru Gojo",
        "Naruto Uzumaki",
        "Sunrise"
      ],
      "a": "sunrise"
    },
    {
      "q": "Who is the creator/author of Dragon Ball?",
      "options": [
        "Kohei Horikoshi",
        "MAPPA",
        "Akira Toriyama",
        "Itachi Uchiha"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Dressrosa",
        "Renji Abarai",
        "Konoha",
        "Yuji Itadori"
      ],
      "a": "dressrosa"
    },
    {
      "q": "Which studio animated Demon Slayer (notable adaptation)?",
      "options": [
        "Nami",
        "Byakuya Kuchiki",
        "Ufotable",
        "All Might"
      ],
      "a": "ufotable"
    },
    {
      "q": "Which studio animated Neon Genesis Evangelion (notable adaptation)?",
      "options": [
        "Touka Kirishima",
        "Alphonse Elric",
        "Gainax",
        "Takehiko Inoue"
      ],
      "a": "gainax"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2005",
        "2004",
        "1999",
        "1997"
      ],
      "a": "1997"
    },
    {
      "q": "Which studio animated Cowboy Bebop (notable adaptation)?",
      "options": [
        "Levi Ackerman",
        "Byakuya Kuchiki",
        "Satoru Gojo",
        "Sunrise"
      ],
      "a": "sunrise"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2016",
        "2009",
        "2002",
        "2000"
      ],
      "a": "2009"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Satoru Gojo",
        "Wit Studio",
        "Konoha",
        "Bertholdt Hoover"
      ],
      "a": "konoha"
    },
    {
      "q": "Who is the creator/author of Demon Slayer?",
      "options": [
        "Izuku Midoriya",
        "Koyoharu Gotouge",
        "Production I.G",
        "Tite Kubo"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "Who is the creator/author of Fullmetal Alchemist?",
      "options": [
        "Inosuke Hashibira",
        "Gon Freecss",
        "Hiromu Arakawa",
        "Wit Studio"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2011",
        "2013",
        "1990",
        "2004"
      ],
      "a": "2011"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "1990",
        "2000",
        "1999",
        "2009"
      ],
      "a": "1990"
    },
    {
      "q": "Which studio animated Neon Genesis Evangelion (notable adaptation)?",
      "options": [
        "Yuji Itadori",
        "Frieza",
        "Gainax",
        "Wit Studio"
      ],
      "a": "gainax"
    },
    {
      "q": "Which studio animated Spirited Away (notable adaptation)?",
      "options": [
        "Nezuko Kamado",
        "Hajime Isayama",
        "Cell",
        "Studio Ghibli"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "What does the term 'shonen' usually refer to in manga/anime context?",
      "options": [
        "shonen",
        "isekai",
        "psychological",
        "slice of life"
      ],
      "a": "shonen"
    },
    {
      "q": "Who is the main protagonist of Dragon Ball?",
      "options": [
        "Goku",
        "Kakashi Hatake",
        "Misa Amane",
        "Gege Akutami"
      ],
      "a": "goku"
    },
    {
      "q": "Who is the main protagonist of One Piece?",
      "options": [
        "Takehiko Inoue",
        "Monkey D. Luffy",
        "Reiner Braun",
        "Studio Pierrot"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Sanji",
        "Goku",
        "Tokyo",
        "Portgas D. Ace"
      ],
      "a": "tokyo"
    },
    {
      "q": "What does the term 'isekai' usually refer to in manga/anime context?",
      "options": [
        "isekai",
        "novel",
        "psychological",
        "mecha"
      ],
      "a": "isekai"
    },
    {
      "q": "Who is the creator/author of Fullmetal Alchemist?",
      "options": [
        "L Lawliet",
        "Hiromu Arakawa",
        "Nami",
        "Hisoka"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "Who is the main protagonist of Demon Slayer?",
      "options": [
        "Masashi Kishimoto",
        "Leorio",
        "Tanjiro Kamado",
        "Megumi Fushiguro"
      ],
      "a": "tanjiro kamado"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2018",
        "2000",
        "2002",
        "2005"
      ],
      "a": "2002"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Amestris",
        "Light Yagami",
        "Misa Amane",
        "Katsuki Bakugo"
      ],
      "a": "amestris"
    },
    {
      "q": "Who is the creator/author of Dragon Ball?",
      "options": [
        "L Lawliet",
        "Roy Mustang",
        "Akira Toriyama",
        "Sasuke Uchiha"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "1980",
        "2011",
        "1995",
        "2009"
      ],
      "a": "2011"
    },
    {
      "q": "What does the term 'shonen' usually refer to in manga/anime context?",
      "options": [
        "anime",
        "josei",
        "shonen",
        "psychological"
      ],
      "a": "shonen"
    },
    {
      "q": "Who is the main protagonist of Fullmetal Alchemist?",
      "options": [
        "Winry Rockbell",
        "Edward Elric",
        "Roronoa Zoro",
        "Itachi Uchiha"
      ],
      "a": "edward elric"
    },
    {
      "q": "Who is the main protagonist of Hunter x Hunter?",
      "options": [
        "Light Yagami",
        "Gon Freecss",
        "Yuji Itadori",
        "Toei Animation"
      ],
      "a": "gon freecss"
    },
    {
      "q": "Which studio animated Neon Genesis Evangelion (notable adaptation)?",
      "options": [
        "Inosuke Hashibira",
        "Gainax",
        "Gohan",
        "Naruto Uzumaki"
      ],
      "a": "gainax"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Eren Yeager",
        "Dressrosa",
        "Production I.G",
        "Gohan"
      ],
      "a": "dressrosa"
    },
    {
      "q": "What does the term 'shojo' usually refer to in manga/anime context?",
      "options": [
        "manga",
        "light novel",
        "shojo",
        "seinen"
      ],
      "a": "shojo"
    },
    {
      "q": "Who is the main protagonist of One Piece?",
      "options": [
        "Monkey D. Luffy",
        "Tanjiro Kamado",
        "Kanao Tsuyuri",
        "Ichigo Kurosaki"
      ],
      "a": "monkey d. luffy"
    },
    {
      "q": "Who is the creator/author of Dragon Ball?",
      "options": [
        "Alphonse Elric",
        "Rem",
        "Akira Toriyama",
        "Killua Zoldyck"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "Who is the main protagonist of My Hero Academia?",
      "options": [
        "Toei Animation",
        "Izuku Midoriya",
        "Studio Ghibli",
        "Touka Kirishima"
      ],
      "a": "izuku midoriya"
    },
    {
      "q": "Who is the creator/author of Fullmetal Alchemist?",
      "options": [
        "Madhouse",
        "Hiromu Arakawa",
        "Yuji Itadori",
        "Gaara"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "What does the term 'isekai' usually refer to in manga/anime context?",
      "options": [
        "seinen",
        "psychological",
        "manga",
        "isekai"
      ],
      "a": "isekai"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Nobara Kugisaki",
        "Planet Vegeta",
        "Studio Ghibli",
        "Piccolo"
      ],
      "a": "planet vegeta"
    },
    {
      "q": "What does the term 'sports' usually refer to in manga/anime context?",
      "options": [
        "sports",
        "shojo",
        "slice of life",
        "josei"
      ],
      "a": "sports"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2000",
        "2002",
        "1984",
        "2020"
      ],
      "a": "2002"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Konoha",
        "Eren Yeager",
        "Leorio",
        "Wit Studio"
      ],
      "a": "konoha"
    },
    {
      "q": "Who is the creator/author of Dragon Ball?",
      "options": [
        "Production I.G",
        "Akira Toriyama",
        "Gaara",
        "Toei Animation"
      ],
      "a": "akira toriyama"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2002",
        "1984",
        "2018",
        "1995"
      ],
      "a": "2018"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "1990",
        "2004",
        "1997",
        "2009"
      ],
      "a": "1997"
    },
    {
      "q": "Who is the creator/author of My Hero Academia?",
      "options": [
        "Hide",
        "Reiner Braun",
        "Kohei Horikoshi",
        "Killua Zoldyck"
      ],
      "a": "kohei horikoshi"
    },
    {
      "q": "What does the term 'isekai' usually refer to in manga/anime context?",
      "options": [
        "novel",
        "slice of life",
        "isekai",
        "shojo"
      ],
      "a": "isekai"
    },
    {
      "q": "Who is the creator/author of Hunter x Hunter?",
      "options": [
        "Reiner Braun",
        "Edward Elric",
        "Yoshihiro Togashi",
        "Naoki Urasawa"
      ],
      "a": "yoshihiro togashi"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Dressrosa",
        "Hide",
        "Tanjiro Kamado",
        "Frieza"
      ],
      "a": "dressrosa"
    },
    {
      "q": "Who is the main protagonist of Dragon Ball?",
      "options": [
        "Katsuki Bakugo",
        "Goku",
        "Toei Animation",
        "Nami"
      ],
      "a": "goku"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "1990",
        "2020",
        "2013",
        "2000"
      ],
      "a": "1990"
    },
    {
      "q": "Who is the main protagonist of Bleach?",
      "options": [
        "Portgas D. Ace",
        "Usopp",
        "Ichigo Kurosaki",
        "Nezuko Kamado"
      ],
      "a": "ichigo kurosaki"
    },
    {
      "q": "Who is the creator/author of My Hero Academia?",
      "options": [
        "Kohei Horikoshi",
        "Sanji",
        "Yuji Itadori",
        "L Lawliet"
      ],
      "a": "kohei horikoshi"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Karakura Town",
        "Megumi Fushiguro",
        "A-1 Pictures",
        "Nami"
      ],
      "a": "karakura town"
    },
    {
      "q": "Which studio animated Demon Slayer (notable adaptation)?",
      "options": [
        "Gohan",
        "Ufotable",
        "Shoto Todoroki",
        "Roronoa Zoro"
      ],
      "a": "ufotable"
    },
    {
      "q": "Which studio animated Demon Slayer (notable adaptation)?",
      "options": [
        "Yuji Itadori",
        "Katsuki Bakugo",
        "Ufotable",
        "Gohan"
      ],
      "a": "ufotable"
    },
    {
      "q": "Which studio animated Attack on Titan (notable adaptation)?",
      "options": [
        "Roy Mustang",
        "Wit Studio",
        "Masashi Kishimoto",
        "Bertholdt Hoover"
      ],
      "a": "wit studio"
    },
    {
      "q": "Who is the main protagonist of Jujutsu Kaisen?",
      "options": [
        "Yoshihiro Togashi",
        "Kakashi Hatake",
        "Yuji Itadori",
        "Reiner Braun"
      ],
      "a": "yuji itadori"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Light Yagami",
        "Rukia Kuchiki",
        "Vegeta",
        "Namek"
      ],
      "a": "namek"
    },
    {
      "q": "Who is the creator/author of My Hero Academia?",
      "options": [
        "Gaara",
        "Franky",
        "Hayao Miyazaki",
        "Kohei Horikoshi"
      ],
      "a": "kohei horikoshi"
    },
    {
      "q": "Which studio animated Attack on Titan (notable adaptation)?",
      "options": [
        "Naoki Urasawa",
        "Madhouse",
        "Franky",
        "MAPPA"
      ],
      "a": "mappa"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "U.A. High",
        "Dressrosa",
        "Touka Kirishima",
        "Gon Freecss"
      ],
      "a": "dressrosa"
    },
    {
      "q": "What does the term 'fantasy' usually refer to in manga/anime context?",
      "options": [
        "shonen",
        "fantasy",
        "josei",
        "anime"
      ],
      "a": "fantasy"
    },
    {
      "q": "Who is the main protagonist of Hunter x Hunter?",
      "options": [
        "Studio Ghibli",
        "Hisoka",
        "Killua Zoldyck",
        "Gon Freecss"
      ],
      "a": "gon freecss"
    },
    {
      "q": "Who is the main protagonist of Naruto?",
      "options": [
        "Takehiko Inoue",
        "Kanao Tsuyuri",
        "Goku",
        "Naruto Uzumaki"
      ],
      "a": "naruto uzumaki"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "U.A. High",
        "Nezuko Kamado",
        "Katsuki Bakugo",
        "Bertholdt Hoover"
      ],
      "a": "u.a. high"
    },
    {
      "q": "Who is the main protagonist of Naruto?",
      "options": [
        "Gege Akutami",
        "Naruto Uzumaki",
        "Wit Studio",
        "Mikasa Ackerman"
      ],
      "a": "naruto uzumaki"
    },
    {
      "q": "What does the term 'mecha' usually refer to in manga/anime context?",
      "options": [
        "novel",
        "sports",
        "fantasy",
        "mecha"
      ],
      "a": "mecha"
    },
    {
      "q": "Which studio animated Neon Genesis Evangelion (notable adaptation)?",
      "options": [
        "Portgas D. Ace",
        "Vegeta",
        "Gainax",
        "Sui Ishida"
      ],
      "a": "gainax"
    },
    {
      "q": "Who is the main protagonist of Naruto?",
      "options": [
        "Touka Kirishima",
        "Naruto Uzumaki",
        "Toshiro Hitsugaya",
        "Edward Elric"
      ],
      "a": "naruto uzumaki"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Whale Island",
        "Light Yagami",
        "Shoto Todoroki",
        "Shanks"
      ],
      "a": "whale island"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2004",
        "2005",
        "1984",
        "2018"
      ],
      "a": "1984"
    },
    {
      "q": "Who is the creator/author of Fullmetal Alchemist?",
      "options": [
        "Armin Arlert",
        "Naruto Uzumaki",
        "Hiromu Arakawa",
        "Takehiko Inoue"
      ],
      "a": "hiromu arakawa"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Ufotable",
        "Nobara Kugisaki",
        "Shoto Todoroki",
        "Namek"
      ],
      "a": "namek"
    },
    {
      "q": "Who is the main protagonist of Bleach?",
      "options": [
        "Zenitsu Agatsuma",
        "Ichigo Kurosaki",
        "Misa Amane",
        "A-1 Pictures"
      ],
      "a": "ichigo kurosaki"
    },
    {
      "q": "Who is the creator/author of Bleach?",
      "options": [
        "Alphonse Elric",
        "MAPPA",
        "Ryuk",
        "Tite Kubo"
      ],
      "a": "tite kubo"
    },
    {
      "q": "Who is the main protagonist of Fullmetal Alchemist?",
      "options": [
        "Touka Kirishima",
        "Edward Elric",
        "Eren Yeager",
        "Kurapika"
      ],
      "a": "edward elric"
    },
    {
      "q": "Which studio animated Spirited Away (notable adaptation)?",
      "options": [
        "Sakura Haruno",
        "Satoru Gojo",
        "Rize Kamishiro",
        "Studio Ghibli"
      ],
      "a": "studio ghibli"
    },
    {
      "q": "Who is the creator/author of Demon Slayer?",
      "options": [
        "Koyoharu Gotouge",
        "Kohei Horikoshi",
        "Gege Akutami",
        "Production I.G"
      ],
      "a": "koyoharu gotouge"
    },
    {
      "q": "What does the term 'psychological' usually refer to in manga/anime context?",
      "options": [
        "isekai",
        "psychological",
        "slice of life",
        "sports"
      ],
      "a": "psychological"
    },
    {
      "q": "Which studio animated Jujutsu Kaisen (notable adaptation)?",
      "options": [
        "MAPPA",
        "Hajime Isayama",
        "Byakuya Kuchiki",
        "Izuku Midoriya"
      ],
      "a": "mappa"
    },
    {
      "q": "Who is the main protagonist of Dragon Ball?",
      "options": [
        "Kentaro Miura",
        "Gon Freecss",
        "Franky",
        "Goku"
      ],
      "a": "goku"
    },
    {
      "q": "Who is the creator/author of Bleach?",
      "options": [
        "Trunks",
        "Gaara",
        "Majin Buu",
        "Tite Kubo"
      ],
      "a": "tite kubo"
    },
    {
      "q": "In which year did a notable manga/anime event occur?",
      "options": [
        "2009",
        "2011",
        "2005",
        "1997"
      ],
      "a": "2009"
    },
    {
      "q": "Who is the main protagonist of Tokyo Ghoul?",
      "options": [
        "Edward Elric",
        "Portgas D. Ace",
        "Ken Kaneki",
        "Sanji"
      ],
      "a": "ken kaneki"
    },
    {
      "q": "In which setting is a notable series commonly located?",
      "options": [
        "Kanao Tsuyuri",
        "Tokyo",
        "Toei Animation",
        "Studio Ghibli"
      ],
      "a": "tokyo"
    },
    {
      "q": "What does the term 'shonen' usually refer to in manga/anime context?",
      "options": [
        "shonen",
        "slice of life",
        "josei",
        "anime"
      ],
      "a": "shonen"
    },
    {
      "q": "Who is the main protagonist of Tokyo Ghoul?",
      "options": [
        "Naruto Uzumaki",
        "Ken Kaneki",
        "Reiner Braun",
        "Edward Elric"
      ],
      "a": "ken kaneki"
    }
  ],
  "game": [
    {
      "q": "When was PUBG released for PC (early 2017)?",
      "options": [
        "Rockstar Games",
        "2018",
        "2017",
        "2011"
      ],
      "a": "2017"
    },
    {
      "q": "When was PUBG Mobile globally released?",
      "options": [
        "Valve",
        "Riot Games",
        "Santa Monica Studio",
        "2018"
      ],
      "a": "2018"
    },
    {
      "q": "Who developed Fortnite?",
      "options": [
        "2003",
        "Blizzard",
        "Epic Games",
        "2017"
      ],
      "a": "epic games"
    },
    {
      "q": "Which studio developed God of War (2018)?",
      "options": [
        "Rockstar Games",
        "Santa Monica Studio",
        "2003",
        "Valve"
      ],
      "a": "santa monica studio"
    },
    {
      "q": "Which company developed Minecraft?",
      "options": [
        "Mojang Studios",
        "2003",
        "Ubisoft",
        "2018"
      ],
      "a": "mojang studios"
    },
    {
      "q": "Which company published FIFA series?",
      "options": [
        "2003",
        "2013",
        "Electronic Arts",
        "Mojang Studios"
      ],
      "a": "electronic arts"
    },
    {
      "q": "When was GTA V first released?",
      "options": [
        "2009",
        "2013",
        "Rockstar Games",
        "2016"
      ],
      "a": "2013"
    },
    {
      "q": "Which company developed League of Legends?",
      "options": [
        "Riot Games",
        "Santa Monica Studio",
        "2017",
        "Tencent"
      ],
      "a": "riot games"
    },
    {
      "q": "Which company developed Call of Duty (Infinity Ward)?",
      "options": [
        "Santa Monica Studio",
        "Valve",
        "Infinity Ward",
        "2003"
      ],
      "a": "infinity ward"
    },
    {
      "q": "Which company developed Assassin's Creed?",
      "options": [
        "Riot Games",
        "2013",
        "2018",
        "Ubisoft"
      ],
      "a": "ubisoft"
    },
    {
      "q": "FIFA is commonly played on which platform?",
      "options": [
        "PC",
        "Mobile",
        "PlayStation",
        "Multi-platform"
      ],
      "a": "multi-platform"
    },
    {
      "q": "In which year was Assassin's Creed first released?",
      "options": [
        "2003",
        "2016",
        "2017",
        "2011"
      ],
      "a": "2003"
    },
    {
      "q": "GTA V is commonly played on which platform?",
      "options": [
        "Nintendo Switch",
        "Console",
        "Xbox",
        "Mobile"
      ],
      "a": "mobile"
    },
    {
      "q": "What is the main genre of Fortnite?",
      "options": [
        "Racing",
        "Sandbox",
        "Sports",
        "Strategy"
      ],
      "a": "sandbox"
    },
    {
      "q": "Which company developed FIFA?",
      "options": [
        "2018",
        "Rockstar Games",
        "2013",
        "2017"
      ],
      "a": "rockstar games"
    },
    {
      "q": "GTA V is commonly played on which platform?",
      "options": [
        "PlayStation",
        "Console",
        "Xbox",
        "Nintendo Switch"
      ],
      "a": "nintendo switch"
    },
    {
      "q": "What is the main genre of Assassin's Creed?",
      "options": [
        "Battle Royale",
        "Sports",
        "RPG",
        "MOBA"
      ],
      "a": "battle royale"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "2011",
        "2013",
        "2003",
        "2009"
      ],
      "a": "2009"
    },
    {
      "q": "In which year was FIFA first released?",
      "options": [
        "2017",
        "2016",
        "2009",
        "2013"
      ],
      "a": "2016"
    },
    {
      "q": "Which company developed Call of Duty?",
      "options": [
        "2018",
        "2016",
        "2009",
        "Activision"
      ],
      "a": "2018"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "2011",
        "2009",
        "2016",
        "2013"
      ],
      "a": "2011"
    },
    {
      "q": "League of Legends is commonly played on which platform?",
      "options": [
        "Xbox",
        "PlayStation",
        "Nintendo Switch",
        "Console"
      ],
      "a": "playstation"
    },
    {
      "q": "What is the main genre of Call of Duty?",
      "options": [
        "Action-adventure",
        "Racing",
        "Sports",
        "Sandbox"
      ],
      "a": "sandbox"
    },
    {
      "q": "In which year was Call of Duty first released?",
      "options": [
        "2003",
        "2018",
        "2013",
        "2009"
      ],
      "a": "2018"
    },
    {
      "q": "Which company developed League of Legends?",
      "options": [
        "2016",
        "Sony",
        "2017",
        "Activision"
      ],
      "a": "2017"
    },
    {
      "q": "Which company developed Minecraft?",
      "options": [
        "2016",
        "Rockstar Games",
        "2013",
        "Ubisoft"
      ],
      "a": "2013"
    },
    {
      "q": "In which year was Call of Duty first released?",
      "options": [
        "2017",
        "2013",
        "2016",
        "2018"
      ],
      "a": "2018"
    },
    {
      "q": "In which year was GTA V first released?",
      "options": [
        "2016",
        "2013",
        "2009",
        "2018"
      ],
      "a": "2018"
    },
    {
      "q": "Which company developed GTA V?",
      "options": [
        "2011",
        "Riot Games",
        "2009",
        "Santa Monica Studio"
      ],
      "a": "santa monica studio"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "Rockstar Games",
        "2003",
        "Square Enix",
        "Activision"
      ],
      "a": "2003"
    },
    {
      "q": "What is the main genre of Mobile Legends?",
      "options": [
        "Action-adventure",
        "Fighting",
        "Strategy",
        "RPG"
      ],
      "a": "rpg"
    },
    {
      "q": "Which company developed Fortnite?",
      "options": [
        "2018",
        "2017",
        "2003",
        "Santa Monica Studio"
      ],
      "a": "2017"
    },
    {
      "q": "Which company developed FIFA?",
      "options": [
        "Ubisoft",
        "2013",
        "2016",
        "Activision"
      ],
      "a": "2016"
    },
    {
      "q": "What is the main genre of Assassin's Creed?",
      "options": [
        "Fighting",
        "RPG",
        "Action-adventure",
        "Puzzle"
      ],
      "a": "action-adventure"
    },
    {
      "q": "What is the main genre of PUBG?",
      "options": [
        "RPG",
        "Fighting",
        "Battle Royale",
        "Shooter"
      ],
      "a": "rpg"
    },
    {
      "q": "Assassin's Creed is commonly played on which platform?",
      "options": [
        "PlayStation",
        "Xbox",
        "PC",
        "Arcade"
      ],
      "a": "xbox"
    },
    {
      "q": "What is the main genre of FIFA?",
      "options": [
        "Sandbox",
        "Strategy",
        "MOBA",
        "Racing"
      ],
      "a": "sandbox"
    },
    {
      "q": "God of War is commonly played on which platform?",
      "options": [
        "Multi-platform",
        "Mobile",
        "Nintendo Switch",
        "Xbox"
      ],
      "a": "nintendo switch"
    },
    {
      "q": "Fortnite is commonly played on which platform?",
      "options": [
        "Nintendo Switch",
        "Multi-platform",
        "Console",
        "PlayStation"
      ],
      "a": "multi-platform"
    },
    {
      "q": "What is the main genre of Fortnite?",
      "options": [
        "Shooter",
        "Strategy",
        "Puzzle",
        "Sports"
      ],
      "a": "shooter"
    },
    {
      "q": "FIFA is commonly played on which platform?",
      "options": [
        "Mobile",
        "PC",
        "Arcade",
        "Nintendo Switch"
      ],
      "a": "pc"
    },
    {
      "q": "Fortnite is commonly played on which platform?",
      "options": [
        "Arcade",
        "Nintendo Switch",
        "PlayStation",
        "Xbox"
      ],
      "a": "xbox"
    },
    {
      "q": "In which year was PUBG first released?",
      "options": [
        "2011",
        "2003",
        "2013",
        "2017"
      ],
      "a": "2003"
    },
    {
      "q": "In which year was Mobile Legends first released?",
      "options": [
        "2013",
        "2011",
        "2017",
        "2016"
      ],
      "a": "2017"
    },
    {
      "q": "What is the main genre of Assassin's Creed?",
      "options": [
        "Sports",
        "Shooter",
        "RPG",
        "MOBA"
      ],
      "a": "moba"
    },
    {
      "q": "Call of Duty is commonly played on which platform?",
      "options": [
        "Xbox",
        "PC",
        "Multi-platform",
        "Arcade"
      ],
      "a": "multi-platform"
    },
    {
      "q": "In which year was Call of Duty first released?",
      "options": [
        "2003",
        "2016",
        "2009",
        "2011"
      ],
      "a": "2003"
    },
    {
      "q": "What is the main genre of Fortnite?",
      "options": [
        "Sandbox",
        "Shooter",
        "Sports",
        "Racing"
      ],
      "a": "sports"
    },
    {
      "q": "In which year was FIFA first released?",
      "options": [
        "2018",
        "2011",
        "2003",
        "2017"
      ],
      "a": "2003"
    },
    {
      "q": "What is the main genre of Assassin's Creed?",
      "options": [
        "Sandbox",
        "Action-adventure",
        "Racing",
        "Strategy"
      ],
      "a": "strategy"
    },
    {
      "q": "Call of Duty is commonly played on which platform?",
      "options": [
        "Nintendo Switch",
        "Mobile",
        "PC",
        "Console"
      ],
      "a": "mobile"
    },
    {
      "q": "Call of Duty is commonly played on which platform?",
      "options": [
        "Xbox",
        "PlayStation",
        "Nintendo Switch",
        "Multi-platform"
      ],
      "a": "nintendo switch"
    },
    {
      "q": "Which company developed Assassin's Creed?",
      "options": [
        "Valve",
        "2013",
        "Ubisoft",
        "Sony"
      ],
      "a": "ubisoft"
    },
    {
      "q": "What is the main genre of Minecraft?",
      "options": [
        "RPG",
        "Sandbox",
        "Shooter",
        "Sports"
      ],
      "a": "shooter"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "2003",
        "Rockstar Games",
        "Square Enix",
        "Valve"
      ],
      "a": "2003"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "Epic Games",
        "Tencent",
        "Mojang Studios",
        "Ubisoft"
      ],
      "a": "epic games"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "Tencent",
        "Nintendo",
        "2009",
        "Square Enix"
      ],
      "a": "2009"
    },
    {
      "q": "GTA V is commonly played on which platform?",
      "options": [
        "PC",
        "PlayStation",
        "Arcade",
        "Xbox"
      ],
      "a": "pc"
    },
    {
      "q": "In which year was Call of Duty first released?",
      "options": [
        "2011",
        "2017",
        "2013",
        "2009"
      ],
      "a": "2011"
    },
    {
      "q": "In which year was League of Legends first released?",
      "options": [
        "2003",
        "2011",
        "2018",
        "2016"
      ],
      "a": "2018"
    },
    {
      "q": "What is the main genre of Fortnite?",
      "options": [
        "Sandbox",
        "Action-adventure",
        "RPG",
        "Strategy"
      ],
      "a": "strategy"
    },
    {
      "q": "Mobile Legends is commonly played on which platform?",
      "options": [
        "Console",
        "Mobile",
        "PlayStation",
        "Xbox"
      ],
      "a": "playstation"
    },
    {
      "q": "Call of Duty is commonly played on which platform?",
      "options": [
        "PC",
        "Multi-platform",
        "Xbox",
        "Mobile"
      ],
      "a": "mobile"
    },
    {
      "q": "In which year was Minecraft first released?",
      "options": [
        "2016",
        "2017",
        "2011",
        "2003"
      ],
      "a": "2016"
    },
    {
      "q": "Which company developed GTA V?",
      "options": [
        "Ubisoft",
        "Tencent",
        "2011",
        "Valve"
      ],
      "a": "ubisoft"
    },
    {
      "q": "PUBG is commonly played on which platform?",
      "options": [
        "PC",
        "Nintendo Switch",
        "Xbox",
        "Console"
      ],
      "a": "pc"
    },
    {
      "q": "Fortnite is commonly played on which platform?",
      "options": [
        "Mobile",
        "Nintendo Switch",
        "Xbox",
        "Multi-platform"
      ],
      "a": "multi-platform"
    },
    {
      "q": "What is the main genre of League of Legends?",
      "options": [
        "Sports",
        "Action-adventure",
        "MOBA",
        "Racing"
      ],
      "a": "sports"
    },
    {
      "q": "Which company developed Assassin's Creed?",
      "options": [
        "Santa Monica Studio",
        "Mojang Studios",
        "Valve",
        "2016"
      ],
      "a": "santa monica studio"
    },
    {
      "q": "In which year was God of War first released?",
      "options": [
        "2011",
        "2017",
        "2013",
        "2009"
      ],
      "a": "2011"
    },
    {
      "q": "What is the main genre of Mobile Legends?",
      "options": [
        "Puzzle",
        "Shooter",
        "Fighting",
        "Strategy"
      ],
      "a": "strategy"
    },
    {
      "q": "Fortnite is commonly played on which platform?",
      "options": [
        "Arcade",
        "Multi-platform",
        "Xbox",
        "PC"
      ],
      "a": "multi-platform"
    },
    {
      "q": "PUBG is commonly played on which platform?",
      "options": [
        "Nintendo Switch",
        "Arcade",
        "PlayStation",
        "Console"
      ],
      "a": "playstation"
    },
    {
      "q": "Which company developed PUBG?",
      "options": [
        "2009",
        "Epic Games",
        "Blizzard",
        "2016"
      ],
      "a": "blizzard"
    },
    {
      "q": "Minecraft is commonly played on which platform?",
      "options": [
        "Console",
        "Mobile",
        "Nintendo Switch",
        "Multi-platform"
      ],
      "a": "multi-platform"
    },
    {
      "q": "In which year was Assassin's Creed first released?",
      "options": [
        "2017",
        "2011",
        "2016",
        "2013"
      ],
      "a": "2016"
    },
    {
      "q": "What is the main genre of Assassin's Creed?",
      "options": [
        "Sports",
        "Puzzle",
        "RPG",
        "Shooter"
      ],
      "a": "sports"
    },
    {
      "q": "What is the main genre of Minecraft?",
      "options": [
        "Shooter",
        "Puzzle",
        "RPG",
        "MOBA"
      ],
      "a": "shooter"
    },
    {
      "q": "Which company developed GTA V?",
      "options": [
        "Rockstar Games",
        "2018",
        "2017",
        "2016"
      ],
      "a": "2017"
    },
    {
      "q": "What is the main genre of Fortnite?",
      "options": [
        "Strategy",
        "RPG",
        "Puzzle",
        "Shooter"
      ],
      "a": "strategy"
    },
    {
      "q": "What is the main genre of Assassin's Creed?",
      "options": [
        "Sandbox",
        "Racing",
        "Shooter",
        "Action-adventure"
      ],
      "a": "action-adventure"
    },
    {
      "q": "Which company developed Minecraft?",
      "options": [
        "2011",
        "2003",
        "2016",
        "Ubisoft"
      ],
      "a": "ubisoft"
    },
    {
      "q": "In which year was PUBG first released?",
      "options": [
        "2013",
        "2016",
        "2017",
        "2018"
      ],
      "a": "2013"
    },
    {
      "q": "Which company developed GTA V?",
      "options": [
        "Riot Games",
        "Square Enix",
        "Nintendo",
        "Mojang Studios"
      ],
      "a": "mojang studios"
    },
    {
      "q": "Which company developed God of War?",
      "options": [
        "Valve",
        "2003",
        "Tencent",
        "2017"
      ],
      "a": "2017"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "2009",
        "Tencent",
        "2013",
        "Nintendo"
      ],
      "a": "2013"
    },
    {
      "q": "In which year was GTA V first released?",
      "options": [
        "2018",
        "2003",
        "2011",
        "2009"
      ],
      "a": "2018"
    },
    {
      "q": "Which company developed God of War?",
      "options": [
        "2013",
        "Blizzard",
        "Square Enix",
        "Tencent"
      ],
      "a": "2013"
    },
    {
      "q": "What is the main genre of League of Legends?",
      "options": [
        "Sandbox",
        "Action-adventure",
        "RPG",
        "Strategy"
      ],
      "a": "sandbox"
    },
    {
      "q": "Which company developed Minecraft?",
      "options": [
        "Riot Games",
        "2009",
        "2018",
        "Activision"
      ],
      "a": "riot games"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "Santa Monica Studio",
        "Activision",
        "2017",
        "Riot Games"
      ],
      "a": "riot games"
    },
    {
      "q": "God of War is commonly played on which platform?",
      "options": [
        "Xbox",
        "Multi-platform",
        "Arcade",
        "Nintendo Switch"
      ],
      "a": "nintendo switch"
    },
    {
      "q": "In which year was FIFA first released?",
      "options": [
        "2009",
        "2011",
        "2016",
        "2018"
      ],
      "a": "2009"
    },
    {
      "q": "League of Legends is commonly played on which platform?",
      "options": [
        "PlayStation",
        "Multi-platform",
        "Arcade",
        "Console"
      ],
      "a": "multi-platform"
    },
    {
      "q": "Assassin's Creed is commonly played on which platform?",
      "options": [
        "Arcade",
        "Xbox",
        "PC",
        "Multi-platform"
      ],
      "a": "multi-platform"
    },
    {
      "q": "In which year was Mobile Legends first released?",
      "options": [
        "2013",
        "2016",
        "2017",
        "2009"
      ],
      "a": "2009"
    },
    {
      "q": "Mobile Legends is commonly played on which platform?",
      "options": [
        "Multi-platform",
        "Nintendo Switch",
        "PC",
        "PlayStation"
      ],
      "a": "pc"
    },
    {
      "q": "Which company developed Call of Duty?",
      "options": [
        "Tencent",
        "2017",
        "2011",
        "Epic Games"
      ],
      "a": "2011"
    },
    {
      "q": "Which company developed Mobile Legends?",
      "options": [
        "2017",
        "2011",
        "Ubisoft",
        "Santa Monica Studio"
      ],
      "a": "santa monica studio"
    },
    {
      "q": "What is the main genre of PUBG?",
      "options": [
        "MOBA",
        "Strategy",
        "Action-adventure",
        "Fighting"
      ],
      "a": "moba"
    }
  ],
  "bd": [
    {
      "q": "When did Bangladesh gain independence?",
      "options": [
        "1971",
        "Ziaur Rahman",
        "1982",
        "Kuakata"
      ],
      "a": "1971"
    },
    {
      "q": "Who is called the Father of the Nation of Bangladesh?",
      "options": [
        "Khulna",
        "Sheikh Mujibur Rahman",
        "Dhaka",
        "Khaleda Zia"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "What is the capital of Bangladesh?",
      "options": [
        "Dhaka",
        "Sheikh Mujibur Rahman",
        "1982",
        "Cox's Bazar"
      ],
      "a": "dhaka"
    },
    {
      "q": "What is the national fruit of Bangladesh?",
      "options": [
        "Jackfruit",
        "Kuakata",
        "Chattogram",
        "1969"
      ],
      "a": "jackfruit"
    },
    {
      "q": "Which beach is known as one of the world's longest natural beaches in Bangladesh?",
      "options": [
        "Sylhet",
        "Khaleda Zia",
        "Dhaka",
        "Cox's Bazar"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "What is the currency of Bangladesh?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Chattogram",
        "Dhaka",
        "Taka"
      ],
      "a": "taka"
    },
    {
      "q": "Which mangrove forest is world-famous in Bangladesh?",
      "options": [
        "Chattogram",
        "Tajuddin Ahmad",
        "1972",
        "Sundarbans"
      ],
      "a": "sundarbans"
    },
    {
      "q": "In which year was the Constitution of Bangladesh adopted?",
      "options": [
        "1972",
        "Tajuddin Ahmad",
        "Dhaka",
        "Chattogram"
      ],
      "a": "1972"
    },
    {
      "q": "Who was assassinated on 15 August 1975?",
      "options": [
        "Sundarbans",
        "Sheikh Mujibur Rahman",
        "1969",
        "Sylhet"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which is the busiest seaport in Bangladesh?",
      "options": [
        "Khulna",
        "Chattogram Port",
        "1952",
        "Chattogram"
      ],
      "a": "chattogram port"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Sheikh Hasina",
        "Rabindranath Tagore",
        "Hussain Muhammad Ershad",
        "Khaleda Zia"
      ],
      "a": "hussain muhammad ershad"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Victory Day",
        "Eid",
        "Christmas",
        "Holi"
      ],
      "a": "victory day"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Sheikh Hasina",
        "Khaleda Zia",
        "Rabindranath Tagore",
        "Tajuddin Ahmad"
      ],
      "a": "khaleda zia"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Eid",
        "Pohela Boishakh",
        "Holi",
        "Christmas"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Kuakata",
        "Cox's Bazar",
        "Rajshahi",
        "Chattogram"
      ],
      "a": "rajshahi"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "2001",
        "1990",
        "1952",
        "1972"
      ],
      "a": "1972"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Pohela Boishakh",
        "Holi",
        "Ekushey Book Fair",
        "Bengali New Year"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Christmas",
        "Holi",
        "Ekushey Book Fair",
        "Victory Day"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Kuakata",
        "Sylhet",
        "India",
        "Sundarbans"
      ],
      "a": "kuakata"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Pohela Boishakh",
        "Eid",
        "Bengali New Year",
        "Holi"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Holi",
        "Victory Day",
        "Christmas",
        "Pohela Boishakh"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Cox's Bazar",
        "Sylhet",
        "Kuakata",
        "Chattogram"
      ],
      "a": "sylhet"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Eid",
        "Bengali New Year",
        "Victory Day",
        "Christmas"
      ],
      "a": "victory day"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Khaleda Zia",
        "Tajuddin Ahmad",
        "Hussain Muhammad Ershad",
        "Rabindranath Tagore"
      ],
      "a": "tajuddin ahmad"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1972",
        "1971",
        "2001",
        "1952"
      ],
      "a": "1971"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1972",
        "1971",
        "1952",
        "2001"
      ],
      "a": "1952"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Christmas",
        "Ekushey Book Fair",
        "Eid",
        "Pohela Boishakh"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "India",
        "Khulna",
        "Dhaka",
        "Pakistan"
      ],
      "a": "dhaka"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Tajuddin Ahmad",
        "Rabindranath Tagore",
        "Ziaur Rahman",
        "Hussain Muhammad Ershad"
      ],
      "a": "tajuddin ahmad"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Christmas",
        "Pohela Boishakh",
        "Eid",
        "Bengali New Year"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Chattogram",
        "Sylhet",
        "Dhaka",
        "Cox's Bazar"
      ],
      "a": "chattogram"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1971",
        "1972",
        "1952",
        "2001"
      ],
      "a": "1971"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1971",
        "1996",
        "1952",
        "2001"
      ],
      "a": "1996"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1952",
        "2001",
        "1971",
        "1972"
      ],
      "a": "1972"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Pohela Boishakh",
        "Bengali New Year",
        "Victory Day",
        "Christmas"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Pohela Boishakh",
        "Holi",
        "Bengali New Year",
        "Ekushey Book Fair"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Hussain Muhammad Ershad",
        "Sheikh Mujibur Rahman",
        "Sheikh Hasina",
        "Rabindranath Tagore"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Rajshahi",
        "Khulna",
        "India",
        "Sylhet"
      ],
      "a": "khulna"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Bengali New Year",
        "Christmas",
        "Victory Day",
        "Pohela Boishakh"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Sheikh Hasina",
        "Kazi Nazrul Islam",
        "Rabindranath Tagore",
        "Tajuddin Ahmad"
      ],
      "a": "sheikh hasina"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1990",
        "1971",
        "1952",
        "1972"
      ],
      "a": "1971"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Ziaur Rahman",
        "Khaleda Zia",
        "Sheikh Mujibur Rahman",
        "Rabindranath Tagore"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1990",
        "1952",
        "1972",
        "1971"
      ],
      "a": "1972"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Bengali New Year",
        "Ekushey Book Fair",
        "Christmas",
        "Pohela Boishakh"
      ],
      "a": "bengali new year"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Sheikh Hasina",
        "Kazi Nazrul Islam",
        "Tajuddin Ahmad",
        "Rabindranath Tagore"
      ],
      "a": "tajuddin ahmad"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Khaleda Zia",
        "Ziaur Rahman",
        "Sheikh Hasina",
        "Kazi Nazrul Islam"
      ],
      "a": "sheikh hasina"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Cox's Bazar",
        "India",
        "Pakistan",
        "Rajshahi"
      ],
      "a": "rajshahi"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1990",
        "1971",
        "1972",
        "2001"
      ],
      "a": "1990"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Holi",
        "Ekushey Book Fair",
        "Bengali New Year",
        "Victory Day"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Victory Day",
        "Ekushey Book Fair",
        "Bengali New Year",
        "Eid"
      ],
      "a": "victory day"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Ekushey Book Fair",
        "Victory Day",
        "Christmas",
        "Pohela Boishakh"
      ],
      "a": "victory day"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Ekushey Book Fair",
        "Eid",
        "Bengali New Year",
        "Pohela Boishakh"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Hussain Muhammad Ershad",
        "Kazi Nazrul Islam",
        "Tajuddin Ahmad",
        "Ziaur Rahman"
      ],
      "a": "hussain muhammad ershad"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Pohela Boishakh",
        "Eid",
        "Christmas",
        "Holi"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1952",
        "1990",
        "1972",
        "2001"
      ],
      "a": "1972"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Pohela Boishakh",
        "Christmas",
        "Eid",
        "Victory Day"
      ],
      "a": "victory day"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Khaleda Zia",
        "Sheikh Hasina",
        "Rabindranath Tagore",
        "Ziaur Rahman"
      ],
      "a": "sheikh hasina"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Bengali New Year",
        "Ekushey Book Fair",
        "Eid",
        "Pohela Boishakh"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Cox's Bazar",
        "Khulna",
        "India",
        "Kuakata"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "India",
        "Khulna",
        "Chattogram",
        "Sundarbans"
      ],
      "a": "khulna"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Sylhet",
        "Dhaka",
        "Khulna",
        "Chattogram"
      ],
      "a": "dhaka"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Hussain Muhammad Ershad",
        "Khaleda Zia",
        "Kazi Nazrul Islam",
        "Tajuddin Ahmad"
      ],
      "a": "hussain muhammad ershad"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Victory Day",
        "Ekushey Book Fair",
        "Eid",
        "Christmas"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Hussain Muhammad Ershad",
        "Rabindranath Tagore",
        "Khaleda Zia",
        "Sheikh Hasina"
      ],
      "a": "sheikh hasina"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Kazi Nazrul Islam",
        "Sheikh Mujibur Rahman",
        "Rabindranath Tagore",
        "Ziaur Rahman"
      ],
      "a": "ziaur rahman"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Sundarbans",
        "Rajshahi",
        "Dhaka",
        "India"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Sylhet",
        "Kuakata",
        "Khulna",
        "Chattogram"
      ],
      "a": "kuakata"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Kuakata",
        "Chattogram",
        "Dhaka",
        "Rajshahi"
      ],
      "a": "chattogram"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Tajuddin Ahmad",
        "Ziaur Rahman",
        "Rabindranath Tagore",
        "Hussain Muhammad Ershad"
      ],
      "a": "ziaur rahman"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Bengali New Year",
        "Eid",
        "Holi",
        "Ekushey Book Fair"
      ],
      "a": "bengali new year"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Khaleda Zia",
        "Hussain Muhammad Ershad",
        "Sheikh Hasina",
        "Tajuddin Ahmad"
      ],
      "a": "tajuddin ahmad"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Ekushey Book Fair",
        "Victory Day",
        "Eid",
        "Christmas"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Ekushey Book Fair",
        "Eid",
        "Pohela Boishakh",
        "Bengali New Year"
      ],
      "a": "bengali new year"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1972",
        "1990",
        "2001",
        "1971"
      ],
      "a": "1972"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1952",
        "1996",
        "1990",
        "1972"
      ],
      "a": "1996"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Victory Day",
        "Eid",
        "Ekushey Book Fair",
        "Pohela Boishakh"
      ],
      "a": "ekushey book fair"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Chattogram",
        "India",
        "Khulna",
        "Sundarbans"
      ],
      "a": "sundarbans"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Khulna",
        "Pakistan",
        "Kuakata",
        "Sylhet"
      ],
      "a": "kuakata"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Cox's Bazar",
        "India",
        "Pakistan",
        "Sylhet"
      ],
      "a": "cox's bazar"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1972",
        "1952",
        "1971",
        "2001"
      ],
      "a": "1952"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Sheikh Hasina",
        "Tajuddin Ahmad",
        "Rabindranath Tagore",
        "Ziaur Rahman"
      ],
      "a": "tajuddin ahmad"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Dhaka",
        "India",
        "Khulna",
        "Kuakata"
      ],
      "a": "kuakata"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "India",
        "Cox's Bazar",
        "Sundarbans",
        "Khulna"
      ],
      "a": "khulna"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Christmas",
        "Victory Day",
        "Eid",
        "Pohela Boishakh"
      ],
      "a": "victory day"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Victory Day",
        "Christmas",
        "Holi",
        "Bengali New Year"
      ],
      "a": "victory day"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Chattogram",
        "Sylhet",
        "Dhaka",
        "Kuakata"
      ],
      "a": "dhaka"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Kazi Nazrul Islam",
        "Sheikh Hasina",
        "Sheikh Mujibur Rahman",
        "Khaleda Zia"
      ],
      "a": "sheikh hasina"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Kuakata",
        "Sylhet",
        "Sundarbans",
        "Chattogram"
      ],
      "a": "sylhet"
    },
    {
      "q": "Which of these is a major city/region in Bangladesh?",
      "options": [
        "Dhaka",
        "Sylhet",
        "Kuakata",
        "Khulna"
      ],
      "a": "sylhet"
    },
    {
      "q": "Which cultural event is celebrated widely in Bangladesh?",
      "options": [
        "Ekushey Book Fair",
        "Pohela Boishakh",
        "Christmas",
        "Holi"
      ],
      "a": "pohela boishakh"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Hussain Muhammad Ershad",
        "Tajuddin Ahmad",
        "Sheikh Hasina",
        "Khaleda Zia"
      ],
      "a": "khaleda zia"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "2001",
        "1990",
        "1952",
        "1971"
      ],
      "a": "1990"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1972",
        "1971",
        "2001",
        "1990"
      ],
      "a": "1971"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Sheikh Mujibur Rahman",
        "Kazi Nazrul Islam",
        "Tajuddin Ahmad",
        "Hussain Muhammad Ershad"
      ],
      "a": "sheikh mujibur rahman"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Rabindranath Tagore",
        "Tajuddin Ahmad",
        "Hussain Muhammad Ershad",
        "Sheikh Hasina"
      ],
      "a": "hussain muhammad ershad"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1952",
        "1972",
        "1971",
        "1990"
      ],
      "a": "1952"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Tajuddin Ahmad",
        "Sheikh Mujibur Rahman",
        "Rabindranath Tagore",
        "Sheikh Hasina"
      ],
      "a": "tajuddin ahmad"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1990",
        "1972",
        "1971",
        "1952"
      ],
      "a": "1972"
    },
    {
      "q": "Which leader is associated with Bangladesh's modern history?",
      "options": [
        "Khaleda Zia",
        "Sheikh Hasina",
        "Sheikh Mujibur Rahman",
        "Tajuddin Ahmad"
      ],
      "a": "sheikh hasina"
    },
    {
      "q": "In which year did an important national event in Bangladesh occur?",
      "options": [
        "1952",
        "1972",
        "1990",
        "1971"
      ],
      "a": "1972"
    }
  ],
  "history": [
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "Hajime Isayama",
        "1492",
        "Masashi Kishimoto",
        "George Washington"
      ],
      "a": "george washington"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1492",
        "Masashi Kishimoto",
        "Koyoharu Gotouge",
        "1945"
      ],
      "a": "1945"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1914",
        "Rukia Kuchiki",
        "1918",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year did the French Revolution start?",
      "options": [
        "Sui Ishida",
        "Yoshihiro Togashi",
        "Tite Kubo",
        "1789"
      ],
      "a": "1789"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "Rukia Kuchiki",
        "Usopp",
        "Yoshihiro Togashi",
        "Alexander Fleming"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "Which empire did Genghis Khan found?",
      "options": [
        "Akira Toriyama",
        "Hayao Miyazaki",
        "Mongol Empire",
        "Tsugumi Ohba"
      ],
      "a": "mongol empire"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "Akira Toriyama",
        "Nami",
        "Kohei Horikoshi",
        "Margaret Thatcher"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "In which year did the Berlin Wall fall?",
      "options": [
        "1989",
        "Eiichiro Oda",
        "Shanks",
        "Tsugumi Ohba"
      ],
      "a": "1989"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "Hiromu Arakawa",
        "Thomas Jefferson",
        "Sui Ishida",
        "Franky"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "Masashi Kishimoto",
        "Egyptians",
        "1918",
        "Portgas D. Ace"
      ],
      "a": "egyptians"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "476",
        "1789",
        "Egyptians",
        "1989"
      ],
      "a": "egyptians"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1939",
        "1918",
        "1914",
        "1947"
      ],
      "a": "1947"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "1760",
        "476",
        "Thomas Jefferson",
        "1215"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1215",
        "Adolf Hitler",
        "1945",
        "1914"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Which empire did Genghis Khan found?",
      "options": [
        "1918",
        "1939",
        "1789",
        "Mongol Empire"
      ],
      "a": "mongol empire"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "Thomas Jefferson",
        "1945",
        "1215",
        "1789"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "Thomas Jefferson",
        "1215",
        "1939",
        "1989"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "476",
        "1945",
        "1789",
        "1939"
      ],
      "a": "1789"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "1917",
        "1939",
        "1215",
        "Margaret Thatcher"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "In which year/event did Magna Carta begin?",
      "options": [
        "1215",
        "1914",
        "476",
        "1939"
      ],
      "a": "1215"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1947",
        "1215",
        "1789",
        "1918"
      ],
      "a": "1947"
    },
    {
      "q": "In which year/event did Russian Revolution begin?",
      "options": [
        "476",
        "1939",
        "1789",
        "1917"
      ],
      "a": "1917"
    },
    {
      "q": "In which year/event did Magna Carta begin?",
      "options": [
        "1789",
        "1918",
        "1215",
        "1914"
      ],
      "a": "1215"
    },
    {
      "q": "Which empire did Genghis Khan found?",
      "options": [
        "1939",
        "Mongol Empire",
        "1945",
        "476"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year did the French Revolution start?",
      "options": [
        "1914",
        "1917",
        "476",
        "1789"
      ],
      "a": "1789"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "Margaret Thatcher",
        "476",
        "1939",
        "1789"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1789",
        "1945",
        "1989",
        "1914"
      ],
      "a": "1945"
    },
    {
      "q": "Which empire did Genghis Khan found?",
      "options": [
        "1917",
        "Mongol Empire",
        "1914",
        "1789"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "1914",
        "1776",
        "1215",
        "1945"
      ],
      "a": "1776"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1914",
        "1789",
        "1215",
        "1945"
      ],
      "a": "1945"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "1939",
        "1789",
        "1918",
        "Margaret Thatcher"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "In which year did the Berlin Wall fall?",
      "options": [
        "1914",
        "1945",
        "1989",
        "1789"
      ],
      "a": "1989"
    },
    {
      "q": "In which year/event did World War I begin?",
      "options": [
        "1989",
        "1914",
        "1917",
        "476"
      ],
      "a": "1914"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "Margaret Thatcher",
        "1939",
        "1917",
        "1914"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "Adolf Hitler",
        "1917",
        "1215",
        "1918"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "1760",
        "Alexander Fleming",
        "1914",
        "1945"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year/event did World War I begin?",
      "options": [
        "1914",
        "1945",
        "1989",
        "1918"
      ],
      "a": "1914"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1939",
        "1917",
        "1215",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did Industrial Revolution begin?",
      "options": [
        "1945",
        "1939",
        "1760",
        "476"
      ],
      "a": "1760"
    },
    {
      "q": "In which year did the French Revolution start?",
      "options": [
        "1789",
        "1989",
        "1215",
        "1939"
      ],
      "a": "1789"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1914",
        "Adolf Hitler",
        "1939",
        "1917"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did Russian Revolution begin?",
      "options": [
        "1917",
        "1914",
        "1918",
        "1989"
      ],
      "a": "1917"
    },
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "1215",
        "1917",
        "George Washington",
        "1789"
      ],
      "a": "george washington"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "1914",
        "Egyptians",
        "1939",
        "1917"
      ],
      "a": "egyptians"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "1939",
        "1789",
        "1914",
        "Egyptians"
      ],
      "a": "egyptians"
    },
    {
      "q": "Which empire did Genghis Khan found?",
      "options": [
        "Mongol Empire",
        "1914",
        "1939",
        "1918"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year/event did Industrial Revolution begin?",
      "options": [
        "1939",
        "476",
        "1760",
        "1914"
      ],
      "a": "1760"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "1914",
        "Alexander Fleming",
        "1760",
        "1215"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "Which empire did Genghis Khan found?",
      "options": [
        "1917",
        "1760",
        "Mongol Empire",
        "1789"
      ],
      "a": "mongol empire"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "1914",
        "1945",
        "1760",
        "1789"
      ],
      "a": "1789"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "1789",
        "Alexander Fleming",
        "1917",
        "1760"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year/event did World War I begin?",
      "options": [
        "476",
        "1989",
        "1914",
        "1945"
      ],
      "a": "1914"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "476",
        "1945",
        "1939",
        "Margaret Thatcher"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1760",
        "1945",
        "1215",
        "1918"
      ],
      "a": "1945"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1789",
        "1914",
        "1945",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did Magna Carta begin?",
      "options": [
        "1989",
        "1917",
        "1914",
        "1215"
      ],
      "a": "1215"
    },
    {
      "q": "In which year did the French Revolution start?",
      "options": [
        "1945",
        "1789",
        "1989",
        "1939"
      ],
      "a": "1789"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "476",
        "1989",
        "Margaret Thatcher",
        "1760"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "In which year did World War II end?",
      "options": [
        "1918",
        "476",
        "1789",
        "1945"
      ],
      "a": "1945"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "Alexander Fleming",
        "1760",
        "1789",
        "1989"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "Alexander Fleming",
        "476",
        "1945",
        "1789"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year did the Berlin Wall fall?",
      "options": [
        "1918",
        "1989",
        "1215",
        "1917"
      ],
      "a": "1989"
    },
    {
      "q": "In which year/event did World War I begin?",
      "options": [
        "1914",
        "1917",
        "1215",
        "1789"
      ],
      "a": "1914"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "1789",
        "1760",
        "1215",
        "1989"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did Industrial Revolution begin?",
      "options": [
        "1989",
        "1914",
        "1917",
        "1760"
      ],
      "a": "1760"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "1760",
        "1914",
        "Thomas Jefferson",
        "1789"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "1918",
        "1917",
        "1215",
        "1789"
      ],
      "a": "1789"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1918",
        "1760",
        "1939",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "1989",
        "1939",
        "1918",
        "Thomas Jefferson"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "476",
        "1789",
        "1914",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "1989",
        "1945",
        "476",
        "1776"
      ],
      "a": "1776"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "1945",
        "Egyptians",
        "1760",
        "1215"
      ],
      "a": "egyptians"
    },
    {
      "q": "In which year did the Berlin Wall fall?",
      "options": [
        "1989",
        "1215",
        "1918",
        "1939"
      ],
      "a": "1989"
    },
    {
      "q": "In which year did the Berlin Wall fall?",
      "options": [
        "1989",
        "1789",
        "1760",
        "1917"
      ],
      "a": "1989"
    },
    {
      "q": "In which year/event did Russian Revolution begin?",
      "options": [
        "1989",
        "1939",
        "1760",
        "1917"
      ],
      "a": "1917"
    },
    {
      "q": "Which leader was known as the Iron Lady?",
      "options": [
        "1989",
        "1939",
        "476",
        "Margaret Thatcher"
      ],
      "a": "margaret thatcher"
    },
    {
      "q": "Who wrote the Declaration of Independence?",
      "options": [
        "1215",
        "1914",
        "Thomas Jefferson",
        "1945"
      ],
      "a": "thomas jefferson"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "1215",
        "1789",
        "1760",
        "476"
      ],
      "a": "1789"
    },
    {
      "q": "In which year did the Berlin Wall fall?",
      "options": [
        "1760",
        "1939",
        "1945",
        "1989"
      ],
      "a": "1989"
    },
    {
      "q": "In which year did the Berlin Wall fall?",
      "options": [
        "1989",
        "476",
        "1914",
        "1945"
      ],
      "a": "1989"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "1789",
        "1918",
        "Alexander Fleming",
        "1215"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year/event did French Revolution begin?",
      "options": [
        "1789",
        "1760",
        "1945",
        "1918"
      ],
      "a": "1789"
    },
    {
      "q": "Who was the first President of the United States?",
      "options": [
        "1914",
        "1989",
        "476",
        "George Washington"
      ],
      "a": "george washington"
    },
    {
      "q": "In which year/event did American Revolution begin?",
      "options": [
        "1776",
        "476",
        "1918",
        "1945"
      ],
      "a": "1776"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "1789",
        "476",
        "1945",
        "Alexander Fleming"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "1918",
        "476",
        "1760",
        "Egyptians"
      ],
      "a": "egyptians"
    },
    {
      "q": "Who discovered penicillin?",
      "options": [
        "1939",
        "476",
        "Alexander Fleming",
        "1918"
      ],
      "a": "alexander fleming"
    },
    {
      "q": "In which year did the French Revolution start?",
      "options": [
        "1215",
        "1789",
        "1945",
        "1989"
      ],
      "a": "1789"
    },
    {
      "q": "In which year/event did Industrial Revolution begin?",
      "options": [
        "476",
        "1760",
        "1918",
        "1917"
      ],
      "a": "1760"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "Egyptians",
        "1917",
        "1939",
        "1760"
      ],
      "a": "egyptians"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1914",
        "1918",
        "476",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did Cold War start begin?",
      "options": [
        "1917",
        "1939",
        "1947",
        "1789"
      ],
      "a": "1947"
    },
    {
      "q": "Which empire did Genghis Khan found?",
      "options": [
        "1918",
        "1939",
        "Mongol Empire",
        "476"
      ],
      "a": "mongol empire"
    },
    {
      "q": "Which civilization built the pyramids?",
      "options": [
        "1989",
        "Egyptians",
        "1789",
        "1760"
      ],
      "a": "egyptians"
    },
    {
      "q": "In which year/event did Magna Carta begin?",
      "options": [
        "1760",
        "1939",
        "1918",
        "1215"
      ],
      "a": "1215"
    },
    {
      "q": "In which year/event did Russian Revolution begin?",
      "options": [
        "1989",
        "1917",
        "1789",
        "476"
      ],
      "a": "1917"
    },
    {
      "q": "In which year/event did Industrial Revolution begin?",
      "options": [
        "1914",
        "1939",
        "1989",
        "1760"
      ],
      "a": "1760"
    },
    {
      "q": "Who led Nazi Germany during WWII?",
      "options": [
        "1914",
        "1760",
        "1989",
        "Adolf Hitler"
      ],
      "a": "adolf hitler"
    },
    {
      "q": "In which year/event did Magna Carta begin?",
      "options": [
        "1989",
        "476",
        "1918",
        "1215"
      ],
      "a": "1215"
    },
    {
      "q": "In which year/event did World War I begin?",
      "options": [
        "1945",
        "1215",
        "1918",
        "1914"
      ],
      "a": "1914"
    }
  ]
};

module.exports = {
  config: {
    name: "quiz",
    aliases: ["qz"],
    version: "3.1",
    author: "ChatGPT",
    role: 0,
    description: "Multi-category MCQ quiz: anime/game/bd/history — reward/penalty money updates",
    category: "game",
    guide: { en: "quiz <anime|game|bd|history>" }
  },

  onStart: async function({ api, event, args }) {
    const categories = Object.keys(quizData);
    const category = (args[0] || '').toLowerCase();
    if (!category || !categories.includes(category)) {
      return api.sendMessage('📌 Usage: quiz <category>\nAvailable: ' + categories.join(', '), event.threadID);
    }

    const pool = quizData[category];
    if (!pool || pool.length === 0) return api.sendMessage('No questions in this category.', event.threadID);
    const q = pool[Math.floor(Math.random() * pool.length)];

    const labels = ['A','B','C','D'];
    const options = q.options.slice(0,4);
    let optionsText = '';
    for (let i=0;i<options.length;i++) optionsText += `${labels[i]}) ${options[i]}\n`;

    const body = `🎯 [${category.toUpperCase()} QUIZ]\n\n${q.q}\n\n${optionsText}\nReply with A/B/C/D or 1-4. You have 60 seconds.`;
    const info = await api.sendMessage(body, event.threadID);

    global.quizCache = global.quizCache || {};
    global.quizCache[event.senderID] = { category, question: q, msgID: info.messageID, time: Date.now() };

    setTimeout(() => {
      const data = global.quizCache && global.quizCache[event.senderID];
      if (!data) return;
      try { api.unsendMessage(data.msgID); } catch(e){}
      delete global.quizCache[event.senderID];
      api.sendMessage("⌛ Time's up — quiz abandoned.", event.threadID);
    }, 60*1000);
  },

  onReply: async function({ api, event, usersData }) {
    global.quizCache = global.quizCache || {};
    const data = global.quizCache[event.senderID];
    if (!data) return;

    if (Date.now() - data.time > 60*1000) {
      try { if (data.msgID) await api.unsendMessage(data.msgID); } catch(e){}
      delete global.quizCache[event.senderID];
      return api.sendMessage("⌛ Time's up — quiz abandoned.", event.threadID);
    }

    const raw = (event.body||'').trim().toLowerCase();
    let choiceIndex = -1;
    if (/^[abcd]$/.test(raw)) choiceIndex = ['a','b','c','d'].indexOf(raw);
    else if (/^[1-4]$/.test(raw)) choiceIndex = parseInt(raw)-1;
    else return api.sendMessage('⚠️ Reply with A/B/C/D or 1-4.', event.threadID);

    const q = data.question;
    const selected = (q.options[choiceIndex] || '').toString().toLowerCase();
    const correct = q.a.toString().toLowerCase();

    try { if (data.msgID) await api.unsendMessage(data.msgID); } catch(e){}
    delete global.quizCache[event.senderID];

    const reward = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
    const penalty = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

    try {
      const userData = (await usersData.get(event.senderID)) || { money: 0 };
      if (selected === correct) {
        userData.money = (userData.money || 0) + reward;
        await usersData.set(event.senderID, userData);
        return api.sendMessage(`✅ Correct! You earned $${reward.toLocaleString()}.\n💰 New balance: $${userData.money.toLocaleString()}.`, event.threadID);
      } else {
        userData.money = Math.max(0, (userData.money || 0) - penalty);
        await usersData.set(event.senderID, userData);
        return api.sendMessage(`❌ Wrong! The correct answer was: ${correct}.\n💸 You lost $${penalty.toLocaleString()}. New balance: $${userData.money.toLocaleString()}.`, event.threadID);
      }
    } catch (err) {
      return api.sendMessage('❌ Error updating balance.', event.threadID);
    }
  }
};
