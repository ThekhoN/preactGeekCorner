import {h, Component} from 'preact';
import {Lazy} from 'react-lazy'

/*
function imageHadLoaded(e) {
  //console.log('img has loaded. . .');

  //console.log('this: ', this);
  this.className.replace('reactLazyLoadSpan', '');
  //this.className.classList.remove('reactLazyLoadSpan')
  //console.log('updated this: ', this);
  //console.log('this: ', this.children.attributes.className);
  const className = this.children.attributes.className
  const updatedClassName = className.replace('preLazyLoad', '');
  this.children.attributes.className = updatedClassName
}
*/

/*
const LazyLoadedImgUnit = ({offerImageUrl, offerName, lazyLoadClassNameSpan, lazyLoadClassNameConstrainSize}) => {
  return (<Lazy
    onLoad={function () {
      //this.className.replace('reactLazyLoadSpan', 'motherfucker')
      //console.log('loaded. . .');
    }}
    cushion={100}
    nodeName="span"
    className={`${lazyLoadClassNameSpan} ${lazyLoadClassNameConstrainSize}`}>
        <img
          className='offerUnit_img OfferImg preLazyLoad reactLazyLoadSpan__image'
          src={offerImageUrl}
          alt={offerName} />
    </Lazy>
)}
*/


class LazyLoadedImgUnit extends Component {
  constructor(props){
    super(props)
    this.state = {
      style: {
        opacity: 0.6,
        backgroundColor: '#f2f2f2',
        display: 'block'
      }
    }
    this.onLoaded = this.onLoaded.bind(this)
  }
  onLoaded () {
      ////console.log('Load ' + this.props.src + ' complete', new Date())
      //console.log('this.state.style: ', this.state.style);
      //console.log('loaded 999');
      this.setState({ style: {
        opacity: 1,
        backgroundColor: 'transparent'
      }}, function () {
        //console.log('updated state.style: ', this.state.style);
      })
  }
  render () {
    //const style = this.state;
    ////console.log('style: ', style);
    const {offerImageUrl, offerName, lazyLoadClassNameSpan, lazyLoadClassNameConstrainSize} = this.props
      return (<span className='lazyLoadSpanWrapper' style={this.state.style}>
        <Lazy
        cushion={100}
        onLoad={this.onLoaded}
        nodeName="span"
        className={`${lazyLoadClassNameSpan} ${lazyLoadClassNameConstrainSize}`}>
            <img
              className='offerUnit_img OfferImg preLazyLoad reactLazyLoadSpan__image'
              src={offerImageUrl}
              alt={offerName} />
        </Lazy></span>
    )
  }
}




export default LazyLoadedImgUnit;
