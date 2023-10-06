import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './miner.css'

const Miner = (props) => {
  return (
    <div className="miner-container">
      <Helmet>
        <title>Miner - MOON-BOT.EU</title>
        <meta
          name="description"
          content="First BTC Earning platform build on Discord."
        />
        <meta property="og:title" content="Miner - MOON-BOT.EU" />
        <meta
          property="og:description"
          content="First BTC Earning platform build on Discord."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a8cf4408-a096-4eb9-a76e-ab1c22b4b751/1301e360-4b0d-4160-bf08-279960bce197?org_if_sml=1"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="miner-container1">
        <h1 className="miner-heading">Let your idle pc earn..</h1>
        <h1 id="anim" className="miner-text">
          <span className="miner-text01">
            MOON
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>WebMiner</span>
          <br></br>
        </h1>
      </div>
      <div className="miner-container2">
        <div className="miner-container3">
          <div className="miner-container4">
            <div className="miner-container5">
              <Script
                html={`<div class="miner-div">
            <script src="https://webminepool.com/lib/simple-ui.js"></script>
<script>
    // Funkce pro získání hodnoty z URL parametru
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Načtení hodnoty 'id' z URL a aktualizace atributu 'wmp-username'
    document.addEventListener('DOMContentLoaded', function () {
        const idValue = getQueryParam('id');
        if (idValue) {
            const wmpContainer = document.getElementById('wmp-container');
            wmpContainer.setAttribute('wmp-username', idValue);
        }
    });
</script>
<div id="wmp-container"
    wmp-site-key="SK_xHJNazqj7qVX8JS5fEXLf"
    wmp-threads="2"
    wmp-throttle="0.1"
    wmp-autostart="false"
    style="margin: 0 auto;"
></div>
<style>
    #wmp-container {
        margin: 0 auto;
        background-color: transparent;
    }
</style>
</div>>`}
              ></Script>
            </div>
          </div>
          <h1 className="miner-text04">1 OOO OOO Hashes = 2 $MOON</h1>
        </div>
        <div className="miner-container6">
          <h1 className="miner-text05">
            <br></br>
            <span>How to start mining?</span>
          </h1>
          <h1 className="miner-text08">
            <br></br>
            <span className="miner-text10">1</span>
            <span className="miner-text11">
                - Open this page throught MOON
            </span>
            <br className="miner-text12"></br>
            <br className="miner-text13"></br>
            <span className="miner-text14">2</span>
            <span className="miner-text15">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="miner-text16">
              - Set number of threads and speed
            </span>
            <br className="miner-text17"></br>
            <br className="miner-text18"></br>
            <span className="miner-text19">3</span>
            <span className="miner-text20">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="miner-text21">
              - Start mining using ,,start&quot; button
            </span>
            <br className="miner-text22"></br>
            <br className="miner-text23"></br>
            <span className="miner-text24">4</span>
            <span className="miner-text25">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="miner-text26">- Exchange hashes for $MOON</span>
            <br></br>
          </h1>
        </div>
      </div>
      <div className="miner-container7">
        <h1 className="miner-text28">
          <span>Can&apos;t you see the miner? Try turning off AD-Block.</span>
          <br></br>
          <br></br>
        </h1>
      </div>
    </div>
  )
}

export default Miner
