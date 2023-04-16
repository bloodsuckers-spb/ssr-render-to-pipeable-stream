import { useEffect, useState } from 'react';
import { PropagateLoader as Spinner } from 'react-spinners';

import {
  useGetCharactersByNameQuery,
  useLazyGetCharacterByIdQuery,
} from 'app/providers/StoreProvider/config/services/charactersApi';

import { useAppSelector } from 'shared/hooks';

import styles from './CardList.module.scss';

import { Card } from '..';
import { CardWithInfo } from '../';

import { Modal } from 'shared/ui/modal/Modal';

export const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { searchValue } = useAppSelector((state) => state.searchReducer);

  const getCharactersQueryState = useGetCharactersByNameQuery(searchValue);
  const [trigger, results] = useLazyGetCharacterByIdQuery();

  const {
    isFetching: isCardListDataFetching,
    isError: isCardListError,
    data: cardListData,
  } = getCharactersQueryState;

  const {
    isUninitialized: isCardWithInfoUninitialized,
    data: cardWithInfoData,
    isFetching: isCardInfoDataFetching,
    isError: isCardInfoError,
  } = results;

  useEffect(() => {
    if (isCardWithInfoUninitialized || isCardInfoDataFetching) {
      return;
    }
    setIsModalOpen(true);
  }, [isCardInfoDataFetching]);

  return (
    <>
      {isCardListDataFetching || isCardInfoDataFetching ? (
        <Spinner />
      ) : isCardListError || isCardInfoError ? null : (
        <ul className={styles.list}>
          {cardListData?.results.map((character) => (
            <li key={character.id}>
              <Card
                character={character}
                onCardClick={() => trigger(`${character.id}`)}
              />
            </li>
          ))}
        </ul>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {cardWithInfoData ? <CardWithInfo cardData={cardWithInfoData} /> : null}
      </Modal>
    </>
  );
};
