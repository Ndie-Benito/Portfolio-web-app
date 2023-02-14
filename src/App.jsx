import React from 'react'
import { About } from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience' 
import Footer from './components/footer/Footer' 
import Portofolio from './components/portofolio/Portofolio' 
import Contact from './components/contact/Contact' 
import Services from './components/services/Services' 
import Testimonials from './components/testimonials/Testimonials' 
const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portofolio />
            <Testimonials />
            <Contact />
            <Footer/>
      
        </>
    )
}

export default App