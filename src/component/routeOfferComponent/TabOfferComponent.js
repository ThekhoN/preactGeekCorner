import {h, render} from 'preact'
import OfferLiUnit from '../OfferLiUnit'

const TabOfferComponent = ({data}) => {
    //console.log('data in this RouteOfferComponent: ', data);
    return (<div className='OfferWrapper offerThemeStyles responsiveFontWrapper responsiveLayoutWrapper'>
      <ul>
        {
          data.map((thisOfferObj, i) => (<OfferLiUnit item={thisOfferObj} i={i}/>))
        }
      </ul>
    </div>)
}

export default TabOfferComponent
