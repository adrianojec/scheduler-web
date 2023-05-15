import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav/SideNav";
import { navigationPaths } from "../utilities/constants";

const PrivateLayout = () => {
  return (
    <div className="vh-100">
      <Row className="h-100">
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
