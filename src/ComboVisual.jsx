import { useEffect, useState, useRef, useContext } from 'preact/hooks';
import SVG from 'react-inlinesvg';
import list from './list.json';

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
  
    /** Creates combo images from the user input */
    function createImage() {
      let comboInput = getInputFromRegex();
      let localImg = [];
  
      if (true) {
        for (let i = 0; i < comboInput.length; i++) {
          for (let key in list['tekken']) {
            for (let j = 0; j < list['tekken'][key].term.length; j++) {
              if (list['tekken'][key].term[j] === comboInput[i]) {
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
                {console.log(x)}
                <SVG src={x.replace("./", window.location.origin + "/tekken8movesvisualizer/")} />
              </div>
            </>
          ))}
        </div>
      </>
    );
  }