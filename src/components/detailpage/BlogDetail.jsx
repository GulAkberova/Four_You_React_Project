import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../api/data'
import "../detailpage/detail.scss";

function BlogDetail() {
  const param=useParams()
  const [blogData, setBlogData]=useState([])
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    data.getById("blog",param.id).then((res)=>{
      setBlogData(res)
      setLoading(false)
    })

  },[])
  console.log(blogData.image)
  return (
    <>
    <section className='blog_detail_div'>
      <h2>{blogData.title}</h2>
      <div>
        <img src={blogData.image}/>
      </div>
      <p>
        {blogData.content}
      </p>

    </section>
    
    </>
  )
}

export default BlogDetail