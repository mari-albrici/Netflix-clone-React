import { Component } from 'react';
import avatar from '../assets/avatar.png';
import { Container, Dropdown, Nav, Col, Row, Button } from 'react-bootstrap';

class ProfilePage extends Component {
	render() {
		return (
			<main className="bg-primary py-8">
				<div className="profile container container-fluid px-5 pb-5">
					<h2 className="text-info fs-1 fw-normal">Edit profile</h2>
					<hr className="border border-1" />
					<Container fluid>
						<Row>
							<Col sm={3} md={4} className="text-center">
								<Button className="border border-0 bg-primary position-relative">
									<img src={avatar} alt="avatar" height={190} className="img-fluid " />
									<span className="position-absolute top-85 end-70 translate-middle px-2 py-1 bg-primary border border-light rounded-circle shadow bg-primary rounded">
										<i className="bi bi-pencil text-info" />
										<span className="visually-hidden">Edit</span>
									</span>
								</Button>
							</Col>
							<Col sm={6} md={8}>
								<div className="py-1 d-flex align-items-center">
									<p className="text-info fs-5 bg-warning ps-3 py-1 pe-9">Strive Student</p>
								</div>
								<div className="pt-3">
									<p className="text-info fs-5 pe-3">Language:</p>
									<Dropdown className="btn-group dropdown">
										<Dropdown.Toggle
											type="button"
											className="btn btn-secondary dropdown-toggle bg-dark border-dark"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<p>Italiano</p>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
											<Dropdown.Item>
												<Nav.Link className="dropdown-item" href="#">
													English
												</Nav.Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Nav.Link className="dropdown-item" href="#">
													Français
												</Nav.Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Nav.Link className="dropdown-item" href="#">
													Espanol
												</Nav.Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Nav.Link className="dropdown-item" href="#">
													Deutsche
												</Nav.Link>
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<hr className="border border-1" />
								<div>
									<div className="py-1 d-flex align-items-center">
										<p className="text-info fs-4">Maturity Settings:</p>
									</div>
									<div className="py-1 d-flex align-items-center">
										<p className="text-info bg-warning px-3 fs-5">ALL MATURITY RATINGS</p>
									</div>
									<div className="py-1 d-flex align-items-center">
										<p className="text-info fs-6">
											Show titles of <span className="fw-bold">all maturity ratings</span>
											for this profile.
										</p>
									</div>
									<div>
										<button className="btn btn-primary border border-1 border-warning text-warning rounded-0">EDIT</button>
									</div>
									<hr className="border border-1" />
									<div>
										<div>
											<p className="text-light fs-3">Autoplay controls</p>
										</div>
										<div className="input-group mb-3">
											<div className="input-group d-flex align-items-center">
												<input
													className="form-check-input mt-0 bg-primary border border-1 rounded-0 p-3"
													type="checkbox"
													defaultValue
													aria-label="Checkbox for following text input"
													id="profile-checkbox-1"
												/>
												<label htmlFor="profile-checkbox-1" className="text-info px-3 fs-7">
													Autoplay next episode in a series on all devices.
												</label>
											</div>
										</div>
										<div className="input-group mb-3">
											<div className="input-group d-flex align-items-center">
												<input
													className="form-check-input mt-0 bg-primary border border-1 rounded-0 p-3"
													type="checkbox"
													aria-label="Checkbox for following text input"
													id="profile-checkbox-2"
												/>
												<label htmlFor="profile-checkbox-2" className="text-info px-3 fs-7">
													Autoplay previews while browsing on all devices.
												</label>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<hr className="border border-1" />
					<div className="d-flex py-3 align-items-center text-center">
						<button className="btn btn-info border border-1 rounded-0 px-3 py-2 mx-4 fs-4"> SAVE </button>
						<button className="btn btn-primary border border-1 border-warning rounded-0 px-3 py-2 mx-4 fs-4 text-warning">CANCEL </button>
						<button className="btn btn-primary border border-1 border-warning rounded-0 px-3 py-2 mx-4 fs-4 text-warning">DELETE PROFILE</button>
					</div>
				</div>
			</main>
		);
	}
}

export default ProfilePage;
