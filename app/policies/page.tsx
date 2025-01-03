import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Cookie and Privacy Policy' })

export default function Policies() {
  return (
    <>
      <section className="site-container">
        <div className="grid">
          <div className="prose col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
            <h2 className="component-title component-title--main">Privacy</h2>

            <p>
              Whenever you view a web page on this website your IP address, time, page referrer and
              current page will be logged, this is for analytical purposes.
            </p>

            <p>
              When you send an email; either to a direct email address or through the contact form,
              your email address is stored securely, although it may not always be stored on this
              website's server.
            </p>

            <p>
              If you have any questions regarding the security, privacy or cookie policy on this
              website please contact{' '}
              <strong>
                <span className="!text-typography-default !no-underline dark:!text-typography-default-dark">
                  ryan＠
                </span>
                <a
                  href="https://ryanfitton.co.uk"
                  className="!text-typography-default !no-underline dark:!text-typography-default-dark"
                >
                  ryanfitton.co.uk
                </a>
              </strong>{' '}
            </p>

            <hr className="prose-hr component-posts-article__divider" />

            <h2 className="component-title component-title--main">Cookies</h2>

            <p>This websites uses cookies to give you a better browsing experience.</p>

            <p>By browsing this website, it is assumed you accept these cookies.</p>

            <p>
              Cookies are optional, you can manage cookies yourself by{' '}
              <Link href={`http://www.aboutcookies.org/default.aspx`}>
                changing your web browser’s privacy options
              </Link>{' '}
              or by installing a{' '}
              <Link href={`http://tools.google.com/dlpage/gaoptout`}>plugin</Link> to manage cookies
              set by Google Analytics.
            </p>

            <table className="border-slate-500 not-prose my-8 w-full table-auto border-collapse border text-left">
              <thead>
                <tr>
                  <th className="border border-secondary-100 p-5 dark:border-secondary-800">
                    Cookies
                  </th>
                  <th className="border border-secondary-100 p-5 dark:border-secondary-800">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-secondary-100 p-5 dark:border-secondary-800">
                    _ga, _ga_YLMTDYMQCC
                  </td>
                  <td className="border border-secondary-100 p-5 dark:border-secondary-800">
                    These are Google Analytics cookies. They are used to determine how you arrived
                    to this site, your visit length and how often you visit this website.
                  </td>
                </tr>
              </tbody>
            </table>

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
