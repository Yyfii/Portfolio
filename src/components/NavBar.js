import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoAna from '../img/logo-ana.png';
import navIcon1 from '../img/nav-icon1.svg';
import navIcon2 from '../img/nav-icon2.svg';
import navIcon3 from '../img/nav-icon3.svg';



function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logoAna} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUdateActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUdateActiveLink('projects')}>Projetos</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/ana-soares--/'><img src={navIcon1} alt='linkedin'/></a>
                <a href='https://github.com/Yyfii'><img src={navIcon2} alt='github'/></a>
                <a href='https://www.instagram.com/nsn_anaaa/'><img src={navIcon3} alt='instagram'/></a>
            </div>

            <button className='vvd' onClick={() => console.log('connect')}><span>Conecte-se comigo</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;