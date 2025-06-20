'use client'

import siteMetadata from '@/data/siteMetadata'
import { useEffect } from 'react'

interface Props {
  adClient?: string
  adSlot: string
  adFormat?: string
  adLayout?: string
}

export default function Ad({
  adClient = siteMetadata.ads?.googleAdsense?.googleAdsenseId
    ? siteMetadata.ads.googleAdsense.googleAdsenseId
    : '',
  adSlot,
  adFormat = 'auto',
  adLayout = '',
}: Props) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const w = window as unknown as { adsbygoogle?: unknown[] }
        w.adsbygoogle = w.adsbygoogle || []
        w.adsbygoogle.push({})
      }
    } catch (e) {
      console.error('Error loading ads:', e)
    }
  }, [])

  if (adClient && adSlot) {
    return (
      <div
        className="component-block component-block--outline-secondary component-block--rounded component-ad"
        role="complementary"
        aria-label="Advertisement Section"
      >
        <ins
          className="adsbygoogle"
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-ad-layout={adLayout}
        ></ins>
      </div>
    )
  }
}
