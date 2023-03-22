import { Component, ReactNode, FormEvent } from 'react';

import { FormInput, FormSelect, RadioInput } from './components';

import styles from './index.module.css';

import { State, Props } from './models';

import { inputsData, radioValues } from './constants';

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
        <fieldset>
          <legend>Sex</legend>
          {radioValues.map((value) => {
            const id = value.toLowerCase();
            return (
              <RadioInput
                key={id}
                hook={(input) => (this.radioRefs[id] = input)}
                data={{ value, id }}
              />
            );
          })}
        </fieldset>
        <FormSelect />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
