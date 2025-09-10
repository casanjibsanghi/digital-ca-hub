import { useState } from 'react';
import { Search, Calendar, MapPin, Download, Play, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PresentationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Sample presentations data
  const presentations = [
    {
      id: 1,
      title: 'AI Revolution in Accounting: Opportunities and Challenges',
      event: 'ICAI National Conference 2024',
      location: 'New Delhi, India',
      date: '2024-12-08',
      topics: ['AI', 'Digital Transformation'],
      description: 'Comprehensive overview of AI applications in accounting, potential benefits, and implementation challenges.',
      type: 'Keynote',
      duration: '45 minutes',
      audience: '500+ CAs',
      hasSlides: true,
      hasVideo: true,
    },
    {
      id: 2,
      title: 'GCC Career Pathways for Indian Chartered Accountants',
      event: 'Eastern India CA Summit',
      location: 'Kolkata, India',
      date: '2024-11-15',
      topics: ['GCC', 'Career Growth'],
      description: 'Detailed guide to global capability center opportunities and career advancement strategies.',
      type: 'Workshop',
      duration: '2 hours',
      audience: '200+ Professionals',
      hasSlides: true,
      hasVideo: false,
    },
    {
      id: 3,
      title: 'Digital Audit Frameworks: The Future is Now',
      event: 'International Audit Symposium',
      location: 'Mumbai, India',
      date: '2024-10-22',
      topics: ['Audit', 'Digital Transformation'],
      description: 'Exploring modern digital audit methodologies and their practical implementation.',
      type: 'Panel Discussion',
      duration: '60 minutes',
      audience: '300+ Auditors',
      hasSlides: true,
      hasVideo: true,
    },
    {
      id: 4,
      title: 'MSME Financial Management in Digital Era',
      event: 'SME Finance Conference',
      location: 'Bangalore, India',
      date: '2024-09-18',
      topics: ['MSME', 'Financial Management'],
      description: 'Strategies for small and medium enterprises to leverage digital financial tools.',
      type: 'Presentation',
      duration: '30 minutes',
      audience: '150+ Entrepreneurs',
      hasSlides: true,
      hasVideo: false,
    },
    {
      id: 5,
      title: 'Leadership in Digital Transformation',
      event: 'CA Leadership Summit',
      location: 'Chennai, India',
      date: '2024-08-25',
      topics: ['Leadership', 'Digital Transformation'],
      description: 'Building leadership capabilities for the digital age in accounting profession.',
      type: 'Keynote',
      duration: '40 minutes',
      audience: '400+ Leaders',
      hasSlides: true,
      hasVideo: true,
    },
    {
      id: 6,
      title: 'Student Mentorship: Preparing Next Generation CAs',
      event: 'ICAI Student Conference',
      location: 'Hyderabad, India',
      date: '2024-07-12',
      topics: ['Education', 'Mentorship'],
      description: 'Effective mentorship strategies for CA students and early career professionals.',
      type: 'Workshop',
      duration: '90 minutes',
      audience: '250+ Students',
      hasSlides: true,
      hasVideo: false,
    },
  ];

  // Get all unique topics
  const allTopics = [...new Set(presentations.flatMap(presentation => presentation.topics))];

  // Filter presentations based on search and topic
  const filteredPresentations = presentations.filter(presentation => {
    const matchesSearch = presentation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         presentation.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         presentation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || presentation.topics.includes(selectedTopic);
    
    return matchesSearch && matchesTopic;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Keynote': return 'bg-gold text-slate';
      case 'Workshop': return 'bg-primary text-white';
      case 'Panel Discussion': return 'bg-success text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
              Presentations & Talks
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Expert talks on GCC opportunities, MSME growth, and professional development
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search presentations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Topic Filter */}
            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  {allTopics.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-muted-foreground">
            Showing {filteredPresentations.length} of {presentations.length} presentations
          </div>
        </div>

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPresentations.map((presentation) => (
            <Card key={presentation.id} className="shadow-professional hover-lift group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getTypeColor(presentation.type)}>
                    {presentation.type}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {new Date(presentation.date).toLocaleDateString()}
                  </div>
                </div>
                
                <CardTitle className="font-montserrat text-xl group-hover:text-gold transition-colors">
                  {presentation.title}
                </CardTitle>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{presentation.event}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{presentation.location}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4">
                  {presentation.description}
                </CardDescription>
                
                {/* Presentation Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Duration:</span>
                    <p className="text-muted-foreground">{presentation.duration}</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Audience:</span>
                    <p className="text-muted-foreground">{presentation.audience}</p>
                  </div>
                </div>
                
                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {presentation.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {presentation.hasSlides && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download Slides
                    </Button>
                  )}
                  {presentation.hasVideo && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Recording
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPresentations.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-2">
                No presentations found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filter criteria
              </p>
            </div>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedTopic('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Speaking Opportunities CTA */}
        <div className="mt-16">
          <Card className="shadow-professional bg-gradient-to-r from-primary to-primary-light text-white">
            <CardContent className="p-8 text-center">
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                Invite for Speaking Engagements
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Available for keynotes, workshops, and panel discussions on digital transformation, 
                AI in accounting, GCC opportunities, and professional development.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Book Speaking Engagement
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PresentationsPage;