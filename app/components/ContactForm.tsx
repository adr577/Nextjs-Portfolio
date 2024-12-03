"use client"
import React from 'react'
import { useState } from 'react'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = async (e) => {
        e.preventDefault();

        console.log('submitted')

        const form = e.target as HTMLFormElement;


        const data = {
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        }

        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send";

        const options = {

            method: "POST",

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSONdata,
        
        }

        try {
            const response = await fetch(endpoint, options)
            // Check if the response body is not empty before parsing
            const resText = await response.text();
            const resData = resText ? JSON.parse(resText) : null;

            console.log(resData)

            if (response.status === 200) {
                console.log('Message sent.')
                setFormData({
                    email: '',
                    subject: '',
                    message: '',
                }); // This resets the form fields after successful submission

                setFormSubmitted(!formSubmitted)

            }
        } catch (error) {
            console.error('Error', error)
        }

    
       

        
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    return (
      
        
        <form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-lg sm:w-3/4 md:w-1/2 text-stone-800 w-full max-w-lg border-2 border-stone-800 bg-stone-950'>
            
            <div className='col-span-1'>
                <label htmlFor="subject" className='block text-sm text-stone-300 mb-1'>Subject</label>
                <input type="text" value={formData.subject}
                    onChange={handleChange} name="subject" id="subject" required placeholder="Subject" className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500" />
            </div>


          <div className='col-span-1'>
              <label htmlFor="email" className='block text-sm text-stone-300 mb-1'>Your email</label>
                <input type="email" value={formData.email}
                    onChange={handleChange} name="email" id="email" required placeholder="jake@google.com" className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500" />
          </div>


          <div className=" col-span-1 sm:col-span-2">
              <label htmlFor="message" className='block text-sm text-stone-300 mb-1'>Message</label>
                <textarea id="message" value={formData.message}
                    onChange={handleChange} name="message" className='w-full rounded-lg h-40 focus:outline-none focus:ring-4 focus:ring-stone-500' placeholder="Just saying hi" required></textarea>
          </div>

          <div className='col-span-1 sm:col-span-2'>
              <button type="submit" className='border-2 text-left bg-stone-200 text-md text-stone-900 px-5 py-2 rounded-lg hover:bg-transparent hover:text-stone-200 hover:border-2 hover:border-stone-200'>Submit</button>
            </div>

            {formSubmitted && <p className='text-green-700 font-bold text-md text-nowrap'>Thank you for reaching out !</p>}
            




      </form>
  )
}

export default ContactForm



/* 
<form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-lg sm:w-3/4 md:w-1/2 text-stone-800 w-full max-w-lg border-2 border-stone-800 bg-stone-950'>

          <div className='col-span-1'>
              <label htmlFor="firstName" className='block text-sm text-stone-300 mb-1'>First Name</label>
              <input  type="text" id="firstName" name="firstName" placeholder="Jake" className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500' />
          </div>

          <div className='col-span-1'>
              <label htmlFor="lastName" className='block text-sm text-stone-300 mb-1'>Last Name</label>
              <input  type="text" id="lastName" name="lastName" placeholder="Gatlin" className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500' />
          </div>

          <div className='col-span-1'>
              <label htmlFor="email" className='block text-sm text-stone-300 mb-1'>Your email</label>
              <input  type="email" name="email" id="email" required placeholder="jake@google.com" className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500" />
          </div>

          <div className='col-span-1'>
              <label htmlFor="phoneNumber" className='block text-sm text-stone-300 mb-1'>Your phone number</label>
              <input  type="number" min="10" max="10" name="phonenumber" id="phoneNumber" placeholder="phone no" className='w-full rounded-lg px-3 py-2 focus:outline-none focus:ring-4 focus:ring-stone-500' />
          </div>

          <div className=" col-span-1 sm:col-span-2">
              <label htmlFor="msg" className='block text-sm text-stone-300 mb-1'>Message</label>
              <textarea  id="msg" name="message" className='w-full rounded-lg h-40 focus:outline-none focus:ring-4 focus:ring-stone-500' placeholder="Just saying hi" required></textarea>
          </div>

          <div className='col-span-1 sm:col-span-2'>
              <button className='border-2 text-left bg-stone-200 text-md text-stone-900 px-5 py-2 rounded-lg hover:bg-transparent hover:text-stone-200 hover:border-2 hover:border-stone-200'>Submit</button>
          </div>
</form>

*/

