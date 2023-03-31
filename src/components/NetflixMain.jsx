import { Component } from 'react';
import NetflixHomeCarousel from './NetflixHomeCarousel';
import NetflixLordoftheringsCarousel from './NetflixLordoftheringsCarousel';
import NetflixStarwarsCarousel from './NetflixStarwarsCarousel';

class NetflixMain extends Component {
	state = {};
	render() {
		return (
			<main className="container-fluid bg-primary px-4">
				<div className="container-fluid py-4">
					<h3 className="fs-2 text-info pb-3">Harry Potter</h3>
					<NetflixHomeCarousel />
				</div>
				<div className="container-fluid py-4">
					<h3 className="fs-2 text-info pb-3">Star Wars</h3>
					<NetflixStarwarsCarousel />
				</div>
				<div className="container-fluid py-4">
					<h3 className="fs-2 text-info pb-3">Lord of the Rings</h3>
					<NetflixLordoftheringsCarousel />
				</div>
			</main>
		);
	}
}

export default NetflixMain;
