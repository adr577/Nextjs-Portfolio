"use client"
import React from 'react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import Image from "next/image"
import Link from "next/link"

export const Hero = () => {

  return (
        <section className = "hero sm:px-8 lg:py-16  md:px-16  flex flex-col justify-center items-center text-stone-200 h-screen" >


            <div className="grid grid-cols-1 sm:grid-cols-12 ">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className='text-5xl lg:text-7xl sm:text-5xl md:text-6xl font-extrabold mb-4'>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F260] to-[#0575E6]">
                            Hello, I&rsquo;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Adrian",
                                1000,
                                "a Student",
                                1000,
                                "a Web Developer",
                                1000,
                                "a Software Engineer",
                                1000,
                            ]}

                            wrapper="span"
                            speed={30}
                          repeat={Infinity}
                        />

                    </h1>
                    <p className='text-lg lg:text-xl mb-6 text-wrap'>21 year old future software engineer {" "} and JavaScript enthusiast</p>

                  <div className='text-stone-100'>
                      <Link
                          href="/#projects">
                          <motion.button
                              whileHover={{
                                  scale: 1.07,

                              }}
                              whileTap={{ scale: 0.9 }}
                              className='px-7 py-4 w-full sm:w-fit rounded-lg mr-4  bg-gradient-to-r from-[#00F260] to-[#0575E6] mb-3 hover:rounded-lg'>Projects
                          </motion.button>
                          
                      </Link>
                      <Link
                          href="/contact">
                          <motion.button
                              whileHover={{ scale: 1.07 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-[3px] relative w-full sm:w-fit ">
                              <div className="absolute inset-0 bg-gradient-to-r from-[#00F260] to-[#0575E6] rounded-lg" />
                              <div className="px-6 py-3 bg-stone-950 rounded-lg  relative group transition duration-200  hover:bg-transparent">
                                  Hire Me
                              </div>
                          </motion.button>
                      
                      </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className='rounded-full bg-stone-900 w-[300px] h-[300px] lg:h-[400px] lg:w-[400px] relative hidden sm:block'>
                        <Image
                            src='/images/file.png'
                            alt="hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={348}
                            height={348}
                        />
                    </div>
                </motion.div>
            </div>
      </section>
  )
}

export default Hero

    
  



 