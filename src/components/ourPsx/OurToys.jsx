import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg2 from "../../img/Rectangle 58.png";

function OurToys() {
  return (
    <>
      <section className="about_bigdiv1">
        <div className="about_txt">
          <div className="about_mini_txt">
            <h1>Sizin oyuncağınız</h1>
            <p>
              Oyuncaqlar 3 formatda təqdim edilir:
              <ul>
                <li>
                  1. İlk görüşün nəticələrinə uyğun şəkildə uşağa özəl dizayn
                </li>
                <li>2. Sizin öz istəyinizə uyğun şəkildə dizayn</li>
                <li>3. Əldə olan məhsullardan seçim edərək safaris</li>
              </ul>
            </p>
            <NavLink to="/product">
              <button>Məhsullar</button>
            </NavLink>
          </div>
        </div>
        <div className="about_img">
          <img src={aboutimg2} />
        </div>
      </section>
    </>
  );
}

export default OurToys;
