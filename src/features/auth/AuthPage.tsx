import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { FORM_TYPE, AUTH_FORM, ROUTE } from "../../app/utilities/enums";
import FormGroup from "../../app/components/Form/FormGroup";
import {
  CONFIRM_PASSWORD,
  DONT_HAVE_AN_ACCOUNT,
  EMAIL,
  EMAIL_IS_REQUIRED,
  EMPTY_STRING,
  FIRST_NAME,
  FIRST_NAME_IS_REQUIRED,
  LAST_NAME,
  LAST_NAME_IS_REQUIRED,
  LOGIN,
  LOGIN_IMAGE,
  PASSWORD,
  REGISTER,
  SIGN_UP,
  USER_NAME,
  USER_NAME_IS_REQUIRED,
  WELCOME_BACK,
} from "../../app/utilities/constants";
import Center from "../../app/components/Container/Center";
import VerticalSpace from "../../app/components/Spacer/VerticalSpace";
import PrimaryButton from "../../app/components/Button/PrimaryButton";
import { useAppDispatch } from "../../app/store/hooks";
import { useState } from "react";
import { LoginUserInput } from "../../app/store/auth/types";
import { loginUser } from "../../app/store/auth/action";
import { useNavigate } from "react-router-dom";

interface Props {
  formType: AUTH_FORM;
}

const LoginPage = ({ formType }: Props) => {
  const initialLoginFormValue = { email: EMPTY_STRING, password: EMPTY_STRING };
  const loginForm = formType == AUTH_FORM.LOGIN;
  const registerForm = formType == AUTH_FORM.REGISTER;
  const [loggedUser, setLoggedUser] = useState<LoginUserInput>({
    ...initialLoginFormValue,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await dispatch(loginUser(loggedUser));
    console.log(loggedUser);
  };

  const handleSwitchAuthForm = () =>
    navigate(formType == AUTH_FORM.LOGIN ? ROUTE.REGISTER : ROUTE.LOGIN);

  return (
    <Center
      className="vh-100"
      children={
        <Container className="shadow rounded">
          <Row>
            <Col className="p-4">
              <Center
                className="flex-column m-auto"
                width="w-75"
                children={
                  <>
                    <h2>{loginForm ? WELCOME_BACK : REGISTER}</h2>
                    <VerticalSpace height={32} />

                    {registerForm && (
                      <>
                        <Center
                          children={
                            <>
                              <FormGroup
                                type={FORM_TYPE.TEXT}
                                label={FIRST_NAME}
                                validationMessage={FIRST_NAME_IS_REQUIRED}
                                width="w-50"
                                isRequired
                              />

                              <FormGroup
                                type={FORM_TYPE.TEXT}
                                label={LAST_NAME}
                                validationMessage={LAST_NAME_IS_REQUIRED}
                                width="w-50"
                                isRequired
                              />
                            </>
                          }
                        />

                        <FormGroup
                          type={FORM_TYPE.TEXT}
                          label={USER_NAME}
                          validationMessage={USER_NAME_IS_REQUIRED}
                          isRequired
                        />
                      </>
                    )}

                    <FormGroup
                      type={FORM_TYPE.EMAIL}
                      label={EMAIL}
                      validationMessage={EMAIL_IS_REQUIRED}
                      onChange={(text) =>
                        setLoggedUser((prev) => ({ ...prev, email: text }))
                      }
                      isRequired
                    />

                    <FormGroup
                      type={FORM_TYPE.PASSWORD}
                      label={PASSWORD}
                      onChange={(text) =>
                        setLoggedUser((prev) => ({ ...prev, password: text }))
                      }
                    />

                    {registerForm && (
                      <>
                        <FormGroup
                          type={FORM_TYPE.PASSWORD}
                          label={CONFIRM_PASSWORD}
                        />
                      </>
                    )}

                    <VerticalSpace height={20} />
                    <PrimaryButton text={LOGIN} onClick={handleLogin} />
                    <VerticalSpace height={64} />
                    <p className="text-muted">
                      {DONT_HAVE_AN_ACCOUNT}
                      <a
                        className="text-button ms-1"
                        onClick={handleSwitchAuthForm}
                      >
                        {SIGN_UP}
                      </a>
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
