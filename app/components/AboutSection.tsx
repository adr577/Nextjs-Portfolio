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
                <li>React.js</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>Assembly</li>
                <li>Data Structures</li>

            </ul>
        )
    },

    {
        title: "experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Intern in Software Development</li>
                <li>Undergrad student assistant</li>
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
        <section className="text-stone-200 mb-24">
            <div className='md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 rounded-lg '>
                <div className=''>
                    <Image src="/images/self-portrait.jpg"
                        alt="self"
                        width={256}
                        height={256}
                        className='bg-slate-500 rounded-lg  m-auto w-full max-w-xs'
                    />

                </div>
                    


                
                <div className='mt-4 md:mt-0 text-left flex flex-col '>
                    <p className='text-sm text-stone-500 mb-2 text-center md:text-left'>Get to know</p>
                    <h2 className='text-4xl font-bold mb-4 text-center md:text-left'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full time student with a passion for creating interactive and responsive web applications.
                        I have experience working with React, JavaScript, Node.js, Git, HTML, CSS. I am always looking for
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
