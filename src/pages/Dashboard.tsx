
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const { toast } = useToast();

  const notImplemented = () => {
    toast({
      title: "Not Implemented",
      description: "This feature will be implemented in a future update.",
      variant: "destructive",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-wow text-3xl mb-6 text-wow-gold">Guild Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="wow-border">
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>Recent guild applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-muted-foreground">No new applications</p>
            <Button className="mt-4" onClick={notImplemented}>View All</Button>
          </CardContent>
        </Card>
        
        <Card className="wow-border">
          <CardHeader>
            <CardTitle>Discord Bot</CardTitle>
            <CardDescription>Bot status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <span>Offline</span>
            </div>
            <Button className="w-full" onClick={notImplemented}>Configure Bot</Button>
          </CardContent>
        </Card>
        
        <Card className="wow-border">
          <CardHeader>
            <CardTitle>Recruitment Needs</CardTitle>
            <CardDescription>Classes you're looking for</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">No recruitment needs configured</p>
            <Button className="w-full" onClick={notImplemented}>Set Recruitment Needs</Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-8">
        <Card className="wow-border">
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
            <CardDescription>Setup your recruitment process</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={notImplemented}>Discord Server Settings</Button>
            <Button onClick={notImplemented}>Application Form Builder</Button>
            <Button onClick={notImplemented}>Notification Settings</Button>
            <Button onClick={notImplemented}>Automated Responses</Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-card wow-border p-6">
        <h2 className="font-wow text-xl mb-4">Getting Started</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Connect your Discord server</li>
          <li>Configure your application form</li>
          <li>Set up your recruitment needs</li>
          <li>Invite the GuildNexus bot to your server</li>
        </ol>
        <Button className="mt-6" onClick={notImplemented}>View Setup Guide</Button>
      </div>
    </div>
  );
};

export default Dashboard;
