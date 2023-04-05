import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NetflixFooter from './components/NetflixFooter';
import NetflixMain from './components/NetflixMain';
import NetflixNavbar from './components/NetflixNavbar';
// import SettingsPage from './SettingsPage';
// import ProfilePage from './components/ProfilePage';

function App() {
	return (
		<div className="App">
			<NetflixNavbar />
			{/* <ProfilePage /> */}
			{/* <SettingsPage /> */}
			<NetflixMain />
			<NetflixFooter />
		</div>
	);
}

export default App;
