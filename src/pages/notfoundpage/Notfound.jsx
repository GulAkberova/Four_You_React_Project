import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
        Belə səhifə yoxdur<br/>
        <Link to='/'>
            Əsas səhifəyə qayıt
        </Link>

    </div>
  )
}

export default Notfound