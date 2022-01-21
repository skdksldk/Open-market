import React, { useState } from 'react';
import { Link } from "react-router-dom";
import clayful from 'clayful/client-js';

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      var Customer = clayful.Customer;

      var payload = {
      email,
      password,
    };
    console.log('payload',payload);

    Customer.createMe(payload, function(err, result) {
      if (err) {
      // Error case
      console.log(err.code);
      }

      var data = result.data;

      console.log(data);

      });
    };
    return (
        <div className="auth-wrapper">
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleEmailChange}
            placeholder="Kakao Id"
            type="email" 
            name="email" 
            value={email}
            />
            <input 
            onChange={handlePasswordChange}
            placeholder="암호" 
            type="password" 
            name="password" 
            value={password}
            />
            <button type="submit">회원가입</button>
            <Link to="login" style={{ color:"gray", textDecoration: "none"}}>
                {" "}
                이미 Kakao Friends ID가 있다면? 지금 로그인
            </Link>
        </form>
    </div>
    );
}

export default RegisterPage;