import React, { useState } from 'react';
import Container from '../atoms/Container/container'
import Heading from '../atoms/Heading/Heading'
import '@/assets/css/ceucourse.css'
import Paragraph from '../atoms/Paragraph/Paragraph'
import FigStyleTeam from '../organism/figstyleteam';


function Figstyle() {
  const courseheading = 'cour-head text-center pb-10';
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
  ]




  return (
    <div>
      <section className='fig-life mt-36'>
        <Container>
          <div className='inr-lifestyle text-white'>
            <div className='life-detail w-1/2 bg-[#22BDCB] px-6 py-10 rounded'>
              <Heading fontsize='text-4xl mb-6' level="1">SAMPLE COURSE LESSONS</Heading>
              <Paragraph>
                FIG Lifestyle is all about bringing balance to your team. Mental and physical wellness are necessities
                when we consider putting our best foot forward. At FIG we understand that means something different
                for everyone. FIG Lifestyle is here to support your team in taking better care of themselves
                from the inside out.
              </Paragraph>
            </div>
          </div>
        </Container>
      </section>
      <section className='cours-sec life-sec mt-12'>
        <Container>
          <div className='inr-courses bg-[#fff] rounded-xl p-8'>
            <div className='text-center'>
              <Heading fontsize='text-5xl' level='1'>SAMPLE COURSE LESSONS</Heading>
            </div>
            <div class="courses-colm flex text-center gap-6 mt-12">
              <div class="cours-video w-1/2">
                <div className='video-sc-nut'>
                  <iframe data-ux="Embed" allowfullscreen="" type="text/html" frameborder="0" src="//player.vimeo.com/video/504570116?h=b4929617b8&amp;autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0" data-aid="VIDEO_VIDEO_RENDERED0"></iframe>
                </div>
                <div className='p-6'>
                  <Heading fontsize='text-2xl mb-2' level='3'>CALMING YOURSELF</Heading>
                  <Paragraph>
                    Meditation means learning to watch your mind, understand it a bit better and in time you can begin directing
                    it more. Techniques are simple. Explore different calming practices with this exclusive FIG health and
                    wellness video.
                  </Paragraph>
                </div>
              </div>
              <div class="cours-video w-1/2">
                <div className='video-sc-nut'>
                  <iframe data-ux="Embed" allowfullscreen="" type="text/html" frameborder="0" src="//player.vimeo.com/video/509870738?h=b9117cadab&amp;autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0" data-aid="VIDEO_VIDEO_RENDERED1"></iframe>
                </div>
                <div className='p-6'>
                  <Heading fontsize='text-2xl mb-2' level='3'>YOGA TO TRANSITION FROM WORK TO HOME</Heading>
                  <Paragraph>Quick and easy yoga for breathwork to help you transition from work mode to home.</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='cours-team-mates w-full float-left mt-14'>
        <Container>
          <div className='inr-courses'>
            <div className={courseheading}>
              <Heading fontsize='text-5xl' level='1'>FIG LIFESTYLE COURSES</Heading>
            </div>
            <div class={membermain}>
                <FigStyleTeam slides={figteamslides} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Figstyle
