import React, { useState } from 'react';
import WorkA from '../API/WorkA';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import AccordionApi from '../API/AccordionApi';
const Blog = () => {
  const [accordionItems, setAccordionItems] = useState(AccordionApi);
  const toggleAccordion = (itemId) => {
    setAccordionItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
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

      {/* banner section */}
      <section>
        <div className='container'>
          <div className='banner-section'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <h3 className='text-center'>Let's talk about your <br /> Innovative project idea</h3>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='text-center'>

                  <Link href="#" className="btn btn__primary btn__primary-style2 mr-30" ><span>Get started</span><FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq */}
      <section>
        <div className="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div class="heading text-center mb-50">
                <h2 class="heading__subtitle">Frequently asked questions</h2>
                <h3 class="heading__title">What Are You Searching For?</h3>
              </div>
            </div>
          </div>
          <div id="accordion" className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              {accordionItems.slice(0, 5).map(item => (
                <div key={item.id} className={`accordion-item ${item.isOpen ? 'opened' : ''}`}>
                  <div className="accordion__header" onClick={() => toggleAccordion(item.id)}>
                    <div className="accordion__title">{item.title}</div>
                  </div>
                  <div id={`collapse${item.id}`} className={`accordion-open collapse ${item.isOpen ? 'show' : ''}`} data-parent="#accordion">
                    <div className="accordion__body">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              {accordionItems.slice(5, 10).map(item => (
                <div key={item.id} className={`accordion-item ${item.isOpen ? 'opened' : ''}`}>
                  <div className="accordion__header" onClick={() => toggleAccordion(item.id)}>
                    <div className="accordion__title">{item.title}</div>
                  </div>
                  <div id={`collapse${item.id}`} className={`collapse ${item.isOpen ? 'show' : ''}`} data-parent="#accordion">
                    <div className="accordion__body">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;