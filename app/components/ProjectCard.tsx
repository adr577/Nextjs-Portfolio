"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { FaCode } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    img: string;
    des: string;
    repo: string;
    icons: React.ElementType[];
}


export const ProjectCard: React.FC<ProjectCardProps> = ({title, img, des, repo, icons}) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-stone-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-stone-300 dark:text-white m-auto"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-stone-400"
                >
                    {des}
                </CardItem>
                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                >
                    <a href={repo} target="_blank"><Image
                        src={img}
                        height="500"
                        width="500"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                        alt="thumbnail"
                    /></a>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex gap-x-4"
                    >
                        {icons.map((Icon: React.ElementType, index: number) => (
                            
                            <Icon key={index} size={20} />
                            
                        ))}
                    </CardItem>
                    <a href={repo} target="_blank"><CardItem
                        translateZ={20}
                        translateX={40}
                        
                        className="px-4 py-2 rounded-xl bg-stone-900 dark:bg-white dark:text-black text-stone-100 text-xs font-bold flex gap-x-2 items-center cursor-pointer"
                    >
                        Repo
                        <span><FaCode /></span>
                    </CardItem></a>
                </div>
            </CardBody>
        </CardContainer>
    );
}
