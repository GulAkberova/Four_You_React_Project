import React from 'react'
import Moment from 'react-moment'
import { Link} from 'react-router-dom'
import '../blogpage/blog.scss'
function BlogCard({index}) {
  console.log(index)
  return (
    <>
    <div className='blog_card_div'>
    <div className='blog_card_div_img'>
      <img src={index.image}/>
    </div>
    <h4><Link to={`/blog/${index.id}`}>{index.title}</Link></h4>
    <div className='blog_card_date'>
    <p>{index.content.slice(0,30)}...</p>
    <Moment format="MM/YYYY">{index.update_date}</Moment>
    </div>
    </div>
  </>
  )
}

export default BlogCard