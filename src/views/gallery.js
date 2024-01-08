import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <Helmet>
        <title>Gallery - Portfolio</title>
        <meta property="og:title" content="Gallery - Portfolio" />
      </Helmet>
      <div className="gallery-top-container">
        <nav data-role="Header" className="gallery-navbar">
          <div className="gallery-container1">
            <div className="gallery-right-side">
              <div className="gallery-links-container">
                <Link to="/" className="gallery-navlink">
                  Home
                </Link>
                <Link to="/about" className="gallery-navlink1">
                  About Me
                </Link>
                <Link to="/portfolio" className="gallery-navlink2">
                  Portfolio
                </Link>
                <Link to="/gallery" className="gallery-navlink3">
                  Contact
                </Link>
              </div>
              <div className="gallery-right-side1">
                <a href="#main-section" className="gallery-link">
                  <SolidButton button="GitHub"></SolidButton>
                </a>
                <a href="#main-section" className="gallery-link1">
                  <SolidButton button="LinkedIn"></SolidButton>
                </a>
              </div>
            </div>
          </div>
          <div data-role="MobileMenu" className="gallery-mobile-menu">
            <div className="gallery-nav">
              <div className="gallery-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="gallery-close-menu">
                  <svg viewBox="0 0 1024 1024" className="gallery-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="gallery-right-side2">
                <div className="gallery-links-container1">
                  <span className="gallery-text">Home</span>
                  <span className="gallery-text01">About</span>
                  <span className="gallery-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="gallery-link2">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="gallery-follow-container">
              <span className="gallery-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="gallery-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gallery-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="gallery-icon2"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gallery-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="gallery-icon4"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gallery-link5"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="gallery-icon6"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="gallery-hero">
          <div className="gallery-content-container">
            <h1 className="Heading gallery-text05">Frank Zhao</h1>
            <h2 className="Subheading gallery-subheading">Data Scientist</h2>
            <span className="gallery-text06">
              <span>
                Hi. My name is Frank. I&apos;m a Data Scientist and Analytics
                Engineer specializing in clinical informatics.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <SolidButton button="My Work"></SolidButton>
          </div>
        </div>
      </div>
      <div id="main-section" className="gallery-main">
        <div className="gallery-container2">
          <div className="gallery-container3">
            <h1>Title</h1>
            <span>Sample Text</span>
          </div>
          <iframe
            src="https://plotly.com/~chris/1638"
            className="gallery-iframe"
          ></iframe>
          <div className="gallery-container4">
            <span>
              <span>
                There was something to be said for living a life that didn’t
                involve lengthy interrogations. By that standard, at least,
                Holden had not lived his well. When he and the rest of the
                Rocinante’s crew had agreed to be debriefed, he’d guessed that
                it would be more than just the events surrounding the attack on
                Earth by the Free Navy. There was more than enough to talk
                about, after all. The chief engineer on Tycho Station who’d been
                exposed as a mole for Marco Inaros, the abduction and rescue of
                Monica Stuart, the loss of the protomolecule sample, the attack
                that had nearly killed Fred Johnson. And that was just for him.
                Naomi and Alex and even Amos would have whole volumes of their
                own to contribute.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                He hadn’t expected that the questioning would spread out from
                there like a gas to fill all available space. For weeks now, his
                days had been filled with twelve to sixteen hours of talking
                through anything and everything in his life. The names and
                histories of all eight of his parents. His school records. His
                abortive naval career. What he knew about Naomi, about Alex,
                about Fred Johnson. His relationship with the OPA, with Dmitri
                Havelock, with Detective Miller. Even after hours of review, he
                wasn’t sure about that last one. Sitting in the small room
                across from the UN interrogators, Holden had done his best to
                take apart his life until that point and lay it open before
                them.
              </span>
            </span>
          </div>
        </div>
      </div>
      <footer className="gallery-footer">
        <div className="gallery-container5">
          <span className="gallery-text14">Copyright © 2022 | Frank Zhao</span>
        </div>
      </footer>
    </div>
  )
}

export default Gallery
