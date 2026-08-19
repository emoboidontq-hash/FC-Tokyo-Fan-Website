// FC东京 球队数据
const clubData = {
    name: "FC东京",
    nameEn: "FC Tokyo",
    nameJp: "FC東京",
    founded: "1935年（前身：东京瓦斯SC）/ 1998年（职业化）",
    stadium: "味之素体育场 (Ajinomoto Stadium)",
    stadiumCapacity: "49,970人",
    city: "东京都调布市",
    league: "J1联赛",
    chairman: "小金泽 節",
    owner: "MIXI集团",
    mascot: "TOKYO DOROMPA",
    vision: "東京の熱狂。（东京的热情。）"
};

// 主教练信息
const coachData = {
    name: "松橋 力藏",
    nameEn: "Rikizo Matsuhashi",
    birthDate: "1968年8月22日",
    age: 57,
    nationality: "日本",
    hometown: "千叶县（出生于东京都调布市）",
    formation: "4-4-2（双后腰）",
    appointed: "2025年2月1日",
    contractUntil: "2027年6月30日",
    image: "images/coach_matsuhashi.jpg",
    bio: "松橋力藏球员时代司职中场/左边锋，曾效力日产自动车（后横滨水手）、京都紫桑加等队。退役后转型教练，在横滨水手青训体系深耕多年，后担任新潟天鹅主教练（2022-2024），带队136场。2025年2月正式出任FC东京主帅，2025赛季带队取得13胜9平14负（48分），排名J1第11位。同年12月4日获得续约合同。",
    playingCareer: [
        { years: "1989-1991", club: "日产自动车（后横滨水手）", apps: 11, goals: 2 },
        { years: "1992-1994", club: "横滨水手 (J1)", apps: "有限出场", goals: "-" },
        { years: "1996-1997", club: "京都紫桑加 (J1)", apps: "更多出场", goals: "-" },
        { years: "1998-2001", club: "Jatco (JFL)", apps: "-", goals: "-" }
    ],
    coachingCareer: [
        { years: "2002-2003", role: "Jatco 助理教练" },
        { years: "2004-2020", role: "横滨水手青训教练/一线队教练" },
        { years: "2021", role: "新潟天鹅 一线队教练" },
        { years: "2022-2024", role: "新潟天鹅 主教练（136场，1.53 PPM）" },
        { years: "2025-至今", role: "FC东京 主教练" }
    ]
};

