import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { FORM_TYPE, USER_FORM } from "../../app/utilities/enums";
import FormGroup from "../../app/components/Form/FormGroup";
import {
  DONT_HAVE_AN_ACCOUNT,
  EMAIL,
  FIRST_NAME_IS_REQUIRED,
  LOGIN,
  LOGIN_IMAGE,
  PASSWORD,
  SIGN_UP,
  WELCOME_BACK,
} from "../../app/utilities/constants";
import Center from "../../app/components/Container/Center";
import VerticalSpace from "../../app/components/Spacer/VerticalSpace";
import PrimaryButton from "../../app/components/Button/PrimaryButton";

interface Props {
  formType: USER_FORM;
}

const LoginPage = ({ formType }: Props) => {
  return (
    <Center
      className="vh-100"
      children={
        <Container className="shadow rounded">
          <Row>
            <Col className="p-5">
              <Center
                className="flex-column m-auto"
                width="w-75"
                children={
                  <>
                    <h2>{WELCOME_BACK}</h2>
                    <VerticalSpace height={32} />

                    <FormGroup
                      type={FORM_TYPE.TEXT}
                      label={EMAIL}
                      validationMessage={FIRST_NAME_IS_REQUIRED}
                      isRequired
                    />

                    <FormGroup
                      type={FORM_TYPE.TEXT}
                      label={PASSWORD}
                      className="mb-5"
                    />

                    <PrimaryButton text={LOGIN} />
                    <VerticalSpace height={64} />
                    <p className="text-muted">
                      {DONT_HAVE_AN_ACCOUNT}
                      <a className="text-button"> {SIGN_UP}</a>
                    </p>
                  </>
                }
              />
            </Col>

            <Col className="p-0">
              <img className="img__login" src={LOGIN_IMAGE} />
            </Col>
          </Row>
        </Container>
      }
    />
  );
};

export default LoginPage;
