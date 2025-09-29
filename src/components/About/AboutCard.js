import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hana Habtemichael </span>
            <br />
           I'm a dedicated and versatile Software Developer with a degree in Software Engineering from Bahir Dar University. Over the years, I’ve worked with both startups and international organizations, building digital solutions that make an impact.
            <br />
            
            <br />
            <br />          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hana </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
