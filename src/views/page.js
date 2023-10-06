import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - MOON-BOT.EU</title>
        <meta
          name="description"
          content="First BTC Earning platform build on Discord."
        />
        <meta property="og:title" content="Page - MOON-BOT.EU" />
        <meta
          property="og:description"
          content="First BTC Earning platform build on Discord."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a8cf4408-a096-4eb9-a76e-ab1c22b4b751/1301e360-4b0d-4160-bf08-279960bce197?org_if_sml=1"
        />
      </Helmet>
      <div className="page-container1">
        <h1 className="page-text">
          <span>Verify Account</span>
          <br></br>
        </h1>
        <h1 className="page-text3">
          <span className="page-text4">
            The safety of our users is important to us, which is why we are
            sending you this email.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="page-text5">Please click on the button below</span>
          <span className="page-text6">
            {' '}
            to verify that your account really belongs to you.
          </span>
        </h1>
      </div>
      <div className="page-container2">
        <a href="https://google.com" className="page-link">
          <div className="page-get-started button">
            <span className="page-text7">Verify</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Page
