import { render, screen } from '@testing-library/react';
import { CardWithInfo } from './CardWithInfo';

import { MOCK_CHARACTER } from 'app/mocks/data';

const TEST_ID = 'card-with-info';

describe('test for CardWithInfo component', () => {
  it('is CardWithInfo component renders clearly', () => {
    render(<CardWithInfo cardData={MOCK_CHARACTER} />);
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
