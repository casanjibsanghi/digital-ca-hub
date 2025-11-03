import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';
const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Categorized articles
  const categories = {
    "AI & Digital Transformation": [
      { id: 1, title: "AI in BPO & KPO", driveLink: "#" },
      { id: 2, title: "Technology – Present and Future", driveLink: "#" },
      { id: 3, title: "ChatGPT & AI", driveLink: "https://drive.google.com/file/d/1xbxOtIGzYQoeZkKdpvDd8nvb0Az-Gz2J/view?usp=sharing" },
      { id: 4, title: "MSME – Automation – Guwahati", driveLink: "#" },
      { id: 5, title: "Becoming AI Ready", driveLink: "https://drive.google.com/file/d/1E4xey2ycNU_PvZERRO_CnfGt2lVAdZ9-/view?usp=sharing" },
      { id: 6, title: "Transformative Technologies: Risks & Opportunities", driveLink: "#" },
      { id: 7, title: "GATE (Grow, Aim, Transform, Engage)", driveLink: "#" }
    ],
    "Professional Capability & Skill Building": [
      { id: 8, title: "Digital Empowerment for CAs", driveLink: "#" },
      { id: 9, title: "Capacity Building", driveLink: "#" },
      { id: 10, title: "Data Visualisation Presentation", driveLink: "https://drive.google.com/file/d/1k91S0g-tkxDCxpTYZHRKsyxUqmlINcDd/view?usp=sharing" },
      { id: 11, title: "Future Fit Chartered Accountants", driveLink: "https://drive.google.com/file/d/1qnkNNXT_JxdpyX5vtZ2ZhTqiS-xL3vsO/view?usp=sharing" }
    ],
    "Audit, Assurance & Compliance Modernization": [
      { id: 12, title: "The Peer Review Mastery", driveLink: "#" },
      { id: 13, title: "Audit Trail in 10 Minutes", driveLink: "#" },
      { id: 14, title: "Technology – Opportunities & Challenges for Practitioners", driveLink: "#" }
    ],
    "Global Finance & GCC Leadership": [
      { id: 15, title: "CAs Leading GCCs – Sanjib Sanghi", driveLink: "#" },
      { id: 16, title: "AI & Startup PPT", driveLink: "https://drive.google.com/file/d/1Tqa3Q3whNtvL6b6QexrysdR273hVfKJj/view?usp=sharing" },
      { id: 17, title: "India GCC Panorama", driveLink: "#" }
    ]
  };

  // Get all articles for search
  const allArticles = Object.entries(categories).flatMap(([category, articles]) => 
    articles.map(article => ({ ...article, category }))
  );

  // Filter articles based on search
  const filteredArticles = searchTerm 
    ? allArticles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroSanjib} alt="CA Sanjib Sanghi" className="w-full h-full object-contain md:object-cover bg-slate" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

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
        {/* Search Section */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg border bg-background"
          />
        </div>

        {/* Search Results or Categorized View */}
        {searchTerm ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            {filteredArticles && filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles?.map(article => (
                  <a 
                    key={article.id} 
                    href={article.driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col min-h-[120px] p-6 border rounded-lg bg-card hover:bg-gold/10 hover:shadow-lg transition-all duration-300 hover:border-gold"
                  >
                    <p className="text-sm text-muted-foreground mb-2">{article.category}</p>
                    <h3 className="font-montserrat font-semibold text-lg text-foreground hover:text-gold transition-colors">
                      {article.title}
                    </h3>
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Tabs defaultValue="category-0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {Object.keys(categories).map((category, index) => (
                <TabsTrigger key={index} value={`category-${index}`}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(categories).map(([categoryName, articles], index) => (
              <TabsContent key={index} value={`category-${index}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{categoryName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {articles.map(article => (
                        <a 
                          key={article.id} 
                          href={article.driveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center min-h-[100px] p-4 border rounded-lg bg-background hover:bg-gold/10 hover:shadow-lg transition-all duration-300 hover:border-gold"
                        >
                          <h3 className="font-montserrat font-semibold text-base text-foreground hover:text-gold transition-colors text-center">
                            {article.title}
                          </h3>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>;
};
export default ArticlesPage;
