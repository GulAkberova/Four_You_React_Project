import React from 'react'
import '../../pages/homepage/home.scss'
import hekim1 from "../../assets/image/Rectangle 55.jpg";
import path from "../../assets/icons/Path.png";
import { Link, NavLink } from 'react-router-dom';
import PsxModal from '../psxmodal/PsxModal';
  function PsxCard({ index }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  // console.log(index.name,'index')
  return (
    
    <>
    <>
      <div className='pscology_card_div_img'>
        <img src={hekim1}/>

      </div>
      <div className='pscology_card_div_text'>
        <div className='pscology_card_div_text_name'>
           <span><b>4.95</b> <img src={path}/></span>
          
          <h5>{index?.name}</h5>
          <p>{index?.present_work_space}</p>
         
        </div>
   
    <div className='pscology_card_div_text_btn'>
      <button className='pscology_card_div_text_btn1'>
        <Link to={`/psx/${index?.id}`}>Ətraflı</Link>
      </button>
      <button className='pscology_card_div_text_btn2' onClick={handleOpen}>
        <NavLink>Görüş</NavLink>
      </button>
    </div>
     </div>

     </>
    
    <PsxModal open={open} setOpen={setOpen} index={index}/>
    </>
  )
}

export default PsxCard