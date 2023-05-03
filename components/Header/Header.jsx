import React,{ useEffect, useState } from "react";
import Link from "next/link";
import NavbarItems from "./NavbarItems";
import Logo from "./Logo";

const Header = () => {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      className={`navbar navbar-expand-lg fixed-top navbar-dark pt-3 pb-3 mt-2 ${
        isScrolled ? "bg-dark shadow-transition z-index-3" : ""
      } ${navbarCollapse ? "bg-dark z-index-3" : "z-index-3"}`}
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <Logo />
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
          <ul className="nav navbar-nav ms-auto mt-3 mt-lg-0">
            <NavbarItems />
            <li className="nav-item">
              <Link
                href="tel:+919975767561"
                className="nav-link"
                style={{fontSize: '1.11rem', fontFamily: "Manrope"}}
              >
                (+91) 99757-67561
              </Link>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <Link
                className="nav-link btn btn-light text-black w-md-25 w-50 w-lg-100"
                aria-current="page"
                href="/contact"
              >
                Contact Us
              </Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Header);
