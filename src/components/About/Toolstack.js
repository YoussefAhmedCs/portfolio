import React from "react";
import { Col, Row } from "react-bootstrap";
import Linux from "../../Assets/TechIcons/ubuntu.svg";
import Brave from "../../Assets/TechIcons/brave.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/jetbrains.svg";
import Terminal from "../../Assets/TechIcons/terminal.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux OS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Brave} alt="Brave" className="tech-icon-images" />
        <div className="tech-icons-text">Brave</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="PhpStorm" className="tech-icon-images" />
        <div className="tech-icons-text">PhpStorm</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Terminal} alt="Terminal" className="tech-icon-images" />
        <div className="tech-icons-text">Terminal</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
