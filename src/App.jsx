import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NetflixFooter from './components/NetflixFooter';
import NetflixNavbar from './components/NetflixNavbar';
import NetflixHomeCarousel from './components/NetflixHomeCarousel';
import NetflixMain from './components/NetflixMain';
import ProfilePage from './components/ProfilePage';
import MovieDetails from './components/MovieDetails';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NetflixNavbar />
				<Routes>
					<Route path="/" element={<NetflixMain />} />
					<Route path="/tv-shows" element={<NetflixHomeCarousel />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/movie-details/:movieID" element={<MovieDetails />} />
				</Routes>
				<NetflixFooter />
			</BrowserRouter>
		</div>
	);
}

export default App;
