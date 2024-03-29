import { ComboVisual } from './ComboVisual'
import { Store, StoreContext } from './StoreContext';
import { useEffect, useState, useRef, useContext } from 'preact/hooks';

export function ComboList({ comboList, fighterName }) {
  const GlobalStore = useContext(StoreContext);
  const fighter = fighterName == null? "": GlobalStore.characterData.find(x => x.name.includes(fighterName))
    return (
      <>
        <div class="container flex flex-col items-center justify-center w-full mx-auto">
          <div class="w-full px-4 py-5 mb-2 border rounded-md shadow sm:px-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              {fighterName} Combo Database {fighter?.name}
            </h3>
            <p class="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
              Details and information about Jun's Strings.
            </p>
          </div>
          <ul class="flex flex-col w-full rounded-md shadow">
            {comboList.map((x) => {
              return (
                <>
                  <ComboListItem combo={x} fighter={fighter} />
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  

export function ComboListItem({ combo, fighter }) {
    return (
      <li class="flex flex-row mb-2 border-gray-400" style={"max-width: 100%;overflow: scroll;"}>
        <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
        {
            fighter == null || fighter == ""?
            <></>:
            <>
              <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                <a href="#" class="relative block">
                  <img
                    alt="profil"
                    src={window.location.protocol + "//" + window.location.host + "/img/character_arts/" + fighter.portaraitImg}
                    class="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
            </>
          }
          <div class="flex-1 pl-1 md:mr-16">
            <div class="font-medium dark:text-white">
              <ComboVisual input={combo.Command} />
            </div>
            <div class="text-sm text-black dark:text-gray-800">
              {combo.name}
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