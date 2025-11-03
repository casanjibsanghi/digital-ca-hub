import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';

const PresentationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Categorized presentations
  const categories = {
    "AI & Digital Transformation": [
      { id: 1, title: "AI in BPO and KPO", driveLink: "https://docs.google.com/presentation/d/1kio6KLbeyWYG03YSkBv-JCOvF3t7n8eo/edit?usp=drive_link&ouid=111982360594636997129&rtpof=true&sd=true" },
      { id: 4, title: "Technology - Present and Future", driveLink: "https://docs.google.com/presentation/d/1R2hiyfdPe89IINMMewOPc3asnUodqIX3/edit?usp=sharing&ouid=111982360594636997129&rtpof=true&sd=true" },
      { id: 8, title: "ChatGPT & AI", driveLink: "https://docs.google.com/presentation/d/1WhVMTEsC-co6otLEXQfPoV_jb4SR9rjK/edit?slide=id.p1#slide=id.p1" },
      { id: 11, title: "MSME-Automation-Guwahati", driveLink: "https://docs.google.com/presentation/d/1U_hM2eukUAml2F49yI5MoOFCCOBp72vj/edit?slide=id.p1#slide=id.p1" },
      { id: 12, title: "Becoming AI Ready", driveLink: "https://docs.google.com/presentation/d/1RmYQmCw8KSauZrCOjfdje46sk17edDrh/edit?slide=id.p1#slide=id.p1" },
      { id: 15, title: "Transformative Technologies Risks & Opportunities", driveLink: "https://docs.google.com/presentation/d/1mC0xHwG9C6JDjlTqrgzvD1ZgvQDnVVoe/edit?slide=id.p1#slide=id.p1" },
      { id: 17, title: "GATE", driveLink: "https://docs.google.com/presentation/d/1q6vz4KrrF1VAN88bATNXeDpzjkOQ7Hy0/edit?slide=id.p1#slide=id.p1" }
    ],
    "Professional Capability & Skill Building": [
      { id: 5, title: "Digital Empowerment for Chartered Accountants", driveLink: "https://docs.google.com/presentation/d/1CWWqfyRkb42orrSTxHqC_Eyzibcg1dcO/edit?slide=id.p1#slide=id.p1" },
      { id: 6, title: "Capacity Building", driveLink: "https://docs.google.com/presentation/d/1Jm5NOUnqECqLzK1c1YhWG6KZOiaKJpP1/edit?slide=id.p1#slide=id.p1" },
      { id: 7, title: "Profession@75", driveLink: "http://docs.google.com/presentation/d/1tClezwuSiezFPN71a9ssIqwKsIhH_TtF/edit?slide=id.p1#slide=id.p1" },
      { id: 9, title: "Data Visualisation Presentation", driveLink: "https://docs.google.com/presentation/d/1IB_F1uFalUxkiPWy1STgBdRi4TZ510G2/edit?slide=id.p1#slide=id.p1" },
      { id: 13.2, title: "Future Fit Chartered Accountants", driveLink: "https://docs.google.com/presentation/d/1GMZn-hctLc-xD38o2pEn9k9r-CsR1L5h/edit?slide=id.p1#slide=id.p1" }
    ],
    "Audit, Assurance & Compliance Modernization": [
      { id: 2, title: "The Peer Review Mastery", driveLink: "https://docs.google.com/presentation/d/1V27B9p7QtPpvkLDSRA_MYSGDODhdLf_H/edit?usp=drive_link&ouid=111982360594636997129&rtpof=true&sd=true" },
      { id: 3, title: "Audit Trail in 10 Minutes", driveLink: "https://docs.google.com/presentation/d/18OhAUvgPrrtHNLnzY0ntWGEmrUDSHtgj/edit?usp=drive_link&ouid=111982360594636997129&rtpof=true&sd=true" },
      { id: 10, title: "Technology - Opportunities and Challenges for Practitioners", driveLink: "https://docs.google.com/presentation/d/1P8KhBrmfpgOfC0-CkWrS0bCQ-pKOXge-/edit?slide=id.p1#slide=id.p1" }
    ],
    "Global Finance & GCC Leadership": [
      { id: 13.1, title: "CAs leading GCCs_Sanjib Sanghi", driveLink: "https://docs.google.com/presentation/d/17fcXk7Lv-y6seVGaUcxgFaek2Hk7n8G6/edit?slide=id.p1#slide=id.p1" },
      { id: 16, title: "AI & Startup PPT", driveLink: "https://docs.google.com/presentation/d/1q72Mp1POV-7S0WSBgkRWP4rXUKvrOPQi/edit?slide=id.p1#slide=id.p1" },
      { id: 14, title: "India GCC Panorama", driveLink: "https://docs.google.com/presentation/d/1InVHIQe3mRb3Z_BpeF9EAwvmey26oSU1/edit?slide=id.p1#slide=id.p1" }
    ]
  };

  // Get all presentations for search
  const allPresentations = Object.entries(categories).flatMap(([category, presentations]) => 
    presentations.map(presentation => ({ ...presentation, category }))
  );

  // Filter presentations based on search
  const filteredPresentations = searchTerm 
    ? allPresentations.filter(presentation => 
        presentation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        presentation.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

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
                Presentations & Talks
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Expert talks on GCC opportunities, MSME growth, and professional development
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
            placeholder="Search presentations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg border bg-background"
          />
        </div>

        {/* Search Results or Categorized View */}
        {searchTerm ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            {filteredPresentations && filteredPresentations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No presentations found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPresentations?.map(presentation => (
                  <a 
                    key={presentation.id} 
                    href={presentation.driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col min-h-[120px] p-6 border rounded-lg bg-card hover:bg-gold/10 hover:shadow-lg transition-all duration-300 hover:border-gold"
                  >
                    <p className="text-sm text-muted-foreground mb-2">{presentation.category}</p>
                    <h3 className="font-montserrat font-semibold text-lg text-foreground hover:text-gold transition-colors">
                      {presentation.title}
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
            
            {Object.entries(categories).map(([categoryName, presentations], index) => (
              <TabsContent key={index} value={`category-${index}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{categoryName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {presentations.map(presentation => (
                        <a 
                          key={presentation.id} 
                          href={presentation.driveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center min-h-[100px] p-4 border rounded-lg bg-background hover:bg-gold/10 hover:shadow-lg transition-all duration-300 hover:border-gold"
                        >
                          <h3 className="font-montserrat font-semibold text-base text-foreground hover:text-gold transition-colors text-center">
                            {presentation.title}
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
    </div>
  );
};

export default PresentationsPage;
