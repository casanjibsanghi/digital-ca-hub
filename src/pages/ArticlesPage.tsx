import { useState, useEffect } from 'react';
import { Search, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';
const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch articles from Supabase
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('is_published', true)
          .order('published_date', { ascending: false });

        if (error) {
          console.error('Error fetching articles:', error);
        } else {
          setArticles(data || []);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Get all unique tags
  const allTags = [...new Set(articles.flatMap(article => article.tags))];

  // Filter articles based on search and tags
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (article.excerpt && article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = !selectedTag || (article.tags && article.tags.includes(selectedTag));
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
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Tag Filters */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === '' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTag('')}
                >
                  All
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Results count */}
          <div className="mt-4 text-muted-foreground text-center">
            Showing {filteredArticles.length} of {articles.length} articles
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="animate-pulse">
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-2">
                Loading articles...
              </h3>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => 
              <Card key={article.id} className="shadow-professional hover-lift group cursor-pointer transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {article.image_url && (
                      <img 
                        src={article.image_url} 
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.published_date).toLocaleDateString()}</span>
                      {article.read_time && (
                        <>
                          <Clock className="h-4 w-4 ml-2" />
                          <span>{article.read_time}</span>
                        </>
                      )}
                    </div>
                    <a 
                      href={article.document_url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="font-montserrat font-semibold text-lg text-foreground group-hover:text-primary transition-colors hover:underline mb-2">
                        {article.title}
                      </h3>
                    </a>
                    {article.excerpt && (
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

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