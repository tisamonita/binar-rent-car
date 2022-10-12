import React from "react";
import "../index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Button, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Row, Col} from "reactstrap";

export default function Netlix() {
  return (
    <>
      <Container fluid className="section-one">
        <div className="top-header">
          <div className="left-menu">
            <img src="netflix-logo.png" width="120px" />
          </div>
          <div className="right-menu">
            <Button className="btn-lang">
                Bahasa
            </Button>
            <div>
              <Button className="btn-signin">Sign In</Button>
            </div>
          </div>
        </div>
        <div className="center-header">
            <p className="text-title">Unlimited movies, TV shows, and more.</p>
            <p className="text-desc">
            Watch anywhere. Cancel anytime.
            </p>
            <p className="text-desc">
            Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div>
                <input placeholder="Email Address"></input><button>Get Started</button>
            </div>
        </div>
      </Container>
      <Container fluid className="section-two">
        <Container>
        <Row className="row-reverse">
          <Col md="6" xs="12" className="text-profile">
            <p className="title">Create profiles for kids.</p>
            <p className="description">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </Col>
          <Col md="6" xs="12">
            <div className="img-kids">
              <img src="/profile-netflix.png" width="100%"/>
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
      <Container fluid className="section-three">
        Section 3
      </Container>
      <Container fluid className="footer">
        Section 4
      </Container>
    </>
  );
}
