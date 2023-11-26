import React from 'react'
import Aboutsection from '@/components/About/About1';
import Navbar from '@/components/NavBar/NavBar1';
import Footer from '@/components/Footer/Footer';
import About2 from '@/components/About/About2';

const About = () => {
  return (
   <>
<Navbar/>
<Aboutsection title={"About Us"}/>
<About2/>
<Footer/>
   </>
  )
}

export default  About;
