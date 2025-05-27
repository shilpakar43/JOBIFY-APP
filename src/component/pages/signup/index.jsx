import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './signup.css';
// import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        contnum: '',
        password: '',
        confirmpassword: '', // fixed spelling
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmpassword) {
            alert('Passwords do not match!');
            return;
        }

        // Simulate saving data
        const data = { user: formData };
        console.log('Form Data:', data.user);
        alert('Sign up successful!');
    };

    return (
        <div>
            <Container className="signuf">
                <div className="formcon bg-white rounded-xl p-4 w-full max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="formt">
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
                                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                                </Row>

                                <Row className="textbox">
                                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                                </Row>

                                <Row className="textbox">
                                    <input type="email" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <input type="text" name="contnum" placeholder="Contact Number" value={formData.contnum} onChange={handleChange} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                                </Row>

                                <Row className="textbox w-100">
                                    <input type="password" name="confirmpassword" placeholder="Confirm Password" value={formData.confirmpassword} onChange={handleChange} required />
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

                                        <Button variant="link" onClick={() => navigate('/login')}>
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
