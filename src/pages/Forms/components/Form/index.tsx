import { Component, ReactNode, FormEvent } from 'react';
import { inputsData } from './constants';

import { FormInput, Select } from '..';
import RadioInput from './components/RadioInput';

import styles from './index.module.css';

import { State } from './models';

import { Props } from './models';

const radioData = [
  {
    id: 'male',
    value: 'Male',
  },
  {
    id: 'female',
    value: 'Female',
  },
];

export default class Form extends Component<Props, State> {
  inputsRefs: Record<string, HTMLInputElement> = {};
  radioRefs: Record<string, HTMLInputElement> = {};
  constructor(props: Props) {
    super(props);
    this.state = {
      isDisabled: false,
      isInvalid: false,
    };
  }

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.inputsRefs);
    console.log(this.radioRefs);
  };

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
        {inputsData.map((data) => (
          <FormInput
            key={data.id}
            data={data}
            hook={(input) => (this.inputsRefs[data.id] = input)}
          />
        ))}
        {radioData.map((data) => (
          <RadioInput
            key={data.id}
            hook={(input) => (this.radioRefs[data.id] = input)}
          />
        ))}
        <Select />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
