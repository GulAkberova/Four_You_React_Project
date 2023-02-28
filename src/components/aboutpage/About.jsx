import React from 'react'
import { NavLink } from 'react-router-dom'
import '../aboutpage/about.scss'
import aboutimg1 from '../../img/Rectangle 57.png'
import aboutimg2 from '../../img/Rectangle 58.png'

function About() {
  return (
    <>
    <section className='carusel'>
      <h1>Haqqımızda</h1>

    </section>
    <section className='about_bigdiv1'>
      <div className='about_img'>
        <img src={aboutimg1}/>

      </div>
      <div className='about_txt'>
        <div className='about_mini_txt'>
        <h1>Birinci görüş və seanslarımız</h1>
        <p>Buradan birinci görüşə daxil olaraq siz ödənişsiz şəkildə övladlarınızı real psixoloqlarla rahat şəkildə danışmasına və beləliklə övladlarınızda olan mənfi halları aşkar edə bilərsiniz..</p>
        <NavLink to='/quiz'><button>Gorüş</button></NavLink>
        </div>
     

      </div>

    </section>
  
    <section className='about_bigdiv1'>
     <div className='about_txt'>
        <div className='about_mini_txt'>
        <h1>Sizin oyuncağınız</h1>
        <p>Biz bu oyuncağı ilk görüşdən sizin haqqınızda yaratdığımız təəssuratlara əsasən dizayn etmişik.. </p>
        {/* <NavLink to='/quiz'><button>Test et</button></NavLink> */}
        </div>
     

      </div>
      <div className='about_img'>
        <img src={aboutimg2}/>

      </div>
    

    </section>

    </>
  )
}

export default About