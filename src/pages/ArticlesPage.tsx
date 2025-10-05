import { useState } from 'react';

// Import hero image
import heroSanjib from '@/assets/Hero_Sanjib.png';
const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Static articles with Google Drive links
  const articles = [{
    id: 1,
    title: "AQMM DCMM",
    driveLink: "https://drive.google.com/file/d/1i2W_LdigO4pxF8DDBzsQnpJht304ovuD/view?usp=sharing"
  }, {
    id: 2,
    title: "Audit Quality Maturity Model: Enhancing Audit Standards",
    driveLink: "https://drive.google.com/file/d/1jAk9_6-zO6cU2Io2z_kfU6_Aa0hAKVOj/view?usp=sharing"
  }, {
    id: 3,
    title: "Blockchain Technology: Revolutionizing the Accounting Landscape",
    driveLink: "https://drive.google.com/file/d/1nB0JNYVcue9Y6v1zHAEf9sVIJ6HEmh32/view?usp=sharing"
  }, {
    id: 4,
    title: "ChatGPT at the helm – Empowering Businesses – Empowering the World",
    driveLink: "https://drive.google.com/file/d/1xbxOtIGzYQoeZkKdpvDd8nvb0Az-Gz2J/view?usp=sharing"
  }, {
    id: 5,
    title: "Building your Custom GPT",
    driveLink: "https://drive.google.com/file/d/1sbG5ubu1bJdQEVsDeqXUUDyV-VdW-aAo/view?usp=sharing"
  }, {
    id: 6,
    title: "Elevating Excellence: Navigating Digital Competency Maturity Model",
    driveLink: "https://drive.google.com/file/d/1aaO2Tg9cA7nniMUfMcJEE7d64MYBCGhN/view?usp=sharing"
  }, {
    id: 7,
    title: "Python in Excel: Harnessing the Power of Two Titans - The Best of Both Worlds for Data Analysis and Visualization",
    driveLink: "https://drive.google.com/file/d/1k91S0g-tkxDCxpTYZHRKsyxUqmlINcDd/view?usp=sharing"
  }, {
    id: 8,
    title: "Harnessing Google My Business: A Game-Changer for Local Enterprises",
    driveLink: "https://drive.google.com/file/d/1I6I-5Nn47ApblYnA7Gop1KPn-Shw_ofo/view?usp=sharing"
  }, {
    id: 9,
    title: "ICAI CA GPT: Transforming Chartered Accountancy with AI",
    driveLink: "https://drive.google.com/file/d/15k_p9DDrVc9oWuPia0EnB70Ys1Dsi22a/view?usp=sharing"
  }, {
    id: 10,
    title: "Embracing Technology for Financial Forecasting: Tech tells your Future",
    driveLink: "https://drive.google.com/file/d/1wbUOPriqPfRzwmqGEX7efeHnCXViPD71/view?usp=sharing"
  }, {
    id: 11,
    title: "Chartered Accountants as Professionals – In the World of MSMEs",
    driveLink: "https://drive.google.com/file/d/1EdDAA60J6q5G3VCUVYpeVNnSB77gAx0m/view?usp=sharing"
  }, {
    id: 12,
    title: "Sustainable Finance: Investing in Our Collective Future",
    driveLink: "https://drive.google.com/file/d/1qoTtUmQQtU-0XW6Ct6V6br_HqvKWa1EP/view?usp=sharing"
  }, {
    id: 13,
    title: "The AI-Ready Chartered Accountant and a GCC Leader: Skills Every Professionals Must Learn in the Next 2 Years",
    driveLink: "https://drive.google.com/file/d/1E4xey2ycNU_PvZERRO_CnfGt2lVAdZ9-/view?usp=sharing"
  }, {
    id: 14,
    title: "The Triple “A” Advantage – Artificial Intelligence, Accounting and Advisory",
    driveLink: "https://drive.google.com/file/d/1TNpUUqll7vRy2U5-prXbAkqBPSksrKM2/view?usp=sharing"
  }, {
    id: 15,
    title: "Startup India, led by Chartered Accountants: Our Role in the growth of Entrepreneurial Ecosystem",
    driveLink: "https://drive.google.com/file/d/1Tqa3Q3whNtvL6b6QexrysdR273hVfKJj/view?usp=sharing"
  }, {
    id: 16,
    title: "Antardrishti to Antarashtriya: From Inner Clarity to Global Leadership",
    driveLink: "https://drive.google.com/file/d/18_4ehECyi1hy3PqoWAazvXcl-m5bPFJV/view?usp=sharing"
  }, {
    id: 17,
    title: "From Ledgers to Global Leadership: Why we as Chartered Accountants Must Ditch the ‘Number Cruncher’ Tag",
    driveLink: "https://drive.google.com/file/d/1qnkNNXT_JxdpyX5vtZ2ZhTqiS-xL3vsO/view?usp=sharing"
  }, {
    id: 18,
    title: "ICAI CA GPT: Transforming Chartered Accountancy with AI",
    driveLink: "https://drive.google.com/file/d/15k_p9DDrVc9oWuPia0EnB70Ys1Dsi22a/view?usp=sharing"
  }
  // Add more articles here
  ];

  // Filter articles based on search
  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
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
        

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found.</p>
          </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => <a key={article.id} href={article.driveLink} target="_blank" rel="noopener noreferrer" className="block p-6 border rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover:border-primary">
                <h3 className="font-montserrat font-semibold text-lg text-foreground hover:text-primary transition-colors text-center">
                  {article.title}
                </h3>
              </a>)}
          </div>}
      </div>
    </div>;
};
export default ArticlesPage;
