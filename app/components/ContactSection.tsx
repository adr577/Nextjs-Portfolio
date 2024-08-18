"use client"
import React, { useState } from 'react'
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link"
import ContactForm from './ContactForm';

const ContactSection = () => {
    




  return (
      <section className=' mt-8 sm:mt-12 md:mt-16'>
          <div className='flex flex-col items-center justify-center min-h-screen p-10 md:p-16 xl:p-28 '>
              <div className='flex flex-col text-center justify-center items-center gap-y-4  mb-8 md:mb-10'>
                  <h2 className='text-4xl sm:text-4xl md:text-5xl font-bold mb-2'>
                      Let&apos;s {" "}
                      <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00F260] to-[#0575E6]'>Connect</span>
                  </h2>
                  <span className='flex gap-x-6 mb-2'>
                      <Link href={"www.linkedin.com/in/adrianhernandez577"} target='_blank'><FaLinkedin size={30} className='cursor-pointer' /></Link>
                      <FaDiscord size={30} className='cursor-pointer' />
                      <Link href={"https://github.com/adr577"} target='_blank'><FaGithub size={30} /></Link>

                  </span>
                  <p className='text-md md:text-lg '>
                      I&apos;m always excited to connect with other students, developers, and creatives who are passionate about tech and innovation.
                      Whether you have a cool project idea, need help with coding,
                      or just want to brainstorm ideas, I&apos;m open to collaborating and learning together.
                  </p>

              </div>

              <div className='container flex items-center justify-center '>
                  <ContactForm />
              </div>
          </div>
      </section>
  )
}

export default ContactSection
