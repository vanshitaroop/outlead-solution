import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Testimonial = () => {
    const items = [
        <div key={1} className="item "><h1>Testimonial 1</h1></div>,
        <div key={2} className="item "><h1>testimonial 2</h1></div>,
        <div key={3} className="item "><h1>Testimonial 3</h1></div>,
        <div key={4} className="item "><h1>testimonial 4</h1></div>,
        <div key={5} className="item "><h1>Testimonial 5</h1></div>,
      ];
      

    return (
        <>
         <div className=' aliceCar'>
         <AliceCarousel
        
        autoPlay
        infinite
        autoPlayInterval={2000}
        buttonsDisabled={true}
        items={items}
        responsive={{
          0: { items: 1 },
          768: { items: 3 },
          1024: { items: 3 },
        }}
      />
         </div>
    </>
    );
};
