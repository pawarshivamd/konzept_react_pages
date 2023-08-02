import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import reactnativeicon from "../img/tach logo/react.svg";
import nodejsicon from "../img/tach logo/node-js.svg";
import fluttericon from "../img/tach logo/react.svg";
import htmlicon from "../img/tach logo/html.svg";

import ReactNative from '../Components/ReactNative';
import NodeJsDeveloper from '../Components/NodeJsDeveloper';
import HTML5Developer from '../Components/HTML5Developer';
import FlutterDeveloper from '../Components/FlutterDeveloper';
import ReactJsDeveloper from '../Components/ReactJsDeveloper';
import AccordionApi from '../API/AccordionApi';
const HireDeveloper = (props) => {
  const [accordionItems, setAccordionItems] = useState(AccordionApi);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const toggleAccordion = (itemId) => {
    setAccordionItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const [selectedDeveloper, setSelectedDeveloper] = useState({
    title: 'Hire React Native Developer',
    icon: reactnativeicon,
    description: 'Harness the power of React JS with our top-tier developers – creating standout apps for every platform, effortlessly. Revamp your digital landscape with us',
    component: <ReactNative />
  });

  const hireContents = {
    'React JS': {
      title: 'Hire React JS Developer',
      icon: reactnativeicon,
      description: 'Harness the power of React JS with our top-tier developers – creating standout apps for every platform, effortlessly. Revamp your digital landscape with us',
      component: <ReactJsDeveloper />
    },
    'Node Js': {
      title: 'Hire Node Js Developer',
      icon: nodejsicon,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur exercitationem minus tempore nam ea, quos commodi. Et explicabo alias corporis tempora rerum officiis quo beatae eius, optio, minima fugiat?',
      component: <NodeJsDeveloper />
    },
    'Flutter': {
      title: 'Hire Flutter Developer',
      icon: fluttericon,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur exercitationem minus tempore nam ea, quos commodi. Et explicabo alias corporis tempora rerum officiis quo beatae eius, optio, minima fugiat?',
      component: <FlutterDeveloper />
    },
    'HTML 5': {
      title: 'Hire HTML 5 Developer',
      icon: htmlicon,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur exercitationem minus tempore nam ea, quos commodi. Et explicabo alias corporis tempora rerum officiis quo beatae eius, optio, minima fugiat?',
      component: <HTML5Developer />
    }
  };

  const handleHireButtonClick = (title) => {
    setSelectedDeveloper(hireContents[title]);
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
    // You can add your form submission logic here
  };

  const handleCloseMessage = () => {
    setShowSuccessMessage(false);
  };
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='hire-content-body'>
              <div className='icon-box'>
                  <img src={selectedDeveloper.icon} alt="" />
                </div>
                <h3>{selectedDeveloper.title}</h3>
                <p>{selectedDeveloper.description}</p>
                <div>
                  <ul>
                    <li>Transparent working models</li>
                    <li>Source code authorization</li>
                    <li>Agile development process</li>
                    <li>Daily/weekly/monthly reporting</li>
                    <li>On-time delivery</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div>
                <form id="formId" action="" className="contact-panel__form" onSubmit={handleSubmitForm}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="contact-panel__title">Get In Touch</h4>
                      <p className="contact-panel__desc mb-20">Our deep pool of certified engineers and IT
                        staff are ready to
                        help you to keep your IT business safe &amp; ensure high availability.</p>
                    </div>
                    <div className="col-sm-6 col-md-10 col-lg-10">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          id="name"
                          name="name"
                          title="please enter your name"
                          required=""
                          pattern="[a-zA-Z'-'\s]*"
                          autoFocus=""
                        />
                      </div>
                      {/* <!--                                               pattern="^(\w\w+)\s(\w+)$"--> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}

                    {/* <!--                                <div className="col-sm-6 col-md-10 col-lg-10">-->
                      <!--                                    <div className="form-group">-->
                        <!--                                        <input>-->
                          <!--                                    </div>-->
                      <!--                                </div>--> */}
                    <div className="col-sm-6 col-md-10 col-lg-10">
                      <div className="input-group mb-3 ">
                        <div className="input-group-prepend ">
                          <span className="input-group-text form-control plus" id="basic-addon1">+</span>
                        </div>
                        <input
                          type="number"
                          maxLength="15"
                          minLength="8"
                          className="form-control"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          placeholder="Phone"
                          id="mobile"
                          name="mobile"
                          title="Please enter your phone number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-10 col-lg-10">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          required=""
                          name="email"
                          pattern="[a-z][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                          title="Please enter your email"
                        />
                      </div>
                    </div>
                    {/* <!-- /.col-lg-6 --> */}

                    {/* <!-- <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Website (optional)" id="contact-website"
                          title="Please enter your website" name="contact-website">
                      </div>
                    </div> --> */}
                    {/* <!-- /.col-lg-6 --> */}
                    <div className="col-10">
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Describe your inquiry!" id="reqDes" title="Please enter your message" onInvalid={"this.setCustomValidity('Please enter your message!')"} name="reqDes"></textarea>
                      </div>
                      {/* <!-- === captcha = --> */}
                      {/* <div className="row">
                        <div className="col g-recaptcha" data-sitekey="6LfSMJkhAAAAAKVvLtUOSpPnM8S--HlAzv60dySJ" 
                        style={{"width: 304px !important; max-width: 304px !important; -ms-transform: scale(0.8, 0.8); -webkit-transform: scale(0.8, 0.8); transform: scale(0.8, 0.8); margin: 0px; padding: 0px;">

                        <div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfSMJkhAAAAAKVvLtUOSpPnM8S--HlAzv60dySJ&amp;co=aHR0cDovLzE5Mi4xNjguMS40ODo1MTM4Nw..&amp;hl=en&amp;v=pCoGBhjs9s8EhFOHJFe8cqis&amp;size=normal&amp;cb=l8qunjttyyju" width="304" height="78" role="presentation" name="a-y1b1sdr1n1u" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                      </div> */}
                      {/* <!-- ==== captcha === --> */}
                      <button type="submit" id="submitButton" className="btn btn__primary btn__icon btn__xhight mt-10   ">
                        <div id="loader" style={{ display: "none" }} className="spinner-border " role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                        <span>Submit Request</span><FontAwesomeIcon icon={faArrowRight} />
                      </button>
                      <div id="sucMsg" className={`mt-5 alert alert-success alert-dismissible thankyou-hide  ${showSuccessMessage ? 'thankyou-show' : ''}`} role="alert">
                        <h4><strong style={{ color: " #000907" }}>Thank You!</strong></h4>
                        <p> We are happy that you reached us. We will get back
                          to you soon</p>
                        <button type="button"  onClick={handleCloseMessage} className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>

                      <div className="contact-result"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      {selectedDeveloper.component}
      </section>
      <section>
        <div className="container">
          <h3 className="headig-sub-titile">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <h2 className="headig-title">Hire Developers</h2>
          <div className="row ">
            <div className="col-lg-6 co-md-6 col-sm-12">
              <div className="hire-dev-card">
                <div className="img-box">
                  <img src={reactnativeicon} alt="" />
                </div>
                <h2 className="hire-dev-title">React JS</h2>
                <h4 className="hire-dev-sub-title">An emerging framework considered to be a future of cross platform app development.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus recusandae ipsam ea suscipit a eaque voluptatum sunt soluta quo explicabo similique fugiat, voluptas maxime odio eveniet atque enim delectus.</p>
                <Link href="#" onClick={() => handleHireButtonClick('React JS')} className="btn btn__primary btn__primary-style2 mr-30" ><span>Hire React js</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
            <div className="col-lg-6 co-md-6 col-sm-12">
              <div className="hire-dev-card">
                <div className="img-box">
                  <img src={nodejsicon} alt="" />
                </div>
                <h2 className="hire-dev-title">Node Js</h2>
                <h4 className="hire-dev-sub-title">An emerging framework considered to be a future of cross platform app development.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus recusandae ipsam ea suscipit a eaque voluptatum sunt soluta quo explicabo similique fugiat, voluptas maxime odio eveniet atque enim delectus.</p>
                <Link href="#" onClick={() => handleHireButtonClick('Node Js')} className="btn btn__primary btn__primary-style2 mr-30" ><span>Hire Node Js</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
            <div className="col-lg-6 co-md-6 col-sm-12">
              <div className="hire-dev-card">
                <div className="img-box">
                  <img src={fluttericon} alt="" />
                </div>
                <h2 className="hire-dev-title">Flutter</h2>
                <h4 className="hire-dev-sub-title">An emerging framework considered to be a future of cross platform app development.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus recusandae ipsam ea suscipit a eaque voluptatum sunt soluta quo explicabo similique fugiat, voluptas maxime odio eveniet atque enim delectus.</p>
                <Link href="#" onClick={() => handleHireButtonClick('Flutter')} className="btn btn__primary btn__primary-style2 mr-30" ><span>Hire Fluter</span><FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
            <div className="col-lg-6 co-md-6 col-sm-12">
              <div className="hire-dev-card">
                <div className="img-box">
                  <img src={htmlicon} alt="" />
                </div>
                <h2 className="hire-dev-title">HTML 5</h2>
                <h4 className="hire-dev-sub-title">An emerging framework considered to be a future of cross platform app development.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus recusandae ipsam ea suscipit a eaque voluptatum sunt soluta quo explicabo similique fugiat, voluptas maxime odio eveniet atque enim delectus.</p>
                <Link href="#" onClick={() => handleHireButtonClick('HTML 5')} className="btn btn__primary btn__primary-style2 mr-30" ><span>Hire HTML 5</span><FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
                      {/* faq */}
          <section>
        <div className="container">
          <div id="accordion" className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
            {accordionItems.slice(0, 5).map(item => (
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
            <div className="col-sm-12 col-md-12 col-lg-6">
            {accordionItems.slice(5,10).map(item => (
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
  )
}

export default HireDeveloper
