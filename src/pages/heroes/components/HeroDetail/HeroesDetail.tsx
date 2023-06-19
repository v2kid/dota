import Header from 'pages/components/Header'
import { useEffect, useState } from 'react'
// import Content from '../HeroSumary/HeroSumary'
import HeroSumary from '../HeroSumary/HeroSumary'
import ReadMore from '../ReadMore/ReadMore'
import Talent from '../Herotalent/herotalent'

import Ability from '../HeroAbility/Ability'
import { detailHero, useGetheroabilityQuery } from 'pages/heroes/Heroes.service'
import Attribute from '../HeroAtribute/Attribute'

import { useAppSelector } from 'hook'
import { useParams } from 'react-router-dom'


export default function HeroDetail() {
  const { id } = useParams();
  // const heroid = useAppSelector((state) => state.heroid.heroId )
  const [showComponentOne, setShowComponentOne] = useState(true)
  const {data} = useGetheroabilityQuery(id)
  console.log(data)
  const toggleComponent = () => {
    setShowComponentOne((prevValue) => !prevValue)
  }
  return (
    <div className='herogridpage_HeroGridPage_3YcHv'>
      <Header />
      <div className='heropage_UpperSection_l2rxD'>
        <div className='heropage_BackgroundGradient_2-K5f' />
        <div className='heropage_HeroNavigator_2XvnB'>
          <a
            className='heropage_NavigatorArrow_3SxhO heropage_Left_1F43S'
            href='https://www.dota2.com/hero/dawnbreaker'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_left.png")'
            }}
          />
          <a className='heropage_CenterGrid_1H-L2' href='https://www.dota2.com/heroes'>
            <div className='heropage_GridDot_8rjGY' />
            <div className='heropage_GridDot_8rjGY' />
            <div className='heropage_GridDot_8rjGY' />
            <div className='heropage_GridDot_8rjGY' />
            <div className='heropage_GridDot_8rjGY' />
            <div className='heropage_GridDot_8rjGY' />
          </a>
          <a
            className='heropage_NavigatorArrow_3SxhO heropage_Right_vNURB'
            href='https://www.dota2.com/hero/deathprophet'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_left.png")'
            }}
          />
        </div>
        <div className='heropage_HeroPortraitContainer_3oI3C dazzle'>
          <video
            className='heropage_HeroPortrait_22nJ5'
            poster='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.png'
            autoPlay
            preload='auto'
            loop
            playsInline
          >
            <source
              type='video/webm'
              src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dazzle.webm'
            />
            <img src='./Dazzle_files/dazzle.png' />
          </video>
        </div>
        <div className='fade_FadeContainer_1JDI3 fade_Bottom_1NXAh'>
          <div
            className='fade_Fade_1keus'
            style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.733) 100%, rgb(0, 0, 0) 100%)'
            }}
          />
        </div>
        <div className='heropage_HeroSummary_2jP25'>
          <div className='heropage_HeroTypeTitle_11Ymq'>
            <img src='./Dazzle_files/hero_universal.png' className='heropage_PrimaryStatIcon_1A3VD' />
            <div className='heropage_PrimaryStat_3HGWJ'>Universal</div>
          </div>
          <div className='heropage_HeroName_2IcIu'>Dazzle</div>
          <div className='heropage_HeroOneLiner_2r7td'>Powerful healer who can briefly prevent death</div>
          <div className='heropage_BioOrSummaryContainer_3NVqF'>
            {showComponentOne ? (
              <HeroSumary toggleComponent={toggleComponent} story={data?.ability[0].describle} complex={data?.complexity}/>
            ) : (
              <ReadMore toggleComponent={toggleComponent} />
            )}
          </div>
        </div>
        <div className='heropage_HeroVerticalBar_1Ry6O'>
          <img src='./Dazzle_files/hero_.png' className='heropage_PrimaryStatIcon_1A3VD' />
          <div className='heropage_HeroName_2IcIu'>Dazzle</div>
          <div className='heropage_HeroID_11wuI'>4</div>
          <div className='heropage_Line_2onP-' />
        </div>
        <div className='heropage_TopAbilitySelector_3HNRl'>
          <div className='heropage_Title_3V1Jt'>Abilities</div>
          <div className='heropage_AbilityList_x-wl1'>
            <Talent />
            <div className='heropage_TopAbilityContainer_3ty-o'>
              <img
                className='heropage_AbilitySelectable_3Chop'
                src={data?.ability[0].avatar}
              />
              <div className='heropage_AbilityTooltip_1ALRl'>
                <div className='heropage_TooltipBody_3Asci'>
                  <div className='heropage_Video_1fH3A'>
                    <video
                      className='heropage_HeroPortrait_22nJ5'
                      autoPlay
                      preload='auto'
                      loop
                      playsInline
                      poster={data?.ability[0].poster}
                    >
                      <source
                        type='video/webm'
                        src={data?.ability[0].videowebm}
                      />
                      <source
                        type='video/mp4'
                        src={data?.ability[0].videomp4}
                      />
                    </video>
                  </div>
                  <div className='heropage_Description_10lc5'>
                    <div className='heropage_TooltipTitle_oRzqV'>{data?.name} </div>
                    <div className='heropage_TooltipDescription_1GUxa'>
                      {data?.ability[0].describle}{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='heropage_TopAbilityContainer_3ty-o'>
              <img
                className='heropage_AbilitySelectable_3Chop'
                src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_shallow_grave.png'
              />
              <div className='heropage_AbilityTooltip_1ALRl'>
                <div className='heropage_TooltipBody_3Asci'>
                  <div className='heropage_Video_1fH3A'>
                    <video
                      className='heropage_HeroPortrait_22nJ5'
                      autoPlay
                      preload='auto'
                      loop
                      playsInline
                      poster='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_shallow_grave.jpg'
                    >
                      <source
                        type='video/webm'
                        src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_shallow_grave.webm'
                      />
                      <source
                        type='video/mp4'
                        src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_shallow_grave.mp4'
                      />
                    </video>
                  </div>
                  <div className='heropage_Description_10lc5'>
                    <div className='heropage_TooltipTitle_oRzqV'>Shallow Grave </div>
                    <div className='heropage_TooltipDescription_1GUxa'>
                      An ally blessed with Shallow Grave, no matter how close to death, cannot die while under its
                      protection. Healing on that ally is also amplified for the duration based on the hero's HP.{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='heropage_TopAbilityContainer_3ty-o'>
              <img
                className='heropage_AbilitySelectable_3Chop'
                src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_shadow_wave.png'
              />
              <div className='heropage_AbilityTooltip_1ALRl'>
                <div className='heropage_TooltipBody_3Asci'>
                  <div className='heropage_Video_1fH3A'>
                    <video
                      className='heropage_HeroPortrait_22nJ5'
                      autoPlay
                      preload='auto'
                      loop
                      playsInline
                      poster='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_shadow_wave.jpg'
                    >
                      <source
                        type='video/webm'
                        src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_shadow_wave.webm'
                      />
                      <source
                        type='video/mp4'
                        src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_shadow_wave.mp4'
                      />
                    </video>
                  </div>
                  <div className='heropage_Description_10lc5'>
                    <div className='heropage_TooltipTitle_oRzqV'>Shadow Wave </div>
                    <div className='heropage_TooltipDescription_1GUxa'>
                      Sends out a bolt of power that arcs between allies, healing them while damaging any enemy units
                      standing nearby. Dazzle is always healed by Shadow Wave.{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='heropage_TopAbilityContainer_3ty-o'>
              <img
                className='heropage_AbilitySelectable_3Chop'
                src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_bad_juju.png'
              />
              <div className='heropage_AbilityTooltip_1ALRl'>
                <div className='heropage_TooltipBody_3Asci'>
                  <div className='heropage_Video_1fH3A'>
                    <video
                      className='heropage_HeroPortrait_22nJ5'
                      autoPlay
                      preload='auto'
                      loop
                      playsInline
                      poster='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_bad_juju.jpg'
                    >
                      <source
                        type='video/webm'
                        src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_bad_juju.webm'
                      />
                      <source
                        type='video/mp4'
                        src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_bad_juju.mp4'
                      />
                    </video>
                  </div>
                  <div className='heropage_Description_10lc5'>
                    <div className='heropage_TooltipTitle_oRzqV'>Bad Juju </div>
                    <div className='heropage_TooltipDescription_1GUxa'>
                      Whenever a Unit is affected by Dazzle's spells they temporarily gain/lose armor.
                      <br /> The spell can be activated by spending health to decrease the remaining cooldown of all
                      other abilities and items. Casting Bad Juju temporarily increases its health cost.{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Attribute attribute={data?.attribute[0]} />
      <Ability />
    </div>
  )
}
