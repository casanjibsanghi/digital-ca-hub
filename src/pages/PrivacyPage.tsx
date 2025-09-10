import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-professional">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Information Collection</h2>
                <p className="text-muted-foreground mb-6">
                  We collect information you provide directly to us, such as when you fill out our contact form, 
                  subscribe to our newsletter, or interact with our services. This may include your name, email address, 
                  phone number, and any messages you send us.
                </p>

                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Use of Information</h2>
                <p className="text-muted-foreground mb-6">
                  We use the information we collect to respond to your inquiries, send you newsletters and updates, 
                  improve our services, and comply with legal obligations. We do not sell, trade, or rent your 
                  personal information to third parties.
                </p>

                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized 
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                  or electronic storage is 100% secure.
                </p>

                <h2 className="font-montserrat font-bold text-2xl text-primary mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this Privacy Policy, please contact us at privacy@example.com 
                  or through our contact form.
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

export default PrivacyPage;