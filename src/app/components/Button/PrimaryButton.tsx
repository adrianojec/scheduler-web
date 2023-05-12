import { Button } from "react-bootstrap";

interface Props {
  text: String;
}

const PrimaryButton = ({ text }: Props) => {
  return <Button className="btn__primary">{text}</Button>;
};

export default PrimaryButton;
