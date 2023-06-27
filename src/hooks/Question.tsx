import HRIcon from "../components/HRIcon";

const Question = ({questionString, isVisible, id}: {questionString: string, isVisible: boolean, id:string}) => {
  return(
      <>
          {
              isVisible ?
                  <div id={id} className={'w-full text-gray-100 border-b border-gray-900/50 bg-[#343541]'}>
                      <div
                          className={'flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto'}>
                          <HRIcon/>
                          <p className={'inline-block text-justify'}>{questionString}</p>
                      </div>
                  </div>
                  : <></>
          }
      </>
  )
}
export default Question;
