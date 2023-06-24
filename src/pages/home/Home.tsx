import Header from 'pages/components'
import Footer from 'pages/components/Footer'
import HomepageChoose from 'pages/components/HomepageChoose'
import HomepageSection from 'pages/components/HomepageSection'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='homepage_HomePage_owcSF'>
      <Header />
      <HomepageSection />
      <HomepageChoose />
      <div
        className='homepage_ProCircuitSection_3oDuN '
        style={{
          backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg")'
        }}
      >
        <div className='homepage_DPCSmImgs_353Df'>
          <img
            className='homepage_DPCSmImg_3be5Q homepage_Img1_1ZbA2 aos-init'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg'
            data-aos='fade-up'
            data-aos-delay={300}
            data-aos-duration={2500}
          />
          <img
            className='homepage_DPCSmImg_3be5Q homepage_Img2_1GJQR aos-init'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg'
            data-aos='fade-up'
            data-aos-delay={600}
            data-aos-duration={2500}
          />
          <img
            className='homepage_DPCSmImg_3be5Q homepage_Img3_2Ka7y aos-init'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_3.jpg'
            data-aos='fade-up'
            data-aos-delay={1000}
            data-aos-duration={2500}
          />
        </div>
        <div
          className='homepage_DPCIcon_JSgmG'
          style={{
            backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg")'
          }}
        />
        <div className='homepage_HeaderText_37wqy'>
          <span className='Minor'>The</span>
          <br />
          Dota Pro Circuit
        </div>
        <div className='homepage_HorizBar_2RJH7' />
        <div className='homepage_BodyText_3Wyl0'>
          When not climbing the ranks, you'll be able to learn from the best. The Dota Pro Circuit features
          ultra-high-level Dota 2 competition streaming regularly in the game client, on Twitch and Steam.TV.
          Culminating in the largest e-sports championship in the world, The International, professional Dota 2 is an
          event not to be missed.
        </div>
      </div>
      <Footer />
    </div>
  )
}
