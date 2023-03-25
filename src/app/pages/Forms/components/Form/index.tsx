import { Component, ReactNode, FormEvent } from 'react';

import styles from './index.module.scss';

import validate from '../../../../../services/Validation';

import { State, Props, ErrorsState, RefsMap } from './models';

export default class Form extends Component<Props, State> {
  private static radioOptions = ['Male', 'Female'] as const;
  private static selectOptions = ['USA', 'Italy', 'Germany'] as const;
  private static defaultSelected = 'Choose here' as const;
  private formRef: HTMLFormElement | null = null;
  private inputsRefs = new Map<keyof typeof RefsMap, HTMLInputElement | null>();
  private radioRefs: Array<HTMLInputElement | null> = [];
  private selectRef: HTMLSelectElement | null = null;
  private initialState = {
    isFormDataValid: true,
    errorsStatus: {
      isFirstNameValid: true,
      isLastNameValid: true,
      isBornDateValid: true,
      isProfilePicValid: true,
      isCountryChecked: true,
      isGenderChecked: true,
      isPersonalDataConfirm: true,
    } as const,
  };
  constructor(props: Props) {
    super(props);
    this.state = { ...this.initialState };
  }

  private isFormValid = (errorsStatus: ErrorsState) => {
    const isFormDataValid = Object.values(errorsStatus).every((state) => state);
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

  private getImgUrl = () => {
    const file = this.inputsRefs?.get('ProfileImage')?.files?.[0];
    return file ? URL.createObjectURL(file) : '';
  };

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.isFormValid({
      isFirstNameValid: !validate(this.getInputsValue('FirstName')),
      isLastNameValid: !validate(this.getInputsValue('LastName')),
      isBornDateValid: !validate(this.getInputsValue('BornDate'), 'date'),
      isProfilePicValid: !validate(this.getInputsValue('ProfileImage'), 'file'),
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
      ProfilePic: this.getImgUrl(),
      Country: this.selectRef?.value ?? '',
      Gender: this.radioRefs.find((radio) => radio?.checked)?.value ?? '',
      PersonalData: !!this.inputsRefs?.get('PersonalData')?.checked,
    });
  };

  private resetForm = () => {
    const { isFormDataValid } = this.state;
    if (!isFormDataValid) {
      this.setState(this.initialState);
    }
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
        <h1 className={styles.title}>User Card</h1>
        <div className={styles.textGroup}>
          <input
            className={styles.textInput}
            type="text"
            ref={(input) => this.inputsRefs.set('FirstName', input)}
            placeholder=" "
          />
          <label className={styles.textLabel}>First Name</label>
          {!isFirstNameValid && <p>Invalid First Name</p>}
        </div>
        <div className={styles.textGroup}>
          <input
            className={styles.textInput}
            type="text"
            ref={(input) => this.inputsRefs.set('LastName', input)}
            placeholder=" "
          />
          <label className={styles.textLabel}>Last Name</label>
          {!isLastNameValid && <p>Invalid Last Name</p>}
        </div>
        <div className={styles.radioGroup}>
          {Form.radioOptions.map((value, ind) => {
            const id = value.toLowerCase();
            return (
              <div key={id}>
                <input
                  key={id}
                  type="radio"
                  id={id}
                  ref={(input) => (this.radioRefs[ind] = input)}
                  value={value}
                  name="gender"
                />
                <label htmlFor={id}>{value}</label>
              </div>
            );
          })}
          {!isGenderChecked && <p>Please make a choise</p>}
        </div>
        <div className={styles.dateGroup}>
          <input
            type="date"
            id="born-date"
            ref={(input) => this.inputsRefs.set('BornDate', input)}
          />
          <label htmlFor="born-date"></label>
          {!isBornDateValid && <p>Invalid Born date</p>}
        </div>
        <div className={styles.fileGroup}>
          <input
            type="file"
            id="profile-image"
            ref={(input) => this.inputsRefs.set('ProfileImage', input)}
          />
          <label htmlFor="profile-image">Upload File</label>
          {!isProfilePicValid && <p>Please upload profile image</p>}
        </div>
        <div className={styles.selectGroup}>
          <select
            defaultValue={Form.defaultSelected}
            ref={(select) => (this.selectRef = select)}
          >
            <option
              disabled
              hidden
            >
              {Form.defaultSelected}
            </option>
            {Form.selectOptions.map((country) => (
              <option key={country.toLowerCase()}>{country}</option>
            ))}
          </select>
          {!isCountryChecked && <p>Please make a choise</p>}
        </div>
        <div>
          <input
            type="checkbox"
            id="personal-data"
            ref={(input) => this.inputsRefs.set('PersonalData', input)}
          />
          <label htmlFor="personal-data">Confirm Personal Data</label>
          {!isPersonalDataConfirm && <p>Please, confirm your Personal Data</p>}
        </div>
        <div className={styles.btns}>
          <button
            className={styles.btn}
            type="submit"
          >
            Submit
          </button>
          <button
            className={styles.reset}
            type="reset"
            onClick={this.resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}
