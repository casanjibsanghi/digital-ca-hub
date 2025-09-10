import { BookOpen, Upload, Plus, Edit, Download, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdminGuidePage = () => {
  const guideItems = [
    {
      icon: Plus,
      title: 'Adding New Articles',
      description: 'How to create and publish new articles',
      steps: [
        'Navigate to the Articles management section',
        'Click "New Article" button',
        'Fill in title, excerpt, content, and tags',
        'Upload cover image (optional)',
        'Set publication date and status',
        'Click "Publish" to make live',
      ],
    },
    {
      icon: Upload,
      title: 'Uploading Presentations',
      description: 'Managing presentation files and metadata',
      steps: [
        'Go to Presentations management',
        'Click "Add Presentation"',
        'Enter presentation details (title, event, date)',
        'Upload PPT/PDF file (max 20MB)',
        'Add presentation topics/tags',
        'Upload thumbnail image if available',
        'Save and publish',
      ],
    },
    {
      icon: Edit,
      title: 'Managing Contributions',
      description: 'Updating professional contributions and achievements',
      steps: [
        'Access Contributions management',
        'Select contribution area from dropdown',
        'Click "Add New Contribution"',
        'Fill in contribution details and outcomes',
        'Add supporting documents/links',
        'Set date/period information',
        'Save changes',
      ],
    },
    {
      icon: Users,
      title: 'Timeline Updates',
      description: 'Adding new timeline entries for ICAI journey',
      steps: [
        'Navigate to Timeline management',
        'Click "Add Timeline Entry"',
        'Enter year, title, and organization',
        'Add key outcomes as bullet points',
        'Include external links if applicable',
        'Upload supporting icon/image',
        'Publish new entry',
      ],
    },
    {
      icon: Download,
      title: 'Exporting Inquiries',
      description: 'Downloading contact form submissions as CSV',
      steps: [
        'Go to Inquiries dashboard',
        'Apply date range filters if needed',
        'Select inquiry types to include',
        'Click "Export as CSV" button',
        'Download will start automatically',
        'File includes all inquiry details',
      ],
    },
    {
      icon: BookOpen,
      title: 'Content Best Practices',
      description: 'Guidelines for maintaining quality content',
      steps: [
        'Use clear, professional language',
        'Include relevant keywords for SEO',
        'Optimize images (WebP format preferred)',
        'Add alt text for all images',
        'Keep articles between 800-2000 words',
        'Regular content updates improve engagement',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
              Admin Guide
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Complete guide for managing your professional portfolio website content
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Overview */}
        <div className="mb-12">
          <Card className="shadow-professional">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl text-primary">
                Content Management Overview
              </CardTitle>
              <CardDescription>
                This guide covers all essential tasks for maintaining and updating your professional portfolio website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">6</div>
                  <div className="text-muted-foreground text-sm">Content Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">5</div>
                  <div className="text-muted-foreground text-sm">Main Sections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">20MB</div>
                  <div className="text-muted-foreground text-sm">Max File Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">SEO</div>
                  <div className="text-muted-foreground text-sm">Optimized</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guide Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guideItems.map((item, index) => (
            <Card key={index} className="shadow-professional hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="font-montserrat text-xl text-primary">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {item.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <Badge variant="outline" className="mt-0.5 min-w-fit">
                        {stepIndex + 1}
                      </Badge>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Notes */}
        <div className="mt-16">
          <Card className="shadow-professional">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl text-primary">
                Technical Notes & Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-primary mb-3">File Upload Guidelines</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Maximum file size: 20MB per upload</li>
                    <li>• Supported formats: JPG, PNG, WebP, PDF, PPT, PPTX</li>
                    <li>• Images automatically optimized for web</li>
                    <li>• EXIF data stripped for privacy</li>
                    <li>• Backup files stored for 30 days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">SEO Optimization</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Add descriptive titles (50-60 characters)</li>
                    <li>• Write compelling meta descriptions (150-160 chars)</li>
                    <li>• Use relevant keywords naturally</li>
                    <li>• Include alt text for all images</li>
                    <li>• Update content regularly for better rankings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Information */}
        <div className="mt-12">
          <Card className="shadow-professional bg-muted">
            <CardContent className="p-8 text-center">
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Need Help?
              </h3>
              <p className="text-muted-foreground mb-6">
                If you encounter any issues or need assistance with content management, 
                please don't hesitate to reach out for support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="p-3">
                  Email: support@example.com
                </Badge>
                <Badge variant="outline" className="p-3">
                  Response time: 24-48 hours
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminGuidePage;