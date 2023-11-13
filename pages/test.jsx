import '@/assets/css/ceucourse.css'
import React, { useState } from 'react';
import FigStyleTeam from '@/components/organism/figstyleteam';

function Test() {
  const membermain = 'courses-teams text-center mt-6 gap-3';

  const figteamslides = [
    {
      title: 'SIX WEEKS WITH SIDNEY      ',
      description: 'Enjoy a full six week bodyweight exercise program with video and written instructions including warm ups, work outs and modifications.      ',
      image: '/images/fig1.jpg',
    },
    {
      title: 'SIX WEEKS WITH SIDNEY      ',
      description: 'This video series will teach you different Yoga poses to use throughout the day and night to relax, refocus and re-energize.    ',
      image: '/images/fig2.jpg',
    },
    {
      title: 'SIX WEEKS WITH SIDNEY      ',
      description: ' Feeling overwhelmed with daily stress and worry can affect anyone’s ability to be present. Studies have identified certain meditation techniques that can help promote emotional balance and relaxation.  Join me as in discovering how to incorporate  these techniques in your day to day life. ',
      image: '/images/fig3.jpg',
    },
    {
      title: 'SIX WEEKS WITH SIDNEY      ',
      description: 'Need ideas for moving your body? In this course we provide 26 body weight exercise movements to help you plan the perfect workout. Each movement comes with video demonstration and written explanation.  Sample workouts are also available in the materials section from the 2022 School Nutrition Industry Professionals Healthy Heroes Fitness Challenge.       ',
      image: '/images/fig4.jpg',
    },
    {
      title: 'SIX WEEKS WITH SIDNEY      ',
      description: 'In Sanskrit, the word “chakra” means “disk” or “wheel” and refers to the energy centers in your body. These wheels or disks of spinning energy each correspond to certain nerve bundles and major organs. To function at their best, your chakras need to stay open, or balanced. If they get blocked, you may experience physical or emotional symptoms related to a particular chakra. There are seven main chakras that run along your spine. They start at the root, or base, of your spine and extend to the crown of your head.       ',
      image: '/images/fig5.jpg',
    },
    {
      title: 'SIX WEEKS WITH SIDNEY      ',
      description: 'This course will take you away from the "normal" workout routines and get your blood pumping by moving with the music.  We will learn to move to the rhythm of different genres while focusing on strengthening our body. No matter what your fitness level is, you are sure to have fun learning new ways to get and stay in shape      ',
      image: '/images/fig6.jpg',
    },
    {
      title: 'SIX WEEKS WITH SIDNEY      ',
      description: 'The most important piece of advice I can give for anyone starting a fitness journey is to try new things. If you’re like this Lunch Lady Ninja and never played sports or engaged in physical activity for the majority of your life you might not even know what you like! Being active is not just hitting the gym. There are so many ways to create a strong, healthy body.      ',
      image: '/images/fig7.jpg',
    },
  ];

  return (
    <div>
      <div className="team-slider">
        <div class={membermain}>
          <FigStyleTeam slides={figteamslides} />
        </div>
      </div>
    </div>
  );
}

export default Test;
