import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import '@/app/globals.css'
import Footer from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='font-montserrat light'>
      <header className="bg-white">
        <Navbar />
      </header>

      <main>{children}</main>

      <footer >
        <Footer />
      </footer>

    </div>
  );
};
export default RootLayout;