import {h, Component, render} from 'preact'
//import RouteContainer from '../component/RouteContainer'
import TabContainer from '../component/TabContainer'
import ExploreMoreComponent from '../component/ExploreMoreComponent'
import {ExploreMoreHeader} from '../component/exploreMoreSubComponent/index'
import axios from 'axios'

import {MaxWidthWrapper} from '../component/wrapperComponent/index'

//const url = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=deal-of-the-day&start=0&count=150'
const url = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=test-z999&start=0&count=150'

//check lazy
import {checkElementsInViewport} from 'react-lazy'

import testData from '../component/data'
//console.log('testData: ', testData);




class MainContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [],
			showPlaceholder: true
		}
	}
	componentDidMount(){
		//console.log('componentDidMount. . .');
		axios.get(url)
			.then(function (response){
			const responseData = response.data;
			const data = responseData.genericOfferItems;
			//console.log('data: ', data);
			this.setState(
				{
					data: data,
					showPlaceholder: false
				}
			);
			}.bind(this)).catch((err) => {
				//console.log('fetch error', err);
			});

	}
	render(){
		setTimeout(function () {
			console.log('running checkElementsInViewport. . . ');
			setInterval(checkElementsInViewport, 250)
		}, 100)

		const dataExploreMore = testData.filter(offer => offer.eventId.indexOf('exploreMore') > -1)

		const dataExploreMorePrinters = dataExploreMore.filter(offer=>offer.eventId.indexOf('exploreMorePrinters') > -1)
		const dataExploreMorePrintersHero = dataExploreMorePrinters.filter(offer=>offer.eventId.indexOf('exploreMorePrinters_hero') > -1)
		const dataExploreMorePrintersOffer = dataExploreMorePrinters.filter(offer=>offer.eventId.indexOf('exploreMorePrinters_offer') > -1)

		//console.log('dataExploreMorePrinters: ', dataExploreMorePrinters);

		return (<div className='MainContainerPreactApp'>
			<MaxWidthWrapper maxWidth='1280'>
				<TabContainer data={this.state.data}/>
			</MaxWidthWrapper>
			<div className='fullWidthWrapper'>
				<ExploreMoreHeader/>
				<div className='fullWidthWrapper'>
					<MaxWidthWrapper maxWidth='1280'>
						<ExploreMoreComponent
							float='left'
							heroData={dataExploreMorePrintersHero}
							offerData={dataExploreMorePrintersOffer}/>
						<ExploreMoreComponent
							float='right'
							heroData={dataExploreMorePrintersHero}
							offerData={dataExploreMorePrintersOffer}/>
					</MaxWidthWrapper>
				</div>
			</div>


		</div>)
	}
}

export default MainContainer
