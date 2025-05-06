
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto-redirect to login after a short delay
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="wow-border bg-card/90 backdrop-blur-sm w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <h1 className="font-wow text-3xl mb-6 text-wow-gold">GuildNexus</h1>
          <p className="mb-6">Redirecting to login...</p>
          <Link to="/login">
            <Button className="wow-button">
              Login Now
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
