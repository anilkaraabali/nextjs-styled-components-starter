import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles/theme';

export function renderWithTheme(children: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
