import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import SEOHead from './SEOHead';

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout = ({ 
  title = "CA Sanjib Sanghi - Council Member ICAI | Digital Transformation Leader",
  description = "Professional portfolio of CA Sanjib Sanghi, Council Member of ICAI, digital transformation leader, and GCC opportunities expert. Explore insights on AI in accounting, professional development, and global career opportunities.",
  keywords = "CA Sanjib Sanghi, ICAI Council Member, Chartered Accountant, Digital Transformation, AI in Accounting, GCC Opportunities, Professional Mentorship, MSME Support",
  ogImage = "/hero-professional.jpg"
}: LayoutProps) => {
  return (
    <>
      <SEOHead 
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;