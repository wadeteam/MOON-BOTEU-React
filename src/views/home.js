import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MOON-BOT.EU</title>
        <meta
          name="description"
          content="First BTC Earning platform build on Discord."
        />
        <meta property="og:title" content="MOON-BOT.EU" />
        <meta
          property="og:description"
          content="First BTC Earning platform build on Discord."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a8cf4408-a096-4eb9-a76e-ab1c22b4b751/1301e360-4b0d-4160-bf08-279960bce197?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  <span className="home-text">The easiest way</span>
                  <br className="home-text01"></br>
                  <span className="home-text02">to earn satoshis</span>
                  <br className="home-text03"></br>
                  <span className="home-text04">anywhere.</span>
                  <br className="home-text05"></br>
                </h1>
                <span className="home-caption">
                  <span>Now you can earn BTC anytime and anywhere. You</span>
                  <br></br>
                  <span>just need to open Discord.</span>
                  <br></br>
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text10">Invite MOON</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text11">Join Support server</span>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://cdn.discordapp.com/attachments/985557139814768641/1157387355129393202/stazeny_soubor_9.jpg?ex=65186c78&amp;is=65171af8&amp;hm=13f298f97df54199b9e11c599e9ff50fc1d03c194a786c6a29de9b88d2ffd88a&amp;"
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://cdn.discordapp.com/attachments/985557139814768641/1157387354894499860/sketch-1696013027739.png?ex=65186c78&amp;is=65171af8&amp;hm=ffbe2a9af98ebd45197e34834dd0bff425c1ae1656a9360bbecf7711d91974e1&amp;"
                  className="home-image1 avatar"
                />
                <img
                  alt="image"
                  src="https://cdn.discordapp.com/attachments/985557139814768641/1157387355406209104/rsz_nove_logo_velke-1.png?ex=65186c78&amp;is=65171af8&amp;hm=b1e38c1fff2b6ebe6ff2cbaad633050bef775004d7a6ecdef6fb229103b0876b&amp;"
                  className="home-image2 avatar"
                />
              </div>
              <label className="home-caption1">
                <span>
                  Trusted by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text13">25+ servers.</span>
              </label>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="https://cdn.discordapp.com/attachments/985557139814768641/1157384362011132036/sketch-1696012288304.png?ex=651869af&amp;is=6517182f&amp;hm=cec4853f96fb60f31f489799f30afd81d5375ca819433039e46242b14b2d9d9b&amp;"
              className="home-image4"
            />
          </div>
          <div className="home-image5">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="home-image6"
            />
          </div>
        </div>
        <span>Text</span>
      </section>
      <section className="home-section1">
        <header className="home-header1">
          <header className="home-left">
            <span className="home-section2 section-head">
              DISCOVER MOON FEATURES
            </span>
            <h2 className="section-heading">
              <span>Lot of ways to earn bitcoin!</span>
              <br></br>
              <span>We recommend:</span>
              <br></br>
            </h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph section-description">
              <span>
                Complete shortlinks, claim from faucet, boost our server, invite
                friends, mine using miner, claim daily reward, learn2earn and
                lot of more!
              </span>
              <br></br>
            </p>
          </div>
        </header>
        <main className="home-cards">
          <Card rootClassName="card-root-class-name"></Card>
          <Card
            Icon="/Icons/group%201314-200h.png"
            Header="Complete Shortlinks"
            Description="Click on links, complete captcha and get paid in BTC! Rewards up to 50 sats/task."
            rootClassName="card-root-class-name1"
          ></Card>
          <Card
            Icon="/Icons/group%201317-200h.png"
            Header="Daily Reward"
            Description="You can claim FREE sats every day from MOON Faucet. Did you claim it today?"
            rootClassName="card-root-class-name2"
          ></Card>
        </main>
      </section>
      <section className="home-section3">
        <header className="home-header2">
          <h2 className="home-text21">
            We use Ligtning-Network for instant and cheap withdrawals!
          </h2>
          <span className="home-text22">
            <span>
              You&apos;ve never used Lightning-Network? Now is the time, MOON
              will help you.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </span>
        </header>
        <section className="home-note">
          <div className="home-content1">
            <div className="home-main1">
              <div className="home-caption2">
                <span className="home-section4 section-head">
                  WHY TRY MOON?
                </span>
              </div>
              <div className="home-heading02">
                <h2 className="home-heading03 section-heading">
                  The biggest advantages of MOON
                </h2>
              </div>
            </div>
            <div className="home-container1">
              <div className="home-container2">
                <div className="home-icon">
                  <img
                    alt="image"
                    src="https://cdn.discordapp.com/attachments/985557139814768641/1157402750368366652/33281.png?ex=65187acf&amp;is=6517294f&amp;hm=ba3dc73d9304230c1aea0147d0588e8411f132ffa9021825d5cfeafe1966a90c&amp;"
                    className="home-icon01"
                  />
                </div>
                <div className="home-icon02">
                  <img
                    alt="image"
                    src="https://cdn.discordapp.com/attachments/985557139814768641/1157402750368366652/33281.png?ex=65187acf&amp;is=6517294f&amp;hm=ba3dc73d9304230c1aea0147d0588e8411f132ffa9021825d5cfeafe1966a90c&amp;"
                    className="home-icon03"
                  />
                </div>
                <div className="home-icon04">
                  <img
                    alt="image"
                    src="https://cdn.discordapp.com/attachments/985557139814768641/1157402750368366652/33281.png?ex=65187acf&amp;is=6517294f&amp;hm=ba3dc73d9304230c1aea0147d0588e8411f132ffa9021825d5cfeafe1966a90c&amp;"
                    className="home-icon05"
                  />
                </div>
              </div>
              <h2 className="home-heading04 section-heading">
                <span>    Withdrawals using LN</span>
                <br></br>
                <span>    Accesible on every device with Discord</span>
                <br></br>
                <span>    Instant Withdrawals from 10k sats</span>
                <br></br>
              </h2>
            </div>
            <div className="home-get-started2 button">
              <span className="home-text36">Get started</span>
            </div>
          </div>
          <div className="home-container3">
            <div className="home-icon06">
              <img
                alt="image"
                src="https://cdn.discordapp.com/attachments/985557139814768641/1157402750368366652/33281.png?ex=65187acf&amp;is=6517294f&amp;hm=ba3dc73d9304230c1aea0147d0588e8411f132ffa9021825d5cfeafe1966a90c&amp;"
                className="home-icon07"
              />
            </div>
            <div className="home-icon08">
              <img
                alt="image"
                src="https://cdn.discordapp.com/attachments/985557139814768641/1157402750368366652/33281.png?ex=65187acf&amp;is=6517294f&amp;hm=ba3dc73d9304230c1aea0147d0588e8411f132ffa9021825d5cfeafe1966a90c&amp;"
                className="home-icon09"
              />
            </div>
            <div className="home-icon10">
              <img
                alt="image"
                src="https://cdn.discordapp.com/attachments/985557139814768641/1157402750368366652/33281.png?ex=65187acf&amp;is=6517294f&amp;hm=ba3dc73d9304230c1aea0147d0588e8411f132ffa9021825d5cfeafe1966a90c&amp;"
                className="home-icon11"
              />
            </div>
          </div>
          <h2 className="home-heading05 section-heading">
            <span>    Connections with our partners</span>
            <br></br>
            <span>    Leveling System</span>
            <br></br>
            <span>    Fast Discord support</span>
            <br></br>
          </h2>
        </section>
      </section>
      <section className="home-section5">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header3">
            <h2 className="section-heading">
              Bitcoin is the future of payments.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="home-description section-description">
              Rack up as many sats as you can before it&apos;s too late.
            </p>
          </div>
          <div className="home-buttons1">
            <div className="home-get-started3 button">
              <span className="home-text43">Start Today!</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section6">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header4">
            <header className="home-left3">
              <span className="home-section7 section-head">MOON BETA</span>
              <h2 className="section-heading home-heading07">
                Open BETA is now LIVE
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph1 section-description">
                We have started public testing of the BETA version of our bot.
                Be one of the first to try it out!
              </p>
            </div>
          </header>
        </main>
        <div className="home-help">
          <span className="home-text44">
            <span>Found bug? Report it!  </span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text47">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section8">
        <main className="home-content2">
          <header className="home-header5">
            <h2 className="home-heading08 section-heading">
              Stop scrolling on our website and try MOON now!
            </h2>
            <div className="home-buttons2">
              <div className="home-ios button">
                <span className="home-text48">Invite MOON</span>
              </div>
              <div className="home-android button">
                <span className="home-text49">Try it on our server</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="https://cdn.discordapp.com/attachments/985557139814768641/1157394713977040926/sketch-1696014772190.png?ex=65187353&amp;is=651721d3&amp;hm=2286487280f6ac2593862af5a538c9093e7b8fc450f310e1e0ab787cc8384f65&amp;"
            className="home-image7"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content3">
          <main className="home-main-content">
            <div className="home-content4">
              <header className="home-main2">
                <div className="home-header6">
                  <img
                    alt="image"
                    src="/Branding/planical7012-ttpb.svg"
                    className="home-branding"
                  />
                  <span className="home-text50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header7">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header8">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text64">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main3">
              <h1 className="home-heading09">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy button">
                  <span className="home-text65">-&gt;</span>
                  <span className="home-text66">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright1">
            <span className="home-text69">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
