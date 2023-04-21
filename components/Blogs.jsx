import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../asset";

const Blogs = () => {
  return (
    <section className="pb-2">
      <div className="container">
        <p className="text-center text-light fs-1">Our Blog</p>
        <h2 className="mx-auto text-center fs-lg-6 fs-md-5 w-lg-75 text-light">
          Value proposition accelerator product management venture
        </h2>
        <div className="row mt-7 gx-xl-7">
          <div className="col-md-4 text-center text-md-start h-auto mb-5">
            <div className="d-flex justify-content-between flex-column h-100">
              <Link href="#">
                <Image
                  className="w-75 w-md-100 rounded-2"
                  src={IMAGES.Blog1}
                  alt=""
                  width="auto" height="auto"
                />
              </Link>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3">
                <Link href="#">
                  <p className="fw-bold mb-0 text-black">Category</p>
                </Link>
                <p className="mb-0">November 22, 2021</p>
              </div>
              <Link href="#">
                <h5 className="mt-1 mb-3 fs-0 fs-md-1">
                  Pitch termsheet backing validation focus release.
                </h5>
              </Link>
              {/* <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                <Image
                  className="img-fluid"
                  src="assets/img/blog/profile1.png"
                  alt=""
                />
                <Link href="#">
                  <p className="mb-0 text-gray">Chandler Bing</p>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-md-4 text-center text-md-start h-auto mb-5">
            <div className="d-flex justify-content-between flex-column h-100">
              <Link href="#">
                <Image
                  className="w-75 w-md-100 rounded-2"
                  src={IMAGES.Blog2}
                  alt=""
                  width="auto" height="auto"
                />
              </Link>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3">
                <Link href="#">
                  <p className="fw-bold mb-0 text-black">Category</p>
                </Link>
                <p className="mb-0">November 22, 2021</p>
              </div>
              <Link href="#">
                <h5 className="mt-1 mb-3 fs-0 fs-md-1">
                  Seed round direct mailing non-disclosure agreement graphical
                  user interface rockstar.
                </h5>
              </Link>
              {/* <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                <Image
                  className="img-fluid"
                  src="assets/img/blog/profile2.png"
                  alt=""
                />
                <Link href="#">
                  <p className="mb-0 text-gray">Rachel Green</p>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-md-4 text-center text-md-start h-auto mb-5">
            <div className="d-flex justify-content-between flex-column h-100">
              <Link href="#">
                <Image
                  className="w-75 w-md-100 rounded-2"
                  src={IMAGES.Blog3}
                  alt=""
                  width="auto"
                  height="auto"
                />
              </Link>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3">
                <Link href="#">
                  <p className="fw-bold mb-0 text-black">Category</p>
                </Link>
                <p className="mb-0">November 22, 2021</p>
              </div>
              <Link href="#">
                <h5 className="mt-1 mb-3 fs-0 fs-md-1">
                  Beta prototype sales iPad gen-z marketing network effects
                  value proposition
                </h5>
              </Link>
              {/* <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                <Image
                  className="img-fluid"
                  src="assets/img/blog/profile3.png"
                  alt=""
                />
                <Link href="#">
                  <p className="mb-0 text-gray">Monica Geller</p>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          <button className="btn btn-outline-light">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
