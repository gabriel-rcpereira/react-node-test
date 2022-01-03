import { MenuItem, Select, InputLabel, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

type IOptionProp = { key: string; text: string };

interface IProps {
  label: string;
  options: IOptionProp[];
  name: string;
  control: any; // FIXME
  required?: boolean;
}

const SelectPrimary: React.FC<IProps> = ({
  label,
  options,
  name,
  control,
  required
}): JSX.Element => {
  const rules = {
    required: required && `${label} is required.`
  };

  const renderMenuItems = () => {
    const optionsWithDefault = [...options, { key: "", text: "" }];

    return optionsWithDefault.map(({ key, text }) => (
      <MenuItem key={key} value={key}>
        {text}
      </MenuItem>
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <InputLabel>{label}</InputLabel>
            <Select onChange={onChange} value={value} defaultValue='' required>
              {renderMenuItems()}
            </Select>
            <Typography color='error'>{error && error.message}</Typography>
          </>
        );
      }}
      rules={{ ...rules }}
    />
  );
};

export default SelectPrimary;
