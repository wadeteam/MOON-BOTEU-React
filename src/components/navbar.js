import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-container">
        <h1 className="navbar-text">{props.heading}</h1>
        <h1 className="navbar-text1">{props.heading1}</h1>
      </div>
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <span className="navbar-link nav-link">Features</span>
          <a href="https://moon-bot.eu/TOS" className="navbar-link1 nav-link">
            Terms of service
          </a>
          <span className="nav-link">Partners</span>
          <span className="nav-link">Support</span>
          <span className="nav-link">{props.text}</span>
        </div>
        <div className="get-started navbar-get-started">
          <span className="navbar-text3">Start Earning</span>
        </div>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar-image1"
          />
          <div id="close-mobile-menu" className="navbar-container1">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links1">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text4">Get started</span>
        </div>
      </div>
      <div className="">
        <div className="navbar-container3">
          <Script
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
            className=""
          ></Script>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  text: 'Vote',
  image_alt: 'image',
  image_src1: '/Branding/planical7012-ttpb.svg',
  image_src: '/Icons/hamburger-200h.png',
  image_alt1: 'image',
  heading: 'MOON',
  rootClassName: '',
  heading2: '.EU',
  heading1: '-BOT.EU',
}

Navbar.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
}

export default Navbar
