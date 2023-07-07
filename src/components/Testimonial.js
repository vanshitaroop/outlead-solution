import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Testimonial = () => {
    const items = [
        <div key={1} className="item center"><h3>Testimonial 1</h3></div>,
        <div key={2} className="item center"><h3>Testimonial 2</h3></div>,
        <div key={3} className="item center"><h3>Testimonial 3</h3></div>,
        <div key={4} className="item center"><h3>Testimonial 4</h3></div>,
        <div key={5} className="item center"><h3>Testimonial 5</h3></div>,
      ];
      

    return (
        <>
         <div class="nine" style={{marginTop:"60px"}}>
        <h1><span><h2>Testimonials</h2></span></h1>
      </div>
         <div className=' aliceCar'>
         <AliceCarousel
        
        autoPlay
        infinite
        autoPlayInterval={2000}
        buttonsDisabled={true}
        items={items}
        responsive={{
          0: { items: 1 },
          768: { items: 1},
          1024: { items: 1 },
          
        }}
        
        
      />
         </div>
    </>
    );
};
