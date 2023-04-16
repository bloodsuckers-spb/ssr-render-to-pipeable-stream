import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { ConfirmAlert } from './ConfirmAlert';

const CONFIRM_ALERT_TEST_ID = 'confirm-alert';
const CONFIRM_BTN_TEST_ID = 'confirm-alert-btn';

describe('Tests for ConfirmAlert', () => {
  const confirmFn = vi.fn();
  it('is ConfirmAlert works clearly', async () => {
    render(<ConfirmAlert confirm={confirmFn} />);
    expect(screen.getByTestId(CONFIRM_ALERT_TEST_ID)).toBeInTheDocument();
    const confirmBtn = screen.getByTestId(CONFIRM_BTN_TEST_ID);
    expect(confirmFn).toHaveBeenCalledTimes(0);
    await userEvent.click(confirmBtn);
    expect(confirmFn).toHaveBeenCalledTimes(1);
  });
});
