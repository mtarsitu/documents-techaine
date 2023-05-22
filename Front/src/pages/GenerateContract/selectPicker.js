// @mui material components

import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";
// Material Kit 2 PRO React components

import MKInput from "components/MKInput";

function SelectPicker({ inputs, setInputs }) {
  const onChange = (e) => {
    setInputs({ ...inputs, coin: ` ${e.target.innerText}` });
    console.log(e.target.innerText);
  };
  return (
    <Autocomplete
      onChange={onChange}
      defaultValue="RON"
      options={["EUR", "USD"]}
      sx={{ width: 300 }}
      renderInput={(params) => <MKInput {...params} variant="standard" />}
    />
  );
}
SelectPicker.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.string, PropTypes.object).isRequired,
  setInputs: PropTypes.func.isRequired,
};
export default SelectPicker;
