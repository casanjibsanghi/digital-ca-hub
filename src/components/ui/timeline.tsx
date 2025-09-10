import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  outcomes: string[];
  link?: string;
  icon?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className = "" }: TimelineProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (year: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-primary to-gold transform md:-translate-x-1/2" />

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => {
          const isExpanded = expandedItems.has(item.year);
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.year}
              className={`relative flex items-start ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Year Badge */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-gold-glow">
                  <span className="text-slate font-bold text-sm">{item.year.slice(-2)}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                <Card className="shadow-professional hover-lift animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-montserrat font-bold text-lg text-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-gold font-bold text-lg">
                        {item.year}
                      </span>
                    </div>

                    {/* Outcomes Preview */}
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">
                        {item.outcomes[0]}
                        {item.outcomes.length > 1 && !isExpanded && '...'}
                      </p>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && item.outcomes.length > 1 && (
                      <div className="mb-4 space-y-2 animate-fade-in">
                        {item.outcomes.slice(1).map((outcome, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-gold mr-2">•</span>
                            {outcome}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      {item.outcomes.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(item.year)}
                          className="text-primary hover:text-gold p-0 h-auto font-medium"
                        >
                          {isExpanded ? 'Show Less' : 'Show More'}
                          <ChevronDown
                            className={`ml-1 h-4 w-4 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </Button>
                      )}

                      {item.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-primary hover:text-gold p-0 h-auto"
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            Learn More
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;