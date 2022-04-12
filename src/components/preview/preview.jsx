import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({cards}) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.Preview}>Card Preview</h1>
      <ul className={styles.card}>
        {Object.keys(cards).map(key => (
          <Card key={key} card={cards[key]}/>
        ))}
      </ul>
    </section>
  );
};

export default Preview;