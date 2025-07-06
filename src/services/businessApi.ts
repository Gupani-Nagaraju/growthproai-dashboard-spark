
interface BusinessRequest {
  name: string;
  location: string;
}

interface BusinessResponse {
  rating: number;
  reviews: number;
  headline: string;
}

// Simulate POST /business-data endpoint
export const fetchBusinessData = async (request: BusinessRequest): Promise<BusinessResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate realistic simulated data
  const ratings = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8];
  const rating = ratings[Math.floor(Math.random() * ratings.length)];
  
  const baseReviews = Math.floor(Math.random() * 500) + 50;
  const reviews = baseReviews;
  
  const headlines = [
    `Why ${request.name} is ${request.location}'s Sweetest Spot in 2025`,
    `${request.name}: The ${request.location} Experience You Can't Miss`,
    `How ${request.name} Became ${request.location}'s Local Favorite`,
    `${request.name} - Where ${request.location} Meets Excellence`,
    `Discover ${request.location}'s Best Kept Secret: ${request.name}`,
    `${request.name}: Redefining Quality in ${request.location}`,
    `The Ultimate ${request.location} Guide to ${request.name}`,
    `${request.name} - ${request.location}'s Premier Destination`
  ];
  
  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  
  return {
    rating,
    reviews,
    headline
  };
};

// Simulate GET /regenerate-headline endpoint
export const regenerateHeadline = async (name: string, location: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const headlines = [
    `${name}: The ${location} Success Story of 2025`,
    `Why Everyone in ${location} is Talking About ${name}`,
    `${name} - Setting New Standards in ${location}`,
    `How ${name} Conquered ${location}'s Hearts`,
    `${name}: Your Next ${location} Obsession`,
    `The ${name} Revolution Taking Over ${location}`,
    `${location}'s Rising Star: The ${name} Story`,
    `${name} - Where ${location} Dreams Come True`
  ];
  
  return headlines[Math.floor(Math.random() * headlines.length)];
};
