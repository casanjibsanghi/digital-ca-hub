import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroBooks from '@/assets/hero-books.jpg';
import bookDigitalProfessional from '@/assets/book-digital-professional.png';
import bookMsmeShorts from '@/assets/book-msme-shorts.png';

const BooksCoAuthoredPage = () => {
  const contributions = [
    {
      title: 'The Digital Professional (Book)',
      period: '2018',
      summary: 'Bestselling book on digital transformation for accounting professionals',
      link: 'https://heyzine.com/flip-book/3b95274311.html',
      image: bookDigitalProfessional,
      achievements: ['Sold 25,000+ copies across India and internationally', 'Translated into 3 regional languages', 'Adopted as reference text by 20+ CA training institutes']
    },
    {
      title: 'MSME Shorts:Handholding MSMEs - From Inception to Success',
      period: '2024',
      summary: 'A Guide to Small Businesses compiling key insights on MSMEs',
      link: 'https://heyzine.com/flip-book/5c549b0e51.html#page/6',
      image: bookMsmeShorts,
      achievements: ['Downloaded by 50,000+ professionals', 'Regular updates with latest industry trends', 'Integrated with major CA learning platforms']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBooks} alt="Books Co-Authored" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container text-center text-white">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">Books Co-Authored</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Books, articles, and professional development tools
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid gap-6">
          {contributions.map((contribution, index) => (
            <Card key={index} className="shadow-professional hover-lift">
              <div className="grid md:grid-cols-[250px_1fr] gap-6">
                <div className="p-6 flex items-center justify-center">
                  <img 
                    src={contribution.image} 
                    alt={contribution.title}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div>
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
                    {contribution.link && (
                      <div className="flex gap-3 mt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCoAuthoredPage;
