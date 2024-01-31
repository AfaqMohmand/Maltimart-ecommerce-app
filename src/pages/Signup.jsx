import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { storage } from "../firebase.config";
import { auth } from "../firebase.config";
import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { toast } from "react-toastify";
import { async } from "@firebase/util";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = userCredential.user;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(
        "🚀 ~ file: Signup.jsx:32 ~ userSignup ~ userCredential",
        userCredential
      );
      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      console.log("🚀 ~ file: Signup.jsx:38 ~ userSignup ~ uploadTask", uploadTask)
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update userProfile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            // store userdate in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
        );
      setLoading(false);
      toast.success("Account created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12">
                <h6 className="text-center">Loading ...</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold fs-4">Signup</h3>
                <Form className="auth__form" onSubmit={() => userSignup}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Enter user name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Enter Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button className="buy__btn auth__btn" type="submit">
                    Create an Account
                  </button>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;
