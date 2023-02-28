import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
        Bele sehife yok<br/>
        <Link to='/'>
            Esas sehifeye qayit
        </Link>

    </div>
  )
}

export default Notfound