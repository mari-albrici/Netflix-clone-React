import { Component } from 'react';
import avatar from './assets/avatar.png';
import { Row, Col, Container, Button } from 'react-bootstrap';

class SettingsPage extends Component {
	render() {
		return (
			<main className="bg-info py-6">
				<Container className=" py-5">
					<div className="container">
						<h3>Account</h3>
					</div>
					<hr className="border border-1 border-warning" />
					<Row>
						<Col lg={3}>
							<div className="container">MEMBERSHIP &amp; BILLING</div>
							<div className="container">
								<Button type="button" className="btn btn-light btn-outline-warning border border-0 rounded-0 my-3">
									Cancel Membership
								</Button>
							</div>
						</Col>
						<Col lg={9}>
							<div className="info">
								<div className="d-flex justify-content-between">
									<div>epicode@epicodeschool.com</div>
									<div>
										<Button type="button" className="btn border border-0 bg-light text-success">
											Change account email
										</Button>
									</div>
								</div>
								<div className="d-flex justify-content-between">
									<div className="text-warning">
										Password: <span>********</span>{' '}
									</div>
									<div>
										<Button type="button" className="btn border border-0 bg-light text-success">
											Change password
										</Button>
									</div>
								</div>
								<div className="d-flex justify-content-between">
									<div className="text-warning">
										Phone: <span>321 044 1279</span>
									</div>
									<div>
										<Button type="button" className="btn border border-0 bg-light text-success">
											Change phone number
										</Button>
									</div>
								</div>
							</div>
							<hr className="border border-1 border-warning" />
							<div className="paypal">
								<div className="d-flex justify-content-between">
									<div>
										<i className="bi bi-paypal" />
										<span> epicode@epicodeschool.com</span>
									</div>
									<div>
										<Button type="button" className="btn border border-0 bg-light text-success">
											Update payment info
										</Button>
									</div>
								</div>
								<div className="d-flex justify-content-between">
									<div>
										<span />
									</div>
									<div>
										<Button type="button" className="btn border border-0 bg-light text-success">
											Billing Details
										</Button>
									</div>
								</div>
							</div>
							<hr className="border border-1 border-warning" />
							<div className="promo">
								<div className="d-flex justify-content-between">
									<div>
										<span />
									</div>
									<div>
										<Button type="button" className="btn border border-0 bg-light text-success">
											Redeem gift card or promo code
										</Button>
									</div>
								</div>
								<div className="d-flex justify-content-between">
									<div>
										<span />
									</div>
									<div>
										<Button type="button" className="btn border border-0 bg-light text-success">
											Where to buy gift cards
										</Button>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<hr className="border border-1 border-warning" />
					<Row>
						<Col lg={3}>
							<div className="container">
								<span>PLAN DETAILS</span>
							</div>
						</Col>
						<Col lg={9}>
							<div className="d-flex justify-content-between">
								<div>
									Premium
									<span>
										<img src="https://www.seekpng.com/png/full/99-997843_image-4k-ultra-hd-blu-ray-logo.png" alt="ultrahd logo" width={120} />
									</span>{' '}
								</div>
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Change plan
									</Button>
								</div>
							</div>
						</Col>
					</Row>
					<hr className="border border-1 border-warning" />
					<Row>
						<Col lg={3}>
							<span className="container">SETTINGS</span>
						</Col>
						<Col lg={9}>
							<div>
								<Button type="button" className="btn border border-0 bg-light text-success">
									Parental controls
								</Button>
							</div>
							<div>
								<Button type="button" className="btn border border-0 bg-light text-success">
									Test participation
								</Button>
							</div>
							<div>
								<Button type="button" className="btn border border-0 bg-light text-success">
									Manage download devices
								</Button>
							</div>
							<div>
								<Button type="button" className="btn border border-0 bg-light text-success">
									Activate a device
								</Button>
							</div>
							<div>
								<Button type="button" className="btn border border-0 bg-light text-success">
									Recent devices streaming activity
								</Button>
							</div>
							<div>
								<Button type="button" className="btn border border-0 bg-light text-success">
									Sign out of all devices
								</Button>
							</div>
						</Col>
					</Row>
					<hr className="border border-1 border-warning" />
					<Row>
						<Col lg={3}>
							<span>MY PROFILE</span>
						</Col>
						<Col lg={9}>
							<div className="d-flex justify-content-between">
								<div className="px-2">
									<img src={avatar} alt="avatar" width={40} />
									<span className="px-3">Strive Student</span>
								</div>
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Manage profiles
									</Button>
								</div>
							</div>
							<div className="d-flex justify-content-between">
								<div>
									<span />
								</div>
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Add profile email
									</Button>
								</div>
							</div>
							<div className="d-flex justify-content-between ">
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Language
									</Button>
								</div>
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Viewing activity
									</Button>
								</div>
							</div>
							<div className="d-flex justify-content-between ">
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Playback settings
									</Button>
								</div>
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Ratings
									</Button>
								</div>
							</div>
							<div className="d-flex justify-content-between">
								<div>
									<Button type="button" className="btn border border-0 bg-light text-success">
										Subtitle appearance
									</Button>
								</div>
								<div />
							</div>
						</Col>
					</Row>
				</Container>
			</main>
		);
	}
}

export default SettingsPage;
