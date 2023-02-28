import React from 'react'
// import { Nav } from 'react-bootstrap'
import {NavLink } from 'react-router-dom'
import './quiz.scss'

function Quiz() {
  return (
    <>
    <section className='quiz_bigdiv'>
      <div className='quiz_minidiv'>
        <h1>Birinci görüş</h1>
        <p>Buradan birinci görüşə daxil olaraq siz ödənişsiz şəkildə övladlarınızı real psixoloqlarla rahat şəkildə danışmasına və beləliklə övladlarınızda olan mənfi halları aşkar edə bilərsiniz.. </p>
        <div className='quiz_btn'>
          <NavLink to='/seans'> <button className='btn1'>Seans</button></NavLink>
          <button className='btn2'><a href="https://meet.google.com/egi-oqfs-enw?pli=1&authuser=0">1 ci görüş</a></button>
        </div>
      </div>

    </section>
    </>
  )
}

export default Quiz