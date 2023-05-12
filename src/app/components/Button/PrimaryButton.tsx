import { Button } from "react-bootstrap";

interface Props {
  text: String;
  onClick?: () => void;
}

const PrimaryButton = ({ text, onClick }: Props) => {
  return (
    <Button className="btn__primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
