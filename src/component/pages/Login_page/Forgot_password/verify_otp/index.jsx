import React from 'react'
import { Button, Row, } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import Recoveracc from '../Recoveracc/index'
import { data } from '../../../../Services/data/data'
import { useNavigate } from 'react-router'
import CnPass from '../create_new_password';
import './verify.css';

const VerifyOtp = () => {

    const navigate = useNavigate();

    const handleSubmit = (value) => {
        console.log(value)
        console.log(data.otp)

        if (value.otp === data.otp) {

            alert('OTP is valid')

            // console.log('OTP is valid');
            navigate('/CnPass')
        } else {
            alert("Invalid OTP");
        }
    };


    return (
        <div>
            <Formik
                initialValues={{ otp: '' }}
                onSubmit={handleSubmit}
            >

                <Form className='formf'>
                    <Row>
                        <Button variant="link" onClick={() => navigate('/Recoveracc')} className='back'> {'<'} </Button>
                    </Row>

                    <h4>Enter your OTP</h4>

                    <Row className="textbox">
                        <Field type="otp" name="otp" placeholder="Enter the OTP..." />
                    </Row>
                    <button type='submit' className="generate-btn" >
                        submit
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default VerifyOtp