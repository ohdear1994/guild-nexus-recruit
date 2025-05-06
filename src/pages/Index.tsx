
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
      <Card className="border border-meta-primary/50 bg-card/90 backdrop-blur-sm w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <h1 className="font-meta text-3xl mb-6 text-meta-primary font-bold">Metacruit</h1>
          <p className="mb-6 font-meta">Redirecting to login...</p>
          <Link to="/login">
            <Button className="bg-meta-primary hover:bg-meta-secondary text-white font-medium">
              Login Now
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
