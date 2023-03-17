import { Component, ReactNode } from 'react';

type Props = Record<string, never>;

type State = {
  isDisabled: boolean;
};

export default class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDisabled: true,
    }
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
        className="form"
        onSubmit={this.handleSubmit}
      >
        <input
          className="submit"
          type="submit"
          value="Submit"
          disabled={this.state.isDisabled}
        />
      </form>
    );
  }
}
