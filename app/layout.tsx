import React from 'react';
import '../style/globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'AihubPro - Learn the Future',
  description: 'Learn the future with AihubPro - the best platform for AI enthusiasts.',
  url: 'https://www.aihubpro.com', // Replace with the actual URL of your website
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='./Logo.png' />
        {/* Add other meta tags if needed */}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
