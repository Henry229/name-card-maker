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
    <div className={styles.wrapBox}>
      <h1 className={styles.loginTitle}> Login</h1>
      <form className={styles.form} onSubmit={onLogInSubmit}>
        <div>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" ref={emailRef} placeholder="Email"/>
        </div>
        <div>
          <label className={styles.label}>Password</label>
          <input className={styles.input}type="password" ref={pswRef} placeholder="Password"/>
        </div>
        <button className={styles.loginButton} type="submit" >LogIn</button>
      </form>
    </div>
  )     
};

export default Signin;