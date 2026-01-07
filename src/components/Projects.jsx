import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ethicsDashboardImg from '../assets/img/ethics-dashboard.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ethics Dashboard",
      description: "A web app built with Next.js, Flask/SQLAlchemy, and Docker.",
      imgUrl: ethicsDashboardImg,
    },
    {
      title: "Oracle DBA",
      description: "The full lifecycle implementation of an algorithmic trading database, to learn how to perform DBA tasks.",
      imgUrl: ethicsDashboardImg,
    },
    {
      title: "Connect Four",
      description: "Java developed web socket application for 2 player connect Four.",
      imgUrl: ethicsDashboardImg,
    },
    {
      title: "Catstronaut",
      description: "A side scroller arcade game in Java.",
      imgUrl: ethicsDashboardImg,
    },
    {
      title: "Task Tracking iOS App",
      description: "Developed in Xcode, a simple to do list app similar to the notes app.",
      imgUrl: ethicsDashboardImg,
    },
    {
      title: "Rock, Paper, Scissors",
      description: "Simple game GUI in Javascript and HTML",
      imgUrl: ethicsDashboardImg,
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
                <h2>Projects</h2>
                <p>I have completed a number of projects throughout my education, as detailed below.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Research</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="section">
                      <p>?</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}