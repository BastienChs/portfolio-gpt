import {TypeAnimation} from "react-type-animation";
import AIICon from "../components/AIICon";
import React, {useCallback} from "react";

const Answer = ({answerString, isVisible, updateCallbackFunction}: {answerString: string, isVisible: boolean, updateCallbackFunction: () => void}) => {
    const ref = React.createRef<HTMLSpanElement>();
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const showCursorAnimation = useCallback((show: boolean) => {
        if (!ref.current) {
            return;
        }

        const el = ref.current;
        if (show) {
            el.classList.add(CURSOR_CLASS_NAME);
        } else {
            el.classList.remove(CURSOR_CLASS_NAME);
        }
    }, [ref]);

    const handleAnimationEnd = useCallback(() => {
        showCursorAnimation(false);
        updateCallbackFunction();
    },[showCursorAnimation, updateCallbackFunction]);

    return(
      <>
          {isVisible ?
              <div className={'w-full text-gray-100 border-b border-gray-900/50 bg-[#444654]'}>
                  <div
                      className={'flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto'}>
                      <AIICon/>
                      <TypeAnimation ref={ref} sequence={[1000, answerString, () => handleAnimationEnd()]} wrapper="p" cursor={false} className={`${CURSOR_CLASS_NAME} inline-block text-justify`} speed={90}/>
                  </div>
              </div>
              : <></>}
      </>
  )
}
export default Answer;
