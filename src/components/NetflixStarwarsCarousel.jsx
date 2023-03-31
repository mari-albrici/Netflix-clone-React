import { Component } from 'react';
import { Row, Col, Carousel, Spinner } from 'react-bootstrap';

class NetflixStarwarsCarousel extends Component {
	state = {
		isLoading: true,
		movies: [],
	};

	async componentDidMount() {
		try {
			const response = await fetch('http://www.omdbapi.com/?apikey=b8fd9fc&s=star%20wars');

			if (response.ok) {
				const data = await response.json();
				this.setState({ movies: data.Search });
				this.setState({ isLoading: false });
			} else {
				console.log('error');
				this.setState({ isLoading: false });
			}
		} catch (error) {
			alert(error);
			this.setState({ isLoading: false });
		}
	}

	render() {
		return (
			<Carousel>
				<Carousel.Item interval={3000}>
					<Row>
						{this.state.isLoading && !this.state.error && (
							<Spinner animation="border" role="status" className="text-light">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						)}
						{this.state.movies.map((movie) => (
							<Col md={2} className="overflow-x-scroll" key={movie.imdbID}>
								<img src={movie.Poster} alt={movie.title} />
							</Col>
						))}
					</Row>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default NetflixStarwarsCarousel;
