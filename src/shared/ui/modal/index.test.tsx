import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Modal } from '.';

const MODAL_TEST_ID = 'modal';

describe('tests for Modal component', () => {
  it('is Modal renders clearly', () => {
    const onClose = vi.fn();
    render(
      <Modal
        isOpen={true}
        onClose={onClose}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        sequi. Quo ratione itaque eos quaerat reprehenderit est dicta,
        blanditiis eaque nisi iste perferendis dolore facere amet, illo iure
        esse adipisci?
      </Modal>
    );
    expect(screen.getByTestId(MODAL_TEST_ID)).toBeInTheDocument();
  });
});
