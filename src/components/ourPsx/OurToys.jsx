import React from 'react'
import { NavLink } from 'react-router-dom';
import aboutimg2 from "../../img/Rectangle 58.png";

function OurToys() {
  return (
    <>
    <section className="about_bigdiv1">
        <div className="about_txt">
          <div className="about_mini_txt">
            <h1>Sizin oyuncağınız</h1>
            <p>
              Biz bu oyuncağı ilk görüşdən sizin haqqınızda yaratdığımız
              təəssuratlara əsasən dizayn etmişik..{" "}
            </p>
            <NavLink to="/quiz">
              <button>Məhsullar</button>
            </NavLink>
          </div>
        </div>
        <div className="about_img">
          <img src={aboutimg2} />
        </div>
      </section>
    </>
  )
}

export default OurToys