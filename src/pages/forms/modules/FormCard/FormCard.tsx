import styles from './FormCard.module.scss';

import { Props } from './FormCard.models';

export const FormCard = ({
  data: { FirstName, LastName, BornDate, Country, ProfilePic, Gender },
}: Props) => {
  return (
    <div
      className={styles.card}
      data-testid="form-card"
    >
      <p>Name: {FirstName}</p>
      <p>Surname: {LastName}</p>
      <p>Born: {BornDate}</p>
      <p>Country: {Country}</p>
      <p>Sex: {Gender}</p>
      <img
        className={styles.image}
        src={ProfilePic}
      ></img>
    </div>
  );
};
