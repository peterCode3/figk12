import React, { useState } from 'react';
import '@/assets/css/ceucourse.css'
import Heading from '../atoms/Heading/Heading';
import Paragraph from '../atoms/Paragraph/Paragraph';
import CustomImage from '../atoms/CustomImage/CustomImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';



const CCoaches = ({ slides }) => {
  const settings = {
  };
  const teammember = 'team-member-service px-2';
  const inrmember = 'team-member-inr text-black rounded-md p-4';
  const memberimg = 'rounded -mt-28 rounded-lg';
  const memberdetail = 'member-detail pb-4';
  const memberheading = 'text-2xl text-black mt-3 mb-1';
  const plusbtn = 'btn-expand';
  const hovcnt = 'cont-fig-team-per';
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse the currently expanded column
    } else {
      setExpandedIndex(index); // Expand the clicked column
    }
  };

  const teamscolumn = 'ceu-col-hide';

  // Rest of your styles...

  return (
    <div {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className={` ${teamscolumn} ${teammember} `}>
          <div className={`${inrmember} ${index === expandedIndex ? 'ceu-col-expanded' : 'ceu-col-hide'}`}>
            <div className="member-icon">
              <CustomImage imgclass={memberimg} src={slide.image} alt={slide.name} />
              <div className={hovcnt}>
                <Heading level='4' fontsize='text-xl mb-2'>{slide.imagetitle}</Heading>
                <ul>
                  {slide.trainingTopics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={memberdetail}>
              <Heading fontsize={memberheading} level='3'>{slide.title}</Heading>
              <div className={index === expandedIndex ? 'ceu-col-hide custom-styles' : 'ceu-col-hide'}>
              <Paragraph>
                {slide.description}
              </Paragraph>
              <a className={plusbtn} onClick={() => toggleExpand(index)} initialText='Show More'>
                {index === expandedIndex ? 'Show Less' : 'Show More'}{''} 
                <FontAwesomeIcon icon={index === expandedIndex ? faAngleUp : faAngleDown} size="lg" color="white" className="fa-solid" />
                
              </a>
            </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CCoaches;
