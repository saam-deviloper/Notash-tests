import React, { useState } from "react";
import { Alert, Badge, Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../../Firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { Provider } from "@frontegg/react";

export default function Login() {
  const [show, setShow] = useState(true);

  //create navigate route
  const navigate = useNavigate();
  //formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      //username regex
      username: Yup.string()
        .email("invalid email address")
        .required("*Required"),

      //password  regex
      password: Yup.number()
        .min(5, "Too Short!")
        // .max(100, "Too Long!")
        .required("*Required"),
    }),
    //button login
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.username, Number(values.password))
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((err) => {
          const error = err.message;
        });
      alert(JSON.stringify(values, null, 2), "welcome ");
    },
  });

  return (
    <>
      {/* alert */}
      {show && (
        <Alert
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
          className="text-center rounded"
        >
          <Alert.Heading>
            connect your VPN to authenticate with FIREBASE!
          </Alert.Heading>
          <p>
            test for username : test1234@gmail.com <br />
            password : 123456
          </p>
        </Alert>
      )}

      {/* form */}
      <div className="container w-50 mt-5 border shadow rounded">
        <div className="text-center">
          <h1 className="display-4  mb-5 mt-2 d-inline ms-auto me-auto">
            Login form
          </h1>
          <Badge bg="primary" pill style={{}}>
            Formik
          </Badge>
        </div>
        {/* login form */}
        <Form onSubmit={formik.handleSubmit}>
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
              placeholder="Enter password"
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
          <Button
            variant="success"
            type="submit"
            className="mb-2 w-75 ms-auto me-auto d-block"
          >
            Login
          </Button>
          <Button
            variant="info"
            type="button"
            className="mb-2 w-75 ms-auto me-auto d-block"
            onClick={() => {
              
              const provider = new GoogleAuthProvider();
              provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
              signInWithPopup(auth, provider)
                .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  navigate('/')
                })
                .catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // The email of the user's account used.
                  const email = error.customData.email;
                  // The AuthCredential type that was used.
                  const credential =
                    GoogleAuthProvider.credentialFromError(error);
                  // ...
                });
            }}
          >
            Login with Google
          </Button>
        </Form>
        <p className="text-center">
          not have an account?{" "}
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}
