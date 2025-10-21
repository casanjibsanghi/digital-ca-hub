import { useState } from 'react';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';

const PresentationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Static presentations with Google Drive links
  const presentations = [
    {
      id: 1,
      title: "AI in BPO and KPO",
      driveLink: "https://docs.google.com/presentation/d/1kio6KLbeyWYG03YSkBv-JCOvF3t7n8eo/edit?usp=drive_link&ouid=111982360594636997129&rtpof=true&sd=true"
    },
    {
      id: 2,
      title: "The Peer Review Mastery",
      driveLink: "https://docs.google.com/presentation/d/1V27B9p7QtPpvkLDSRA_MYSGDODhdLf_H/edit?usp=drive_link&ouid=111982360594636997129&rtpof=true&sd=true"
    },
    {
      id: 3,
      title: "Audit Trail in 10 Minutes",
      driveLink: "https://docs.google.com/presentation/d/18OhAUvgPrrtHNLnzY0ntWGEmrUDSHtgj/edit?usp=drive_link&ouid=111982360594636997129&rtpof=true&sd=true"
    },
    {
      id: 4,
      title: "Technology - Present and Future",
      driveLink: "https://docs.google.com/presentation/d/1R2hiyfdPe89IINMMewOPc3asnUodqIX3/edit?usp=sharing&ouid=111982360594636997129&rtpof=true&sd=true"
    },
    {
      id: 5,
      title: "Digital Empowerment for Chartered Accountants",
      driveLink: "https://docs.google.com/presentation/d/1CWWqfyRkb42orrSTxHqC_Eyzibcg1dcO/edit?slide=id.p1#slide=id.p1"
    },
  ];

  // Filter presentations based on search
  const filteredPresentations = presentations.filter(presentation =>
    presentation.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        

        {/* Presentations Grid */}
        {filteredPresentations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No presentations found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPresentations.map(presentation => (
              <a
                key={presentation.id}
                href={presentation.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-h-[120px] p-6 border rounded-lg bg-card hover:bg-gold/10 hover:shadow-lg transition-all duration-300 hover:border-gold"
              >
                <h3 className="font-montserrat font-semibold text-lg text-foreground hover:text-gold transition-colors text-center">
                  {presentation.title}
                </h3>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PresentationsPage;
