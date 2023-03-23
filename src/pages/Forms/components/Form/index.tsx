import { Component, ReactNode, FormEvent } from 'react';

import { FormInput, FormField } from './components';

import styles from './index.module.css';

import Validation from '../../../../services/Validation';

import { State, Props } from './models';

import { inputsData, radioValues, countries } from './constants';

export default class Form extends Component<Props, State> {
  private static readonly selectTitle = 'Countries';
  private static readonly radioTitle = 'Sex';
  private inputsRefs: Array<HTMLInputElement> = [];
  private radioRefs: Array<HTMLInputElement> = [];
  private selectRef: HTMLSelectElement | null = null;
  constructor(props: Props) {
    super(props);
    this.state = {
      isInvalid: false,
      errors: inputsData.map(({ id }) => ({ id, status: false })),
    };
  }

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.inputsRefs);
    console.log(this.radioRefs);
    console.log(this.selectRef?.value);
  };

  render(): ReactNode {
    const { selectTitle, radioTitle } = Form;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        {inputsData.map(({ id, type, title }, ind) => (
          <FormField
            key={id}
            title={title}
          >
            <FormInput
              data={{ id, type, title }}
              hook={(input) => (this.inputsRefs[ind] = input)}
            />
          </FormField>
        ))}

        <FormField title={selectTitle}>
          <label className={styles.sr}>{selectTitle}</label>
          <select ref={(select) => (this.selectRef = select)}>
            {countries.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </FormField>

        <FormField title={radioTitle}>
          {radioValues.map((value, ind) => {
            const id = value.toLowerCase();
            return (
              <div key={id}>
                <FormInput
                  data={{ title: radioTitle, id, value }}
                  hook={(input) => (this.radioRefs[ind] = input)}
                />
              </div>
            );
          })}
        </FormField>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
