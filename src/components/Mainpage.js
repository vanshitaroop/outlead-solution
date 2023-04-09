import React from 'react'
import { Whatwedo } from './Whatwedo';
import { Process } from './Process';
import { Clients } from './Clients';
import { Home } from './Home';
import { Testting } from './Testting';
import { Testimonial } from './Testimonial';
import SimpleSlider from './SimpleSlider';
export const Mainpage = () => {

  return (
    <>
        <Home/>
        <Whatwedo/>
        <Clients/>
        <Testting/>
        <Process/>
      <Testimonial/>
       
    </>
  )
}
