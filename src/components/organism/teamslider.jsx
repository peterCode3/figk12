import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from '../atoms/Heading/Heading';
import Paragraph from '../atoms/Paragraph/Paragraph';
import CustomImage from '../atoms/CustomImage/CustomImage';

const TeamSlider = ({ slides }) => {
  const settings = {
    arrows: true, // Show arrows for next and previous
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className='teammates-main rounded'>
            <div key={index} className="team-member text-xl text-center">
              <div className='team-avatar'>
                <CustomImage imgclass='rounded' src={slide.image} alt={slide.name} />
              </div>
              <Heading level='3' fontsize='title-team-member my-3'>{slide.name}</Heading>
              <Paragraph>{slide.role}</Paragraph>
              <div className='avatar-desc text-white w-full p-6'>
                <Paragraph>{slide.description}</Paragraph>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;