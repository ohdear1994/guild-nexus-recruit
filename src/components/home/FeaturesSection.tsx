
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Discord Bot Integration",
    description: "Powerful Discord bot to handle recruitment applications, interviews, and notifications directly in your server.",
    icon: "🤖"
  },
  {
    title: "Customizable Forms",
    description: "Create custom recruitment forms with questions specific to your guild's needs and requirements.",
    icon: "📝"
  },
  {
    title: "Application Tracking",
    description: "Track applicant status, schedule interviews, and maintain a history of all recruitment activities.",
    icon: "📊"
  },
  {
    title: "Role Management",
    description: "Easily manage your guild's roster needs by class, spec, and role. Know exactly what you're looking for.",
    icon: "👥"
  },
  {
    title: "Automated Workflows",
    description: "Set up automatic responses, notifications, and role assignments based on application status.",
    icon: "⚙️"
  },
  {
    title: "Analytics Dashboard",
    description: "Get insights into your recruitment process with detailed analytics and statistics.",
    icon: "📈"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-wow text-3xl md:text-4xl mb-4 text-wow-gold">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline your guild's recruitment process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="wow-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="font-wow text-wow-gold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
