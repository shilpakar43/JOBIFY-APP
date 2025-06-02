import React from 'react'
import { Button, } from 'react-bootstrap'
import { Form } from 'formik'
import Recoveracc from '../index'

const verifyotp = () => {
    return (
        <div>
            <Form>
                <Row>
                    <Button variant="link" onClick={() => navigate('/Recoveracc')} className='my-4'> {'<'} </Button>
                </Row>
                <h1>Enter your OTP</h1>
                <input
                    type="email" value={otp} placeholder="Enter your OTP" className="otp-display"
                />
                <button className="generate-btn" >
                    Generate OTP
                </button>
            </Form>
        </div>
    )
}

export default verifyotp