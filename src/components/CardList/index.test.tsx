import { render, screen } from '@testing-library/react';

import CardList from '.';

import { cardsData } from '../../constants';

const ROLE_TEXT = 'cards-list';

describe('test for CardList component', () => {
  test('is CardList component renders clearly', () => {
    render(<CardList cardsData={cardsData} />);
    expect(screen.getByRole(ROLE_TEXT)).toBeInTheDocument();
  });
});
