import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTittle from "../../hooks/useTittle.jsx";
import registerAnimation from "../../../assets/registrationAnimation.json";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    generalError: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  useTittle("Register");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(createdUser, name, photo);
        setErrors({ ...errors, generalError: "" });
        toast.success("Registration successful");
        navigate(location.state?.from?.pathname || "/", { replace: true });
        handleSignOutAfterReg();
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setErrors({ ...errors, generalError: err.message });
      });
  };
   // control(LogOut) sign in after register
   const handleSignOutAfterReg = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
        // setError(err.message);
        toast.error(err.message);
      });
  };
  const handleEmail = (event) => {
    const email = event.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please Enter a valid Email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: email });
    }
  };
  const handlePassword = (event) => {
    const password = event.target.value;
    const lengthError = password.length < 6;
    const noSymbolError = !/(?=.*[!@#$&*]){1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);
    if (lengthError) {
      setErrors({ ...errors, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    } else if (noSymbolError) {
      setErrors({
        ...errors,
        password: "Password must be a one Special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (noCapitalLetterError) {
      setErrors({
        ...errors,
        password: "Password at least one Capital letter",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: password });
    }
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center px-10  ">
      <div className="w-full lg:w-[40%]">
        <Lottie animationData={registerAnimation} loop={true} />
      </div>
      <div className="w-full lg:w-[40%] bg-slate-100 px-5 py-10 mt-10 mb-10  rounded-xl shadow-xl">
        <h2 className="text-center text-3xl  font-serif font-semibold mb-5">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="text-base font-serif">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* photo url */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="text-base font-serif">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered w-full"
            />
          </div>
          {/* email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="text-base font-serif">Email</span>
            </label>
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          {/* password  */}
          <div className="form-control mb-6 relative">
            <label className="label">
              <span className="text-base font-serif">Password</span>
            </label>
            <input
            onChange={handlePassword}
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
            <p
              className="absolute top-[54px] right-[15px]"
              onClick={() => setShowPass(!showPass)}
            >
              <p>{showPass ? <FaEye /> : <FaEyeSlash />}</p>
            </p>
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <input
            type="submit"
            value="Register"
            className="my-btn my-3 w-full hover:bg-transparent hover:text-[#2396DC] transition-all duration-200 ease-in-out"
          />
          {errors.generalError && (
            <p className="text-red-500">{errors.generalError}</p>
          )}
          <p className="text-center mt-4 mb-6">
            <small className="text-lg font-medium">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-[#2396DC]">
                Login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
