import { Button, Container, Row, Col } from 'react-bootstrap';
import './login.css'
import { useNavigate } from 'react-router';
import { data } from '../../Services/data/data';
import { Formik, Field, Form } from 'formik';
import recoveracc from './Forgot_password';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (values) => {

        if (values.email === data.user.email && values.password === data.user.password) {
            // alert("Login Successfully");
            console.log("Login Successfully")
        }

        else {
            // alert("Invalid credentials");
            console.log("invalid credentials")

        }
        // navigate('/Signup');
    };

    return (
        <div>
            <Container>
                <div className='formcon bg-white rounded-xl p-4  mx-auto'>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleSubmit}
                    >

                        <Form  className='formt'>
                            <Row className='sheader justify-content-center text-center '>
                                <Col className='ms-5'>
                                    <h1 className='mb-3'>Login</h1>
                                    <p className='eplog mb-0' >Enter your email and password to log in</p>
                                </Col>
                            </Row>

                            <div className='formf'>
                                <Row className="textbox">
                                    <Field type="email" name="email" placeholder="Enter your email address" required className="form-control" />
                                </Row>

                                <Row className="textbox w-100">
                                    <Field type="password" name="password" placeholder="Enter your password" required className="form-control" />
                                </Row>

                                <Row>
                                    <Button variant='link' className="text-center  ms-5 me-0 mb-3" onClick={() => navigate('/Recoveracc')}>
                                        Forgot password
                                    </Button>


                                </Row>

                                <Row className='textbox mb-3'>
                                    <Col>
                                        <Button type='submit' className='w-100 bg-primary' >
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
                        </Form>
                    </Formik>
                </div>
            </Container >
        </div >
    );
};

export default Login;

