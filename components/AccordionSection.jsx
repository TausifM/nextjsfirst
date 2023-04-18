import Image from 'next/image';
import { IMAGES } from '../asset';
import Accordion from './Subsections/Accordion';

const AccordionSection = () => {
  return (
    <section>
    <div className="container">
      <Image className="img-fluid" src={IMAGES.Offer3} alt="" />
        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <h2 className="fs-md-4 fs-3 pt-3 text-white">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
             </div>
            <div className="col-md-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <Accordion header={'We connect our customers with the best?'} 
                  body={'Placeholder content for this accordion, which is intended todemonstrate the accordion-flush class. This is the first item accordion body' }/>
                <Accordion header={'We connect our customers with the best?'} 
                  body={'Placeholder content for this accordion, which is intended todemonstrate the accordion-flush class. This is the first item accordion body' }/>
                </div>
              </div>
        </div>
      </div>
  </section>
  )
}

export default AccordionSection;