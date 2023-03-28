import React from "react";
// import { Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import "./quiz.scss";
import bg from "../../img/dashed-line-characters2 (1) 1.png";

function Quiz() {
  return (
    <>
      <section className="quiz_bigdiv">
        <div className="quiz_minidiv">
          <h1>Gəl Danışaq</h1>
          <p>
            Əziz Dostum, “Psixoloqlarımız” bölməsinə klikləyərək istədiyin
            psixoloqu seçə və görüş üçün vaxt təyin edə bilərsən. Xatırlatma
            edək ki bu görüş tamamilə ödənişsizdir və edəcəyimiz söhbət aramızda
            sirr olaraq qalacaq.
          </p>

          <button>
            <NavLink to={"/psx"}>Psixoloqlarımız</NavLink>
          </button>
        </div>
      </section>
      <section className="activite_purpose_bigdiv">
        <div className="activite_bigdiv">
          <h1>Bu görüş nə üçündür?</h1>
          <p>
            <br />
            Bu görüşlər vasitəsiylə psixoloq səni daha yaxındantanıya biləcək və
            növbəti seansları koordinasiya edərkən bu tanışlıq mühüm rol
            oynayacaq. Birinci görüş vasitəsiylə həm də sən bizi qiymətləndirə,
            həm də seanslar haqqında ilkin təəssürat yarada bilərsən.
          </p>
        </div>

        <div className="purpose_bigdiv">
          <h1>Bizim kiçik qaydalarımız:</h1>
          <p>
            • Görüş zamanı rahat hiss et və danışmaq istədiyin hər şeyi tam
            rahatlıqla bölüş
            <br />
            • Görüş zamanı ətrafında başqa insanlar olmasın və görüşə qoşulduğun
            otaqda səssizlik olsun
            <br /> • Unutma! Biz sənə kömək etmək üçün burdayıq
          </p>
        </div>
      </section>
    </>
  );
}

export default Quiz;
