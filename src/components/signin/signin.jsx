import React, { useRef } from 'react';
import styles from './signin.module.css';

const Signin = ({authService}) => {
  const emailRef = useRef();
  const pswRef = useRef();

  const onLogInSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = pswRef.current.value;
    console.log(email,password);
    authService //
      .signInUser(email, password)
      .then(res => console.log('**signInUser'))
      .catch(err => console.log(err.message))
  }

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={onLogInSubmit}>
        <input type="email" ref={emailRef} placeholder="Email"/>
        <input type="password" ref={pswRef} placeholder="Password"/>
        <button className={styles.loginButton} type="submit" >Sign In</button>
      </form>
    </div>
  )     
};

export default Signin;