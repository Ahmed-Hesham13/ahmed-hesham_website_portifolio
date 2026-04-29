import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navstyle.css';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img className='logo' src={'https://cdn.dribbble.com/userupload/17092961/file/original-aaa8745bbe91a674898fd4c4105a56dd.png?format=webp&resize=400x300&vertical=center'} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          
          <div className="nav-actions">
            <div className='social-icons'>
              <a href='https://www.linkedin.com/login/ar' target='_blank'> <img src={'https://img.freepik.com/premium-vector/vector-linkedin-apps-logo-rounded-asset-isolated_1004619-457.jpg?semt=ais_hybrid&w=740&q=80'} alt='LinkedIn' /></a>
              <a href='https://www.facebook.com/'target='_blank'> <img src={'https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png'} alt='Facebook' /></a>
              <a href='https://www.instagram.com/?hl=ar'target='_blank'> <img src={'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png'} alt='Insta' /></a>
            </div>
            <button className='connect-b' onClick={() => console.log('pressed')}>
              <span>Let's Connect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;