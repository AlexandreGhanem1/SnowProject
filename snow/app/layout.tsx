
import './globals.css';
import Navbar from '@/components/Navbar';//ctrl+space
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Snow Project',
  description: 'Web app for Snow Project using React, TypeScript, and Leaflet.',
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
        Body 
          Map+Chart
        <main>
          {children}
        </main>
        Remerciement
        Teams working on the Project
        Note about the article
        <Footer /> 

      </body>
    </html>
  )
}
