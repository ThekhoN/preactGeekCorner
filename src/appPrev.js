import {h, Component, render} from 'preact'
import {Router} from 'preact-router'
import { Link } from 'preact-router';



class Header extends Component {
	render() {
		return (
			<header >
				<h1>Preact App</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
				</nav>
			</header>
		);
	}
}

const Home = () => (<div>
  <h1>Home</h1>
</div>)

const Profile = () => (<div>
  <h1>Profile</h1>
</div>)

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
