import React from 'react';
import Events from '../app/components/Events/index'
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import '../style/globals.css'

const Event = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '70px' }}>
        <Events />
      </div>
            <Footer />
        </div>
    );
};


export default Event;
