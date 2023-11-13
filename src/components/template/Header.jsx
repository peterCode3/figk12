import React from 'react';
import Navbar from '../organism/navbar';
import Container from '../atoms/Container/container';

const Header = ({headerclass}) => {


  return (
    <header className={`w-full desktop-header p-3 ${headerclass}`}>
        <Container>
            <div id='inr-header' className='inr-header'>
                <Navbar />
            </div>
        </Container>
    </header>
  );
};

export default Header;
