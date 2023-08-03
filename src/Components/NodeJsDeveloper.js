import React from 'react'
import nodeIlu from "../img/node-ilu.svg"
const NodeJsDeveloper = () => {
  return (
    <div className='container'>
      <div className='description-section'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='img-box'>
              <img src={nodeIlu} alt="" />
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='description-body-box'>
              <h3 className='main-title'>Hire Node Js Developer</h3>
              <p className='sub-title'>Lorem node js ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur exercitationem minus tempore nam ea, quos commodi. Et explicabo alias corporis tempora rerum officiis quo beatae eius, optio, minima fugiat?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NodeJsDeveloper
