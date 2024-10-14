import Anime from "../Animation/anime";
import StarrySky from "../Animation/StarrSky";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Input from "../components/Elements/Input";
import FormLayout from "../components/Layout/FormLayout";
import ErrorAlert from "../components/Elements/ErrorAlert";
import Button from "../components/Elements/Button";
import SuccessAlert from "../components/Elements/SuccessAlert";

const Register = () => {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleTeks = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const { fullname, email, password } = formData;
    const auth = getAuth();
    setError('');
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: fullname,
        })
          .then(() => {
            setFormData({
              fullname: "",
              email: "",
              password: "",
            });
            setSuccess(true);
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/weak-password") {
          setError("Sandi harus lebih dari 5 karakter.");
        } else {
          setError(error.message);
        }
      });
  };

  const handleError = () => {
    setError(false);
  };

  return (
    <div>
      <StarrySky />
      <Anime />
      <div className="max-w-5xl mx-auto relative">
        <div className=" text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
          {error && <ErrorAlert message={error} onClose={() => setError('')} />}
          {success && <SuccessAlert message="Akun berhasil dibuat!" onClose={() => setSuccess(false)} />}
          <FormLayout title="Register" subtitle="Create your account">
            <form className="p-6 pt-0" onSubmit={handleRegister}>
              <Input
                id="fullname"
                label="Fullname"
                value={formData.fullname}
                onChange={handleTeks}
                placeholder="Jhon Doe"
              />
              <div className="my-4">
                <Input
                  id="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleTeks}
                  placeholder="Example@gmail.com"
                />
              </div>
              <Input
                id="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleTeks}
                placeholder="********"
                className="my-4"
              />
              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="outline-none focus:outline focus:outline-sky-300"
                  />
                  <span className="text-xs">Remember me</span>
                </label>
                <a href="/forgot-password">
                  <p className="text-sm font-medium text-foreground underline">
                    Forgot password?
                  </p>
                </a>
              </div>
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <Button type="submit" label="Register" />
              </div>
            </form>
            <p className="tracking-widest">Already have an account? <a href="/" className="underline text-black">Login</a></p>
          </FormLayout>
        </div>
      </div>
    </div>
  );
};

export default Register;
