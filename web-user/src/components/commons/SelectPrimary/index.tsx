import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

type IOptionProp = { key: string; value: string };

interface IProps {
  label: string;
  options: IOptionProp[];
}

const SelectPrimary: React.FC<IProps> = ({ label, options }): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <TextField
      select
      label={label}
      placeholder={label}
      style={{ minWidth: "150px" }}
      value={selectedValue}
      onChange={handleOnChange}
    >
      {options.map(({ key, value }) => (
        <MenuItem key={key} value={value}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectPrimary;
