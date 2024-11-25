'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'

export default function Comments({ slug }: { slug: string }) {
  return (
    <>
      {siteMetadata.comments && (
        <>
          <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />

          <Script
            id="diqusColourScheme"
            strategy='afterInteractive'
            //Fix a big where Diqus is not loading with the correct colour scheme
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window !== 'undefined' && window.matchMedia) {
                  const iframe = document.getElementById('disqus_thread').querySelector('iframe');

                  console.log(iframe)

                  if (iframe && iframe.length() > 0) {
                    const media = window.matchMedia('(prefers-color-scheme: dark)');
                    media.addEventListener('change', event => {
                      colorScheme = event.matches ? "dark" : "light";
                      console.log(colorScheme)
                      iframe.contentDocument.getElementByTagName('html').style["color-scheme"] = colorScheme
                    });
                  }
                }
              `,
            }}
          />
        </>
      )}
    </>
  )
}
