import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './signup.css'
import { data } from '../../Services/data/data'
import { useNavigate } from 'react-router';
import { Field, Form, Formik, } from 'formik';

const Signup = () => {

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        data.user.email = values.email;
        data.user.password = values.password;
        data.user.firstName = values.firstName;
        data.user.lastName = values.lastName;
        data.user.contnum = values.contnum;
        console.log(data.user);

        alert('signed up successfully');

        navigate('/Login')
    }

    const validate = (values) => {
        const error = {};
        const NameRegex = /^[a-zA-Z\s]+$/;
        const contnumRegex = /^\d{10}$/;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!NameRegex.test(values.firstName)) {
            error.firstName = "First name should contain only letters.";
            return error;
        }

        if (!NameRegex.test(values.lastName)) {
            error.lastName = "Last name should contain only letters.";
            return error;
        }

        if (!contnumRegex.test(values.contnum)) {
            error.contnum = "contact number should have 10 digit number "
            return error;
        }

        if (!emailRegex.test(values.email)) {
            error.email = "Enter your valid email "
            return error;
        }

        if (!passwordRegex.test(values.password)) {
            error.password = "Must contain at least one number, one uppercase and lowercase letter, and be 8+ characters long."
            return error;
        }

        if (values.password !== values.confirmpassword) {
            error.confirmpassword = 'password do not match.';
        }

        return error;
    };

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    contnum: '',
                    password: '',
                    confirmpassword: ''
                }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) =>
                    <Container className="signuf">
                        {<>{console.log(errors)}</>}
                        <div className="formcon bg-white rounded-xl p-4 w-full max-w-md mx-auto">
                            <Form >
                                <Row className="sheader d-flex justify-content-center">
                                    <Row className="text-center">
                                        <Row>
                                            <h1>Sign Up</h1>
                                        </Row>
                                        <Row className="createacc">
                                            <p>Create an account to continue</p>
                                        </Row>
                                    </Row>
                                    <div className="formf">
                                        <Row className="textbox">
                                            <Field type="text" name="firstName" placeholder="First Name" />
                                            {touched.firstName && errors.firstName && (
                                                <span className="error">{errors.firstName}</span>
                                            )}
                                        </Row>

                                        <Row className="textbox">
                                            <Field type="text" name="lastName" placeholder="Last Name" />
                                            {touched.lastName && errors.lastName && (
                                                <span className="error">{errors.lastName}</span>
                                            )}
                                        </Row>

                                        <Row className="textbox">
                                            <Field type="email" name="email" placeholder="E-Mail" />
                                            {touched.email && errors.email && (
                                                <span className="error">{errors.email}</span>
                                            )}
                                        </Row>

                                        <Row className="textbox w-100">
                                            <Field type="text" name="contnum" placeholder="Contact Number" />
                                            {touched.contnum && errors.contnum && (
                                                <span className="error">{errors.contnum}</span>
                                            )}
                                        </Row>

                                        <Row className="textbox w-100">
                                            <Field type="password" name="password" placeholder="Password" />
                                            {touched.password && errors.password && (
                                                <span className="error">{errors.password}</span>
                                            )}
                                        </Row>

                                        <Row className="textbox w-100">
                                            <Field type="password" name="confirmpassword" placeholder="Confirm Password" />
                                            {touched.confirmpassword && errors.confirmpassword && (
                                                <span className="error">{errors.confirmpassword}</span>
                                            )}
                                        </Row>

                                        <Row className="textbox w-100">
                                            <Button type="submit" className="regbtn w-100">
                                                Register
                                            </Button>
                                        </Row>

                                        <Row>
                                            <p className="mt-3">
                                                Already have an account?
                                                <Button variant="link" onClick={() => navigate('/Login')}>
                                                    Login
                                                </Button>
                                            </p>
                                        </Row>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </Container >
                }
            </Formik >
        </div >
    );
};
export default Signup;
