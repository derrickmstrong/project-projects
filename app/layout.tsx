import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Project: Projects',
  description: 'Showcase and Discover Developer Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* navbar */}
        <Navbar />
        {/* page.tsx */}
        <main>
          {children} 
        </main>
        {/* footer */}
        <Footer />
      </body>
    </html>
  )
}
