import { Component } from 'react';

import Form from './modules/Form';
import FormCard from './modules/FormCard';

import styles from './index.module.scss';

import { Props, State } from './models';
import { FormCardData } from './modules/FormCard/models';

export default class Forms extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (card: FormCardData) => {
    this.setState(({ cards }: State) => ({
      cards: [...cards, card],
    }));
  };

  render() {
    const { cards } = this.state;
    return (
      <div className={styles.forms}>
        <Form addCard={(card: FormCardData) => this.addCard(card)} />
        {cards.map((card, ind) => (
          <FormCard
            key={ind}
            data={card}
          />
        ))}
      </div>
    );
  }
}
