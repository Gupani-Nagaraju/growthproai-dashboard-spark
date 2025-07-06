
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BusinessData {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  headline: string;
}

interface BusinessContextType {
  businessData: BusinessData | null;
  isLoading: boolean;
  setBusinessData: (data: BusinessData) => void;
  setIsLoading: (loading: boolean) => void;
  regenerateHeadline: (name: string, location: string) => Promise<void>;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusinessContext must be used within a BusinessProvider');
  }
  return context;
};

interface BusinessProviderProps {
  children: ReactNode;
}

export const BusinessProvider: React.FC<BusinessProviderProps> = ({ children }) => {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const regenerateHeadline = async (name: string, location: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const headlines = [
        `Why ${name} is ${location}'s Best Kept Secret in 2025`,
        `${name}: ${location}'s Rising Star You Need to Know`,
        `How ${name} is Transforming ${location}'s Local Scene`,
        `${name} - The ${location} Favorite Everyone's Talking About`,
        `Discover Why ${name} is ${location}'s Hidden Gem`,
        `${name}: Setting New Standards in ${location}`,
        `The Story Behind ${location}'s Most Loved ${name}`,
        `${name} - Where ${location} Locals Go for Excellence`
      ];
      
      const newHeadline = headlines[Math.floor(Math.random() * headlines.length)];
      
      if (businessData) {
        setBusinessData({
          ...businessData,
          headline: newHeadline
        });
      }
    } catch (error) {
      console.error('Error regenerating headline:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BusinessContext.Provider 
      value={{ 
        businessData, 
        isLoading, 
        setBusinessData, 
        setIsLoading, 
        regenerateHeadline 
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
