import { screen } from '@testing-library/react';

import { renderWithTheme } from 'mocks/styled.mock';

import { Footer } from '../element';

describe('Footer', () => {
  it('should render correctly', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
