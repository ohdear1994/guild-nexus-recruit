
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your bot configuration has been updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="font-wow text-3xl mb-6 text-wow-gold">Bot Configuration</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Discord Bot Settings</CardTitle>
            <CardDescription>Configure how your recruitment bot works</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="server-id">Discord Server ID</Label>
              <Input id="server-id" placeholder="Enter your Discord server ID" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="channel-id">Recruitment Channel ID</Label>
              <Input id="channel-id" placeholder="Enter channel ID for recruitment messages" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="welcome-message">Welcome Message</Label>
              <Input id="welcome-message" placeholder="Message to send when someone applies" />
            </div>
            
            <Button onClick={handleSave}>Save Configuration</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Bot Status</CardTitle>
            <CardDescription>Current status of your Discord bot</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <span>Offline</span>
            </div>
            <Button>Connect Bot</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