// 球员数据
const playersData = [
    {
        id: 1, number: 1, name: "田中 颯", nameEn: "Hayate TANAKA",
        position: "GK", age: 27, nationality: "日本", height: "185cm", weight: "78kg",
        image: "players/player_1.jpg",
        bio: "2026年加盟球队，担任球队二门",
        stats: {
            "2026/2027": { apps: 0, goals: 0, assists: 0, cleanSheets: 0, goalsConceded: 0, minutes: 0 },
            "2026": { apps: 4, goals: 0, assists: 0, cleanSheets: 1, goalsConceded: 6, minutes: 360 },
            "2025": { apps: 40, goals: 0, assists: 0, cleanSheets: 19, goalsConceded: 26, minutes: 3600, team:"德岛漩涡" }
        }
    },
    {
        id: 81, number: 81, name: "金 承圭", nameEn: "Kim Seung-gyu",
        position: "GK", age: 35, nationality: "韩国", height: "187cm", weight: "82kg",
        image: "players/player_81.jpg",
        bio: "韩国国门，经验丰富。2025年加盟球队。曾效力神户胜利船、柏太阳神等J联赛球队。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 0, cleanSheets: 0, goalsConceded: 7, minutes: 180 },
            "2026": { apps: 16, goals: 0, assists: 0, cleanSheets: 2, goalsConceded: 15, minutes: 1440 },
            "2025": { apps: 17, goals: 0, assists: 0, cleanSheets: 6, goalsConceded: 18, minutes: 1530 },
            "2024/2025": { apps: 9, goals: 0, assists: 0, cleanSheets: 4, goalsConceded: 7, minutes: 765, team:"利雅得青年" }
        }
    },
    {
        id: 5, number: 5, name: "長友 佑都", nameEn: "Yuto NAGATOMO",
        position: "DF", age: 39, nationality: "日本", height: "170cm", weight: "68kg",
        image: "players/player_5.jpg",
        bio: "日本足坛传奇，五届世界杯参赛选手（2010/2014/2018/2022/2026）。曾效力国际米兰、加拉塔萨雷、马赛等欧洲豪门。2021年回归FC东京，至今仍是球队精神领袖。",
        stats: {
            "2026/2027": { apps: 0, goals: 0, assists: 0, cleanSheets: 0, minutes: 0 },
            "2026": { apps: 8, goals: 0, assists: 0, cleanSheets: 0, minutes: 501 },
            "2025": { apps: 32, goals: 0, assists: 3, cleanSheets: 0, minutes: 2182 }
        }
    },
    {
        id: 3, number: 3, name: "森重 真人", nameEn: "Masato MORISHIGE",
        position: "DF", age: 39, nationality: "日本", height: "183cm", weight: "78kg",
        image: "players/player_3.jpg",
        bio: "FC东京队魂级人物。2013-2016年连续四年入选J联赛最佳十一人。日本国脚。39岁高龄仍是后防核心，为球队效力超过十年。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, cleanSheets: 0, minutes: 90 },
            "2026": { apps: 3, goals: 0, assists: 0, cleanSheets: 0, minutes: 102 },
            "2025": { apps: 25, goals: 1, assists: 0, cleanSheets: 0, minutes: 2023 }
        }
    },
    {
        id: 2, number: 2, name: "室屋 成【C】", nameEn: "Sei MUROYA",
        position: "DF", age: 32, nationality: "日本", height: "178cm", weight: "72kg",
        image: "players/player_2.jpg",
        bio: "日本国脚，2019年J联赛最佳十一人。曾在德乙汉诺威96效力5年，2025年回归东京，攻守兼备的右后卫，速度和传中能力出色。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 0, cleanSheets: 0, minutes: 180 },
            "2026": { apps: 20, goals: 4, assists: 1, cleanSheets: 0, minutes: 1775 },
            "2025": { apps: 20, goals: 0, assists: 1, cleanSheets: 0, minutes: 1589 },
            "2024/2025": { apps: 28, goals: 0, assists: 0, cleanSheets: 0, minutes: 2256 ,team:"汉诺威96"}
        }
    },
    {
        id: 24, number: 24, name: "Alexander SCHOLZ", nameEn: "Alexander Scholz",
        position: "DF", age: 33, nationality: "丹麦", height: "189cm", weight: "84kg",
        image: "players/player_24.jpg",
        bio: "丹麦中后卫，曾入选青年国家队，2025年加盟FC东京后立即成为后防核心。空中对抗能力极强。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 0, cleanSheets: 0, minutes: 180 },
            "2026": { apps: 17, goals: 1, assists: 1, cleanSheets: 0, minutes: 1511 },
            "2025": { apps: 20, goals: 2, assists: 0, cleanSheets: 0, minutes: 1767 },
            "2024/2025": { apps: 33, goals: 0, assists: 3, cleanSheets: 0, minutes: 2773,team:"沃克拉体育" }
            
        }
    },
    {
        id: 22, number: 22, name: "石原 広教", nameEn: "Hirokazu ISHIHARA",
        position: "DF", age: 27, nationality: "日本", height: "169cm", weight: "65kg",
        image: "players/player_22.jpg",
        bio: "出道于湘南比马，后效力浦和红钻，都获得了主力位置，2026年加盟东京。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 0, cleanSheets: 0, minutes: 75 },
            "2026": { apps: 13, goals: 0, assists: 1, cleanSheets: 0, minutes: 832 ,team:"浦和红钻"},
            "2025": { apps: 35, goals: 1, assists: 2, cleanSheets: 0, minutes: 2847 ,team:"浦和红钻"}


        }
    },
    {
        id: 4, number: 4, name: "稲村 隼翔", nameEn: "Hayato INAMURA",
        position: "DF", age: 24, nationality: "日本", height: "182cm", weight: "74kg",
        image: "players/player_4.jpg",
        bio: "出道于新泻天鹅，后短暂在凯尔特人效力一个赛季，出场机会较少，2026年加盟东京。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, cleanSheets: 0, minutes: 85 },
            "2026": { apps: 17, goals: 0, assists: 0, cleanSheets: 0, minutes: 1442 },
            "2025/2026": { apps: 2, goals: 0, assists: 0, cleanSheets: 0, minutes: 135,team:"凯尔特人/凯尔特人B" },
            "2025": { apps: 17, goals: 1, assists: 1, cleanSheets: 0, minutes: 1375,team:"新泻天鹅" },
        }
    },
    {
        id: 442, number: 42, name: "橋本 健人🟥", nameEn: "Kento HASHIMOTO",
        position: "DF", age: 26, nationality: "日本", height: "174cm", weight: "68kg",
        image: "players/player_442.jpg",
        bio: "2026年加盟球队，后方主要轮换球员，可担任左后卫。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, cleanSheets: 0, minutes: 38 },
            "2026": { apps: 19, goals: 0, assists: 2, cleanSheets: 0, minutes: 1218 },
            "2025": { apps: 31, goals: 1, assists: 2, cleanSheets: 0, minutes: 2099,team:"新泻天鹅" }
        }
    },
    {
        id: 15, number: 15, name: "大森 理生", nameEn: "Rio OMORI",
        position: "DF", age: 24, nationality: "日本", height: "186cm", weight: "82kg",
        image: "players/player_15.jpg",
        bio: "出自FC东京自家青训，未来后方希望。22-25年外租至J2联赛球队历练，26年回归，成为球队主要轮换。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, cleanSheets: 0, minutes: 45 },
            "2026": { apps: 7, goals: 0, assists: 0, cleanSheets: 0, minutes: 559 },
            "2025": { apps: 39, goals: 1, assists: 0, cleanSheets: 0, minutes: 2927,team:"FC今治" },
        }
    },
    {
        id: 6, number: 6, name: "Kashif BANGNAGANDE", nameEn: "Kashifu BANGNAGANDE",
        position: "DF", age: 24, nationality: "日本", height: "176cm", weight: "74kg",
        image: "players/player_6.jpg",
        bio: "FC东京青训出品，持续培养，有望担任未来左路后方主力。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, cleanSheets: 0, minutes: 63 },
            "2026": { apps: 3, goals: 0, assists: 1, cleanSheets: 0, minutes: 68 },
            "2025": { apps: 12, goals: 0, assists: 1, cleanSheets: 0, minutes: 803 }
        }
    },
    {
        id: 42, number: 18, name: "橋本 拳人", nameEn: "Kento HASHIMOTO",
        position: "MF", age: 33, nationality: "日本", height: "183cm", weight: "74kg",
        image: "players/player_42.jpg",
        bio: "日本国脚，2019年J联赛最佳十一人。先后踢过俄超和西乙，2025年回归FC东京后担任中场枢纽，攻守兼备的B2B中场。",
        stats: {
            "26/27": { apps: 2, goals: 0, assists: 0, minutes: 156 },
            "2026": { apps: 17, goals: 0, assists: 0, minutes: 1221 },
            "2025":{ apps: 30, goals: 0, assists: 3, minutes: 2076 },
            "2024/2025":{ apps: 8, goals: 0, assists: 0, minutes: 254,team:"埃瓦尔" }
        }
    },
    {
        id: 8, number: 8, name: "高 宇洋", nameEn: "Takahiro KO",
        position: "MF", age: 28, nationality: "日本", height: "173cm", weight: "69kg",
        image: "players/player_8.jpg",
        bio: "中国国脚高升之子，中场节拍器。2024，2025连续两个赛季出场时间全队第一。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 0, minutes: 253 },
            "2026": { apps: 9, goals: 0, assists: 0, minutes: 447 },
            "2025": { apps: 39, goals: 2, assists: 5, minutes: 3067 }
        }
    },
    {
        id: 33, number: 33, name: "俵積田 晃太", nameEn: "Kota TAWARATSUMIDA",
        position: "MF", age: 22, nationality: "日本", height: "176cm", weight: "73kg",
        image: "players/player_33.jpg",
        bio: "FC东京青训瑰宝，21岁已连续两赛季出场33+次，并已经入选过日本国家队。球队未来核心。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, minutes: 45 },
            "2026": { apps: 4, goals: 0, assists: 0, minutes: 78 },
            "2025":{ apps: 39, goals: 2, assists: 2, minutes: 2247 }
        }
    },
    {
        id: 7, number: 7, name: "安齊 颯馬", nameEn: "Soma ANZAI",
        position: "MF", age: 23, nationality: "日本", height: "175cm", weight: "68kg",
        image: "players/player_7.jpg",
        bio: "全能型球员，可踢中场和后卫。2025年短暂效力葡甲的彭拿费尔俱乐部，2026年回归。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, minutes: 16 },
            "2025/2026": { apps: 14, goals: 1, assists: 0, minutes: 984,team:"彭拿费尔" },
            "2025":{ apps: 36, goals: 3, assists: 3, minutes: 2198 }
        }
    },
    {
        id: 27, number: 27, name: "常盤 亨太", nameEn: "Kyota TOKIWA",
        position: "MF", age: 24, nationality: "日本", height: "173cm", weight: "69kg",
        image: "players/player_27.jpg",
        bio: "攻守兼备的中场，在百年构想联赛期间获得大量出场机会。传球出色，传球准确率位列队伍前茅。",
        stats: {
             "2026/2027": { apps: 1, goals: 0, assists: 0, minutes: 27 },
            "2026": { apps: 20, goals: 0, assists: 0, minutes: 1508 },
            "2025":{ apps: 10, goals: 0, assists: 0, minutes: 294 }
        }
    },
    {
        id: 10, number: 10, name: "佐藤 恵允", nameEn: "Kein SATO",
        position: "FW", age: 25, nationality: "日本", height: "179cm", weight: "78kg",
        image: "players/player_10.jpg",
        bio: "FC东京的新10号，进攻端具有创造力，既能得分又能助攻，未来有望成为球队门面甚至得到留洋机会。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 2, minutes: 164 },
            "2026": { apps: 20, goals: 4, assists: 2, minutes: 1563 },
            "2025":{ apps: 42, goals: 9, assists: 6, minutes: 2670 },
            "2024/2025":{ apps: 19, goals: 1, assists: 3, minutes: 1550,team:"云达不莱梅II" }
        }
    },
    {
        id: 9, number: 9, name: "Marcelo RYAN", nameEn: "Marcelo Ryan",
        position: "FW", age: 24, nationality: "巴西", height: "189cm", weight: "86kg",
        image: "players/player_9.jpg",
        bio: "2025赛季和百年构想赛季队内最佳射手。终结能力出色，运动能力极佳。",
        stats: {
            "2026/2027": { apps: 2, goals: 1, assists: 0, minutes: 129},
            "2026": { apps: 18, goals: 6, assists: 4, minutes: 1244},
            "2025":{ apps: 35, goals: 13, assists: 1, minutes: 2073 }
        }
    },
    {
        id: 39, number: 39, name: "仲川 輝人", nameEn: "Teruhito NAKAGAWA",
        position: "FW", age: 34, nationality: "日本", height: "161cm", weight: "58kg",
        image: "players/player_39.jpg",
        bio: "经验丰富的边锋，速度极快，在反击中有重要作用，在球队担任主要轮换。2019年J联赛MVP。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 1, minutes: 32 },
            "2026": { apps: 17, goals: 0, assists: 1, minutes: 379 },
            "2025":{ apps: 39, goals: 3, assists: 1, minutes: 1869 }
        }
    },
    {
        id: 26, number: 26, name: "長倉 幹樹", nameEn: "Motoki NAGAKURA",
        position: "FW", age: 26, nationality: "日本", height: "177cm", weight: "71kg",
        image: "players/player_26.jpg",
        bio: "得分能力较强，是球队主要得分手之一，必要时也可以担任替补，会有意想不到的奇效。",
        stats: {
            "2026/2027": { apps: 2, goals: 2, assists: 0, minutes: 132 },
            "2026": { apps: 10, goals: 2, assists: 1, minutes: 753 },
            "2025":{ apps: 27, goals: 8, assists: 3, minutes: 1160,team:"浦和红钻-FC東京" }
        }
    },
    {
        id: 71, number: 71, name: "山田 楓喜", nameEn: "Fuki YAMADA",
        position: "MF", age: 22, nationality: "日本", height: "178cm", weight: "73kg",
        image: "players/player_71.jpg",
        bio: "FC东京青训出品的年轻前锋，速度快，盘带出色，未来可期。",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, minutes: 24 },
            "2026": { apps: 20, goals: 1, assists: 0, minutes: 368 },
            "2025": { apps: 27, goals: 1, assists: 4, minutes: 949,team:"京都不死鸟" }
        }
    },
    {
        id: 17, number: 17, name: "Nicolai VALLYS🚑", nameEn: "Nicolai VALLYS",
        position: "MF", age: 29, nationality: "丹麦", height: "188cm", weight: "82kg",
        image: "players/player_17.jpg",
        bio: "2026年加盟球队，来自丹超的布隆德比，进攻能力强，身材在同位置优势明显。",
        stats: {
            "2026/2027": { apps: 0, goals: 0, assists: 0, minutes: 0 },
            "2025/2026": { apps: 38, goals: 10, assists: 8, minutes: 3199,team:"布隆德比" },
            "2025/2026": { apps: 29, goals: 7, assists: 4, minutes: 2056,team:"布隆德比" }
        }
    },
    {
        id: 19, number: 19, name: "本間 至恩", nameEn: "Shion HOMMA",
        position: "MF", age: 26, nationality: "日本", height: "164cm", weight: "60kg",
        image: "players/player_19.jpg",
        bio: "19岁当上J2主力，2022-2024年效力比乙的布鲁日二队，期间也为布鲁日一队出战过比甲，后回归J联赛，2026年加盟球队。",
        stats: {
            "2026/2027": { apps: 2, goals: 0, assists: 0, minutes: 114 },
            "2026": { apps: 15, goals: 2, assists: 2, minutes: 510,team:"大版樱花" },
            "2025":{ apps: 20, goals: 0, assists: 2, minutes: 754,team:"大版樱花" }
        }
    },
    {
        id: 11, number: 11, name: "小柏 剛", nameEn: "Tsuyoshi OGASHIWA",
        position: "FW", age: 28, nationality: "日本", height: "167cm", weight: "67kg",
        image: "players/player_11.jpg",
        bio: "出道自札幌，2024年加盟球队，是球队轮换之一",
        stats: {
            "2026/2027": { apps: 0, goals: 0, assists: 0, minutes: 0},
            "2026": { apps: 1, goals: 0, assists: 0, minutes: 14 },
            "2025":{ apps: 4, goals: 0, assists: 0, minutes: 88 }
        }
    },
    {
        id: 25, number: 25, name: "小湊 絆", nameEn: "Tsuna KOMINATO",
        position: "FW", age: 21, nationality: "日本", height: "178cm", weight: "76kg",
        image: "players/player_25.jpg",
        bio: "年轻的前锋，从法政大学加盟，2025赛季完成一线队首秀",
        stats: {
            "2026/2027": { apps: 1, goals: 0, assists: 0, minutes: 1 },
            "2025": { apps: 2, goals: 0, assists: 0, minutes: 84 }
        }
    }
];

