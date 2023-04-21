import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import LogoSlider from './LogoSlider';
import BgImg from '../asset/img/hero/hero-bg.png';
import BgImg2 from '../asset/img/hero/hero-graphics.png';

const HeroSection = () => {
    const [bounds, setBounds] = useState(null);
    const cardRef = useRef(null);
  
    function rotateToMouse(e) {
      if (!bounds) return;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x**2 + center.y**2);
  
      const card = cardRef.current;
      if (card) {
        card.style.transform = `
          scale3d(1.07, 1.07, 1.07)
          rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance)* 2}deg
          )
        `;
        card.querySelector('.glow').style.backgroundImage = `
          radial-gradient(
            circle at
            ${center.x * 2 + bounds.width/2}px
            ${center.y * 2 + bounds.height/2}px,
            #ffffff55,
            #0000000f
          )
        `;
      }
    }
  
    function handleMouseEnter() {
      setBounds(cardRef.current.getBoundingClientRect());
      document.addEventListener('mousemove', rotateToMouse);
    }
  
    function handleMouseLeave() {
      document.removeEventListener('mousemove', rotateToMouse);
      const card = cardRef.current;
      if (card) {
        card.style.transform = '';
        card.style.background = '';
      }
    }
  
    useEffect(() => {
      const card = cardRef.current;
      if (card) {
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, []);

  return (
    <div className="bg-dark">
        <Image className="img-fluid hero-img position-absolute end-0" src={BgImg} alt="" width="auto" height="auto" 
        blurDataURL={BgImg} rel="preload" crossOrigin='anonymous' priority/>
        <section className="pb-5">
            <div className="container">
                <div className="row align-items-center py-lg-8 py-6">
                <div className="col-lg-6 text-center text-lg-start">
                    <p className="m-3 text-600 fs-3 text-muted ms-0 fw-light text-uppercase">Welcome to Love Lace Innovations</p>
                    <h1 className="text-white fs-5 fs-xl-6 mb-4">We are a creative group of people who design influential brands and digital experiences.</h1>
                    <div className="d-sm-flex align-items-center gap-3">
                    <Link href='/contact' className="custom-btn btn-14 mb-3 w-75 text-uppercase">Start a project</Link>
                    <Link href='/about' className="btn btn-outline-light mb-3 w-75 text-uppercase text-muted">More about us</Link>
                    </div>
                </div>
                    <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0">
                        <div className="hero-card text-center" ref={cardRef}>
                            <Image className="img-fluid" src={BgImg2} alt="" 
                            width="auto" height="auto" rel="preload" crossOrigin='anonymous' priority />
                            <div className="glow"></div>
                        </div>   
                    </div>
                </div>
                <LogoSlider />
            </div> 
        </section> 
  </div>
  )
}

export default HeroSection