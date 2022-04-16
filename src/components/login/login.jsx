import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Signin from '../signin/signin';
import Signup from '../signup/signup';
import styles from './login.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = ({authService}) => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex(prevstate => !prevstate);
  }

  const navigate = useNavigate();
  const location = useLocation(); 
  const goToMaker = (userId) => {
    console.log('//gotoMaker:',userId,location);
    navigate('/maker', {state:{id:userId}});
  }

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid)
    })
  })

  return (
    <section className={styles.login}>
      <Header />
        <section>
          <div className={styles.container}>
            {!index ? <Signin authService={authService}/> : <Signup authService={authService}/>}
            <p onClick={toggleIndex} >
              {!index ? "New user? Click here" : "Already have an account?"}
            </p>
          </div>
          {/* <h1 className={styles.loginTitle}>Login</h1> */}
          <ul className={styles.list} >
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </section>
      <Footer />
    </section>
  );
};

export default Login;