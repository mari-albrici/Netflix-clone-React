import { Row, Col, Container } from 'react-bootstrap';

const NetflixFooter = () => {
	return (
		<footer className="bg-primary pt-5">
			<Container className=" bg-primary">
				<Row className="fs-3 text-warning">
					<Col>
						<i className="bi bi-facebook"></i>
					</Col>
					<Col>
						<i className="bi bi-instagram"></i>
					</Col>
					<Col>
						<i className="bi bi-twitter"></i>
					</Col>
					<Col>
						<i className="bi bi-youtube"></i>
					</Col>
				</Row>
				<Row className="pt-5 text-warning">
					<Col>
						<p>Audio and Subtitles</p>
						<p>Media Center</p>
						<p>Privacy</p>
						<p>Contact us</p>
					</Col>
					<Col>
						<p>Audio Description</p>
						<p>Investor relations</p>
						<p>Legal Notices</p>
					</Col>
					<Col>
						<p>Help Center</p>
						<p>Jobs</p>
						<p>Cookie preferences</p>
					</Col>
					<Col>
						<p>Gift Cards</p>
						<p>Terms of Use</p>
						<p>Corporate Information</p>
					</Col>
				</Row>
				<Row className="pt-5">
					<Col>
						<button className="btn btn-dark bg-primary text-warning rounded-0">Service Code</button>
					</Col>
				</Row>
				<Row className="py-5">
					<Col className="text-warning">
						<p>&copy; 1997-2019 Netflix, Inc. i-0d00fcda2fdfc0de</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default NetflixFooter;
