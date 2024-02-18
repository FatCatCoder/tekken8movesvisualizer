import { useEffect, useState, useRef, useContext } from 'preact/hooks';
import { Store, StoreContext } from './StoreContext';

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
  return (
    <>
      <div class="shadow-xl">
        <a
          href="#"
          class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
        >
          <img
            src="./img/character_arts/jun-fighter-select.webp"
            loading="lazy"
            alt="Photo by Austin Wade"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div class="relative flex w-full flex-col rounded-lg p-4 text-center backdrop-blur-sm">
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
