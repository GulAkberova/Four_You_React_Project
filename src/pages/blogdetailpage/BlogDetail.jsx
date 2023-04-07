import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { data } from "../../api/data";
import BlogFilter from "../../components/blogFilter/BlogFilter";
import "../../pages/blogpage/blog.scss";

function BlogDetail() {
  const param = useParams();
  const location = useLocation();

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.getById("blog", param.id).then((res) => {
      setBlogData(res);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    data.getById("blog", param.id).then((res) => {
      setBlogData(res);
      setLoading(false);
    });
  }, [location.pathname]);
  // console.log(blogData);
  return (
    <>
      <section className="carusel">
        <h2>Bloq</h2>
        <p>
          <NavLink to={"/"}>Ana Səhifə</NavLink>/
          <NavLink to={"/blog"}>Bloq</NavLink>/<NavLink>Ətraflı</NavLink>
        </p>
      </section>

      <section className="blog_alldiv">
        <BlogFilter />
        <div className="blog_detail_bigdiv">
          <span>
            <Moment format="DD.MM.YYYY">{blogData.update_date}</Moment>
          </span>
          <h2>{blogData.title}</h2>
          <div>
            <img src={blogData.image} />
          </div>
          <p>{blogData.content}</p>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
