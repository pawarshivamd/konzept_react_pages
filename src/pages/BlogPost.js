import React, { useState } from 'react'
// import newImg from '../img/new.jpg'
import { Link } from 'react-router-dom'
import BlogPostLeftDate from '../API/BlogPost/BlogPostLeftDate'
import BlogRightTop from '../API/BlogPost/BlogRightTop';


const BlogPost = () => {
  const [BlogPostLeftapi] = useState(BlogPostLeftDate);
  const [BrightTop] = useState(BlogRightTop);
  return (
    <>
      <section className="page-title page-title-layout15 text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <nav>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item"><a href="https://www.konzeptsolutions.com/index">Home</a></li>
                  <li className="breadcrumb-item"><Link to="/">Blog</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Welcome To 2022 Year</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="blog blog-single pt-0 pb-80 mt-20">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              {BlogPostLeftapi.map((curEle, id) => {
                const { img, date, dateinfo, title, info } = curEle;
                return (
                  <div className="post-item mb-0">
                    <div className="post__img">
                      <Link to="/">

                        <img src={img} alt="blog image" />
                      </Link>
                    </div>
                    <div className="post__meta d-flex align-items-center mb-20">
                      <span className="post__meta-date">{date}</span>
                      <div className="post__meta-cat">
                        <a href="/">{dateinfo}</a>
                      </div>

                    </div>
                    <h1 className="post__title mb-30">
                      {title}
                    </h1>
                    <div className="post__desc">
                      <p>{info}</p>

                    </div>
                  </div>
                )
              })}



            </div>

            <div className="col-sm-12 col-md-7 col-lg-4">
              <aside className="sidebar">

                <div className="widget widget-posts">
                  <h5 className="widget__title">Recent Posts</h5>
                  {BrightTop.map((curEle, i) => {
                    const { img, Date, Dateinfo } = curEle;
                    return (
                      <div className="widget__content">

                        <div className="widget-post-item d-flex align-items-center">
                          <div className="widget-post__img">
                            <a href="/"><img loading="lazy" src={img} alt="thumb" /></a>
                          </div>
                          <div className="widget-post__content">
                            <span className="widget-post__date">{Date}</span>
                            <h4 className="widget-post__title">{Dateinfo}</h4>
                          </div>
                        </div>
                      </div>
                    )
                  })}


                </div>

                <div className="widget widget-tags">
                  <div className="widget-content">
                    <h5 className="widget__title">Tags</h5>
                    <ul className="list-unstyled mb-0">
                      <li><a href="/">NewYear</a></li>
                      <li><a href="/">Welcome</a></li>
                      <li><a href="/">2022</a></li>

                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
