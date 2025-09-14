-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  document_url TEXT,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  read_time TEXT,
  tags TEXT[] DEFAULT '{}',
  image_url TEXT,
  author_id UUID,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Articles are viewable by everyone" 
ON public.articles 
FOR SELECT 
USING (is_published = true);

-- Create policy for authenticated users to manage articles (if needed for admin)
CREATE POLICY "Authenticated users can manage articles" 
ON public.articles 
FOR ALL
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the AQMM DCMM article
INSERT INTO public.articles (
  title,
  excerpt,
  content,
  document_url,
  published_date,
  read_time,
  tags,
  image_url
) VALUES (
  'AQMM & DCMM: 30-Day Comprehensive Guide for Chartered Accountants',
  'A comprehensive 30-day educational series covering Audit Quality Maturity Model (AQMM) and Digital Competency Maturity Model (DCMM) designed to enhance audit quality and digital skills for CAs.',
  'The Audit Quality Maturity Model (AQMM) is an amalgamation of well-researched Audit Quality Indicators (AQIs) designed to enhance audit quality across varying levels of complexity within audit practices. The Digital Competency Maturity Model (DCMM) is designed to guide Chartered Accountants in enhancing their digital skills across various levels of proficiency.',
  '/documents/AQMM_DCMM.docx',
  '2024-12-20',
  '30-day series',
  ARRAY['AQMM', 'DCMM', 'Audit Quality', 'Digital Transformation', 'Professional Development'],
  '/api/placeholder/400/200'
);