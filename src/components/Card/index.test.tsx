import { render, screen } from '@testing-library/react';

import Card from '.';

import { cardsData } from '../../constants';

const [data] = cardsData;

const CARD_ROLE = 'card';
const DOG_NAME = 'Jennifer';
const DOG_BREED = 'Labrador';

describe('test for Card component', () => {
  test('is Card component renders clearly', () => {
    render(<Card data={data} />);
    expect(screen.getByRole(CARD_ROLE)).toBeInTheDocument();
    expect(screen.getByText(DOG_NAME)).toBeInTheDocument();
    expect(screen.getByText(DOG_BREED)).toBeInTheDocument();
  });
});
