import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import LogoSlider from "./LogoSlider";
import BgImg from "../asset/img/hero/hero-bg.png";
import ParticlesEffect from "./Particles/ParticlesEffect";
import CircleToolTipContent from "./Blob/CircleToolTipContent";

const Blob = dynamic(() => import("./Blob"), { ssr: false });

const HeroSection = () => {
  const [activeCircle, setActiveCircle] = useState(false);
  return (
    <div className="bg-dark">
      <Image
        className="img-fluid hero-img position-absolute end-0"
        src={BgImg}
        alt=""
        width="auto"
        height="auto"
        blurDataURL={BgImg}
        rel="preload"
        crossOrigin="anonymous"
        priority
      />
      <section className="pb-5">
        <div className="container">
          <div className="row align-items-center py-lg-5 py-5">
            <div style={{ position: "relative !important" }}>
              <ParticlesEffect />
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <p className="m-3 text-600 fs-3 text-muted ms-0 fw-light text-uppercase">
                Welcome to Love Lace Innovations
              </p>
              <h1 className="text-white fs-5 fs-xl-6 mb-4">
                We are a creative group of people who design influential brands
                and digital experiences.
              </h1>
              <div className="d-sm-flex align-items-center gap-3">
                <Link
                  href="/contact"
                  className="custom-btn btn-14 mb-3 w-75 text-uppercase"
                >
                  Start a project
                </Link>
                <Link
                  href="/about"
                  className="btn btn-outline-light mb-3 w-75 text-uppercase text-muted"
                >
                  More about us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-lg-end mt-lg-0">
              <div className="p-0 d-flex justify-content-center align-content-center">
                <Canvas
                  camera={{ position: [0.0, 0.0, 3.5] }}
                  style={{ height: "450px", padding: "10px", position: "relative" }}
                >
                  <Blob />
                </Canvas>
                <div className="item-hints text-center position-absolute z-index-1" onClick={() => setActiveCircle(!activeCircle)}>
                  <div className="hint">
                    <span className="hint-radius"></span>
                    <span className="hint-dot m-0"></span>
                  </div>
                </div>
                {activeCircle ? <CircleToolTipContent activeCircle={activeCircle} /> : null}
              </div>
              </div>
            </div>
          <LogoSlider />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
