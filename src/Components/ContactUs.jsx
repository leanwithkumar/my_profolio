import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p75y6o9', 'template_c7n8j5p', form.current, {
        publicKey: 'uE1hpIpp2t88IuZ3N',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className='bg-[#272930]'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='grid gap-4 md:grid-cols-1 p-5'>
            <input
              type="text"
              name="user_name"
              placeholder='Your Name'
              className='p-3 bg-[#272930] border border-white rounded-md text-white'
            />
            <input
              type="email"
              name="user_email"
              placeholder='Your Email'
              className='p-3 bg-[#272930] border border-white rounded-md text-white'
            />
            <textarea
              name="message"
              placeholder='Message'
              rows="6"
              className='p-2 bg-[#272930] border border-white rounded-md text-white resize-none'
            />
            <input
              type="submit"
              value="Send"
              className='p-2 w-24 bg-white text-[#272930]  border border-white rounded-md cursor-pointerbg-[#2C2C6C] hover:text-white hover:bg-[#272930] cursor-pointer transition-colors duration-900'
            />
          </div>
        </form>
      </div>
    </>
  );
};
