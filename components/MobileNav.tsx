'use client'

import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import Link from './Link'
import navLinks from '@/data/navLinks'

const MobileNav = () => {
  const pathname = usePathname()
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <div className="flex justify-end">
        <button
          aria-label="Toggle Menu"
          onClick={onToggleNav}
          className="component-navbar__menu-btn"
          role="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <Transition appear show={navShow} as={Fragment} unmount={false}>
          <Dialog
            as="div"
            onClose={onToggleNav}
            unmount={false}
            className="component-navbar component-navbar--header"
            role="dialog"
            aria-label="Mobile Navigation Dialog"
          >
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-95"
              leave="transition ease-in duration-200 transform"
              leaveFrom="translate-x-0 opacity-95"
              leaveTo="translate-x-full opacity-0"
              unmount={false}
            >
              <DialogPanel className="component-navbar__menu-mobile">
                <div className="flex justify-end">
                  <button
                    className="mt-11 mr-8 h-8 w-8"
                    aria-label="Toggle Menu"
                    onClick={onToggleNav}
                    role="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <nav
                  ref={navRef}
                  className="component-navbar__links component-navbar__links--menu-mobile"
                  role="navigation"
                  aria-label="Mobile Navigation Links Menu"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={
                        pathname.startsWith(link.href) ? 'component-navbar__link--current-page' : ''
                      }
                      role="menuitem"
                      aria-label={'Mobile Navigation Link to ' + link.title}
                      onClick={onToggleNav}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </DialogPanel>
            </TransitionChild>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}

export default MobileNav
