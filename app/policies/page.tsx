import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Policies' })

export default function Policies() {
  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="prose dark:prose-invert col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
            <h2 className="component-title component-title--main">License</h2>

            <p>
              {`© ${new Date().getFullYear()}`} {siteMetadata.author}. All rights reserved.
            </p>
            
            <p>
              The content on this website (text, images, design, etc.) may not be copied, redistributed, or used without express permission.
            </p>
            
            <p>
              You are free to use the underlying code relating to this website freely and openly, as long as no content as mentioned above is copied, redistributed, or used without express permission.
            </p>
            
            <hr className="prose-hr component-posts-article__divider" />

            <h2 className="component-title component-title--main">Privacy</h2>

            <p>
              Whenever you view a web page on this website your IP address, time, page referrer and
              current page will be logged, this is for analytical purposes.
            </p>

            <p>
              When you send an email; either to a direct email address or through a contact form on
              this website, your email address is stored securely, although it may not always be
              stored on this website's server.
            </p>

            <p>
              If you have any questions regarding the security, privacy or cookie policy on this
              website please contact{' '}
              <strong>
                <span className="!text-typography-default !no-underline">ryan＠</span>
                <a
                  href="https://ryanfitton.co.uk"
                  className="!text-typography-default !no-underline"
                >
                  ryanfitton.co.uk
                </a>
              </strong>{' '}
            </p>

            <hr className="prose-hr component-posts-article__divider" />

            <h2 className="component-title component-title--main">Cookies</h2>

            <p>
              This websites uses cookies to give you a better browsing experience, and to assist in
              analytical and advertising purposes.
            </p>

            <table className="not-prose my-8 w-full table-auto border-collapse border border-slate-500 text-left">
              <thead>
                <tr>
                  <th className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Cookies
                  </th>
                  <th className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    _ga, _ga_YLMTDYMQCC
                  </td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Analytics: Google Analytics. 2 years.
                  </td>
                </tr>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    FCCDCF
                  </td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Functionality: Funding Choices. 13 months.
                  </td>
                </tr>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    FCNEC
                  </td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Analytics: Funding Choices. 365 days.
                  </td>
                </tr>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    __eoi
                  </td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Security: AdSense, AdSense for Search, Display & Video 360, Google Ad Manager,
                    Google Ads. 6 months.
                  </td>
                </tr>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    __gads
                  </td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Advertising: AdSense, Display & Video 360, Google Ad Manager, Google Ads. 13
                    months.
                  </td>
                </tr>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    __gpi
                  </td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Advertising: AdSense, Google Ad Manager. 13 months.
                  </td>
                </tr>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">NID</td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Security, Analytics, Functionality, Advertising: AdSense for Search, Google Ads.
                    6 months
                  </td>
                </tr>
                <tr>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    test_cookie
                  </td>
                  <td className="border-secondary-100 dark:border-secondary-800 border p-5">
                    Functionality: AdSense, Campaign Manager, Google Ad Manager, Google Analytics,
                    Display & Video 360, Search Ads 360. 15 minutes.
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="component-title">How do I Control or Delete Cookies?</h3>

            <p>Information on;</p>

            <ul>
              <li>
                <a
                  title="About Cookies website"
                  href="http://www.aboutcookies.org/default.aspx?page=2"
                >
                  Deleting cookies
                </a>
              </li>
              <li>
                <a
                  title="About Cookies website"
                  href="http://www.aboutcookies.org/default.aspx?page=1"
                >
                  Controlling cookies
                </a>
              </li>
            </ul>

            <p>
              is available at&nbsp;<a href="http://www.aboutcookies.org/">www.aboutCookies.org</a>.
              To reiterate though, by deleting our cookies or disabling future cookies you may not
              be able to access certain areas or features of this website.
            </p>

            <hr className="prose-hr component-posts-article__divider" />

            <h2 className="component-title component-title--main">Comments</h2>

            <p>
              The commenting platform is provided by <a href="https://disqus.com/">Disqus</a>. You
              should read their{' '}
              <a href="https://help.disqus.com/en/articles/1717102-terms-of-service">Terms</a>,{' '}
              <a href="https://disqus.com/privacy-policy/">Privacy</a> and{' '}
              <a href="https://help.disqus.com/en/articles/1944034-cookies-and-data-recipients">
                Cookie
              </a>{' '}
              policies for more information. If you wish to opt-out from data sharing, you can do so{' '}
              <a href="https://disqus.com/data-sharing-settings/">here</a>.
            </p>

            <p>
              Comments are welcomed and encouraged on this site, but there are some instances where
              comments will be edited or deleted as follows:
            </p>

            <ul>
              <li>
                <p>
                  Comments deemed to be spam or solely promotional in nature will be deleted.
                  Including a link to relevant content is permitted, but comments should be relevant
                  to the post topic.
                </p>
              </li>
              <li>
                <p>Comments including profanity will be deleted.</p>
              </li>
              <li>
                <p>
                  Comments containing language or concepts that could be deemed offensive will be
                  deleted. Note this may include abusive, threatening, pornographic, offensive,
                  misleading or libelous language.
                </p>
              </li>
              <li>
                <p>Comments that attack an individual directly will be deleted.</p>
              </li>
              <li>
                <p>
                  Comments that harass other posters will be deleted. Please be respectful toward
                  other contributors.
                </p>
              </li>
              <li>
                <p>
                  Anonymous comments will be deleted. We only accept comments from posters who
                  identify themselves. You can post as a 'Guest' without requiring a Disqus account,
                  but please use your real name and a valid email address.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
