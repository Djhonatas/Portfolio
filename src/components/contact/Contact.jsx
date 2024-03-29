import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zptyv9l', 'template_5h4nzuw', form.current, 'YQd8FUUjJXxtVM8gf').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset('')
  };

  return (
    <section id='contact'>

      <h2 style={{ color: 'white' }}>Meu Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>dj.assuntospessoais@gmail.com</h6>
            <a href="mailto:dj.assuntospessoais@gmail.com" target='_blank' rel="noreferrer">Envie sua mensagem</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Mensagem</h4>
            <h5>Djhonatas Oliveira</h5>
            <a href="https://m.me/oliveira.djhonatas" target='_blank' rel="noreferrer">Envie sua mensagem</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 11 99306-3466 </h5>
            <a href="https://api.whatsapp.com/send?phone=5511993063466" target='_blank' rel="noreferrer">Envie sua mensagem</a>
          </article>

        </div>
        {/*END OF CONTACT  OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome' required />
          <input type="email" name="email" placeholder='Seu Email' required />
          <textarea name="message" rows="10" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact