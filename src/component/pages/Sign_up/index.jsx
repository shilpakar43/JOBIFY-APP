import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './signup.css'
import { data } from '../../Services/data/data'
import { useNavigate } from 'react-router';

const Signup = () => {
    const [formData, setFormData] = useState({
        data
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmpassword: event.target.confirmpassword.value
        }

        if (formData.password === formData.confirmpassword) {
            data.user = formData;
            console.log(data.user)
            alert("Signed Up Successfully")
        } else {
            alert("Password Does not Match!!")
        }


    };

    const navigate = useNavigate();

    return (
        <div>
            <Container className="signuf">
                <div className="formcon bg-white rounded-xl p-4 w-full max-w-md mx-auto">
                    <form onSubmit={handleSubmit}>
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
                                    <input type="text" name="firstName" placeholder="First Name" defaultValue={formData.firstName} required />
                                </Row>

                                <Row className="textbox">
                                    <input type="text" name="lastName" placeholder="Last Name" defaultValue={formData.lastName} required />
                                </Row>

                                <Row className="textbox">
                                    <input type="email" name="email" placeholder="E-Mail" defaultValue={formData.email} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <input type="text" name="contnum" placeholder="Contact Number" defaultValue={formData.contnum} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <input type="password" name="password" placeholder="Password" defaultValue={formData.password} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <input type="password" name="confirmpassword" placeholder="Confirm Password" defaultValue={formData.confirmpassword} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <Button type="submit" className="regbtn w-100">
                                        Register
                                    </Button>
                                </Row>

                                <Row>
                                    <p className="mt-3">
                                        Already have an account?
                                        {/* <a href="/">Login</a> */}

                                        <Button variant="link" onClick={() => navigate('/Login')}>
                                            Login
                                        </Button>
                                    </p>
                                </Row>
                            </div>
                        </Row>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
