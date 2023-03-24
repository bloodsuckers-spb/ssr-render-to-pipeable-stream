import { Component } from 'react';

import Form from './components/Form';
import styles from './index.module.scss';

import { FormCard } from './components/FormCard/models';

type Props = Record<string, never>;

type State = {
  cards: Array<FormCard>;
};

export default class Forms extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (card: FormCard) => {
    this.setState(({ cards }: State) => ({
      cards: [...cards, card],
    }));
  };

  render() {
    return (
      <div className={styles.forms}>
        <Form addCard={(card: FormCard) => this.addCard(card)} />
      </div>
    );
  }
}
