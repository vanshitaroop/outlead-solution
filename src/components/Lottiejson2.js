import React from 'react';
import Lottie from 'react-lottie';
import animationData2 from '../assets/json/services-main.json';

const LottieAnimationtwo = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                style={{ width: "100%", height: "100%" }}

            />
        </div>
    );
};

export default LottieAnimationtwo;
