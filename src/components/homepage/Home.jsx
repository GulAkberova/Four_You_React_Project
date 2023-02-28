import React from 'react'
import '../homepage/home.scss'
import { Link, NavLink } from "react-router-dom"
import Slider from '../corousel/Slider'

import hekim1 from '../../img/Rectangle\ 55.png'
import hekim2 from '../../img/Rectangle\ 55 (1).png'
import hekim3 from '../../img/Rectangle\ 55 (2).png'
import oyuncaq1 from '../../img/Rectangle\ 6.png'
import oyuncaq2 from '../../img/Rectangle\ 6 (1).png'
import oyuncaq3 from '../../img/Rectangle\ 6 (2).png'
import oyuncaq4 from '../../img/Rectangle\ 6 (3).png'
import video from '../../img/touch.png'
import catdirilma1 from '../../img/padlock 1.png'
import catdirilma2 from '../../img/gift-box (1) 1.png'
import catdirilma3 from '../../img/like (1) 1.png'
import catdirilma4 from '../../img/shipped 1.png'

function Home() {
  return (
    <>
    <Slider/>
    <section className='big_pscology'>
        <div className='mini_pscology'>
            <div className='pscology_text'>
                <h1>Psixoloqlar</h1>
               <p>Buradan bizim psixoloqlarımızla daha yaxından tanış ola bilərsiz..</p>
            </div>
            <div className='pscology_big_div'>
               
                 <div className='pscology_mini_div'>
                    <div className='pscology_mini_div_img'>
                    <NavLink to='/psx'><img src={hekim1}/></NavLink>
                    </div>
                    <div className='pscology_mini_div_text'>
                        <h1>Dr.Kənan Hüseynov</h1>
                        <p>Lorem ipsum dolor sit ame</p>

                    </div>

                </div>
               
                <div className='pscology_mini_div'>
                    <div className='pscology_mini_div_img'>
                   <NavLink to='/psx'> <img src={hekim2}/></NavLink>
                    </div>
                    <div className='pscology_mini_div_text'>
                        <h1>Dr.Günel Əkbərova</h1>
                        <p>Lorem ipsum dolor sit ame</p>

                    </div>

                </div>
                <div className='pscology_mini_div'>
                    <div className='pscology_mini_div_img'>
                    <NavLink to='psx'><img src={hekim3}/></NavLink>
                    </div>
                    <div className='pscology_mini_div_text'>
                        <h1>Dr. Sibel Piriyeva</h1>
                        <p>Lorem ipsum dolor sit ame</p>

                    </div>

                </div>


            </div>
            <div className='pscology_btn'>
               <NavLink to="/psx"><button>Daha çox</button></NavLink>

            </div>
        </div>
    </section>
    <section className='big_pscology1'>
        <div className='mini_pscology'>
            <div className='pscology_text'>
                <h1>Mehsullar</h1>
           <p>
           Buradan bizim məhsullarımızla daha yaxından tanış ola bilersiz..
           </p>
            </div>
            <div className='mehsul_bigdiv'>
            <div className='mehsul_div'>
            <div className='mehsul_img'>
                <Link to={'/detail'}>
                <img src={oyuncaq1}/>
                
                </Link>
            </div>
            <div className='mehsul_text'>
                <h3>Toxunma Ayi</h3>
                <p>16m</p>

            </div>

            </div>
            <div className='mehsul_div'>
            <div className='mehsul_img'>
                <Link to={'/detail'}>
                <img src={oyuncaq1}/>
                
                </Link>
            </div>
            <div className='mehsul_text'>
                <h3>Toxunma Ayi</h3>
                <p>16m</p>

            </div>

            </div>
            <div className='mehsul_div'>
            <div className='mehsul_img'>
                <Link to={'/detail'}>
                <img src={oyuncaq1}/>
                
                </Link>
            </div>
            <div className='mehsul_text'>
                <h3>Toxunma Ayi</h3>
                <p>16m</p>

            </div>

            </div>
            <div className='mehsul_div'>
            <div className='mehsul_img'>
                <Link to={'/detail'}>
                <img src={oyuncaq1}/>
                
                </Link>
            </div>
            <div className='mehsul_text'>
                <h3>Toxunma Ayi</h3>
                <p>16m</p>

            </div>

            </div>


            </div>
            <div className='pscology_btn'>
                <NavLink to='/mehsul'><button>Daha cox </button></NavLink>

            </div>
        </div>
    </section>
    <section className='video_bigdiv'>
            <div className='video_div'>
                <img src={video}/>
            {/* <video  autoPlay loop muted className='video'>
             <source src={video} type='video/mp4'/>
         </video> */}
      

            </div>
            <div className='video_text'>
                <h1>Toxucular</h1>
                <p>Bütün məhsullar əl əməyi ilə hazırlanıb.Və buradakı kimyəvi toksidantların
                    miqdarı minimuma endirilib..
                       
                     </p>

            </div>

        {/* </div> */}

    </section>
    <section className='catdirilma_bigdiv'>
        <div className='catdirilma_minidiv'>
            <div className='catdirilma_div'>
                <img src={catdirilma1}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='catdirilma_div'>
                <img src={catdirilma2}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='catdirilma_div'>
                <img src={catdirilma3}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='catdirilma_div'>
                <img src={catdirilma4}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

        </div>

    </section>
    </>
  )
}

export default Home