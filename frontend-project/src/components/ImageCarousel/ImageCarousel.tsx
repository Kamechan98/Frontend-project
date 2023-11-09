import React from 'react';
import Slider, {CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.scss'

interface ImageCarouselProps {
  images: string[];
}

const PrevArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        Previous
      </div>
    );
  };
  
  const NextArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        Next
      </div>
    );
  };

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings  = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

// Select all elements with the class slick-slide
const elements = document.querySelectorAll<HTMLElement>('.slick-slide');



  return (
    <div className='im-container'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-slide" id='image-slide'>
            <img className="carousel-image" id='carousel-image' src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
