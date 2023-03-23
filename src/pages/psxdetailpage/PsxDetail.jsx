import React, { useEffect, useState } from "react";
import "./psxdetail.scss";
import hekim1 from "../../assets/image/Rectangle 55.jpg";
import path from "../../assets/icons/Path.png";
import ellipse from "../../assets/icons/ellipse.png";
import right from "../../assets/icons/right.png";
import ellipseedu from "../../assets/icons/ellipseedu.png";
import ellipseexp from "../../assets/icons/ellipseexp.png";
import ellipsecert from "../../assets/icons/ellipsecert.png";
import certificate from "../../assets/image/certificate.png";
import { NavLink, useParams } from "react-router-dom";
import SwiperPsx from "../../components/corousel/SwiperPsx";
import PsxModal from "../../components/psxmodal/PsxModal";
import { data } from "../../api/data";

function PsxDetail() {
  const param = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const [psxData, setPsxData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.getById("doctor", param.id).then((res) => {
      setPsxData(res);
      setLoading(false);
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Set the selected image to the URL of the first image in the array
    if (psxData?.certificate && psxData?.certificate.length > 0) {
      setSelectedImage(psxData.certificate[0].image);
    }
  }, [psxData.certificate]);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  console.log(psxData, "psxxxxxxxxxxxxxxxx");

  return (
    <>
      <section className="psxdetail_bigdiv">
        <div className="psxdetail_bigdiv_img">
          <img src={psxData?.profil_image} />
        </div>
        <div className="psxdetail_bigdiv_text">
          <h4>{psxData?.name}</h4>
          <div className="psxdetail_bigdiv_text_path">
            <img src={path} />
            <img src={path} />
            <img src={path} />
            <img src={path} />
            <img src={path} />
            <b>4.95</b>
          </div>

          <div className="psxdetail_bigdiv_text_status">
            <span>Psixoloq</span>
            <p>{psxData?.present_work_space}</p>
          </div>
          <div className="psxdetail_bigdiv_text_about">
            <b>Haqqında</b>
            <p>{psxData?.about}</p>
          </div>
          {/* <div className='psxdetail_bigdiv_text_info'>

         <b>Şəxsi Məlumatlar</b><br/>
            <span>Əlaqə nömrəsi: +994(70)-777-77-77</span><br/>
            <span>E-mail: gulnaremehdi@gmail.com</span>
         </div> */}

          <button onClick={handleOpen}>
            <NavLink>Görüş</NavLink>
          </button>
          {/* <PsxModal open={open} setOpen={setOpen}/> */}
        </div>
      </section>
      <section className="psxdetail_infodiv">
        <div className="psxdetail_infodiv_education">
          <ul>
            <li>
              <img src={ellipseedu} />
              <h4>Təhsil</h4>
            </li>
            {psxData.education &&
              psxData.education.map((i, key) => (
                <li className="psxdetail_infodiv_education_li" key={key}>
                  <img src={ellipse} />
                  <div>
                    <h5>{i.university}</h5>
                    <span>{i.program}</span>
                    <br />
                    <span>{i.date}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="psxdetail_infodiv_experience">
          <ul>
            <li>
              <img src={ellipseexp} />
              <h4>Təcrübə</h4>
            </li>
            {psxData.experience &&
              psxData.experience.map((i, key) => (
                <li className="psxdetail_infodiv_education_li" key={key}>
                  <img src={ellipse} />
                  <div>
                    <h5>{i.company}</h5>
                    <span>{i.date}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="psxdetail_infodiv_certificate">
          <ul>
            <li>
              <img src={ellipsecert} />
              <h4>Sertifikatlar</h4>
            </li>
            <li className="psxdetail_infodiv_education_li">
              <img src={ellipse} />

              <div className="psxdetail_infodiv_education_li_img">
                <div className="psxdetail_infodiv_education_li_bigimg">
                  <img src={selectedImage} />
                </div>
                <div>
                  {psxData.certificate &&
                    psxData.certificate.map((i, key) => (
                      <div key={key}>
                        <img
                          src={i.image}
                          onClick={() => handleImageClick(i.image)}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="psxdetail_skills">
        <h3>Bacarıqlar</h3>

        <div className="psxdetail_skills_divs">
          {psxData.skills &&
            psxData.skills.map((i, key) => (
              <div key={key}>
                <img src={right} />
                <span>{i.skill} </span>
              </div>
            ))}
        </div>
      </section>
      <section className="big_pscology">
        <div className="pscology_text1">
          <h1>Psixoloqlar</h1>
        </div>
        <div className="pscology_cards">
          <div className="pscology_cards_mini">
            <SwiperPsx />
          </div>
        </div>
      </section>
      <PsxModal open={open} setOpen={setOpen} index={psxData} />
    </>
  );
}

export default PsxDetail;
