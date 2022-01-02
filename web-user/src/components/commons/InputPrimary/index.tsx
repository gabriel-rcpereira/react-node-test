import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  control: any; // FIXME
}

const InputPrimary: React.FC<IProps> = ({ label, name, control }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => {
      return (
        <TextField
          variant='outlined'
          label={label}
          placeholder={label}
          onChange={onChange}
          value={value}
        />
      );
    }}
  />
);

export default InputPrimary;
