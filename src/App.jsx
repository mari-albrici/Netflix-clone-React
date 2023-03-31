import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NetflixFooter from './components/NetflixFooter';
import NetflixMain from './components/NetflixMain';
import NetflixNavbar from './components/NetflixNavbar';

function App() {
	return (
		<div className="App">
			<NetflixNavbar />
			<NetflixMain />
			<NetflixFooter />
		</div>
	);
}

export default App;
