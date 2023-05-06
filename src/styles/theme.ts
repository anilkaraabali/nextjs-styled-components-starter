const breakpointTypes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
type BreakpointTypes = (typeof breakpointTypes)[number];

const elevationTypes = [0, 1, 2, 3, 4] as const;
type ElevationType = (typeof elevationTypes)[number];

const spacingTypes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
type SpacingType = (typeof spacingTypes)[number];

const zIndexTypes = [-1, 0, 1, 2, 3, 4] as const;
type ZIndexType = (typeof zIndexTypes)[number];

const colorsTypes = [
  'light',
  'dark',
  'neutral50',
  'neutral100',
  'neutral200',
  'neutral300',
  'neutral400',
  'neutral500',
  'neutral600',
  'neutral700',
  'neutral800',
  'primary',
  'primary50',
  'primary100',
  'primary200',
  'primary300',
  'primary400',
  'primary500',
  'primary600',
  'primary800',
  'primary900',
] as const;
type ColorsType = (typeof colorsTypes)[number];

interface ThemeInterface {
  colors: Record<ColorsType, string>;
  breakpoints: Record<BreakpointTypes, string>;
  elevation: Record<ElevationType, string>;
  spacings: Record<SpacingType, string>;
  zIndex: Record<ZIndexType, number>;
  variables: {
    maxWidth: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    light: '#ffffff',
    dark: '#000000',
    neutral50: '#f5f5f5',
    neutral100: '#e9e9e9',
    neutral200: '#d9d9d9',
    neutral300: '#c4c4c4',
    neutral400: '#9d9d9d',
    neutral500: '#7b7b7b',
    neutral600: '#555555',
    neutral700: '#434343',
    neutral800: '#262626',
    primary: '#0070F3',
    primary50: '#e2f2ff',
    primary100: '#b9deff',
    primary200: '#8acaff',
    primary300: '#53b5ff',
    primary400: '#1ba4ff',
    primary500: '#0093ff',
    primary600: '#0084ff',
    primary800: '#115fe0',
    primary900: '#1d3dc1',
  },
  spacings: {
    0: '2px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '48px',
    9: '64px',
    10: '96px',
  },
  zIndex: {
    '-1': -1,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
  breakpoints: {
    xs: '320px',
    sm: '425px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  elevation: {
    0: 'inset 0 2px 0 rgba(0, 0, 0, 0.05)',
    1: '0 2px 3px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.15)',
    2: '0 2px 4px rgba(0, 0, 0, 0.05), 0 8px 15px rgba(0, 0, 0, 0.15)',
    3: '0 2px 8px rgba(0, 0, 0, 0.1), 0 12px 30px rgba(0, 0, 0, 0.15)',
    4: '0 4px 12px rgba(0, 0, 0, 0.1), 0 20px 64px rgba(0, 0, 0, 0.2)',
  },
  variables: {
    maxWidth: '1100px',
  },
};

export { theme };
export type { ThemeInterface };
