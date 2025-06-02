import { Button, Container, Row } from 'react-bootstrap';
import { data } from '../../../../Services/data/data'
import { useNavigate } from 'react-router';
import { Field, Form, Formik, } from 'formik';
import './cre.css'

const CnPass = () => {

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        data.user.password = values.password;

        alert('password change successfully')
        navigate('/Login')
    }

    const validate = (values) => {
        const error = {};

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
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
                    password: '',
                    confirmpassword: ''
                }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) =>
                    <Container>
                        {<>{console.log(errors)}</>}
                        <div className="formcon bg-white rounded-xl p-4 w-full max-w-md mx-auto">
                            <Form >
                                <Row className="sheader d-flex justify-content-center">
                                    <Row className="text-center">
                                        <Row>
                                            <Button variant="link" onClick={() => navigate('/verifyotp')} className='back'> {'<'} </Button>
                                        </Row>
                                        <Row className="createacc">
                                            <p>Create new password</p>
                                        </Row>
                                    </Row>
                                    <div className="formf">

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
                                                Update password
                                            </Button>
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
export default CnPass;
