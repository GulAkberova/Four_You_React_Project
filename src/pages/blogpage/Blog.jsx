import React, { useState, useEffect } from "react";
import "./blog.scss";
import { data } from "../../api/data";
import BlogCard from "../../components/card/BlogCard";

import BlogFilter from "../../components/blogFilter/BlogFilter";

function Blog() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    data.getAll("blog").then((res) => {
      setBlog(res);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <section className="carusel">
        <h1>Blog</h1>
      </section>
      <section className="blog_alldiv">
       <BlogFilter/>

        <div className="blog_bigdiv">
          {loading ? (
            <div className="loader_div">
              <span className="loader"></span>
            </div>
          ) : (
            blog &&
            blog.map((index, key) => (
              <div className="blog_card_div_blog">
                <BlogCard index={index} key={key} />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
