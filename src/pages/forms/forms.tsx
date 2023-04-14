import { useState } from 'react';

import { Form, ConfirmMessage, FormCardList } from './modules';

import styles from './forms.module.scss';

import { FormCardData } from './modules/FormCard/models';

export const Forms = () => {
  const [cards, setCards] = useState<Array<FormCardData>>([]);
  const [isConfirm, setIsConfirm] = useState(true);

  const addCard = (card: FormCardData) => {
    setCards([...cards, card]);
  };

  const confirm = () => setIsConfirm(!isConfirm);

  return (
    <div className={styles.forms}>
      {isConfirm ? (
        <>
          <Form
            addCard={(card: FormCardData) => addCard(card)}
            confirm={confirm}
          />
          <FormCardList cards={cards} />
        </>
      ) : (
        <ConfirmMessage confirm={confirm} />
      )}
    </div>
  );
};