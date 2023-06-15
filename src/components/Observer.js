/* eslint-disable */
import { useRef, useEffect } from "react";

const ScrollDetector = () => {
    const targetRef = useRef(null);
  
    useEffect(() => {
      const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log('Scrolled to the end of the element!');
          // Perform any action you want when the user scrolls to the end
        }
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const observer = new IntersectionObserver(handleIntersection, options);
      const target = targetRef.current;
  
      if (target) {
        observer.observe(target);
      }
  
      // Cleanup the observer on unmount
      return () => {
        if (target) {
          observer.unobserve(target);
        }
      };
    }, []);
  
    return (
      <div
        ref={targetRef}
      >
        {/* Content of the scrollable element */}
      </div>
    );
  };


  export default ScrollDetector;