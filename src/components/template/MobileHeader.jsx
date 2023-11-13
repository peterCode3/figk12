import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Container from '../atoms/Container/container';
import MobileNavbar from '../organism/mobilenavbar';
import Logo from '../atoms/Logo/logo';


const MobileHeader = ({mobileheaderclass}) => {

  const router = useRouter();
  
  const defaultlogo = [
    { src: '/images/logo-colored.png', alt: 'Second Page Logo', href: '/' },
  ];
  const whitelogo = [
    { src: '/images/logo.png', alt: 'Ecommrce', href: '/' },
  ];
  const secondPageLogo = [
    { src: '/images/logo-colored.png', alt: 'Second Page Logo', href: '/' },
  ];
  


  const routeToLogo = {
    '/': whitelogo,      
    '/ceucourses': whitelogo,  
    '/figlifestyle': secondPageLogo,  
    '/coaches': whitelogo,  
    '/figlifestyle': whitelogo,  

  };

  const defaultLogo = defaultlogo;

  const logoData = routeToLogo[router.pathname] || defaultLogo;

  return (
    <header className={`mobile-header p-2 ${mobileheaderclass}`}>
        <Container>
            <div id='mobile-header' className='inr-header flex justify-self-center justify-between items-center'>
                <Logo logoData={logoData} />
                <MobileNavbar />
            </div>
        </Container>
    </header>
  );
};

export default MobileHeader;
