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
              or by installing a <Link href={`http://tools.google.com/dlpage/gaoptout`}>plugin</Link> to
              manage cookies set by Google Analytics.
            </p>

            <table className="border-slate-500 not-prose mt-8 w-full table-auto border-collapse border text-left">
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
                    These are Google Analytics cookies. They are used to determine how you arrived
                    to this site, your visit length and how often you visit this website.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
