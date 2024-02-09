import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/json/Animation - 1707389128887.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{height:"100%",width:"100%"}}
      />
    </div>
  );
};

export default LottieAnimation;
