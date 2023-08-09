import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nodejsicon from "../img/tach logo/node-js.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const CardNodejs = () => {
    const [selectedDeveloper, setSelectedDeveloper] = useState({
        title: 'Hire React Native Developer',
        // icon: reactnativeicon,
        description: 'Harness the power of React JS with our top-tier developers – creating standout apps for every platform, effortlessly. Revamp your digital landscape with us',
        // component: <ReactNative />,
        // componentTE: <TEReactNative />
      });
    
      const hireContents = {
        'React JS': {
          title: 'Hire React JS Developer',
        //   icon: reactnativeicon,
          description: 'Harness the power of React JS with our top-tier developers – creating standout apps for every platform, effortlessly. Revamp your digital landscape with us',
        //   component: <ReactJsDeveloper />,
        //   componentTE: <TEReactJs />
        },
        'Node Js': {
          title: 'Hire Node Js Developer',
        //   icon: nodejsicon,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur exercitationem minus tempore nam ea, quos commodi. Et explicabo alias corporis tempora rerum officiis quo beatae eius, optio, minima fugiat?',
        //   component: <NodeJsDeveloper />,
        //   componentTE: <TENodeJs />
        },
        'Flutter': {
          title: 'Hire Flutter Developer',
        //   icon: fluttericon,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur exercitationem minus tempore nam ea, quos commodi. Et explicabo alias corporis tempora rerum officiis quo beatae eius, optio, minima fugiat?',
        //   component: <FlutterDeveloper />,
        //   componentTE: <TEFlutter />
        },
        'HTML 5': {
          title: 'Hire HTML 5 Developer',
        //   icon: htmlicon,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur exercitationem minus tempore nam ea, quos commodi. Et explicabo alias corporis tempora rerum officiis quo beatae eius, optio, minima fugiat?',
        //   component: <HTML5Developer />,
        //   componentTE: <TEHTML />
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
  return (
    <div className="col-lg-6 co-md-6 col-sm-12">
    <div className="hire-dev-card">
      <div className="img-box">
        <img src={nodejsicon} alt="" />
      </div>
      <h2 className="hire-dev-title">{selectedDeveloper.title}  </h2>
      <h4 className="hire-dev-sub-title">An emerging framework considered to be a future of cross platform app development.</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minus recusandae ipsam ea suscipit a eaque voluptatum sunt soluta quo explicabo similique fugiat, voluptas maxime odio eveniet atque enim delectus.</p>
      <Link href="#" onClick={() => handleHireButtonClick('Node Js')} className="btn btn__primary btn__primary-style2 mr-30" ><span>Hire Node Js</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
    </div>
  </div>
  )
}

export default CardNodejs
