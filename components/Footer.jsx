import Link from "next/link";

const Footer = () => {
  return (
    <section
      className="pt-0 pb-4"
      style={{
        backgroundColor: "#7f5a83",
        backgroundImage: "linear-gradient(265deg, #7f5a83 0%, #0a2640 74%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-sm-12">
            <div className="d-flex mb-2 ms-3">
              <div className="logo-container ms-2">
                <div className="heart"></div>
              </div>
              <svg
                className="text"
                width="5.8cm"
                height="2cm"
                viewBox="130 25 120 160"
              >
                <text
                  fill="none"
                  stroke="#fff"
                  transform="translate(3 102)"
                  strokeWidth="3"
                  fontSize="50"
                  fontWeight="800"
                  letterSpacing="0.1em"
                  className="is-active"
                >
                  <tspan>LOVE LACE</tspan>
                  <tspan x="0" y="50" className="is-active">
                    INNOVATIONS
                  </tspan>
                </text>
              </svg>
            </div>
            <p className="text-white">
              We are a full-service digital agency offering top-notch services
              in website design, web design, SEO, and logo design. Our team of
              skilled professionals can help you create a stunning website that
              is not only visually appealing but also optimized for search
              engines to rank higher in search results. <br />
              Contact us today to take your online presence to the next level!
            </p>
          </div>
          <div className="col-lg-2 col-sm-4">
            <h3
              className="fw-bolder fs-1 mt-5 mb-4 text-white"
              style={{
                textDecoration: "underline",
                textDecorationColor: "orangered",
                textDecorationThickness: "6px",
              }}
            >
              General
            </h3>
            <ul className="list-unstyled">
              <li className="my-3 col-md-4">
                <Link href="/about" className="text-white">
                  About
                </Link>
              </li>
              <li className="my-3">
                <Link href="/testimonials" className="text-white">
                  Testimonials
                </Link>
              </li>
              <li className="my-3">
                <Link href="/contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li className="my-3">
                <Link href="/blogs" className="text-white">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4">
            <h3
              className="fw-bolder fs-1 mt-5 mb-4 text-white"
              style={{
                textDecoration: "underline",
                textDecorationColor: "orangered",
                textDecorationThickness: "6px",
              }}
            >
              Company
            </h3>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link href="/website-design" className="text-white">
                  Website Design
                </Link>
              </li>
              <li className="my-3">
                <Link href="/seo-packages" className="text-white">
                  SEO Packages
                </Link>
              </li>
              <li className="my-3">
                <Link href="/logo-design" className="text-white">
                  Logo Design
                </Link>
              </li>
              <li className="my-3">
                <Link href="/e-commerce" className="text-white">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4">
            <h3
              className="fw-bolder fs-1 mt-5 mb-4 text-white"
              style={{
                textDecoration: "underline",
                textDecorationColor: "orangered",
                textDecorationThickness: "6px",
              }}
            >
              Courses
            </h3>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link href="/e-book" className="text-white">
                  E-book
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4">
            <h3
              className="fw-bolder fs-1 mt-5 mb-4 text-white"
              style={{
                textDecoration: "underline",
                textDecorationColor: "orangered",
                textDecorationThickness: "6px",
              }}
            >
              Contact
            </h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="#" className="text-white">
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="text-white">
                  Products
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white mt-4">All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
