import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroMsme from '@/assets/hero-msme.jpg';

const MsmeStartupsPage = () => {
  const contributions = [
    {
      title: 'MSME Financial Framework Initiative',
      period: '2021 - Present',
      summary: 'Comprehensive support system for small and medium enterprises',
      link: '',
      file: '',
      achievements: ['Developed standardized financial management frameworks', 'Supported 500+ MSMEs with compliance and growth strategies', 'Created digital tools for financial planning and analysis']
    },
    {
      title: 'Start-up Advisory Program',
      period: '2020 - Present',
      summary: 'Strategic advisory services for emerging businesses and entrepreneurs',
      link: '',
      file: '',
      achievements: ['Advised 200+ start-ups on financial structuring', 'Facilitated $10M+ in funding connections', 'Established start-up CA network with 300+ members']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMsme} alt="MSME & Start-ups" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container text-center text-white">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">MSME & Start-ups</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Support frameworks and initiatives for small businesses
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

export default MsmeStartupsPage;
