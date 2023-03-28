import React, { useContext } from "react";
import "../../pages/homepage/home.scss";
import hekim1 from "../../assets/image/Rectangle 55.jpg";
import path from "../../assets/icons/Path.png";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PsxModal from "../psxmodal/PsxModal";
import AuthContext from "../../context/AuthProvider";
function PsxCard({ index }) {
  // const { auth } = useContext(AuthContext);
  // console.log(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  // const access = localStorage.getItem("access");
  const auth = JSON.parse(localStorage.getItem("auth"));

  // console.log(authl.index, "autttttttttttttttt");

  const handleOpen = () => {
    if (auth?.access) {
      setOpen(true);
    } else {
      navigate("/logreg");
    }
  };
  // console.log(index.name,'index')
  return (
    <>
      <>
        <div className="pscology_card_div_img">
          <img src={index?.profil_image} />
        </div>
        <div className="pscology_card_div_text">
          <div className="pscology_card_div_text_name">
            <span>
              <b>4.95</b> <img src={path} />
            </span>

            <h5>
              {index?.name}&nbsp;
              {index?.surname}
            </h5>
            <p>{index?.present_work_space}</p>
          </div>

          <div className="pscology_card_div_text_btn">
            <button className="pscology_card_div_text_btn1">
              <Link to={`/psx/${index?.id}`}>Ətraflı</Link>
            </button>
            <button
              className="pscology_card_div_text_btn2"
              onClick={handleOpen}
            >
              <NavLink>Görüş</NavLink>
            </button>
          </div>
        </div>
      </>
      {/* {auth?.access ? ( */}
      <PsxModal open={open} setOpen={setOpen} index={index} />
      {/* // ) : (
      //   <Navigate to="/logreg" state={{ form: location }} replace />
      // )} */}
    </>
  );
}

export default PsxCard;
