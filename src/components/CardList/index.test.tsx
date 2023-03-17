import { render, screen } from '@testing-library/react';

import CardList from '.';

import { cardsData } from '../../constants';

const LIST_ROLE_TEXT = 'cards-list';
const CARD_ROLE = 'card';

describe('test for CardList component', () => {
  render(<CardList cardsData={cardsData} />);
  test('is CardList component renders clearly', () => {
    expect(screen.getByRole(LIST_ROLE_TEXT)).toBeInTheDocument();
  });
  test('is amount of cards ', () => {
    
    expect(screen.getAllByRole(CARD_ROLE).length).toBe(cardsData.length);
  });
});
