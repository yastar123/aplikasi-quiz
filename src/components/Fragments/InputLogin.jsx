import PropTypes from "prop-types";
import Input from "../Elements/Input";

const InputLogin = ({ placeholder, text, className, value, onChange }) => {
  return (
    <div>
      <p>{text}</p>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className={`w-full bg-slate-100 rounded-full focus:outline-none focus:ring-0 pl-4 py-3 mt-3 ${className}`}
      />
    </div>
  );
};

InputLogin.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputLogin;
