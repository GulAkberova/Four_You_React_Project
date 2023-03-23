import React from "react";
// import { Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import "./quiz.scss";

function Quiz() {
  return (
    <>
      <section className="quiz_bigdiv">
        <div className="quiz_minidiv">
          <h1>Gəl Danışaq</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.{" "}
          </p>

          <button>
            <NavLink to={"/psx"}>Psixoloqlarımız</NavLink>
          </button>
        </div>
      </section>
      <section className="activite_purpose_bigdiv">
        <div className="activite_bigdiv">
          <h1>Fəaliyyətimiz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.{" "}
          </p>
        </div>
        <div className="purpose_bigdiv">
          <h1>Məqsədimiz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.aliquet odio mattis. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default Quiz;
