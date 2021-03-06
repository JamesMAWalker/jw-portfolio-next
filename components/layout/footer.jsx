import React from 'react'
import Link from 'next/link'

import {
  footer,
  social,
  design,
  footerLink,
  linkout,
} from '../../styles/layout/layout.module.scss'

export const Footer = ({ isMobile }) => {
  return (
    <footer className={footer}>
      <div className={social}>
        <Link href='https://github.com/JamesMAWalker'>
          <a className={`${footerLink} pill-btn`}>Github</a>
        </Link>
        {/* <Link href='/'>
          <a className={`${footerLink} pill-btn`}>
            Codepen
          </a>
        </Link> */}
        <Link href='https://www.linkedin.com/in/james-walker-724136216/'>
          <a className={`${footerLink} pill-btn`}>
            LinkedIn
          </a>
        </Link>
        <Link href='https://www.strava.com/athletes/379856'>
          <a className={`${footerLink} pill-btn`}>Strava</a>
        </Link>
      </div>
      <div className={design}>
        {/* {isMobile && (
          <div>
            <span>Built by</span>
            <span className={linkout}>
              &nbsp; James Walker
            </span>
          </div>
        )} */}
        <div>
          <span>Design and build | </span>
          <span className={linkout}>
            &nbsp; James Walker
          </span>
        </div>
      </div>
    </footer>
  )
}
