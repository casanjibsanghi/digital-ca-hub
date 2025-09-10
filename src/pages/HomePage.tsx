import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Globe, Mail } from 'lucide-react';
import HeroCarousel from '@/components/ui/hero-carousel';
import Timeline from '@/components/ui/timeline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Import hero images
import heroProfessional from '@/assets/hero-professional.jpg';
import heroDigital from '@/assets/hero-digital.jpg';
import heroIcai from '@/assets/hero-icai.jpg';
import heroGlobal from '@/assets/hero-global.jpg';

const HomePage = () => {
  // Hero slides data
  const heroSlides = [
    {
      id: '1',
      image: heroProfessional,
      title: 'CA Sanjib Sanghi',
      subtitle: 'Council Member, ICAI | Chartered Accountant',
      tagline: 'From Ledgers to Leadership - Transforming the future of accounting through digital innovation and strategic excellence.',
    },
    {
      id: '2',
      image: heroDigital,
      title: 'Digital Innovation',
      subtitle: 'AI-ready, Audit-strong',
      tagline: 'Leading the digital transformation of accounting practices with cutting-edge AI solutions and modern methodologies.',
    },
    {
      id: '3',
      image: heroIcai,
      title: 'ICAI Leadership',
      subtitle: 'Council Member & Visionary',
      tagline: 'Serving the Institute of Chartered Accountants with dedication to excellence and professional growth.',
    },
    {
      id: '4',
      image: heroGlobal,
      title: 'Global Opportunities',
      subtitle: 'Grow and Go Global',
      tagline: 'Opening doors to international markets and GCC opportunities for accounting professionals worldwide.',
    },
  ];

  // Timeline data for ICAI journey
  const timelineData = [
    {
      year: '2025',
      title: 'Council Member, ICAI',
      organization: 'Institute of Chartered Accountants of India',
      outcomes: [
        'Elected to serve on the national council for 2025-29 term',
        'Leading initiatives for digital transformation in accounting',
        'Championing AI integration in audit and compliance processes',
      ],
    },
    {
      year: '2023',
      title: 'GCC Initiative Convenor',
      organization: 'ICAI Eastern India Regional Council',
      outcomes: [
        'Launched comprehensive GCC opportunity mapping program',
        'Facilitated 500+ job placements in global capability centers',
        'Established partnerships with 50+ multinational corporations',
      ],
    },
    {
      year: '2022',
      title: 'Digital Transformation Leader',
      organization: 'Cloud Infosolutions',
      outcomes: [
        'Founded Digital Accountants community with 10,000+ members',
        'Developed AI-powered audit automation tools',
        'Published "The Digital Professional" bestseller',
      ],
    },
    {
      year: '2021',
      title: 'Regional Council Member (RCM)',
      organization: 'EIRC-ICAI',
      outcomes: [
        'Served Eastern India Regional Council with distinction',
        'Initiated student mentorship programs across 15 cities',
        'Established MSME support framework for small businesses',
      ],
    },
    {
      year: '2019',
      title: 'Board of Studies Member',
      organization: 'ICAI',
      outcomes: [
        'Contributed to curriculum modernization initiatives',
        'Integrated technology modules in CA education',
        'Launched online learning platforms for remote students',
      ],
    },
  ];

  // Featured sections data
  const featuredSections = [
    {
      title: 'Articles & Insights',
      description: 'Deep dives into AI, digital transformation, and the future of accounting.',
      icon: BookOpen,
      link: '/articles',
      count: '25+ Articles',
    },
    {
      title: 'Presentations',
      description: 'Expert talks on GCC opportunities, MSME growth, and professional development.',
      icon: Users,
      link: '/presentations',
      count: '50+ Presentations',
    },
    {
      title: 'Contributions',
      description: 'Leadership roles, initiatives, and impact across ICAI and professional communities.',
      icon: Award,
      link: '/contributions',
      count: '15+ Initiatives',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* About Teaser Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-primary mb-6">
              Empowering the Future of Accounting
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CA Sanjib Sanghi is a Council Member of ICAI and a practicing Chartered Accountant 
              focused on digital transformation, GCC opportunities, and capacity building. He mentors 
              professionals and students, speaks on AI in finance, and champions inclusive, 
              tech-forward leadership in the accounting profession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <Link to="/profile">
                  Read Full Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift">
                <Link to="/connect">Connect Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ICAI Journey Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-primary mb-4">
              ICAI Journey Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A progressive journey of leadership, innovation, and service to the accounting profession
            </p>
          </div>
          <Timeline items={timelineData} />
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-primary mb-4">
              Explore My Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover insights, presentations, and contributions shaping the future of accounting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSections.map((section) => (
              <Card key={section.title} className="shadow-professional hover-lift group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <section.icon className="h-8 w-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl font-montserrat text-primary">
                    {section.title}
                  </CardTitle>
                  <div className="text-sm text-gold font-semibold">
                    {section.count}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 leading-relaxed">
                    {section.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="group-hover:border-gold group-hover:text-gold">
                    <Link to={section.link}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Strip */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                Professional Resources
              </h3>
              <p className="text-primary-foreground/80">
                Access tools, frameworks, and insights for modern accounting professionals
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Globe className="mr-2 h-4 w-4" />
                GCC Opportunities
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Users className="mr-2 h-4 w-4" />
                Digital Accountants
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Award className="mr-2 h-4 w-4" />
                AI in Finance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-montserrat font-bold text-2xl lg:text-3xl text-primary mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on digital transformation, GCC opportunities, and professional development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-gold hover:bg-gold-light text-slate font-semibold">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 5,000+ professionals receiving weekly insights
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;