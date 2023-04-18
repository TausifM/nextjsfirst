import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../asset/img/Logo2.png";

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
      return !prev
    });  
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark p-3 ${
        isScrolled ? "bg-dark shadow-transition z-index-1" : ""
      } ${navbarCollapse ? "bg-dark z-index-1" : ""}`}
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <Link className="navbar-brand pt-1 pb-0" href="/">
          <Image src={Logo} alt="" />
        </Link>
        <button
          className={`navbar-toggler ${navbarCollapse ? "collapsed z-index-1" : ""}`}
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
        <div className={`navbar-collapse ${navbarCollapse ? "" : "collapse"}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-3 mt-lg-0">
            {/* <li className="nav-item">
              <Link className={({ isActive }) => isActive ? "nav-link active mt-1" : "nav-link mt-1"}           
                aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link className={({ isActive }) => isActive ? "nav-link active mt-1" : "nav-link mt-1"}           
                aria-current="page" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={({ isActive }) => isActive ? "nav-link active mt-1" : "nav-link mt-1"}           
                  aria-current="page" href="/contact">
                  Contact
              </Link>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <Link
                className="nav-Link btn btn-light text-black w-md-25 w-50 w-lg-100"
                aria-current="page"
                to="#"
              >
                Log In
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;