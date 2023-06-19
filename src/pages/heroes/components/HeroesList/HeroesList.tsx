import { detailHero, useGetheroesQuery } from 'pages/heroes/Heroes.service'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HeroesList() {
   const [keyword, setkeyword] = useState('')
  //  const [filter, setFilter] = useState('')
  const { data, isFetching } = useGetheroesQuery({keyword})
  // const dispatch = useDispatch()
  // const handledetail=(id: string | any)=>{
  //   dispatch(detailHero(id))
  // }

  return (
    <div
      className='herogridpage_HeroGrid_D36V-'
      style={{
        backgroundImage:
          'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg")'
      }}
    >
      <div className='herogridpage_Header_2e6So aos-init aos-animate' data-aos='fade-in' data-aos-duration={1000}>
        <div className='herogridpage_Trapezoid_3Rwf-' />
        <div className='herogridpage_TitleText_2sbq3'>Choose Your Hero</div>
        <div className='herogridpage_SubtitleText_Q3COY'>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly
          diverse. Unleash incredible abilities and devastating ultimates on your way to victory.
        </div>
      </div>
      <div className='herogridpage_FilterContainer_2dEVd'>
        <div className='herogridpage_FilterLabel_1Mwn_'>Filter Heroes</div>
        <div className='herogridpage_SpecificFilterContainer_30qnj'>
          <div className='herogridpage_SelectorLabel_1Y7hg'>Attribute</div>
          <div
            
           
            className='herogridpage_Filter_N74aa'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png")'
            }}
          />
          <div
            className='herogridpage_Filter_N74aa'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png")'
            }}
          />
          <div
            className='herogridpage_Filter_N74aa'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png")'
            }}
          />
          <div
            className='herogridpage_Filter_N74aa'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png")'
            }}
          />
        </div>
        <div className='herogridpage_SpecificFilterContainer_30qnj'>
          <div className='herogridpage_SelectorLabel_1Y7hg'>Complexity</div>
          <div
            className='herogridpage_Filter_N74aa'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png")'
            }}
          />
          <div
            className='herogridpage_Filter_N74aa'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png")'
            }}
          />
          <div
            className='herogridpage_Filter_N74aa'
            style={{
              backgroundImage:
                'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png")'
            }}
          />
        </div>
        <div className='herogridpage_SearchBarContainer_2P5Fc'>
          <div className='herogridpage_SearchBar_2paN1'>
            <div
              className='herogridpage_MagnifyingGlass_3TNwr'
              style={{
                backgroundImage:
                  'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/search.svg")'
              }}
            />
            <form>
            <input onChange={(event) => setkeyword(event.target.value)} type='text' defaultValue='' />
            </form>
          </div>
        </div>
      </div>

      <div className='herogridpage_StateLoading_2S5Ce'>Loading...</div>

      <div className='herogridpage_NoHeroes_byzyn'>No Heroes match your filter</div>

      <div className='herogridpage_GridList_3LrTP' style={{ height: 3590 }}>
        {!isFetching &&
          data?.map((hero,index) => (
            <Link to={`/heroes/${hero.id}`}  >
               <a key={hero.id}
        className='herogridpage_HeroIcon_7szOn'
        style={{
          backgroundImage:
          `url(${hero.backgroundImg})`,
          left: `calc(0px + (${index % 5} * ((100% - 225px) / 4)))`,
          top: `calc(${Math.floor(index / 5)} * (142px ))`,
        }}
        
      >
        <div className='herogridpage_HeroNameContainer_3ldbS'>
          <img
            src={hero.styleImg}
            className='herogridpage_PrimaryStatIcon_12etd'
          />
          <div className='herogridpage_HeroName_3N-bh'>{hero.name}</div>
        </div>
        <div className='herogridpage_FadeContainer_Abboq'>
          <div className='fade_FadeContainer_1JDI3 fade_Bottom_1NXAh'>
            <div
              className='fade_Fade_1keus'
              style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%)'
              }}
            />
          </div>
        </div>
      </a>
            </Link>
       
          ))} 
       
      
      </div>
    </div>
  )
}
