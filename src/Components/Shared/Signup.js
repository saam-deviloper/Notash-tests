import React from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../../Firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Signup() {
  //formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      RePassword: "",
    },

    validationSchema: Yup.object({
        //regex displayname
        DispName: Yup.string()
        .min("invalid name")
        .required("*Required"),
      //username regex
      username: Yup.string()
        .email("invalid email address")
        .required("*Required"),

      //password  regex
      password: Yup.string()
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("*Required"),
      //repass regex
      RePassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
    }),
    //button login
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      createUserWithEmailAndPassword(auth,values.email,values.password)
    },
  });

  return (
    <>
      <div className="container w-50 shadow mt-5 border shaddow rounded">
        <h1 className="display-4 text-center mb-5 mt-2">signup form</h1>
        {/* login form */}
        <Form onSubmit={formik.handleSubmit}>
          {/* displayname form group */}
          <Form.Group
            className="mb-3 w-75 ms-auto me-auto"
            controlId="formBasicDispName"
          >
            <Form.Label>DispalyName </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              {...formik.getFieldProps("DispName")}
              className=" border-1 border-info "
            />
            {/* if error exist in email/username show error */}
            {formik.touched.DispName && formik.errors.DispName ? (
              <Form.Text className="text-muted">
                {formik.errors.DispName}
              </Form.Text>
            ) : null}
          </Form.Group>
          
          {/* email form group */}
          <Form.Group
            className="mb-3 w-75 ms-auto me-auto"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...formik.getFieldProps("username")}
              className=" border-1 border-info "
            />
            {/* if error exist in email/username show error */}
            {formik.touched.username && formik.errors.username ? (
              <Form.Text className="text-muted">
                {formik.errors.username}
              </Form.Text>
            ) : null}
          </Form.Group>

          {/* password form group */}

          <Form.Group
            className="mb-4 mt-2 w-75 ms-auto me-auto"
            controlId="formBasicPassword"
          >
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password (0-9 digits)"
              {...formik.getFieldProps("password")}
              className=" border-1 border-info "
            />
            {/* if error exist in email/username show error */}
            {formik.touched.password && formik.errors.password ? (
              <Form.Text className="text-muted">
                {formik.errors.password}
              </Form.Text>
            ) : null}
          </Form.Group>

          {/* Re-password form group */}

          <Form.Group
            className="mb-4 mt-2 w-75 ms-auto me-auto"
            controlId="formBasicRePassword"
          >
            <Form.Label>Re-password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Re-password"
              {...formik.getFieldProps("RePassword")}
              className=" border-1 border-info "
            />
            {/* if error exist in email/username show error */}
            {formik.touched.RePassword && formik.errors.RePassword ? (
              <Form.Text className="text-muted">
                {formik.errors.RePassword}
              </Form.Text>
            ) : null}
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="mb-2 ms-auto me-auto w-75 d-block"
          >
            Signup
          </Button>
        </Form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
