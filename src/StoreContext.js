import { useState, createContext } from 'react';

export const Store = {
    currPage: window.location.pathname,
    setCurrPage: (path) => {},
    isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    setIsDarkMode: (bool) => {},
    characterData: [
    {
      name: 'Alisa',
      fullName: "",
      portaraitImg: 'alisa-bosconovitch-fighter-select.webp',
    },
    {
      name: 'Asuka',
      fullName: "",
      portaraitImg: 'asuka-fighter-select.webp',
    },
    {
      name: 'Azucena',
      fullName: "",
      portaraitImg: 'azucena-milagros-ortiz-castillo-fighter-select.webp',
    },
    {
      name: 'Bryan',
      fullName: "",
      portaraitImg: 'bryan-fury-character-art-lrg.webp',
    },
    {
      name: 'Claudio',
      fullName: "",
      portaraitImg: 'claudio-fighter-select.webp',
    },
    {
      name: 'Devil',
      fullName: "",
      portaraitImg: 'devil-jin-fighter-select.png',
    },
    {
      name: 'Feng',
      fullName: "",
      portaraitImg: 'Feng-Wei-fighter-select.webp',
    },
    {
      name: 'Hworang',
      fullName: "",
      portaraitImg: 'hworang-fighter-select.webp',
    },
    {
      name: 'Jack',
      fullName: "",
      portaraitImg: 'jack-8-fighter-select.webp',
    },
    {
      name: 'Jin',
      fullName: "",
      portaraitImg: 'jin-fighter-select.webp',
    },
    {
      name: 'Jun',
      fullName: "",
      portaraitImg: 'jun-fighter-select.webp',
    },
    {
      name: 'Kazuya',
      fullName: "",
      portaraitImg: 'kazuya-fighter-select.webp',
    },
    {
      name: 'King',
      fullName: "",
      portaraitImg: 'king-fighter-select.webp',
    },
    {
      name: 'Kuma',
      fullName: "",
      portaraitImg: 'Kuma-fighter-select-v2.webp',
    },
    {
      name: 'Lars',
      fullName: "",
      portaraitImg: 'lars-alexandersson-fighter-select-v2.webp',
    },
    {
      name: 'Law',
      fullName: "",
      portaraitImg: 'law-fighter-select.webp',
    },
    {
      name: 'Lee',
      fullName: "",
      portaraitImg: 'lee-chaolan-fighter-select-v2.webp',
    },
    {
      name: 'Leo',
      fullName: "",
      portaraitImg: 'Leo-fighter-select.webp',
    },
    {
      name: 'Leroy',
      fullName: "",
      portaraitImg: 'leroy-fighter-select.webp',
    },
    {
      name: 'Lili',
      fullName: "",
      portaraitImg: 'lili-fighter-select.webp',
    },
    {
      name: 'Nina',
      fullName: "",
      portaraitImg: 'nina-fighter-select.webp',
    },
    {
      name: 'Panda',
      fullName: "",
      portaraitImg: 'Panda-fighter-select.png',
    },
    {
      name: 'Paul',
      fullName: "",
      portaraitImg: 'paul_phoenix-fighter-select-v2.webp',
    },
    {
      name: 'Raven',
      fullName: "",
      portaraitImg: 'raven-fighter-select.webp',
    },
    {
      name: 'Reina',
      fullName: "",
      portaraitImg: 'reina-select.png',
    },
    {
      name: 'Sergei',
      fullName: "",
      portaraitImg: 'Sergei-Dragunov-fighter-select.webp',
    },
    {
      name: 'Shaheen',
      fullName: "",
      portaraitImg: 'Shaheen-fighter-select.webp',
    },
    {
      name: 'Steve',
      fullName: "",
      portaraitImg: 'Steve-Fox-fighter-select.webp',
    },
    {
      name: 'Victor',
      fullName: "",
      portaraitImg: 'victor-chevalier-fighter-select-v2.webp',
    },
    {
      name: 'Xiaoyu',
      fullName: "",
      portaraitImg: 'xiaoyu-fighter-select.webp',
    },
    {
      name: 'Yoshimitsu',
      fullName: "",
      portaraitImg: 'Yoshimitsu-fighter-select.webp',
    },
    {
      name: 'Zafina',
      fullName: "",
      portaraitImg: 'zafina-fighter-select.webp',
    },
  ]
};

export const StoreContext = createContext(Store);
