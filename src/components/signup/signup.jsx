import React, { useRef } from 'react';
import styles from './signup.module.css';

const Signup = ({authService}) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const pwdRef = useRef();


  const onSignUpSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = pwdRef.current.value;
    console.log('//onSignUpSubmit: ',email,name,password);
    authService //
      .registerUser(email, password, name)
      .then(res => console.log('**sigUpUser Registered!',email))
      .catch(err => console.log(err.message))
  }

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>New User</h1>
      <form onSubmit={onSignUpSubmit}>
        <input type="email" ref={emailRef} placeholder="Email"/>
        <input type="name" ref={nameRef} placeholder="Name"/>
        <input type="password" ref={pwdRef} placeholder="Password"/>
        <button className={styles.signUpButton} type="submit" >Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
