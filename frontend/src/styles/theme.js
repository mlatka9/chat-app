export const lightTheme = {
  color: {
    background: 'white',
    veryDarkGrey: '#333333',
    grey: '#828282',
    lightGrey: '#BDBDBD',
    blue: '#2F80ED',
    white: 'white',
    red: '#d42c20',
    yellow: 'yellow',
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  fontSize: {
    xxl: '36px',
    xl: '24px',
    l: '18px',
    m: '16px',
    s: '14px',
  },
};

export const darkTheme = {
  ...lightTheme,
  color: {
    ...lightTheme.color,
    background: 'rgb(40,44,52)',
    veryDarkGrey: '#E0E0E0',
    grey: '#828282',
    lightGrey: '#BDBDBD',
    blue: '#2F80ED',
    white: 'rgb(33,37,43)',
    red: '#d42c20',
    yellow: 'yellow',
  },
};
