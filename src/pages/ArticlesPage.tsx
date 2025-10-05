import { useState } from 'react';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Static articles with Google Drive links
  const articles = [
    {
      id: 1,
      title: "AQMM DCMM",
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
    },
    // Add more articles here
  ];

  // Filter articles based on search
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
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
        <div className="mb-12 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <a
                key={article.id}
                href={article.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover:border-primary"
              >
                <h3 className="font-montserrat font-semibold text-lg text-foreground hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ArticlesPage;