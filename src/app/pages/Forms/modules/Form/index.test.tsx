import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

import Form from '.';

import { FormCardData } from '../../modules/FormCard/models';

const FORM_TEST_ID = 'form';

const FIRST_NAME_INPUT_TEST_ID = 'fist-name-input';
const LAST_NAME_INPUT_TEST_ID = 'last-name-input';
const MALE_RADIO_INPUT_TEST_ID = 'male-radio-input';
const FEMALE_RADIO_INPUT_TEST_ID = 'male-radio-input';
const DATE_INPUT_TEST_ID = 'date-input';
const FILE_INPUT_TEST_ID = 'file-input';
const CHECKBOX_TEST_ID = 'checkbox-input';
const SELECT_TEST_ID = 'select';

const SUBMIT_BTN_TEST_ID = 'submit';
const RESET_BTN_TEST_ID = 'reset';

const FORM_ITEMS = [
  FIRST_NAME_INPUT_TEST_ID,
  LAST_NAME_INPUT_TEST_ID,
  MALE_RADIO_INPUT_TEST_ID,
  FEMALE_RADIO_INPUT_TEST_ID,
  DATE_INPUT_TEST_ID,
  FILE_INPUT_TEST_ID,
  CHECKBOX_TEST_ID,
  SELECT_TEST_ID,
  SUBMIT_BTN_TEST_ID,
  RESET_BTN_TEST_ID,
] as const;

const ERROR_MESSAGES = [
  'Invalid First Name',
  'Invalid Last Name',
  'Please make a choise',
  'Invalid Born date',
  'Please upload image',
  'Please, confirm your Personal Data',
  'Please choose country',
] as const;

describe('test for Form component', () => {
  const mockCards = [];
  const mockAddCard = (card: FormCardData) => {
    mockCards.push(card);
  };

  it('is Form component renders clearly', () => {
    render(<Form addCard={mockAddCard} />);
    const form = screen.getByTestId(FORM_TEST_ID);
    expect(form).toBeInTheDocument();
  });

  it('is FormItems renders clearly', () => {
    render(<Form addCard={mockAddCard} />);
    FORM_ITEMS.forEach((testId) =>
      expect(screen.getByTestId(testId)).toBeInTheDocument()
    );
  });

  it('are Errors appear on the page', () => {
    render(<Form addCard={mockAddCard} />);
    const submit = screen.getByTestId(SUBMIT_BTN_TEST_ID);
    fireEvent.click(submit);
    ERROR_MESSAGES.forEach((txt) =>
      expect(screen.getByText(txt)).toBeInTheDocument()
    );
  });

  it('set incorrect value to text inputs', () => {
    render(<Form addCard={mockAddCard} />);
    const textInputsErrorMessages = ['Invalid First Name', 'Invalid Last Name'];
    const firstNameInput = screen.getByTestId(FIRST_NAME_INPUT_TEST_ID);
    const lastNameInput = screen.getByTestId(LAST_NAME_INPUT_TEST_ID);
    const submit = screen.getByTestId(SUBMIT_BTN_TEST_ID);
    fireEvent.change(firstNameInput, { target: { value: 'vitaly' } });
    fireEvent.change(lastNameInput, { target: { value: 'vitaly' } });
    fireEvent.click(submit);
    textInputsErrorMessages.forEach((txt) =>
      expect(screen.getByText(txt)).toBeInTheDocument()
    );
  });
});
