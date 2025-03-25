'use client'

import { useEffect } from 'react'

interface Props {
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
}

export default function Ad({ adSlot, adFormat = 'auto', adLayout = '' }: Props) {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-3978227379460513"
         data-ad-slot={adSlot}
         data-ad-format={adFormat}
         data-ad-layout={adLayout}>TEST</ins>
  );
}
