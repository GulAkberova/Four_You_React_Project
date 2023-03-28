import React from "react";
import { NavLink } from "react-router-dom";
import "./about.scss";
import OurPsx from "../../components/ourPsx/OurPsx";
import OurToys from "../../components/ourPsx/OurToys";
import Vuqar from "../../assets/image/members/Vuqar.jpg";
import Gul from "../../assets/image/members/Gul.jpg";
import Arzu from "../../assets/image/members/Arzu.jpg";
import Idris from "../../assets/image/members/Idris.jpeg";
import Nadir from "../../assets/image/members/Nadir.jpeg";
import Fidan from "../../assets/image/members/Fidan.jpg";

function About() {
  return (
    <>
      <section className="carusel">
        <h2>Haqqımızda</h2>
        <p>
          <NavLink to={"/"}>Ana Səhifə</NavLink>/
          <NavLink to={"/about"}>Haqqımızda</NavLink>
        </p>
      </section>
      <OurPsx />
      <OurToys />
      <div className="about_group">
        <h1>Komadamız</h1>
      </div>
      <div className="about_group_members">
        <div className="about_group_member">
          <div className="about_group_member_img">
            <img src={Arzu} />
          </div>
          <h5>Arzu Qarayeva</h5>
          <span>Marketing</span>
        </div>
        <div className="about_group_member">
          <div className="about_group_member_img">
            <img src={Vuqar} />
          </div>
          <h5>Vüqar Əliyev</h5>
          <span>Ceo</span>
        </div>
        <div className="about_group_member">
          <div className="about_group_member_img">
            <img src={Nadir} />
          </div>
          <h5>Nadir Hüseynov</h5>
          <span>İcma mütəxəssisi</span>
        </div>

        <div className="about_group_member">
          <div className="about_group_member_img">
            <img src={Idris} />
          </div>
          <h5>İdris Cəfərov</h5>
          <span>Back-end developer</span>
        </div>
        <div className="about_group_member">
          <div className="about_group_member_img">
            <img src={Gul} />
          </div>
          <h5>Gülxanım Əkbərova</h5>
          <span>Front-end developer</span>
        </div>
        <div className="about_group_member">
          <div className="about_group_member_img">
            <img src={Fidan} />
          </div>
          <h5>Fidan Əliyeva</h5>
          <span>UI/UX dizayner</span>
        </div>
      </div>
    </>
  );
}

export default About;
