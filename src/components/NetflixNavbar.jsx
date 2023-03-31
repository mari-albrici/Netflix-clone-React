import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';
import logo from '../assets/netflix_logo.png';
import avatar from '../assets/avatar.png';

const NetflixNavbar = () => {
	return (
		<Navbar expande="lg" className="bg-primary">
			<Container fluid className="text-light">
				<Nav.Link className="navbar-brand" href="#">
					<img src={logo} alt="Netflix" height="50px" />
				</Nav.Link>
				<Navbar.Toggle
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				/>

				<div className="collapse navbar-collapse justify-content-between text-light" id="navbarNav">
					<ul className="navbar-nav">
						<li>
							<Nav.Link className="nav-link text-light" aria-current="page" href="#">
								Home
							</Nav.Link>
						</li>
						<li>
							<Nav.Link className="nav-link text-light" href="#">
								Serie TV
							</Nav.Link>
						</li>
						<li>
							<Nav.Link className="nav-link text-light" href="#">
								Film
							</Nav.Link>
						</li>
						<li>
							<Nav.Link className="nav-link text-light">Nuovi e popolari</Nav.Link>
						</li>
						<li>
							<Nav.Link className="nav-link text-light">La mia lista</Nav.Link>
						</li>
						<li>
							<Nav.Link className="nav-link text-light">Sfoglia per lingua</Nav.Link>
						</li>
					</ul>

					<div className="d-flex align-items-center justify-content-end text-light">
						<div className="btn-group">
							<input
								type="text"
								placeholder="Search"
								className="bg-primary text-info border border-1 rounded collapse collapse-horizontal px-3 mx-1"
								id="collapseWidthExample"
							/>
							<Button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseWidthExample"
								aria-expanded="false"
								aria-controls="collapseWidthExample"
							>
								<i className="bi bi-search fs-4"></i>
							</Button>
						</div>
						<span className="navbar-text text-info d-none d-lg-block">Bambini</span>
						<div className="btn-group d-none d-lg-block" id="notifications">
							<Button type="button" className="btn text-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								<i className="bi bi-bell fs-4"></i>
							</Button>
							<ul className="dropdown-menu dropdown-menu-dark bg-primary dropdown-menu-start dropdown-menu-lg-end bg-opacity-50">
								<li>
									<NavDropdown title="Dropdown" id="nav-dropdown">
										<NavDropdown.Item eventKey="4.1">Gestisci i profili</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.2">Traferisci profilo</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.3">Account</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.3">Centro Assistenza</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item eventKey="4.4">Esci da Netflix</NavDropdown.Item>
									</NavDropdown>
								</li>
							</ul>
						</div>
						<NavDropdown title={avatar} id="nav-dropdown" bg-dark>
							<NavDropdown.Item eventKey="4.1">Gestisci i profili</NavDropdown.Item>
							<NavDropdown.Item eventKey="4.2">Traferisci profilo</NavDropdown.Item>
							<NavDropdown.Item eventKey="4.3">Account</NavDropdown.Item>
							<NavDropdown.Item eventKey="4.3">Centro Assistenza</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey="4.4">Esci da Netflix</NavDropdown.Item>
						</NavDropdown>
					</div>
				</div>
			</Container>
		</Navbar>
	);
};

export default NetflixNavbar;
