import { Component, ReactNode } from 'react';

type Props = Record<string, never>;

type State = {
  isDisabled: boolean;
};

import styles from './index.module.css';

import { formItems } from './constants';
import FormInput from '../FormInput';

export default class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  handleChange() {
    return '';
  }

  handleSubmit() {
    return '';
  }

  isTextInputValid = (value: string) => {
    return /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);
  };

  isSelectValid = (value: string) => {
    return !!value;
  };

  isDateValid = (value: string) => {
    return (
      /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) &&
      Date.now() - Date.parse(value) > 0
    );
  };

  isFileValid = (value: string) => {
    return !!value;
  };

  isConfirm = (value: string) => {
    return !!value;
  };

  render(): ReactNode {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        {formItems.map((data) => (
          <FormInput {...data} />
        ))}
        <button
          className="submit"
          type="submit"
          disabled={this.state.isDisabled}
        >
          Submit
        </button>
      </form>
    );
  }
}
