import { screen } from '@testing-library/react';

import { renderWithTheme } from 'mocks/styled.mock';

import Custom404 from '@/pages/404';

describe('Custom404', () => {
  it('should render with 404 status code', () => {
    renderWithTheme(<Custom404 />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