// 球队荣誉
const honorsData = [
    {
        competition: "J联赛杯 (Yamazaki Nabisco Cup / YBC Levain Cup)",
        titles: 3,
        years: [2004, 2009, 2020],
        icon: "trophy",
        details: [
            { year: 2004, description: "点球大战击败浦和红钻，队史首冠" },
            { year: 2009, description: "2-0击败川崎前锋，第二次捧杯" },
            { year: 2020, description: "2-1击败柏太阳神，第三次捧杯" }
        ]
    },
    {
        competition: "天皇杯",
        titles: 1,
        years: [2011],
        icon: "crown",
        details: [
            { year: 2011, description: "第91届天皇杯，决赛4-0大胜京都不死鸟，Lucas梅开二度" }
        ]
    },
    {
        competition: "J2联赛",
        titles: 1,
        years: [2011],
        icon: "medal",
        details: [
            { year: 2011, description: "2010年降级后一年即夺冠重返J1，展现强队底蕴" }
        ]
    },
    {
        competition: "骏河银行锦标赛 (Suruga Bank Championship)",
        titles: 1,
        years: [2010],
        icon: "shield",
        details: [
            { year: 2010, description: "击败南美杯冠军基多大学（LDU Quito）" }
        ]
    },
    {
        competition: "J1联赛",
        titles: 0,
        years: [],
        icon: "star",
        details: [
            { year: 2019, description: "J1联赛亚军（冠军悬念持续到末轮），6人入选最佳十一人" }
        ],
        note: "亚军"
    },
    {
        competition: "J联赛最佳青训俱乐部奖",
        titles: 5,
        years: [2010, 2017, 2023, 2024, 2025],
        icon: "graduation-cap",
        details: [
            { year: 2025, description: "连续三年获奖，获奖次数J联赛最多" }
        ]
    }
];

