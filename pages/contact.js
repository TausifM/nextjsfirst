import Wrapper from '../components/Wrapper';
import Link from 'next/link';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Wrapper>
        <section className="py-9">
          <div className="container m-auto w-100  overflow-hidden rounded-1">
            <div className="px-3 position-relative pt-0">
              <p className="fs-3 text-muted fw-light text-center text-uppercase">Contact Us</p>
              <h1 className="text-center w-lg-75 mx-auto fs-lg-6 fs-md-4 fs-3 text-white">
                Reach out for a new project or just say hello
              </h1>
              <div className="row justify-content-center mt-6 bg-white rounded-3">
                <form className="col-lg-6 w-100 w-lg-50 w-l bg-light rounded-3 text-white">
                <p className="p-4 fs-2 text-muted text-600 text-center mb-0 fw-light">SEND US A MESSAGE</p>
                  <input className="form-control mb-2 border-light fs-1 mt-1" type="text" name="contactName" placeholder="Your name" />
                  <input className="form-control mb-2 border-light fs-1 mt-3" type="email" name="emailContact" placeholder="Your email address" />
                  <input className="form-control mb-2 border-light fs-1 mt-3" type="mobile" name="contactMobile" placeholder="Your mobile number" />
                  <input className="form-control mb-2 border-light fs-1 mt-3" type="text" name="contactSubject" placeholder="Your subject" />
                  <textarea className="form-control mb-2 border-light fs-1 mt-3 rounded-4" rows="10" cols="50" type="text" name="contactMessage" placeholder="Your message" />
                  <button className="btn btn-success text-black mb-3 w-100 text-uppercase">Submit</button>
                </form>
                <div className="w-100 w-lg-50 col-lg-2">
                <p className="p-4 fs-2 text-secondary text-600 text-center mb-0 fw-light">CONTACT INFO</p>
                  <ul className="list-unstyled">
                    <li className="fs-1 p-3">
                     <i className="fa-solid fa-location fs-lg-1 fs-1 text-muted"></i>
                     <span className="ms-2 text-uppercase text-muted">Where to Find Us</span> 
                    </li>
                    <li className="shadow-sm offer-list-item mt-2 p-4 mt-1">
                      <span className="fs-0">Sanskruti Nagar, Arvi, Dist: Wardha, 442201</span>
                    </li>
                    <li className="fs-1 p-3">
                     <i className="fa-solid fa-envelope fs-lg-1 fs-1 text-muted"></i>
                      <span className="ms-2 text-uppercase text-muted">Email us at</span> 
                    </li>
                    <li className="fs-1 shadow-sm offer-list-item p-4 mt-1">
                      <span className="fs-0 ms-0">
                        <Link href="mailto:contact@lovelaceinnovations.com?subject=Contact For Service" target="_blank" className="text-muted">
                        contact@lovelaceinnovations.com</Link> |
                        <Link href="mailto:info@lovelaceinnovations.com?subject=Information of Service" target="_blank" className="ms-1 text-muted">
                        info@lovelaceinnovations.com</Link>
                      </span>
                    </li>
                    <li className="fs-1 p-3">
                     <i className="fa-solid fa-phone fs-lg-1 fs-1 text-muted"></i>
                      <span className="ms-2 text-uppercase text-muted">Contact us at</span> 
                    </li>
                    <li className="fs-2 shadow-sm offer-list-item p-4 mt-1">
                      <span className="fs-0">Mobile: <Link href="tel:+919975767561" className="text-muted">(+91) 99757 67561</Link></span>
                    </li>
                    <li className="fs-1 p-3">
                     <i className="fa-solid fa-group-arrows-rotate fs-lg-1 fs-1 text-muted"></i>
                      <span className="ms-2 text-uppercase text-muted">Social Media</span> 
                    </li>
                    <li className="shadow-sm offer-list-item mt-1 p-4 d-flex justify-content-center align-content-center">
                      <i className="fa-brands fa-facebook fs-lg-4 fs-3"></i>                      
                      <i className="fa-brands fa-instagram fs-lg-4 fs-3"></i>
                      <i className="fa-brands fa-twitter fs-lg-4 fs-3"></i>
                      <i className="fa-brands fa-instagram fs-lg-4 fs-3"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Wrapper>
    <Footer />
    </>
  )
}

export default Contact;