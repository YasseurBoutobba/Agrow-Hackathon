import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ResetPassword = ({ setShowResetForm }) => {
  const handlePasswordReset = (values) => {
    // Implement the logic to reset the user's password
    // Call an API endpoint or send a request to the backend
    // Pass the 'values.password' and 'resetToken' to the backend for resetting the password

    // For demonstration purposes, let's assume the password reset is successful
    setShowResetForm(false);
  };
  return (
    <>
      <h2>Reset Password</h2>
      <Formik initialValues={{ email: "" }} onSubmit={handlePasswordReset}>
        <Form>
          {/* Form fields for resetting password */}
          <Field type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className="error-msg" />
          <button type="submit">Reset Password</button>
        </Form>
      </Formik>
      <p onClick={() => setShowResetForm(false)}>Back to sign-up</p>
    </>
  );
};

export default ResetPassword;
