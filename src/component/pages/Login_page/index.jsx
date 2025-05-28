import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './login.css'
import { useNavigate } from 'react-router';
import { data } from '../../Services/data/data';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (data.user.email === email && data.user.password === password) {
            alert(`Welcome back, ${data.user.firstName}!`);
        } else {
            alert("Invalid email or password")
        }
    };

    const navigate = useNavigate();

    return (
        <div>
            <Container>
                <div className='formcon bg-white rounded-xl p-4 w-full max-w-md mx-auto'>
                    <form onSubmit={handleSubmit} className='formt'>
                        <Row className='sheader justify-content-center text-center mb-4'>
                            <Col>
                                <h1>Login</h1>
                                <p className='eplog'>Enter your email and password to log in</p>
                            </Col>
                        </Row>

                        <div className='formf'>
                            <Row className='textbox'>
                                <Col>
                                    <input type="email" name="email" placeholder="example@gmail.com" defaultValue={formData.email} required className="form-control" />
                                </Col>
                            </Row>

                            <Row className='textbox '>
                                <Col>
                                    <input type="password" name="password" placeholder="Enter Your Password" defaultValue={formData.password} required className="form-control" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">

                                    <Button variant='link' className='ms-5 mb-3 me-0 pe-0 '  >
                                        Forgot Password
                                    </Button>

                                </Col>
                            </Row>

                            <Row className='textbox mb-3'>
                                <Col>
                                    <Button className='w-100 bg-primary' type="submit" >
                                        Login
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-center">
                                    <p className="mt-3">
                                        Don't have an account?
                                        <Button variant='link' onClick={() => navigate('/Signup')}>
                                            Signup
                                        </Button>

                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </form>
                </div>
            </Container >
        </div >
    );
};

export default Login;

