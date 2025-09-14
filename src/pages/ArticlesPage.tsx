import { useState } from 'react';
import { Search, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';
const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Sample articles data
  const articles = [{
    id: 1,
    title: 'The Future of AI in Accounting: Beyond Automation',
    excerpt: 'Exploring how artificial intelligence is reshaping the accounting profession and creating new opportunities for strategic advisory services.',
    date: '2024-12-15',
    readTime: '8 min read',
    tags: ['AI', 'Digital Transformation', 'Future of Work'],
    image: '/api/placeholder/400/200'
  }, {
    id: 2,
    title: 'GCC Opportunities: A Guide for Indian CAs',
    excerpt: 'Comprehensive analysis of Global Capability Center opportunities and how chartered accountants can leverage these emerging roles.',
    date: '2024-11-28',
    readTime: '12 min read',
    tags: ['GCC', 'Career Growth', 'Global Markets'],
    image: '/api/placeholder/400/200'
  }, {
    id: 3,
    title: 'Digital Audit Methodologies: The ICAI Perspective',
    excerpt: 'Understanding the latest digital audit frameworks and their implementation in modern accounting practices.',
    date: '2024-11-10',
    readTime: '10 min read',
    tags: ['Audit', 'Digital Transformation', 'ICAI'],
    image: '/api/placeholder/400/200'
  }, {
    id: 4,
    title: 'MSME Financial Management in the Digital Age',
    excerpt: 'How small and medium enterprises can leverage digital tools for better financial management and compliance.',
    date: '2024-10-22',
    readTime: '6 min read',
    tags: ['MSME', 'Financial Management', 'Digital Tools'],
    image: '/api/placeholder/400/200'
  }, {
    id: 5,
    title: 'Building a Sustainable CA Practice: Lessons from Digital Leaders',
    excerpt: 'Insights from successful digital transformation journeys of CA firms across India.',
    date: '2024-10-05',
    readTime: '9 min read',
    tags: ['Practice Management', 'Sustainability', 'Leadership'],
    image: '/api/placeholder/400/200'
  }, {
    id: 6,
    title: 'The Role of Blockchain in Modern Accounting',
    excerpt: 'Examining the potential of blockchain technology in revolutionizing accounting practices and ensuring transparency.',
    date: '2024-09-18',
    readTime: '11 min read',
    tags: ['Blockchain', 'Technology', 'Innovation'],
    image: '/api/placeholder/400/200'
  }];

  // Get all unique tags
  const allTags = [...new Set(articles.flatMap(article => article.tags))];

  // Filter articles based on search and tags
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
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
                Articles & Insights
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Deep dives into AI, digital transformation, and the future of accounting
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          

          {/* Results count */}
          <div className="mt-4 text-muted-foreground">
            Showing {filteredArticles.length} of {articles.length} articles
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => 
            <Card key={article.id} className="shadow-professional hover-lift group cursor-pointer transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && <div className="text-center py-16">
            <div className="mb-4">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filter criteria
              </p>
            </div>
            <Button onClick={() => {
          setSearchTerm('');
          setSelectedTag('');
        }} variant="outline">
              Clear Filters
            </Button>
          </div>}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="shadow-professional">
            <CardContent className="p-8">
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Stay Updated with Latest Insights
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive weekly articles on digital transformation, AI in accounting, and professional development
              </p>
              <Button className="bg-gold hover:bg-gold-light text-slate font-semibold">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default ArticlesPage;