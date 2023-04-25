import Link from "next/link";

const Footer = () => {
  return (
    <section className="pt-0 pb-4" style={{ backgroundColor: "#3d3d3d36" }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-sm-12">
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
            <p className="w-lg-75 text-black-50">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="col-lg-2 col-sm-4">
            <h3 className="fw-bold fs-1 mt-5 mb-4">Landings</h3>
            <ul className="list-unstyled">
              <li className="my-3 col-md-4">
                <Link href="#" className="text-black-50">
                  Home
                </Link>
              </li>
              <li className="my-3">
                <Link href="#" className="text-black-50">
                  Products
                </Link>
              </li>
              <li className="my-3">
                <Link href="#" className="text-black-50">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4">
            <h3 className="fw-bold fs-1 mt-5 mb-4">Company</h3>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link href="#" className="text-black-50">
                  Home
                </Link>
              </li>
              <li className="my-3">
                <Link href="#" className="text-black-50">
                  Careers
                </Link>
                <span className="py-1 px-2 rounded-2 bg-success fw-bold text-dark ms-2">
                  Hiring!
                </span>
              </li>
              <li className="my-3">
                <Link href="#" className="text-black-50">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4">
            <h3 className="fw-bold fs-1 mt-5 mb-4">Resources</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="#" className="text-black-50">
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="text-black-50">
                  Products
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="text-black-50">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-black-50">All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
