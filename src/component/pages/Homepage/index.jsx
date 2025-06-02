import React from 'react'
import { Button, } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Menucomponent from './Header/Menubar';
// import profile from './Heading/profile';
// import Herobody from './hero';
import Signup from '../Sign_up';
import Login from '../Login_page';


const Homepage = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div>
                <Menucomponent/>
            </div>
            <div>
                <Button variant="link" onClick={() => navigate('/Signup')}>
                    Signup
                </Button>
                <Button variant="link" onClick={() => navigate('/Login')}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Homepage