import React, { ReactNode } from 'react'
import { motion } from "framer-motion"



interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem" },
}


export const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-stone-500 ' : 'text-stone-300'



    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-stone-600 ${buttonClasses} cursor-pointer`}>
                {children}
            </p>

            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-stone-200 mt-2 mr-3"
            ></motion.div>

        </button>
    )
}
