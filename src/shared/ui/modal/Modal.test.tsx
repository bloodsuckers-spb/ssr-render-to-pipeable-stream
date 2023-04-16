import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Modal } from './Modal';

const MODAL_TEST_ID = 'modal';
const OVERLAY_TEST_ID = 'overlay';
const MODAL_CROSS_TEST_ID = 'modal-cross';

describe('tests for Modal component', () => {
  const onClose = vi.fn();

  const renderModal = () => {
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
  };

  it('is Modal renders clearly', () => {
    renderModal();
    expect(screen.getByTestId(MODAL_TEST_ID)).toBeInTheDocument();
  });

  it('is Modal callback calls by clicking on overlay', async () => {
    renderModal();
    await userEvent.click(screen.getByTestId(OVERLAY_TEST_ID));
    expect(onClose).toBeCalled();
  });

  it('is Modal callback calls by clicking on modal cross btn', async () => {
    renderModal();
    await userEvent.click(screen.getByTestId(MODAL_CROSS_TEST_ID));
    expect(onClose).toBeCalled();
  });
});
