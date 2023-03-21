import { Component } from 'react';

import styles from './index.module.scss';

type Props = {
  hook: (input: HTMLInputElement) => HTMLInputElement;
  data: object;
};

type State = {
  isError: boolean;
};

export default class FormInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  handleChange = () => {
    console.log('handleChange');
  };

  render() {
    const {
      data: { title, id, inputType, errorMessage },
      hook,
    } = this.props;
    return (
      <fieldset>
        <legend>{title}</legend>
        <label
          className={styles.sr}
          htmlFor={id}
        >
          Surname Name
        </label>
        <input
          type={inputType}
          id={id}
          ref={hook}
          onChange={this.handleChange}
        />
        <p>{this.state.isError && errorMessage}</p>
      </fieldset>
    );
  }
}
