import { render, screen } from '@testing-library/react';

import CardList from '.';

import { cardsData } from '../../constants';

const TEST_ID = 'cards-list';

describe('test for CardList component', () => {
  it('is CardList component renders clearly', () => {
    render(<CardList cardsData={cardsData} />);
    const cardList = screen.getByTestId(TEST_ID);
    expect(cardList).toBeInTheDocument();
    expect(cardList.children.length).toBe(cardsData.length);
  });
});
