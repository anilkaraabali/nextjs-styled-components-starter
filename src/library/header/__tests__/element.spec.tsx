import { screen } from '@testing-library/react';

import { renderWithTheme } from 'mocks/styled.mock';

import { Header } from '../element';

describe('Header', () => {
  it('should render correctly', () => {
    renderWithTheme(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
