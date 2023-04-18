import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IMAGES } from '../asset'
import LogoSlider from './LogoSlider'

const HeroSection = () => {
  return (
    <div className="bg-dark"><Image className="img-fluid position-absolute end-0" src={IMAGES.HeroImg1} alt="" />
    <section className="pb-5">
      <div className="container">
        <div className="row align-items-center py-lg-8 py-6">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="m-3 text-600 fs-3 text-muted ms-0 fw-light text-uppercase">Welcome to Love Lace Innovations</p>
            <h1 className="text-white fs-5 fs-xl-6 mb-4">We are a creative group of people who design influential brands and digital experiences.</h1>
            <div className="d-sm-flex align-items-center gap-3">
              <Link href='/contact'style={{color: "black"}} className="btn btn-success text-black mb-3 w-75 text-uppercase">Start a project</Link>
              <Link href='/about' className="btn btn-outline-light mb-3 w-75 text-uppercase text-muted">More about us</Link>
              </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0"><Image className="img-fluid" src={IMAGES.HeroImg2} alt="" /></div>
        </div>
        <LogoSlider />
      </div> 
    </section> 
  </div>
  )
}

export default HeroSection