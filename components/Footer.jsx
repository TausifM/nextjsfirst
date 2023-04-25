import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../asset";

const Footer = () => {
  return (
    <section className="pt-0 pb-4"style={{backgroundColor:'#F8F8F8'}}>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6 col-sm-12">
            <Link href="/"><Image className="img-fluid mt-5 mb-4" src={IMAGES.FooterLogo} alt="" /></Link>
          <p className="w-lg-75 text-gray">Social media validation business model canvas graphical user
           interface launch party creative facebook iPad twitter.</p>
        </div>
        <div className="col-lg-2 col-sm-4">
          <h3 className="fw-bold fs-1 mt-5 mb-4">Landings</h3>
          <ul className="list-unstyled">
            <li className="my-3 col-md-4"><Link href="#">Home</Link></li>
            <li className="my-3"><Link href="#">Products</Link></li>
            <li className="my-3"><Link href="#">Services</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-4">
          <h3 className="fw-bold fs-1 mt-5 mb-4">Company</h3>
          <ul className="list-unstyled">
            <li className="my-3"><Link href="#">Home</Link></li>
            <li className="my-3"><Link href="#">Careers</Link>
            <span className="py-1 px-2 rounded-2 bg-success fw-bold text-dark ms-2">Hiring!</span></li>
            <li className="my-3"><Link href="#">Services</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-4">
          <h3 className="fw-bold fs-1 mt-5 mb-4">Resources</h3>
          <ul className="list-unstyled">
            <li className="mb-3"><Link href="#">Home</Link></li>
            <li className="mb-3"><Link href="#">Products</Link></li>
            <li className="mb-3"><Link href="#">Services</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-gray">All rights reserved.</p>
    </div>
  </section>
  )
}

export default Footer;