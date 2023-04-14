import { v4 as uuidv4 } from 'uuid';

import { FormCard } from '../FormCard/FormCard';

import styles from './FormCardList.module.scss';

import { Props } from './FormCardList.models';

export const FormCardList = ({ cards }: Props) => (
  <ul className={styles.list}>
    {cards.map((cardData) => (
      <li key={uuidv4()}>
        <FormCard data={cardData} />
      </li>
    ))}
  </ul>
);
