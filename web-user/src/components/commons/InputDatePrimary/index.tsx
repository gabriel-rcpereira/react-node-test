import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  control: any; // FIXME
  required?: boolean;
}

const InputDatePrimary: React.FC<IProps> = ({
  label,
  name,
  control,
  required = false
}): JSX.Element => {
  const rules = {
    required: required && `${label} is required.`
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <TextField
              variant='outlined'
              label={label}
              placeholder='dd/mm/yyyy'
              onChange={onChange}
              value={value}
              required
            />
            <Typography color='error'>{error && error.message}</Typography>
          </>
        );
      }}
      rules={{ ...rules, pattern: "" }}
    />
  );
};

export default InputDatePrimary;
