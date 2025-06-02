import { Button, Container, Row, Col } from 'react-bootstrap';
import './recover.css'
import { useNavigate } from 'react-router';
import { data } from '../../../../Services/data/data';
import { Formik, Field, Form } from 'formik';
import Login from '../..';
import verifyotp from '../verify_otp';
const Recoveracc = () => {

    const navigate = useNavigate();

    const handleSubmit = (value) => {
        console.log(value)
        console.log(data.user)
        if (value.email === data.user.email) {

            const generatedOtp = generateOTP(6);
            console.log('Generated OTP:', generatedOtp);
            data.otp = generatedOtp;
            alert('check console for otp')
            navigate('/verifyotp');
        } else {
            alert("Invalid E-mail");
        }
    };

    const generateOTP = (length) => {
        let otp = '';
        const characters = '0123456789';
        for (let i = 0; i < length; i++) {
            otp += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return otp;
    };

    return (
        <div>
            <Container>
                <div className='formcon bg-white rounded-xl p-4  mx-auto'>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={handleSubmit}
                    >

                        <Form className='formt'>

                            <Row>
                                <Button onClick={() => navigate('/Login')} className='back'> {'<'} </Button>
                            </Row>

                            <Row className='sheader justify-content-center text-center '>
                                <Col className='ms-4'>
                                    <h2 className='mb-3'>Reset Password</h2>
                                </Col>
                            </Row>

                            <div className='formf'>
                                <Row className="textbox">
                                    <Field type="email" name="email" placeholder="Enter your email address" required className="form-control" />
                                </Row>

                                <Row className='textbox mb-3'>
                                    <Col>
                                        <Button type='submit' className='w-100 bg-primary' >
                                            Recover Account
                                        </Button>
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

export default Recoveracc;

