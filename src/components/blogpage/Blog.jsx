import React,{useState, useEffect} from 'react'
import '../blogpage/blog.scss'
import { data } from '../../api/data'
import BlogCard from '../card/BlogCard'

function Blog() {

  const[blog, setBlog]=useState([])
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)

    data.getAll("blog").then((res) => {
      setBlog(res)
      setLoading(false)

    });
  }, []);
  return (
    <>
    <section className='carusel'>
        <h1>Blog</h1>

    </section>
    <section className='blog_bigdiv'>
    {
      loading ? <div className='loader_div'><span className='loader'></span></div>:
      blog && blog.map((index,key)=>(
        <BlogCard index={index} key={key}/>
     

      ))
    }

    </section>
    </>
  )
}  

export default Blog