import React, { useState, useEffect, useContext } from "react";
import "./blog.scss";
import { data } from "../../api/data";
import BlogCard from "../../components/card/BlogCard";
import BlogFilter from "../../components/blogFilter/BlogFilter";
import AuthContext from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";

function Blog() {
  let { filter, search } = useContext(AuthContext);

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
        <h2>Bloq</h2>
        <p>
          <NavLink to={"/"}>Ana Səhifə</NavLink>/
          <NavLink to={"/blog"}>Bloq</NavLink>
        </p>
      </section>
      <section className="blog_alldiv">
        <BlogFilter />

        <div className="blog_bigdiv">
          {loading ? (
            <div className="loader_div">
              <span className="loader"></span>
            </div>
          ) : (
            blog &&
            blog
              ?.filter((m) => m.title.toLowerCase().includes(search))
              .map(
                (index, key) =>
                  (filter === "" || index.category.title === filter) && (
                    <div className="blog_card_div_blog">
                      <BlogCard index={index} key={key} />
                    </div>
                  )
              )
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
