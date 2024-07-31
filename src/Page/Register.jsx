import Anime from "../Animation/anime";
import RegisterLeft from "../components/Layout/RegisterLeft";
import LoginRight from "../components/Layout/LoginRight";
import StarrySky from "../Animation/StarrSky";
import { useState } from "react";
import LoginLeft from "../components/Layout/LoginLeft";

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <StarrySky />
      <Anime />
      <div className="my-20 max-w-5xl mx-auto bg-white relative">
        <div className="absolute lg:flex w-full block">
          <LoginRight
            text={isLogin ? "login" : "register"}
            title={isLogin ? "login" : "register"}
            button={isLogin ? "login" : "register"}
            onClick={toggleAuth}
          />
          {isLogin ? (
            <LoginLeft title={"login"} paswoord={"login"} button={"login"} />
          ) : (
            <RegisterLeft title={"register"} button={"register"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
