import { Component, ReactNode, FormEvent } from 'react';

import { FormInput, FormField } from './components';

import styles from './index.module.css';

import validate from '../../../../services/Validation';

import { State, Props, ErrorsStatus } from './models';

import { inputsData, radioValues, countries } from './constants';

export default class Form extends Component<Props, State> {
  private static readonly selectTitle = 'countries';
  private static readonly radioTitle = 'sex';
  private inputsRefs: Array<HTMLInputElement> = [];
  private radioRefs: Array<HTMLInputElement> = [];
  private selectRef: HTMLSelectElement | null = null;
  private isValid = false;
  constructor(props: Props) {
    super(props);
    this.state = {
      isInvalid: false,
      errorsStatus: {
        firstName: false,
        surname: false,
        bornDate: false,
        profilePic: false,
        personalData: false,
      },
    };
  }

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { selectTitle, radioTitle } = Form;

    const inputsState = this.inputsRefs.reduce(
      (acc: ErrorsStatus, { id, value }) => {
        acc[id] = validate(value);
        if (acc[id] && !this.isValid) {
          this.isValid = true;
        }
        return acc;
      },
      {}
    );

    const radioStatus = !this.radioRefs.find((radio) => radio.checked);
    if (radioStatus && !this.isValid) {
      this.isValid = true;
    }

    this.setState({
      errorsStatus: {
        ...inputsState,
        [radioTitle]: radioStatus,
        [selectTitle]: false,
      },
    });
  };

  render(): ReactNode {
    const { selectTitle, radioTitle } = Form;
    const { errorsStatus } = this.state;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        {inputsData.map(({ id, type, title }, ind) => (
          <FormField
            key={id}
            title={title}
            isError={errorsStatus[id]}
          >
            <FormInput
              data={{ id, type, title }}
              hook={(input) => (this.inputsRefs[ind] = input)}
            />
          </FormField>
        ))}

        <FormField
          title={selectTitle}
          isError={errorsStatus[selectTitle]}
        >
          <label className={styles.sr}>{selectTitle}</label>
          <select ref={(select) => (this.selectRef = select)}>
            {countries.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </FormField>

        <FormField
          title={radioTitle}
          isError={errorsStatus[radioTitle]}
        >
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
