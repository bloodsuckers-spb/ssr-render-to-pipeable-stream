import { Component, ReactNode, FormEvent } from 'react';

import { FormInput } from './components';

import styles from './index.module.css';

import { State, Props } from './models';

import { inputsData, radioValues, countries } from './constants';

import FormField from './components/FormField';

export default class Form extends Component<Props, State> {
  inputsRefs: Record<string, HTMLInputElement | null> = {};
  radioRefs: Record<string, HTMLInputElement | null> = {};
  selectRef: HTMLSelectElement | null = null;
  private static readonly selectTitle = 'Countries';
  private static readonly radioTitle = 'Sex';
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
    console.log(this.selectRef?.value);
  };

  render(): ReactNode {
    const { selectTitle, radioTitle } = Form;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        {inputsData.map((data) => (
          <FormField
            key={data.id}
            title={data.title}
          >
            <FormInput
              data={data}
              hook={(input) => (this.inputsRefs[data.id] = input)}
            />
          </FormField>
        ))}

        <FormField title={selectTitle}>
          <label>{selectTitle}</label>
          <select ref={(select) => (this.selectRef = select)}>
            {countries.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </FormField>

        <FormField title={radioTitle}>
          {radioValues.map((value) => {
            const id = value.toLowerCase();
            return (
              <div key={id}>
                <FormInput
                  data={{ title: radioTitle, type: 'radio', id, value }}
                  hook={(input) => (this.radioRefs[id] = input)}
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
