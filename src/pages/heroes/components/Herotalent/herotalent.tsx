import { useGettalentQuery } from "pages/heroes/Heroes.service"

export default function Talent(){
    const {data,isSuccess} = useGettalentQuery(50)
   
    return(
       
      <div className='heropage_TopAbilityContainer_3ty-o'>
        <img className='heropage_AttackTypeIcon_9eyi-' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg' />
        <div className='heropage_AbilityTooltip_1ALRl heropage_Talents_2abeJ'>
          <div className='heropage_TooltipBody_3Asci heropage_Talents_2abeJ'>
            <div className='heropage_TalentContainer_m_wah'>
              <div className='heropage_TalentTitle_2j-WC'>Talent Tree</div>
              <div className='heropage_TalentRow_3BgAv'>
                <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>
                  {data?.Twentyfiveleft}
                </div>
                <div className='heropage_TalentLevelContainer_1OBdY'>
                  <div className='heropage_TalentLevel_1kzau'>25</div>
                </div>
                <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>{data?.Twentyfiveright}</div>
              </div>
              <div className='heropage_TalentRow_3BgAv'>
                <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>{data?.Twentyleft}</div>
                <div className='heropage_TalentLevelContainer_1OBdY'>
                  <div className='heropage_TalentLevel_1kzau'>20</div>
                </div>
                <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>
                {data?.Twentyright}
                </div>
              </div>  
              <div className='heropage_TalentRow_3BgAv'>
                <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>{data?.Fifteenleft}</div>
                <div className='heropage_TalentLevelContainer_1OBdY'>
                  <div className='heropage_TalentLevel_1kzau'>15</div>
                </div>
                <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>{data?.Fifteenright}</div>
              </div>
              <div className='heropage_TalentRow_3BgAv'>
                <div className='heropage_TalentEntry_1SJ4J heropage_Left_1F43S'>{data?.Tenleft}</div>
                <div className='heropage_TalentLevelContainer_1OBdY'>
                  <div className='heropage_TalentLevel_1kzau'>10</div>
                </div>
                <div className='heropage_TalentEntry_1SJ4J heropage_Right_vNURB'>{data?.Tenright}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}