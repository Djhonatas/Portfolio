import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehuoqri', 'template_6188wxi', form.current, '2n0tSd5WqL4rP6Tvl')

    e.target.reset('')
  };

  return (
    <section id='contact'>
      <h5>Entre em Contato</h5>
      <h2>Meu Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dj.assuntospessoais@gmail.com</h5>
            <a href="mailto:dj.assuntospessoais@gmail.com" target='_blank'>Envie sua mensagem</a>
          </article>

          <article className="contact__option">
          <BsMessenger className='contact__option-icon'/>
            <h4>Mensagem</h4>
            <h5>Djhonatas Oliveira</h5>
            <a href="https://m.me/oliveira.djhonatas" target='_blank'>Envie sua mensagem</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 11 99306-3466 </h5>
            <a href="https://api.whatsapp.com/send?phone=5511993063466" target='_blank'>Envie sua mensagem</a>
          </article>

        </div>
        {/*END OF CONTACT  OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='' placeholder='Seu Nome' required/>
          <input type="email" name="email" placeholder='Seu Email' required/>
          <textarea name="mensagem" rows="10" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact