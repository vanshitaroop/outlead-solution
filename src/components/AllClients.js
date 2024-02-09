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
    img: "Sources/images/logos/prepseed.png",
  },
  {
    img: "Sources/images/logos/chartered.png",
  },
  {
    img: "Sources/images/logos/craftezy.png",
  },
  {
    img: "Sources/images/logos/shivtex.png",
  },
  {
    img: "Sources/images/logos/rdt.png",
  },
  {
    img: "Sources/images/logos/cidroy.png",
  },

  {
    img: "Sources/images/logos/adira.png",
  },
  {
    img: "Sources/images/logos/drashti.png",
  },
  {
    img: "Sources/images/logos/FA.png",
  },
  {
    img: "Sources/images/logos/Bim.png",
  },
  {
    img: "Sources/images/cardinal.png",
  },
  {
    img: "Sources/images/logos/logo2.png",
  },
  {
    img: "Sources/images/logos/64.png",
  },
  {
    img: "Sources/images/logos/adrija.png",
  },
  {
    img: "Sources/images/logos/age.png",
  },
  {
    img: "Sources/images/logos/archbude.png",
  }
  ,
  {
    img: "Sources/images/logos/bbg.png",
  },
  {
    img: "Sources/images/logos/beacon.png",
  },
  {
    img: "Sources/images/logos/biochem.png",
  },
  {
    img: "Sources/images/logos/bluefire.png",
  },
  {
    img: "Sources/images/logos/Bsquare.png",
  }
  ,
  {
    img: "Sources/images/logos/hitech.png",
  },
  {
    img: "Sources/images/logos/ninefive.png",
  },
  {
    img: "Sources/images/logos/qutone.png",
  },
  {
    img: "Sources/images/logos/book.png",
  },
  {
    img: "Sources/images/logos/braincuber.png",
  },
  {
    img: "Sources/images/logos/codertrails.png",
  },
  {
    img: "Sources/images/logos/divya.png",
  },
  // {
  //   img: "Sources/images/logos/bsquare.png",
  // },
  {
    img: "Sources/images/logos/enable.png",
  },
  {
    img: "Sources/images/logos/estrella.png"
  },
  {
    img: "Sources/images/logos/finanvo.png",
  },
  {
    img: "Sources/images/logos/gloline.png",
  },
  {
    img: "Sources/images/logos/gramvaani.png",
  },
  {
    img: "Sources/images/logos/h4healing.png",
  },
  {
    img: "Sources/images/logos/happick.png",
  },
  {
    img: "Sources/images/logos/inspire.png",
  },
  {
    img: "Sources/images/logos/maak.png",
  },
  {
    img: "Sources/images/logos/mandir.png",
  },
  {
    img: "Sources/images/logos/mastersoft.png",
  },
  {
    img: "Sources/images/logos/online.png",
  },
  {
    img: "Sources/images/logos/pet.png",
  },
  {
    img: "Sources/images/logos/poas.png",
  },
  {
    img: "Sources/images/logos/savory.png",
  },
  {
    img: "Sources/images/logos/scones.png",
  },
  {
    img: "Sources/images/logos/shinkhan.png",
  },
  {
    img: "Sources/images/logos/simplso.png",
  },
  {
    img: "Sources/images/logos/softco.png",
  },
  {
    img: "Sources/images/logos/techmyntra.png",
  },
  {
    img: "Sources/images/logos/v.png",
  },
  {
    img: "Sources/images/logos/valuemize.png",
  }

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
          <div className="row mb-5 w-100 client">
            {client.map((item, key) => {
              return (
                <>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6  p-2 ">
                    <img src={item.img} alt="" className="w-100 client_img" data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine" />
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
