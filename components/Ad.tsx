'use client'

import siteMetadata from '@/data/siteMetadata'
import { useEffect } from 'react'

interface Props {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
}

export default function Ad({ adClient = (siteMetadata.ads?.googleAdsense?.googleAdsenseId ? siteMetadata.ads.googleAdsense : ''), adSlot, adFormat = 'auto', adLayout = '' }: Props) {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  if (adClient && adSlot) {
    return (
        <ins className="component-block component-ad"
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-ad-layout={adLayout}>TEST</ins>
    );
  }
   
}
