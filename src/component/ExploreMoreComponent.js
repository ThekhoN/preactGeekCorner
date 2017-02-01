import {h} from 'preact';
import {HeroContainer, ExploreMoreContainer} from './exploreMoreSubComponent/index'

const ExploreMoreComponent = ({heroData, offerData, float}) => {
  //console.log('heroData: ', heroData);
  //console.log('offerData: ', offerData);
  return (<div className='fullWidthWrapper'>
      <HeroContainer data={heroData} float={float}/>
      <ExploreMoreContainer data={offerData} float={float}/>
    </div>)
}

export default ExploreMoreComponent

/*
return (<div className='fullWidthWrapper'>
    <HeroContainer data={heroData}/>
    <ExploreMoreContainer data={offerData}/>
  </div>)
*/
