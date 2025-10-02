import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/lersha.png";
import chatify from "../../Assets/Projects/dc-dashboard.png";
import cf from "../../Assets/Projects/cf.png";
import cb from "../../Assets/Projects/cb.png";

import bitsOfCode from "../../Assets/Projects/bank.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Dc Dashboard"
              description="DC Portal is a web-based data collection and project management platform designed to streamline how project manage farmer information and field operations. The system empowers users to efficiently collect, update, and analyze farmer data while also managing company-led agricultural projects through customizable, dynamic forms."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="http://51.20.140.67:8097"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Credit Score Dashboard"
              description="As part of Lersha’s partnership with financial institutions, I developed a Credit Score and Loan Management Dashboard that enables lersha's and banks to provide and track agricultural loans for farmers. The system is built with multi-bank support, allowing each partner bank to operate with separate branding, logic, and workflows, all within one unified platform."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="http://51.20.140.67:8094"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lersha Dashboard"
              description="The Lersha Admin Portal is a robust administrative dashboard designed to give full control over the Lersha ecosystem. It allows admins to manage users, monitor transactions, oversee product listings, and track mechanization service orders in real-time."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cf}
              isBlog={false}
              title="Contrat Farming"
              description="As part of my work in the agricultural technology sector, I developed an integrated contract farming platform that simplifies key processes for farmers and processors. This includes a streamlined farmer registration system for both individual and lead farmers, an intuitive interface for capturing and managing detailed farmer visit reports, and an efficient tool for handling contract agreements. The platform enhances transparency, improves collaboration, and optimizes the management of farming operations, fostering stronger partnerships and boosting productivity in the agricultural industry."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cb}
              isBlog={false}
              title="Custmer base system"
              description="I also developed a customer base   dashboard to retrieve up-to-date service and project information, manage FAQs, and assign follow-up tasks to relevant internal teams. The system bridges field operations, customer support, and internal collaboration — ensuring consistent, efficient communication across all user types"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;