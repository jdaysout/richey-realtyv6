import { useEffect, useState } from 'react';

export function useFontLoader(fontFamily: string) {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        setIsFontLoaded(true);
      });
    } else {
      // Fallback for browsers that don't support Font Loading API
      setIsFontLoaded(true);
    }
  }, []);

  return isFontLoaded;
}