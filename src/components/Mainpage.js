import React from 'react'
import { Whatwedo } from './Whatwedo';
import { Process } from './Process';
import { Clients } from './Clients';
import { Home } from './Home';
import { Testting } from './Testting';
import { Testimonial } from './Testimonial';
import SimpleSlider from './SimpleSlider';
import { OurkeyClients2 } from './OurkeyClients2';
export const Mainpage = () => {

  return (
    <>
        <Home/>
        <Whatwedo/>
        <Clients/>
        <OurkeyClients2/>
        <Testting/>
        <Process/>
      <Testimonial />
       
    </>
  )
}
