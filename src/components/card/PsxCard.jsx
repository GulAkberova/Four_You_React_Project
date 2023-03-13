import React from 'react'
import '../../pages/homepage/home.scss'
import hekim1 from "../../assets/image/Rectangle 55.jpg";
import path from "../../assets/icons/Path.png";
import { NavLink } from 'react-router-dom';
import PsxModal from '../psxmodal/PsxModal';
function PsxCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
    <>
      <div className='pscology_card_div_img'>
        <img src={hekim1}/>

      </div>
      <div className='pscology_card_div_text'>
        <div className='pscology_card_div_text_name'>
           <span><b>4.95</b> <img src={path}/></span>
          
          <h5>Dr.Günel Cavadova</h5>
          <p>Psixoloq ,Nevropatoloq</p>
         
        </div>
   
    <div className='pscology_card_div_text_btn'>
      <button className='pscology_card_div_text_btn1'>
        <NavLink to='/psxdetail'>Ətraflı</NavLink>
      </button>
      <button className='pscology_card_div_text_btn2' onClick={handleOpen}>
        <NavLink>Görüş</NavLink>
      </button>
    </div>
     </div>

    </>
    
    <PsxModal open={open} setOpen={setOpen}/>
    </>
  )
}

export default PsxCard