import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../asset";


const WebDesignServices = () => {
  return (
    <section className='pt-4 border-lg-top'>
    <div className="container">
      <h4 className="text-center fs-3 text-uppercase fw-bold text-white">Website Designs</h4>
      <p className="mx-auto text-center fs-lg-1 fs-md-1 w-lg-75 text-muted">Handshake infographic mass market crowdfunding iteration.</p>
      <div className="row gx-xl-7 mt-5">
        <div className="col-md-4 mb-6 mb-md-0 text-center text-md-start"><Image className="w-50 w-md-100 rounded-2 web-design-image" src={IMAGES.Services1} alt=""  width="auto" height="auto" />
          <h4 className="mt-3 my-1 text-white">Happy Journey</h4>
          <p className="fs-1 mb-0 fw-semi-bold">The Vehicle Rental Website in India</p>
          <Link className="fs-1 pb-2 fw-bold border-light border-bottom text-decoration-none" href="https://happyjourney.vercel.app" target='_blank'>Explore page<i className="fa-solid fa-arrow-right ms-2"></i></Link>
        </div>
        <div className="col-md-4 mb-6 mb-md-0 text-center text-md-start"><Image className="w-50 w-md-100 web-design-image" src={IMAGES.Services2} alt=""  width="auto" height="auto"/>
          <h4 className="mt-3 my-1 text-white">Even cooler feature</h4>
          <p className="fs-1 mb-0 fw-semi-bold">Learning curve network effects return on investment.</p>
          <Link className="text-opacity-50 fs-1 pb-2 fw-bold border-light border-bottom text-decoration-none" href="#">Explore page<i className="fa-solid fa-arrow-right ms-2"></i></Link>
        </div>
        <div className="col-md-4 mb-6 mb-md-0 text-center text-md-start"><Image className="w-50 w-md-100 web-design-image" src={IMAGES.Services3} alt=""  width={"auto"} height={"auto"} />
          <h4 className="mt-3 my-1 text-white">Cool feature title</h4>
          <p className="fs-1 mb-0 fw-semi-bold">Learning curve network effects return on investment.</p>
          <Link className="text-opacity-50 fs-1 pb-2 fw-bold border-light border-bottom text-decoration-none" href="#">Explore page<i className="fa-solid fa-arrow-right ms-2"></i></Link>
        </div>
      </div>
    </div> 
  </section> 
  )
}

export default WebDesignServices;