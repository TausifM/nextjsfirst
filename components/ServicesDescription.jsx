import Image from "next/image";
import { IMAGES } from "../asset";

const ServiceDescription= () => {
  return (
    <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start"><Image className="img-fluid" src={IMAGES.Offer1} alt="" width="auto" height="auto" /></div>
        <div className="col-lg-6">
          <h1 className="fs-xl-5 fs-lg-4 fs-3 text-white">We connect our customers with the best, and help them keep up-and stay open.</h1>
          <ul className="list-unstyled my-xl-5 my-3">
            <li className="fs-2 my-4 d-flex align-items-center gap-3 text-white-50">
              <i className="fa-solid fa-circle-check fs-4 text-white"></i><span>We connect our customers with the best.</span>
            </li>
            <li className="fs-2 my-4 d-flex align-items-center gap-3 text-white-50">
              <i className="fa-solid fa-circle-check fs-4 text-white"></i><span>Advisor success customer launch party.</span>
            </li>
            <li className="fs-2 my-4 d-flex align-items-center gap-3 text-white-50">
              <i className="fa-solid fa-circle-check fs-4 text-white"></i><span>Business-to-consumer long tail.</span>
            </li>
          </ul>
          <button className="btn btn-outline-light">Start now</button>
        </div>
      </div>
    </div> 
  </section> 
  )
}

export default ServiceDescription;