import { render, screen } from '@testing-library/react';

import { FormCardList } from './FormCardList';
import { FormCardData } from 'app/types/FormCardData';

const FORM_CARD_LIST_TEST_ID = 'form-card-list';
const FORM_CARD_LIST_ITEMS_TEST_ID = 'form-card-list-items';

const MOCK_DATA: FormCardData = {
  FirstName: '',
  LastName: '',
  BornDate: '',
  ProfilePic: '',
  Country: '',
  Gender: '',
  PersonalData: true,
};

const cards = [MOCK_DATA, { ...MOCK_DATA }];

describe('Tests for FormCardList', () => {
  it('is FormCardList renders clearly', () => {
    render(<FormCardList cards={cards} />);
    expect(screen.getByTestId(FORM_CARD_LIST_TEST_ID)).toBeInTheDocument();
    const listItems = screen.getAllByTestId(FORM_CARD_LIST_ITEMS_TEST_ID);
    expect(listItems.length).toBe(cards.length);
  });
});
