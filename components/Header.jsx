import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import Logo from "../asset/img/logo.png";

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
          <Image src={Logo} alt="" width="auto" height="auto" 
             blurDataURL={Logo} className="navbar-brand pt-1 pb-0 z-index-3" rel="preload" crossOrigin='anonymous'/>
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
            <li className="nav-item">
              <Link aria-current="page" href="/" className={router.pathname == "/" ? "nav-link active mt-1" : "nav-link mt-1"}>
                  Home
              </Link>
            </li>
            <li className="nav-item">
              <Link aria-current="page" href="/about" className={router.pathname == "/about" ? "nav-link active mt-1" : "nav-link mt-1"}>
                   About
              </Link>
            </li>
            <li className="nav-item">
              <Link aria-current="page" href="/contact" className={router.pathname == "/contact" ? "nav-link active mt-1" : "nav-link mt-1"}>
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