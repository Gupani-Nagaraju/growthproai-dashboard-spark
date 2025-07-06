
import React from 'react';
import { BusinessProvider } from '@/contexts/BusinessContext';
import BusinessForm from '@/components/BusinessForm';
import BusinessCard from '@/components/BusinessCard';
import { useBusinessContext } from '@/contexts/BusinessContext';
import { Star, Sparkles, RefreshCw } from 'lucide-react';

const DashboardContent: React.FC = () => {
  const { businessData } = useBusinessContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">GrowthProAI</h1>
            </div>
            <div className="text-sm text-gray-600 hidden sm:block">
              Local Business Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Local Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get AI-powered SEO content and Google Business insights for your local business. 
              Discover how your business appears online and generate compelling headlines.
            </p>
          </div>

          {/* Form and Results */}
          <div className="space-y-8">
            {!businessData ? (
              <div className="flex justify-center">
                <BusinessForm />
              </div>
            ) : (
              <>
                <BusinessCard />
                <div className="flex justify-center">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-600 text-center mb-4">
                      Want to analyze a different business?
                    </p>
                    <BusinessForm />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Analytics</h3>
              <p className="text-sm text-gray-600">Track ratings, reviews, and online presence</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered SEO</h3>
              <p className="text-sm text-gray-600">Generate compelling headlines and content</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-sm text-gray-600">Refresh data and generate new content instantly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>© 2025 GrowthProAI. Built for local business success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <BusinessProvider>
      <DashboardContent />
    </BusinessProvider>
  );
};

export default Index;
