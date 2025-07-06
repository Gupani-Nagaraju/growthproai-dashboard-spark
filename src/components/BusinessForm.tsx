
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Building2 } from 'lucide-react';
import { useBusinessContext } from '@/contexts/BusinessContext';
import { fetchBusinessData } from '@/services/businessApi';
import { toast } from '@/hooks/use-toast';

const BusinessForm: React.FC = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState<{name?: string; location?: string}>({});
  
  const { setBusinessData, setIsLoading, isLoading } = useBusinessContext();

  const validateForm = () => {
    const newErrors: {name?: string; location?: string} = {};
    
    if (!name.trim()) {
      newErrors.name = 'Business name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Business name must be at least 2 characters';
    }
    
    if (!location.trim()) {
      newErrors.location = 'Location is required';
    } else if (location.trim().length < 2) {
      newErrors.location = 'Location must be at least 2 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      const data = await fetchBusinessData({ name: name.trim(), location: location.trim() });
      
      setBusinessData({
        name: name.trim(),
        location: location.trim(),
        ...data
      });
      
      toast({
        title: "Success!",
        description: "Business data loaded successfully.",
      });
    } catch (error) {
      console.error('Error fetching business data:', error);
      toast({
        title: "Error",
        description: "Failed to load business data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          Business Dashboard
        </CardTitle>
        <CardDescription className="text-gray-600">
          Enter your business details to view insights and SEO content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
              Business Name
            </Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="businessName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="e.g., Cake & Co"
                disabled={isLoading}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Location
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                  errors.location ? 'border-red-500' : ''
                }`}
                placeholder="e.g., Mumbai"
                disabled={isLoading}
              />
            </div>
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
          </div>

          <Button 
            type="submit" 
            className="w-full h-11 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Loading Insights...
              </div>
            ) : (
              'Get Business Insights'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BusinessForm;
