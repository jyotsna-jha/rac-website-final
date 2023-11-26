"use client"
import React from 'react'
import Navbar from '@/components/NavBar/NavBar1'
import Hero1 from '@/components/Hero/Hero1';
import Hero2 from '@/components/Hero/Hero2';
import Hero3 from '@/components/Hero/Hero3';
import Footer from '@/components/Footer/Footer';
import Hero4 from '@/components/Hero/Hero4';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero1 title={"Robotics And Automation Center"}/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Footer/>
    </>
  )
}

export default Home
