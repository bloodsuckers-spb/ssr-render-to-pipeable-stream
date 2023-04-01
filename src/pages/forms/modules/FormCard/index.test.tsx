import { render, screen } from '@testing-library/react';

import { FormCard } from '.';

const FORM_CARD_TEST_ID = 'form-card';

const mockData = {
  FirstName: 'Vitaly',
  LastName: '',
  BornDate: '',
  ProfilePic: '',
  Country: '',
  Gender: '',
  PersonalData: true,
};

describe('test for FormCard component', () => {
  it('is FormCard component renders clearly', () => {
    render(<FormCard data={mockData} />);
    expect(screen.getByTestId(FORM_CARD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(/Vitaly/)).toBeInTheDocument();
  });
});
