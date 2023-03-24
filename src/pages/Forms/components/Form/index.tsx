import { Component, ReactNode, FormEvent } from 'react';

import styles from './index.module.css';

import validate from '../../../../services/Validation';

import { State, Props, ErrorsState, RefsMap } from './models';

export default class Form extends Component<Props, State> {
  private static radioOptions = ['Male', 'Female'] as const;
  private static defaultSelected = 'Choose here' as const;
  private formRef: HTMLFormElement | null = null;
  private inputsRefs = new Map<keyof typeof RefsMap, HTMLInputElement | null>();
  private radioRefs: Array<HTMLInputElement | null> = [];
  private selectRef: HTMLSelectElement | null = null;
  constructor(props: Props) {
    super(props);
    this.state = {
      isFormDataValid: true,
      errorsStatus: {
        isFirstNameValid: true,
        isLastNameValid: true,
        isBornDateValid: true,
        isProfilePicValid: true,
        isCountryChecked: true,
        isGenderChecked: true,
        isPersonalDataConfirm: true,
      },
    };
  }

  private isFormValid = (errorsStatus: ErrorsState) => {
    console.log(errorsStatus);
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

  private getInputsValue = (key: keyof typeof RefsMap) => {
    return this.inputsRefs?.get(key)?.value ?? '';
  };

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.selectRef?.value);
    this.isFormValid({
      isFirstNameValid: validate(this.getInputsValue('FirstName')),
      isLastNameValid: validate(this.getInputsValue('LastName')),
      isBornDateValid: validate(this.getInputsValue('BornDate'), 'date'),
      isProfilePicValid: validate(this.getInputsValue('ProfileImage'), 'file'),
      isCountryChecked: this.selectRef?.value !== Form.defaultSelected,
      isGenderChecked: !!this.radioRefs.find(
        (radio) => radio?.checked ?? false
      ),
      isPersonalDataConfirm: validate(
        '',
        'checkbox',
        !this.inputsRefs?.get('PersonalData')?.checked
      ),
    });
  };

  private getFormData = () => {
    this.props.addCard({
      FirstName: this.getInputsValue('FirstName'),
      LastName: this.getInputsValue('LastName'),
      BornDate: this.getInputsValue('BornDate'),
      ProfilePic: this.getInputsValue('ProfileImage'),
      Country: this.selectRef?.value ?? '',
      PersonalData: !!this.inputsRefs?.get('PersonalData')?.checked,
    });
  };

  private resetForm = () => {
    this.formRef?.reset();
  };

  render(): ReactNode {
    const {
      errorsStatus: {
        isFirstNameValid,
        isLastNameValid,
        isBornDateValid,
        isProfilePicValid,
        isCountryChecked,
        isGenderChecked,
        isPersonalDataConfirm,
      },
    } = this.state;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
        ref={(form) => (this.formRef = form)}
      >
        <fieldset>
          <legend>First Name</legend>
          <label className={styles.sr}>First Name</label>
          <input
            type="text"
            id="first-name"
            ref={(input) => this.inputsRefs.set('FirstName', input)}
          />
          {!isFirstNameValid && <p>Invalid First Name</p>}
        </fieldset>
        <fieldset>
          <legend>Last Name</legend>
          <label className={styles.sr}>Last Name</label>
          <input
            type="text"
            ref={(input) => this.inputsRefs.set('LastName', input)}
          />
          {!isLastNameValid && <p>Invalid Last Name</p>}
        </fieldset>
        <fieldset>
          <legend>Born date</legend>
          <label className={styles.sr}>Born date</label>
          <input
            type="date"
            ref={(input) => this.inputsRefs.set('BornDate', input)}
          />
          {!isBornDateValid && <p>Invalid Born date</p>}
        </fieldset>
        <fieldset>
          <legend></legend>
          <label className={styles.sr}></label>
          <input
            type="file"
            ref={(input) => this.inputsRefs.set('ProfileImage', input)}
          />
          {isProfilePicValid && <p>Please upload profile picture</p>}
        </fieldset>
        <fieldset>
          <legend>Countries</legend>
          <label className={styles.sr}>Countries</label>
          <select defaultValue={Form.defaultSelected} ref={(select) => (this.selectRef = select)}>
            <option
              disabled
              hidden
            >
              {Form.defaultSelected}
            </option>
            <option>USA</option>
            <option>Italy</option>
            <option>Germany</option>
          </select>
          {!isCountryChecked && <p>Please make a choise</p>}
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          {Form.radioOptions.map((value, ind) => {
            const id = value.toLowerCase();
            return (
              <div key={id}>
                <label htmlFor={id}>{value}</label>
                <input
                  id={id}
                  type="radio"
                  value={value}
                  ref={(input) => (this.radioRefs[ind] = input)}
                />
              </div>
            );
          })}
          {!isGenderChecked && <p>Please choose your gender</p>}
        </fieldset>
        <fieldset>
          <legend>Confirm Personal Data</legend>
          <label className={styles.sr}>Confirm Personal Data</label>
          <input
            type="checkbox"
            ref={(input) => this.inputsRefs.set('PersonalData', input)}
          />
          {!isPersonalDataConfirm && <p>Please, confirm your Personal Data</p>}
        </fieldset>
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
