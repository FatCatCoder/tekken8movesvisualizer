import { useEffect, useState, useRef, useContext } from 'preact/hooks';
import {ComboVisual } from './ComboVisual'
import { ComboList, ComboListItem } from './ComboList';

export function ComboInput() {
    const [input, setInput] = useState('');
    const [comboList, setComboList] = useState([]);

    function saveCombo() {
      let combos =[...comboList, {
        name: "",
        Command: input
      }]

      setComboList(combos)

      localStorage.setItem("combos", JSON.stringify(combos))
    }

    function clearSavedCombos() {
      setComboList([])
      localStorage.clear()
    }

    useEffect(() => {
      let combos = localStorage.getItem("combos")
      setComboList(combos == null ? [] : JSON.parse(combos))
    }, [])

    return(
        <>
        <div className="px-24 mb-12">
              <label
                for="comboInput"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Combo Input: 
                <span>
                <button onClick={saveCombo} type="button" class="p-2 ml-2 mb-2 float-right bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Save
                </button>
                </span>
                <span>
                <button onClick={clearSavedCombos} type="button" class="p-2 ml-2 mb-2 float-right bg-red-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Clear
                </button>
                </span>

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
                  placeholder="f2, 1, 3+4"
                />
              </div>

              <ComboVisual input={input} />
            </div>

            <ul class="flex flex-col w-full rounded-md shadow">
            {comboList.map((x) => {
              return (
                <>
                  <ComboListItem combo={x} fighter={null} />
                </>
              );
            })}
          </ul>

        </>
    )
}