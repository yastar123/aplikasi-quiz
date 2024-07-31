import PropTypes from "prop-types";

const Alert = ({ message, type }) => {
  const alertType = type === "success" 
    ? "bg-green-100 border-green-400 text-green-700" 
    : "bg-red-100 border-red-400 text-red-700";

  return (
    <div className={`border-l-4 p-4 ${alertType} mb-4`} role="alert">
      <p className="font-bold">{type === "success" ? "Success" : "Error"}</p>
      <p>{message}</p>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
