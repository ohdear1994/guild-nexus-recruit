
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-texture">
        <div className="text-center wow-border p-12 bg-card/80 backdrop-blur-sm max-w-md mx-4">
          <h1 className="font-wow text-4xl mb-4 text-wow-gold">404</h1>
          <p className="text-xl text-foreground mb-6">This page has been lost in the Twisting Nether</p>
          <Link to="/">
            <Button className="wow-button">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
