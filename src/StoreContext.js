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
};
export const StoreContext = createContext(Store);
