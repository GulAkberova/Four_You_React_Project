import React from 'react'
import './footer.scss'
import logo from '../../img/4you.png'

import phone from '../../img/Phone.png'
import clock from '../../img/Clock.png'
import whatsapp from '../../img/WhatsApp.png'
import envelope from '../../img/Envelope.png'


function Footer() {
  return (
    <>
    <section className='footer_bigdiv'>
        <div className='footer_minidiv'>
            <div className='footer_div1'>
              <img src={logo}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
            </div>
            <div className='footer_div2'>
                <h3>Melumat</h3>
                <ul>
                    <li><a href="#">Ana sehife</a></li>
                    <li><a href="#">Haqqimizda</a></li>
                    <li><a href="#">Psixoloji test</a></li>
                    <li><a href="#">Komandamiz</a></li>
                    <li><a href="#">Mehsullar</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>

            </div>
            <div className='footer_div3'>
                <h3>Elave</h3>
                <ul>
                    <li><a href="#">Hesabim</a></li>
                    <li><a href="#">Sertler ve qaydalar</a></li>
                    <li><a href="#">Gizlilik siyaseti</a></li>
                </ul>

            </div>
            <div className='footer_div4'>
                <div className='footer_div4_div'>
                    <img src={phone}/>
                    <span>+994 50 342 15 58</span>
            
                </div>
                <div className='footer_div4_div'>
                    <img src={whatsapp}/>
                    <span>+994 50 342 15 58</span>
            
                </div>
                <div className='footer_div4_div'>
                    <img src={clock}/>
                    <span>B.E-C 9:00 18:30</span>
            
                </div>
                <div className='footer_div4_div'>
                    <img src={envelope}/>
                    <span>4you@mail.ru</span>
            
                </div>

            </div>

        </div>
        <p>For you | © 2019 All rights reserved!
        </p>

    </section>

    </>
  )
}

export default Footer