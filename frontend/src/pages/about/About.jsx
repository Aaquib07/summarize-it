import React from 'react'
import './about.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <div className='about'>
        <Navbar />
        <div className="about-info">
          <div className="info-header">
              <h2>We solve your problem of finding the overall summary of long texts for you!</h2>
          </div>
          <div className="info-para">
              <p>This website is free of cost. There's no limited trial problem for you!</p>
              <p>You can take our help for unlimited number of times!</p>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About