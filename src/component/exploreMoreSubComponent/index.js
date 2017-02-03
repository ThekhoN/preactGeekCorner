
//import styles from './style.css'
import {h} from 'preact'
import ImgOfferUnit from '../subComponent/ImgOfferUnit'
import OfferLink from '../subComponent/OfferLink'
import ImgOfferUnitRangeNonWrapper from '../subComponent/ImgOfferUnitRangeNonWrapper'
import {HeaderGradientSvg} from '../iconComponent/icons'


export const ExploreMoreHeader = () => (<div className='exploreMoreCaption'>
<HeaderGradientSvg position='left'/>
  <h2>Explore More</h2>
<HeaderGradientSvg position='right'/>
</div>)
//<HeaderGradientSvg position='left'/>
//<HeaderGradientSvg position='right'/>
const HeroComponent = ({item}) => {
  const offerName = item.offerName? item.offerName: 'Explore More';
  return (<OfferLink item={item}>
      <ImgOfferUnitRangeNonWrapper
        item={item}
        offerName={offerName}
        lazyLoadClassNameSpan='reactLazyLoadSpan'
        lazyLoadClassNameConstrainSize='reactLazyLoadHeroSpan--constrainSize'
       />
    </OfferLink>
  )
}

export const HeroContainer = ({data, float}) => {
  //console.log('HeroContainer data: ', data);
  const align = float === 'left' ? 'right' : 'left'

  const style={
    'float': float,
    'text-align': align
  }

  return (<div className='heroContainer' style={style}>
    {
      data.map(offer => (<HeroComponent item={offer}/>))
    }
  </div>)
}

const ExploreMoreOfferLi = ({data}) => (<li>
  <a href=''>
    <ImgOfferUnit item={data} />
  </a>
</li>)

export const ExploreMoreContainer = ({data, float}) => {
  return (<div className='exploreMoreContainer'>
    <ul className='exploreMoreOfferUl'>
      {
        data.map(offer=>(<ExploreMoreOfferLi data={offer}/>))
      }
    </ul>
  </div>)
}
