import Link from "next/link";
// import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useEffect, useRef } from "react";

const SEOServices = () => {
    // const [lettersRef, setlettersRef] = useArrayRef();
    // const triggerRef = useRef(null);

    // function useArrayRef() {
    //     const lettersRef = useRef([]);
    //     lettersRef.current = [];
    //     return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    // }

    // gsap.registerPlugin(ScrollTrigger);
    // const text = 
    // `Having a solid SEO strategy can benefit a business in many ways, including increasing <br /> 
    // ${<Link href="https://developers.google.com/search/docs/beginner/seo-starter-guide" 
    // className='text-decoration-underline fw-bold fs-2 text-black' target="_blank">website traffic</Link>}, 
    // improving brand visibility and credibility, generating more leads and sales, and ultimately, 
    //  ${<Link href="https://www.forbes.com/sites/forbesagencycouncil/2021/06/14/10-key-benefits-of-seo-for-your-business/" className='text-decoration-underline fw-bold fs-2 text-black ms-1' target="_blank">boosting revenue.</Link>}`

    // useEffect(() => {
    //     const anim = gsap.to(
    //         lettersRef.current,
    //         {
    //             scrollTrigger: {
    //                 trigger: triggerRef.current,
    //                 scrub: true,
    //                 start: "top center",
    //                 end: "bottom 85%"
    //             },
    //             color: "#2A2A2A",
    //             duration: 10,
    //             stagger: 2,
    //         }
    //     );
    //     return (() => {
    //         anim.kill()
    //     })
    // }, []);

  return (
    <section className='pt-6 bg-white pb-5'>
    <div className="container">
      <h4 className="text-center fs-3 text-uppercase text-dark fw-bold">SEARCH ENGINE OPTIMIZATION</h4>
      <p className="mx-auto text-center fs-lg-1 fs-md-1 w-lg-75 text-black">
            {/* <div ref={triggerRef}>
                {text.split("").map((letter, index) => (
                    <span className="reveal-text" key={index} ref={setlettersRef}>
                        {letter}
                    </span>
                ))} 
            </div> */}
                Having a solid SEO strategy can benefit a business in many ways, including increasing <br /> 
                <Link href="https://developers.google.com/search/docs/beginner/seo-starter-guide" 
                className='text-decoration-underline fw-bold fs-2 text-black' target="_blank">website traffic</Link>, 
                improving brand visibility and credibility, generating more leads and sales, and ultimately, 
                <Link href="https://www.forbes.com/sites/forbesagencycouncil/2021/06/14/10-key-benefits-of-seo-for-your-business/" 
                className='text-decoration-underline fw-bold fs-2 text-black ms-1' target="_blank">boosting revenue.</Link>
        </p>
      <div className="row mt-5 ">
        <div className="col-sm-3">
            <h3 className="text-center text-dark fw-bold bg-dark rounded text-white">SEARCH</h3>
        </div>
        <div className="col-lg-2">
            <h3 className="text-center text-dark fw-bold bg-dark rounded text-white ">
                <div className="item">
               <button className="seo-arrow"><i className="fa fa-long-arrow-right arrow1" aria-hidden="true"></i></button>
                </div>
            </h3>
        </div>
        <div className="col-sm-3 ">
            <h3 className="text-center text-dark fw-bold bg-dark rounded text-white">ENGINE</h3>
        </div>
        <div className="col-lg-2 ">
            <h3 className="text-center text-dark fw-bold bg-dark rounded text-white">SEO</h3>
        </div>
        <div className="col-sm-3">
            <h3 className="text-center text-dark fw-bold bg-dark rounded text-white">OPTIMIZATION</h3>
        </div>
      </div>
    </div>
    <div className="text-center mt-5">
      <Link href='/seo-pricing' className="custom-btn btn-14 mx-auto text-uppercase">SEO Pricing</Link>
    </div>
  </section> 
  )
}

export default SEOServices;