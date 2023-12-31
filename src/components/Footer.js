import {Link} from 'react-router-dom';
import Button from './Button';
import './Footer.css';


const Footer = () => {
	return (
			<div className="footer-container">
				<section className="footer-subscription">
					<p className="footer-subscription-heading">
						Join the Adventure newsletter to recieve our best vacation deals
					</p>
					<p className="footer-subscription-text">
						You can unsubscribe at any time.
					</p>
					<div className="input-areas">
						<form>
							<input type = "email" name="email" placeholder="Your Email" className="footer-input" />
							<Button buttonStyle="btn--outline">Subscribe</Button>
						</form>
					</div>
				</section>
				<div className="footer-links">
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<h2>About Us</h2>
							<Link to="/sign-up">How it works</Link>
							<Link to="/">Testimonials</Link>
							<Link to="/">Carriers</Link>
							<Link to="/">Investors</Link>
							<Link to="/">Terms of Services</Link>
						</div>
						<div className="footer-link-items">
							<h2>About Us</h2>
							<Link to="/sign-up">How it works</Link>
							<Link to="/">Testimonials</Link>
							<Link to="/">Carriers</Link>
							<Link to="/">Investors</Link>
							<Link to="/">Terms of Services</Link>
						</div>
					</div>
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<h2>About Us</h2>
							<Link to="/sign-up">How it works</Link>
							<Link to="/">Testimonials</Link>
							<Link to="/">Carriers</Link>
							<Link to="/">Investors</Link>
							<Link to="/">Terms of Services</Link>
						</div>
						<div className="footer-link-items">
							<h2>About Us</h2>
							<Link to="/sign-up">How it works</Link>
							<Link to="/">Testimonials</Link>
							<Link to="/">Carriers</Link>
							<Link to="/">Investors</Link>
							<Link to="/">Terms of Services</Link>
						</div>
					</div>
				</div>
				<section className="social-media">
					<div className="social-media-wrap">
						<div className="footer-logo">
							<Link to="/" className="social-logo">
								TRVL <i className="fab fa-typo3" />
							</Link>
						</div>
						<small className="website-rights">TRVL &nbsp; 2023</small>
						<div className="social-icons">
							<Link className="social-icon-link facebook"
							to="/"
							target="_blank"
							arial-label="Facebook"
							>
								<i className="fab fa-facebook"></i>
							</Link>
							<Link className="social-icon-link instagram"
							to="/"
							target="_blank"
							arial-label="Instagram"
							>
								<i className="fab fa-instagram"></i>
							</Link>
							<Link className="social-icon-link youtube"
							to="/"
							target="_blank"
							arial-label="YouTube"
							>
								<i className="fab fa-youtube"></i>
							</Link>
							<Link className="social-icon-link twitter"
							to="/"
							target="_blank"
							arial-label="Twitter"
							>
								<i className="fab fa-twitter"></i>
							</Link>
							<Link className="social-icon-link linkedin"
							to="/"
							target="_blank"
							arial-label="LinkedIn"
							>
								<i className="fab fa-linkedin"></i>
							</Link>
						</div>
					</div>
				</section>
			</div>
		)
}

export default Footer;