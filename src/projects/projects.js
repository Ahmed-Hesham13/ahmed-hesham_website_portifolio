import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import { ProjectCard } from "./projectcard";  
import TrackVisibility from 'react-on-screen'; 
import './projectstyle.css'
export const Projects = () => { 
 
  const projects = [ 
    { 
      title: "Hardware", 
      description: "Flipper zero", 
      imgUrl: 'https://cdn.flipper.net/zero_landing_sdcard_render.jpg'
    }, 
    { 
      title: "Microcontroller", 
      description: "Esp-32 step counter", 
      imgUrl: 'https://how2electronics.com/wp-content/uploads/2025/03/DIY-Pedometer-with-ESP32-BMI160-Steps-Counter.jpg' 
    },
    { 
      title: "Business Startup", 
      description: "Network Design", 
      imgUrl: 'https://www.howtonetwork.com/wp-content/uploads/2022/03/2-11-1.png' 
    },
        { 
      title: "enryption standard", 
      description: "Network Design", 
      imgUrl: 'https://lirp.cdn-website.com/35fcf6c5/dms3rep/multi/opt/cybersecurity+project+management-640w.png' 
    },
        { 
      title: "hashing standard", 
      description: "encryption", 
      imgUrl: 'https://www.cyberark.com/wp-content/uploads/2024/03/identity-security-cybersecurity-strategy.png' 
    },
        { 
      title: "Business Startup", 
      description: "layered approach", 
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydI2i8Bqt-35kFP-ygyauTUXVuT7XSXTSlw&s' 
    },
    

  ]; 
   const projects_tab2 = [ 
    { 
      title: "cybersecurity pic1", 
      description: "csybersecurity", 
      imgUrl: 'https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/cybersecurity-coverage-2.jpg?rev=9ebd97b3e7e1460e93c01339d19caf61'
    }, 
    { 
      title: "cybersecurity pic2", 
      description: "random-pic", 
      imgUrl: 'https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg' 
    },
    { 
      title: "cybersecurity pic3", 
      description: "random-pic", 
      imgUrl: 'https://builtin.com/sites/www.builtin.com/files/2024-10/cybersecurity.png' 
    },
        { 
      title: "cybersecurity pic4", 
      description: "Network Design", 
      imgUrl: 'https://www.fortinet.com/content/dam/fortinet/images/cyberglossary/advanced-cybersecurity-solutions.png' 
    },
        { 
      title: "hashing standard", 
      description: "encryption", 
      imgUrl: 'https://www.cyberark.com/wp-content/uploads/2024/03/identity-security-cybersecurity-strategy.png' 
    },
        { 
      title: "Business Startup", 
      description: "layered approach", 
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydI2i8Bqt-35kFP-ygyauTUXVuT7XSXTSlw&s' 
    },
    
    
    

  ]; 
 
  return ( 
    <section className="project" id="projects"> 
      <Container> 
        <Row> 
          <Col size={12}> 
            <TrackVisibility> 
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}> 
                <h2 className="text">Projects</h2> 
                <p className="text2">Some of the projects that I have made During my developmental years.</p> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
<Nav 
  variant="pills" 
  className="nav-pills mb-5 justify-content-center align-items-center" 
  id="pills-tab"
>
  <Nav.Item>
    <Nav.Link className="first-tab" eventKey="first">Tab 1</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="second-tab" eventKey="second">Tab 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="third-tab" eventKey="third">Tab 3</Nav.Link>
  </Nav.Item>
</Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? 
"animate__animated animate__slideInUp" : ""}> 
                    <Tab.Pane eventKey="first"> 
                      <Row> 
                        { 
                          projects.map((project, index) => { 
                            return ( 
                              <ProjectCard 
                                key={index} 
                                {...project} 
                                /> 
                            ) 
                          }) 
                        } 
                      </Row> 
                    </Tab.Pane> 
                    <Tab.Pane eventKey="second"> 
                      <Row> 
                        { 
                          projects_tab2.map((project, index) => { 
                            return ( 
                              <ProjectCard 
                                key={index} 
                                {...project} 
                                /> 
                            ) 
                          }) 
                        } 
                      </Row>  
                    </Tab.Pane> 
                    <Tab.Pane eventKey="third"> 
                       <Row> 
                        { 
                          projects.map((project, index) => { 
                            return ( 
                              <ProjectCard 
                                key={index} 
                                {...project} 
                                /> 
                            ) 
                          }) 
                        } 
                      </Row> 
                    </Tab.Pane> 
                  </Tab.Content> 
                </Tab.Container> 
              </div>} 
            </TrackVisibility> 
          </Col> 
        </Row> 
      </Container> 
      {/* <img className="background-image-right" src={colorSharp2}></img> //  */}
    </section> 
  ) 
}