import { createTheme } from '@shopify/restyle'
import { TextProps } from 'react-native'

export const Font = {
  main: {
    light: 'Inter-Light',
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
  },
  mono: {
    light: 'InputMono-Light',
    regular: 'InputMono-Regular',
  },
}

const textVariants = {
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'primaryText',
  },
  h2: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'primaryText',
  },
  h3: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'primaryText',
  },
  h4: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'primaryText',
  },
  light: {
    fontFamily: Font.main.light,
    color: 'primaryText',
  },
  regular: {
    fontFamily: Font.main.regular,
    color: 'primaryText',
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: '500',
    color: 'cardMainText',
  },
  subtitle2: {
    fontSize: 17,
    fontWeight: '500',
    color: 'primaryText',
  },
  body1: {
    fontSize: 17,
    color: 'primaryText',
  },
  body2: {
    fontSize: 14,
    color: 'primaryText',
  },
  body3: {
    fontSize: 11,
    color: 'primaryText',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
  },
  button: {
    color: 'primaryText',
    textAlign: 'center',
    fontSize: 17,
  } as TextProps,
  keypad: {
    fontSize: 40,
    color: 'primaryText',
  },
  medium: {
    fontFamily: Font.main.medium,
    color: 'primaryText',
  },
  subtitle: {
    fontFamily: Font.main.regular,
    fontSize: 20,
    lineHeight: 22,
    color: 'purpleLight',
  },
  bold: {
    fontFamily: Font.main.semiBold,
    color: 'primaryText',
  },
  mono: {
    fontFamily: Font.mono.regular,
    color: 'primaryText',
  },
}

const palette = {
  charcoal: '#264653',
  peacockGreen: '#2A9D8F',
  yellow: '#E9C46A',
  deepOrange: '#F4A261',
  burntSienna: '#E76F51',
  black: '#000000',
  white: '#FFFFFF',
  transparent: '#00000000',
  offWhite: '#F9FAFC',
  smartPurple: '#7303a8',
  smartDarkPurple: '#3b2b41',
  smartDarkGrey: '#1f2c34',
  smartGrey: '#121b22',
  smartBrown: '#1f2c34',
  smartRed: '#E74C3C',

  grayDark: '#121b22',
  grayBoxLight: '#F9FAFE',
  greenOnline: '#29D344',
  offblack: '#1C1E3B',
  blueGrayLight: '#CDD7E5',
  blueGray: '#33414E',
  grayHighlight: '#EBEDF9',
  purpleLight: '#A0A5DA',
  purpleGray: '#BBBDD8',
  purpleGrayLight: '#C2C5E4',
  lowDark: '#242424',
}

export const lightThemeColors = {
  ...palette,

  primary: palette.smartPurple,
  primaryBackground: palette.white,
  primaryText: palette.smartPurple,
  secondaryBackground: palette.smartPurple,
  secondary: palette.smartGrey,
  secondaryText: palette.white,
  error: palette.smartPurple,
  surface: palette.smartPurple,
  surfaceText: palette.white,
  surfaceSecondary: palette.smartPurple,
  surfaceSecondaryText: palette.white,
  surfaceContrast: palette.smartPurple,
  surfaceContrastText: palette.white,
  HelperText: palette.black,
  cardBackground: palette.grayBoxLight,
  cardBackgroundSecondary: palette.grayHighlight,
  cardMainText: palette.offblack,
  cardSecondaryText: palette.blueGray,
}
export const darkThemeColors = {
  ...palette,

  primary: palette.smartGrey,
  primaryBackground: palette.smartGrey,
  primaryText: palette.white,
  secondaryBackground: palette.smartDarkGrey,
  secondary: palette.smartDarkGrey,
  secondaryText: palette.white,
  error: palette.smartRed,
  surface: palette.smartDarkGrey,
  surfaceText: palette.white,
  surfaceSecondary: palette.offWhite,
  surfaceSecondaryText: palette.smartDarkGrey,
  surfaceContrast: palette.smartPurple,
  surfaceContrastText: palette.white,
  HelperText: palette.white,
  cardBackground: palette.lowDark,
  cardBackgroundSecondary: palette.offblack,
  cardMainText: palette.white,
  cardSecondaryText: palette.offWhite,
}

