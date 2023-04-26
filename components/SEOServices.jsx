import Link from "next/link";

const SEOServices = () => {
  return (
    <section className="pt-4 bg-white pb-5">
      <div className="container">
        <h1 className="text-center text-uppercase text-dark fw-bolder" style={{textDecoration: "underline", textDecorationColor: "orangered", textDecorationThickness: "6px"}}>
          SEARCH ENGINE OPTIMIZATION - SEO
        </h1>
        <p className="mx-auto text-center fs-lg-1 fs-md-1 w-lg-75 text-black">
          Having a solid SEO strategy can benefit a business in many ways,
          including increasing <br />
          <Link
            href="https://developers.google.com/search/docs/beginner/seo-starter-guide"
            className="text-decoration-underline fw-bold fs-2 text-black"
            target="_blank"
          >
            website traffic
          </Link>
          , improving brand visibility and credibility, generating more leads
          and sales, and ultimately,
          <Link
            href="https://www.forbes.com/sites/forbesagencycouncil/2021/06/14/10-key-benefits-of-seo-for-your-business/"
            className="text-decoration-underline fw-bold fs-2 text-black ms-1"
            target="_blank"
          >
            boosting revenue.
          </Link>
        </p>
        <div className="row mt-5 justify-content-center align-content-center">
          <div className="col-sm-3 d-flex justify-content-center align-items-center">
            <h5 className="position-absolute z-index-2 text-white fw-bold">
              SEARCH
            </h5>
            <div className="seo-circle position-relative"></div>
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center p-4">
              <svg
                className="svg-inline--fa fa-arrow-right fs-lg-1 fs-1 text-black"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 
                256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                ></path>
              </svg>
          </div>
          <div className="col-sm-3 d-flex justify-content-center align-items-center m-4">
            <h5 className="position-absolute z-index-2 text-white fw-bold">
              ENGINE
            </h5>
            <div className="seo-circle position-relative"></div>
          </div>
          <div className="col-1 d-lg-flex justify-content-center align-items-center p-lg-4">
              <svg
                className="svg-inline--fa fa-arrow-right text-black"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 
                256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                ></path>
              </svg>
          </div>
          <div className="col-sm-3 d-flex justify-content-center align-items-center m-4">
            <h5 className="position-absolute z-index-2 text-white fw-bold">
              OPTIMIZATION
            </h5>
            <div className="seo-circle position-relative"></div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <Link
          href="/seo-pricing"
          className="custom-btn btn-14 mx-auto text-uppercase"
        >
          SEO Pricing
        </Link>
      </div>
    </section>
  );
};

export default SEOServices;
