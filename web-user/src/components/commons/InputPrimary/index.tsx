import { TextField } from "@mui/material";

interface IProps {
  label: string;
}

const InputPrimary: React.FC<IProps> = ({ label }): JSX.Element => {
  return <TextField label={label} placeholder={label} variant='outlined' />;
};

export default InputPrimary;
