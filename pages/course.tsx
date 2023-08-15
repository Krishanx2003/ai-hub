import React from 'react';
import Events from '../app/components/Events/index'
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Courses from '@/app/components/Course/Courses';
import '../style/globals.css'

const Course = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '70px' }}>
                <Courses />
                <Events />
            </div>
            <Footer />
        </div>
    );
};


export default Course;
