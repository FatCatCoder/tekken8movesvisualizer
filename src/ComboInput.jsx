import { useEffect, useState, useRef, useContext } from 'preact/hooks';

export function ComboInput() {
    const [input, setInput] = useState('');

    return(
        <>
        <div className="px-24 mb-12">
              <label
                for="comboInput"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Combo Input:
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
              <ComboVisual input={input} />
            </div>
        </>
    )
}