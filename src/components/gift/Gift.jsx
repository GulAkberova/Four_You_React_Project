import React from "react";
import catdirilma1 from "../../img/padlock 1.png";
import catdirilma2 from "../../img/gift-box (1) 1.png";
import catdirilma3 from "../../img/like (1) 1.png";
import catdirilma4 from "../../img/shipped 1.png";
function Gift() {
  return (
    <>
      <section className="catdirilma_bigdiv">
        <div className="catdirilma_minidiv">
          <div className="catdirilma_div">
            <img src={catdirilma1} />
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit
            </p>
          </div>
          <div className="catdirilma_div">
            <img src={catdirilma4} />
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit
            </p>
          </div>
          <div className="catdirilma_div">
            <img src={catdirilma3} />
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit
            </p>
          </div>
          <div className="catdirilma_div">
            <img src={catdirilma2} />
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gift;
