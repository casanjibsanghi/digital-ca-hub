import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: 'My Profile',
    path: '/profile'
  }, {
    name: 'Articles',
    path: '/articles'
  }, {
    name: 'Presentations',
    path: '/presentations'
  }, {
    name: 'Connect',
    path: '/connect'
  }];
  const socialLinks = [{
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sanjibsanghi/',
    label: 'LinkedIn'
  }, {
    icon: Facebook,
    href: 'https://www.facebook.com/sanjib.sanghi',
    label: 'Facebook'
  }, {
    icon: Youtube,
    href: '#',
    label: 'YouTube'
  }, {
    icon: Mail,
    href: 'mailto:sanjib@casnb.in',
    label: 'Email'
  }];
  return <footer className="bg-slate text-white mt-16">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="font-montserrat font-bold text-xl mb-4 text-gold">
              CA Sanjib Sanghi
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">Central Council Member, ICAI | Chartered Accountant | Digital Transformation Leader.


Empowering professionals through Tech-ready solutions and global opportunities.</p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>)}
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-gold">Connect</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">sanjib@casnb.in</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+91 98314 34000</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Kolkata, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(social => <a key={social.label} href={social.href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-slate transition-all hover-lift" aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} CA Sanjib Sanghi. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;