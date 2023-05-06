import { screen } from '@testing-library/react';

import { renderWithTheme } from 'mocks/styled.mock';

import Custom500 from '@/pages/500';

describe('Custom500', () => {
  it('should render with 500 status code', () => {
    renderWithTheme(<Custom500 />);
    expect(screen.getByText('500')).toBeInTheDocument();
  });
});
