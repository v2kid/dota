import { useGettalentQuery } from "pages/heroes/Heroes.service";

type ComponentProps = {
  toggleComponent: () => void;
  story : string | undefined;
  complex: number | undefined
};
const HeroSumary: React.FC<ComponentProps> = ({ toggleComponent , story , complex }) => {
  console.log(complex)
  // const {data} = useGettalentQuery({})
  return(
    <div className='heropage_SummaryContainer_2z0_h'>
    <div className='heropage_Lore_1FdIS'>
      {story}
      <div className='heropage_ShowBio_3x47o' onClick={toggleComponent} >Read Full History</div>
    </div>
    <div>
      <div className='heropage_Title_3V1Jt'>Attack Type</div>
      <div className='heropage_AttackTypeDetail_36eYv'>
      <img className="heropage_AttackTypeIcon_9eyi-" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg" />
        <div className='heropage_Value_3ce-D'>Ranged</div>
      </div>
    </div>
    <div>
      <div className='heropage_Title_3V1Jt'>Complexity</div>
      <div className="heropage_PipContainer_1k-L3">
      <div className={`heropage_DiamondPip_38j6a ${complex === 1 && 'heropage_Filled_2VXnq'}`} />
  <div className={`heropage_DiamondPip_38j6a ${complex === 2 && 'heropage_Filled_2VXnq'}`} />
  <div className={`heropage_DiamondPip_38j6a ${complex === 3 && 'heropage_Filled_2VXnq'}`} />
</div>
    </div>
    {/* <div className='heropage_TopAbilitySelector_3HNRl'>
      <div className='heropage_Title_3V1Jt'>Abilities</div>
      <div className='heropage_AbilityList_x-wl1'>
        <div className='heropage_TopAbilityContainer_3ty-o'>
          <img className='heropage_AttackTypeIcon_9eyi-' src='./Dazzle_files/talents.svg' />
          <div className='heropage_AbilityTooltip_1ALRl heropage_Talents_2abeJ'>
            <div className='heropage_TooltipBody_3Asci heropage_Talents_2abeJ'>
              <div className='heropage_TalentContainer_m_wah'>
                <div className='heropage_TalentTitle_2j-WC'>Talent Tree</div>
                <div className='heropage_TalentRow_3BgAv'>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>
                    +{data?.Twentyfiveleft}
                  </div>
                  <div className='heropage_TalentLevelContainer_1OBdY'>
                    <div className='heropage_TalentLevel_1kzau'>25</div>
                  </div>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>+{data?.Twentyfiveright}</div>
                </div>
                <div className='heropage_TalentRow_3BgAv'>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>+{data?.Twentyleft}</div>
                  <div className='heropage_TalentLevelContainer_1OBdY'>
                    <div className='heropage_TalentLevel_1kzau'>20</div>
                  </div>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>
                    +{data?.Twentyright}
                  </div>
                </div>
                <div className='heropage_TalentRow_3BgAv'>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>
                    +{data?.Fifteenleft}         
                    </div>
                  <div className='heropage_TalentLevelContainer_1OBdY'>
                    <div className='heropage_TalentLevel_1kzau'>15</div>
                  </div>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>
                    +{data?.Fifteenright}
                  </div>
                </div>
                <div className='heropage_TalentRow_3BgAv'>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>+{data?.Tenleft}</div>
                  <div className='heropage_TalentLevelContainer_1OBdY'>
                    <div className='heropage_TalentLevel_1kzau'>10</div>
                  </div>
                  <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>+{data?.Tenright}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='heropage_TopAbilityContainer_3ty-o'>
          <img className='heropage_AbilitySelectable_3Chop' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dazzle_poison_touch.png" />
          <div className='heropage_AbilityTooltip_1ALRl'>
            <div className='heropage_TooltipBody_3Asci'>
              <div className='heropage_Video_1fH3A'>
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
              <div className='heropage_Description_10lc5'>
                <div className='heropage_TooltipTitle_oRzqV'>Poison Touch </div>
                <div className='heropage_TooltipDescription_1GUxa'>
                  Releases a cone of poison that strikes multiple enemy units. Deals damage over time and slows
                  the targets. Anytime the targets get attacked by Dazzle, the debuff duration is refreshed and
                  slow is increased.{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='heropage_TopAbilityContainer_3ty-o'>
          <img className='heropage_AbilitySelectable_3Chop' src='./Dazzle_file/dazzle_pison_touch.png' />
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
          <img className='heropage_AbilitySelectable_3Chop' src='./Dazzle_files/dazzle_shadow_wave.png' />
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
                  Sends out a bolt of power that arcs between allies, healing them while damaging any enemy
                  units standing nearby. Dazzle is always healed by Shadow Wave.{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='heropage_TopAbilityContainer_3ty-o'>
          <img className='heropage_AbilitySelectable_3Chop' src='./Dazzle_files/dazzle_bad_juju.png' />
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
        </div>
      </div>
    </div> */}
  </div>
  )
}


export default HeroSumary