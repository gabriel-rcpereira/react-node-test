import { Button, Paper } from "@mui/material";
import { useForm } from "react-hook-form";

import InputPrimary from "../../../commons/InputPrimary";
import SelectPrimary from "../../../commons/SelectPrimary";
import InputDatePrimary from "../../../commons/InputDatePrimary";

interface IUserForm {
  firstName: string;
  surname: string;
  country: string;
  birthday: string;
}

const UserForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<IUserForm>({
    defaultValues: {
      firstName: "",
      surname: "",
      country: "",
      birthday: "",
    },
  });

  const onSubmitHandler = (data: IUserForm) => {
    console.log(data);
  };

  return (
    <Paper>
      <h1>Users Page</h1>
      <InputPrimary label='First Name' name='firstName' control={control} />
      <InputPrimary label='Surname' name='surname' control={control} />
      <SelectPrimary
        label='Countries'
        name='country'
        control={control}
        options={[{ key: "BR", text: "Brazil" }]}
      />
      <InputDatePrimary label='Birthday' name='birthday' control={control} />
      <Button onClick={handleSubmit(onSubmitHandler)} variant='outlined'>
        Save
      </Button>
    </Paper>
  );
};

export default UserForm;
