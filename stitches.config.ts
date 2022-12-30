import { createStitches, PropertyValue } from '@stitches/react'

import type * as Stitches from '@stitches/react'

import pxToRem from '@/utils/pxToRem'

export const { config, css, globalCss, styled, getCssText } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      text: '#ededed',
      grey: '#8795A1',
      bg: '#08070b',
      hover: '#212024',
      primary: '#ca2b5f',
      secondary: '#793986',
      card: '#1f2028',
    },
    space: {
      1: pxToRem(4),
      2: pxToRem(8),
      3: pxToRem(12),
      4: pxToRem(16),
      5: pxToRem(20),
      6: pxToRem(24),
      7: pxToRem(28),
      8: pxToRem(32),
      9: pxToRem(36),
      10: pxToRem(40),
    },
    radii: {
      md: '4px',
      full: '9999px',
    },
    sizes: {
      full: '100%',
      sm: pxToRem(640),
      md: pxToRem(768),
      lg: pxToRem(1024),
      xl: pxToRem(1280),
    },
    fontSizes: {
      xs: pxToRem(14),
      sm: pxToRem(16),
      md: pxToRem(16),
      lg: pxToRem(18),
      xl: pxToRem(22),
      '2xl': pxToRem(26),
      '3xl': pxToRem(32),
      '4xl': pxToRem(38),
      '5xl': pxToRem(62),
    },
    lineHeights: {
      xs: pxToRem(20),
      sm: pxToRem(24),
      md: pxToRem(28),
      lg: pxToRem(32),
      xl: pxToRem(36),
      '2xl': pxToRem(40),
    },
    fontWeights: {
      thin: 300,
      normal: 400,
      medium: 600,
      bold: 700,
    },
    fonts: {
      sans: '"Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    transitions: {
      fast: 'all 0.2s ease',
    },
  },
  utils: {
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'padding'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'padding'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bg: (value: PropertyValue<'background'>) => ({
      background: value,
    }),
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => ({
      width: value,
      height: value,
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    justify: (value: PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    align: (value: PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    h: (value: PropertyValue<'height'>) => ({
      height: value,
    }),
    maxH: (value: PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),
    w: (value: PropertyValue<'width'>) => ({
      width: value,
    }),
    maxW: (value: PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),
    d: (value: PropertyValue<'display'>) => ({
      display: value,
    }),
    columns: (value: PropertyValue<'gridTemplateColumns'>) => ({
      gridTemplateColumns: value,
    }),
    rows: (value: PropertyValue<'gridTemplateRows'>) => ({
      gridTemplateRows: value,
    }),
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    '2xl': '(min-width: 1400px)',
  },
})

export type VariantProps<T> = Stitches.VariantProps<T>

export type CSS = Stitches.CSS<typeof config>
