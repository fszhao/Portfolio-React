import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio</title>
        <meta property="og:title" content="Portfolio" />
      </Helmet>
      <div className="home-top-container">
        <nav data-role="Header" className="home-navbar">
          <div className="home-container1">
            <div className="home-right-side">
              <div className="home-links-container">
                <Link to="/" className="home-navlink">
                  Home
                </Link>
                <Link to="/about" className="home-navlink1">
                  About Me
                </Link>
                <Link to="/portfolio" className="home-navlink2">
                  Portfolio
                </Link>
                <span className="home-text">Contact</span>
              </div>
              <div className="home-right-side1">
                <a
                  href="https://github.com/fszhao?tab=repositories"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <SolidButton
                    button="GitHub"
                    className="home-component"
                  ></SolidButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/frank-zhao-780b6a90/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <SolidButton
                    button="LinkedIn"
                    className="home-component1"
                  ></SolidButton>
                </a>
              </div>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-right-side2">
                <div className="home-links-container1">
                  <span className="home-text01">Home</span>
                  <span className="home-text02">About</span>
                  <span className="home-text03">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="home-link2">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="home-follow-container">
              <span className="home-text05">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="home-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon04"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link5"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="home-hero">
          <div className="home-content-container">
            <h1 className="Heading home-text06">Frank Zhao</h1>
            <h2 className="Subheading home-subheading">
              Data Scientist | Software Engineer
            </h2>
            <span className="home-text07">
              <span>
                Hi. My name is Frank. I&apos;m a Data Scientist and Software
                Engineer specializing in clinical informatics.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <Link to="/portfolio" className="home-navlink3">
              <SolidButton
                button="My Work"
                className="home-component3"
              ></SolidButton>
            </Link>
          </div>
        </div>
      </div>
      <div id="main-section" className="home-main">
        <div className="home-banner">
          <h1 className="home-text11">A Bit About Myself</h1>
          <span className="home-text12">
            <span>
              “Finish each day and be done with it. You have done what you
              could. Some blunders and absurdities no doubt crept in; forget
              them as soon as you can. Tomorrow is a new day. You shall begin it
              serenely and with too high a spirit to be encumbered with your old
              nonsense.”
            </span>
            <span>― Ralph Waldo Emerson</span>
          </span>
          <Link to="/about" className="home-navlink4">
            <SolidButton
              button="Learn More"
              rootClassName="solid-button-root-class-name10"
              className="home-component4"
            ></SolidButton>
          </Link>
        </div>
        <h2 className="home-text15">My Areas of Interest</h2>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon08">
              <svg viewBox="0 0 1024 1024" className="home-icon09">
                <path d="M810 874q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM968 832l46 34q4 4 4 10l-2 2v2l-42 74q-6 10-14 6l-52-22q-6 6-36 20l-8 58q0 8-12 8h-84q-12 0-12-8l-8-58q-16-8-36-20l-52 22q-10 4-14-6l-42-74v-2l-2-2q0-6 4-10l46-34q0-4-1-12t-1-10 1-10 1-10l-46-36q-6-6-2-14l42-74q4-8 14-4l52 22q24-16 36-22l8-56q0-8 12-8h84q12 0 12 8l8 56q8 4 36 22l52-22q10-4 14 4l42 74v2q2 2 2 4 0 4-4 8l-46 36q2 6 2 20 0 4-1 12t-1 10zM810 490q-132 0-226 94t-94 226q0 16 4 44h-494l854-854-2 494q-28-4-42-4z"></path>
              </svg>
            </div>
            <div className="home-card-content">
              <span className="home-text16">Data Science</span>
              <span className="home-text17">
                <span>
                  Oye Bossmang hello hello hello hello hello hello hello hello
                  hello hello
                </span>
              </span>
            </div>
            <a href="#main-section" className="home-link6">
              <SolidButton
                button="View Code"
                rootClassName="solid-button-root-class-name4"
                className="home-component5"
              ></SolidButton>
            </a>
          </div>
          <div className="home-card1">
            <div className="home-icon11">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"></path>
              </svg>
            </div>
            <div className="home-card-content1">
              <span className="home-text19">
                Machine Learning and Artificial Intelligence
              </span>
              <span className="home-text20">
                <span>
                  Oye Bossmang hello hello hello hello hello hello hello hello
                  hello hello
                </span>
              </span>
            </div>
            <SolidButton
              button="View Code"
              rootClassName="solid-button-root-class-name6"
            ></SolidButton>
          </div>
          <div className="home-card2">
            <div className="home-icon14">
              <svg viewBox="0 0 1024 1024" className="home-icon15">
                <path d="M512 810q58 0 126-33t106-79l112 66q-128 174-344 174-176 0-301-125t-125-301q0-166 111-287t273-137v128q-108 16-182 100t-74 196q0 124 87 211t211 87zM554 88q162 16 273 137t111 287q0 96-36 174l-112-66q20-56 20-108 0-112-74-196t-182-100v-128z"></path>
              </svg>
            </div>
            <div className="home-card-content2">
              <span className="home-text22">Analytics/Visualization</span>
              <span className="home-text23">
                <span>
                  Oye Bossmang hello hello hello hello hello hello hello hello
                  hello hello
                </span>
              </span>
            </div>
            <SolidButton
              button="View Code"
              rootClassName="solid-button-root-class-name5"
            ></SolidButton>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container2">
          <span className="home-text25">Copyright © 2022 | Frank Zhao</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
