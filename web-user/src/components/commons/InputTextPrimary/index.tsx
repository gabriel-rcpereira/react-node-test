import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface IProps {
  label: string;
  name: string;
  required?: boolean;
  control: any; // FIXME
}

const InputTextPrimary: React.FC<IProps> = ({
  label,
  name,
  control,
  required = false
}) => {
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
              placeholder={label}
              onChange={onChange}
              value={value}
              required
            />
            <Typography color='error'>{error && error.message}</Typography>
          </>
        );
      }}
      rules={{ ...rules }}
    />
  );
};

export default InputTextPrimary;
