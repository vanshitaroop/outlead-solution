import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import client2 from "../assets/img/client2png.png"
import client3 from "../assets/img/client3.png"
import client4 from "../assets/img/client4.png"
import client5 from "../assets/img/client5.png"
import client6 from "../assets/img/client6.png"
import client7 from "../assets/img/client7.png"
import client8 from "../assets/img/client8.png"
export const OurkeyClients2 = () => {
    const items = [
        <div key={1} className="item center"> <img src={client2} alt="" width="80%"/> </div>,
        <div key={2} className="item center"><img src={client3} alt="" width="80%"/> </div>,
        <div key={1} className="item center"> <img src={client4} alt="" width="80%"/> </div>,
        <div key={2} className="item center"><img src={client5} alt="" width="80%"/> </div>,
        <div key={1} className="item center"> <img src={client6} alt="" width="80%"/> </div>,
        <div key={2} className="item center"><img src={client7} alt="" width="80%"/> </div>,
        <div key={1} className="item center"> <img src={client8} alt="" width="80%"/> </div>,
        
      ];
      const renderPrevButton = () => {
        return (
          <h1></h1>
        );
      };
    
      const renderNextButton = () => {
        return (
        <h1></h1>
        );
      };

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
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        responsive={{
          0: { items: 1 },
          768: { items: 1 },
          1024: { items: 1 },
          
        }}
        
        
      />
      <hr style={{color:"white"}}/>
         </div>
    </>
    );
}
