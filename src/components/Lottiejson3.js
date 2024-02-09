import React from 'react';
import Lottie from 'react-lottie';
import animationData3 from '../assets/json/about-us-main.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Lottie
        options={defaultOptions}
        style={{height:"100%",width:"60%"}}

      />
    </div>
  );
};

export default LottieAnimation;