export const theme = createTheme({
  colors: lightThemeColors,
  spacing: {
    n_xxxxl: -240,
    n_xxxl: -120,
    n_xxl: -60,
    n_xl: -40,
    n_lx: -32,
    n_l: -24,
    n_lm: -20,
    n_m: -16,
    n_ms: -12,
    n_s: -8,
    n_xs: -4,
    n_xxs: -2,
    n_xxxs: -1,
    none: 0,
    xxxs: 1,
    xxs: 2,
    xs: 4,
    s: 8,
    ms: 12,
    m: 16,
    lm: 20,
    l: 24,
    lx: 32,
    xl: 40,
    xxl: 60,
    xxxl: 120,
    xxxxl: 240,
  },
  borderRadii: {
    none: 0,
    s: 4,
    ms: 6,
    m: 8,
    lm: 10,
    l: 12,
    xl: 20,
    round: 1000,
  },
  breakpoints: {
    smallPhone: 0,
    phone: 400,
    tablet: 768,
  },
  cardVariants: {
    regular: {
      padding: 'ms',
      borderRadius: 'ms',
      backgroundColor: 'surface',
    },
    elevated: {
      shadowColor: 'secondaryBackground',
      borderRadius: 'm',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 9,
    },
    modal: {
      backgroundColor: 'surface',
      borderRadius: 'xl',
    },
  },
  textVariants: {
    ...textVariants,

    buttonLight: { ...textVariants.button, ...textVariants.light },
    buttonMedium: { ...textVariants.button, ...textVariants.medium },
    buttonBold: { ...textVariants.button, ...textVariants.bold },
    buttonMono: { ...textVariants.button, ...textVariants.mono },

    body1Light: { ...textVariants.body1, ...textVariants.light },
    body1Medium: { ...textVariants.body1, ...textVariants.medium },
    body1Bold: { ...textVariants.body1, ...textVariants.bold },
    body1Mono: { ...textVariants.body1, ...textVariants.mono },

    body2Light: { ...textVariants.body2, ...textVariants.light },
    body2Medium: { ...textVariants.body2, ...textVariants.medium },
    body2Bold: { ...textVariants.body2, ...textVariants.bold },
    body2Mono: { ...textVariants.body2, ...textVariants.mono },

    body3Light: { ...textVariants.body3, ...textVariants.light },
    body3Medium: { ...textVariants.body3, ...textVariants.medium },
    body3Bold: { ...textVariants.body3, ...textVariants.bold },
    body3Mono: { ...textVariants.body3, ...textVariants.mono },

    subtitleLight: {
      ...textVariants.subtitle,
      fontFamily: textVariants.light.fontFamily,
    },
    subtitleRegular: { ...textVariants.subtitle, ...textVariants.regular },
    subtitleMedium: { ...textVariants.subtitle, ...textVariants.medium },
    subtitleBold: { ...textVariants.subtitle, ...textVariants.bold },
    subtitleMono: { ...textVariants.subtitle, ...textVariants.mono },
  },
  inputVariants: {
    regular: {
      backgroundColor: 'secondaryBackground',
      fontSize: 18,
      color: 'primaryText',
      borderRadius: 'm',
    },
    secondary: {
      backgroundColor: 'surfaceSecondary',
      height: 52,
      paddingHorizontal: 'm',
      fontSize: 18,
      color: 'surfaceSecondaryText',
      borderRadius: 'm',
    },
  },
})

export type Theme = typeof theme
export type TextVariant = keyof Theme['textVariants']
export type Spacing = keyof Theme['spacing']
export type Colors = keyof Theme['colors']
