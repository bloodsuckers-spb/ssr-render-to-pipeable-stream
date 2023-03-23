import { Component, ReactNode, FormEvent } from 'react';

import { FormInput, FormField } from './components';

import styles from './index.module.css';

import validate from '../../../../services/Validation';

import { State, Props, ErrorsState } from './models';
import { FormCard } from '../FormCard/models';

import { inputsData } from './constants';

export default class Form extends Component<Props, State> {
  private static selectTitle = 'countries' as const;
  private static radioTitle = 'gender' as const;
  private static defaultSelected = 'Choose here' as const;
  private static selectOptions = ['USA', 'Italy', 'Germany'] as const;
  private static radioOptions = ['Male', 'Female'] as const;
  private static defaultErrorMessage = 'Please make a choise' as const;
  private inputsRefs: Array<HTMLInputElement> = [];
  private radioRefs: Array<HTMLInputElement> = [];
  private selectRef: HTMLSelectElement | null = null;
  private formRef: HTMLFormElement | null = null;
  constructor(props: Props) {
    super(props);
    this.state = {
      isFormDataValid: true,
      errorsStatus: {
        firstName: false,
        surname: false,
        bornDate: false,
        profilePic: false,
        personalData: false,
        countries: false,
        gender: false,
      },
    };
  }

  private isFormValid = (errorsStatus: ErrorsState) => {
    const isFormDataValid = Object.values(errorsStatus).every(
      (state) => !state
    );
    if (isFormDataValid) {
      this.getFormData();
      this.resetForm();
    }
    this.setState({
      isFormDataValid,
      errorsStatus,
    });
  };

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { defaultSelected, selectTitle, radioTitle } = Form;
    const selectStatus = this.selectRef?.value === defaultSelected;
    const radioStatus = !this.radioRefs.find((radio) => radio.checked);
    const inputsStatus = this.inputsRefs.reduce(
      (acc: ErrorsState, { id, value, type, checked = false }) => {
        acc[id] = validate(value, type, checked);
        return acc;
      },
      {}
    );
    this.isFormValid({
      ...inputsStatus,
      [radioTitle]: radioStatus,
      [selectTitle]: selectStatus,
    });
  };

  private getFormData = () => {
    const { selectTitle, radioTitle } = Form;
    const { addCard } = this.props;
    const selectedOption = this.selectRef?.value ?? '';
    const radioValue =
      this.radioRefs.find((radio) => radio.checked)?.value ?? '';
    const inputsValues = this.inputsRefs.reduce(
      (acc: FormCard, { id, value }) => {
        acc[id] = value;
        return acc;
      },
      {}
    );
    addCard({
      ...inputsValues,
      [radioTitle]: selectedOption,
      [selectTitle]: radioValue,
    });
  };

  private resetForm = () => {
    this.formRef?.reset();
  };

  render(): ReactNode {
    const {
      defaultSelected,
      selectTitle,
      radioTitle,
      selectOptions,
      radioOptions,
      defaultErrorMessage,
    } = Form;
    const { errorsStatus } = this.state;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
        ref={(form) => (this.formRef = form)}
      >
        {inputsData.map(({ id, type, title, errorMessage }, ind) => (
          <FormField
            key={id}
            title={title}
            isError={errorsStatus[id]}
            errorMessage={errorMessage}
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
          errorMessage={defaultErrorMessage}
        >
          <label className={styles.sr}>{selectTitle}</label>
          <select
            defaultValue={defaultSelected}
            ref={(select) => (this.selectRef = select)}
          >
            {[defaultSelected, ...selectOptions].map((value, ind) => (
              <option
                disabled={!ind}
                hidden={!ind}
                key={value}
              >
                {value}
              </option>
            ))}
          </select>
        </FormField>
        <FormField
          title={radioTitle}
          isError={errorsStatus[radioTitle]}
          errorMessage={defaultErrorMessage}
        >
          {radioOptions.map((value, ind) => {
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
        <button type="submit">Submit</button>
        <button
          type="reset"
          onClick={this.resetForm}
        >
          Reset
        </button>
      </form>
    );
  }
}
