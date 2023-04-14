import { render, screen } from '@testing-library/react';
import { CardWithInfo } from '.';

import { vi } from 'vitest';

import { MOCK_CHARACTER } from '../../../../app/mocks/data';

const TEST_ID = 'card-with-info';

describe('test for CardWithInfo component', () => {
  const onClose = vi.fn();
  const resetCurrentCard = vi.fn();
  it('is CardWithInfo component renders clearly', () => {
    render(
      <CardWithInfo
        cardId={MOCK_CHARACTER.id}
        onClose={onClose}
        resetCurrentCard={resetCurrentCard}
      />
    );
    expect(screen.getByTestId(TEST_ID)).toBeInTheDocument();
  });
});
