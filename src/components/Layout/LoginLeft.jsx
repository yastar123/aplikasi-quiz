import InputLogin from "../Fragments/InputLogin";
import Button from "../Elements/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import Alert from "../Elements/Alert";
import SocialButton from "../Fragments/SosialButton";
import { useNavigate } from "react-router-dom";

const LoginLeft = ({ paswoord }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredEmail = localStorage.getItem("Email");
    const registeredPassword = localStorage.getItem("Password");

    if (email === registeredEmail && password === registeredPassword) {
      setAlert({ message: "Login successful!", type: "success" });
      localStorage.setItem("token", "token");
      navigate("/quiz");
    } else if (email === registeredEmail || password === registeredPassword) {
      setAlert({ message: "Wrong Email or password", type: "error" });
    } else {
      setAlert({
        message: "Login failed! Please register first.",
        type: "error",
      });
    }
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="w-full font-mono py-10 px-10 bg-white">
      {alert.message && <Alert message={alert.message} type={alert.type} />}
      <div className="flex justify-between">
        <h1 className="text-3xl">Login</h1>
        <div className="flex gap-2">
          <SocialButton imgSrc="/src/assets/google.svg" altText="Google" />
          <SocialButton imgSrc="/src/assets/github.svg" altText="GitHub" />
        </div>
      </div>
      <form className="mt-10" onSubmit={handleSubmit}>
        <InputLogin
          placeholder="Email"
          text="Email"
          className="my-5"
          value={email}
          onChange={handleInputChange(setEmail)}
        />
        <InputLogin
          placeholder="Password"
          text="Password"
          type="password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <Button
          text="Login"
          className="bg-gradient-to-r from-[#022f40] to-[#38a9cc] text-white mt-10 w-full rounded-full py-3 text-xl
            hover:bg-red-500 hover:text-black z-20"
          type="submit"
        />
      </form>
      <div className="flex justify-between mt-5">
        <label className="flex">
          <input type="checkbox" className="mr-5" />
          <p>Remember Me</p>
        </label>
        {paswoord && <p>Forgot Password?</p>}
      </div>
    </div>
  );
};

LoginLeft.propTypes = {
  paswoord: PropTypes.string,
};

export default LoginLeft;
