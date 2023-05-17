import Image from "next/image";
import { IMAGES } from "../../asset";


const FirstTestimonials = () => {
    return (
        <section className="container flex-grow-1 container-p-y bg-white pt-5 rounded-2 pb-5">
            <div className="row">
                <div className="col-md-9 col-lg-4">
                    <div className="row">
                        <div className="testimonial-container p-4 d-flex"> 
                       <Image className="card-img card-img-left" src={IMAGES.PawanBatghare} alt="Card image" style={{ borderRadius: "50%", height: "fit-content"}}/>
                       <div className="card-body p-2">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            {/* <a href="javascript:void(0)" className="btn btn-outline-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-lg-4">
                    <div className="row">
                        <div className="testimonial-container p-4 d-flex"> 
                       <Image className="card-img card-img-left" src={IMAGES.PawanBatghare} alt="Card image" style={{ borderRadius: "50%", height: "fit-content"}}/>
                       <div className="card-body p-2">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            {/* <a href="javascript:void(0)" className="btn btn-outline-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-lg-4">
                    <div className="row">
                        <div className="testimonial-container p-4 d-flex"> 
                       <Image className="card-img card-img-left" src={IMAGES.PawanBatghare} alt="Card image" style={{ borderRadius: "50%", height: "fit-content"}}/>
                       <div className="card-body p-2">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            {/* <a href="javascript:void(0)" className="btn btn-outline-primary">Go somewhere</a> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstTestimonials