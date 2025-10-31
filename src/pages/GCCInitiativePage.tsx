import { Building, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroGlobal from '@/assets/hero-global.jpg';
import gccDelhiFlyer from '@/assets/gcc-delhi-flyer.jpeg';
import gccAhmedabadFlyer from '@/assets/gcc-ahmedabad-flyer.jpeg';
import gccHyderabadFlyer from '@/assets/gcc-hyderabad-flyer.jpeg';
import gccPuneFlyer from '@/assets/gcc-pune-flyer.jpeg';

const GCCInitiativePage = () => {
  const gccContributions = [
    {
      title: 'ICAI GCC Summit-Delhi',
      period: 'JUNE - 2025',
      summary: 'GCC opportunities and networking initiatives in Delhi NCR region',
      link: '',
      file: '',
      achievements: ['Established GCC networking hub in Delhi', 'Connected CAs with major GCC employers', 'Organized quarterly GCC career fairs'],
      images: [gccDelhiFlyer]
    },
    {
      title: 'ICAI GCC Summit-Ahmedabad',
      period: 'AUGUST - 2025',
      summary: 'GCC opportunities and partnerships in Gujarat region',
      link: '',
      file: '',
      achievements: ['Facilitated GCC job placements in Ahmedabad', 'Created regional GCC career portal', 'Conducted GCC awareness workshops'],
      images: [gccAhmedabadFlyer]
    },
    {
      title: 'ICAI GCC Summit-Hyderabad',
      period: 'OCTOBER - 2025',
      summary: 'GCC initiatives in Telangana and Andhra Pradesh regions',
      link: '',
      file: '',
      achievements: ['Partnered with major Hyderabad-based GCCs', 'Established GCC training programs', 'Built network of 100+ GCC professionals'],
      images: [gccHyderabadFlyer]
    },
    {
      title: 'ICAI GCC Summit-Pune',
      period: 'NOVEMBER - 2025',
      summary: 'GCC opportunities and skill development in Pune region',
      link: '',
      file: '',
      achievements: ['Launched GCC readiness program in Pune', 'Connected with 50+ GCC companies', 'Organized technical skill workshops'],
      images: [gccPuneFlyer]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroGlobal} alt="GCC Initiative" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
                GCC Initiative
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Global Capability Center opportunities and partnerships connecting Indian CAs with international opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contributions List */}
      <div className="container py-16">
        <div className="grid gap-6 max-w-5xl mx-auto">
          {gccContributions.map((contribution, index) => (
            <Card key={index} className="shadow-professional hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="h-5 w-5 text-blue-600" />
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
                 {(contribution as any).images && (
                   <div className="mt-6">
                     {(contribution as any).images.map((image: string, i: number) => (
                       <img 
                         key={i} 
                         src={image} 
                         alt={`${contribution.title} flyer`}
                         className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                       />
                     ))}
                   </div>
                 )}
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
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="shadow-professional bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-3xl mb-4">
                  GCC Initiative Impact
                </h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Creating global opportunities for Indian Chartered Accountants
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">700+</div>
                  <div className="text-white/80">Delegates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">200+</div>
                  <div className="text-white/80">GCC Opportunities Mapped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="text-white/80">Corporate Partnerships</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GCCInitiativePage;
