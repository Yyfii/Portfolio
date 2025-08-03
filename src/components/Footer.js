import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/logo-ana.png';
import navIcon1 from '../img/nav-icon1.svg';
import navIcon2 from '../img/nav-icon2.svg';
import navIcon3 from '../img/nav-icon3.svg';

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-items-center">
                <Col sm={6} className="d-flex align-items-center">
                    <img src={logo} alt="Logo" id="logo-footer"className="navbar-logo" style={{height: '40px'}} />
                </Col>
                <Col sm={6} className="d-flex flex-column align-items-center align-items-sm-end">
                    <div className='social-icon mb-2'>
                        <a href=''><img src={navIcon1} alt="Social icon 1" /></a>
                        <a href=''><img src={navIcon2} alt="Social icon 2" /></a>
                        <a href=''><img src={navIcon3} alt="Social icon 3" /></a>
                    </div>
                    <p className="text-muted mb-0" style={{fontSize: '0.8rem'}}>CopyRight 2025. All Right Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer