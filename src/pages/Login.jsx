import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoFacebook, IoLogoGoogle, IoMdClose } from 'react-icons/io';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="close-btn"><IoMdClose /></div>
                <h2>LOG IN</h2>
                <form>
                    <input type="text" placeholder="Id" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">로그인</button>
                </form>
                <div className="social-icons">
                    <IoLogoInstagram />
                    <IoLogoFacebook />
                    <IoLogoGoogle />
                </div>
                <div className="signup-link">
                    <Link to="/signup">회원가입</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
