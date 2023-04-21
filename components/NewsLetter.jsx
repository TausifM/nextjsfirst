import { IMAGES } from "../asset";
// import styles from "../styles/Home.modeule.css"
const Newsletter = () => {
  return (
    <section>
    <div className="container m-auto w-100 bg-dark overflow-hidden rounded-1">
      <div className={ `bg-holder` }style={{backgroundImage: `url(${IMAGES.NewsLetter})`}} ></div>
      <div className="px-5 py-7 position-relative">
        <h1 className="text-center w-lg-75 mx-auto fs-lg-6 fs-md-4 fs-3 text-white">An enterprise template to ramp up your company website</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-auto w-100 w-lg-50">
            <input className="form-control mb-2 border-light fs-1" type="email" placeholder="Your email address" />
            </div>
          <div className="col-auto mt-2 mt-lg-0">
            <button className="custom-btn btn-14 fs-1">Start now</button>
            </div>
        </div>
      </div>
    </div>
  </section> 
  )
}

export default Newsletter;
