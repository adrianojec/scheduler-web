import { Col, Row } from "react-bootstrap";
import { FORM_TYPE, AUTH_FORM, ROUTE } from "../../app/utilities/enums";
import FormGroup from "../../app/components/Form/FormGroup";
import {
  ALREADY_HAVE_AN_ACCOUNT,
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
  PASSWORD_IS_REQUIRED,
  PASSWORD_NOT_MATCHED,
  REGISTER,
  SIGN_IN,
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
import { LoginUserInput, RegisterUserInput } from "../../app/store/auth/types";
import { loginUser, registerUser } from "../../app/store/auth/action";
import { useNavigate } from "react-router-dom";
import FormGroupPassword from "../../app/components/Form/FormGroupPassword";

interface Props {
  formType: AUTH_FORM;
}

const LoginPage = ({ formType }: Props) => {
  const initialLoginFormValue = { email: EMPTY_STRING, password: EMPTY_STRING };
  const initialRegisterFormValue = {
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    userName: EMPTY_STRING,
    email: EMPTY_STRING,
    password: EMPTY_STRING,
    confirmPassword: EMPTY_STRING,
  };
  const loginForm = formType == AUTH_FORM.LOGIN;
  const registerForm = formType == AUTH_FORM.REGISTER;
  const [loggedUser, setLoggedUser] = useState<LoginUserInput>({
    ...initialLoginFormValue,
  });
  const [newUser, setNewUser] = useState<RegisterUserInput>({
    ...initialRegisterFormValue,
  });
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await dispatch(loginUser(loggedUser));
    setLoggedUser({ ...initialLoginFormValue });
    console.log(loggedUser);
  };

  const handleRegisterUser = async () => {
    if (isPasswordMatched) await dispatch(registerUser(newUser));
    console.log(newUser);
  };

  const handleSwitchAuthForm = () =>
    navigate(formType == AUTH_FORM.LOGIN ? ROUTE.REGISTER : ROUTE.LOGIN);

  return (
    <Row className="vh-100">
      <Col className="center-items">
        <Center
          className="center-items flex-column"
          width="w-75"
          children={
            <>
              {" "}
              <h2>{loginForm ? WELCOME_BACK : REGISTER}</h2>
              <VerticalSpace height={16} />
              {registerForm && (
                <>
                  <Row className="w-100">
                    <Col className="p-0 me-3">
                      <FormGroup
                        type={FORM_TYPE.TEXT}
                        label={FIRST_NAME}
                        validationMessage={FIRST_NAME_IS_REQUIRED}
                        onChange={(text) =>
                          setNewUser((prev) => ({ ...prev, firstName: text }))
                        }
                        isRequired
                      />
                    </Col>

                    <Col className="p-0">
                      <FormGroup
                        type={FORM_TYPE.TEXT}
                        label={LAST_NAME}
                        validationMessage={LAST_NAME_IS_REQUIRED}
                        onChange={(text) =>
                          setNewUser((prev) => ({ ...prev, lastName: text }))
                        }
                        isRequired
                      />
                    </Col>
                  </Row>

                  <FormGroup
                    type={FORM_TYPE.TEXT}
                    label={USER_NAME}
                    validationMessage={USER_NAME_IS_REQUIRED}
                    onChange={(text) =>
                      setNewUser((prev) => ({ ...prev, userName: text }))
                    }
                    isRequired
                  />
                </>
              )}
              <FormGroup
                type={FORM_TYPE.EMAIL}
                label={EMAIL}
                validationMessage={EMAIL_IS_REQUIRED}
                onChange={(text) =>
                  loginForm
                    ? setLoggedUser((prev) => ({ ...prev, email: text }))
                    : setNewUser((prev) => ({ ...prev, email: text }))
                }
                isRequired
              />
              <FormGroup
                type={FORM_TYPE.PASSWORD}
                label={PASSWORD}
                validationMessage={
                  registerForm ? PASSWORD_IS_REQUIRED : EMPTY_STRING
                }
                onChange={(text) =>
                  loginForm
                    ? setLoggedUser((prev) => ({ ...prev, password: text }))
                    : setNewUser((prev) => ({ ...prev, password: text }))
                }
              />
              {registerForm && (
                <>
                  <FormGroupPassword
                    type={FORM_TYPE.PASSWORD}
                    label={CONFIRM_PASSWORD}
                    validationMessage={PASSWORD_NOT_MATCHED}
                    onChange={(text) => {
                      setNewUser((prev) => ({
                        ...prev,
                        confirmPassword: text,
                      }));
                      setIsPasswordMatched(newUser.password === text);
                      console.log(newUser.password === text);
                    }}
                    isInvalid={
                      newUser.confirmPassword != EMPTY_STRING &&
                      !isPasswordMatched
                    }
                    showErrorMessage={!isPasswordMatched}
                  />
                </>
              )}
              <VerticalSpace height={16} />
              <PrimaryButton
                text={loginForm ? LOGIN : REGISTER}
                onClick={loginForm ? handleLogin : handleRegisterUser}
              />
              <VerticalSpace height={64} />
              <p className="text-muted">
                {loginForm ? DONT_HAVE_AN_ACCOUNT : ALREADY_HAVE_AN_ACCOUNT}
                <a className="text-button ms-1" onClick={handleSwitchAuthForm}>
                  {loginForm ? SIGN_UP : SIGN_IN}
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
  );
};

export default LoginPage;
