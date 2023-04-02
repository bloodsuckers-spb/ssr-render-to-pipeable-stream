import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { Form } from '.';

const FORM_TEST_ID = 'form';

const FIRST_NAME_INPUT_TEST_ID = 'fist-name-input';
const LAST_NAME_INPUT_TEST_ID = 'last-name-input';
const MALE_RADIO_INPUT_TEST_ID = 'male-radio-input';
const FEMALE_RADIO_INPUT_TEST_ID = 'female-radio-input';
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
  const addCard = vi.fn();
  const confirm = vi.fn();

  it('is Form component renders clearly', () => {
    render(
      <Form
        addCard={addCard}
        confirm={confirm}
      />
    );
    const form = screen.getByTestId(FORM_TEST_ID);
    expect(form).toBeInTheDocument();
  });

  it('is FormItems renders clearly', () => {
    render(
      <Form
        addCard={addCard}
        confirm={confirm}
      />
    );
    FORM_ITEMS.forEach((testId) =>
      expect(screen.getByTestId(testId)).toBeInTheDocument()
    );
  });

  it('have any errors appeared on the page?', async () => {
    render(
      <Form
        addCard={addCard}
        confirm={confirm}
      />
    );
    const submit = screen.getByTestId(SUBMIT_BTN_TEST_ID);
    await userEvent.click(submit);
    expect(screen.getByText(/Invalid First Name/)).toBeInTheDocument();
    ERROR_MESSAGES.forEach((txt) =>
      expect(screen.getByText(txt)).toBeInTheDocument()
    );
  });

  it('set incorrect value to text inputs', async () => {
    render(
      <Form
        addCard={addCard}
        confirm={confirm}
      />
    );
    const textInputsErrorMessages = ['Invalid First Name', 'Invalid Last Name'];
    const firstNameInput = screen.getByTestId(FIRST_NAME_INPUT_TEST_ID);
    const lastNameInput = screen.getByTestId(LAST_NAME_INPUT_TEST_ID);
    const submit = screen.getByTestId(SUBMIT_BTN_TEST_ID);
    await userEvent.type(firstNameInput, 'vitaly');
    await userEvent.type(lastNameInput, 'vitaly');
    await userEvent.click(submit);
    textInputsErrorMessages.forEach((txt) =>
      expect(screen.getByText(txt)).toBeInTheDocument()
    );
  });

  test('is image File load clearly', async () => {
    render(
      <Form
        addCard={addCard}
        confirm={confirm}
      />
    );
    const fileInput = screen.getByTestId(FILE_INPUT_TEST_ID);
    if (!(fileInput instanceof HTMLInputElement)) {
      throw new Error('fileInput is not instanceof HTMLInputElement');
    }
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    await userEvent.upload(fileInput, file);
    if (fileInput.files) {
      expect(fileInput.files).toHaveLength(1);
      expect(fileInput.files[0].name).toBe('chucknorris.png');
      expect(fileInput.files[0]).toStrictEqual(file);
    }
  });
});
