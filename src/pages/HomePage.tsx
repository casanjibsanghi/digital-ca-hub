import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import Timeline from '@/components/ui/timeline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';

const HomePage = () => {
  // Timeline data
  const timelineData = [{
    year: '2025',
    title: 'Central Council Member',
    organization: 'Institute of Chartered Accountants of India',
    outcomes: [
      'Elected to serve on the ICAI council for 2025-29 term',
      'Vice-Chairman - Board of Studies - Operations of ICAI',
      'Convenor - Group to Promote India as an Accounting GCC of ICAI',
      'Dy. Convenor - Digital Re-Engineering & Transformation Directorate of ICAI',
      'Dy. Convenor - Human Resources Directorate of ICAI',
      'Member - AI in ICAI',
      'Member - Auditing & Assurance Standards Board',
      'Member - Board of Internal Audit & Management Accounting',
      'Member - Board of Studies - Academics',
      'Member - Centre of Excellence Directorate',
      'Member - Committee for Aggregation of CA Firms',
      'Member - Committee for Members in Entrepreneurship & Public Service',
      'Member - Committee for Members in Industry & Business',
      'Member - Committee on Financial Markets and Investors Protection',
      'Member - Committee on Promoting Work Life Balance',
      'Member - Corporate Laws and Corporate Governance Committee',
      'Member - Development of International Trade, Service & WTO Directorate (under International Affairs Committee)',
      'Member - Digital Accounting and Assurance Board',
      'Member - Disciplinary Committee (u/s 21 D read with section 17)',
      'Member - Editorial Board',
      'Member - Estate Development Directorate (under Infrastructure Development Committee)',
      'Member - Ethical Standards Board',
      'Member - Executive Committee',
      'Member - Expert Advisory Committee',
      'Member - Finance Committee',
      'Member - Group on Enabling Lifestyle for Environment - LIFE (under Committee on Promoting Work Life Balance)',
      'Member - GST & Indirect Taxes Committee',
      'Member - Infrastructure Development Committee',
      'Member - Insolvency & Valuation Standards Board',
      'Member - International Affairs Committee',
      'Member - Management Committee',
      'Member - Professional Development Committee',
      'Member - Professional Skills Enrichment Committee',
      'Member - Public Relations Committee',
      'Member - Publication & CDS Directorate',
      'Member - RBA Directorate',
      'Member - Research Committee',
      'Member - UDIN Directorate'
    ]
  }, {
    year: '2024',
    title: 'Chairman',
    organization: 'Eastern India Regional Council of ICAI',
    outcomes: [
      'Organised the 49th Regional Conference with a record breaking delegate count',
      'Organised Udaan@75 - Celebrating Womanhood: A compilation of 75 inspiring stories of women Chartered Accountants',
      'Organised Voice of Diamonds - a We Care initiative: A compilation of 100+ stories of the diamonds of the profession'
    ]
  }, {
    year: '2023',
    title: 'Vice-Chairman',
    organization: 'Eastern India Regional Council of ICAI',
    outcomes: ['Chairman - Eastern India Chartered Accountants Students Association-EIRC of ICAI']
  }, {
    year: '2022',
    title: 'Secretary',
    organization: 'Eastern India Regional Council of ICAI',
    outcomes: ['Served as Secretary of Eastern India Regional Council']
  }, {
    year: '2018',
    title: 'Secretary',
    organization: 'Eastern India Regional Council of ICAI',
    outcomes: ['Served as Secretary of Eastern India Regional Council']
  }, {
    year: '2017',
    title: 'Treasurer',
    organization: 'Eastern India Regional Council of ICAI',
    outcomes: ['Served as Treasurer of Eastern India Regional Council']
  }, {
    year: '2016',
    title: 'Member',
    organization: 'Eastern India Regional Council of ICAI',
    outcomes: ['Elected as Member of Eastern India Regional Council']
  }];

  // Featured sections data
  const featuredSections = [{
    title: 'Articles & Insights',
    description: 'Deep dives into Technology, AI, Digital Transformation, and the future of the profession.',
    icon: BookOpen,
    link: '/articles'
  }, {
    title: 'Presentations',
    description: 'Expert talks on Professional Opportunities, Business Growth, and Overall Professional Development.',
    icon: Users,
    link: '/presentations'
  }, {
    title: 'Contributions',
    description: 'Leadership roles, initiatives, and impact across ICAI and other Professional Communities.',
    icon: Award,
    link: '/contributions'
  }];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroSanjib} alt="CA Sanjib Sanghi" className="w-full h-full object-contain md:object-cover bg-slate" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-4">
              CA Sanjib Sanghi
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-white/90">
              Central Council Member, ICAI (2025-29)
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-white/80">
              From Ledgers to Global Leadership - Transforming the future of the profession through Digital Innovation and Strategic Excellence.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-slate font-semibold">
                <Link to="/profile" className="flex items-center">
                  Explore Profile
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-primary mb-6">
              Empowering the Future of the Profession
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CA Sanjib Sanghi is a practicing Chartered Accountant and a Central Council Member of ICAI focused on Digital Transformation, GCC opportunities for Professionals and sheer Capacity Building. He mentors professionals and students, speaks on AI in finance, and champions inclusive, tech-forward leadership in the accounting profession.
            </p>
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
            {featuredSections.map(section => (
              <Card key={section.title} className="shadow-professional hover-lift group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <section.icon className="h-8 w-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl font-montserrat text-primary">
                    {section.title}
                  </CardTitle>
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
    </div>
  );
};

export default HomePage;
