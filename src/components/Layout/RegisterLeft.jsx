import InputLogin from "../Fragments/InputLogin";
import Button from "../Elements/Button";
import { useState } from "react";
import Alert from "../Elements/Alert";

const RegisterLeft = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    setAlert({ message: "Registration successful! You can now log in.", type: "success" });
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="w-full font-mono py-10 px-10 bg-white">
      {alert.message && <Alert message={alert.message} type={alert.type} />}
      <div className="flex justify-between">
        <h1 className="text-3xl">Register</h1>
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
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <Button
          text="Register"
          className="bg-gradient-to-r from-[#022f40] to-[#38a9cc] text-white mt-10 w-full rounded-full py-3 text-xl
          hover:bg-white hover:text-black"
          type="submit"
        />
      </form>
    </div>
  );
};

export default RegisterLeft;
