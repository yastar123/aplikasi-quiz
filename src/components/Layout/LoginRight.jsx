import Button from "../Elements/Button";
import PropTypes from "prop-types";

const LoginRight = ({ title, text, button, onClick }) => {
  return (
    <div className="py-4 lg:py-0 lg:flex justify-center items-center w-full bg-gradient-to-r from-[#022f40] to-[#38a9cc] font-mono">
      <div className="flex justify-center items-center text-center">
        <div className="text-white">
          <p className="font-bold text-3xl">
            {title === "login" ? "Welcome to login" : "Welcome to register"}
          </p>
          <p className="mt-2">
            {text === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Button
            text={button === "login" ? "Register" : "Login"}
            className="hover:text-black text-white border-2 border-white rounded-full px-4 py-2 mt-10 hover:bg-white"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

LoginRight.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default LoginRight;
