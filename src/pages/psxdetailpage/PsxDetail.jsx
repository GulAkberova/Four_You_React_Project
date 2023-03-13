import React from 'react'
import './psxdetail.scss'
import hekim1 from "../../assets/image/Rectangle 55.jpg";
import path from "../../assets/icons/Path.png";
import ellipse from "../../assets/icons/ellipse.png";
import right from "../../assets/icons/right.png";
import ellipseedu from "../../assets/icons/ellipseedu.png";
import ellipseexp from "../../assets/icons/ellipseexp.png";
import ellipsecert from "../../assets/icons/ellipsecert.png";
import certificate from "../../assets/image/certificate.png"
import { NavLink } from 'react-router-dom';
import SwiperPsx from '../../components/corousel/SwiperPsx';

function PsxDetail() {
  return (
    <>
    <section className='psxdetail_bigdiv'>
        <div className='psxdetail_bigdiv_img'>
            <img src={hekim1}/>
        </div>
        <div className='psxdetail_bigdiv_text'>
            <h4>Gülnarə Mehdiyeva</h4>
            <div className='psxdetail_bigdiv_text_path'>
            <img src={path}/><img src={path}/><img src={path}/><img src={path}/><img src={path}/><b>4.95</b>
            </div>
            
            <div className='psxdetail_bigdiv_text_status'>
            <span>Psixoloq</span>
            <p>Avrasiya Klinika</p>
            </div>
         <div className='psxdetail_bigdiv_text_about'>
         <b>Haqqında</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
         </div>
         <div className='psxdetail_bigdiv_text_info'>

         <b>Şəxsi Məlumatlar</b><br/>
            <span>Əlaqə nömrəsi: +994(70)-777-77-77</span><br/>
            <span>E-mail: gulnaremehdi@gmail.com</span>
         </div>
           
            <button><NavLink>Gorus</NavLink></button>

</div>

    </section>
    <section className='psxdetail_infodiv'>
        <div  className='psxdetail_infodiv_education'>
            <ul>
                <li>
                    <img src={ellipseedu}/><h4>Təhsil</h4>
                </li>
                <li className='psxdetail_infodiv_education_li'>
                    <img src={ellipse}/><div>
                  <h5>  American Dental Medical University</h5>
                  <span>BDS</span><br/>
                  <span>1998 - 2003</span>


                    </div>
                </li>
                <li className='psxdetail_infodiv_education_li'>
                <img src={ellipse}/><div>
                  <h5>  American Dental Medical University</h5>
                  <span>BDS</span><br/>
                  <span>1998 - 2003</span>


                    </div>
                </li>
                <li className='psxdetail_infodiv_education_li'>
                <img src={ellipse}/><div>
                  <h5>  American Dental Medical University</h5>
                  <span>BDS</span><br/>
                  <span>1998 - 2003</span>


                    </div>
                </li>
            </ul>

        </div>
        <div  className='psxdetail_infodiv_experience'>
        <ul>
                <li>
                    <img src={ellipseexp}/><h4>Təcrübə</h4>
                </li>
                <li className='psxdetail_infodiv_education_li'>
                    <img src={ellipse}/><div>
                  <h5> Avrasiya Klinikası</h5>
                  <span>2020 - indi (3 il)</span>


                    </div>
                </li>
                <li className='psxdetail_infodiv_education_li'>
                <img src={ellipse}/><div>
                  <h5> Medical Plaza</h5>
                  <span>2019 -2020 (1 il)</span>


                    </div>
                </li>
                <li className='psxdetail_infodiv_education_li'>
                <img src={ellipse}/><div>
                  <h5>Dövlət Klinikası</h5>
                  <span>2000 - 2019 (19 il)</span>


                    </div>
                </li>
            </ul>

        </div>
        <div  className='psxdetail_infodiv_certificate'>
        <ul>
                <li>
                    <img src={ellipsecert}/><h4>Sertifikatlar</h4>
                </li>
                <li className='psxdetail_infodiv_education_li'>
                    <img src={ellipse}/>
                    
                    <div className='psxdetail_infodiv_education_li_img'>
                        <img src={certificate}/>
                       <div>
                  
                        <img src={certificate}/>
                        <img src={certificate}/>
                        <img src={certificate}/>
                       
                       </div>


                    </div>
                </li>
              
            </ul>

        </div>
        

    </section>
    <section className='psxdetail_skills'>
        <h3>Bacarıqlar</h3>

        <div className='psxdetail_skills_divs'>
            <div>
                <img src={right}/>
                <span>Children Care</span>

            </div>
            <div>
                <img src={right}/>
                <span>Orthodontist</span>

            </div>
            <div>
                <img src={right}/>
                <span>Oral and Maxillofacial Surgery</span>


            </div>
            <div>
                <img src={right}/>
                <span>Orthodontist</span>

            </div>
            <div>
                <img src={right}/>
                <span>Oral and Maxillofacial Surgery</span>

            </div>
            <div>
                <img src={right}/>
                <span>Children Care</span>

            </div>
            <div>
                <img src={right}/>
                <span>Children Care</span>

            </div>
            <div>
                <img src={right}/>
                <span>Prosthodontics</span>

            </div>
        </div>

    </section>
    <section className="big_pscology">
    <div className="pscology_text1">
          <h1>Psixoloqlar</h1>
        </div>
    <div className="pscology_cards">
          <div className="pscology_cards_mini">
         <SwiperPsx/>
          </div>
        </div>
    </section>
    
    
    </>
  )
}

export default PsxDetail