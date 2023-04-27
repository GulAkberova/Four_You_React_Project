import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "../../pages/blogpage/blog.scss";
import blog1 from "../../assets/image/blog1.png";
import arrow from "../../assets/icons/Arrow.png";
function BlogCard({ index }) {
  console.log(index);
  return (
    <>
      <div className="blog_card_div_img">
        <Link to={`/blog/${index.id}`}>
          <img src={index.image} />
        </Link>
      </div>

      <div className="blog_card_div_text">
        <h5>{index.title}</h5>
        <span>
          <Moment format="DD.MM.YYYY">{index.update_date}</Moment>
        </span>

        <p>{index.content.slice(0, 110)}...</p>
        <Link to={`/blog/${index.id}`}>
          Daha çox oxu
          <img src={arrow} />
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
