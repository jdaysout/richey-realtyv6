import { useState, useEffect } from 'react';

interface MarketDataPoint {
  date: Date;
  value: number;
}

export function useMarketData() {
  const [data, setData] = useState<MarketDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    const generateData = () => {
      const today = new Date();
      const data: MarketDataPoint[] = [];
      
      for (let i = 11; i >= 0; i--) {
        const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const value = 1000000 + Math.random() * 500000;
        data.push({ date, value });
      }
      
      return data;
    };

    // Simulate network delay
    const timer = setTimeout(() => {
      setData(generateData());
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}