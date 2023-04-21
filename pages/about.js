import Image from 'next/image';
// import Link from 'next/link';
import {IMAGES} from '../asset/index';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/NewsLetter.jsx';
import Wrapper from '../components/Wrapper.jsx';

const About = () => {
  return (
    <>
    <Wrapper>
    <section className="bg-dark text-center py-9">
        <div className="container">
          <p className=" fs-3 text-muted fw-light text-uppercase">About Us</p>
          <div className="col-12 col-md-7 mx-auto">
            <h1 className="text-white fs-lg-7 fs-md-4 fs-3 my-4">We love to make great things, things that matter.</h1>
          </div>
          <p className="w-md-50 text-muted mx-auto fs-4 ">We’ve got everything you need to launch and grow your business.</p>
        </div>
      </section> 
      <section className="pb-0">
        <div className="container">
          <div className="gallery-wraper">
            <div className="img-wraper"><Image className="img-fluid" src={IMAGES.Gallery1} alt="" width="auto" height="auto" /></div>
            <div className="img-wraper"><Image className="img-fluid" src={IMAGES.Gallery2} alt="" width="auto" height="auto"/></div>
            <div className="img-wraper"><Image className="img-fluid" src={IMAGES.Gallery3} alt="" width="auto" height="auto"/></div>
            <div className="img-wraper"><Image className="img-fluid" src={IMAGES.Gallery4} alt="" width="auto" height="auto"/></div>
            <div className="img-wraper"><Image className="img-fluid" src={IMAGES.Gallery5} alt="" width="auto" height="auto"/></div>
          </div>
          <div className="px-xl-8 px-md-5 px-3 py-8">
            <p className="fs-1">Our Story</p>
            <h1 className="fs-lg-6 fs-md-4 fs-3 my-4">We’ve got everything you need to launch and grow your business.</h1>
            <p className="fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer.</p>
          </div>
          <div className="row align-items-center py-lg-8 py-6">
              <div className="col-lg-6 text-center text-lg-start">
                  <div className="service-icon">
                      <i className="icon-group"></i>
                  </div>
                  <div className="service-text">
                      <h3 className="h2">Illustration</h3>
                      <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                      Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                      Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                      </p>
                  </div>
              </div>
              <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0">
                    <div className="service-icon">
                        <i className="icon-paint-brush"></i>
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Brand Identity</h3>
                        <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                        Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                        Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
          <p className="text-center text-light">Our numbers</p>
          <h1 className="text-center text-white w-lg-75 mx-auto fs-xl-6 fs-lg-4 fs-3">
            Handshake infographic mass market crowdfunding iteration.</h1>
          <div className="row mt-5">
            <div className="col-md-4 col-sm-6 text-center">
              <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9">120M</h1>
              <p className="text-light fs-2">Cool feature title</p>
            </div>
            <div className="col-md-4 col-sm-6 text-center">
              <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9">10.000</h1>
              <p className="text-light fs-2">Cool feature title</p>
            </div>
            <div className="col-md-4 col-sm-6 text-center">
              <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9">240</h1>
              <p className="text-light fs-2">Cool feature title</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="px-xl-8 px-md-5 px-3">
            <p className="text-gray fs-1">Our team</p>
            <h1 className="text-black fs-lg-6 fs-md-4 fs-3 my-4">The leadership team</h1>
            <p className="text-gray fs-1 w-lg-75">Conversion angel investor entrepreneur first 
            mover advantage. Handshake infographic mass market crowdfunding iteration.
             Traction stock user experience deployment beta innovator incubator focus.</p>
          </div>
          {/* <div className="row mt-7">
            <div className="col-md-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left"><Link href="#">
              <Image className="img-fluid" src="assets/img/team/1.png" alt="" /></Link>
              <h1 className="fs-3 mt-3">Michael Scott</h1>
              <p className="fs-1">General Manager</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left"><Link href="#">
              <Image className="img-fluid" src="assets/img/team/2.png" alt="" /></Link>
              <h1 className="fs-3 mt-3">Dwight Schrute</h1>
              <p className="fs-1">General Manager</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left"><Link href="#">
              <Image className="img-fluid" src="assets/img/team/3.png" alt="" /></Link>
              <h1 className="fs-3 mt-3">Pam Beetsley</h1>
              <p className="fs-1">General Manager</p>
            </div>
          </div> */}
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
          <div className="px-xl-8 px-md-5 px-3">
            <p className="text-light fs-1">Our values</p>
            <h1 className="text-white fs-lg-6 fs-md-4 fs-3 my-lg-4 my-3">Things in we believe</h1>
            <p className="text-light w-lg-75 fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
            <div className="row mt-5">
              <div className="col-md-3"><Image className="img-fluid" src={IMAGES.Values1} alt="" width="auto" height="auto"/></div>
              <div className="col-md-9 mt-2 mb-md-0">
                <h1 className="text-white fs-2 fs-lg-3 my-2">We are commited.</h1>
                <p className="text-light fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3"><Image className="img-fluid" src={IMAGES.Values2} alt="" width="auto" height="auto"/></div>
              <div className="col-md-9 mt-2 mb-md-0">
                <h1 className="text-white fs-2 fs-lg-3 my-2">We are responsible.</h1>
                <p className="text-light fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3"><Image className="img-fluid" src={IMAGES.Values3}alt="" width="auto" height="auto"/></div>
              <div className="col-md-9 mt-2 mb-md-0">
                <h1 className="text-white fs-2 fs-lg-3 my-2">We aim for progress.</h1>
                <p className="text-light fs-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
    <Newsletter/>
    <Footer />
    </>
  )
}

export default About
