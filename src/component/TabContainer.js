import {h, Component, render} from 'preact'

//custom Tabs
import {TabNavUnit, TabList, Tab, TabPanel} from './CustomTabComponent'

import Laptop from './routeOfferComponent/Laptop'
import Monitor from './routeOfferComponent/Monitor'
import GamingConsole from './routeOfferComponent/GamingConsole'
import HardDrive from './routeOfferComponent/HardDrive'
const tabNames = ['Laptops', 'Monitors', 'Gaming Consoles', 'Hard drives']

//import TabNavUnit from './tabNavComponent/TabNavUnit'
import {ActiveStyleElement, LaptopIcon, MonitorIcon, GamingConsoleIcon, HardDriveIcon} from './iconComponent/icons'
import CSSTransitionGroup from 'preact-css-transition-group'

class TabContainer extends Component {
	constructor(props){
    super(props)
    this.state = {
      active: 0
    }
    this.handleOnClickTab = this.handleOnClickTab.bind(this)
  }
  handleOnClickTab(i){
    const {active} = this.state
    const index = parseInt(i.index)
    //console.log('passed i: ', i.index)
    if(parseInt(index) === active){
      //console.error('do not change state. . .')
      return;
    }
    else {
      this.setState({
        active: index
      }, function(){
        //console.info('updated state active: ', this.state.active)
      })
    }
  }
  render(){
    const {active} = this.state
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
		//{this.state.active === this.props.index && <ActiveStyleElement/>}
    return(<div className='preactTab'>
        <TabList>
          <Tab index='0' active={active} onClickTab={(e)=>{this.handleOnClickTab(e)}}>
						<CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {this.state.active === 0 && <ActiveStyleElement/>}
            </CSSTransitionGroup>
						<TabNavUnit name='Laptops'>
							<LaptopIcon/>
						</TabNavUnit>
					</Tab>
          <Tab index='1' active={active} onClickTab={(e)=>{this.handleOnClickTab(e)}}>
						<CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {this.state.active === 1 && <ActiveStyleElement/>}
            </CSSTransitionGroup>
						<TabNavUnit name='Monitors'>
							<MonitorIcon/>
						</TabNavUnit>
					</Tab>
          <Tab index='2' active={active} onClickTab={(e)=>{this.handleOnClickTab(e)}}>
						<CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {this.state.active === 2 && <ActiveStyleElement/>}
            </CSSTransitionGroup>
						<TabNavUnit name='Gaming Consoles'>
							<GamingConsoleIcon/>
						</TabNavUnit>
					</Tab>
					<Tab index='3' active={active} onClickTab={(e)=>{this.handleOnClickTab(e)}}>
						<CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {this.state.active === 3 && <ActiveStyleElement/>}
            </CSSTransitionGroup>
						<TabNavUnit name='Hard Drives'>
							<HardDriveIcon/>
						</TabNavUnit>
					</Tab>
        </TabList>
        <TabPanel index='0' active={active}>
          <Laptop data={laptopData}/>
        </TabPanel>
        <TabPanel index='1' active={active}>
          <Monitor data={monitorData}/>
        </TabPanel>
        <TabPanel index='2' active={active}>
          <GamingConsole data={gamingConsoleData}/>
        </TabPanel>
				<TabPanel index='3' active={active}>
          <HardDrive data={hardDriveData}/>
        </TabPanel>
      </div>)
  }
}

/*
class TabContainer extends Component {

	handleSelect(index, last) {
    //console.log('Selected tab: ' + index + ', Last tab: ' + last);
		//console.log('TabList: ', TabList);
  }

	render(){
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
		return (<Tabs onSelect={this.handleSelect}>
				<TabList>
					<Tab>
						<TabNavUnit name='Laptops'>
							<LaptopIcon/>
						</TabNavUnit>
					</Tab>
          <Tab>
						<TabNavUnit name='Monitors'>
							<LaptopIcon/>
						</TabNavUnit>
					</Tab>
					<Tab>
          	<TabNavUnit name='Gaming Consoles'>
							<LaptopIcon/>
						</TabNavUnit>
					</Tab>
					<Tab>
						<TabNavUnit name='Hard Drives'>
							<LaptopIcon/>
						</TabNavUnit>
					</Tab>
				</TabList>
					<TabPanel>
	          <Laptop data={laptopData}/>
	        </TabPanel>
	        <TabPanel>
	          <Monitor data={monitorData}/>
	        </TabPanel>
	        <TabPanel>
	          <GamingConsole data={gamingConsoleData}/>
	        </TabPanel>
					<TabPanel>
	          <HardDrive data={hardDriveData}/>
	        </TabPanel>
			</Tabs>)
	}
}
*/



export default TabContainer
