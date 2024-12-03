"use client";

import React from 'react';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { TabButton } from './TabButton';

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React.js . Next.js</li>
                <li>HTML/CSS</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>Assembly</li>
                <>Algorithm Design & Analysis(C++)</>
            </ul>
        )
    },

    {
        title: "experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Student in Software Development(Bay Valley Tech)</li>
                <li>Undergrad student web designer(UC Merced)</li>
                <li>Raleys Merced</li>
                <li>Nasa space apps member</li>
                

            </ul>
        )
    },

    {
        title: "education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>BoS in Computer Science (2026)</li>
                <li>
                    <p className='font-bold mr-1'>Relevant coursework:</p>
                    <span className='font-normal'>
                        Data Structures, probability, 
                        Discrete math, Multivariable calculus, Linear algebra & diff equations, algorithm designs
                    </span>

                </li>
            </ul>
        )
    },


]

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const tab = TAB_DATA.find((t) => t.id === activeTab)


    const handleTabChange = (id: string) => {
        startTransition(() => {
            setActiveTab(id)
        })
    }

    return (
        <section className="text-stone-200 mb-24 ">
            <div className='md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 rounded-lg m-h-screen text-center'>
                <div className=''>
                    <Image src="/images/self-portrait2.JPG"
                        alt="self"
                        width={256}
                        height={256}
                        className='bg-slate-500 rounded-lg  m-auto w-full max-w-xs transition-shadow duration-300 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]'
                    />

                </div>
                    


                
                <div className='mt-8 md:mt-0 text-left flex flex-col '>
                    <p className='text-md lg:text-lg text-stone-500 mb-2 text-center md:text-left'>Get to know</p>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center md:text-left'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full time student with a passion for learning and exploring the world of programming.
                        I have experience working with React, JavaScript, Node.js, C/MIPS, C++, HTML, CSS. I am always looking for
                        opportunities to expand my skills and knowledge. Also, I love working in team based projects.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={activeTab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>


                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={activeTab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={activeTab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8 pl-2'>{tab ? tab.content : null}</div>
                </div>
            </div>



        </section>
    )
}

export default AboutSection
