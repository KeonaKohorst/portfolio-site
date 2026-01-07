import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ethicsDashboardImg from '../assets/img/ethics-dashboard-3.png';
import connectFourImg from '../assets/img/connect-4.png';
import catstronautImg from '../assets/img/catstronaut.png';
import minesweeperImg from '../assets/img/minesweeper.png';
import todoImg from '../assets/img/todo.png';
import regressorImg from '../assets/img/regressor.png';
import dbaImg from '../assets/img/dba.png';
import algoImg from '../assets/img/algotrading.png';
import scalingImg from '../assets/img/scaling.png';
import forestryImg from '../assets/img/forestry.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const software_projects = [
    {
      title: "Ethics Dashboard",
      description: "A web app built with Next.js, Flask/SQLAlchemy, and Docker.",
      imgUrl: ethicsDashboardImg,
      link: "https://docs.google.com/presentation/d/1WkYnx0fUSrUN-Jpd11CpZIxEZ8ys0YLIHYZ07PYMF_k/edit?usp=sharing"
    },
    {
      title: "Connect Four",
      description: "Java developed web socket application for 2 player connect Four.",
      imgUrl: connectFourImg,
      link: "https://github.com/KeonaKohorst/ConnectFour"
    },
    {
      title: "Catstronaut",
      description: "A side scroller arcade game in Java.",
      imgUrl: catstronautImg,
      link: "https://docs.google.com/presentation/d/1Q9Y4IRKYV-HfY18pRMcHUTgkhA7qdEDrwedp5aqQSxg/edit?usp=sharing"
    },
    {
      title: "Task Tracking iOS App",
      description: "Developed in Xcode, a simple to do list app similar to the notes app.",
      imgUrl: todoImg,
      link: "https://github.com/KeonaKohorst/WeeklyDoIOSApp"
    },
    {
      title: "Minesweeper",
      description: "Simple Minesweeper GUI in Java w/ JavaFX",
      imgUrl: minesweeperImg,
      link: "https://docs.google.com/presentation/d/1GT1SrOx9Uasnkxx_tN9SUXW8T6tOctuh5s80C6TEVBA/edit?slide=id.g8794a74c9d_0_2475#slide=id.g8794a74c9d_0_2475"
    },
  ];

  const data_projects = [
        {
            title: "Oracle DBA",
            description: "The full lifecycle implementation of an algorithmic trading database, to learn how to perform DBA tasks.",
            imgUrl: dbaImg,
            link: "https://github.com/KeonaKohorst/DatabaseAdministrationProject"
        },
        {
            title: "Car Price Prediction Model",
            description: "Data Mining: Using a random forest regressor to predict car prices based on car characteristics.",
            imgUrl: regressorImg,
            link: "https://github.com/KeonaKohorst/CarPriceRegression"
        },
  ]

  const research = [
        {
            title: "Data Extraction, Transformation, and Loading (ETL) Process Automation and Data Warehouse Implementation for Algorithmic Trading Machine Learning Modelling",
            description: "Conference Paper at SYSCON 2025",
            imgUrl: algoImg,
            link: "https://www.researchgate.net/publication/392257462_Data_Extraction_Transformation_and_Loading_ETL_Process_Automation_and_Data_Warehouse_Implementation_for_Algorithmic_Trading_Machine_Learning_Modelling"
        },
        {
            title: "Scaling a Data Warehouse System with Machine Learning Integration for Stock Market Forecasting",
            description: "Preprint presented at CCECE 2025",
            imgUrl: scalingImg,
            link: "https://www.researchgate.net/publication/389364419_Scaling_a_Data_Warehouse_System_with_Machine_Learning_Integration_for_Stock_Market_Forecasting"
        },
          {
            title: "Data Warehouse Design for Multiple Source Forest Inventory Management and Image Processing",
            description: "Preprint presented at CCECE 2025",
            imgUrl: forestryImg,
            link: "https://www.researchgate.net/publication/388920234_Data_Warehouse_Design_for_Multiple_Source_Forest_Inventory_Management_and_Image_Processing"
        },
  ]

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
                          software_projects.map((project, index) => {
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
                          data_projects.map((project, index) => {
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
                          research.map((project, index) => {
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
    
    </section>
  )
}