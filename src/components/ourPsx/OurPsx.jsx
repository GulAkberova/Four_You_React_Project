import React from 'react'
import { NavLink } from 'react-router-dom'
import aboutimg1 from "../../img/Rectangle 57.png";

function OurPsx() {
  return (
   <>
    <section className="about_bigdiv1">
        <div className="about_img">
          <img src={aboutimg1} />
        </div>
        <div className="about_txt">
          <div className="about_mini_txt">
            <h1>Birinci görüş və seanslarımız</h1>
            <p>
              Buradan birinci görüşə daxil olaraq siz ödənişsiz şəkildə
              övladlarınızı real psixoloqlarla rahat şəkildə danışmasına və
              beləliklə övladlarınızda olan mənfi halları aşkar edə bilərsiniz..
            </p>
            <NavLink to="/quiz">
              <button>Gəl  Danışaq</button>
            </NavLink>
          </div>
        </div>
      </section>
      </>
  )
}

export default OurPsx