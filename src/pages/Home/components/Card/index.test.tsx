import { render, screen } from '@testing-library/react';

import Card from '.';

const mockData = {
  id: 0,
  name: 'Jennifer',
  imgUrl: '../../assets/images/Jennifer.png',
  breed: 'Labrador',
  description:
    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
} as const;

const TEST_ID = 'card';
const DOG_NAME = 'Jennifer';
const DOG_BREED = 'Labrador';

describe('test for Card component', () => {
  it('is Card component renders clearly', () => {
    render(<Card data={mockData} />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(DOG_NAME)).toBeInTheDocument();
    expect(screen.getByText(DOG_BREED)).toBeInTheDocument();
  });
});
