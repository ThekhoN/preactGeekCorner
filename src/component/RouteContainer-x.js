import {h, Component, render} from 'preact'
import {Router, IndexRoute} from 'preact-router'
//import Nav from './navComponent/Nav'

import Laptop from './routeOfferComponent/Laptop'
import Monitor from './routeOfferComponent/Monitor'
import GamingConsole from './routeOfferComponent/GamingConsole'
import HardDrive from './routeOfferComponent/HardDrive'

/*
const All = ({data}) => {
	const laptopData = data.filter(offer=>(
		offer.eventId === 'DealofDayOffers'
	))
	const monitorData = data.filter(offer=>(
		offer.eventId === 'superDod'
	))
	const gamingConsoleData = data.filter(offer=>(
		offer.eventId === 'DealofDayOffers'
	))
	const hardDriveData = data.filter(offer=>(
		offer.eventId === 'superDod'
	))
	return (<div>
		<Laptop data={laptopData}/>
		<Monitor data={monitorData}/>
		<GamingConsole data={gamingConsoleData}/>
		<HardDrive data={hardDriveData}/>
	</div>)
}
<All path='/' data={data}/>
*/

class RouteContainer extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	 constructor(props){
		 super(props)
		 this.state = {
			 data: this.props.data
		 }
	 }
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {

		const {data} = this.props
		const laptopData = data.filter(offer=>(
			offer.eventId === 'LAPTOPS'
		))
		const monitorData = data.filter(offer=>(
			offer.eventId === 'MONITORS'
		))
		const gamingConsoleData = data.filter(offer=>(
			offer.eventId === 'GAMINGCONSOLES'
		))
		const hardDriveData = data.filter(offer=>(
			offer.eventId === 'HARDDRIVES'
		))

		return (
			<div className="RouteContainerWrapper">
				<Nav/>
				<Router onChange={this.handleRoute}>
					<Laptop path='/' data={laptopData}/>
					<Monitor path='/monitors' data={monitorData}/>
					<GamingConsole path='/gamingconsoles' data={gamingConsoleData}/>
					<HardDrive path='/harddrives' data={hardDriveData}/>
				</Router>
			</div>
		);
	}
}

export default RouteContainer
