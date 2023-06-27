import '../assets/css/gpt.css';
import {TypeAnimation} from "react-type-animation";
import React, {useCallback, useEffect} from "react";
import {useTranslation} from "react-i18next";
import Question from "./Question";
import Answer from "./Answer";
import {IconBrandGithub, IconBrandLinkedin, IconMail} from "@tabler/icons-react";
import NavLink from "./NavLink";
const BchGpt = () => {
const { t } = useTranslation();
const chatInputRef = React.useRef<HTMLTextAreaElement | null>(null);

interface ISpeech {
    id:string;
    question: string;
    answer: string;
}

const [speechList, setSpeechList] = React.useState<ISpeech[]>([]);
const [isIntroDone, setIsIntroDone] = React.useState<boolean>(false);
const [isIntroChatDisplayDone, setIsIntroChatDisplayDone] = React.useState<boolean>(false);
const [isExperienceDone, setIsExperienceDone] = React.useState<boolean>(false);
const [isExperienceChatDisplayDone, setIsExperienceChatDisplayDone] = React.useState<boolean>(false);
const [isProjectDone, setIsProjectDone] = React.useState<boolean>(false);
const [isProjectChatDisplayDone, setIsProjectChatDisplayDone] = React.useState<boolean>(false);
const [isHumanbeingDone, setIsHumanbeingDone] = React.useState<boolean>(false);
const [isHumanbeingChatDisplayDone, setIsHumanbeingChatDisplayDone] = React.useState<boolean>(false);
const [isContactDone, setIsContactDone] = React.useState<boolean>(false);
const [isContactChatDisplayDone, setIsContactChatDisplayDone] = React.useState<boolean>(false);

useEffect(() => {
    if(speechList.length > 0) return;
    const categoriesUnserialized = t('gptbch.speech', {returnObjects: true}) as ISpeech[];
    setSpeechList(categoriesUnserialized);
}, [t, speechList]);

const updateIntroChatDisplay = useCallback(() => {
    setIsIntroChatDisplayDone(true);

}, [setIsIntroChatDisplayDone]);

const updateExperienceChatDisplay = useCallback(() => {
    setIsExperienceChatDisplayDone(true);
}, [setIsExperienceChatDisplayDone]);

const updateProjectChatDisplay = useCallback(() => {
    setIsProjectChatDisplayDone(true);
}, [setIsProjectChatDisplayDone]);

const updateHumanbeingChatDisplay = useCallback(() => {
    setIsHumanbeingChatDisplayDone(true);
}, [setIsHumanbeingChatDisplayDone]);

const updateContactChatDisplay = useCallback(() => {
    setIsContactChatDisplayDone(true);
}, [setIsContactChatDisplayDone]);

useEffect(() => {
    //do something when everything is done
}, [isContactChatDisplayDone]);

return (
    <div className={'main h-screen w-screen flex flex-row'}>
        <div className={'left-menu lg:w-1/6 lg:h-full lg:inline-block lg:bg-[#202123]'}>
            <div className={'lg:flex lg:flex-col lg:h-full'}>
                {/*On top part we will have the name*/}
                <h1 className={'lg:text-gray-100 lg:font-bold font-roboto uppercase lg:text-center lg:text-xl lg:pt-5'}>Bastien Chies</h1>
                {/*In body part we will have the listing of category as a list which can be clicked and which scroll to anchor*/}
                <div className={'lg:flex lg:flex-col lg:h-full lg:justify-between'}>
                    <div className={'lg:mt-10'}>
                        <ul className={'lg:text-gray-400 lg:font-bold font-roboto uppercase lg:text-center lg:text-xl lg:pt-5 lg:m-2'}>
                            {isIntroChatDisplayDone && <NavLink id={speechList[0].id} label={'Intro'}/>}
                            {isExperienceChatDisplayDone && <NavLink id={speechList[1].id} label={'Experience'}/>}
                            {isProjectChatDisplayDone && <NavLink id={speechList[2].id} label={'Projects'}/>}
                            {isHumanbeingChatDisplayDone && <NavLink id={speechList[3].id} label={'Human being'}/>}
                            {isContactChatDisplayDone && <NavLink id={speechList[4].id} label={'Contact'}/>}
                        </ul>
                    </div>
                    {/*In bottom part we will have the social media links*/}
                    <div className={'lg:mt-10 lg:border-t border-gray-400 lg:m-2'}>
                        <ul className={'lg:text-white font-roboto lg:text-left lg:text-sm lg:pt-5'}>
                            <a href={'https://www.linkedin.com/in/bastien-chies/'} target={'_blank'} rel={'noreferrer'}>
                                <li className={'lg:py-2 lg:px-4 lg:cursor-pointer lg:hover:bg-[#343541] lg:rounded-lg lg:my-2'}>
                                    <IconBrandLinkedin className={'inline-block h-5 w-5 text-gray-300'} stroke={'currentColor'} strokeWidth={2}/>
                                    <span className={'align-middle lg:pl-2'}>Linkedin</span>
                                </li>
                            </a>
                            <a href={'https://github.com/BastienChs/'} target={'_blank'} rel={'noreferrer'}>
                                <li className={'lg:py-2 lg:px-4 lg:cursor-pointer lg:hover:bg-[#343541] lg:rounded-lg lg:my-2'}>
                                        <IconBrandGithub className={'inline-block h-5 w-5 text-gray-300'} stroke={'currentColor'} strokeWidth={2}/>
                                        <span className={'align-middle lg:pl-2'}>Github</span>
                                </li>
                            </a>
                            <a href={'mailto:bastien.chies@gmail.com'} target={'_blank'} rel={'noreferrer'}>
                                <li className={'lg:py-2 lg:px-4 lg:cursor-pointer lg:hover:bg-[#343541] lg:rounded-lg lg:my-2'}>
                                        <IconMail className={'inline-block h-5 w-5 text-gray-300'} stroke={'currentColor'} strokeWidth={2}/>
                                        <span className={'align-middle lg:pl-2'}>Mail</span>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={'chat-window flex flex-col items-stretch lg:w-5/6 lg:h-full lg:inline-block'}>
            <div className={'chat-body lg:rounded-xl lg:h-3/4 lg:mx-auto lg:w-full overflow-auto scroll-smooth'} id={'chat-body'}>
                {speechList.length > 0 && (<>
                    <Question id={speechList[0].id} questionString={speechList[0].question} isVisible={isIntroDone}/>
                    <Answer answerString={speechList[0].answer} isVisible={isIntroDone} updateCallbackFunction={updateIntroChatDisplay}/>

                    <Question id={speechList[1].id} questionString={speechList[1].question} isVisible={isExperienceDone}/>
                    <Answer answerString={speechList[1].answer} isVisible={isExperienceDone} updateCallbackFunction={updateExperienceChatDisplay}/>

                    <Question id={speechList[2].id} questionString={speechList[2].question} isVisible={isProjectDone}/>
                    <Answer answerString={speechList[2].answer} isVisible={isProjectDone} updateCallbackFunction={updateProjectChatDisplay}/>

                    <Question id={speechList[3].id} questionString={speechList[3].question} isVisible={isHumanbeingDone}/>
                    <Answer answerString={speechList[3].answer} isVisible={isHumanbeingDone} updateCallbackFunction={updateHumanbeingChatDisplay}/>

                    <Question id={speechList[4].id} questionString={speechList[4].question} isVisible={isContactDone}/>
                    <Answer answerString={speechList[4].answer} isVisible={isContactDone} updateCallbackFunction={updateContactChatDisplay}/>
                </>)}
            </div>
            <div className={'chat-footer lg:h-1/4 lg:w-3/4 lg:mx-auto flex flex-col place-content-end'}>
                <div className={'chat-bar lg:mx-auto lg:h-fit lg:w-full lg:pb-10'} id={'char-bar'}>
                    <div className={'flex flex-row chat-input lg:rounded-xl relative'} style={{minHeight: '48px'}}>
                        {speechList.length > 0 && !isIntroDone && <TypeAnimation ref={chatInputRef} sequence={[speechList[0].question, 1000, () => {setIsIntroDone(true)},1000]} speed={90}
                                        className={'inline-block resize w-full chat-input lg:rounded-xl lg:w-11/12 lg:p-4 text-white focus:outline-none float-left'}
                                        repeat={1}/>}
                        {isIntroChatDisplayDone && !isExperienceDone && <TypeAnimation ref={chatInputRef} sequence={[1000, speechList[1].question, 1000, () => {setIsExperienceDone(true)}, 1000]} speed={90}
                                                                 className={'inline-block resize w-full chat-input lg:rounded-xl lg:w-11/12 lg:p-4 text-white focus:outline-none'}
                                                                 repeat={1}/>}
                        {isExperienceChatDisplayDone && !isProjectDone && <TypeAnimation ref={chatInputRef} sequence={[1000, speechList[2].question, 1000, () => {setIsProjectDone(true)}, 1000]} speed={90}
                                                       className={'inline-block resize w-full chat-input lg:rounded-xl lg:w-11/12 lg:p-4 text-white focus:outline-none'}
                                                       repeat={1}/>}
                        {isProjectChatDisplayDone && !isHumanbeingDone && <TypeAnimation ref={chatInputRef} sequence={[1000, speechList[3].question, 1000, () => {setIsHumanbeingDone(true)}, 1000]} speed={90}
                                                            className={'inline-block resize w-full chat-input lg:rounded-xl lg:w-11/12 lg:p-4 text-white focus:outline-none'}
                                                            repeat={1}/>}
                        {isHumanbeingChatDisplayDone && !isContactDone && <TypeAnimation ref={chatInputRef} sequence={[1000, speechList[4].question, 1000, () => {setIsContactDone(true)}, 1000]} speed={90}
                                                            className={'inline-block resize w-full chat-input lg:rounded-xl lg:w-11/12 lg:p-4 text-white focus:outline-none'}
                                                            repeat={1}/>}
                        <button className={'lg:inline-block h-full my-auto mr-4 text-green-600 float-right mx-auto'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                    <span className={'text-xs warning align-middle text-center'}>If you wanted to use ChatGPT you're on the wrong place, however if you're searching a passionate developer, you just found it.</span>
                </div>
            </div>
        </div>
    </div>
    )
}
export default BchGpt;
