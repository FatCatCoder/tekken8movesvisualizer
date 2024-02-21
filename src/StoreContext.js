import { useState, createContext } from 'react';

export const Store = {
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  setIsDarkMode: (bool) => {},
  characterData: [
    {
      name: 'alisa',
      portaraitImg: 'alisa-bosconovitch-fighter-select.webp',
    },
    {
      name: 'asuka',
      portaraitImg: 'asuka-fighter-select.webp',
    },
    {
      name: 'azucena',
      portaraitImg: 'azucena-milagros-ortiz-castillo-fighter-select.webp',
    },
    {
      name: 'bryan',
      portaraitImg: 'bryan-fury-character-art-lrg.webp',
    },
    {
      name: 'claudio',
      portaraitImg: 'claudio-fighter-select.webp',
    },
    {
      name: 'devil',
      portaraitImg: 'devil-jin-fighter-select.png',
    },
    {
      name: 'Feng',
      portaraitImg: 'Feng-Wei-fighter-select.webp',
    },
    {
      name: 'hworang',
      portaraitImg: 'hworang-fighter-select.webp',
    },
    {
      name: 'jack',
      portaraitImg: 'jack-8-fighter-select.webp',
    },
    {
      name: 'jin',
      portaraitImg: 'jin-fighter-select.webp',
    },
    {
      name: 'jun',
      portaraitImg: 'jun-fighter-select.webp',
      moves: [
        {
            "name": "Arm Grab Flip",
            "Command": "1+3 (or f+1+3)",
            "Type": "Front",
            "Damage": "35",
            "Escape": "1"
        },
        {
            "name": "Katanuki",
            "Command": "2+4 (or f+2+4)",
            "Type": "Front",
            "Damage": "35",
            "Escape": "2"
        },
        {
            "name": "Cloud Taste",
            "Command": "1+3 (or 2+4)",
            "Type": "Left",
            "Damage": "40",
            "Escape": "1"
        },
        {
            "name": "Wind Wheel",
            "Command": "1+3 (or 2+4)",
            "Type": "Right",
            "Damage": "40",
            "Escape": "2"
        },
        {
            "name": "Twisted Limbs",
            "Command": "1+3 (or 2+4)",
            "Type": "Back",
            "Damage": "50",
            "Escape": ""
        },
        {
            "name": "White Mountain",
            "Command": "d/f+2+3",
            "Type": "Front",
            "Damage": "40",
            "Escape": "2"
        },
        {
            "name": "Riai",
            "Command": "u/f+1+2",
            "Type": "Front",
            "Damage": "40",
            "Escape": "1+2"
        },
        {
            "name": "Falling Rain",
            "Command": "FC+d/f+1+2",
            "Type": "Front",
            "Damage": "45",
            "Escape": "1+2"
        },
        {
            "name": "Tsukuyomi",
            "Command": "During Izumo 1+4 (or 2+3)",
            "Type": "Front",
            "Damage": "35",
            "Escape": "1+2"
        },
        {
            "name": "Attack Reversal",
            "Command": "Synchro with the opponent's attack, b+1+3 (or b+2+4)",
            "Type": "Reversal",
            "Damage": "25",
            "Escape": ""
        },
        {
            "name": "Amateratsu",
            "Command": "Synchro with the opponent's low attack, f+3+4",
            "Type": "Reversal",
            "Damage": "6",
            "Escape": ""
        },
        {
            "name": "Throw Reversal",
            "Command": "Synchro with the opponent's throw, f+3+4",
            "Type": "Reversal",
            "Damage": "40",
            "Escape": ""
        },
        {
            "name": "Amatsu Izanami",
            "Command": "During Rage u/f+1+2",
            "Damage": "55",
            "Hit Range": "Mid"
        },
        {
            "name": "Suikei Izumo Smash",
            "Command": "1, 1",
            "Damage": "5, 15",
            "Hit Range": "High, mid"
        },
        {
            "name": "Spear Step",
            "Command": "1, 2",
            "Damage": "5, 8",
            "Hit Range": "High, high"
        },
        {
            "name": "Spear Step Izumo Strike",
            "Command": "1, 2, 2",
            "Damage": "5, 8, 17",
            "Hit Range": "High, high, high"
        },
        {
            "name": "Spear Step Spin Kick",
            "Command": "1, 2, 4",
            "Damage": "5, 8, 16",
            "Hit Range": "High, high, mid"
        },
        {
            "name": "Suiren Leg Scythe",
            "Command": "1, 3",
            "Damage": "5, 12",
            "Hit Range": "High, low"
        },
        {
            "name": "Byakuren Tsukinuki",
            "Command": "2, 1, 4, 1",
            "Damage": "7, 9, 12, 30",
            "Hit Range": "High, mid, mid, mid"
        },
        {
            "name": "Byakuren Tamasudare",
            "Command": "2, 1, 4, 3",
            "Damage": "7, 9, 12, 21",
            "Hit Range": "High, mid, mid, high"
        },
        {
            "name": "Byakuren Misogi",
            "Command": "2,1, 1+2",
            "Damage": "7, 9, 21",
            "Hit Range": "High, mid, high"
        },
        {
            "name": "Shion",
            "Command": "3",
            "Damage": "20",
            "Hit Range": "Mid"
        },
        {
            "name": "Shunkei",
            "Command": "1+2",
            "Damage": "26",
            "Hit Range": "Mid"
        },
        {
            "name": "Ryuuntsui Misogi",
            "Command": "3+4",
            "Damage": "6, 16, 14",
            "Hit Range": "Mid, Mid, Mid"
        },
        {
            "name": "Three Ring Circus",
            "Command": "1+4, 2, 4",
            "Damage": "5, 8, 10, 23",
            "Hit Range": "Low, high, high, mid"
        },
        {
            "name": "White Heron Lower Dance",
            "Command": "1+4, 2, d+4",
            "Damage": "5, 8, 10, 15",
            "Hit Range": "Low, high, high, low"
        },
        {
            "name": "White Heron Sun Palm",
            "Command": "1+4, 3, 1",
            "Damage": "5, 8, 15, 20",
            "Hit Range": "Low, high, mid, mid"
        },
        {
            "name": "White Heron Moon Kick",
            "Command": "1+4, 3, 4",
            "Damage": "5, 8, 15, 17",
            "Hit Range": "Low, high, mid, low"
        },
        {
            "name": "Ki Charge",
            "Command": "1+2+3+4",
            "Damage": "-",
            "Hit Range": "-"
        },
        {
            "name": "Izumo Smash",
            "Command": "f+1",
            "Damage": "15",
            "Hit Range": "Mid"
        },
        {
            "name": "Demon Slayer",
            "Command": "f+2",
            "Damage": "20",
            "Hit Range": "Mid"
        },
        {
            "name": "Ame-no-Habakiri",
            "Command": "f+2 (when hit or blocking) 1+2",
            "Damage": "16, 20",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Kanbashira",
            "Command": "f+3",
            "Damage": "13",
            "Hit Range": "Mid"
        },
        {
            "name": "Kanbashira Izumo Strike",
            "Command": "f+3, 2",
            "Damage": "13, 17",
            "Hit Range": "Mid, high"
        },
        {
            "name": "Double Kanbashira",
            "Command": "f+3, 4",
            "Damage": "13, 22",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Getsukankyaku",
            "Command": "f+4",
            "Damage": "21",
            "Hit Range": "High"
        },
        {
            "name": "Inner Peace",
            "Command": "f+1+2",
            "Damage": "-",
            "Hit Range": "High"
        },
        {
            "name": "Genjitsu",
            "Command": "f+3+4",
            "Damage": "-",
            "Hit Range": "-"
        },
        {
            "name": "Wheel Kick",
            "Command": "f+2+3",
            "Damage": "21",
            "Hit Range": "High"
        },
        {
            "name": "Habotan",
            "Command": "d/f+1, 1",
            "Damage": "10, 17",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Bull's-Eye",
            "Command": "d/f+1, 2",
            "Damage": "10, 12",
            "Hit Range": "Mid, high"
        },
        {
            "name": "Mizuho",
            "Command": "d/f+2",
            "Damage": "14",
            "Hit Range": "Mid"
        },
        {
            "name": "Ame-no-Murakumo",
            "Command": "d/f+2 (when hit or blocking) 1+2",
            "Damage": "8, 14",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Kazakiri",
            "Command": "d/f+3",
            "Damage": "22",
            "Hit Range": "Mid"
        },
        {
            "name": "Katabami",
            "Command": "d/f+4",
            "Damage": "22",
            "Hit Range": "Mid"
        },
        {
            "name": "Heavenly Sun Palm",
            "Command": "d/f+3+4, 1",
            "Damage": "17, 20",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Heavenly Moon Kick",
            "Command": "d/f+3+4, 4",
            "Damage": "17, 17",
            "Hit Range": "Mid, low"
        },
        {
            "name": "Narumi",
            "Command": "d+2",
            "Damage": "18",
            "Hit Range": "Mid"
        },
        {
            "name": "Suminagashi",
            "Command": "d+4, 4",
            "Damage": "10, 20",
            "Hit Range": "Low, high"
        },
        {
            "name": "Kamudo-no-Tsurugi",
            "Command": "d+1+2",
            "Damage": "28",
            "Hit Range": "Mid"
        },
        {
            "name": "Double Lift Kicks",
            "Command": "d+3+4",
            "Damage": "5, 20",
            "Hit Range": "Low, high"
        },
        {
            "name": "Hourai's Dance",
            "Command": "d/b+1, 1, 1+2",
            "Damage": "7, 8, 5, 5, 20",
            "Hit Range": "Mid, mid, mid, mid, mid"
        },
        {
            "name": "Ayame",
            "Command": "d/b+2",
            "Damage": "15",
            "Hit Range": "Low"
        },
        {
            "name": "Leg Scythe",
            "Command": "d/b+3",
            "Damage": "14",
            "Hit Range": "Low"
        },
        {
            "name": "Kariashi",
            "Command": "d/b+4, 4, 4",
            "Damage": "14, 15, 16",
            "Hit Range": "Low, low, low"
        },
        {
            "name": "Kariashi Hakuro",
            "Command": "During Kariashi 1+4",
            "Damage": "14, 5, 8",
            "Hit Range": "Low, low, high"
        },
        {
            "name": "Violet",
            "Command": "b+1",
            "Damage": "19",
            "Hit Range": "Low"
        },
        {
            "name": "Sumire Okuri",
            "Command": "b+1, (counter hit)",
            "Damage": "18, 22",
            "Hit Range": "Low, low"
        },
        {
            "name": "Ryuen",
            "Command": "b+2",
            "Damage": "10",
            "Hit Range": "Mid"
        },
        {
            "name": "Ryuen to Elbow",
            "Command": "b+2, 1",
            "Damage": "10, 7",
            "Hit Range": "Mid, high"
        },
        {
            "name": "Ryuen to Saika Shikei",
            "Command": "b+2, 1 ,1",
            "Damage": "10, 7, 20",
            "Hit Range": "Mid, high, mid"
        },
        {
            "name": "Ryuen Saika Renken",
            "Command": "b+2, 1, 2",
            "Damage": "10, 7, 22",
            "Hit Range": "Mid, high, mid"
        },
        {
            "name": "Ryuen Saika Renshuu",
            "Command": "b+2, 1, 4",
            "Damage": "10, 7, 24",
            "Hit Range": "Mid, high, high"
        },
        {
            "name": "Ryuen Magushi",
            "Command": "b+2, 2",
            "Damage": "10, 10",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Dragon Wheel Kick",
            "Command": "b+3",
            "Damage": "20",
            "Hit Range": "Mid"
        },
        {
            "name": "Ryuusha Renken",
            "Command": "b+3, 2",
            "Damage": "20, 15",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Dragon Wheel Leg Cutter",
            "Command": "b+3, 4",
            "Damage": "20, 9",
            "Hit Range": "Mid, low"
        },
        {
            "name": "Shirabyoushi",
            "Command": "b+4, 2",
            "Damage": "14, 17",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Miare",
            "Command": "b+1+2",
            "Damage": "-",
            "Hit Range": "-"
        },
        {
            "name": "Ame-no-Sakahoko",
            "Command": "During Miare 1",
            "Damage": "30",
            "Hit Range": "Mid"
        },
        {
            "name": "Ame-no-Nuboko",
            "Command": "During Miare 2",
            "Damage": "35",
            "Hit Range": "Mid"
        },
        {
            "name": "Izumo Strike",
            "Command": "During Miare 1+2",
            "Damage": "17",
            "Hit Range": "High"
        },
        {
            "name": "Genjitsu",
            "Command": "During Miare f",
            "Damage": "-",
            "Hit Range": "-"
        },
        {
            "name": "Omoikane",
            "Command": "b+3+4",
            "Damage": "21",
            "Hit Range": "Mid"
        },
        {
            "name": "Shinki",
            "Command": "b+2+3",
            "Damage": "50",
            "Hit Range": "!"
        },
        {
            "name": "Izumo Strike",
            "Command": "u/f (or u or u/b)+2",
            "Damage": "17",
            "Hit Range": "High"
        },
        {
            "name": "Chikura",
            "Command": "u (or u/b)+4",
            "Damage": "21",
            "Hit Range": "Mid"
        },
        {
            "name": "Divine Exile - Heaven",
            "Command": "u/f+1",
            "Damage": "6, 30",
            "Hit Range": "High, high"
        },
        {
            "name": "Totsuka-no-Tsurugi",
            "Command": "u/f+2",
            "Damage": "24",
            "Hit Range": "Mid"
        },
        {
            "name": "Iwato",
            "Command": "u/f (or u or u/b)+3",
            "Damage": "17",
            "Hit Range": "Mid"
        },
        {
            "name": "Housenka - Misogi",
            "Command": "u/f+4, 3",
            "Damage": "10, 8, 14",
            "Hit Range": "Mid, mid, mid"
        },
        {
            "name": "Saiuntsui",
            "Command": "u/f+3+4",
            "Damage": "5, 21",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Suiei Ura Saika",
            "Command": "f, f+2, 2",
            "Damage": "16, 22",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Suiei Kagetsu",
            "Command": "f, f+2, 3",
            "Damage": "16, 22",
            "Hit Range": "Mid, high"
        },
        {
            "name": "Yukimiguruma",
            "Command": "f, f+3, 3+4",
            "Damage": "23, 12, 15",
            "Hit Range": "Mid, mid, mid"
        },
        {
            "name": "Tokkei - Misogi",
            "Command": "f, f+1+2",
            "Damage": "30",
            "Hit Range": "Mid"
        },
        {
            "name": "Ame-no-Uzume",
            "Command": "f, f, f+3",
            "Damage": "32",
            "Hit Range": "Mid"
        },
        {
            "name": "Tenkan Saika Shikei",
            "Command": "WS+1, 1, 1",
            "Damage": "14, 7, 20",
            "Hit Range": "High, high, mid"
        },
        {
            "name": "Tenkan Saika Renken",
            "Command": "WS+1, 1, 2",
            "Damage": "14, 7, 22",
            "Hit Range": "High, high, mid"
        },
        {
            "name": "Tenkan Saika Renshuu",
            "Command": "WS+1, 1, 4",
            "Damage": "14, 7, 24",
            "Hit Range": "High, high, high"
        },
        {
            "name": "Tomoezakura",
            "Command": "WS+1, 4, 2",
            "Damage": "14, 16, 17",
            "Hit Range": "High, mid, low"
        },
        {
            "name": "Tomoefuji",
            "Command": "WS+1, 4, 1+2",
            "Damage": "14, 16, 28",
            "Hit Range": "High, mid, mid"
        },
        {
            "name": "Hyakkaou",
            "Command": "WS+2,1",
            "Damage": "12,20",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Gioh",
            "Command": "WS+3",
            "Damage": "16",
            "Hit Range": "Mid"
        },
        {
            "name": "Ichikaku",
            "Command": "WS+4",
            "Damage": "21",
            "Hit Range": "Mid"
        },
        {
            "name": "Sudare Nagashi",
            "Command": "WS+1+2",
            "Damage": "20",
            "Hit Range": "Mid"
        },
        {
            "name": "Flowing Moon Scent",
            "Command": "WS+3+4",
            "Damage": "23",
            "Hit Range": "Mid"
        },
        {
            "name": "Twin Cloud Kicks",
            "Command": "FC+3+4, 3",
            "Damage": "10, 10, 10, 10",
            "Hit Range": "Mid, mid, mid, mid"
        },
        {
            "name": "Divine Exile - Earth",
            "Command": "FC+d/f+1",
            "Damage": "6, 30",
            "Hit Range": "Low, mid"
        },
        {
            "name": "Grace",
            "Command": "FC+d/f+2",
            "Damage": "12",
            "Hit Range": "Low"
        },
        {
            "name": "Kanamegaeshi",
            "Command": "FC+d/f+3",
            "Damage": "15",
            "Hit Range": "Low"
        },
        {
            "name": "Kasanegasumi",
            "Command": "SS+2",
            "Damage": "27",
            "Hit Range": "Mid"
        },
        {
            "name": "Kagura",
            "Command": "SS+4",
            "Damage": "20",
            "Hit Range": "Mid"
        },
        {
            "name": "Sankouchou",
            "Command": "SS+1+2",
            "Damage": "7, 9, 18",
            "Hit Range": "High, high, mid"
        },
        {
            "name": "Genjitsu",
            "Command": "f+3+4",
            "Damage": "-",
            "Hit Range": "-"
        },
        {
            "name": "Rurikoukai",
            "Command": "During Genjitsu 1",
            "Damage": "22",
            "Hit Range": "Low"
        },
        {
            "name": "Kazama Style: Spirit",
            "Command": "During Genjitsu 2",
            "Damage": "16, 32",
            "Hit Range": "Mid"
        },
        {
            "name": "Getsuun",
            "Command": "During Genjitsu 3",
            "Damage": "14",
            "Hit Range": "Mid"
        },
        {
            "name": "Getsuun Renken",
            "Command": "During Genjitsu 3, 2",
            "Damage": "14, 20",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Nichiun",
            "Command": "During Genjitsu 4",
            "Damage": "24",
            "Hit Range": "High"
        },
        {
            "name": "Izumo",
            "Command": "u+2",
            "Damage": "17",
            "Hit Range": "High"
        },
        {
            "name": "Haraede Kannagi",
            "Command": "During Izumo 1, 1",
            "Damage": "7, 26",
            "Hit Range": "High, high"
        },
        {
            "name": "Haraede Musubi",
            "Command": "During Izumo 1, 2",
            "Damage": "7, 20",
            "Hit Range": "High, mid"
        },
        {
            "name": "Setsurinbu - Misogi",
            "Command": "During Izumo 2",
            "Damage": "24",
            "Hit Range": "Mid"
        },
        {
            "name": "Zuiun Renkyaku",
            "Command": "During Izumo 3",
            "Damage": "10, 16",
            "Hit Range": "Mid, high"
        },
        {
            "name": "Wakeikazuchi - Misogi",
            "Command": "During Izumo 4, 1",
            "Damage": "15, 21",
            "Hit Range": "Low, mid"
        },
        {
            "name": "Mihikarioroshi",
            "Command": "During Izumo 1+2",
            "Damage": "24",
            "Hit Range": "Mid"
        },
        {
            "name": "Dianthus Garden",
            "Command": "During Izumo f+3+4",
            "Damage": "21",
            "Hit Range": "Mid"
        },
        {
            "name": "Heat Burst",
            "Command": "When Heat activation is available 2+3",
            "Damage": "15",
            "Hit Range": "Mid"
        },
        {
            "name": "Shunkei",
            "Command": "2+3",
            "Damage": "26",
            "Hit Range": "Mid"
        },
        {
            "name": "Ame-no-Habakiri",
            "Command": "f+2 (when hit or blocking) 1+2",
            "Damage": "16, 20",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Kagura",
            "Command": "SS+4",
            "Damage": "20",
            "Hit Range": "Mid"
        },
        {
            "name": "Zuiun Renkyaku",
            "Command": "During Izumo 3",
            "Damage": "10, 16",
            "Hit Range": "Mid, high"
        },
        {
            "name": "Ame-no-Nuboko",
            "Command": "During Miare 2",
            "Damage": "35",
            "Hit Range": "Mid"
        },
        {
            "name": "Yomotsu Ooyumi",
            "Command": "During Heat mode 2+3",
            "Damage": "20, 30",
            "Hit Range": "Mid, mid"
        },
        {
            "name": "Yomotsu Mihashira",
            "Command": "During Heat mode and Genjitsu 2+3",
            "Damage": "14, 28",
            "Hit Range": "Low, mid"
        },
        {
            "Command": "WS+1, 1, 1+4, 2, 1, 2, 4, 4, 3",
            "Damage": "90",
            "Hit Range": "High, High, Low, High, High, Mid, High, Low, Mid, Mid"
        }
    ]
    },
    {
      name: 'kazuya',
      portaraitImg: 'kazuya-fighter-select.webp',
    },
    {
      name: 'king',
      portaraitImg: 'king-fighter-select.webp',
    },
    {
      name: 'Kuma',
      portaraitImg: 'Kuma-fighter-select-v2.webp',
    },
    {
      name: 'lars',
      portaraitImg: 'lars-alexandersson-fighter-select-v2.webp',
    },
    {
      name: 'law',
      portaraitImg: 'law-fighter-select.webp',
    },
    {
      name: 'lee',
      portaraitImg: 'lee-chaolan-fighter-select-v2.webp',
    },
    {
      name: 'Leo',
      portaraitImg: 'Leo-fighter-select.webp',
    },
    {
      name: 'leroy',
      portaraitImg: 'leroy-fighter-select.webp',
    },
    {
      name: 'lili',
      portaraitImg: 'lili-fighter-select.webp',
    },
    {
      name: 'nina',
      portaraitImg: 'nina-fighter-select.webp',
    },
    {
      name: 'Panda',
      portaraitImg: 'Panda-fighter-select.png',
    },
    {
      name: 'paul_phoenix',
      portaraitImg: 'paul_phoenix-fighter-select-v2.webp',
    },
    {
      name: 'raven',
      portaraitImg: 'raven-fighter-select.webp',
    },
    {
      name: 'reina',
      portaraitImg: 'reina-select.png',
    },
    {
      name: 'Sergei',
      portaraitImg: 'Sergei-Dragunov-fighter-select.webp',
    },
    {
      name: 'Shaheen',
      portaraitImg: 'Shaheen-fighter-select.webp',
    },
    {
      name: 'Steve',
      portaraitImg: 'Steve-Fox-fighter-select.webp',
    },
    {
      name: 'victor',
      portaraitImg: 'victor-chevalier-fighter-select-v2.webp',
    },
    {
      name: 'xiaoyu',
      portaraitImg: 'xiaoyu-fighter-select.webp',
    },
    {
      name: 'Yoshimitsu',
      portaraitImg: 'Yoshimitsu-fighter-select.webp',
    },
    {
      name: 'zafina',
      portaraitImg: 'zafina-fighter-select.webp',
    },
  ],
  characterMoves: {
    
  }
};

export const StoreContext = createContext(Store);
