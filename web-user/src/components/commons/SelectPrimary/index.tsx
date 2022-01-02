import { MenuItem, Select, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";

type IOptionProp = { key: string; text: string };

interface IProps {
  label: string;
  options: IOptionProp[];
  name: string;
  control: any; // FIXME
}

const SelectPrimary: React.FC<IProps> = ({
  label,
  options,
  name,
  control
}): JSX.Element => {
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
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <InputLabel>{label}</InputLabel>
            <Select onChange={onChange} value={value} defaultValue=''>
              {renderMenuItems()}
            </Select>
          </>
        );
      }}
    />
  );
};

export default SelectPrimary;
