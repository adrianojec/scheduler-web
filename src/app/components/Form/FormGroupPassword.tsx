import { useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
  type: string;
  placeholder?: string;
  onChange?: (evt: any) => void;
  value?: string;
  label?: string;
  showErrorMessage?: boolean;
  isInvalid?: boolean;
  width?: "w-25" | "w-50" | "w-75" | "w-100";
  className?: string;
  validationMessage?: string;
}

const FormGroupPassword = ({
  type,
  placeholder,
  value,
  label,
  showErrorMessage = false,
  isInvalid = false,
  width = "w-100",
  className,
  onChange,
  validationMessage,
}: Props) => {
  return (
    <Form.Group className={`${width} ${className} mb-4 me-2`}>
      {!!label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => {
          !!onChange && onChange!(evt.target.value);
        }}
        isInvalid={isInvalid}
        required={showErrorMessage}
        isValid={!showErrorMessage}
      />
      <Form.Control.Feedback type="invalid">
        {showErrorMessage && validationMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormGroupPassword;
