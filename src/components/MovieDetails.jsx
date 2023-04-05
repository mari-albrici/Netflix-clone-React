import { Card, ListGroup, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState([]);
	const [movieComments, setMovieComments] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const params = useParams();
	console.log('PARAMS:', params);

	useEffect(() => {
		fetchMovieDetails();
		fetchComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchMovieDetails = async () => {
		try {
			const response = await fetch('http://www.omdbapi.com/?apikey=b8fd9fc&i=' + params.movieID);
			if (response.ok) {
				const data = await response.json();
				setMovieDetails(data);
				console.log(movieDetails);
			} else {
				console.log('errore nel recupero dati');
			}
		} catch (error) {
			console.log(error);
			setError(error);
			setErrorMsg(errorMsg);
		}
	};

	const fetchComments = async () => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + params.movieID, {
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGNkYWY4MWI0MjAwMTM5YjI3YjgiLCJpYXQiOjE2ODA2OTk4MDEsImV4cCI6MTY4MTkwOTQwMX0.QYxakebGL9ZQ8OteYx-AHq_k9nxYe96Zq-se5dT4VgI',
				},
			});
			if (response.ok) {
				const data = await response.json();
				setMovieComments(data);
				console.log(movieComments);
			} else {
				console.log('errore nel recupero dei dati');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Card key={movieDetails.imbdId}>
			<Card.Img variant="top" src={movieDetails.Poster} className="img-fluid" />
			<Card.Body>
				<Card.Title>{movieDetails.Title}</Card.Title>
				<Card.Text>{movieDetails.Plot}</Card.Text>
				<Card.Title>COMMENTS:</Card.Title>
				{movieComments.map((comment) => (
					<Card>
						<ListGroup variant="flush" className="d-flex">
							<ListGroup.Item>
								<p className="text-muted">{comment.author}</p>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center">
								<Badge className="bg-dark">{comment.rate}</Badge> <p>{comment.comment}</p>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				))}
			</Card.Body>
		</Card>
	);
};

export default MovieDetails;
