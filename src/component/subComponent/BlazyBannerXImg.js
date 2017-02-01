import {h} from 'preact';
const BlazyBannerXImg = ({offerImageUrl, offerName}) => {
  return (
  <img
    className="offerUnit_img OfferImg preLazyLoad"
    data-src={offerImageUrl}
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    alt={offerName} />
)}

export default BlazyBannerXImg;
