import { Component, ReactNode, FormEvent } from 'react';

import styles from './index.module.css';

import validate from '../../../../../services/Validation';
import { FormField, FormInput } from './components';

import { State, Props, ErrorsState, RefsMap } from './models';

export default class Form extends Component<Props, State> {
  private static radioOptions = ['Male', 'Female'] as const;
  private static selectOptions = ['USA', 'Italy', 'Germany'] as const;
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
        <FormField
          title="First Name"
          isError={!isFirstNameValid}
          errorMessage="Invalid First Name"
        >
          <FormInput
            type="text"
            id="first-name"
            title="First Name"
            hook={(input) => this.inputsRefs.set('FirstName', input)}
          />
        </FormField>
        <FormField
          title="Last Name"
          isError={!isLastNameValid}
          errorMessage="Invalid Last Name"
        >
          <FormInput
            type="text"
            id="last-name"
            title="Last Name"
            hook={(input) => this.inputsRefs.set('LastName', input)}
          />
        </FormField>
        <FormField
          title="Born date"
          isError={!isBornDateValid}
          errorMessage="Invalid Born date"
        >
          <FormInput
            type="date"
            id="born-date"
            title="Born date"
            hook={(input) => this.inputsRefs.set('BornDate', input)}
          />
        </FormField>
        <FormField
          title="Profile Picture"
          isError={!isProfilePicValid}
          errorMessage="Please upload profile picture"
        >
          <FormInput
            type="file"
            id="profile-image"
            title="Profile Image"
            hook={(input) => this.inputsRefs.set('ProfileImage', input)}
          />
        </FormField>
        <FormField
          title="Countries"
          isError={!isCountryChecked}
          errorMessage="Please make a choise"
        >
          <label className={styles.sr}>Countries</label>
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
        </FormField>
        <FormField
          title="Gender"
          isError={!isGenderChecked}
          errorMessage="Please choose your gender"
        >
          {Form.radioOptions.map((value, ind) => {
            const id = value.toLowerCase();
            return (
              <div key={id}>
                <FormInput
                  type="radio"
                  id={id}
                  title="Gender"
                  hook={(input) => (this.radioRefs[ind] = input)}
                  value={value}
                  name="gender"
                />
              </div>
            );
          })}
        </FormField>
        <FormField
          title="Confirm Personal Data"
          isError={!isPersonalDataConfirm}
          errorMessage="Please, confirm your Personal Data"
        >
          <FormInput
            type="checkbox"
            id="personal-data"
            title="Confirm Personal Data"
            hook={(input) => this.inputsRefs.set('PersonalData', input)}
          />
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
