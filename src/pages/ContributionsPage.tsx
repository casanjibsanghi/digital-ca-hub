import { Link } from 'react-router-dom';
import { Building, GraduationCap, Briefcase, Cpu, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroSanjib from '@/assets/Hero_Sanjib.png';

const ContributionsPage = () => {

  const contributionAreas = [
    {
      id: 'gcc-initiative',
      name: 'GCC Initiative',
      description: 'Global Capability Center opportunities and partnerships',
      icon: Building,
      color: 'text-blue-600',
      count: 4,
      path: '/gcc-initiative'
    },
    {
      id: 'students-bos',
      name: 'Students & BoS',
      description: 'Student mentorship and Board of Studies contributions',
      icon: GraduationCap,
      color: 'text-green-600',
      count: 2,
      path: '/students-bos'
    },
    {
      id: 'msme-startups',
      name: 'MSME & Start-ups',
      description: 'Support frameworks and initiatives for small businesses',
      icon: Briefcase,
      color: 'text-purple-600',
      count: 2,
      path: '/msme-startups'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Technology adoption and AI integration initiatives',
      icon: Cpu,
      color: 'text-red-600',
      count: 2,
      path: '/digital-transformation'
    },
    {
      id: 'books-coauthored',
      name: 'Books Co-Authored',
      description: 'Books, articles, and professional development tools',
      icon: BookOpen,
      color: 'text-indigo-600',
      count: 2,
      path: '/books-coauthored'
    }
  ];

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
        {/* Contribution Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contributionAreas.map(area => (
            <Link key={area.id} to={area.path}>
              <Card className="shadow-professional hover-lift cursor-pointer transition-all h-full">
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
            </Link>
          ))}
        </div>

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
                  <div className="text-3xl font-bold text-gold mb-2">50,000+</div>
                  <div className="text-primary-foreground/80">Students & Members Empowered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">200+</div>
                  <div className="text-primary-foreground/80">Events & Initiatives Led</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">10+</div>
                  <div className="text-primary-foreground/80">International Delegations/Engagements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">1800+</div>
                  <div className="text-primary-foreground/80">Expanding GCC Opportunities for Indian CAs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default ContributionsPage;
