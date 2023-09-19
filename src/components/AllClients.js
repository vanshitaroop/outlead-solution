import React from "react";
// import img1 from "../assets/img/Hitechlogo.png";
// import img2 from "../assets/img/client3.png";
// import img3 from "../assets/img/client3.png";
// import img4 from "../assets/img/client4.png";
// import img5 from "../assets/img/client5.png";
// import img6 from "../assets/img/client6.png";
// import img7 from "../assets/img/client7.png";
// import img8 from "../assets/img/client8.png";
const client = [
  {
    src: "Sources/images/hi-tech.png",
  },
  {
    src: "Sources/images/prepseed.png",
  },
  {
    src: "Sources/images/ssrvm.png",
  },
  // {
  //   src: "Sources/images/shiv-textile.png",
  // },
  {
    src: "Sources/images/shivtex.png",
  },
  {
    src: "Sources/images/bbgroyals.png",
  },
  {
    src: "Sources/images/archbude.png",
  },
  {
    src: "Sources/images/bsquare.png",
  },
  {
    src: "Sources/images/digvijay.png",
  },
  {
    src: "Sources/images/cardinal.png",
  },
  {
    src: "Sources/images/logo.png",
  },
  {
    src: "Sources/images/logou.png",
  },
  {
    src: "Sources/images/maak advisors.JPG",
  },
  {
    src: "Sources/images/mastersoft-logo.webp",
  },
  {
    src: "Sources/images/quickdraft.JPG",
  },
  {
    src: "Sources/images/raywell studio.JPG",
  },
  {
    src: "Sources/images/shinkan.JPG",
  },
  {
    src: "Sources/images/ninefive.png",
  },

  {
    src: "Sources/images/inspire.JPG",
  },
  {
    src: "Sources/images/entroid.JPG",
  },
  {
    src: "Sources/images/enableX_logo.png",
  },
  {
    src: "Sources/images/divya attires.JPG",
  },
  {
    src: "Sources/images/craftezy.JPG",
  },
  {
    src: "Sources/images/bluefire.JPG",
  },
  
];
const AllClients = () => {
  return (
    <>
      <div className="container section_padding">
        <div>
          <h1 className="heading_style">Our Partners</h1>
        </div>
      </div>
      <section className="section section-default mt-none mb-none">
        <div className="container">
          {/* <h2 className="mb-sm">
                        Our <strong>Partners</strong>
                    </h2> */}
          <div className="row mb-5 w-100">
            {client.map((item, key) => {
              return (
                <>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 m-2">
                    <img src={item.src} alt="" className="w-100 client_img" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default AllClients;
