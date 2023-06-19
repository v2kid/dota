import Footer from './Footer'
import Header from './Header'
import HomepageChoose from './HomepageChoose'
import HomepageBattle from './Homepage_Battle'

function HomepageSection() {
  return (
    <div className='homepage_HeaderSection_156Aj'>
      <div className='homepage_BackgroundVideoContainer_33v9_'>
        <video autoPlay preload='auto' loop playsInline>
          <source
            type='video/webm'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm'
          />
          <source
            type='video/mp4'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4'
          />
        </video>
      </div>
      <div
        className='homepage_QuoteContainer_t1GDT aos-init aos-animate'
        data-aos='fade-right'
        data-aos-delay={1000}
        data-aos-duration={2500}
      >
        <div>
          <div className='homepage_QuoteText_19K41'>“A Modern Multiplayer Masterpiece.”</div>
          <div className='homepage_QuoteCredit_gcx17'>- Destructoid</div>
        </div>
        <div className='homepage_HorizBar_2RJH7' />
        <a href='https://store.steampowered.com/app/570/Dota_2/'>
          <div className='homepage_PlayButton_2yA33'>
            <div
              className='homepage_SteamLogo_2OrkR'
              style={{
                backgroundImage:
                  'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam.svg")'
              }}
            />
            <div className='homepage_RightSide_1oC4f'>
              <div className='homepage_PlayForFree_QtAu0'>Play for Free</div>
              <div className='homepage_Download_T3dgN'>Download on Steam</div>
            </div>
          </div>
        </a>
      </div>
      <div className='homepage_BottomFade_1yhhn' />
    </div>
  )
}

export default HomepageSection
