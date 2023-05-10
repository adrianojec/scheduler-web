import { Col, Container, Row } from "react-bootstrap"
import { USER_FORM } from "../../app/utilities/enums"

interface Props {
  formType: USER_FORM
}

const LoginPage = ({ formType }: Props) => {
  return (
    <Container>
      <Row>
        <Col className="debug-style">
          <h1>Hello</h1>
        </Col>

        <Col className="debug-style">
          <h1>Hi</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
