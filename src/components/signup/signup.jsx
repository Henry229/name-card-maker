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
    <div className={styles.wrapBox}>
      <h1 className={styles.signUpTitle}>Sign Up</h1>
      <form className={styles.form} onSubmit={onSignUpSubmit}>
      <div>
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" ref={emailRef} placeholder="Email"/>
      </div>
      <div>
        <label className={styles.label}>Name</label>
        <input className={styles.input} type="name" ref={nameRef} placeholder="Name"/>
      </div>
      <div>
        <label className={styles.label}>Password</label>
        <input className={styles.input} type="password" ref={pwdRef} placeholder="Password"/>
      </div>
      <button className={styles.signUpButton} type="submit" >Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
