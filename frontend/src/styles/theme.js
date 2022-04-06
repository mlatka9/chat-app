export const lightTheme = {
  color: {
    grey100: '#000',

    grey200: '#0f0f13',
    grey300: '#27272e',
    grey400: '#494d4f',
    grey500: '#828282',

    grey600: '#e6e7eb',
    grey700: '#fafafc',
    grey800: '#fafafc',
    grey900: '#FFF',

    blue500: '#2F80ED',
    red500: '#d42c20',
    yellow500: 'yellow',
  },
  fontWeight: {
    normal: 400,
    bolder: 500,
    bold: 700,
  },
  fontSize: {
    xxl: '36px',
    xl: '24px',
    l: '18px',
    m: '16px',
    s: '14px',
    xs: '12px',
  },
};

export const darkTheme = {
  ...lightTheme,
  color: {
    ...lightTheme.color,

    grey100: '#FFF',

    grey200: '#E0E0E0',
    grey300: '#DDD',
    grey400: '#CCC',
    grey500: '#757b8a',
    grey600: '#4d5261',
    grey700: '#21252b',
    grey800: '#1e2026',
    grey900: '#120F13',

    blue500: '#2F80ED',
    red500: '#ff6e63',
  },
};
