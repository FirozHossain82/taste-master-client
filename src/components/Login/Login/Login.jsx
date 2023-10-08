import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginAnimation from "../../../assets/loginAnimation.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import useTittle from "../../hooks/useTittle.jsx";

const Login = () => {
  const {
    loginWithEmailPassword,
    googleSignIn,
    signInWithGithub,
    passwordReset,
  } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    generalError: "",
  });
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    loginWithEmailPassword(userInfo.email, userInfo.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        event.target.reset();
        setSuccess("Successfully login");
        toast.success("login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrors({ ...errors, generalError: error.message });
      });
  };
  const handleEmail = (event) => {
    const email = event.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please Provide a valid email" });
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

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then((result) =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      toast.success('login successful')
      navigate(location.state?.from?.pathname || "/")
      setErrors({...errors, generalError:""})
    })
    .catch((error) =>{
      console.log(error)
      setErrors({...errors, generalError:error.message})
    })
  }

  const handleGitHubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const githubUser = result.user;
        console.log(githubUser);
        toast.success("github  login successful");
        setErrors({ ...errors, generalError: "" });
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((err) => {
        console.error(err);
        setErrors({ ...errors, generalError: err.message });
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    passwordReset(userInfo.email)
        .then((result) => {
            toast.success("Check your inbox/spam to reset!")
        })
        .catch((error) =>{
          console.log(error.message);
          toast.error(error.message);
        })
}
  useTittle("Login");
  return (
    <div className="my-container flex flex-col lg:flex-row justify-center items-center my-12">
      <div className="w-full lg:w-[40%]">
      <Lottie animationData={loginAnimation} loop={true} />
      </div>
      <div className="w-full lg:w-[40%] bg-slate-100 px-5 py-10  rounded-xl shadow-xl ">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold font-serif">Email</span>
            </label>
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              //   ref={emailRef}
              placeholder="email"
              className="input input-bordered w-full"
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <div className="form-control mb-6 relative">
            <label className="label">
              <span className="label-text  font-semibold font-serif">Password</span>
            </label>
            <input
              onChange={handlePassword}
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
            />
            <p
              className="absolute top-[54px] right-[15px]"
              onClick={() => setShowPass(!showPass)}
            >
              <p>{showPass ? <FaEye /> : <FaEyeSlash />}</p>
            </p>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <button
              onClick={handleResetPassword}
              className="text-left ml-1 mt-4 mb-0 hover:underline"
            >
              <p className="text-base ">Forgot password?</p>
            </button>
          </div> 
          <input
            type="submit"
            value="Login"
            className=" w-full btn btn-outline btn-primary mb-2 "
          />
          {
            errors.generalError && <p className='text-red-500'>{errors.generalError}</p>
          }
          <p className="text-center mt-4 mb-6">
            <small className="text-base">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-base text-blue-500">
                Register
              </Link>
            </small>
          </p>
        </form>
        <div className="divider mb-6">OR</div>
        {/* Social login  */}
        <div className=" flex flex-col md:flex-row gap-5 justify-center items-center">
          <button
            onClick={handleGoogleSignIn}
            className="social-btn hover:bg-cyan-500 text-orange-600 hover:text-white border-[#3cba54]"
          >
            <FaGoogle className="text-2xl" /> Login With Google
          </button>
          <button
            onClick={handleGitHubSignIn}
            className="social-btn hover:bg-slate-700 text-[#181717] hover:text-white border-[#181717]"
          >
            <FaGithub className="text-2xl" /> Login With Github
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
