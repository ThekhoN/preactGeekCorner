import {h, Component, render} from 'preact'
import {Router} from 'preact-router'
import { Link } from 'preact-router';

import MainContainer from './container/MainContainer';


const Home = () => (<div>
  <h1>Home</h1>
</div>)

const Profile = () => (<div>
  <h1>Profile</h1>
</div>)

export default class App extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div id="app">
				<MainContainer/>
			</div>
		);
	}
}
