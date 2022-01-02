import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  control: any; // FIXME
}

const InputDatePrimary: React.FC<IProps> = ({
  label,
  name,
  control
}): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => {
      return (
        <TextField
          variant='outlined'
          label={label}
          placeholder='dd/mm/yyyy'
          onChange={onChange}
          value={value}
        />
      );
    }}
  />
);

export default InputDatePrimary;