// 历史战绩数据（2011-2026）
const historyData = [
    { season: 2026, league: "J1百年构想", pos: "East 2", mp: 18, w: 9, d: 6, l: 3, gf: 28, ga: 16, gd: 12, pts: 37, highlight: "特殊赛制赛季，排名按分区积分算，最终排名为联赛第四" },
    { season: 2025, league: "J1", pos: 11, mp: 38, w: 13, d: 11, l: 14, gf: 41, ga: 48, gd: -7, pts: 50 },
    { season: 2024, league: "J1", pos: 7, mp: 38, w: 15, d: 9, l: 14, gf: 53, ga: 51, gd: 2, pts: 54 },
    { season: 2023, league: "J1", pos: 11, mp: 34, w: 12, d: 7, l: 15, gf: 42, ga: 46, gd: -4, pts: 43 },
    { season: 2022, league: "J1", pos: 6, mp: 34, w: 14, d: 7, l: 13, gf: 46, ga: 43, gd: 3, pts: 49 },
    { season: 2021, league: "J1", pos: 9, mp: 38, w: 15, d: 8, l: 15, gf: 49, ga: 53, gd: -4, pts: 53 },
    { season: 2020, league: "J1", pos: 6, mp: 34, w: 17, d: 6, l: 11, gf: 47, ga: 42, gd: 5, pts: 57 },
    { season: 2019, league: "J1", pos: 2, mp: 34, w: 19, d: 7, l: 8, gf: 46, ga: 29, gd: 17, pts: 64 },
    { season: 2018, league: "J1", pos: 6, mp: 34, w: 14, d: 8, l: 12, gf: 39, ga: 34, gd: 5, pts: 50 },
    { season: 2017, league: "J1", pos: 13, mp: 34, w: 10, d: 10, l: 14, gf: 37, ga: 42, gd: -5, pts: 40 },
    { season: 2016, league: "J1", pos: 9, mp: 34, w: 15, d: 7, l: 12, gf: 39, ga: 39, gd: 0, pts: 52, highlight: "特殊赛制赛季，排名按积分总和算" },
    { season: 2015, league: "J1", pos: 4, mp: 34, w: 19, d: 6, l: 9, gf: 45, ga: 33, gd: 12, pts: 63, highlight: "特殊赛制赛季，排名按积分总和算" },
    { season: 2014, league: "J1", pos: 9, mp: 34, w: 12, d: 12, l: 10, gf: 47, ga: 33, gd: 14, pts: 48 },
    { season: 2013, league: "J1", pos: 8, mp: 34, w: 16, d: 6, l: 12, gf: 61, ga: 47, gd: 14, pts: 54 },
    { season: 2012, league: "J1", pos: 10, mp: 34, w: 14, d: 6, l: 14, gf: 47, ga: 44, gd: 3, pts: 48 },
    { season: 2011, league: "J2", pos: 1, mp: 38, w: 23, d: 8, l: 7, gf: 67, ga: 22, gd: 45, pts: 77 }
];

// 比赛日志数据（2026/2027赛季）
// 添加新比赛：在数组末尾追加一条，图片放在 matches/ 文件夹
// summary字段：比赛文字总结，可直接在此编辑
const matchesData = [
    {
        round: "第1轮",
        date: "2026.08.08",
        opponent: "vs 町田泽维亚",
        result: "1-5",
        outcome: "lose",
        image: "matches/match01.jpg",
        summary: "FC东京通过Ryan的反击进球早早领先，桥本健人38分钟的红牌犯规让东京上半场就要少打一人，最终町田凶狠反扑力克东京。"
    },
    {
        round: "第2轮",
        date: "2026.08.15",
        opponent: "vs 神户胜利船",
        result: "2-2",
        outcome: "draw",
        image: "matches/match02.jpg",
        summary: "长仓干树神勇发挥梅开二度，武藤嘉纪读秒绝平，东京客场拿下一分。"
    }
    
];
