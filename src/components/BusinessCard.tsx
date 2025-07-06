
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MessageCircle, Sparkles, RefreshCw, MapPin, Building2 } from 'lucide-react';
import { useBusinessContext } from '@/contexts/BusinessContext';

const BusinessCard: React.FC = () => {
  const { businessData, isLoading, regenerateHeadline } = useBusinessContext();

  if (!businessData) return null;

  const handleRegenerateHeadline = () => {
    regenerateHeadline(businessData.name, businessData.location);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Business Header Card */}
      <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">{businessData.name}</CardTitle>
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <MapPin className="h-3 w-3" />
                {businessData.location}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Google Business Data Card */}
      <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rating Section */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-100">
              <div className="h-12 w-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-gray-900">{businessData.rating}</span>
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                </div>
                <p className="text-sm text-gray-600">Google Rating</p>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{businessData.reviews.toLocaleString()}</div>
                <p className="text-sm text-gray-600">Customer Reviews</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Headline Card */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Sparkles className="h-5 w-5 text-purple-600" />
            AI-Generated SEO Headline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white/70 rounded-xl border border-purple-100">
            <p className="text-lg font-medium text-gray-800 leading-relaxed">
              "{businessData.headline}"
            </p>
          </div>
          
          <Button
            onClick={handleRegenerateHeadline}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg h-11"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Generating New Headline...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Regenerate SEO Headline
              </div>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessCard;
