import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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

	const fetchComments = async (props) => {
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
			} else {
				console.log('errore nel recupero dei dati');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Card>
			<Card.Img variant="top" src={movieDetails.Poster} />
			<Card.Body>
				<Card.Title>{movieDetails.Title}</Card.Title>
				<Card.Text>{movieDetails.Plot}</Card.Text>
				<Button variant="primary">See comments</Button>
			</Card.Body>
		</Card>
	);
};

export default MovieDetails;
