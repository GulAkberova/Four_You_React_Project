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
        <div className='contact_info_div'>
            <h2>Əlaqə Məlumatları</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

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

        </div>
       

      </section>
      <section className='contact_map'>
        <div className='contact_map_div'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.8591544099327!2d49.82997641449061!3d40.367647266548744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db6c36b078d%3A0xe3266cb283740f8f!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgxLBxdGlzYWQgVW5pdmVyc2l0ZXRp!5e0!3m2!1saz!2saz!4v1678880703295!5m2!1saz!2saz" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>

        </div>
      </section>
    
    
    </>
  )
}

export default Contact