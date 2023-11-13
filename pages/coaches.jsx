import React from 'react'
import Figcoaches from '@/components/template/Figcoaches'
import Header from '@/components/template/Header'
import MobileHeader from '@/components/template/MobileHeader'
import '../src/assets/css/responsive.css';
import Footer from '@/components/template/Footer'
import '../src/app/globals.css';
import '../src/assets/css/style.css';

function coaches() {


  return (
    <div>
        <Header headerclass='ceucourses-header'/>
        <MobileHeader mobileheaderclass='ceucourses-header'/>
        <Figcoaches />
        <Footer />
    </div>
  )
}

export default coaches
