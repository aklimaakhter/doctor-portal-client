import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import ExceptionalCare from './ExceptionalCare';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;