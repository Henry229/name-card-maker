import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id:'1',
      name:'Cooper1',
      company:'Coopers Wing', 
      theme: 'light',
      email:'cooper@mail.com',
      message:'go for it',
      fileName:'cooper',
      fileURL: 'ellie.png'
    },
    {
      id:'2',
      name:'Cooper2',
      company:'Coopers Wing', 
      theme: 'light',
      email:'cooper@mail.com',
      message:'go for it',
      fileName:'cooper',
      fileURL: 'ellie.png'
    },
    {
      id:'3',
      name:'Cooper3',
      company:'Coopers Wing', 
      theme: 'light',
      email:'cooper@mail.com',
      message:'go for it',
      fileName:'cooper',
      fileURL: 'ellie.png'
    }
  ]);

  const onLogout = () => {
    authService.logout();
  };

  const createdOrUpdateCard = (card) => {
    setCards( cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    })

  };

  const deleteCard = (card) => {
    setCards( cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })
  };

  return (
    <section className={styles.maker} >
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor 
          cards={cards}
          addCard={createdOrUpdateCard}
          updateCard={createdOrUpdateCard}
          deleteCard={deleteCard}
        >
        </Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;