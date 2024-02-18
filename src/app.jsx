import { useEffect, useState, useRef, useContext } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import list from './list.json';
import SVG from 'react-inlinesvg';
import nightwind from 'nightwind/helper';
import { StoreContext, Store } from './StoreContext.js';
import DarkModeThemeToggle from './DarkModeToggle';
import { CharacterGallery, CharacterGalleryV2 } from './CharacterGallery';
import './app.css';

const URLMonitor = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentUrl(window.location.href);
    };

    // Add event listener to listen for changes in the URL
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      // Cleanup function to remove the event listener when component unmounts
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <p>Current URL: {currentUrl}</p>
    </div>
  );
};

export default URLMonitor;

export function App() {
  let content = <></>;
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  const GlobalStore = useContext(StoreContext);
  const [isDarkMode, setIsDarkMode] = useState(GlobalStore.isDarkMode);

  useEffect(() => {}, [input]);

  const [currLocation, setCurrLocation] = useState(window.location);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrLocation(window.location);
    };

    // Add event listener to listen for changes in the URL
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      // Cleanup function to remove the event listener when component unmounts
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  switch (currLocation.pathname) {
    case '/chars':
      content = <CharacterGalleryV2 />;
      break;
    default:
      content = <></>;
      break;
  }
  // window.history.pushState("", "", "/new-url");
  // window.history.replaceState("", "", "/new-url");
  return (
    <>
      <StoreContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div
          className="App h-full py-6 px-6 bg-white"
          style="width: 100vw; height: 100vh;"
        >
          <div class="bg-gray-50 shadow-lg border rounded-md">
            <div class="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block float-right">
                  <DarkModeThemeToggle />
                </span>
                <span class="block">Hello Tekken 8</span>
                <span class="block text-my-indigo">
                  Start typing to visualize your strings
                </span>
              </h2>
            </div>

            {content}

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

        <div class="bg-white pt-12 sm:pt-16 lg:pt-24">
          {/* <!-- nav - start --> */}
          <nav class="sticky bottom-0 mx-auto flex w-full justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
            <span class="flex flex-col items-center gap-1 text-indigo-500">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>

              <span>Home</span>
            </span>

            <a
              href="#"
              class="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clip-rule="evenodd"
                />
              </svg>

              <span>Features</span>
            </a>

            <a
              href="#"
              class="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                  clip-rule="evenodd"
                />
              </svg>

              <span>Pricing</span>
            </a>

            <a
              onClick={() => window.history.replaceState('', '', '/chars')}
              class="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>

              <span>About</span>
            </a>
          </nav>
          {/* <!-- nav - end --> */}
        </div>
      </StoreContext.Provider>
    </>
  );
}

export function ComboVisual({ input }) {
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
        <div class="w-full px-4 py-5 mb-2 border rounded-md shadow sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Jun Kazama Combo Database
          </h3>
          <p class="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
            Details and information about Jun's Strings.
          </p>
        </div>
        <ul class="flex flex-col w-full rounded-md shadow">
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

// window.tailwind.config = {
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         'my-indigo': '#4f45e5',
//       },
//     },
//   },
// };
