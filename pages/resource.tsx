import React from 'react';
import Events from '../app/components/Events/index'
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import '../style/globals.css'
import FAQ from '@/app/components/FAQ';
import Aboutus from '@/app/components/Aboutus';
import Beliefs from '@/app/components/Beliefs';
import Teacher from '../app/components/Teacher/Teacher'
import Teachers from '../app/components/Teachers/Teachers'
const Resourses = () => {
 
    return (
        <div>
            <Navbar />

            <div style={{ padding: '70px' }}>
                <Teacher />

                <Aboutus />
                <Teachers />
        <Events />
        <FAQ />
        <Beliefs />
       
      </div>
            <Footer />
        </div>
    );
};


export default Resourses;
