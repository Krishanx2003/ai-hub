import '../style/globals.css'
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'AihubPro',
  description: 'Learn the future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
       <main> {children}</main>
        <Footer />
      </body>
    </html>
  )
}
