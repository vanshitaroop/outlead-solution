import React from 'react';
import Lottie from 'react-lottie';
import animationData4 from '../assets/json/about-outlead.json';

const LottieAnimation2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{height:"100%", width:"70%"}}
        
      />
    </div>
  );
};

export default LottieAnimation2;
