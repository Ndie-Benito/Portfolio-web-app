import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_l2vypdm', 'template_djx9bi4', form.current, 'RTUqEQM-PCn2lwuB4')
   e.target.reset()
  }


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>benitondie47@gmail.com</h5>
            <a href="mailto:benitondie47@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>benitondie47@gmail.com</h5>
            <a href="https://m.me/ndie.benito" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+237 652431974</h5>
            <a href="https://api.whatsapp.com/send?phone=652431974" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" id="email" placeholder='Your Email' required />
          <textarea name="message" id="message" rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact

