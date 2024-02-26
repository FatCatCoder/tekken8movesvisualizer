import { useEffect, useState, useRef, useContext } from 'preact/hooks';
import { Store, StoreContext } from './StoreContext';
import characterMoves from './moves.json'

export function CharacterGalleryV2() {
  const GlobalStore = useContext(StoreContext);
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            Characters
          </h2>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {GlobalStore.characterData.map((x) => {
              return (
                <>
                  <CharacterGalleryItemV2 characterData={x} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export function CharacterGalleryItemV2({characterData}) {
  const GlobalStore = useContext(StoreContext);
  const hasMoves = characterMoves[characterData.name] != null;

  return (
    <>
      <div class="shadow-xl" onClick={() => hasMoves? GlobalStore.setCurrPage("/chars/" + characterData.name): null} style={hasMoves? "": "filter: grayscale(.95);"}>
        <a
          onClick={() => hasMoves? GlobalStore.setCurrPage("/chars/" + characterData.name): null}
          class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
        >
          <img
            src={window.location.protocol + "//" + window.location.host + "/tekken8movesvisualizer/img/character_arts/" + characterData.portaraitImg}
            loading="lazy"
            alt={"Photo img of " + characterData.name}
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div class="relative flex w-full flex-col rounded-lg p-4 text-center bg-white text-black">
            {/* <span class="text-gray-500">Men</span> */}
            <span class="text-lg font-bold lg:text-xl">{characterData.name}</span>
          </div>
        </a>
      </div>
    </>
  );
}

export function CharacterGallery() {
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Gallery
          </h2>

          <div class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
            {[...Array(32).keys()].map((x) => {
              return (
                <>
                  <CharacterGalleryItem />
                </>
              );
            })}
          </div>

          <div class="flex items-start justify-between gap-8 sm:items-center">
            <p class="max-w-screen-sm text-sm text-gray-500 lg:text-base">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>

            <a
              href="#"
              class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function CharacterGalleryItem() {
  return (
    <>
      <a
        href="#"
        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src="./img/character_arts/jun-fighter-select.webp"
          loading="lazy"
          alt="Jun Kazama"
          // style="width: 200px; height: 200px; object-position: 100% 0; object-fit: cover;"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          Jun Kazama
        </span>
      </a>
    </>
  );
}


export function CharacterGalleryV3() {
  return (
    <>

<div class="container flex flex-col items-center justify-center w-full mx-auto">
    <div class="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
        <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Character database
        </h3>
        <p class="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
            Details and informations about user.
        </p>
    </div>
    <ul class="flex flex-col">
        <li class="flex flex-row mb-2 border-gray-400">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" class="relative block">
                        <img alt="profil" src="/img/character_arts/jun-fighter-select.webp" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        Jean Marc
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-200">
                        Developer
                    </div>
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-200">
                    6:00 AM
                </div>
                <button class="flex justify-end w-24 text-right">
                    <svg width="12" fill="currentColor" height="12" class="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="flex flex-row mb-2 border-gray-400">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" class="relative block">
                        <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        Designer
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-200">
                        Charlie Moi
                    </div>
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-200">
                    6:00 AM
                </div>
                <button class="flex justify-end w-24 text-right">
                    <svg width="12" fill="currentColor" height="12" class="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="flex flex-row mb-2 border-gray-400">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" class="relative block">
                        <img alt="profil" src="/images/person/3.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        CEO
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-200">
                        Marine Jeanne
                    </div>
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-200">
                    6:00 AM
                </div>
                <button class="flex justify-end w-24 text-right">
                    <svg width="12" fill="currentColor" height="12" class="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="flex flex-row mb-2 border-gray-400">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" class="relative block">
                        <img alt="profil" src="/images/person/7.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        CTO
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-200">
                        Boby PArk
                    </div>
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-200">
                    6:00 AM
                </div>
                <button class="flex justify-end w-24 text-right">
                    <svg width="12" fill="currentColor" height="12" class="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
    </ul>
</div>

    </>
  )
}
