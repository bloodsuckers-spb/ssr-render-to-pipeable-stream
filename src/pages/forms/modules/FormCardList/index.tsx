import { v4 as uuidv4 } from 'uuid';

import FormCard from '../FormCard';

import styles from './index.module.scss';

import { Props } from './models';

const FormCardList = ({ cards }: Props) => (
  <ul className={styles.list}>
    {cards.map((cardData) => (
      <li key={uuidv4()}>
        <FormCard data={cardData} />
      </li>
    ))}
  </ul>
);

export default FormCardList;
