import Anime from "../Animation/anime";
import LoginLeft from "../components/Layout/LoginLeft";
import LoginRight from "../components/Layout/LoginRight";
import StarrySky from "../Animation/StarrSky";
import { useState } from "react";
import RegisterLeft from "../components/Layout/RegisterLeft";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleAuth = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div>
      <StarrySky />
      <Anime />
      <div className="mt-20 max-w-5xl mx-auto bg-white relative">
        <div className="absolute lg:flex  w-full block ">
          <LoginRight
            text={isRegister ? "register" : "login"}
            title={isRegister ? "register" : "login"}
            button={isRegister ? "register" : "login"}
            onClick={toggleAuth}
          />
          {isRegister ? (
            <RegisterLeft title={"register"} button={"register"} />
          ) : (
            <LoginLeft title={"login"} paswoord={"login"} button={"login"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
