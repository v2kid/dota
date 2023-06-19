import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='microheader_MicroHeader_U7wdC microheader_Overlapping_2RDnz'>
      <div className='microheader_HeaderContents_RsnZk'>
        <a className='microheader_DotaLogo_ZFf5S' href='/home' />
        <div className='microheader_NavItems_3WYkc'>
          <div className='microheader_NavLink_15Uwp microheader_GameDropdown_2cfJE'>
            Game
            <img
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_over.png'
              className='microheader_DownArrow_1VjIj'
            />
          </div>
          <div className='microheader_GameDropdownContents_18ww9 microheader_Hidden_3P4BK'>
            <a href='/patches'>Patches</a>
            <a href='/news/updates'>Gameplay Updates</a>
            <a href='/pastupdates'>Previous Updates</a>
          </div>
          <a className='microheader_NavLink_15Uwp' href='/heroes'>
            Heroes
          </a>
          <Link to={'/blog'}>
            {' '}
            <a className='microheader_NavLink_15Uwp microheader_Active_3ulNR'>News</a>{' '}
          </Link>
          <a className='microheader_NavLink_15Uwp' href='/esports/summer23'>
            Esports
          </a>
        </div>
        <div className='microheader_OptionsSide_11feq'>
          <div className='microheader_AccountLanguage_22B7Z'>
            <Link to={'/login'}>
              {' '}
              <a
                href='https://steamcommunity.com/oauth/login?client_id=9B2C1229&response_type=token&state=news'
                className='microheader_Login_1RIIB'
              >
                Login
              </a>{' '}
            </Link>
            <div className='microheader_Account_lcq6h microheader_Hidden_3P4BK'>
              <a href='https://www.dota2.com/oauth/logout?goto=news' className='microheader_Logout_rirOy'>
                (Logout)
              </a>
            </div>
          </div>
          <a className='microheader_PlayForFree_3viea' href='https://store.steampowered.com/app/570/Dota_2/'>
            <div className='microheader_StandardButton_3mkXB'>
              <div className='microheader_SteamLogo_3qSrv' />
              <div className='microheader_ButtonText_jIe9r'>Play for Free</div>
            </div>
          </a>
        </div>
        <div className='microheader_MobileHamburger_MM-C2'>
          <div className='microheader_HamburgerSlice_vkYBh' />
          <div className='microheader_HamburgerSlice_vkYBh' />
          <div className='microheader_HamburgerSlice_vkYBh' />
        </div>
      </div>
      <div className='microheader_MobilePopup_27Q74'>
        <div className='microheader_Header_2H33B'>
          <div className='microheader_DotaLogo_ZFf5S' />
          <div
            className='microheader_CloseButton_1cGE-'
            style={{
              backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/close.png")'
            }}
          />
        </div>
        <div className='microheader_MobileOption_3IxVZ'>Game</div>
        <div className='microheader_MobileSubOptionList_3GiVq'>
          <div className='microheader_MobileSubOption_2HVs2'>
            <a href='https://www.dota2.com/workshop/builds'>Builds</a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={8}
              height={12}
              viewBox='0 0 8 12'
              fill='none'
              className='microheader_Arrow_3k0_X'
            >
              <path d='M1 11L6 6L1 1' stroke='currentColor' strokeOpacity='0.9' strokeWidth={2} />
            </svg>
          </div>
          <div className='microheader_MobileSubOption_2HVs2'>
            <a href='https://steamcommunity.com/app/570/guides'>Steam Guides</a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={8}
              height={12}
              viewBox='0 0 8 12'
              fill='none'
              className='microheader_Arrow_3k0_X'
            >
              <path d='M1 11L6 6L1 1' stroke='currentColor' strokeOpacity='0.9' strokeWidth={2} />
            </svg>
          </div>
          <div className='microheader_MobileSubOption_2HVs2'>
            <a href='/patches'>Patches</a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={8}
              height={12}
              viewBox='0 0 8 12'
              fill='none'
              className='microheader_Arrow_3k0_X'
            >
              <path d='M1 11L6 6L1 1' stroke='currentColor' strokeOpacity='0.9' strokeWidth={2} />
            </svg>
          </div>
          <div className='microheader_MobileSubOption_2HVs2'>
            <a href='/news/updates'>Gameplay Updates</a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={8}
              height={12}
              viewBox='0 0 8 12'
              fill='none'
              className='microheader_Arrow_3k0_X'
            >
              <path d='M1 11L6 6L1 1' stroke='currentColor' strokeOpacity='0.9' strokeWidth={2} />
            </svg>
          </div>
          <div className='microheader_MobileSubOption_2HVs2'>
            <a href='https://www.dota2.com/store'>Store</a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={8}
              height={12}
              viewBox='0 0 8 12'
              fill='none'
              className='microheader_Arrow_3k0_X'
            >
              <path d='M1 11L6 6L1 1' stroke='currentColor' strokeOpacity='0.9' strokeWidth={2} />
            </svg>
          </div>
        </div>
        <div className='microheader_LineSeparator_YWlJq' />
        <a className='microheader_MobileOption_3IxVZ' href='/heroes'>
          Heroes
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={13}
            height={22}
            viewBox='0 0 13 22'
            fill='none'
            className='microheader_Arrow_3k0_X'
          >
            <path d='M1 21L11 11L0.999999 1' stroke='currentColor' strokeOpacity='0.8' strokeWidth={2} />
          </svg>
        </a>
        <div className='microheader_LineSeparator_YWlJq' />
        <a className='microheader_MobileOption_3IxVZ' href='/news'>
          News
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={13}
            height={22}
            viewBox='0 0 13 22'
            fill='none'
            className='microheader_Arrow_3k0_X'
          >
            <path d='M1 21L11 11L0.999999 1' stroke='currentColor' strokeOpacity='0.8' strokeWidth={2} />
          </svg>
        </a>
        <div className='microheader_LineSeparator_YWlJq' />
        <a className='microheader_MobileOption_3IxVZ' href='/esports/summer23'>
          Esports
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={13}
            height={22}
            viewBox='0 0 13 22'
            fill='none'
            className='microheader_Arrow_3k0_X'
          >
            <path d='M1 21L11 11L0.999999 1' stroke='currentColor' strokeOpacity='0.8' strokeWidth={2} />
          </svg>
        </a>
        <div className='microheader_LineSeparator_YWlJq' />
        <div className='microheader_BottomSection_1E5o8'>
          <div className='microheader_LoginLanguage_204pi'>
            <a
              href='https://steamcommunity.com/oauth/login?client_id=9B2C1229&response_type=token&state=news'
              className='microheader_Login_1RIIB'
            >
              Login
            </a>
            <div className='microheader_Account_lcq6h microheader_Hidden_3P4BK'>
              <a href='https://www.dota2.com/oauth/logout?goto=news' className='microheader_Logout_rirOy'>
                (Logout)
              </a>
            </div>
          </div>
          <a className='microheader_PlayForFree_3viea' href='https://store.steampowered.com/app/570/Dota_2/'>
            <div className='microheader_StandardButton_3mkXB'>
              <div className='microheader_SteamLogo_3qSrv' />
              <div className='microheader_ButtonText_jIe9r'>Play for Free</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
