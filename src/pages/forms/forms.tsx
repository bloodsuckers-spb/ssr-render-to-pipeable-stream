import { useState } from 'react';

import { useAppSelector, useAppDispatch } from 'shared/hooks';
import { cardsSlice } from 'app/providers/StoreProvider/config/reducers/cardsSlice/cardsSlice';

import { Form, ConfirmMessage, FormCardList } from './modules';

import styles from './forms.module.scss';

import { Modal } from 'shared/ui/modal';

import { FormCardData } from 'app/types/FormCardData';


export const Forms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cards } = useAppSelector((state) => state.cardsReducer);
  const dispatch = useAppDispatch();
  const { setCards } = cardsSlice.actions;

  return (
    <div className={styles.forms}>
      <Form
        addCard={(card: FormCardData) => dispatch(setCards(card))}
        confirm={() => setIsModalOpen(!isModalOpen)}
      />
      <FormCardList cards={cards} />
      <Modal isOpen={isModalOpen}>
        <ConfirmMessage confirm={() => setIsModalOpen(!isModalOpen)} />
      </Modal>
    </div>
  );
};
