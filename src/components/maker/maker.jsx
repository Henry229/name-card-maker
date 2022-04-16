import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';

const Maker = ({FileInput, authService, cardRepository}) => {
  const navigateState = useNavigate().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService, userId, navigate]);

  const createOrUpdateCard = (card) => {
    setCards( cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    })
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards( cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker} >
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor 
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        >
        </Editor>
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;