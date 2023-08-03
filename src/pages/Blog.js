import React, { useState } from 'react';
import WorkA from '../API/WorkA';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Blog = () => {
  const [workdata] = useState(WorkA);

  return (
    <>

      <div className='blog-section'>
        <div className='blog-head-section'>
          <div className='blog-title'>
            <h1>Our Blog</h1>
          </div>
        </div>
        <div className='blog-grid'>
          <div className='container'>
            <div className='row'>
              {workdata.map((curElem, key) => {
                const { img, title, date, info, main, second } = curElem;
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4 mt-20">
                    <div className="post-item">
                      <div className="post__img " >
                        <a href="/">
                          <img loading="lazy" src={img} alt="blog image" />
                        </a>
                      </div>
                      <div className="post__body">
                        <div className="post__meta-cat">
                          <a href="/">{main}</a><a href="/">{second}</a>
                        </div>
                        <h4 className="post__title"><Link to="/HireDeveloper">{title}</Link>
                        </h4>
                        <div className="post__meta">
                          <span className="post__meta-date">{date}</span>
                        </div>
                        <p className="post__desc">{info}
                        </p>
                        <Link to="/BlogPost" className="btn btn__secondary btn__link">
                          <span>Read More</span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Blog;