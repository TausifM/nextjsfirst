import { useState } from "react";

const Accordion = ({ header, body }) => {
  const [accordionCollapse, setaccordionCollapse] = useState(false);
  const handleCollapse = () => {
    setaccordionCollapse((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className="accordion-item z-index-0"></div>
      <h2 className="accordion-header border-bottom" id="srgdgfdgdgg45">
        <button
          className={`accordion-button ${
            accordionCollapse ? "" : "collapsed"
          } text-black`}
          type="button"
          onClick={handleCollapse}
          data-bs-toggle="collapse"
          data-bs-target="#srgdgfdgdgg45tyuu"
          aria-expanded="false"
          aria-controls="srgdgfdgdgg45"
        >
          <span className="fs-1 pe-3">{header}</span>
        </button>
      </h2>
      <div
        className={`accordion-collapse ${accordionCollapse ? " zindex-0" : "collapse z-index-0"}`}
        aria-labelledby="srgdgfdgdgg45"
        data-bs-parent="#accordionFlushExample"
        id="srgdgfdgdgg45tyuu"
      >
        <div className="accordion-body">
          <p className="mb-0">{body}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
