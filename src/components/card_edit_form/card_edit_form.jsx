import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card, updateCard, deleteCard}) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const {name, company, title, email, message, theme, fileName} = card;
  console.log('yogida1:',card)

  const onChange = event => {
    if (event.currentTartget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  };

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  return (
      <form className={styles.form}>
        <input className={styles.input} onChange={onChange} type="text" name="name" ref={nameRef} value={name}/>
        <input className={styles.input} onChange={onChange} type="text" name="company" ref={companyRef} value={company}/>
        <select className={styles.select} onChange={onChange} type="text" name="theme" ref={themeRef} value={theme} >
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </select>
        <input className={styles.input} onChange={onChange} type="text" name="title" ref={titleRef} value={title} />
        <input className={styles.input} onChange={onChange} type="text" name="email" ref={emailRef} value={email} />
        <textarea className={styles.input} onchange={onChange} name="message" id="" ref={messageRef} value={message} />
        <div>
          <img src="" alt="" />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </form>  
  )
};

export default CardEditForm;