import { Download, Linkedin, Twitter, Youtube, Mail, MapPin, Award, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import hero and profile images
import heroSanjib from '@/assets/Hero_Sanjib.png';
import profilePhoto from '@/assets/hero-sanjib.jpg';
const ProfilePage = () => {
  const highlights = ['Council Member, ICAI (2025–29)', 'Chairman, EIRC-ICAI (2024-25)', 'Co-authored "The Digital Professional"', 'Co-authored "MSME Shorts - From Inception to Success"', 'Convenor, Group to Promote India as an Accounting GCC of ICAI', 'Vice-Chairman, Board of Studies (Operations) of ICAI', 'Mentor to 1000+ students and professionals', 'Speaker at 50+ national and international conferences'];
  const socialLinks = [{
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
    color: 'text-blue-600'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
    color: 'text-blue-400'
  }, {
    icon: Youtube,
    href: '#',
    label: 'YouTube',
    color: 'text-red-600'
  }, {
    icon: Mail,
    href: 'mailto:contact@example.com',
    label: 'Email',
    color: 'text-gray-600'
  }];
  const achievements = [{
    icon: Award,
    title: 'Central Council Member of ICAI',
    description: '',
    year: ''
  }, {
    icon: Users,
    title: 'Digital Transformation Leader',
    description: 'Built a digital community to influence young minds',
    year: ''
  }, {
    icon: BookOpen,
    title: 'Author',
    description: 'Bestselling book "The Digital Professional"',
    year: ''
  }];
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
                Professional Profile
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Leadership, Innovation, and Excellence in Chartered Accountancy
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Photo and Basic Info */}
          <div className="lg:col-span-1">
            <Card className="shadow-professional hover-lift">
              <CardContent className="p-8 text-center">
                <img src={profilePhoto} alt="CA Sanjib Sanghi" className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-elevated" />
                <h2 className="font-montserrat font-bold text-2xl text-primary mb-2">
                  CA Sanjib Sanghi
                </h2>
                <p className="text-gold font-semibold mb-4">
                  Council Member, ICAI
                </p>
                <div className="flex items-center justify-center text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Kolkata, India</span>
                </div>

                {/* Download Buttons */}
                <div className="space-y-3 mb-6">
                  <Button 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href="YOUR_GOOGLE_DRIVE_LINK_HERE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Profile
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {socialLinks.map(social => <a key={social.label} href={social.href} className={`w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:scale-110 transition-transform ${social.color}`} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>)}
                </div>
              </CardContent>
            </Card>

            {/* Achievements Card */}
            <Card className="shadow-professional mt-8">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map(achievement => <div key={achievement.title} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                  </div>)}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Profile */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-primary">
                  Professional Biography
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  CA Sanjib Sanghi stands as a distinguished leader in the Indian accounting profession, 
                  currently serving as a Council Member of the Institute of Chartered Accountants of India (ICAI) 
                  for the 2025-29 term. His journey exemplifies the evolution of modern accounting from traditional 
                  practices to cutting-edge digital transformation.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over two decades of experience, Sanjib has been instrumental in shaping the future of 
                  accounting through his pioneering work in AI integration, digital audit methodologies, and 
                  global capability center (GCC) initiatives. His leadership extends beyond traditional accounting 
                  boundaries, encompassing strategic advisory roles, technology innovation, and professional mentorship.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  As the founder of Digital Accountants and Cloud Infosolutions, he has created platforms that 
                  serve over 10,000 professionals, providing them with cutting-edge tools and opportunities in 
                  the digital economy. His bestselling book "The Digital Professional" has become essential 
                  reading for accountants navigating the digital transformation landscape.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Sanjib's commitment to education and capacity building is evident through his extensive 
                  mentorship programs, having guided over 1,000 CA students and professionals. His vision 
                  for an AI-ready, globally competitive accounting profession continues to drive his initiatives 
                  in curriculum development, international partnerships, and technological innovation.
                </p>
              </CardContent>
            </Card>

            {/* Professional Highlights */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-primary">
                  Professional Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Personal Highlights */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-primary">
                  Personal Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Married to Mrs. Anju Sanghi', 'A happy Father of a son and a daughter - Anish Sanghi and Arshita Sanghi', 'Hailing from Sirohi, Rajasthan', 'Located at Kolkata, West Bengal'].map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Focus Areas */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-primary">
                  Current Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Badge variant="outline" className="p-3 justify-center text-center border-gold text-gold">
                    Digital Transformation
                  </Badge>
                  <Badge variant="outline" className="p-3 justify-center text-center border-gold text-gold">
                    AI in Accounting
                  </Badge>
                  <Badge variant="outline" className="p-3 justify-center text-center border-gold text-gold">
                    GCC Opportunities
                  </Badge>
                  <Badge variant="outline" className="p-3 justify-center text-center border-gold text-gold">
                    Professional Mentorship
                  </Badge>
                  <Badge variant="outline" className="p-3 justify-center text-center border-gold text-gold">
                    International Partnerships
                  </Badge>
                  <Badge variant="outline" className="p-3 justify-center text-center border-gold text-gold">
                    MSME Support
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default ProfilePage;
