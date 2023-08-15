import React from 'react';
import Events from '../app/components/Events/index'
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import '../style/globals.css'
import FAQ from '@/app/components/FAQ';
import Aboutus from '@/app/components/Aboutus';
import Beliefs from '@/app/components/Beliefs';
import Mentors from '@/app/components/Mentors/Mentors';

const Mentor = () => {
    return (
        <main>
            <Navbar />
            <Mentors />
            <Aboutus />
            <Events />
            <Beliefs />
            <Footer />
            </main>
    );
};


export default Mentor;
