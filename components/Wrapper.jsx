import dynamic from 'next/dynamic';
import Header from './Header/Header';
import { useEffect, useRef } from 'react';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), { ssr: false });

const Wrapper = (props) => {
  const progressBarRef = useRef(null);
  const progressBarScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressBarRef.current.style.width = scrolled + "%";
  };

  useEffect(() => {
    window.onscroll = () => {
      progressBarScroll();
    };
  }, []);
    return (
      <>
        <AnimatedCursor 
          innerSize={20}
          outerSize={30}
          color="250, 101, 60"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          outerStyle={{
            border: '1px solid #fff'
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="mobile"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
      />
      <div className="headerBar">
          <div className="progress-container">
            <div className="progress-bar" ref={progressBarRef} id="progressBar"></div>
          </div>
        </div>
      <main
        className="main bg-dark wrapper"
        id="top"
      >
        <Header />
        {props.children} 
      </main>
      </>
    );
  };
  
  export default Wrapper;