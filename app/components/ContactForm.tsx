import React from 'react'
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const ContactForm = () => {
  return (
      <section className=''>
          <div className='flex flex-col items-center justify-center min-h-screen p-10 md:p-16 xl:p-28'>
              <div className='flex flex-col text-center justify-center items-center gap-y-4'>
                  <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                      Let's {" "}
                      <span>Connect</span>
                  </h2>
                  <span className='flex gap-x-3'>
                      <FaLinkedin size={30} />
                      <FaDiscord size={30} />

                  </span>
                  <p className=' text-md md:text-lg'>
                      Im always excited to connect with other students, developers, and creatives who are passionate about tech and innovation.
                      Whether you have a cool project idea, need help with coding,
                      or just want to brainstorm ideas, I’m open to collaborating and learning together.
                  </p>

              </div>

              <form>

              </form>
          </div>
      </section>
  )
}

export default ContactForm
