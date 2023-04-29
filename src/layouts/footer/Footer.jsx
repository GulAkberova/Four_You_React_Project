import React from "react";
import "./footer.scss";
import logo from "../../img/4you.png";

import phone from "../../img/Phone.png";
import clock from "../../img/Clock.png";
import whatsapp from "../../img/WhatsApp.png";
import envelope from "../../img/Envelope.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer_bigdiv">
        <div className="footer_minidiv">
          <div className="footer_div1">
            <img src={logo} />
            <p>
              “Daha yaxşı gələcək üçün” deyərək psixologiyanı bütün uşaqlara
              əlçatımlı etməyi qarşımıza məqsəd qoymuşuq{" "}
            </p>
          </div>
          <div className="footer_div2">
            <h3>Məlumat</h3>
            <ul>
              <li>
                <NavLink to="/">Ana sehifə</NavLink>
              </li>
              <li>
                <NavLink to="/about">Haqqımızda</NavLink>
              </li>
              {/* <li>
                <NavLink to="/quiz">Gəl danışaq</NavLink>
              </li> */}
              <li>
                <NavLink to="/psx">Psixoloqlarımız</NavLink>
              </li>
              <li>
                <NavLink to="/product">Məhsullar</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Bloq</NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="footer_div3">
            <h3>Elave</h3>
            <ul>
              <li>
                <a href="#">Hesabim</a>
              </li>
              <li>
                <a href="#">Sertler ve qaydalar</a>
              </li>
              <li>
                <a href="#">Gizlilik siyaseti</a>
              </li>
            </ul>
          </div> */}
          <div className="footer_div4">
            <div className="footer_div4_div">
              <img src={phone} />
              <span>+994 50 592 08 58</span>
            </div>
            <div className="footer_div4_div">
              <img src={whatsapp} />
              <span>+994 50 592 08 58</span>
            </div>
            <div className="footer_div4_div">
              <img src={clock} />
              <span>B.E-C 9:00 18:30</span>
            </div>
            <div className="footer_div4_div">
              <img src={envelope} />
              <span>support@4youkid.com</span>
            </div>
          </div>
        </div>
        <p>For you | © 2019 All rights reserved!</p>
      </section>
    </>
  );
}

export default Footer;
