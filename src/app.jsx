import { useEffect, useState, useRef, useContext } from 'preact/hooks';
import SVG from 'react-inlinesvg';
import { StoreContext, Store } from './StoreContext.js';
import DarkModeThemeToggle from './DarkModeToggle';
import { CharacterGallery, CharacterGalleryV2 } from './CharacterGallery';
import { ComboList } from './ComboList';
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
      <StoreContext.Provider value={GlobalStore}>
        <div
          // className="App h-full py-6 px-6 bg-white"
          // style="width: 100vw; height: 100vh;"
        >
          <img src='./img/t8-logo-b.png' style={"height:150px; width: 100%; object-fit: cover;"} />
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

            <ComboList comboList={GlobalStore.characterData.find(x => x.name == 'jun').moves} />
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
