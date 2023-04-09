import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import { PropagateLoader as Spinner } from 'react-spinners';
import { toast } from 'react-toastify';

import styles from './index.module.scss';

import { charactersLink } from '../../constants';

import { Props } from './models';
import { Character } from '../../models';

export const CardWithInfo = ({ cardId, onClose, resetCurrentCard }: Props) => {
  const [cardContent, setCardContent] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useLayoutEffect(() => {
    setIsLoading(true);
    getCharacter();
  }, [cardId]);

  const getCharacter = () => {
    axios
      .get(`${charactersLink}/${cardId}`)
      .then(({ data }) => {
        setCardContent(data);
        setIsLoading(false);
      })
      .catch(() => {
        onClose();
        resetCurrentCard();
        toast('Sorry, There is nothing found', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  };

  return (
    <div
      className={styles.card}
      data-testid="card-with-info"
    >
      {isLoading || !cardContent ? (
        <Spinner />
      ) : (
        <div className="content">
          <img
            className={styles.image}
            src={cardContent?.image}
          />
          <h4>{cardContent.name}</h4>
          <div>{cardContent.created}</div>
          <div>{cardContent.status}</div>
          <div>{cardContent.type}</div>
          <div>{cardContent.gender}</div>
          <div>{cardContent.species}</div>
        </div>
      )}
    </div>
  );
};
