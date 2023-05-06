import { screen } from '@testing-library/react';

import { renderWithTheme } from 'mocks/styled.mock';

import { Layout } from '../element';

describe('Layout', () => {
  it('should accept children', () => {
    renderWithTheme(<Layout>Children</Layout>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render layout components', () => {
    renderWithTheme(<Layout>Children</Layout>);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
