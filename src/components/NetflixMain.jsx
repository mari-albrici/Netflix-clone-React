import { Component } from 'react';
import NetflixHomeCarousel from './NetflixHomeCarousel';

class NetflixMain extends Component {
	state = {
		movies: [],
	};
	render() {
		return (
			<main className="container-fluid bg-primary px-4">
				<div className="container-fluid py-4">
					<h3 className="fs-2 text-info pb-3">Harry Potter</h3>
					<NetflixHomeCarousel />
				</div>

				{/* <div class="container-fluid py-">
					<h3 class="fs-2 text-info pb-3">Harry Potter</h3>
					<NetflixHomeCarousel />
				</div>

				<div class="container-fluid py-">
					<h3 class="fs-2 text-info pb-3">Lord of the Rings</h3>
					<NetflixHomeCarousel />
				</div> */}
			</main>
		);
	}
}

export default NetflixMain;
