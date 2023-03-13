import React from "react";
import { NavLink } from "react-router-dom";
import "./about.scss";
import OurPsx from "../../components/ourPsx/OurPsx";
import OurToys from "../../components/ourPsx/OurToys";
import member1 from '../../assets/image/member1.png'

function About() {
  return (
    <>
      <section className="carusel">
        <h1>Haqqımızda</h1>
      </section>
     <OurPsx/>
     <OurToys/>
     <div className="about_group">
      <h1>Komadamız</h1>
     </div>
     <div className="about_group_members">
      <div className="about_group_member">
        <div className="about_group_member_img">
          <img src={member1}/>

        </div>
        <h5>Gunel Ekberova</h5>
        <span>Lorem Impsum Lorem</span>

      

      </div>
      <div className="about_group_member">
        <div className="about_group_member_img">
          <img src={member1}/>

        </div>
        <h5>Gunel Ekberova</h5>
        <span>Lorem Impsum Lorem</span>

      

      </div>
      <div className="about_group_member">
        <div className="about_group_member_img">
          <img src={member1}/>

        </div>
        <h5>Gunel Ekberova</h5>
        <span>Lorem Impsum Lorem</span>

      

      </div>
      <div className="about_group_member">
        <div className="about_group_member_img">
          <img src={member1}/>

        </div>
        <h5>Gunel Ekberova</h5>
        <span>Lorem Impsum Lorem</span>

      

      </div>
      <div className="about_group_member">
        <div className="about_group_member_img">
          <img src={member1}/>

        </div>
        <h5>Gunel Ekberova</h5>
        <span>Lorem Impsum Lorem</span>

      

      </div>

     </div>

      
    </>
  );
}

export default About;
