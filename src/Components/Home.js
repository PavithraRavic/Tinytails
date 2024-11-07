import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings} className="carousel">
        <div className="image-container">
          <img src={image1} alt="A scenic view of the mountains during sunset" className="carousel-image" />
        </div>
        <div className="image-container">
          <img src={image2} alt="A close-up of a bird perched on a branch" className="carousel-image" />
        </div>
        <div className="image-container">
          <img src={image3} alt="A calm beach with gentle waves and clear skies" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Home;
