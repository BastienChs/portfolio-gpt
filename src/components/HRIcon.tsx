import React from "react";

class HRIcon extends React.Component {
    render(){
        return(
            <div className={'flex-shrink-0 flex flex-col relative items-end'}>
                <div className={'w-[30px]'}>
                    <span className={'h-16 w-16 p-2 bg-teal-600 text-white rounded-sm'}>HR</span>
                </div>
            </div>
        )
    }
}
export default HRIcon;
