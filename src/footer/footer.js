import { Container, Row, Col } from "react-bootstrap"; 
import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                    <img className="logo" src={'https://cdn.dribbble.com/userupload/17092961/file/original-aaa8745bbe91a674898fd4c4105a56dd.png?format=webp&resize=400x300&vertical=center'} alt='logo' />

                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                   <a href='https://www.linkedin.com/in/ahmed-suliman-ab3599400/`  ' target='_blank'> <img src={'https://img.freepik.com/premium-vector/vector-linkedin-apps-logo-rounded-asset-isolated_1004619-457.jpg?semt=ais_hybrid&w=740&q=80'} alt='LinkedIn' /></a>
                     <a href='https://www.facebook.com/Formula1/'target='_blank'> <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1280px-Facebook_f_logo_%282019%29.svg.png'} alt='Facebook' /></a>
              <a href='https://www.bing.com/ck/a?!&&p=13d9555269a4bcde5f258d8296d37fb8b936ae11152f0c51e9429cd4a3adee40JmltdHM9MTc3NjIxMTIwMA&ptn=3&ver=2&hsh=4&fclid=19a2624a-3b3d-61a5-0a19-77593a4160fc&psq=f1+instagram+account&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9mMS8'target='_blank'> <img src={'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png'} alt='Insta' /></a>
                    </div>
                    <p className="text"> Copyright 2026. All Rights Reserved</p>
                    
                    </Col>

                </Row>
            </Container>


        </footer>
    )
}