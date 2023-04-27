import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const handleCollapse = () => {
    setNavbarCollapse((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark p-3 mt-2 ${
        isScrolled ? "bg-dark shadow-transition z-index-3" : ""
      } ${navbarCollapse ? "bg-dark z-index-3" : "z-index-3"}`}
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <Link href="/" className="d-flex">
        <div className="logo-container ms-2">
          <div className="heart"></div>
        </div>
        <svg className="text" width="5.8cm" height="2cm" viewBox="130 25 120 160">
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
            <tspan x="0" y="50" className="is-active">INNOVATIONS</tspan>
          </text>
        </svg>
        </Link>
        <button
          className={`navbar-toggler ${
            navbarCollapse ? "collapsed z-index-1" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleCollapse}
        >
          <i className="fa-solid fa-bars text-white fs-3"></i>
        </button>
        <div
          className={`navbar-collapse ${navbarCollapse ? "" : "collapse"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mt-3 mt-lg-0">
            <li className="nav-item">
              <Link
                aria-current="page"
                href="/"
                className={
                  router.pathname == "/"
                    ? "nav-link active mt-1"
                    : "nav-link mt-1"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                aria-current="page"
                href="/about"
                className={
                  router.pathname == "/about"
                    ? "nav-link active mt-1"
                    : "nav-link mt-1"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                aria-current="page"
                href="/contact"
                className={
                  router.pathname == "/contact"
                    ? "nav-link active mt-1"
                    : "nav-link mt-1"
                }
              >
                Contact
              </Link>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <Link
                className="nav-Link btn btn-light text-black w-md-25 w-50 w-lg-100"
                aria-current="page"
                href="/"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
