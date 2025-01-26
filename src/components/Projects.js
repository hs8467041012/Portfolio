import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"

import Sentiment from "../assets/img/Sentiment.jpg"
import NeuroAI from "../assets/img/NeuroAI.png"
import Spotify from "../assets/img/Spotify.png"
import Delivery from "../assets/img/Delivery.png"
import Gym from "../assets/img/Gym.png"
import Weather from "../assets/img/Weather.png"

import colorSharp2 from "../assets/img/color-sharp2.png"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Projects = () => {
  const projects = [
    {
      title: "NeuroAI",
      description: "AI driven early detection of neurodegenerative disease",
      imgUrl: NeuroAI,
      githubLink: "https://github.com/hs8467041012/NeuroAI",
    },
    {
      title: "Spotify Clone",
      description: "Music streaming interface and features",
      imgUrl: Spotify,
      githubLink: "https://github.com/hs8467041012/Spotify",
    },
    {
      title: "Gym Website",
      description: "Fitness services and membership portal",
      imgUrl: Gym,
      githubLink: "https://github.com/hs8467041012/Gym-Website",
    },
    {
      title: "Restaurant Website",
      description: "Menu display and online reservations",
      imgUrl: Delivery,
      githubLink: "https://github.com/hs8467041012/Food-Delivery",
    },
    {
      title: "Sentiment Analysis",
      description: "Text analysis for opinion classification",
      imgUrl: Sentiment,
      githubLink: "https://github.com/hs8467041012/Sentiment-Analysis",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates: temperature, wind speed, humidity.",
      imgUrl: Weather,
      githubLink: "https://github.com/hs8467041012/Weather-App",
    },
  ]

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank")
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Different Web and ML Projects.These projects demonstrate expertise in creating responsive, user-friendly websites and implementing AI-driven solutions using NLP, neural networks, and system design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project.githubLink)}
                              />
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                         
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2 || "/placeholder.svg"} alt="background"></img>
    </section>
  )
}

