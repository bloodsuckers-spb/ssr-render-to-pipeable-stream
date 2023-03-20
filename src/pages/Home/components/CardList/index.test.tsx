import { render, screen } from '@testing-library/react';

import CardList from '.';

import { cardsData } from '../../constants';

const LIST_ROLE_TEXT = 'cards-list';

describe('test for CardList component', () => {
  it('is CardList component renders clearly', () => {
    render(<CardList cardsData={cardsData} />);
    const cardList = screen.getByRole(LIST_ROLE_TEXT);
    expect(cardList).toBeInTheDocument();
    expect(cardList.children.length).toBe(cardsData.length);
  });
});
