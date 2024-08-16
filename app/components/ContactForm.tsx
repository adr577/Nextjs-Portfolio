import React from 'react'
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const ContactForm = () => {
  return (
      <section className=' mt-8 sm:mt-12 md:mt-16'>
          <div className='flex flex-col items-center justify-center min-h-screen p-10 md:p-16 xl:p-28'>
              <div className='flex flex-col text-center justify-center items-center gap-y-4  mb-2 md:mb-4'>
                  <h2 className='text-4xl sm:text-4xl md:text-5xl font-bold mb-2'>
                      Let&apos;s {" "}
                      <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00F260] to-[#0575E6]'>Connect</span>
                  </h2>
                  <span className='flex gap-x-3 mb-2'>
                      <FaLinkedin size={30} className='cursor-pointer' />
                      <FaDiscord size={30} className='cursor-pointer' />

                  </span>
                  <p className='text-md md:text-lg '>
                      I&apos;m always excited to connect with other students, developers, and creatives who are passionate about tech and innovation.
                      Whether you have a cool project idea, need help with coding,
                      or just want to brainstorm ideas, I&apos;m open to collaborating and learning together.
                  </p>

              </div>

              <div className='container flex items-center justify-center'>
                  <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-lg sm:w-3/4 md:w-1/2 text-stone-800 w-full max-w-lg'>
                      
                    <div className='col-span-1'>
                          <label htmlFor="firstName" className='block text-sm text-stone-300 mb-1'>First Name</label>
                          <input type="text" id="firstName" name="user_name" placeholder="Jake" className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500' />
                      </div>
                      
                      <div className='col-span-1'>
                          <label htmlFor="lastName" className='block text-sm text-stone-300 mb-1'>Last Name</label>
                          <input type="text" id="lastName" name="user_lastName" placeholder="Gatlin" className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500' />
                      </div>
                   
                      <div className='col-span-1'>
                          <label htmlFor="email" className='block text-sm text-stone-300 mb-1'>Your email</label>
                          <input type="email" name="user_email" id="email" required placeholder="jake@google.com" className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500" />
                      </div>

                      <div className='col-span-1'>
                          <label htmlFor="phoneNumber" className='block text-sm text-stone-300 mb-1'>Your phone number</label>
                          <input type="number" min="10" max="10" name="phone_number" id="phoneNumber" placeholder="phone no" className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500'/>
                      </div>
                      
                      <div className=" col-span-1 sm:col-span-2">
                          <label htmlFor="msg" className='block text-sm text-stone-300 mb-1'>Message</label>
                          <textarea id="msg" name="user_message" className='w-full rounded-lg h-40 focus:outline-none focus:ring-4 focus:ring-stone-500'></textarea>
                      </div>

                      <div className='col-span-1 sm:col-span-2'>
                          <button className='border-2 text-left bg-stone-200 text-md text-stone-900 px-5 py-2 rounded-lg hover:bg-transparent hover:text-stone-200 hover:border-2 hover:border-stone-200'>Submit</button>
                      </div>


            
                  </form>
              </div>
          </div>
      </section>
  )
}

export default ContactForm
