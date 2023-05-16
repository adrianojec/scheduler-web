import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav/SideNav";
import { SCHEDULER, SIGN_IN_AS, navigationPaths } from "../utilities/constants";

interface Props {
  userName: string;
}

const PrivateLayout = ({ userName }: Props) => {
  return (
    <div className="vh-100">
      <Row className="h-100">
        <Navbar>
          <div className="w-100 center-items me-5">
            <span className="text-icon">{SCHEDULER}</span>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>{SIGN_IN_AS(userName)}</Navbar.Text>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <Col className="sidenav">
          <SideNav navigationPaths={navigationPaths} />
        </Col>

        <Col md={{ span: 10 }}>
          <Container className="py-5 mt-5">
            <Outlet />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default PrivateLayout;
