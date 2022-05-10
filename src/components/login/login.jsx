import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Signin from '../signin/signin';
import Signup from '../signup/signup';
import './login.css';
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
    <section className="login">
      <div className="container">
        {!index ? <Signin authService={authService}/> : <Signup authService={authService}/>}
        <p onClick={toggleIndex} >
          {!index ? "New user? Click here" : "Already have an account?"}
        </p>
      </div> 
      {/* <h1 className="loginTitle">Login</h1> */}
      <ul className="list" >
        <li className="item">
          <button type="button" className="button" onClick={onLogin}>
            <img className="imgButton" src="/images/google-logo-9826.png" alt="" />Google
          </button>
        </li>
        <li className="item">
        <button type="button" className="button" onClick={onLogin}>
            <img className="imgButton" src="/images/github-logo.png" alt="" />Github
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;