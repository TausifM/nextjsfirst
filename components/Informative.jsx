import Image from "next/image";
import { IMAGES } from "../asset";

const Informative = () => {
  return (
    <section className="pt-8 pt-lg-0">
    <div className="container">
      <div className="d-flex flex-column-reverse flex-lg-row">
        <div className="col-lg-6">
          <h1 className="fs-lg-4 fs-md-3 fs-xl-5 mb-5 text-light">We connect our customers with the best, and help them keep up-and stay open.</h1>
          <ul className="list-unstyled">
            <li className="fs-2 shadow-sm offer-list-item">
              <i className="fa-solid fa-leaf fs-lg-4 fs-3"></i><span>We connect our customers with the best.</span>
            </li>
            <li className="fs-2 shadow-sm offer-list-item">
              <i className="fa-solid fa-eye fs-lg-4 fs-3"></i><span>Advisor success customer launch party.</span>
            </li>
            <li className="fs-2 shadow-sm offer-list-item">
              <i className="fa-solid fa-sun fs-lg-4 fs-3"></i><span>Business-to-consumer long tail.</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 text-center text-lg-end"><Image className="img-fluid" src={IMAGES.Offer2} alt="" width="auto" height="auto" /></div>
      </div>
    </div> 
  </section>
  )
}

export default Informative;