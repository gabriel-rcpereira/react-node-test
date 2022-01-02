import { TextField } from "@mui/material";

interface IProps {
  label: string;
}

const InputDatePrimary: React.FC<IProps> = ({ label }): JSX.Element => (
  <TextField label={label} placeholder='dd/mm/yyyy' />
);

export default InputDatePrimary;
