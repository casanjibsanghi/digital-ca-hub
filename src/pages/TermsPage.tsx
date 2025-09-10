import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-professional">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision 
                  of this agreement. These terms apply to the entire website and any email or other type of 
                  communication between you and CA Sanjib Sanghi.
                </p>

                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Use License</h2>
                <p className="text-muted-foreground mb-6">
                  Permission is granted to temporarily download one copy of the materials on this website for 
                  personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                  of title, and under this license you may not modify or copy the materials.
                </p>

                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  The materials on this website are provided on an 'as is' basis. CA Sanjib Sanghi makes no 
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including 
                  without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                  purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Limitations</h2>
                <p className="text-muted-foreground mb-6">
                  In no event shall CA Sanjib Sanghi or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                  the use or inability to use the materials on this website.
                </p>

                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms of Service, please contact us through our contact form 
                  or at legal@example.com.
                </p>

                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;