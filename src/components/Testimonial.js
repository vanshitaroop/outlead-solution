import React from 'react';
import  Carousel  from 'react-elastic-carousel';

export const Testimonial = () => {
  
    
      return (
        <>
         <Carousel enableAutoPlay autoPlaySpeed={2000} style={{padding:"120px"}}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
    </Carousel>
    </>
  );
};
