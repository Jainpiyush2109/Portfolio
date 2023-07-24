import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import foodapp from "../../Assets/Projects/WhatsApp Image 2023-07-24 at 14.17.27.jpg";
import chatroom from "../../Assets/Projects/chatroom.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatroom}
              isBlog={false}
              title="Chat Room"
              description="Personal Chat Room to communicate with friends and colleagues build with Socket.io and Node.JS. Have features which allows user for realtime messaging and location sharing."
              
              demoLink="https://chat-room-xig2.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Restaurant Website"
              description="Food ordering web application built with reactjs, redux and having firebase as data store.Having features such as browsing the menu, Adding or removing food items to cart and placing orders.
              "
              
              demoLink=" https://food-ordering-pzgm.onrender.com"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
