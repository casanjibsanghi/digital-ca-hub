import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroDigital from '@/assets/hero-digital.jpg';

const StudentsBosPage = () => {
  const contributions = [
    {
      title: 'Digital Mentorship Platform',
      period: '2020 - Present',
      summary: 'Online platform connecting experienced CAs with students and early-career professionals',
      link: '',
      file: '',
      achievements: ['Mentored 1000+ CA students and professionals', 'Achieved 85% mentorship completion rate', 'Established 50+ mentor chapters across India']
    },
    {
      title: 'Career Guidance Workshops',
      period: '2019 - Present',
      summary: 'Regular workshops on career planning and professional development',
      link: '',
      file: '',
      achievements: ['Conducted 100+ workshops across 25 cities', 'Reached 15,000+ students and professionals', 'Developed comprehensive career planning toolkit']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroDigital} alt="Students & BoS" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container text-center text-white">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">Students & BoS</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Student mentorship and Board of Studies contributions
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid gap-6">
          {contributions.map((contribution, index) => (
            <Card key={index} className="shadow-professional hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsBosPage;
