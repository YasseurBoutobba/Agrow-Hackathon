import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = ({onClick}) => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
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
            <label htmlFor="email" className="pb-1"></label>
            <div className="form-input">
              <Field
                id="fullName"
                placeholder="Full name"
                className=" w-full border-0 p-0 pr-1 placeholder-gray-200 outline-none rounded-none"
                type="text"
                name="fullName"
              />
            </div>
            <ErrorMessage
              name="fullName"
              component="div"
              className="error-msg"
            />
          </div>

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
          </div>

          <button
            type="submit"
            className=" w-64 min-h-max rounded-xl bg-primary text-white p-1.5 text-base font-semibold hover:shadow-inner"
          >
            Sign up
          </button>
          <p className=" text-gray-600 text-sm font-light">
            Already have an account?{" "}
            <a className=" text-primary font-semibold" onClick={onClick} >Log in</a>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
