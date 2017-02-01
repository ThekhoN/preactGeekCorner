import {h} from 'preact';
import OfferLink from './subComponent/OfferLink';
import OfferLinkAfterWrap from './subComponent/OfferLinkAfterWrap';
import ImgOfferUnit from './subComponent/ImgOfferUnit';
import OfferNonImgWrap from './subComponent/OfferNonImgWrap';
import TitleOfferUnit from './subComponent/TitleOfferUnit';
import OfferPriceTaglineDiscountWrap from './subComponent/OfferPriceTaglineDiscountWrap';
import OfferRatingWrap from './subComponent/OfferRatingWrap';

import {isISObject} from '../module/ValidateData';

const OfferLiUnit = ({item, i}) => {

  if(isISObject(item.commonMinProductDetailsDTO) || item.pogId){
    if(item.commonMinProductDetailsDTO.priceInfo == null){
        //console.log('discountinued pogId: ', item.pogId);
        return null;
    }
  }

    const eventId = item.eventId;
    let _classNames = '';

    return (<li key={i}>
      <div className='OfferUnitLi'>
        <OfferLink item={item}>
          <OfferLinkAfterWrap>
            <ImgOfferUnit item={item}/>
            <OfferNonImgWrap>
              <TitleOfferUnit item={item}/>
              <OfferPriceTaglineDiscountWrap item={item}/>
              <OfferRatingWrap item={item}/>
            </OfferNonImgWrap>
          </OfferLinkAfterWrap>
        </OfferLink>
      </div>
    </li>)
}

export default OfferLiUnit;
