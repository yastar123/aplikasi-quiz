import Anime from "../Animation/anime";
import StarrySky from "../Animation/StarrSky";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from "../components/Elements/Button";
import ErrorAlert from "../components/Elements/ErrorAlert";
import Input from "../components/Elements/Input";
import FormLayout from "../components/Layout/FormLayout";

const Login = () => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    const auth = getAuth();
    setError('');

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        navigate("/quiz");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          setError("Pengguna tidak ditemukan. Harap lakukan registrasi terlebih dahulu.");
        } else if (errorCode === "auth/wrong-password") {
          setError("Password salah. Silakan coba lagi.");
        } else {
          setError("Terjadi kesalahan. Silakan Registrasi terlebih dahulu.");
        }
      });
  };

  return (
    <div>
      <StarrySky />
      <Anime />
      <div className="max-w-5xl mx-auto relative">
        <div className=" text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
          {error && <ErrorAlert message={error} onClose={() => setError('')} />}
          <FormLayout title="Login" subtitle="Sign in to your account">
            <form onSubmit={handleSubmitLogin}>
              <Input
                id="email"
                label="Email"
                value={formData.email}
                onChange={handleTextChange}
                placeholder="Example@gmail.com"
              />
              <Input
                id="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleTextChange}
                placeholder="********"
                className="my-4"
              />
              <div className="mt-4 flex items-center gap-x-2 text-center">
                <Button label="Login" type="submit" />
              </div>
              <div className="mt-6">
                <p className="text-base tracking-widest text-muted-foreground">
                  Don't have an account? {" "}
                  <a href="/register" className="font-medium underline text-black  tracking-widest">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </FormLayout>
        </div>
      </div>
    </div>
  );
};

export default Login;
