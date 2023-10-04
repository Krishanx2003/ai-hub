import Navbar from '@/app/components/Navbar/Navbar'
import React from 'react'
import '../style/globals.css'
import Footer from '@/app/components/Footer/Footer';
import Careers from '@/app/components/Careers/Careers'
const Career = () => {
  return (
    <div>
     <Navbar />
     <div style={{ padding: '70px' }}>
        <Careers />
     </div>
     <Footer />
    </div>
  )
}

export default Career
