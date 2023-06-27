import {motion} from "framer-motion";
import React from "react";

const NavLinkMobile = ({id, label, onClick} : {id: string, label:string, onClick: () => void}) => {
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
                <a href={`#${id}`} onClick={onClick}
                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                    {label}
                </a>
        </motion.div>
    )
}
export default NavLinkMobile;
