import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg1 from "../../img/Rectangle 57.png";

function OurPsx() {
  return (
    <>
      <section className="about_bigdiv1 about_bg">
        <div className="about_img">
          <img src={aboutimg1} />
        </div>
        <div className="about_txt">
          <div className="about_mini_txt">
            <h1>Birinci görüş və seanslarımız</h1>
            <p>
              Birinci görüşlər bütün uşaqlar üçün tamamilə ödənişsizdir. Bu
              görüşlər vasitəsiylə psixoloq uşaq haqqındakı ilkin
              təəssüratlarını yarada bilir və növbəti seansları koordinasiya
              edərkən məhz bu görüşdən olan təəssüratlardan istifadə edir.
              Birinci görüş vasitəsiylə həm də siz növbəti seansların necə
              keçəcəyini, sizin üçün hansı üstünlükləri ola biləcəyini təxmin
              edə bilirsiniz.
            </p>
            <NavLink to="/psx">
              <button>Gəl Danışaq</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPsx;
