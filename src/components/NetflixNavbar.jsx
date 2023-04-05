import { Navbar, Nav, Button, Dropdown, Container } from 'react-bootstrap';
import logo from '../assets/netflix_logo.png';
import avatar from '../assets/avatar.png';
import { Link, useLocation } from 'react-router-dom';

const NetflixNavbar = () => {
	const location = useLocation();

	return (
		<Navbar expand="lg" className="bg-primary">
			<Container fluid className="text-light">
				<Link className={`nav-link ${location.pathname === '/' ? 'active fw-bold text-muted' : ''}`} to="/">
					<img src={logo} alt="Netflix" height="50px" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav " />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
					<Nav className="navbar-nav">
						<Link className={`nav-link ${location.pathname === '/' ? 'active fw-bold text-muted' : 'text-light'}`} to="/" aria-current="page">
							Home
						</Link>
						<Link className={`nav-link ${location.pathname === '/tv-shows' ? 'active fw-bold text-muted' : 'text-light'}`} to="/tv-shows">
							TV Series
						</Link>
						<Link className="nav-link text-light" href="#">
							Movies
						</Link>
						<Link className="nav-link text-light">Recently Added</Link>
						<Link className="nav-link text-light">My list</Link>
					</Nav>

					<div className="d-flex align-items-center text-light">
						<div className="btn-group">
							<Button>
								<i className="bi bi-search fs-4"></i>
							</Button>
						</div>
						<span className="navbar-text text-info d-none d-lg-block">KIDS</span>
						<div className="btn-group d-none d-lg-block" id="notifications">
							<Button>
								<i className="bi bi-bell fs-4"></i>
							</Button>
						</div>
						<Dropdown className="btn-group dropdown" id="dropdownNavbar">
							<Dropdown.Toggle
								type="button"
								className="btn btn-secondary dropdown-toggle bg-dark border-dark"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img src={avatar} width="30" height="30" alt="avatar logo" />
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu-end bg-dark">
								<Dropdown.Item className="text-light dropdownItem" eventKey="4.1">
									<Link className={`nav-link ${location.pathname === '/profile' ? 'active fw-bold text-muted' : 'text-light'}`} to="/profile">
										Gestisci i profili
									</Link>
								</Dropdown.Item>
								<Dropdown.Item className="text-light dropdownItem" eventKey="4.2">
									Traferisci profilo
								</Dropdown.Item>
								<Dropdown.Item className="text-light dropdownItem" eventKey="4.3">
									Account
								</Dropdown.Item>
								<Dropdown.Item className="text-light dropdownItem" eventKey="4.3">
									Centro Assistenza
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item className="text-light dropdownItem" eventKey="4.4">
									Esci da Netflix
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NetflixNavbar;
