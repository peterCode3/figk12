import React from 'react'
import Link from 'next/link';
import Container from '../atoms/Container/container';
import {  faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Heading from '../atoms/Heading/Heading';
import Logo from '../atoms/Logo/logo';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Icon from '../atoms/FontAwesomeIcon/FontAwesomeIcon';


export default function Footer({ ftrClass }) {


  const ftrlogo = [
    { src: '/images/logo.png', alt: 'Ecommrce', href: '/' },
  ];

  const figfooter = 'py-20 text-white bg-[#21BCCA] w-full float-left';
  const copyright = 'p-4 bg-[#86C85E] text-center w-full float-left text-white text-1xl';
  const colmstyle = 'w-1/4';
  const headingstyle = 'text-3xl text-white mb-8';
  const navitemstyle = 'text-xl pb-3';

  return (

    <div>
      <footer className={`${figfooter} ${ftrClass}`}>
        <Container>
          <div className='inr-ftr flex justify-between'>
            <div className={`ftr-colm ${colmstyle}`}>
              <div className='brand-logo mb-3'>
                <Logo logoData={ftrlogo} />
              </div>
              <div className='fig-detail'>
                <Paragraph>
                  FIG is your one stop shop for all things Professional Development and Employee Wellness for your school
                  nutrition department. Connect with your team and encourage success in meaningful ways
                  relevant to them.
                </Paragraph>
              </div>
            </div>
            <div className={`ftr-colm ${colmstyle}`}>
              <Heading fontsize={headingstyle} level='3'>Quick Links</Heading>
              <div className='quick-link'>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className={navitemstyle}>
                      <Link href='/ceucourses'>CEU COURSES</Link>
                    </li>
                    <li className={navitemstyle}>
                      <Link href="/">FIG LIFESTYLE</Link>
                    </li>
                    <li className={navitemstyle}>
                      <Link href="/">COACHES</Link>
                    </li>
                    <li className={navitemstyle}>
                      <Link href="https://figk-12.com/">SIGN IN TO FIG</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className={`ftr-colm ${colmstyle}`}>
              <Heading fontsize={headingstyle} level='3'>Contact Us</Heading>
              <div className='brand-logo'>
                <ul>
                  <li className='text-xl flex gap-6 mb-4'>
                    <Icon icons={faPhone} size="lg" color="red" className="fa-solid fa-angle-up" />
                    <Link href='tel:8008171408'>(800) 817-1408</Link>
                  </li>
                  <li className='text-xl flex gap-6 mb-4'>
                    <Icon icons={faLocationDot} size="lg" color="red" className="fa-solid fa-angle-up" />
                    <span>5189 Stewart Street Milton, Florida 32570</span>
                  </li>
                </ul>
                <ul className='social-icons'>
                  <li>
                    <Link href="https://www.facebook.com/103844864976462">
                      <Icon icons={faFacebook} size="xl" color="red" className="fa-solid fa-angle-up" />
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.instagram.com/fig.k12/'>
                      <Icon icons={faInstagram} size="xl" color="red" className="fa-solid fa-angle-up" />
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.linkedin.com/company/74746863'>
                      <Icon icons={faLinkedin} size="" color="red" className="w-[20px] fa-solid fa-angle-up" />
                    </Link>
                  </li>
                </ul>
                
              </div>
            </div>

          </div>
        </Container>
      </footer>
      <div className={copyright}>
        <Paragraph>
          Copyright © 2023 FIG K12 - All Rights Reserved.
        </Paragraph>
      </div>
    </div>
  )
}
