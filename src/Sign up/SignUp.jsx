import React, { useState } from "react";
import farmer from "../assets/pictures/farmer.png";
import "../index.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import SignWays from "./components/SignWays";
import ResetPassword from "./components/ResetPassword";

const SignUp = () => {
  const [signOption, setSignOption] = useState("up");
  const [showResetForm, setShowResetForm] = useState(false);

  const handleOptionClick = (option) => {
    setSignOption(option);
  };

  return (
    <>
      <div className="flex w-screen h-screen ">
        <div className="relative flex flex-col bg-green basis-[35%] bg-primary justify-center flex-shrink-0">
          <img src={farmer} className="absolute left-[15%] " />
        </div>

        <div className="  flex flex-col items-center justify-center basis-[65%] flex-shrink-0">
          <div className="flex flex-col items-center justify-center">
            {!showResetForm ? (
              <>
                <h2 className="font-bold tracking-wider text-nightblue place-self-start my-6 justify-self-start">
                  {signOption === "up" ? "Create an account" : "Log in"}
                </h2>
                {/* other ways to sign up */}
                <SignWays way={signOption} />
                <span className=" cursor-default text-gray-500 font-semibold">
                  - OR -
                </span>
                {signOption === "in" && (
                  <SignInForm
                    onClick={() => handleOptionClick("up")}
                    setShowResetForm={setShowResetForm}
                  />
                )}
                {signOption === "up" && (
                  <SignUpForm onClick={() => handleOptionClick("in")} />
                )}
              </>
            ) : (
              <ResetPassword setShowResetForm={setShowResetForm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
