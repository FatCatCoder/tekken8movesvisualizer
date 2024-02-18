import { ComboVisual } from './ComboVisual'

export function ComboList({ comboList }) {
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
              <ComboVisual input={combo.Command} />
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-200">
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
  