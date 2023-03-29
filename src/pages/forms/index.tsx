import { useState } from 'react';

import { Form, FormCardList } from './modules';

import styles from './index.module.scss';

import { FormCardData } from './modules/FormCard/models';

const Forms = () => {
  const [cards, setCards] = useState<Array<FormCardData>>([]);

  const addCard = (card: FormCardData) => {
    setCards([...cards, card]);
  };

  return (
    <div className={styles.forms}>
      <Form addCard={(card: FormCardData) => addCard(card)} />
      <FormCardList cards={cards} />
    </div>
  );
};

export default Forms;
