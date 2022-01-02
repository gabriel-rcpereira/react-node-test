import InputPrimary from "../../../commons/InputPrimary";
import SelectPrimary from "../../../commons/SelectPrimary";
import InputDatePrimary from "../../../commons/InputDatePrimary";

const UserForm = (): JSX.Element => {
  return (
    <form>
      <h1>User Form</h1>
      <InputPrimary label='First Name' />
      <InputPrimary label='Surname' />
      <SelectPrimary
        label='Countries'
        options={[{ key: "BR", value: "Brazil" }]}
      />
      <InputDatePrimary label='Birthday' />
    </form>
  );
};

export default UserForm;
