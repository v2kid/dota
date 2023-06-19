export default function Ability() {
  return (
    <div
      className='heropage_UnderBarSection_HGabF'
      style={{
        backgroundImage:
          'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly.png")'
      }}
    >
      <div className='heropage_AbilityDetailsSection_3w9pO'>
        <div className='heropage_AbilityDetailsHeader_1cJ_X'>Ability Details:</div>
        <div className='heropage_HeroAbilities_1yoiZ'>
          <div className='heropage_AbilityLeft_2xdeo'>
            <div className='heropage_VideoContainer_3XHJ5'>
              <div className='heropage_FadeUp_3xTko' />
              <video
                className='heropage_HeroPortrait_22nJ5'
                autoPlay
                preload='auto'
                loop
                playsInline
                poster='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_poison_touch.jpg'
              >
                <source
                  type='video/webm'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_poison_touch.webm'
                />
                <source
                  type='video/mp4'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dazzle/dazzle_poison_touch.mp4'
                />
              </video>
            </div>
            <div className='heropage_AbilitySelector_1vjw5'>
              <div
                className='heropage_AbilitySelectable_3Chop'
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_poison_touch.png")'
                }}
              />
              <div
                className='heropage_AbilitySelectable_3Chop heropage_NotSelected_3SHwx'
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_shallow_grave.png")'
                }}
              />
              <div
                className='heropage_AbilitySelectable_3Chop heropage_NotSelected_3SHwx'
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_shadow_wave.png")'
                }}
              />
              <div
                className='heropage_AbilitySelectable_3Chop heropage_NotSelected_3SHwx'
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_bad_juju.png")'
                }}
              />
              <div
                className='heropage_AbilitySelectable_3Chop heropage_Shard_3L7eN heropage_NotSelected_3SHwx'
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_poison_touch.png")'
                }}
              >
                <div
                  className='heropage_SubIcon_1WZR4'
                  style={{
                    backgroundImage:
                      'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/aghs_shard.png")'
                  }}
                />
              </div>
              <div
                className='heropage_AbilitySelectable_3Chop heropage_Scepter_KqiVD heropage_NotSelected_3SHwx'
                style={{
                  backgroundImage:
                    'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_shadow_wave.png")'
                }}
              >
                <div
                  className='heropage_SubIcon_1WZR4'
                  style={{
                    backgroundImage:
                      'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/stats/aghs_scepter.png")'
                  }}
                />
              </div>
            </div>
          </div>
          <div className='heropage_AbilityRight_oyGg-'>
            <div className='heropage_AbilityInfoContainer_3y3LG'>
              <div className='heropage_AbilityMain_2dTHH'>
                <img
                  className='heropage_AbilityImage_171zq'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_poison_touch.png'
                />
                <div className='heropage_AbilityInfo_33jo0'>
                  <div className='heropage_AbilityName_1rBGH'>Poison Touch</div>
                  <div className='heropage_AbilityDesc_CjmI9'>
                    Releases a cone of poison that strikes multiple enemy units. Deals damage over time and slows the
                    targets. Anytime the targets get attacked by Dazzle, the debuff duration is refreshed and slow is
                    increased.
                  </div>
                </div>
              </div>
              <div className='heropage_AbilityDetails_2lY3B'>
                <div className='heropage_GenericValues_2dsmb'>
                  <div className='heropage_Column_3kwoP'>
                    <div className='heropage_DetailsValues_25_Ud'>
                      <div className='heropage_ValueElement_3783T'>
                        Ability:<div className='heropage_ValueValue_1gAlz'>Unit Target</div>
                      </div>
                      <div className='heropage_ValueElement_3783T'>
                        Affects:<div className='heropage_ValueValue_1gAlz'>Enemy Units</div>
                      </div>
                      <div className='heropage_ValueElement_3783T'>
                        Damage Type:
                        <div className='heropage_ValueValue_1gAlz'>
                          <span style={{ color: 'rgb(255, 0, 0)' }}>Physical</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='heropage_Column_3kwoP'>
                    <div className='heropage_DetailsValues_25_Ud'>
                      <div className='heropage_ValueElement_3783T'>
                        Pierces Spell Immunity:<div className='heropage_ValueValue_1gAlz'>No</div>
                      </div>
                      <div className='heropage_ValueElement_3783T'>
                        Dispellable:<div className='heropage_ValueValue_1gAlz'>Yes</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='heropage_SpecificValues_1Sda4'>
                  <div className='heropage_SpecialElement_-imZK'>
                    TARGETS:<div className='heropage_SpecialValue_2QMsh'>2.0 / 4.0 / 6.0 / 8.0</div>
                  </div>
                  <div className='heropage_SpecialElement_-imZK'>
                    DAMAGE PER SECOND:<div className='heropage_SpecialValue_2QMsh'>16.0 / 28.0 / 40.0 / 52.0</div>
                  </div>
                  <div className='heropage_SpecialElement_-imZK'>
                    SLOW:<div className='heropage_SpecialValue_2QMsh'>-16.0% / -18.0% / -20.0% / -22.0%</div>
                  </div>
                  <div className='heropage_SpecialElement_-imZK'>
                    DURATION:<div className='heropage_SpecialValue_2QMsh'>5.0 / 6.0 / 7.0 / 8.0</div>
                  </div>
                  <div className='heropage_SpecialElement_-imZK'>
                    BONUS SLOW PER HIT:<div className='heropage_SpecialValue_2QMsh'>-2.0% / -2.5% / -3.0% / -3.5%</div>
                  </div>
                  <div className='heropage_SpecialElement_-imZK'>
                    CAST RANGE:<div className='heropage_SpecialValue_2QMsh'>500.0 / 600.0 / 700.0 / 800.0</div>
                  </div>
                </div>
                <div className='heropage_BottomValues_G9AF4'>
                  <div className='heropage_CooldownContainer_1Nfs9'>
                    <div
                      className='heropage_CooldownIcon_1AQHj'
                      style={{
                        backgroundImage:
                          'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png")'
                      }}
                    />
                    <div className='heropage_CooldownText_22XOo'>27.0 / 23.0 / 19.0 / 15.0</div>
                  </div>
                  <div className='heropage_ManaContainer_2KgFd'>
                    <div className='heropage_ManaIcon_1Cj_r' />
                    <div className='heropage_ManaText_Y2InY'>125 / 130 / 135 / 140</div>
                  </div>
                </div>
                <div className='heropage_Lore_1FdIS'>
                  One of the few Dezun rites used for offensive purposes, the paralytic enchantment often proves useful.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='heropage_BottomSection_kmUD-'>
        <a
          className='heropage_BottomSectionHero_1mdsq heropage_Left_1F43S'
          href='/hero/dawnbreaker'
          style={{
            backgroundImage:
              'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png")'
          }}
        >
          <img
            className='heropage_HeroPortrait_22nJ5'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/dawnbreaker.png'
          />
          <div className='heropage_HeroLabels_1vYyT'>
            <div className='heropage_TopHeader_3iI6a'>Previous Hero</div>
            <div className='heropage_Name_2xP5N'>Dawnbreaker</div>
            <div className='heropage_Details_1ryhQ'>
              <img
                src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
                className='heropage_PrimaryStatIcon_1A3VD'
              />
              <div className='heropage_AttackType_3WSEl'>Melee</div>
            </div>
          </div>
        </a>
        <a className='heropage_AllHeroesContainer_V97iB' href='/heroes'>
          <div className='heropage_Boxes_yK8h8'>
            <div className='heropage_Box_1SR12' />
            <div className='heropage_Box_1SR12' />
            <div className='heropage_Box_1SR12' />
            <div className='heropage_Box_1SR12' />
            <div className='heropage_Box_1SR12' />
            <div className='heropage_Box_1SR12' />
          </div>
          <div className='heropage_AllHeroesLabel_3X52h'>All Heroes </div>
        </a>
        <a
          className='heropage_BottomSectionHero_1mdsq'
          href='/hero/deathprophet'
          style={{
            backgroundImage:
              'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png")'
          }}
        >
          <img
            className='heropage_HeroPortrait_22nJ5'
            src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/death_prophet.png'
          />
          <div className='heropage_HeroLabels_1vYyT'>
            <div className='heropage_TopHeader_3iI6a'>Next Hero</div>
            <div className='heropage_Name_2xP5N'>Death Prophet</div>
            <div className='heropage_Details_1ryhQ'>
              <img
                src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
                className='heropage_PrimaryStatIcon_1A3VD'
              />
              <div className='heropage_AttackType_3WSEl'>Ranged</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
