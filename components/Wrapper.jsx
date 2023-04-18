import dynamic from 'next/dynamic';
import Header from "./Header";
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), { ssr: false });

const Wrapper = (props) => {
    return (
      <>
        <AnimatedCursor 
          innerSize={20}
          outerSize={30}
          color="255, 255, 255"
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
      <main
        className="main bg-dark"
        id="top"
      >
        <Header />
        {props.children} 
      </main>
      </>
    );
  };
  
  export default Wrapper;