import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./psx.scss";
import "../../pages/homepage/home.scss";
// import hekim1 from '../../img/Rectangle\ 55.png'
import hekim2 from "../../img/Rectangle 55 (1).png";
import hekim3 from "../../img/Rectangle 55 (2).png";
import PsxCard from "../../components/card/PsxCard";
import { data } from "../../api/data";

function Psx() {
  const [psx, setPsx] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    data.getAll("doctor").then((res) => {
      setPsx(res);
      setLoading(false);
    });
  }, []);
  //  console.log(psx)

  return (
    <>
      <section className="carusel">
        <h2>Psixoloqlar</h2>
        <p>
          <NavLink to={"/"}>Ana Səhifə</NavLink>/
          <NavLink to={"/psx"}>Psixoloqlar</NavLink>
        </p>
      </section>
      {/* <section className='pscology_bigdiv'>
        <div className='pscology_minidiv'> */}

      <div className="pscology_bigdiv">
        <div className="pscology_minidiv">
          {loading ? (
            <div className="loader_div">
              <span className="loader"></span>
            </div>
          ) : (
            psx &&
            psx.map((index, key) => (
              <div className="pscology_card_div_psx">
                <PsxCard index={index} key={key} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Psx;
