import {h} from 'preact';
import MobPlatformCheck from '../../module/MobPlatformCheck';
import {isLegit_pogId_item} from '../../module/ValidateData';

import SdPlusLogo from '../subComponent/SdPlusLogo';
//import LazyLoadedImgUnit from './LazyLoadedImgUnit'
import LazyLoadedImgUnit from './LazyLoadedImgUnit'


const ImgOfferUnitRangeNonWrapper = ({item, lazyLoadClassNameSpan, lazyLoadClassNameConstrainSize, lazyLoadImgClassName}) => {

      const offerImageUrl = (MobPlatformCheck() === true) ? item.mobileOfferImageUrl:item.webOfferImageUrl;
      const offerName = item.offerName? item.offerName: '';

      return (<LazyLoadedImgUnit
        offerImageUrl={offerImageUrl}
        offerName={offerName}
        lazyLoadClassNameSpan={lazyLoadClassNameSpan}
        lazyLoadClassNameConstrainSize={lazyLoadClassNameConstrainSize}

      />);
}


export default ImgOfferUnitRangeNonWrapper;
