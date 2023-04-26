import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../asset";

function LogoDesign() {
  return (
    <section className='pt-4 border-lg-top border-lg-bottom pb-5 bg-dark'>
    <div className="container">
      <h1 className="text-center text-uppercase text-white fw-bolder" style={{textDecoration: "underline", textDecorationColor: "orangered", textDecorationThickness: "6px"}}>Logo Designs</h1>
      <p className="mx-auto text-center fs-lg-1 fs-md-1 w-lg-75 text-muted">
      Logo design is important because it serves as the visual representation of a company or brand. 
      It is often the first thing that customers see and associate with the brand, and it plays a 
      crucial role in creating brand recognition and loyalty. A well-designed logo can help a company 
      stand out from competitors, communicate its values and personality, and establish a sense of 
      trust and credibility with its audience. A logo can also be used across various marketing 
      materials, such as websites, business cards, and social media platforms, to create a consistent 
      and cohesive brand identity. Overall, a well-designed logo is a critical element in building 
      a strong brand that resonates with its target audience.
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
      <Link href='/logo-design-pricing' className="custom-btn btn-14 mx-auto text-uppercase">Logo Design Pricing</Link>
    </div>
  </section> 
  )
}

export default LogoDesign;