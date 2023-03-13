import React from 'react'
import { NavLink } from 'react-router-dom'
import './psx.scss'
import '../../pages/homepage/home.scss'
// import hekim1 from '../../img/Rectangle\ 55.png'
import hekim2 from '../../img/Rectangle\ 55 (1).png'
import hekim3 from '../../img/Rectangle\ 55 (2).png'
import PsxCard from '../../components/card/PsxCard'

function Psx() {
  return (
    <>
    <section className='carusel'>
        <h1>Psixoloqlarımız</h1>

    </section>
    {/* <section className='pscology_bigdiv'>
        <div className='pscology_minidiv'> */}

<div className="pscology_bigdiv">
          <div className="pscology_minidiv">
            <div className='pscology_card_div_psx'>
          <PsxCard/>


            </div>
            <div className='pscology_card_div_psx'>
          <PsxCard/>


            </div>
            <div className='pscology_card_div_psx'>
          <PsxCard/>


            </div>
            <div className='pscology_card_div_psx'>
          <PsxCard/>


            </div>

        </div>

    </div>
    </>
  )
}

export default Psx