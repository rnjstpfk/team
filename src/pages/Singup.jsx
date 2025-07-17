// Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2>회원가입</h2>
          <Link to="/login" className="close-btn">
          </Link>
        </div>

        <form className="signup-form">
          <input type="text" placeholder="아이디 혹은 이메일" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
          <input type="text" placeholder="전화번호" />
          <button type="submit">가입하기</button>
        </form>

        <div className="login-redirect">
          이미 계정이 있으신가요? <Link to="/login"> 로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
