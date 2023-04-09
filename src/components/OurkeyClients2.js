import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import client2 from "../assets/img/client2png.png"

export const OurkeyClients2 = () => {
    const items = [
        <div key={1} className="item center"> <img src={client2} alt="" width="80%"/> </div>,
        <div key={2} className="item center"><h1> Clients 2</h1></div>,
        <div key={3} className="item center"><h1> Clients 3</h1></div>,
        <div key={4} className="item center"><h1> Clients 4</h1></div>,
        <div key={5} className="item center"><h1> Clients 5</h1></div>,
      ];
      

    return (
        <>
         <div class="nine not-for-laptop" style={{marginTop:"60px"}}>
        <h1><span><h2>Our key Clients</h2></span></h1>
      </div>
         <div className='aliceCarClient not-for-laptop container'>
         <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval={2000}
        buttonsDisabled={true}
        items={items}
        responsive={{
          0: { items: 1 },
          768: { items: 3 },
          1024: { items: 1 },
          
        }}
        
        
      />
         </div>
    </>
    );
}
