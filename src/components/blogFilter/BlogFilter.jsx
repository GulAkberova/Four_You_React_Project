import React, { useContext, useEffect, useState } from "react";
import blog1 from "../../assets/image/blog1.png";
import searchh from "../../assets/icons/Search.png";
import AuthContext from "../../context/AuthProvider";
import { data } from "../../api/data";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function BlogFilter() {
  let { setFilter, setSearch, search } = useContext(AuthContext);

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    data.getAll("blog").then((res) => {
      res.sort((a, b) => new Date(a.created_date) - new Date(b.created_date));
      setBlog(res);
    });
  }, []);
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <div className="blog_filterdiv">
        <div className="blog_filterdiv_search">
          <input
            type="text"
            placeholder="Axtarış"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <img src={searchh} />
        </div>
        <div className="blog_filterdiv_category">
          <h4>Kateqoriya</h4>
          <ul>
            <li>
              <button onClick={(e) => handleFilter(e)} value="">
                Butun
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} value="Psixologiya">
                Psixologiya
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} value="Oyuncaq">
                Oyuncaq
              </button>
            </li>
            <li>
              <button onClick={(e) => handleFilter(e)} value="Sağlamlıq">
                Sağlamlıq
              </button>
            </li>
          </ul>
        </div>
        <div className="blog_filterdiv_top5">
          <h4>Top 5 Bloq</h4>
          {blog &&
            blog.map((index, key) => (
              <div className="blog_filterdiv_top" key={key}>
                <img src={index.image} />
                <div>
                  <Link to={`/blog/${index.id}`}>
                    <b>{index.title.slice(0, 36)}...</b>
                  </Link>
                  <br />
                  <span>
                    {" "}
                    <Moment format="DD.MM.YYYY">{index.update_date}</Moment>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default BlogFilter;
