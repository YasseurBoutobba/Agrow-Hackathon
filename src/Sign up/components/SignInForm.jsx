import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInForm = ({ onClick, setShowResetForm }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password must include at least one letter and one number"
      ),
  });

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className=" w-[28rem] mt-10 flex flex-col items-center gap-[0.5rem]">
          <div className="mb-4 flex w-full flex-col">
            <div className="form-input">
              <Field
                id="email"
                placeholder="Email"
                className=" w-full border-0 p-0 pr-1 placeholder-gray-200 outline-none rounded-none"
                type="text"
                name="email"
              />
            </div>
            <ErrorMessage name="email" component="div" className="error-msg" />
          </div>

          <div className="mb-4 flex w-full flex-col">
            <div className="form-input">
              <Field
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                className="w-full border-0 p-0 pr-1 placeholder-gray-200 outline-none rounded-none"
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="error-msg"
            />
            <small
              className="py-2 w-max cursor-pointer text-gray-400 text-xs font-light hover:text-primary"
              onClick={() => setShowResetForm(true)}
            >
              Forgot password?
            </small>
          </div>

          <button
            type="submit"
            className=" w-64 min-h-max rounded-xl bg-primary text-white p-1.5 text-base font-semibold hover:shadow-inner"
          >
            Log in
          </button>
          <p className=" text-gray-600 text-sm font-light">
            Don't have an account?{" "}
            <a className=" text-primary font-semibold" onClick={onClick}>
              Sign up
            </a>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default SignInForm;
