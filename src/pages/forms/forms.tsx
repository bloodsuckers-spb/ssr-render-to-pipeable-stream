import { useState } from 'react';

import { Form, ConfirmMessage, FormCardList } from './modules';

import styles from './forms.module.scss';

import { FormCardData } from './modules/FormCard/FormCard.models';

import { useAppSelector, useAppDispatch } from 'shared/hooks';
import { cardsSlice } from 'app/providers/StoreProvider/config/reducers/cardsSlice/cardsSlice';

export const Forms = () => {
  const [isConfirm, setIsConfirm] = useState(true);

  const { cards } = useAppSelector((state) => state.cardsReducer);
  const dispatch = useAppDispatch();
  const { setCards } = cardsSlice.actions;

  return (
    <div className={styles.forms}>
      {isConfirm ? (
        <>
          <Form
            addCard={(card: FormCardData) => dispatch(setCards(card))}
            confirm={confirm}
          />
          <FormCardList cards={cards} />
        </>
      ) : (
        <ConfirmMessage confirm={() => setIsConfirm(!isConfirm)} />
      )}
    </div>
  );
};
