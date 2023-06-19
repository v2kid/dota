import { type } from "os"

const roleNames = [
  "Carry",
  "Support",
  "Nuker",
  "Disabler",
  "Jungler",
  "Durable",
  "Escape",
  "Puhser",
  "Initiator"
];

interface AttributeProps {
  attribute: {
    agi_base: number;
    agi_gain: number;
    str_base: number;
    str_gain: number;
    int_base: number;
    int_gain: number;
    max_health: number;
    max_mana: number;
    health_regen: number;
    mana_regen: number;
    role_levels: number[];
    damage_max: number;
    damage_min: number;
    attack_capability: number;
    attack_range: number;
    attack_rate: number;
    armor: number;
    magic_resistance: number;
    movement_speed: number;
    sight_range_day: number;
    sight_range_night: number;
  } | undefined;
}
  


const Attribute: React.FC<AttributeProps> = ({ attribute }) => {

 
  return (
    <div className='heropage_DetailsBarContainer_2v_HD'>
      <div className='heropage_DetailsBar_1UCH6'>
        <div className='heropage_DetailsAttributes_SW4jL'>
          <div className='heropage_TopAttributesSection_3GFuR'>
            <div className='heropage_PortraitContainer_3_e-k'>
              <img
                className='heropage_Portrait_CR-Bb'
                src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png'
              />
              <div className='heropage_HealthBar_D6gmc'>
                <div className='heropage_BarNumberMajor_1KbXK'>{attribute?.max_health}</div>
                <div className='heropage_BarNumberMinor_29Uub'>+{attribute?.health_regen}</div>
              </div>
              <div className='heropage_ManaBar_1aQk6'>
                <div className='heropage_BarNumberMajor_1KbXK'>{attribute?.max_mana}</div>
                <div className='heropage_BarNumberMinor_29Uub'>+{attribute?.mana_regen}</div>
              </div>
            </div>
            <div className='heropage_AttributesContainer_3rZsO'>
              <div className='heropage_SingleAttributeContainer_1Bhn_'>
                <img
                  className='heropage_AttributeIcon_As-Om'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'
                />
                <div className='heropage_AttributeValue_3Gsgg'>{attribute?.str_base}</div>
                <div className='heropage_AttributeGain_DpX1z'>+{attribute?.str_gain}</div>
              </div>
              <div className='heropage_SingleAttributeContainer_1Bhn_'>
                <img
                  className='heropage_AttributeIcon_As-Om'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'
                />
                <div className='heropage_AttributeValue_3Gsgg'>{attribute?.agi_base}</div>
                <div className='heropage_AttributeGain_DpX1z'>+{attribute?.agi_gain}</div>
              </div>
              <div className='heropage_SingleAttributeContainer_1Bhn_'>
                <img
                  className='heropage_AttributeIcon_As-Om'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'
                />
                <div className='heropage_AttributeValue_3Gsgg'>{attribute?.int_base}</div>
                <div className='heropage_AttributeGain_DpX1z'>+{attribute?.agi_gain}</div>
              </div>
            </div>
          </div>
          <div className='heropage_DetailsSectionHeader_2Brpp'>Attributes</div>
        </div>
        <div className='heropage_VerticalSeperator_2zVxY' />
        <div className='heropage_DetailsRoles_2wGXN'>
          <div className='heropage_RolesList_2muZp'>
          {attribute?.role_levels.map((level, index) => (
  <div className="heropage_Role_3zWGy" key={index}>
    <div className="heropage_RoleName_3Fbk3">{roleNames[index]}</div>
    <div className="heropage_BarContainer_28Sbu">
      <div className="heropage_BarBackground_bOoIn" />
      <div
        className="heropage_BarFilled_f7kjD"
        style={{ width: `${(level / 3) * 100}%` }}
      />
    </div>
  </div>
))}
          </div>
          <div className='heropage_DetailsSectionHeader_2Brpp'>Roles</div>
        </div>
        <div className='heropage_VerticalSeperator_2zVxY' />
        <div className='heropage_DetailsStats_22x6X'>
          <div className='heropage_StatsList_3z1y6'>
            <div className='heropage_HeroValuesSection_3ulLB'>
              <div className='heropage_HeroValueTitle_1A9N9'>Attack</div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png'
                />
               {attribute?.damage_min}-{attribute?.damage_max}
              </div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png'
                />
              {attribute?.attack_capability}
              </div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png'
                />
                {attribute?.attack_rate}  
              </div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png'
                />
              {attribute?.attack_range}  {' '}
              </div>
            </div>
            <div className='heropage_HeroValuesSection_3ulLB'>
              <div className='heropage_HeroValueTitle_1A9N9'>Defense</div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png'
                />
               {attribute?.armor}
              </div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png'
                />
              {attribute?.magic_resistance}%
              </div>
            </div>
            <div className='heropage_HeroValuesSection_3ulLB'>
              <div className='heropage_HeroValueTitle_1A9N9'>Mobility</div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png'
                />
                {attribute?.movement_speed}
              </div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png'
                />
                {attribute?.attack_capability}
              </div>
              <div className='heropage_ValueElement_3783T'>
                <img
                  className='heropage_SwordIcon_FY7TW'
                  src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png'
                />
                {attribute?.sight_range_day} / {attribute?.sight_range_night}
              </div>
            </div>
          </div>
          <div className='heropage_DetailsSectionHeader_2Brpp'>Stats</div>
        </div>
      </div>
    </div>
  )
}
export default Attribute