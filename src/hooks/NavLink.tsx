import {motion} from "framer-motion";
import React from "react";

const NavLink = ({id, label} : {id: string, label:string}) => {
    return (
        <motion.div
        className={'box'}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
        <a href={`#${id}`}>
            <li className={'lg:py-2 lg:px-4 lg:cursor-pointer lg:hover:bg-[#343541] lg:rounded-lg lg:my-2'}>
                {label}
            </li>
        </a>
    </motion.div>
    )
}
export default NavLink;
