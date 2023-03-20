import { Component, ReactNode } from 'react';

import { FormInput, Select } from '..';

import styles from './index.module.css';

import { countries, InputsData } from './constants';

import { State, Props } from './models';

export default class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  private handleChange() {
    return '';
  }

  private handleSubmit() {
    return '';
  }

  private isTextInputValid = (value: string) => {
    return /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);
  };

  private isSelectValid = (value: string) => {
    return !!value;
  };

  private isDateValid = (value: string) => {
    return (
      /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) &&
      Date.now() - Date.parse(value) > 0
    );
  };

  private isFileValid = (value: string) => {
    return !!value;
  };

  private isConfirm = (value: string) => {
    return !!value;
  };

  render(): ReactNode {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        {InputsData.map((data, i) => (
          <FormInput
            key={i}
            {...data}
          />
        ))}
        <Select options={countries} />
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
