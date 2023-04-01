import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './index.module.scss';

import { FormFields, Props } from './models';

export const Form = ({ addCard, confirm }: Props) => {
  const radioOptions = ['Male', 'Female'] as const;
  const extensions = ['.jpg', '.jpeg', '.png', '.bmp'] as const;
  const selectOptions = ['USA', 'Italy', 'Germany'] as const;
  const defaultSelected = 'Choose here' as const;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    addCard({ ...data, ProfilePic: URL.createObjectURL(data.ProfilePic[0]) });
    confirm();
    reset();
  };

  const resetForm = () => reset();

  const validateTextInput = (value: string) =>
    /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);

  const validateDateInput = (value: string) =>
    /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) && Date.now() > Date.parse(value);

  const validateFileInput = (filelist: FileList) => {
    if (!filelist.length) return false;
    const { name: value } = filelist[0];
    return extensions.some((extension) => value.includes(extension));
  };

  const validateRadioInput = (value: string) => !!value;

  const validateSelect = (value: string) => value !== defaultSelected;

  const isChecked = (checked: boolean) => checked;

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="form"
    >
      <h1 className={styles.title}>User Card</h1>
      <div className={styles.textInputBox}>
        <input
          className={styles.textInput}
          type="text"
          placeholder=" "
          autoComplete="off"
          {...register('FirstName', { validate: validateTextInput })}
          data-testid="fist-name-input"
        />
        <label className={styles.textLabel}>First Name</label>
        {errors.FirstName && (
          <span className={styles.textInputBoxError}>Invalid First Name</span>
        )}
      </div>
      <div className={styles.textInputBox}>
        <input
          className={styles.textInput}
          type="text"
          placeholder=" "
          autoComplete="off"
          {...register('LastName', { validate: validateTextInput })}
          data-testid="last-name-input"
        />
        <label className={styles.textLabel}>Last Name</label>
        {errors.LastName && (
          <span className={styles.textInputBoxError}>Invalid Last Name</span>
        )}
      </div>
      <div className={styles.radioBox}>
        {radioOptions.map((value) => {
          const id = value.toLowerCase();
          return (
            <div key={id}>
              <input
                type="radio"
                id={id}
                value={value}
                {...register('Gender', { validate: validateRadioInput })}
                data-testid={`${id}-radio-input`}
              />
              <label htmlFor={id}>{value}</label>
            </div>
          );
        })}
        {errors.Gender && (
          <p className={styles.radioBoxError}>Please make a choise</p>
        )}
      </div>
      <div className={styles.dateGroup}>
        <input
          type="date"
          id="born-date"
          {...register('BornDate', { validate: validateDateInput })}
          data-testid="date-input"
        />
        <label htmlFor="born-date"></label>
        {errors.BornDate && (
          <span className={styles.dateBoxErrorField}>Invalid Born date</span>
        )}
      </div>
      <div className={styles.fileInputBox}>
        <input
          type="file"
          id="profile-image"
          accept=".png,.jpg,.jpeg,.webp"
          {...register('ProfilePic', { validate: validateFileInput })}
          data-testid="file-input"
        />
        <label htmlFor="profile-image">Upload File</label>
        {errors.ProfilePic && (
          <span className={styles.fileBoxErrorField}>Please upload image</span>
        )}
      </div>
      <div className={styles.selectBox}>
        <div className={styles.selectGroup}>
          <select
            defaultValue={defaultSelected}
            {...register('Country', { validate: validateSelect })}
            data-testid="select"
          >
            <option
              disabled
              hidden
            >
              {defaultSelected}
            </option>
            {selectOptions.map((country) => (
              <option key={country.toLowerCase()}>{country}</option>
            ))}
          </select>
        </div>
        {errors.Country && (
          <span className={styles.selectBoxError}>Please choose country</span>
        )}
      </div>
      <div className={styles.checkboxesBox}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="personal-data"
          {...register('PersonalData', { validate: isChecked })}
          data-testid="checkbox-input"
        />
        <label
          className={styles.checkboxLabel}
          htmlFor="personal-data"
        >
          Confirm Personal Data
        </label>
        {errors.PersonalData && (
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
          onClick={resetForm}
          data-testid="reset"
        >
          Reset
        </button>
      </div>
    </form>
  );
};
