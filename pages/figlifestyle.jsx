import Header from '@/components/template/Header'
import MobileHeader from '@/components/template/MobileHeader'
import React from 'react'
import '../src/assets/css/responsive.css';
import '../src/app/globals.css';
import '../src/assets/css/style.css';
import '../src/assets/css/lifestyle.css';
import Footer from '@/components/template/Footer';
import Figstyle from '@/components/template/Figstyle';



function ceucourses() {
  return (
    <div className='fig-courses'>
        <Header headerclass='ceucourses-header'/>
        <MobileHeader mobileheaderclass='ceucourses-header'/>
        <Figstyle />
        <Footer ftrClass='cour-ftr'/>
    </div>
  )
}

export default ceucourses
