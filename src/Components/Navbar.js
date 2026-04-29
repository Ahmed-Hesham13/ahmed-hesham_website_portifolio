import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navstyle.css';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
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
              <a href='https://www.linkedin.com/in/ahmed-suliman-ab3599400/`  ' target='_blank'> <img src={'https://img.freepik.com/premium-vector/vector-linkedin-apps-logo-rounded-asset-isolated_1004619-457.jpg?semt=ais_hybrid&w=740&q=80'} alt='LinkedIn' /></a>
              <a href='https://www.facebook.com/Formula1/'target='_blank'> <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1280px-Facebook_f_logo_%282019%29.svg.png'} alt='Facebook' /></a>
              <a href='https://www.bing.com/ck/a?!&&p=13d9555269a4bcde5f258d8296d37fb8b936ae11152f0c51e9429cd4a3adee40JmltdHM9MTc3NjIxMTIwMA&ptn=3&ver=2&hsh=4&fclid=19a2624a-3b3d-61a5-0a19-77593a4160fc&psq=f1+instagram+account&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9mMS8'target='_blank'> <img src={'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png'} alt='Insta' /></a>
            </div>
    <a href="#connect-b">
    <button className='connect-b'>
    <span>Let's Connect</span>
    </button>
  </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;