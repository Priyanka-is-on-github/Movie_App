
export interface MovieDataType{  
    id: number;
    title: string;
    isBookmarked: boolean;
    release_date: number;
    vote_average:number;
    media_type: string;  
    poster_path: string; 
    name:string;
    isTrending:boolean;
    first_air_date:number;

}
export interface MoviesData{ 
        page:number;
        results: MovieDataType[];
        total_pages:number;
        total_results:number;

}

export const moviesData =[  
  {
    "page": 1,
    "results": [
      {
        "isBookmarked": false,
        "backdrop_path": "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
        "id": 906126,
        "title": "Society of the Snow",
        "original_language": "es",
        "original_title": "La sociedad de la nieve",
        "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
        "poster_path": "/k7rEpZfNPB35FFHB00ZhXHKTL7X.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          36
        ],
        "popularity": 468.243,
        "release_date": "2023-12-13",
        "video": false,
        "vote_average": 8.133,
        "vote_count": 264
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/cUhNEu8Z4KEIK0fywzlpVz08LTT.jpg",
        "id": 760245,
        "title": "Foe",
        "original_language": "en",
        "original_title": "Foe",
        "overview": "Henrietta and Junior farm a secluded piece of land that has been in Junior's family for generations, but their quiet life is thrown into turmoil when an uninvited stranger shows up at their door with a startling proposal. Will they risk their relationship & personal identity for a chance to survive in a new world?",
        "poster_path": "/eTPBizhkX6B9NgzPzkhVIOvwXxZ.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          9648,
          53,
          18
        ],
        "popularity": 39.13,
        "release_date": "2023-10-06",
        "video": false,
        "vote_average": 5.492,
        "vote_count": 60
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
        "id": 927107,
        "title": "The Bricklayer",
        "original_language": "en",
        "original_title": "The Bricklayer",
        "overview": "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
        "poster_path": "/36pYugctLa70NmwMEgXTR1G31Kq.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          53
        ],
        "popularity": 37.916,
        "release_date": "2023-12-14",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 18,
        "isTrending":true
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/96S2aGGh6I7og1oNrAiRHxGz0PH.jpg",
        "id": 1036619,
        "title": "Good Grief", 
        "original_language": "en",
        "original_title": "Good Grief",
        "overview": "When his husband unexpectedly dies, Marc's world shatters, sending him and his two best friends on a soul-searching trip to Paris that reveals some hard truths they each needed to face.",
        "poster_path": "/wJFHUglmh7xlY7g9Ql85QAJBZ6n.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "popularity": 39.091,
        "release_date": "2023-12-29",
        "video": false,
        "vote_average": 6.55,
        "vote_count": 20
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/kqSxCsGIT4rqrZTTMpYP8RIzojv.jpg",
        "id": 720557,
        "title": "Tiger 3",
        "original_language": "hi",
        "original_title": "Tiger 3",
        "overview": "Following the events of Tiger Zinda Hai, War, and Pathaan, Avinash Singh Rathore returns as Tiger but this time the battle is within. He has to choose between his country or family as an old enemy is after his life, who claims that his family was killed by Tiger. He holds Tiger captive in Pakistan as the Indian agent's loyalty towards his country faces its biggest test.",
        "poster_path": "/7wgED7Yx9VLcNWSO91VgwicHmMD.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          53
        ],
        "popularity": 26.726,
        "release_date": "2023-11-12",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 10
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
        "id": 872585,
        "title": "Oppenheimer",
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          36
        ],
        "popularity": 746.774,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 8.119,
        "vote_count": 5935,
        "isTrending":true
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
        "id": 848326,
        "title": "Rebel Moon - Part One: A Child of Fire", 
        "original_language": "en",
        "original_title": "Rebel Moon - Part One: A Child of Fire",
        "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
        "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
        "media_type": "movie",
        "genre_ids": [
          878
        ],
        "popularity": 2101.05,
        "release_date": "2023-12-15",
        "video": false,
        "vote_average": 6.474,
        "vote_count": 1079
      },

      {
        "isBookmarked": false,
        "backdrop_path": "/fR8bsFkjwnu5F7rz2pCLSIOexhu.jpg",
        "id": 122226,
        "name": "Echo",  
        "original_language": "en",
        "original_name": "Echo",
        "overview": "Pursued by Wilson Fisk's criminal empire, Maya's journey brings her home and she must confront her own family and legacy.",
        "poster_path": "/vFyJH630cF68LohVYjQW49074Sy.jpg",
        "media_type": "tv", 
        "genre_ids": [
          18,
          80,
          10759
        ],
        "isTrending":true,
        "popularity": 318.112,
        "first_air_date": "2024-01-09",
        "vote_average": 6.7,
        "vote_count": 47,
        "origin_country": [
          "US"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/q5mivz51vafoipM3VzwOp9Cv2AC.jpg",
        "id": 204490,
        "name": "Criminal Record",
        "original_language": "en",
        "original_name": "Criminal Record",
        "overview": "In the heart of London, an anonymous phone call draws two brilliant detectives—a young woman in the early stages of her career and a well-connected man determined to protect his legacy—into a fight to correct an old miscarriage of justice.",
        "poster_path": "/wjwvJwoEGyPGTJ0QQF6UH7Sqt9j.jpg",
        "media_type": "tv",
        "genre_ids": [
          80,
          18
        ],
        "isTrending":true,
        "popularity": 103.489,
        "first_air_date": "2024-01-10",
        "vote_average": 6.7,
        "vote_count": 7,
        "origin_country": [
          "GB"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/3J8HmgR16MKX2iT71mB4EIDdV2x.jpg",
        "id": 106841,
        "name": "Blossoms Shanghai",
        "original_language": "zh",
        "original_name": "繁花",
        "overview": "Set against the backdrop of massive economic growth in the 1990s, the story follows A Bao, a self-made millionaire and his journey from being a young opportunist with a troubled past to accumulating dazzling wealth in the city of Shanghai. It also follows his entanglement with four women who represent the pursuits of his life: adventure, honour, love and innocence.",
        "poster_path": "/pcL4VKmit4MI9QEzquRm5h4RrNw.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          10751
        ],
        "popularity": 867.142,
        "first_air_date": "2023-12-27",
        "vote_average": 8.6,
        "vote_count": 14,
        "origin_country": [
          "CN"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/nI8uQAU8KFXYIIRz6jdL0pmC3eL.jpg",
        "id": 103540,
        "name": "Percy Jackson and the Olympians",
        "original_language": "en",
        "original_name": "Percy Jackson and the Olympians",
        "overview": "Percy Jackson is on a dangerous quest. Outrunning monsters and outwitting gods, he must journey across America to return Zeus' master bolt and stop an all-out war. With the help of his quest mates Annabeth and Grover, Percy's journey will lead him closer to the answers he seeks: how to fit into a world where he feels out of place, and find out who he's destined to be.",
        "poster_path": "/c9loCTYWZpzYBTJBvE3DtRw4DBb.jpg",
        "media_type": "tv",
        "genre_ids": [
          10759,
          10765,
          18,
          10751
        ],
        "popularity": 1125.603,
        "first_air_date": "2023-12-19",
        "vote_average": 7.6,
        "vote_count": 180,
        "origin_country": [
          "US"
        ]
      },
      {
        "isBookmarked": false,
        "isTrending":true,
        "backdrop_path": "/9h15FWJFZstTGLTUVbToCEFdH9F.jpg",
        "id": 227004,
        "name": "The Brothers Sun",
        "original_language": "en",
        "original_name": "The Brothers Sun",
        "overview": "When a mysterious enemy targets his family, a Taipei triad member heads to Los Angeles to protect his strong-willed mother and oblivious younger brother.",
        "poster_path": "/aTPMj3Bqb0WfHsIv8zUOROSjb7S.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          10759,
          80
        ],
        "popularity": 562.062,
        "first_air_date": "2024-01-04",
        "vote_average": 7.9,
        "vote_count": 37,
        "origin_country": [
          "US"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
        "id": 1429,
        "name": "Attack on Titan",
        "original_language": "ja",
        "original_name": "進撃の巨人",
        "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
        "poster_path": "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
        "media_type": "tv",
        "genre_ids": [
          16,
          10765,
          10759
        ],
        "popularity": 204.204,
        "first_air_date": "2013-04-07",
        "vote_average": 8.663,
        "vote_count": 5821,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/4s1qxKb6yEQUWr3LcegJqBpUt58.jpg",
        "id": 222787,
        "name": "Metallic Rouge",
        "original_language": "ja",
        "original_name": "メタリックルージュ",
        "overview": "In a world where humans coexist with androids called Neans, a group known as the Immortal Nine rises up against society. Tasked with disposing of the revolters, a Nean named Rouge Redstar (aka Metal Rouge) and investigator Naomi Orthmann head to Mars to track them down…but first, Rouge wants some chocolate.",
        "poster_path": "/dcUWxOeCiEM7n7KdIYk1O8Xzgzp.jpg",
        "media_type": "tv",
        "genre_ids": [
          16,
          10765,
          10759
        ],
        "popularity": 83.321,
        "first_air_date": "2024-01-11",
        "vote_average": 9,
        "vote_count": 1,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
        "id": 37854,
        "name": "One Piece",
        "original_language": "ja",
        "original_name": "ワンピース",
        "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
        "poster_path": "/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
        "media_type": "tv",
        "genre_ids": [
          10759,
          35,
          16
        ],
        "popularity": 273.117,
        "first_air_date": "1999-10-20",
        "vote_average": 8.727,
        "vote_count": 4249,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/m5CggjJuFc08QCuKz54znHP6spJ.jpg",
        "id": 108978,
        "name": "Reacher",
        "original_language": "en",
        "original_name": "Reacher",
        "overview": "Jack Reacher, a veteran military police investigator, has just recently entered civilian life. Reacher is a drifter, carrying no phone and the barest of essentials as he travels the country and explores the nation he once served.",
        "poster_path": "/jFuH0md41x5mB4qj5344mSmtHrO.jpg",
        "media_type": "tv",
        "genre_ids": [
          10759,
          80,
          18
        ],
        "isTrending":true,
        "popularity": 2554.047,
        "first_air_date": "2022-02-03",
        "vote_average": 8.08,
        "vote_count": 1170,
        "origin_country": [
          "US"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/qEmHC7sV1lj3JHf5xQKshmGcq24.jpg",
        "id": 127532,
        "name": "Solo Leveling",
        "original_language": "ja",
        "original_name": "俺だけレベルアップな件",
        "overview": "They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.",
        "poster_path": "/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
        "media_type": "tv",
        "genre_ids": [
          16,
          10759,
          10765
        ],
        "popularity": 349.198,
        "first_air_date": "2024-01-07",
        "vote_average": 8.87,
        "vote_count": 23,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/179sUCj5AcFKdQpvDhkIX15NRgy.jpg",
        "id": 146176,
        "name": "Berlin",
        "original_language": "es",
        "original_name": "Berlín",
        "overview": "During his glory days, Berlin and a gang assembled in Paris for one of his greatest plans ever—stealing 44 million euros' worth of jewels in one night.",
        "poster_path": "/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          10759,
          80
        ],
        "popularity": 1026.371,
        "first_air_date": "2023-12-29",
        "vote_average": 7.827,
        "vote_count": 208,
        "origin_country": [
          "ES"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/gst6mfntiGr2x4mez3ElnH25VIZ.jpg",
        "id": 218230,
        "name": "Death's Game",
        "original_language": "ko",
        "original_name": "이재, 곧 죽습니다",
        "overview": "At the brink of going to hell, Yee-jae must cycle through twelve separate lives and twelve separate deaths in this reincarnation drama.",
        "poster_path": "/fS4i7HHi1NNksTdAT8Vrvz9O161.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          10765
        ],
        "popularity": 254.181,
        "first_air_date": "2023-12-15",
        "vote_average": 8.764,
        "vote_count": 56,
        "origin_country": [
          "KR"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/5QlPMpggN5pLAZWpae0doDgRNZi.jpg",
        "id": 220801,
        "name": "Fool Me Once",
        "original_language": "en",
        "original_name": "Fool Me Once",
        "overview": "When ex-soldier Maya sees her murdered husband on a secret nanny cam, she uncovers a deadly conspiracy that stretches deep into the past.",
        "poster_path": "/Ertv4WLEyHgi8zN4ldOKgPcGAZ.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          80,
          9648
        ],
        "isTrending":true,
        "popularity": 738.924,
        "first_air_date": "2024-01-01",
        "vote_average": 7.528,
        "vote_count": 72,
        "origin_country": [
          "GB"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/qhaPuyznsxb13wSQbpqSDqtNuX8.jpg",
        "id": 128839,
        "name": "La Brea",
        "original_language": "en",
        "original_name": "La Brea",
        "overview": "An epic adventure begins when a massive sinkhole opens in the middle of Los Angeles, pulling hundreds of people and buildings into its depths. Those who fell in find themselves in a mysterious and dangerous primeval land, where they have no choice but to band together to survive. Meanwhile, the rest of the world desperately seeks to understand what happened. In the search for answers, one family torn apart by this disaster will have to unlock the secrets of this inexplicable event to find a way back to each other.",
        "poster_path": "/wEo5pzSZ3MF4EzNvY2R1OZNX266.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          10765,
          10759
        ],
        "popularity": 316.352,
        "first_air_date": "2021-09-28",
        "vote_average": 7.451,
        "vote_count": 1248,
        "origin_country": [
          "US"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/t9i4Icf1LsGIgkpnokQaC4hzxLa.jpg",
        "id": 202411,
        "name": "Monarch: Legacy of Monsters",
        "original_language": "en",
        "original_name": "Monarch: Legacy of Monsters",
        "overview": "After surviving Godzilla's attack on San Francisco, Cate is shaken yet again by a shocking secret. Amid monstrous threats, she embarks on a globetrotting adventure to learn the truth about her family—and the mysterious organization known as Monarch.",
        "poster_path": "/uwrQHMnXD2DA1rvaMZk4pavZ3CY.jpg",
        "media_type": "tv",
        "genre_ids": [
          10759,
          18,
          10765
        ],
        "popularity": 1234.292,
        "first_air_date": "2023-11-16",
        "vote_average": 8.15,
        "vote_count": 402,
        "origin_country": [
          "US"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/1PhAZuk6RG0u5meBkVg9oEFphVt.jpg",
        "id": 234995,
        "name": "Sengoku Youko",
        "original_language": "ja",
        "original_name": "戦国妖狐",
        "overview": "Humans and katawara are at war, but there are those on each side who join forces. Tama is a fox spirit who loves humans, while her sendou brother, Jinka, despises them. Together, they use the power of spirit transformation to defeat the monstrous katawara and put an end to the evils of this chaotic age. What destiny awaits the duo at the end of their journey?",
        "poster_path": "/9g4q1OX4GAkTZH9wSSc3t6Be03p.jpg",
        "media_type": "tv",
        "genre_ids": [
          16,
          10759,
          10765,
          18
        ],
        "popularity": 80.268,
        "first_air_date": "2024-01-11", 
        "vote_average": 0,
        "vote_count": 0,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/htJef5Rp7z1vMEuCV3SRdVIHr2x.jpg",
        "id": 221310,
        "name": "Doctor Elise: The Royal Lady with the Lamp",
        "original_language": "ja",
        "original_name": "外科医エリーゼ",
        "overview": "Making up for her sins in a past life as the evil princess Elise, Aoi Takamoto dedicates her life to saving people as a doctor. But a fatal accident cuts her atonement short and suddenly she’s back to her previous life, 10 years before her death! Will her foresight and medical brilliance help her change her past ways and heal an ailing empire, or is fate doomed to repeat itself?",
        "poster_path": "/f3CWheEYExyzpRTDuHipURhEave.jpg",
        "media_type": "tv",
        "genre_ids": [
          16,
          10765
        ],
        "popularity": 55.215,
        "first_air_date": "2024-01-10",
        "vote_average": 0,
        "vote_count": 0,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/lWZQTICNzfE8VXfl8cPPJsQFqWJ.jpg",
        "id": 222930,
        "name": "Villainess Level 99: I May Be the Hidden Boss But I'm Not the Demon Lord",
        "original_language": "ja",
        "original_name": "悪役令嬢レベル99",
        "overview": "This college kid wants nothing more than a quiet life. So when she's reborn as Yumiella, the hidden villainess of an Otome RPG, she's not exactly thrilled. Still yearning for peace, she abandons her evil duties to live a more discreet life. Until her gamer side kicks in, and she accidentally reaches level 99! Now, everyone suspects that she's the infamous Demon Lord. What future awaits her?",
        "poster_path": "/q5hdjjKgGRPrKfbw8hAITYyfR8l.jpg",
        "media_type": "tv",
        "genre_ids": [
          16,
          10765
        ],
        "popularity": 94.16,
        "first_air_date": "2024-01-09",
        "vote_average": 8,
        "vote_count": 1,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg",
        "id": 95479,
        "name": "Jujutsu Kaisen",
        "original_language": "ja",
        "original_name": "呪術廻戦",
        "overview": "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
        "poster_path": "/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
        "media_type": "tv",
        "genre_ids": [
          16,
          10759,
          10765
        ],
        "popularity": 1510.005,
        "first_air_date": "2020-10-03",
        "vote_average": 8.574,
        "vote_count": 3052,
        "origin_country": [
          "JP"
        ]
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/peVe0NQNdZMXwtTohnv8iwJQb2d.jpg",
        "id": 135238,
        "name": "Gyeongseong Creature",
        "original_language": "ko",
        "original_name": "경성크리처",
        "overview": "Gyeongseong, 1945. In Seoul's grim era under colonial rule, an entrepreneur and a sleuth fight for survival and face a monster born out of human greed.",
        "poster_path": "/1qxRfQq9BI9dZ1nOztEtTkqNgea.jpg",
        "media_type": "tv",
        "genre_ids": [
          10765,
          9648,
          10759
        ],
        "popularity": 512.726,
        "first_air_date": "2023-12-22",
        "vote_average": 8.2,
        "vote_count": 66,
        "origin_country": [
          "KR"
        ]
      },
     
      {
        "isBookmarked": false,
        "isTrending":true,
        "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
        "id": 572802,
        "title": "Aquaman and the Lost Kingdom",
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          14
        ],
        "popularity": 1343.363,
        "release_date": "2023-12-20",
        "video": false,
        "vote_average": 6.519,
        "vote_count": 405
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/pu3DmxZyHHthKQaqgMHTxX83vEH.jpg",
        "id": 972433,
        "title": "Race for Glory: Audi vs Lancia",
        "original_language": "en",
        "original_title": "Race for Glory: Audi vs Lancia",
        "overview": "Inspired by true events that occurred during the fierce rivalry between Germany (Audi) and Italy (Lancia) at the 1983 Rally World Championships.",
        "poster_path": "/ovoybG8mCn6nQ6i5WoC8DdR08c2.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          53
        ],
        "popularity": 108.402,
        "release_date": "2024-01-05",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 5
      },
      {
        "isBookmarked": false,
        "isTrending":true,
        "backdrop_path": "/1jITxVJhkiFJuQuj8NcPLmDNtJg.jpg",
        "id": 930564,
        "title": "Saltburn",
        "original_language": "en",
        "original_title": "Saltburn",
        "overview": "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
        "poster_path": "/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          35,
          53
        ],
        "popularity": 400.374,
        "release_date": "2023-11-16",
        "video": false,
        "vote_average": 7.178,
        "vote_count": 841
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/vAsxVpXP53cMSsD9u4EekQKz4ur.jpg",
        "id": 1050035,
        "title": "Monster",
        "original_language": "ja",
        "original_title": "怪物",
        "overview": "When her young son Minato starts to behave strangely, his mother feels that there is something wrong. Discovering that a teacher is responsible, she storms into the school demanding to know what's going on. But as the story unfolds through the eyes of mother, teacher and child, the truth gradually emerges.",
        "poster_path": "/uCxeoP5DKOt5ovEsY4jerxwbcbe.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          53
        ],
        "popularity": 82.232,
        "release_date": "2023-06-02",
        "video": false,
        "vote_average": 8.264,
        "vote_count": 74
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
        "id": 346698,
        "title": "Barbie",
        "original_language": "en",
        "original_title": "Barbie",
        "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          12,
          14
        ],
        "popularity": 393.641,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 7.152,
        "vote_count": 6761
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/8x0kWa30xdLKBjQWnZNvORnv02v.jpg",
        "id": 664341,
        "title": "Eileen",
        "original_language": "en",
        "original_title": "Eileen",
        "overview": "During a bitter 1964 Massachusetts winter, young secretary Eileen becomes enchanted by Rebecca Saint John, the glamorous new counselor at the prison where she works. Their budding friendship takes a twisted turn when Rebecca reveals a dark secret — throwing Eileen onto a sinister path.",
        "poster_path": "/gdGKBa3UVS5GMZsayqnfupBB5fb.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          53,
          9648,
          80
        ],
        "popularity": 123.993,
        "release_date": "2023-12-01",
        "video": false,
        "vote_average": 6.402,
        "vote_count": 46
      },
      {
        "isBookmarked": false,
        "isTrending":true,
    
        "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
        "id": 695721,
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          878,
          28
        ],
        "popularity": 2016.503,
        "release_date": "2023-11-15",
        "video": false,
        "vote_average": 7.235,
        "vote_count": 1352
      },
      {
        "isBookmarked": false,
        "isTrending":true,
        "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
        "id": 901362,
        "title": "Trolls Band Together",
        "original_language": "en",
        "original_title": "Trolls Band Together",
        "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
        "media_type": "movie",
        "genre_ids": [
          16,
          10751,
          10402,
          14,
          35
        ],
        "popularity": 705.3,
        "release_date": "2023-10-12",
        "video": false,
        "vote_average": 7.176,
        "vote_count": 484
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
        "id": 787699,
        "title": "Wonka",
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          10751,
          14
        ],
        "popularity": 791.413,
        "release_date": "2023-12-06",
        "video": false,
        "vote_average": 7.103,
        "vote_count": 873
      },
      {
        "isBookmarked": false,
        "isTrending":true,
        "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
        "id": 466420,
        "title": "Killers of the Flower Moon",
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
        "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        "media_type": "movie",
        "genre_ids": [
          80,
          18,
          36
        ],
        "popularity": 402.753,
        "release_date": "2023-10-18",
        "video": false,
        "vote_average": 7.534,
        "vote_count": 1776
      },
      {
        "isBookmarked": false,
        "isTrending":true,
        "backdrop_path": "/nIGjQudcCVTLvirRVmfaQ12Yh4w.jpg",
        "id": 980285,
        "title": "Dangerous Waters",
        "original_language": "en",
        "original_title": "Dangerous Waters",
        "overview": "A sailing holiday spirals out of control when a teenage daughter uncovers the dark past of her mother's new boyfriend.",
        "poster_path": "/b7BLWOWrUZICFydcwUy3b6d9DBI.jpg",
        "media_type": "movie",
        "genre_ids": [
          53
        ],
        "popularity": 7.127,
        "release_date": "2023-10-13",
        "video": false,
        "vote_average": 5,
        "vote_count": 7
      },
      {
        "isBookmarked": false,
        "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        "id": 569094,
        "title": "Spider-Man: Across the Spider-Verse",
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "media_type": "movie",
        "genre_ids": [
          16,
          28,
          12,
          878
        ],
        "popularity": 390.874,
        "release_date": "2023-05-31",
        "video": false,
        "vote_average": 8.383,
        "vote_count": 5427
      },
      {
        "isBookmarked": false,
        "isTrending":true,
        "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
        "id": 1022796,
        "title": "Wish",
        "original_language": "en",
        "original_title": "Wish",
        "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
        "poster_path": "/rCCrG4swkxgFZflup56sx6ymk5i.jpg",
        "media_type": "movie",
        "genre_ids": [
          16,
          10751,
          14,
          12
        ],
        "popularity": 356.378,
        "release_date": "2023-11-13",
        "video": false,
        "vote_average": 6.409,
        "vote_count": 253
      }
    ],
    "total_pages": 1000,
    "total_results": 20000
  }

]