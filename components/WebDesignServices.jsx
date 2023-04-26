import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../asset";

const WebDesignServices = () => {
  return (
    <section className='pt-4 border-lg-top pb-5 bg-dark'>
    <div className="container">
      <h1 className="text-center text-uppercase fw-bolder text-white" style={{textDecoration: "underline", textDecorationColor: "orangered", textDecorationThickness: "6px"}}>Website Designs</h1>
      <p className="mx-auto text-center fs-lg-1 fs-md-1 w-lg-75 text-muted">
      Web design is the process of creating visually appealing and user-friendly websites that effectively communicate a brand&apos; 
      message and achieve its goals. It involves a combination of aesthetic design principles, usability best practices, 
      and technical skills to create a website that is both functional and engaging for its users. A digital web agency 
      specializes in providing web design services that help businesses establish a strong online presence, attract new
      customers, and drive conversions through their website.
      </p>
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
    <div className="text-center mt-5">
      <Link href='/web-design-pricing' className="custom-btn btn-14 mx-auto text-uppercase">Web Design Pricing</Link>
    </div>
  </section> 
  )
}

export default WebDesignServices;