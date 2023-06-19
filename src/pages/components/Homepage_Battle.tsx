export default function HomepageBattle() {
  return (
    <div className='homepage_BattleSection_1qlKD'>
      <div className='homepage_BattleBG_2_sRL'>
        <img
          className='homepage_BattleImg_3cY9y'
          src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg'
        />
        <img
          className='homepage_BattleImg_3cY9y homepage_BattleImgMobile_2uq_D'
          src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg'
        />
        <div className='fade_FadeContainer_1JDI3 fade_Top_3x_ct'>
          <div
            className='fade_Fade_1keus'
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%)'
            }}
          />
        </div>
      </div>
      <div className='homepage_LeftHalf_3Rqq1'>
        <div className='homepage_HeaderText_37wqy aos-init' data-aos='fade-up' data-aos-duration={1500}>
          <span className='Minor'>Join the</span>
          <br />
          Battle of the Ancients
        </div>
        <div className='homepage_HorizBar_2RJH7' />
        <div className='homepage_BodyText_3Wyl0'>
          Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team
          clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic
          to discover. It's completely free to play and always will be – start defending your ancient now.
          <a href='/news'>
            <div className='homepage_StandardButton_1W4Sc'>
              <div className='homepage_ButtonText_1YB3f'>See What's New</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
