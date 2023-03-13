import React from 'react'
import './contact.scss'
import phone from '../../img/Phone.png'
import clock from '../../img/Clock.png'
import whatsapp from '../../img/WhatsApp.png'
import envelope from '../../img/Envelope.png'
function Contact() {
  return (
    <>
     <section className="carusel">
        <h1>Əlaqə</h1>
      </section>
      <section  className='contact_bigdiv'>
        <div className='contact_info_div'>
            <h2>Əlaqə Məlumatları</h2>
            <div className='contact_info_div_icon'>
                <div className='contact_info_div_phone'>
                    <img src={phone}/>
                    <span>+994 50 342 15 58</span>
            
                </div>
                <div className='contact_info_div_whatsapp'>
                    <img src={whatsapp}/>
                    <span>+994 50 342 15 58</span>
            
                </div>
                <div className='contact_info_div_clock'>
                    <img src={clock}/>
                    <span>B.E-C 9:00 18:30</span>
            
                </div>
                <div className='contact_info_div_envelope'>
                    <img src={envelope}/>
                    <span>4you@mail.ru</span>
            
                </div>

            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

        </div>
        <div className='contact_letter_div'>
            <h2>
            Məktub Göndər
           
            </h2>
            <form className='contact_letter_form'>
                <input type='text' placeholder='Ad ,Soyad'/>
                <input type='email' placeholder='E-mail'/>
                <textarea placeholder='Məktub'>

                </textarea>
               <div>
               <button>Göndər</button>
               </div>
            </form>

        </div>

      </section>
    
    
    </>
  )
}

export default Contact