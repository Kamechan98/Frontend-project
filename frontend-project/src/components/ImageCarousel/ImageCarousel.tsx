import React from 'react';
import Slider, {CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'

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

// Loop through each element and update the styles
elements.forEach(element => {
  const dataIndex = element.getAttribute('data-index');

  if (dataIndex === '0') {
    element.style.width = '600px';

  } else if (dataIndex === '1') {
    element.style.width = '600px';
  }
  else if (dataIndex === '2') {
    element.style.width = '600px';
  }
  else if (dataIndex === '3') {
    element.style.width = '600px';
  }
  else if (dataIndex === '4') {
    element.style.width = '600px';
  }
  else if (dataIndex === '5') {
    element.style.width = '600px';
  }
  else if (dataIndex === '6') {
    element.style.width = '600px';
  }
  else if (dataIndex === '7') {
    element.style.width = '600px';
  }
  // Add more conditions as needed for other data-index values
});


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
