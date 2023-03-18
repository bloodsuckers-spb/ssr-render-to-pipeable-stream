import { Component, ReactNode } from 'react';

type Props = Record<string, never>;

type State = {
  isDisabled: boolean;
};

import styles from './index.module.css';

export default class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }


  handleChange() {
    return '';
  }

  handleSubmit() {
    return '';
  }

  isTextInputValid = (value: string) => {
    return /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);
  };

  isSelectValid = (value: string) => {
    return !!value;
  };

  isDateValid = (value: string) => {
    return (
      /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) &&
      Date.now() - Date.parse(value) > 0
    );
  };

  isFileValid = (value: string) => {
    return !!value;
  };

  isConfirm = (value: string) => {
    return !!value;
  };

  render(): ReactNode {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <div>
          <h4 className="title">First Name</h4>
          <label
            className="sr-only"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
          />
          <p>тут сообщение об ошибке</p>
        </div>
        <div>
          <h4 className="title">Surname Name</h4>
          <label
            className="sr-only"
            htmlFor="surname"
          >
            Surname Name
          </label>
          <input
            type="text"
            id="surname"
          />
          <p>тут сообщение об ошибке</p>
        </div>
        <div>
          <label
            className="sr-only"
            htmlFor="born-date"
          ></label>
          <input
            type="date"
            id="born-date"
          />
          <p>тут сообщение об ошибке</p>
        </div>

        <div>
          <h2>Категория</h2>
          <select name="category">
            <option value="computer">Компьютеры</option>
            <option
              value="phone"
              selected
            >
              Телефоны
            </option>
            <option value="appliances">Бытовая техника</option>
          </select>
          <p>тут сообщение об ошибке</p>
        </div>
        <div>
          <h4>Profile image</h4>
          <label
            className="sr-only"
            htmlFor="profile-image"
          ></label>
          <input
            className="sr-only"
            type="file"
            id="profile-image"
          />
          <p>тут сообщение об ошибке</p>
        </div>
        <div>
          <h4>Сonfirm</h4>
          <label
            className="sr-only"
            htmlFor="personal-data"
          ></label>
          <input
            type="checkbox"
            id="personal-data"
          />
          <p>тут сообщение об ошибке</p>
        </div>
        <button
          className="submit"
          type="submit"
          disabled={this.state.isDisabled}
        >
          Submit
        </button>
        <button
          className="submit"
          type="submit"
          value="Submit"
        >
          Reset
        </button>
      </form>
    );
  }
}
