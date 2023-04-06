import React from 'react'

export const Blogs = () => {
  return (
    <>
     <div class="columns-bg">
      <section id="logo" class="tm-section-logo">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-6">
              <div class="" style={{paddingLeft:"20px"}}>
                <div class="tm-site-name-container-inner">
                  <h1 class="text-uppercase tm-text-primary tm-site-name">
                    Industries
                  </h1>
                  <p class="tm-text-primary tm-site-description">
                    we catter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 1 --> */}
      <section id="section_1" class="tm-p-2-section-1 tm-sm-bg-blue">
        <div class="container-fluid">
          <div class="row flex-column-reverse flex-lg-row">
            <div class="col-md-12 col-lg-6 tm-text-left-container">
              <div class="tm-section-text-container-3 tm-bg-white-alpha h-100">
                <h2 class="tm-section-title-mb">Vivamus dignissim dui ac</h2>
                <hr class="tm-hr-mb" />
                <p class="tm-p-mb">
                  Sided Template has 3 HTML pages. <a href="index.html">Index</a>, <a href="page-2.html">Page 2</a> and <a href="page-3.html">Page 3</a>.
                  This is Bootstrap v4.2.1 layout. You may visit <a rel="nofollow" href="https://www.facebook.com/templatemo">templatemo page</a> for latest updates. Thank you.
                </p>
                <div class="text-right">
                  <a href="#section_2" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div
              class="col-md-12 col-lg-6 tm-section-image-container tm-img-right-container"
            >
              <img
                src="img/forty_image_21.jpg"
                alt="Image"
                class="img-fluid tm-img-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 2 --> */}
      <section id="section_2" class="tm-section-4">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-md-12 col-lg-6 tm-section-image-container tm-img-left-container"
            >
              <img src="img/forty_image_22.jpg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-12 col-lg-6 pl-lg-0">
              <div class="tm-section-text-container-3 tm-bg-gray h-100">
                <h2 class="tm-section-title-mb">Fusce metus mauris</h2>
                <hr class="tm-hr-mb" />
                <p class="tm-p-mb">
                  Suspendisse ultricies scelerisque tellus, id sollicitudin
                  magna aliquet porttitor. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Quisque
                  pharetra mauris in libero.
                </p>
                <div class="text-right">
                  <a href="#section_3" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section_3" class="tm-section-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="tm-section-text-container-7 tm-bg-dark-gray">
                <h2 class="tm-section-title-mb tm-text-primary-bright">
                  Lorem ipsum dolor sit amet
                </h2>
                <hr
                  class="tm-hr-mb tm-hr-primary-bright tm-section-underline ml-0"
                />
                <p class="tm-p-mb">
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Quisque pharetra mauris in libero
                  varius tristique. Duis eget eleifend risus. Curabitur
                  hendrerit, elit et efficitur placerat, purus nunc fringilla
                  orci, et condimentum dui sem sed risus. Proin sed fringilla
                  felis. Maecenas vel felis vitae turpis bibendum accumsan.
                  Nulla pretium tortor non vulputate scelerisque.
                </p>
                <p class="tm-p-mb">
                  Quisque viverra dui purus, at rutrum nibh suscipit ut. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
                  ac mauris maximus auctor. Nullam eget dignissim orci. Donec
                  tincidunt blandit libero iaculis fermentum. Aliquam erat
                  volutpat. Integer suscipit aliquam augue ac rutrum. Phasellus
                  sit amet erat id sapien efficitur euismod.
                </p>
                <div class="mb-2">
                  <a href="#contact" class="btn btn-primary">Message Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    </>
  )
}
