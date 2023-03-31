import { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

class NetflixHomeCarousel extends Component {
	state = {
		movies: [],
	};

	async componentDidMount() {
		try {
			const response = await fetch('http://www.omdbapi.com/?apikey=b8fd9fc&s=harry%20potter');

			if (response.ok) {
				const data = await response.json();
				this.setState({ movies: data.Search });
			} else {
				console.log('error');
			}
		} catch (error) {
			alert(error);
		}
	}

	render() {
		return (
			<Carousel>
				<Carousel.Item interval={3000}>
					<Row className="overflow-x-scroll">
						{this.state.movies.map((movie) => (
							<Col md={2} key={movie.imdbID}>
								<img src={movie.poster} alt={movie.title} />
							</Col>
						))}
					</Row>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default NetflixHomeCarousel;
