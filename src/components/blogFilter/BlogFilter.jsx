import React from 'react'
import { NavLink } from "react-router-dom";
import blog1 from "../../assets/image/blog1.png";
import search from "../../assets/icons/Search.png";

function BlogFilter() {
  return (
    <>
     <div className="blog_filterdiv">
          <div className="blog_filterdiv_search">
            <input type="text" placeholder="Axtarış" />
            <img src={search} />
          </div>
          <div className="blog_filterdiv_category">
            <h4>Kateqoriya</h4>
            <ul>
              <li>
                <NavLink>Psixologiya</NavLink>
              </li>
              <li>
                <NavLink>Oyuncaq</NavLink>
              </li>
              <li>
                <NavLink>Sağlamlıq</NavLink>
              </li>
            </ul>
          </div>
          <div className="blog_filterdiv_top5">
            <h4>Top 5 Bloq</h4>
            <div className="blog_filterdiv_top">
              <img src={blog1} />
              <div>
                <b>Phonemic Activities for the Classroom...</b>
                <br />
                <span>02.22.2023</span>
              </div>
            </div>
            <div className="blog_filterdiv_top">
              <img src={blog1} />
              <div>
                <b>Phonemic Activities for the Classroom...</b>
                <br />
                <span>02.22.2023</span>
              </div>
            </div>
            <div className="blog_filterdiv_top">
              <img src={blog1} />
              <div>
                <b>Phonemic Activities for the Classroom...</b>
                <br />
                <span>02.22.2023</span>
              </div>
            </div>
            <div className="blog_filterdiv_top">
              <img src={blog1} />
              <div>
                <b>Phonemic Activities for the Classroom...</b>
                <br />
                <span>02.22.2023</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BlogFilter