import { useEffect, useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import list from './list.json';
// import { ImageOutput } from './ImageOutput';
import SVG from 'react-inlinesvg';

import './app.css';

export function App() {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    createImage();
  }, [input]);

  function getInputFromRegex() {
    let inputRegex = input.split(/\s|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/);

    // Filter undefined
    return inputRegex.filter((x) => {
      return x;
    });
  }

  // Creates combo images from the user input
  function createImage() {
    //let altImg = document.getElementsByTagName('img');
    let comboInput = getInputFromRegex();
    const imagesContainer = document.querySelector('#images');

    let localImg = [];

    // Check if imageContainer exists
    if (true) {
      // Make inner html blank after every key press (to keep array empty)

      //imagesContainer.innerHTML = '';

      // Iterate through each item in comboInput
      for (let i = 0; i < comboInput.length; i++) {
        // Iterate through all keys (combo inputs) from the given game in list.json
        for (let key in list['tekken']) {
          // Iterate through all terms in the given game
          for (let j = 0; j < list['tekken'][key].term.length; j++) {
            // Check if any of the terms matches the given comboInput
            if (list['tekken'][key].term[j] === comboInput[i]) {
              // Iterate through each term and and grab the image, alt, and size values
              // Place the images on the page
              for (
                let imgNum = 0;
                imgNum < list['tekken'][key].image.length;
                imgNum++
              ) {
                let src = String(list['tekken'][key].image[imgNum]);
                console.log('push: ', src);
                localImg.push(src);
              }
            }
          }
        }
      }
    }

    console.log('from: ', images);
    console.log('set: ', localImg);
    setImages(localImg);
    //createTranslation();
  }

  // Creates an 'onClick' event listener for each button which changes the translation text to the image's 'alt' text
  function createTranslation() {
    let altImg = document.getElementsByTagName('img');

    if (altImg) {
      for (var k = 0; k < altImg.length; k++) {
        altImg[k].addEventListener('click', function show() {
          document.querySelector('#text').innerHTML = this.alt;
        });
      }
    }
  }

  return (
    <>
      {/* <ComboListItem combo={'1 2'} /> */}
      <div className="App h-full py-6 px-6 bg-white">
        <div class="bg-gray-50 shadow-lg border rounded-md">
          <div class="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Hello Tekken 8</span>
              <span class="block text-my-indigo">
                Start typing to visualize your strings
              </span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Button
                </a>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="px-24 mb-12">
            <label
              for="comboInput"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Combo Input: {input}
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                type="text"
                name="comboInput"
                id="comboInput"
                class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="2,1,4"
              />
            </div>
          </div>

          {/* <img src="./img/tekken/tek_button_1.svg" /> */}

          {/* <div>
            <div id="images">{images}</div>
          </div> */}

          <div className="flex">
            {images.map((x, index) => (
              <>
                <div className="mx-1">
                  <SVG src={x} />
                </div>
              </>
            ))}
          </div>

          <ComboList comboList={['1 2', '3+4']} />
        </div>
      </div>
    </>
  );
}

export function ComboVisual({ input }) {
  const [images, setImages] = useState([]);
  console.log('input');
  console.log(input);

  // createImage();

  useEffect(() => {
    createImage();
  }, [input]);

  // useEffect(() => {
  //   createImage();
  // }, []);

  function getInputFromRegex() {
    let inputRegex = input.split(/\s|\+|(\d\+\d\+\d\+\d|\d\+\d\+\d|\d\+\d|\d)/);

    // Filter undefined
    return inputRegex.filter((x) => {
      return x;
    });
  }

  // Creates combo images from the user input
  function createImage() {
    let comboInput = getInputFromRegex();
    let localImg = [];

    if (true) {
      // Iterate through each item in comboInput
      for (let i = 0; i < comboInput.length; i++) {
        // Iterate through all keys (combo inputs) from the given game in list.json
        for (let key in list['tekken']) {
          // Iterate through all terms in the given game
          for (let j = 0; j < list['tekken'][key].term.length; j++) {
            // Check if any of the terms matches the given comboInput
            if (list['tekken'][key].term[j] === comboInput[i]) {
              // Iterate through each term and and grab the image, alt, and size values
              // Place the images on the page
              for (
                let imgNum = 0;
                imgNum < list['tekken'][key].image.length;
                imgNum++
              ) {
                let src = String(list['tekken'][key].image[imgNum]);

                localImg.push(src);
              }
            }
          }
        }
      }
    }

    setImages(localImg);
  }

  return (
    <>
      <div className="flex">
        {images.map((x, index) => (
          <>
            <div className="mx-1">
              <SVG src={x} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export function ComboListItem({ combo }) {
  console.log('ComboListItem');
  console.log('combo');
  console.log(combo);
  return (
    <li class="flex flex-row mb-2 border-gray-400">
      <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
        <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
          <a href="#" class="relative block">
            <img
              alt="profil"
              src="https://static.bandainamcoent.eu/high/tekken/tekken-8/02-characters/new-gallery/Wide/Jun-Kazama_new.png"
              class="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
        </div>
        <div class="flex-1 pl-1 md:mr-16">
          <div class="font-medium dark:text-white">
            <ComboVisual input={combo} />
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-200">
            Healing Wind Fist
          </div>
        </div>

        <button class="flex justify-end w-24 text-right">
          <svg
            width="12"
            fill="currentColor"
            height="12"
            class="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
}

export function ComboList({ comboList }) {
  console.log('comboList');
  console.log(comboList);

  useEffect(() => {}, []);

  return (
    <>
      <div class="container flex flex-col items-center justify-center w-full mx-auto">
        <div class="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
          <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Jun Kazama Combo Database
          </h3>
          <p class="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
            Details and information about Jun's Strings.
          </p>
        </div>
        <ul class="flex flex-col">
          {comboList.map((x) => {
            return (
              <>
                <ComboListItem combo={x} />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export function Icon({ name, ...rest }) {
  const [path, setPath] = useState(false);
  useEffect(() => {
    const importIcon = async () => {
      try {
        const { default: _path } = await import(`/* @vite-ignore */ ${name}`);
        setPath(_path);
      } catch (err) {
        console.error(err);
      }
    };
    importIcon();
  }, [name]);
  return <>{path && <img src={path} alt=" " />}</>;
}

window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'my-indigo': '#4f45e5',
      },
    },
  },
};
