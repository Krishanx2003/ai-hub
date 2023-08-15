import React from 'react';
import '../style/globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import logo from '../public/assets/logo/Logo.png';
export const metadata = {
  title: 'AihubPro - Learn the Future',
  description: 'Learn the future with AihubPro - the best platform for AI enthusiasts.',
   // Update to use the actual logo variable here
  url: 'https://www.aihubpro.com', // Replace with the actual URL of your website
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      
      <meta property="og:url" content={metadata.url} />
      <link rel="canonical" href={metadata.url} />
      <link rel='icon' href='/Logo.png' />
      {/* Add other meta tags if needed */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </React.Fragment>
  );
}
