import React from 'react'
import { NavLink } from 'react-router-dom'
import '../psxpage/psx.scss'
import hekim1 from '../../img/Rectangle\ 55.png'
import hekim2 from '../../img/Rectangle\ 55 (1).png'
import hekim3 from '../../img/Rectangle\ 55 (2).png'

function Psx() {
  return (
    <>
    <section className='carusel'>
        <h1>Psixoloqlarimiz</h1>

    </section>
    <section className='pscology_bigdiv'>
        <div className='pscology_minidiv'>
            <div className='pscology_div'>
                <div className='pscology_img'>
                   <img src={hekim3}/>
                </div>
                <div className="pscology_text">
                    <h1>Günel Əkbərova</h1>
                    <ul>
                        <li>Bakı Dövlət Universiteti</li>
                        <li>Heydər Əliyev adına müasir təhsil kompleksi</li>
                        <li>Narınc uşaq psixologiya mərkəzi</li>
                   
                    </ul>
                   <NavLink to='/seans'> <button>Seansa Basla</button></NavLink>
                </div>

            </div>
            <div className='pscology_div'>
                <div className='pscology_img'>
                   <img src={hekim1}/>
                </div>
                <div className="pscology_text">
                    <h1>Kenan Hüseynli</h1>
                    <ul>
                    <li>Bakı Dövlət Universiteti</li>
                        <li>Heydər Əliyev adına müasir təhsil kompleksi</li>
                        <li>Narınc uşaq psixologiya mərkəzi</li>
                    </ul>
                    <NavLink to='/seans'> <button>Seansa Basla</button></NavLink>
                </div>

            </div>
            <div className='pscology_div'>
                <div className='pscology_img'>
                   <img src={hekim2}/>
                </div>
                <div className="pscology_text">
                    <h1>Sibel Priyeva</h1>
                    <ul>
                    <li>Bakı Dövlət Universiteti</li>
                        <li>Heydər Əliyev adına müasir təhsil kompleksi</li>
                        <li>Narınc uşaq psixologiya mərkəzi</li>
                    </ul>
                    <NavLink to='/seans'> <button>Seansa Basla</button></NavLink>
                </div>

            </div>
            <div className='pscology_div'>
                <div className='pscology_img'>
                   <img src={hekim3}/>
                </div>
                <div className="pscology_text">
                    <h1>Fidan Əliyev</h1>
                    <ul>
                    <li>Bakı Dövlət Universiteti</li>
                        <li>Heydər Əliyev adına müasir təhsil kompleksi</li>
                        <li>Narınc uşaq psixologiya mərkəzi</li>
                    </ul>
                    <NavLink to='/seans'> <button>Seansa Basla</button></NavLink>
                </div>

            </div>

        </div>

    </section>
    </>
  )
}

export default Psx