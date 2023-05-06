import { screen } from '@testing-library/react';

import { renderWithTheme } from 'mocks/styled.mock';

import { ErrorBoundaryComponent } from '../boundary.component';

describe('ErrorBoundaryComponent', () => {
  let consoleErrorMock: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  it('should render error view when there is an error', () => {
    const Child = (): JSX.Element => {
      throw new Error('Bad request');
    };

    renderWithTheme(
      <ErrorBoundaryComponent>
        <Child />
      </ErrorBoundaryComponent>
    );

    expect(screen.getByText('Oops, an unexpected error occurred!')).toBeInTheDocument();
    expect(consoleErrorMock).toHaveBeenCalled();
  });

  it('should render children', () => {
    const Child = (): JSX.Element => <div>Child</div>;
    renderWithTheme(
      <ErrorBoundaryComponent>
        <Child />
      </ErrorBoundaryComponent>
    );

    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
