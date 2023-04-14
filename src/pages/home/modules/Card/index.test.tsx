import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Card } from '.';
import { MOCK_CHARACTER } from '../../../../app/mocks/data';

const TEST_ID = 'card';

const CHARACTER_NAME = 'Rick Sanchez';
const CHARACTER_GENDER = 'Male';

describe('test for Card component', () => {
  const onCardClick = vi.fn();
  it('is Card component renders clearly', () => {
    render(
      <Card
        character={MOCK_CHARACTER}
        onCardClick={onCardClick}
      />
    );
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(CHARACTER_NAME)).toBeInTheDocument();
    expect(screen.getByText(CHARACTER_GENDER)).toBeInTheDocument();
  });
});
