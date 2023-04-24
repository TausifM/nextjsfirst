import Image from "next/image";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Suspense, lazy, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import LogoSlider from "./LogoSlider";
import BgImg from "../asset/img/hero/hero-bg.png";
const Blob = lazy(() => import("./Blob"));

const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
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
              <Particles
                id="tsparticles"
                style={{position: "absolute !important", top: 0, left: 0, right: 0, bottom: 0, height: "100vh"}}
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 1,
                      width: 0.2,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      directions: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 3,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,
                }}
              />
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
            <div className="col-lg-6 text-lg-end mt-3 mt-lg-0">
              <div className="text-center p-0">
                <Suspense fallback={<p>Loding</p>}>
                  <Canvas
                    camera={{ position: [0.0, 0.0, 3.5] }}
                    style={{ height: "450px", padding: "10px" }}
                  >
                    <Blob />
                  </Canvas>
                </Suspense>
                {/* <Image className="img-fluid" src={BgImg2} alt="" 
                  width="auto" height="auto" rel="preload" crossOrigin='anonymous' priority />
                  <div className="glow"></div> */}
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
