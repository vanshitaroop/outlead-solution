import React from 'react'
import bgimg from "../assets/img/bg_image_3.png"
export const Services = () => {
  return (
   <>
   <div>
   <main className='row'>
    <div class="page-section col-md-12 col-sm-12" style={{backgroundColor:"#212529"}}>
      <div class="container" style={{marginLeft:"150px",marginRight:"150px"}}>
        <div class="row">
          <div class="col-lg-6 py-3">
            <h2 class="title-section">We're <span class="marked">ready to</span> Serve you with best</h2>
            <div class="divider"></div>
            <p class="mb-5">We provide marketing services to startups & small business to looking <br/> for partner for their digital media, design & dev lead generation & communication.</p>
            <a href="#" class="btn btn-primary mr-3">More Details</a>
            <a href="#" class="btn btn-outline mx-2">See pricing</a>
          </div>
          <div class="col-lg-6 py-3">
            <div class="img-place text-center">
              <img src={bgimg} alt=""/>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  
    <div class="page-section col-md-12 col-sm-12">
      <div class="container">
        <div class="text-center">
          <div class="subhead">Why Choose Us</div>
          <h2 class="title-section-2">Your <span class="marked">Comfort</span> is Our Priority</h2>
          <div class="divider mx-auto"></div>
        </div>
  
        <div class="row mt-5 text-center">
          <div class="col-lg-4 py-3">
            <div class="display-3"><span class="mai-shapes"></span> <i class="fa-solid fa-signal"></i></div>
            <h5>High Performance</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
          </div>
          <div class="col-lg-4 py-3">
            <div class="display-3"><span class=""></span> <i class="fas fa-money-check-alt"></i></div>
            
            <h5>Friendly Prices</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
          </div>
          <div class="col-lg-4 py-3">
            <div class="display-3"><span class="mai-shapes"></span><i class="far fa-clock"></i></div>
            <h5>No time-confusing</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
          </div>
        </div>
      </div> 
    </div> 
  </main>
   </div>
   </>
  )
}
