import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './bannerstyle.css';

function Banner() {
  return (
    <section className="banner" id="home">
    <Container>
      <Row className="allign-items-center">
        <Col  xs={12} md={6} xl={7} className="intro">
          <span className="title">welcome to my portifolio</span>
          <h1 className="para">
            Hi I am ahmed and this is my portifolio, and next is the logo to get in contact with me you can click on the image of company logo
          </h1>
          <a href="/cv.pdf" download="/cv.pdf">
          <button className="Cv-but">Download CV</button>
          </a>
        </Col>
        <Col xs={12} md={6} xl={5} className="comp-img">
      <a href='https://tickets.formula1.com/en' target='_blank'> <img className="f1-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1CqsJcWl4f94DMvLw8dpgrXAV2qgN8mgpQ&s'} alt='tickets' /></a>
          </Col>
      </Row>
    </Container>
    </section>
  );
}
export default Banner;