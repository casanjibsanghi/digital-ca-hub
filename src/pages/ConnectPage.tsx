import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, User, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';

const ConnectPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    topic: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        topic: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sanjib@casnb.in',
      href: 'mailto:sanjib@casnb.in',
      description: 'Primary communication channel',
    },
    {
      icon: Phone,
      label: 'Call',
      value: '+91 98314 34000',
      href: 'tel:+919831434000',
      description: 'Ping me over WhatsApp for immediate responses',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Kolkata, West Bengal, India',
      href: '#',
      description: '',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Quick Connect: +91 98314 34000',
      href: 'https://wa.me/919831434000',
      description: 'For urgent queries',
    },
  ];

  const topicOptions = [
    'Speaking Engagement',
    'Collaboration Opportunity',
    'GCC Opportunities',
    'Student Mentorship',
    'MSME Support',
    'Digital Transformation Consulting',
    'Media & Press',
    'Other',
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center">
        <Card className="shadow-professional max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. I'll get back to you within 24-48 hours.
            </p>
            <div className="animate-pulse">
              <div className="text-sm text-muted-foreground">
                Redirecting in 3 seconds...
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSanjib}
            alt="CA Sanjib Sanghi"
            className="w-full h-full object-contain md:object-cover bg-slate"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
                Let's Connect
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Reach out for speaking engagements, collaborations, mentorship, or professional consultations
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to meaningful conversations about the future of accounting, 
                digital transformation, mentorship opportunities, and professional collaboration. 
                Whether you're a student seeking guidance, an organization looking for expertise, 
                or a fellow professional interested in collaboration, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-professional hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-1">{info.label}</h3>
                        <a 
                          href={info.href}
                          className="text-lg font-medium hover:text-gold transition-colors mb-1 block"
                        >
                          {info.value}
                        </a>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-primary">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="organization"
                        type="text"
                        placeholder="Enter your organization name"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic of Interest *</Label>
                    <Select value={formData.topic} onValueChange={(value) => handleInputChange('topic', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {topicOptions.map((topic) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry in detail..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-light text-slate font-semibold py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    Your information will be kept confidential and used only for communication purposes.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-professional text-center">
            <CardContent className="p-6">
              <MessageSquare className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                Speaking Engagements
              </h3>
              <p className="text-muted-foreground text-sm">
                Available for keynotes, workshops, and panel discussions on digital transformation and AI in accounting.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-professional text-center">
            <CardContent className="p-6">
              <User className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                Mentorship
              </h3>
              <p className="text-muted-foreground text-sm">
                Offering guidance to CA students and early-career professionals on career planning and professional development.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-professional text-center">
            <CardContent className="p-6">
              <Building className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                Consulting
              </h3>
              <p className="text-muted-foreground text-sm">
                Strategic advisory services for organizations looking to implement digital transformation initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
