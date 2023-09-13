import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import image1 from "../assets/TeamMember1.png";
import image2 from "../assets/TeamMember2.png";
import image3 from "../assets/TeamMember3.png";

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto ">
      <div className="px-2 overflow-hidden">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000} // Adjust the autoplay interval
          centerMode
          centerSlidePercentage={25} // Display 3 slides at once
          emulateTouch
          selectedItem={1}
        >
          <div>
            <img src={image1} alt="Image 1" className="px-4" />
          </div>
          <div>
            <img src={image2} alt="Image 2" className="px-4" />
          </div>
          <div>
            <img src={image3} alt="Image 3" className="px-4" />
          </div>
          <div>
            <img src={image1} alt="Image 1" className="px-4" />
          </div>
          <div>
            <img src={image2} alt="Image 2" className="px-4" />
          </div>
          <div>
            <img src={image3} alt="Image 3" className="px-4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default ImageCarousel;
