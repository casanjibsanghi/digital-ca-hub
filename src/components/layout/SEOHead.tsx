import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "",
  ogImage = "/hero-professional.jpg",
  ogType = "website",
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : ""
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "CA Sanjib Sanghi",
    "jobTitle": "Council Member, ICAI",
    "description": "Chartered Accountant and Digital Transformation Leader",
    "url": "https://casanjibsanghi.com",
    "sameAs": [
      "https://www.linkedin.com/in/sanjibsanghi/",
      "https://twitter.com/sanjibsanghi",
      "https://youtube.com/@sanjibsanghi"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Institute of Chartered Accountants of India",
      "url": "https://icai.org"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Institute of Chartered Accountants of India"
    },
    "expertise": [
      "Digital Transformation",
      "Artificial Intelligence in Accounting",
      "Global Capability Centers",
      "Professional Mentorship",
      "MSME Support"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="CA Sanjib Sanghi" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="CA Sanjib Sanghi" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@sanjibsanghi" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0B3D91" />
      <meta name="msapplication-TileColor" content="#0B3D91" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Analytics Placeholder */}
      <script>
        {`
          window.ANALYTICS_ID = 'UA-XXXXXXXXX-X';
          // Analytics implementation can be added here
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;