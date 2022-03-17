export const lightTheme = {
  color: {
    background: 'white',
    veryDarkGrey: '#333333',
    darkGrey: '#4F4F4F',
    grey: '#828282',
    lightGrey: '#BDBDBD',
    veryLightGrey: '#F2F2F2',
    blue: '#2F80ED',
    white: 'white',
    red: '#d42c20',
    yellow: 'yellow',
    black: '#000',
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
    background: 'rgb(40,44,52)',
    veryDarkGrey: '#E0E0E0',
    grey: '#DDD',
    lightGrey: '#CCC',
    blue: '#2F80ED',
    white: 'rgb(33,37,43)',
    red: '#d42c20',
    yellow: 'yellow',
    black: '#FFF',
    veryLightGrey: '#334',
    darkGrey: '#EEE',
  },
};
