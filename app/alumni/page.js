import React from 'react'
import Alumni1 from '@/components/Alumni/Alumni1';
import Navbar from '@/components/NavBar/NavBar1';
import Footer from '@/components/Footer/Footer';
import Alumni2 from '@/components/Alumni/Alumni2';
import Alumni3 from '@/components/Alumni/Alumni3';

const alumni = () => {
  return (
    <>
    <Navbar/>
      <Alumni1/>
      <Alumni2/>
      <Alumni3/>
      <Footer/>
    </>
  )
}

export default alumni
