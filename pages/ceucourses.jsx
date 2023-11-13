import Header from '@/components/template/Header'
import MobileHeader from '@/components/template/MobileHeader'
import Ceucoursespage from '@/components/template/ceucoursespage';
import React from 'react'
import '../src/app/globals.css';
import '../src/assets/css/fonts.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/style.css';
import Footer from '@/components/template/Footer';




function ceucourses() {
  return (
    <div className='fig-courses'>
        <Header headerclass='ceucourses-header'/>
        <MobileHeader mobileheaderclass='ceucourses-header'/>
        <Ceucoursespage />
        <Footer ftrClass='cour-ftr'/>
    </div>
  )
}

export default ceucourses
