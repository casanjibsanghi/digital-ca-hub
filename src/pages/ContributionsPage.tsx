import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, GraduationCap, Briefcase, Cpu, BookOpen, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';
const ContributionsPage = () => {
  const [selectedArea, setSelectedArea] = useState('all');

  // Contribution areas data
  const contributionAreas = [{
    id: 'icai-leadership',
    name: 'ICAI Leadership',
    description: 'Leadership roles and governance at national and regional levels',
    icon: Award,
    color: 'text-gold',
    count: 5
  }, {
    id: 'gcc-initiative',
    name: 'GCC Initiative',
    description: 'Global Capability Center opportunities and partnerships',
    icon: Building,
    color: 'text-blue-600',
    count: 6
  }, {
    id: 'students-bos',
    name: 'Students & BoS',
    description: 'Student mentorship and Board of Studies contributions',
    icon: GraduationCap,
    color: 'text-green-600',
    count: 6
  }, {
    id: 'msme-startups',
    name: 'MSME & Start-ups',
    description: 'Support frameworks and initiatives for small businesses',
    icon: Briefcase,
    color: 'text-purple-600',
    count: 4
  }, {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Technology adoption and AI integration initiatives',
    icon: Cpu,
    color: 'text-red-600',
    count: 5
  }, {
    id: 'publications-tools',
    name: 'Publications/Tools',
    description: 'Books, articles, and professional development tools',
    icon: BookOpen,
    color: 'text-indigo-600',
    count: 3
  }];

  // Detailed contributions data
  const contributions = [
  // ICAI Leadership
  {
    area: 'icai-leadership',
    title: 'Council Member, ICAI',
    period: '2025 - 2029',
    summary: 'Elected to serve the national council, leading digital transformation initiatives',
    link: '',
    file: '',
    achievements: ['Spearheading AI integration policies for the accounting profession', 'Leading curriculum modernization committee', 'Establishing international partnership frameworks']
  }, {
    area: 'icai-leadership',
    title: 'Regional Council Member (RCM), EIRC-ICAI',
    period: '2021 - 2025',
    summary: 'Served Eastern India Regional Council with focus on member services and professional development',
    link: '',
    file: '',
    achievements: ['Launched 15+ professional development programs', 'Increased regional membership engagement by 40%', 'Established digital service delivery framework']
  }, {
    area: 'icai-leadership',
    title: 'Board of Studies Member',
    period: '2019 - 2023',
    summary: 'Contributed to curriculum development and educational policy formulation',
    link: '',
    file: '',
    achievements: ['Integrated technology modules in CA curriculum', 'Developed online assessment frameworks', 'Introduced practical AI training components']
  },
  // GCC Initiative
  {
    area: 'gcc-initiative',
    title: 'GCC Opportunities Mapping Program',
    period: '2023 - Present',
    summary: 'Comprehensive initiative to connect Indian CAs with global capability centers',
    link: '',
    file: '',
    achievements: ['Mapped 200+ GCC opportunities across 15 countries', 'Facilitated 500+ job placements', 'Established partnerships with 50+ multinational corporations']
  }, {
    area: 'gcc-initiative',
    title: 'International Partnership Development',
    period: '2022 - Present',
    summary: 'Building strategic alliances with global accounting bodies and corporations',
    link: '',
    file: '',
    achievements: ['Signed MoUs with 8 international accounting institutes', 'Established reciprocal recognition frameworks', 'Created global mobility pathways for Indian CAs']
  }, {
    area: 'gcc-initiative',
    title: 'GCC-DELHI',
    period: '2023 - Present',
    summary: 'GCC opportunities and networking initiatives in Delhi NCR region',
    link: '',
    file: '',
    achievements: ['Established GCC networking hub in Delhi', 'Connected CAs with major GCC employers', 'Organized quarterly GCC career fairs']
  }, {
    area: 'gcc-initiative',
    title: 'GCC-AHMEDABAD',
    period: '2023 - Present',
    summary: 'GCC opportunities and partnerships in Gujarat region',
    link: '',
    file: '',
    achievements: ['Facilitated GCC job placements in Ahmedabad', 'Created regional GCC career portal', 'Conducted GCC awareness workshops']
  }, {
    area: 'gcc-initiative',
    title: 'GCC HYDERABAD',
    period: '2023 - Present',
    summary: 'GCC initiatives in Telangana and Andhra Pradesh regions',
    link: '',
    file: '',
    achievements: ['Partnered with major Hyderabad-based GCCs', 'Established GCC training programs', 'Built network of 100+ GCC professionals']
  }, {
    area: 'gcc-initiative',
    title: 'GCC-PUNE',
    period: '2023 - Present',
    summary: 'GCC opportunities and skill development in Pune region',
    link: '',
    file: '',
    achievements: ['Launched GCC readiness program in Pune', 'Connected with 50+ GCC companies', 'Organized technical skill workshops']
  },
  // Students & BoS
  {
    area: 'students-bos',
    title: 'Digital Mentorship Platform',
    period: '2020 - Present',
    summary: 'Online platform connecting experienced CAs with students and early-career professionals',
    link: '',
    file: '',
    achievements: ['Mentored 1000+ CA students and professionals', 'Achieved 85% mentorship completion rate', 'Established 50+ mentor chapters across India']
  }, {
    area: 'students-bos',
    title: 'Career Guidance Workshops',
    period: '2019 - Present',
    summary: 'Regular workshops on career planning and professional development',
    link: '',
    file: '',
    achievements: ['Conducted 100+ workshops across 25 cities', 'Reached 15,000+ students and professionals', 'Developed comprehensive career planning toolkit']
  },
  // MSME & Start-ups
  {
    area: 'msme-startups',
    title: 'MSME Financial Framework Initiative',
    period: '2021 - Present',
    summary: 'Comprehensive support system for small and medium enterprises',
    link: '',
    file: '',
    achievements: ['Developed standardized financial management frameworks', 'Supported 500+ MSMEs with compliance and growth strategies', 'Created digital tools for financial planning and analysis']
  }, {
    area: 'msme-startups',
    title: 'Start-up Advisory Program',
    period: '2020 - Present',
    summary: 'Strategic advisory services for emerging businesses and entrepreneurs',
    link: '',
    file: '',
    achievements: ['Advised 200+ start-ups on financial structuring', 'Facilitated $10M+ in funding connections', 'Established start-up CA network with 300+ members']
  },
  // Digital Transformation
  {
    area: 'digital-transformation',
    title: 'AI in Accounting Research Initiative',
    period: '2022 - Present',
    summary: 'Leading research on artificial intelligence applications in accounting and audit',
    link: '',
    file: '',
    achievements: ['Published 15+ research papers on AI in accounting', 'Developed AI-powered audit automation tools', 'Established AI research center with IIT collaboration']
  }, {
    area: 'digital-transformation',
    title: 'Digital Accountants Community',
    period: '2022 - Present',
    summary: 'Founded and lead community of digitally-focused accounting professionals',
    link: '',
    file: '',
    achievements: ['Built community of 10,000+ digital accounting professionals', 'Organized 50+ digital transformation workshops', 'Created comprehensive digital skills certification program']
  },
  // Publications/Tools
  {
    area: 'publications-tools',
    title: 'The Digital Professional (Book)',
    period: '2023',
    summary: 'Bestselling book on digital transformation for accounting professionals',
    link: '',
    file: '',
    achievements: ['Sold 25,000+ copies across India and internationally', 'Translated into 3 regional languages', 'Adopted as reference text by 20+ CA training institutes']
  }, {
    area: 'publications-tools',
    title: 'Professional Development Toolkit',
    period: '2021 - Present',
    summary: 'Comprehensive suite of tools and resources for CA professional development',
    link: '',
    file: '',
    achievements: ['Downloaded by 50,000+ professionals', 'Regular updates with latest industry trends', 'Integrated with major CA learning platforms']
  }];

  // Filter contributions based on selected area
  const filteredContributions = selectedArea === 'all' ? contributions : contributions.filter(contribution => contribution.area === selectedArea);
  const getAreaById = (id: string) => contributionAreas.find(area => area.id === id);
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroSanjib} alt="CA Sanjib Sanghi" className="w-full h-full object-contain md:object-cover bg-slate" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
                Professional Contributions
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Leadership roles, initiatives, and impact across ICAI and professional communities
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contributionAreas.map(area => {
            const CardWrapper = area.id === 'gcc-initiative' 
              ? ({ children }: { children: React.ReactNode }) => <Link to="/gcc-initiative">{children}</Link>
              : ({ children }: { children: React.ReactNode }) => <div onClick={() => setSelectedArea(area.id)}>{children}</div>;
            
            return (
              <CardWrapper key={area.id}>
                <Card className={`shadow-professional hover-lift cursor-pointer transition-all ${selectedArea === area.id ? 'ring-2 ring-gold' : ''}`}>
              <CardHeader className="text-center pb-3">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center ${area.color}`}>
                  <area.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-montserrat text-lg">{area.name}</CardTitle>
                <Badge variant="outline" className="mx-auto">
                  {area.count} Contributions
                </Badge>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription>{area.description}</CardDescription>
              </CardContent>
            </Card>
          </CardWrapper>
        );
      })}
        </div>

        {/* Filter Tabs */}
        <Tabs value={selectedArea} onValueChange={setSelectedArea} className="mb-8">
          <TabsList className="w-full flex flex-wrap justify-center gap-2">
            <TabsTrigger value="all">All Contributions</TabsTrigger>
            {contributionAreas.map(area => (
              <TabsTrigger key={area.id} value={area.id}>
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedArea} className="mt-8">
            {/* Contributions List */}
            <div className="grid gap-6">
              {filteredContributions.map((contribution, index) => {
                const area = getAreaById(contribution.area);
                return (
                  <Card key={index} className="shadow-professional hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {area && <area.icon className={`h-5 w-5 ${area.color}`} />}
                            <Badge variant="outline">{contribution.period}</Badge>
                          </div>
                          <CardTitle className="font-montserrat text-xl mb-2">
                            {contribution.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {contribution.summary}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-muted-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {contribution.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Award className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {(contribution.link || contribution.file) && (
                        <div className="flex gap-3 mt-4">
                          {contribution.link && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Learn More
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Impact Summary */}
        <div className="mt-16">
          <Card className="shadow-professional bg-gradient-to-r from-primary to-primary-light text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-3xl mb-4">
                  Collective Impact
                </h3>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                  Transforming the accounting profession through leadership, innovation, and community building
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">1000+</div>
                  <div className="text-primary-foreground/80">CAs Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">500+</div>
                  <div className="text-primary-foreground/80">GCC Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">10,000+</div>
                  <div className="text-primary-foreground/80">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">25+</div>
                  <div className="text-primary-foreground/80">Cities Reached</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default ContributionsPage;