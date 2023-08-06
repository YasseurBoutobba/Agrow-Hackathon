import React from 'react'
import NavBar from './components/Navbar';
import './main.css'
import Welcome from './components/Welcome';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import GetStarted from './components/GetStarted';
import Feedbacks from './components/Feedbacks';
import Footer from './components/Footer';

const Main = () => {
  return (
    <>
      <div className='container'>
        <NavBar/>
        <Welcome/>
        <About/>
        <HowItWorks/>
        <GetStarted/>
        <Feedbacks/>
      </div>
      <Footer/>
    </>
   
  )
}
export default Main;
