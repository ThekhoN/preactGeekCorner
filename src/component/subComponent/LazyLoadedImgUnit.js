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
        'background-image': 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzAgMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNERUREREQiIGQ9Ik02LjgsMjcuNGMwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2gxMS4xYzAuNiwwLDAuOS0wLjIsMS4zLTAuN2w4LjQtMTAuOGMwLjItMC4yLDAtMC42LTAuMy0wLjZIMTUuMWMtMC42LDAtMC45LTAuMi0xLjItMC43TDcuMSwzLjVDNi45LDMuMiw2LjUsMy4zLDYuNCwzLjZMMS4yLDE2LjJjLTAuMiwwLjYtMC4yLDAuOSwwLjEsMS41TDYuOCwyNy40eiBNMjAuOCwxMy40YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDYuNWMwLjMsMCwwLjYtMC40LDAuNC0wLjdMMjIuNywyLjZjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43SDkuMWMtMC4zLDAtMC42LDAuNC0wLjQsMC43bDMuMiw1LjZjMC4zLDAuNSwwLjYsMC43LDEuMiwwLjdoNS4xTDIwLjgsMTMuNHoiLz48L3N2Zz4=)',
        'background-size': '36% 36%',
        'background-repeat': 'no-repeat',
        'background-color': 'transparent',
        'background-position': 'center'
      }
    }
    this.onLoaded = this.onLoaded.bind(this)
  }
  onLoaded () {
      this.setState({ style: {
        opacity: 1,
        background: 'transparent'
      }})
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
