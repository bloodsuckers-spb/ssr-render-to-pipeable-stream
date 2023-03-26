import { Component, ReactNode, FormEvent } from 'react';

import styles from './index.module.scss';

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
    isCardAdded: false,
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
      this.setState({
        ...this.initialState,
        isCardAdded: true,
      });
      this.getFormData();
      this.resetForm();
    } else {
      this.setState({
        isFormDataValid,
        errorsStatus,
        isCardAdded: false,
      });
    }
  };

  private getInputsValue = (key: keyof typeof RefsMap) =>
    this.inputsRefs?.get(key)?.value ?? '';

  private getImgUrl = () => {
    const file = this.inputsRefs?.get('ProfileImage')?.files?.[0];
    return file ? URL.createObjectURL(file) : '';
  };

  private validateText = (value: string) =>
    /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);

  private validateDate = (value: string) =>
    /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) && Date.now() > Date.parse(value);

  private validateFile = (value: string) => {
    const extensions = ['.jpg', '.jpeg', '.png', '.bmp'];
    return extensions.some((extension) => value.includes(extension));
  };

  private validateRadio = () =>
    !!this.radioRefs.find((radio) => radio?.checked ?? false);

  private validateSelect = () => this.selectRef?.value !== Form.defaultSelected;

  private isChecked = () => !!this.inputsRefs?.get('PersonalData')?.checked;

  private handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.isFormValid({
      isFirstNameValid: this.validateText(this.getInputsValue('FirstName')),
      isLastNameValid: this.validateText(this.getInputsValue('LastName')),
      isBornDateValid: this.validateDate(this.getInputsValue('BornDate')),
      isProfilePicValid: this.validateFile(this.getInputsValue('ProfileImage')),
      isCountryChecked: this.validateSelect(),
      isGenderChecked: this.validateRadio(),
      isPersonalDataConfirm: this.isChecked(),
    });
  };

  private handleChange = () => {
    const { isCardAdded } = this.state;
    if (!isCardAdded) return;
    this.setState({ isCardAdded: false });
  };

  private getFormData = () => {
    this.props.addCard({
      FirstName: this.getInputsValue('FirstName'),
      LastName: this.getInputsValue('LastName'),
      BornDate: this.getInputsValue('BornDate'),
      ProfilePic: this.getImgUrl(),
      Country: this.selectRef?.value ?? '',
      Gender: this.radioRefs.find((radio) => radio?.checked)?.value ?? '',
      PersonalData: this.isChecked(),
    });
  };

  private resetForm = () => {
    const checkbox = this.inputsRefs.get('PersonalData');
    if (checkbox) {
      checkbox.checked = false;
    }
    this.formRef?.reset();
  };

  private handleResetClick = () => {
    this.resetForm();
    this.setState(this.initialState);
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
      isCardAdded,
    } = this.state;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        ref={(form) => (this.formRef = form)}
        data-testid="form"
      >
        <h1 className={styles.title}>User Card</h1>
        <div className={styles.textInputBox}>
          <input
            className={styles.textInput}
            type="text"
            ref={(input) => this.inputsRefs.set('FirstName', input)}
            placeholder=" "
            data-testid="fist-name-input"
          />
          <label className={styles.textLabel}>First Name</label>
          {!isFirstNameValid && (
            <p className={styles.textInputBoxError}>Invalid First Name</p>
          )}
        </div>
        <div className={styles.textInputBox}>
          <input
            className={styles.textInput}
            type="text"
            ref={(input) => this.inputsRefs.set('LastName', input)}
            placeholder=" "
            data-testid="last-name-input"
          />
          <label className={styles.textLabel}>Last Name</label>
          {!isLastNameValid && (
            <p className={styles.textInputBoxError}>Invalid Last Name</p>
          )}
        </div>
        <div className={styles.radioBox}>
          {Form.radioOptions.map((value, ind) => {
            const id = value.toLowerCase();
            return (
              <div key={id}>
                <input
                  type="radio"
                  id={id}
                  ref={(input) => (this.radioRefs[ind] = input)}
                  value={value}
                  name="gender"
                  data-testid={`${id}-radio-input`}
                />
                <label htmlFor={id}>{value}</label>
              </div>
            );
          })}
          {!isGenderChecked && (
            <p className={styles.radioBoxError}>Please make a choise</p>
          )}
        </div>
        <div className={styles.dateGroup}>
          <input
            type="date"
            id="born-date"
            ref={(input) => this.inputsRefs.set('BornDate', input)}
            data-testid="date-input"
          />
          <label htmlFor="born-date"></label>

          {!isBornDateValid && (
            <p className={styles.dateBoxErrorField}>Invalid Born date</p>
          )}
        </div>
        <div className={styles.fileInputBox}>
          <input
            type="file"
            id="profile-image"
            ref={(input) => this.inputsRefs.set('ProfileImage', input)}
            accept=".png,.jpg,.jpeg,.webp"
            data-testid="file-input"
          />
          <label htmlFor="profile-image">Upload File</label>
          {!isProfilePicValid && (
            <p className={styles.fileBoxErrorField}>Please upload image</p>
          )}
        </div>
        <div className={styles.selectBox}>
          <div className={styles.selectGroup}>
            <select
              defaultValue={Form.defaultSelected}
              ref={(select) => (this.selectRef = select)}
              data-testid="select"
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
          </div>
          {!isCountryChecked && (
            <p className={styles.selectBoxError}>Please choose country</p>
          )}
        </div>
        <div className={styles.checkboxesBox}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="personal-data"
            ref={(input) => this.inputsRefs.set('PersonalData', input)}
            data-testid="checkbox-input"
          />
          <label
            className={styles.checkboxLabel}
            htmlFor="personal-data"
          >
            Confirm Personal Data
          </label>
          {!isPersonalDataConfirm && (
            <p className={styles.checkboxErrorField}>
              Please, confirm your Personal Data
            </p>
          )}
        </div>
        <div className={styles.btns}>
          <button
            className={styles.btn}
            type="submit"
            data-testid="submit"
          >
            Submit
          </button>
          <button
            className={styles.reset}
            type="reset"
            onClick={this.handleResetClick}
            data-testid="reset"
          >
            Reset
          </button>
        </div>
        {isCardAdded && (
          <p className={styles.cardMessage}>The card has been added</p>
        )}
      </form>
    );
  }
}
