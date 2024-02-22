import { useEffect, useState, useRef, useContext } from 'preact/hooks';
import SVG from 'react-inlinesvg';
import { StoreContext, Store } from './StoreContext.js';
import DarkModeThemeToggle from './DarkModeToggle';
import { CharacterGallery, CharacterGalleryV2, CharacterGalleryV3 } from './CharacterGallery';
import { ComboList } from './ComboList';
import {ComboVisual } from './ComboVisual'
import './app.css';
import characterMoves from './moves.json'

// export const URLMonitor = () => {
//   const [currentUrl, setCurrentUrl] = useState(window.location.href);

//   useEffect(() => {
//     const handleUrlChange = () => {
//       setCurrentUrl(window.location.href);
//     };

//     // Add event listener to listen for changes in the URL
//     window.addEventListener('popstate', handleUrlChange);

//     return () => {
//       // Cleanup function to remove the event listener when component unmounts
//       window.removeEventListener('popstate', handleUrlChange);
//     };
//   }, []); // Empty dependency array ensures this effect runs only once after initial render

//   return (
//     <div>
//       <p>Current URL: {currentUrl}</p>
//     </div>
//   );
// };

export function App() {
  let content = <></>;
  const GlobalStore = useContext(StoreContext);
  const [isDarkMode, setIsDarkMode] = useState(GlobalStore.isDarkMode);
  const [currLocation, setCurrLocation] = useState(window.location);
  const [currPage, setCurrPage] = useState(GlobalStore.currPage);
  const [pageContent, SetPageContent] = useState(window.location.pathname);

  const [characterData] = useState(GlobalStore.characterData);

  // console.log(characterMoves)

  useEffect(() => {
    console.log('init')
    const handleUrlChange = () => {
      console.log('popstate was called')
      setCurrLocation(window.location);
    };

    // Add event listener to listen for changes in the URL
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      // Cleanup function to remove the event listener when component unmounts
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render


  useEffect(() => {
    console.log('location was changed: ' , currPage)


    history.pushState('', '', currPage)

    if(currPage == '' || currPage == "/"){
      content = <></>;
    }
    else if(currPage.includes('/chars')){
      if(currPage == '/chars')
        content = <CharacterGalleryV2 />;
      else
      {
        console.log('useeffect page change')
        content = <ComboList comboList={characterMoves[currPage.split("/chars/")[1]]} fighterName={currPage.split("/chars/")[1]} />;
      }
        
    }
    else{
      content = <><h2>404: Not Found</h2></>;
    }

  }, [currLocation, currPage, GlobalStore.currPage]); // Empty dependency array ensures this effect runs only once after initial render


  if(currPage == '' || currPage == "/"){
    content = <></>;
  }
  else if(currPage.includes('/chars')){
    if(currPage == '/chars')
      content = <CharacterGalleryV2 />;
    else
    {
      // console.log(characterMoves)
      // console.log(characterMoves["Jun"])
      content = <ComboList comboList={characterMoves[currPage.split("/chars/")[1]]} fighterName={currPage.split("/chars/")[1]} />;
    } 
  }
  else{
    content = <><h2>404: Not Found</h2></>;
  }

  return (
    <>
      <StoreContext.Provider value={{isDarkMode, setIsDarkMode, currPage, setCurrPage, characterData}}>
        <div
          // className="App h-full py-6 px-6 bg-white"
          style="width: 100vw; height: 100vh; max-width: 100vw; min-width: 100vw;"
        >
          {/* <img src='./img/t8-logo-b.png' style={"height:150px; width: 100vw; object-fit: cover;"} /> */}
          {/* <div class="bg-gray-50 shadow-lg border rounded-md"> */}
          <div style={"padding-bottom: 5rem;"}>
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

            {/* <CharacterGalleryV3 /> */}
            {content}

          </div>

          <div style={"width: -webkit-fill-available;position: fixed;bottom: 0;background: transparent;"}>
          <nav class="mx-auto flex w-full justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
            <span class="flex flex-col items-center gap-1 text-indigo-500"
            onClick={() => setCurrPage('/')}>
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

              <span>Visualize</span>
            </a>

            <a
              onClick={() => setCurrPage('/chars')}
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

              <span>Characters</span>
            </a>
          </nav>
        </div>

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
