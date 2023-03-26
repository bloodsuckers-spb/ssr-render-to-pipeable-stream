import { render, screen } from '@testing-library/react';

import FormCard from '.';

const FORM_CARD_TEST_ID = 'form-card';

const mockData = {
  FirstName: '',
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
    const card = screen.getByTestId(FORM_CARD_TEST_ID);
    expect(card).toBeInTheDocument();
  });
});
