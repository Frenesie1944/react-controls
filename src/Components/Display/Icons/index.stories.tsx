import * as React from 'react';
import * as Icons from './Icons';
import * as IconsM from './materialinear';
import { style } from 'typestyle';

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, select } from '@storybook/addon-knobs';

const alertFont = { fontSize: '36px', color: 'green' };

export default {
  title: 'Components/Display/UpIcons',
  decorators: [withKnobs, getRootContainer('UpIcons')],
};

const labelColor = 'Color';

const colors = {
  tangerine: '#F59100',
  pumpkine: '#ee7f01',
  greyishBrown: '#3f3b37',
  QR: '#3f3b37',
  brownGrey: '#D7D7D7',
  pinkishGrey: '#ccc8c5',
  lightGrey: '#eaeae9',
  paleGrey: '#979797',
  white: '#ffffff',
  turquoiseBlue: '#039eb2',
  oceanBlue: '#0360a8',
  paleRed: '#D0021B',
  boringGreen: '#6DBD8E',
  tangerine10: '#f39100',
  turquoiseDark: '#0e8c9b',
  paleYellow: '#f8f1ad',
  social: '#507cc0',
  socialDark: '#4c70a7',
  grey: '#4E5B59',
  green: '#6DBD8E',
  tangerine2: '#FCC865',
  dark1: '#293953',
  dark2: '#6B4E71',
  dark3: '#829399',
  darkGray1: '#182026',
  darkGray2: '#202b33',
  darkGray3: '#293742',
  darkGray4: '#979797',
  darkGray5: '#394b59',
  gray1: '#5c7080',
  gray2: '#738694',
  gray3: '#8a9ba8',
  gray4: '#a7b6c2',
  gray5: '#bfccd6',
  gray6: '#979797',
  lightGray1: '#ced9e0',
  lightGray2: '#d8e1e8',
  lightGray3: '#e1e8ed',
  lightGray4: '#ebf1f5',
  lightGray5: '#f5f8fa',
  light1: '#34E4EA',
  light2: '#D6DBB2',
  light3: '#6D72C3',
};

const defaultValue = '#F59100';
const groupColorId = 'Props';

const labelSize = 'Size';
const sizes = {
  '8': '8pt',
  '10': '10pt',
  '12': '12pt',
  '14': '14pt',
  '16': '16pt',
  '18': '18pt',
  '1rem': '1rem',
  '1em': '1em',
};

const defaultSizeValue = '#F59100';
const groupSizeId = 'Props';

const iconsWrapper = style({
  padding: '16px',
  flexDirection: 'row',
  $nest: {
    '& span': {
      display: 'inline-block',
      padding: '16px',
    },
  },
});

export const Materialinear = () => (
  <div className={iconsWrapper}>
    <IconsM.Exclam
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Quotedbl
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Numbersign
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Dollar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Percent
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ampersand
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Quotesingle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Parenleft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Parenright
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Asterisk
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Plus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Comma
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Hyphen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Period
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Slash
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Zero
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.One
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Two
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Three
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Four
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Five
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Six
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Seven
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Eight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Nine
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Colon
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Semicolon
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Less
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Equal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Greater
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Question
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.At
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.A
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.B
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.C
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.D
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.E
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.F
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.G
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.H
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.I
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.J
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.K
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.L
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.M
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.N
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.O
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.P
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Q
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.R
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.S
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.T
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.U
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.V
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.W
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.X
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Y
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Z
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Bracketleft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Backslash
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Bracketright
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Asciicircum
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Underscore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Grave
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.a
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.b
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.c
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.d
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.e
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.f
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.g
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.h
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.i
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.j
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.k
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.l
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.m
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.n
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.o
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.p
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.q
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.r
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.s
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.t
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.u
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.v
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.w
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.x
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.y
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.z
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Braceleft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Bar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Braceright
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Asciitilde
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Copyright
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhome
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhome2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhome3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhome4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhome5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhome6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbathtub
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltoothbrush
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcouch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lchair
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcity
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lapartment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpencil
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpencil2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpencil3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Leraser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpencil4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpencil5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfeather
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfeather2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfeather3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpen2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpenAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpenRemove
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lvector
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpen3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lblog
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbrush
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbrush2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lspray
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpaintRoller
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lstamp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltape
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdeskTape
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltexture
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcolorPicker
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpalette
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcolorSampler
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbucket
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgradient
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgradient2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmagicWand
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmagnet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpencilRuler
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpencilRuler2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcompass
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltarget
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgun
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbottle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldrop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdropCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldrop2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsnow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsnow2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfire
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llighter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lknife
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldagger
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltissue
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtoiletPaper
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpoop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lumbrella
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lumbrella2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrain3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltornado
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwind
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcooling
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcontrast
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsunSmall
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsun
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsun2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmoon
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcloud
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudUpload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudDowload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudRain
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudHailstones
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudSnow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudWind
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsunWind
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CloudFog
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudSun
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudLightning
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudSync
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudGear
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudCross
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcloudDatabase
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldatabase
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseRemove
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseRefresh
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseHistory
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseUpload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdatabaseDownload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lserver
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshield
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LshieldCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LshieldAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LshieldCross
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LrotationLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lunlock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lkey
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LkeyHole
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtoggleOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtoggleOn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcog
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcog2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool7
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltoole8
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltool9
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfactory
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfactory2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrecycle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltrash
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltrash2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltrash3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbroom
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgame
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgamepad
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ljoystick
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldice
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lspades
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldiamonds
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lclubs
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhearts
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lheart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lstar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LstarHalf
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LstarEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lflag
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lflag2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lflag3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmailboxFull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmailboxEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LatSign
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lenvelope
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenvelopeOpen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpaperclip
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpaperPlane
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lreply
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LreplyAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Linbox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Linbox2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Loutbox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Larchive
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Larchive2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldrawers
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldrawers2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldrawers3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Leye
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LeyeCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LeyesPlus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LeyeMinus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbinoclars
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbinoclars2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LhddDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LhddUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfloppyDisk
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldisc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltape2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lprinter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshredder
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfiles
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcopy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcompare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfolder
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderSearch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderPlus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderMinus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderDownload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderUpload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderStar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderHeart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderUser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderShared
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderMusic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderPicture
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfolderFilm
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lscissors
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpaste
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardPencil
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardText
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclipboardUser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lregister
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lenter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpapers
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lnews
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lreading
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltypewriter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldocument
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldocument2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LgraduationHat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llicense
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llicense2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmedalEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmedalFirst
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmedalSecond
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmedalThird
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpodium
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltrophy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltrophy2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmusicNote
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmusicNote2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmusicNote3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lplaylist
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LplaylistAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lguitar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltrumpet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lalbum
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshuffle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LrepeatOne
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrepeat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lheadphones
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lheadset
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lloudspeacker
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lequalizer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltheater
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.L3dGlasses
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lticket
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpresentation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lplay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfilmPlay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LclapboardPlay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmedia
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfilm
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfilm2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsurveillance
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsurveillance2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcamera
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcameraCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcameraPlay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtimeLapse
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrecord
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcamera2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcameraFilp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpanorama
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtimeLapse2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshutter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshutter2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfaceDetection
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lflare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lconvex
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lconcave
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpicture
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpicture2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpicture3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpictures
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbook
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LaudioBook
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbook2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbookmark
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbookmark2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbookmark3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llibrary
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llibrary2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcontacts
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lprofile
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lportrait
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lportrait2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Luser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LuserAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LuserMinus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LuserLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lusers
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lusers2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LusersAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LusersMinus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LgroupWork
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwoman
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lman
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbaby
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbaby2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbaby3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbabyBottle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwalk
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LhandWaving
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ljump
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrun
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwoman2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lman2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmanWoman
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lheight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lweight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lscale2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbutton
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbowTie
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltie
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsocks
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshoe
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshoes
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpants
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshorts
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LflipFlop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshirt
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhanger
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llaundry
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lstore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhaircut
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lstore24
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbarcode
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbarcode2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbarcode3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcashier
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbag
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbag2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcartEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcartFull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcartPlus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcartPlus2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcartAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcartRemove
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcartExchange
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltag
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltags
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lreceipt
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwallet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcreditCard
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcashDollar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcashEuro
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcashPound
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcashYen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbagDollar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbagEuro
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbagPound
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbagYen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcoinDollar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcoinEurp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcoinPound
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcoinYen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcalculator
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcalculator2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Labacus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lvault
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltelephone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneWave
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphonePause
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneOugoing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneIncoming
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneInOut
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneError
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneSip
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphonePlus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneMinus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lvoicemail
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldial
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltelephone2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpin
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpin2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmapMarker
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmapMarkerUser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmapMarkerDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmapMarkerCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmapMarkerCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lradar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcompass2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmap
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmap2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llocation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LroadSign
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcalendarEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcalendarCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcalendarCross
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcalendar31
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcalendarFull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcalendarInsert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcalendarText
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcalendarUser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmouse
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmouseLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmouseRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmouseBoth
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lkeyboard
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LkeyboardUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LkeyboardDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UniE794
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SpellCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lescape
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lenter2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lscreen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LaspectRatio
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsignal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsignalLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsignal80
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsignal60
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsignal40
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsignal20
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsignal0
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsignalBlocked
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsim
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LflashMemory
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LusbDrive
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmobile
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmobile2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmobileNotification
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmobileVibrator
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmobileEmbed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmobileWave
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltablet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltablet2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llaptop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LlaptopPhone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldesktop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llaunch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LnewTab
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwindow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcable
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcable2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltv
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lradio
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lremote
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpowerSwitch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpower
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpowerCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LflashAuto
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llamp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lflashlight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llampshade
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcord
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Loutlet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryPower
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryError
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryLow1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryLow2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryLow3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryMid1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryMid2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryMid3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryFull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryCharging
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryCharging2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryCharging3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryCharging4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryCharging5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UniE7D1LbatteryCharging6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbatteryCharging7
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lchip
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchipX64
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchipX86
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbubble
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbubbles
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleDots
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleQuestion
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleText
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UniE7DCLbubblePencil
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubblePicture
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleUser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleQuote
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleHeart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleEmoticon
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbubbleAttachment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LphoneBubble
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LquotteOpen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LquotteClose
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldna
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LheartPulse
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpulse
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsyringe
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpills
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfirstAid
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhelp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbandage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbandages
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lthermometer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmicroscope
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbrain
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbeaker
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lskull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lconstruction
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lconstruction2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpieChart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpieChart2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgraph
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchartGrowth
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchartBars
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchartSettings
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcake
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgift
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lballoon
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrank
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrank2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrank3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcrown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llotus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldiamond
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldiamond2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldiamond3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldiamond4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lteacup
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lteapot
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lglass
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbottle1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lglass2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lglass3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldinner
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldinner2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lchef
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lscale3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Legg
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Legg2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Leggs
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lplatter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsteak
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhamburger
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhotdog
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpizza
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsausage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lchicken
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfish
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcarrot
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcheese
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbread
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LiceCream
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LiceCream2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcandy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llollipop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcoffeBean
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcoffeCup
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcherry
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgrapes
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcitrus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lapple
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lleaf
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llandscape
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpineTree
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltree
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcastus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpaw
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfootprint
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LspeedSlow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LspeedMedium
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LspeedFast
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrocket
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ljustice
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ljustice2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsuitcase
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LluggageWeight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldolly
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lplane
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LplaneCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhelicopter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtrafficLights
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsiren
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lroad
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lengine
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LoilPressure
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcoolantTemperature
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcarBattery
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgas
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgallon
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltransmission
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcarWash
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcarWash2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbus2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcar1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lparking
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcarLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltaxi
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcarSiren
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcarWash3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcarWash4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lambulance
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltruck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltruck2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtruckWeight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltrain
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lboat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lboat2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lanchor
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UniE85E
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbicycle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbicycle2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexercise
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexercise2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lswim
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfootball
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbaseball
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbaseball2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltennis
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltennis2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpingPong
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhockey
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.L8ball
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbowling
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbowling2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgolf
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgolf2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Larchery
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lslingshot
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsoccer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbasketball
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcube
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.L3dRotate
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpuzzle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lglasses
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lglasses2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Laccessibility
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Laccessibility2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwall
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfence
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwall2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgrid
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LresizeHandle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgrid2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lselect
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lselect2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsiteMap
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Learth
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LearthLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lnetwork
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LnetworkLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lplanet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone7
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone8
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone9
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone10
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone11
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone12
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone13
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone14
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone15
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone16
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone17
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone18
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone19
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone20
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone21
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone22
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lemoticone23
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lghost
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lghost2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhalloween
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lchristmas
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Leaster
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmustache
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmustache2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpipe
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbell
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalarmAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalarmSnooze
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalarmRinging
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmegaphone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhearing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LvolumeHight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LvolumeMiddle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LvolumeLow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lvolume
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmute
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llan
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llan2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwifi
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiBlocked
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiMid
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiLow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiLow2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiAlert2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiAlert3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LwifiAlert4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lstream
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LstreamCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LstreamError
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LstreamAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcommunication
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcommunicationCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwaves
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwaves2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsatellite
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsatellite2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmicMute
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmic2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lspotlight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lloading
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lloadinge
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lloading3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lloading4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrefresh
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrefresh2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lundo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lredo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ljump2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lundo2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lredo2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsync
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LrepeatOne2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsyncCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsync2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LrepeatOne3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsyncCrossed2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lreturn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lreturn2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrefund
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhistory
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhistory2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhistory3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lclock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lclock2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lclock3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwatch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lalarm3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalarmAdd2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalarmRemove2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalarmCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalarmError
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltimer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtimerCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltimer2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtimerCrossed2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldownload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lupload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ldownload2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lupload2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterUp2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterDown2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterVertical
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterLeft2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterRight2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LenterHorizontal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitUp2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitDown2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitLeft2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LexitRight2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcli
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbug
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcode
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileCode
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileImage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileZip
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileAudio
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfilePreview
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileCharts
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileStats
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileSpreadsheet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llink
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lunlink
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llink2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lunlink2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LthumbsUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LthumbsDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LthumbsUp2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UniE91CLthumbsDown2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UniE91DLthumbsUp3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LthumbsDown3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshare2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshare3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lshare4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsearch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfileSearch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfindReplace
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LzoomIn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LzoomOut
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lloupe
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LloupeZoomIn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LloupeZoomOut
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcancel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmenu
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llist
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llist2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llist3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llist4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llist5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmenu2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexclamation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lquestion
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcross
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lplus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lminus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpercent
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronsExpandVertical
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronsExpandHorizontal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronsContractVertical
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronsContractHorizontal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowUpRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowMerge
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowSplit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowDivert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowReturn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexpand
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcontract
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexpand2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcontract2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmove
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltab
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowWave
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexpand3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexpand4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcontract3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lnotification
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lwarning
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LnotificationCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LquestionCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmenuCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcheckCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcrossCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LplusCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LminusCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpercentCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowUpCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowDownCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowLeftCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowRightCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronUpCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronDownCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronLeftCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronRightCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LbackwardCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LfirstCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpreviousCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LstopCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LplayCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpause
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LnextCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LlastCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LforwardCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LejectCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcrop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LframeExpand
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LframeContract
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfocus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Ltransform
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lgrid3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LgridCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Llayers
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LlayersCrossed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfold
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lrulers
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lruler
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfunnel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmirror1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lmirror2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lflip1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lfli2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Langle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Langle2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsubstract
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lunion
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lintersect
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lexclude
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalignCenterVertical
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalignRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalignBottom
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalignLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalignCenterHorizontal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LalignTop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LplusSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LminusSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpercentSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowUpSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowDownSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowLeftSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LarrowRightSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronUpSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronDownSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronLeftSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LchevronRightSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcheckSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LcrossSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LmenuSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lforbiden
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lcircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LradioButton
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lligature
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextFormat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextFormatRemove
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextSize
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lbold
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Litalic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lunderline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lstrikethrough
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhighlight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextAlignLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextAlignCenter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextAlignRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextAlignJustify
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LlineSpacing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LindentIncrease
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LindentDecrease
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LtextWrap
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpilcrow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdirectionLtr
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LdirectionRtl
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpageBreak
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpageBreak2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortAlphaAsc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortAlphaDesc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortNumericAsc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortNumericDesc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortAmountAsc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortAmountDesc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortTimeAsc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LsortTimeDesc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lsigma
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LpencilLine
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand7
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand8
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand9
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand10
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand11
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand12
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand13
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand14
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand15
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lhand16
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer7
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer8
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer9
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer10
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer11
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer12
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer13
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer14
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lpointer15
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderStyle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderOuter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderInner
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderTop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderHorizontal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderBottm
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderVertical
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LborderNone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lellipsis
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Google
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Google2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Google3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GooglePlus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GooglePlus2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GooglePlus3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Facebook
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Facebook2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Instagram
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Twitter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.R3dRotation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AcUnit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Alarm
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AccessAlarms
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Schedule
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Accessibility
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Accessible
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AccountBalance
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AccountBalanceWallet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AccountBox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AccountCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Adb
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Add
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AddAPhoto
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AlarmAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AddAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AddBox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AddCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ControlPoint
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AddLocation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AddShoppingCart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Queue
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AddToQueue
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Adjust
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatFlat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatFlatAngled
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatIndividualSuite
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatLegroomExtra
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatLegroomNormal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatLegroomReduced
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatReclineExtra
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirlineSeatReclineNormal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Flight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirplanemodeInactive
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Airplay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AirportShuttle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AlarmOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AlarmOn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Album
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AllInclusive
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AllOut
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Android
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Announcement
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Apps
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Archive
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArrowBack
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArrowDownward
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArrowDropDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArrowDropDownCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArrowDropUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArrowForward
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArrowUpward
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ArtTrack
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AspectRatio
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Poll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Assignment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AssignmentInd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AssignmentLate
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AssignmentReturn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AssignmentReturned
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AssignmentTurnedIn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Assistant
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Flag
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AttachFile
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AttachMoney
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Attachment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Audiotrack
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Autorenew
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.AvTimer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Backspace
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CloudUpload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BatteryAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BatteryChargingFull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BatteryStd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BatteryUnknown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BeachAccess
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Beenhere
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Block
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Bluetooth
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BluetoothSearching
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BluetoothConnected
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BluetoothDisabled
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BlurCircular
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BlurLinear
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BlurOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BlurOn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Class
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TurnedIn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TurnedInNot
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderBottom
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderClear
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderColor
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderHorizontal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderInner
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderOuter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderStyle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderTop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BorderVertical
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BrandingWatermark
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Brightness1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Brightness2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Brightness3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Brightness4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BrightnessLow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BrightnessMedium
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BrightnessHigh
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BrightnessAuto
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BrokenImage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Brush
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BubbleChart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BugReport
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Build
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BurstMode
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Domain
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.BusinessCenter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Cached
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Cake
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Phone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CallEnd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CallMade
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MergeType
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CallMissed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CallMissedOutgoing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CallReceived
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CallSplit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CallToAction
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Camera
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhotoCamera
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CameraEnhance
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CameraFront
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CameraRear
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CameraRoll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Cancel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Redeem
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CardMembership
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CardTravel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Casino
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Cast
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CastConnected
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CenterFocusStrong
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CenterFocusWeak
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ChangeHistory
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Chat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ChatBubble
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ChatBubbleOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Check
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CheckBox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CheckBoxOutlineBlank
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CheckCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NavigateBefore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NavigateNext
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ChildCare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ChildFriendly
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ChromeReaderMode
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Close
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ClearAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ClosedCaption
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WbCloudy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CloudCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CloudDone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CloudDownload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CloudOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CloudQueue
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Code
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhotoLibrary
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CollectionsBookmark
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Palette
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Colorize
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Comment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Compare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CompareArrows
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Laptop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ConfirmationNumber
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ContactMail
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ContactPhone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Contacts
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ContentCopy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ContentCut
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ContentPaste
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ControlPointDuplicate
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Copyright2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ModeEdit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CreateNewFolder
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Payment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Crop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Crop169
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Crop32
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CropLandscape
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Crop75
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CropDin
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CropFree
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CropOriginal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CropPortrait
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CropRotate
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.CropSquare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Dashboard
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DataUsage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DateRange
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Dehaze
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Delete
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DeleteForever
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DeleteSweep
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Description
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DesktopMac
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DesktopWindows
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Details
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DeveloperBoard
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DeveloperMode
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DeviceHub
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Phonelink
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DevicesOther
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DialerSip
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Dialpad
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Directions
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsBike
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsBoat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsBus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsCar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsRailway
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsRun
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsTransit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DirectionsWalk
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DiscFull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Dns
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NotInterested
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DoNotDisturbAlt
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DoNotDisturbOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RemoveCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Dock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Done
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DoneAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DonutLarge
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DonutSmall
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Drafts
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.DragHandle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TimeToLeave
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Dvr
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EditLocation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Eject
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Markunread
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EnhancedEncryption
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Equalizer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Error
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ErrorOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EuroSymbol
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EvStation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.InsertInvitation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EventAvailable
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EventBusy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EventNote
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.EventSeat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExitToApp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExpandLess
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExpandMore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Explicit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Explore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Exposure
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExposureNeg1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExposureNeg2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExposurePlus1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExposurePlus2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ExposureZero
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Extension
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Face
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FastForward
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FastRewind
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Favorite
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FavoriteBorder
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FeaturedPlayList
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FeaturedVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SmsFailed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FiberDvr
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FiberManualRecord
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FiberNew
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FiberPin
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FiberSmartRecord
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GetApp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FileUpload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter1
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter2
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter7
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter8
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter9
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Filter9Plus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterBAndW
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterCenterFocus
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterDrama
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterFrames
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Terrain
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterList
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterNone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterTiltShift
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FilterVintage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FindInPage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FindReplace
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Fingerprint
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FirstPage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FitnessCenter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Flare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FlashAuto
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FlashOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FlashOn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FlightLand
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FlightTakeoff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Flip
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FlipToBack
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FlipToFront
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Folder
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FolderOpen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FolderShared
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FolderSpecial
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FontDownload
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatAlignCenter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatAlignJustify
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatAlignLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatAlignRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatBold
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatClear
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatColorFill
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatColorReset
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatColorText
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatIndentDecrease
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatIndentIncrease
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatItalic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatLineSpacing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatListBulleted
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatListNumbered
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatPaint
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatQuote
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatShapes
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatSize
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatStrikethrough
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatTextdirectionLToR
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatTextdirectionRToL
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FormatUnderlined
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.QuestionAnswer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Forward
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Forward10
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Forward30
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Forward5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FreeBreakfast
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Fullscreen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.FullscreenExit
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Functions
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GTranslate
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Games
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Gavel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Gesture
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Gif
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Goat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GolfCourse
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MyLocation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocationSearching
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocationDisabled
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Star
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Gradient
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Grain
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GraphicEq
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GridOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GridOn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.People
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GroupAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.GroupWork
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Hd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HdrOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HdrOn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HdrStrong
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HdrWeak
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Headset
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HeadsetMic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Healing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Hearing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Help
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HelpOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HighQuality
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Highlight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HighlightOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Restore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Home
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HotTub
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalHotel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HourglassEmpty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.HourglassFull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Http
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Photo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ImageAspectRatio
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ImportContacts
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ImportExport
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ImportantDevices
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Inbox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.IndeterminateCheckBox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Info
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.InfoOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Input
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.InsertComment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.InsertDriveFile
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TagFaces
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Link
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.InvertColors
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.InvertColorsOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Iso
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Keyboard
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardArrowDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardArrowLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardArrowRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardArrowUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardBackspace
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardCapslock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardHide
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardReturn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardTab
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.KeyboardVoice
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Kitchen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Label
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LabelOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Language
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LaptopChromebook
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LaptopMac
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LaptopWindows
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LastPage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.OpenInNew
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Layers
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LayersClear
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LeakAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LeakRemove
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Lens
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LibraryBooks
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LibraryMusic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LightbulbOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LineStyle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LineWeight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LinearScale
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LinkedCamera
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.List
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LiveHelp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LiveTv
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalPlay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalAirport
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalAtm
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalBar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalCafe
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalCarWash
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalConvenienceStore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RestaurantMenu
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalDrink
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalFlorist
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalGasStation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ShoppingCart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalHospital
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalLaundryService
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalLibrary
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalMall
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Theaters
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalOffer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalParking
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalPharmacy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalPizza
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Print
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalShipping
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocalTaxi
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocationCity
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LocationOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Room
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LockOpen
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LockOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Looks
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Looks3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Looks4
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Looks5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Looks6
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LooksOne
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LooksTwo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Sync
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Loupe
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.LowPriority
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Loyalty
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MailOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Map
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MarkunreadMailbox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Memory
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Menu
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Message
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Mic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MicNone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MicOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Mms
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ModeComment
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MonetizationOn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MoneyOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MonochromePhotos
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MoodBad
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.More
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MoreHoriz
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MoreVert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Motorcycle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Mouse
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MoveToInbox
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MovieCreation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MovieFilter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MultilineChart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MusicNote
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.MusicVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Nature
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NaturePeople
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Navigation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NearMe
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NetworkCell
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NetworkCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NetworkLocked
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NetworkWifi
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NewReleases
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NextWeek
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Nfc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NoEncryption
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalCellularNoSim
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Note
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NoteAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Notifications
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NotificationsActive
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NotificationsNone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NotificationsOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.NotificationsPaused
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.OfflinePin
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.OndemandVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Opacity
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.OpenInBrowser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.OpenWith
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Pages
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Pageview
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PanTool
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Panorama
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RadioButtonUnchecked
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PanoramaHorizontal
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PanoramaVertical
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PanoramaWideAngle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PartyMode
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Pause
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PauseCircleFilled
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PauseCircleOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PeopleOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PermCameraMic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PermContactCalendar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PermDataSetting
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PermDeviceInformation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PersonOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PermMedia
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PermPhoneMsg
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PermScanWifi
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Person
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PersonAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PersonPin
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PersonPinCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PersonalVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Pets
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhoneAndroid
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhoneBluetoothSpeaker
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhoneForwarded
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhoneInTalk
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhoneIphone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhoneLocked
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhoneMissed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhonePaused
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhonelinkErase
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhonelinkLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhonelinkOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhonelinkRing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhonelinkSetup
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhotoAlbum
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhotoFilter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhotoSizeSelectActual
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhotoSizeSelectLarge
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PhotoSizeSelectSmall
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PictureAsPdf
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PictureInPicture
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PictureInPictureAlt
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PieChart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PieChartOutlined
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PinDrop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlayArrow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlayCircleFilled
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlayCircleOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlayForWork
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlaylistAdd
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlaylistAddCheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlaylistPlay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PlusOne
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Polymer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Pool
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PortableWifiOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Portrait
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Power
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PowerInput
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PowerSettingsNew
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PregnantWoman
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PresentToAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.PriorityHigh
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Public
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Publish
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.QueueMusic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.QueuePlayNext
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Radio
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RadioButtonChecked
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RateReview
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Receipt
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RecentActors
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RecordVoiceOver
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Redo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Refresh
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Remove
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RemoveCircleOutline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RemoveFromQueue
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Visibility
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RemoveShoppingCart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Reorder
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Repeat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RepeatOne
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Replay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Replay10
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Replay30
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Replay5
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Reply
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ReplyAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Report
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Warning
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Restaurant
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RestorePage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RingVolume
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RoomService
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Rotate90DegreesCcw
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RotateLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RotateRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RoundedCorner
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Router
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Rowing
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RssFeed
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.RvHookup
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Satellite
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Save
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Scanner
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.School
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ScreenLockLandscape
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ScreenLockPortrait
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ScreenLockRotation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ScreenRotation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ScreenShare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SdStorage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Search
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Security
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SelectAll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Send
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SentimentDissatisfied
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SentimentNeutral
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SentimentSatisfied
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SentimentVeryDissatisfied
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SentimentVerySatisfied
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Settings
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsApplications
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsBackupRestore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsBluetooth
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsBrightness
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsCell
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsEthernet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsInputAntenna
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsInputComposite
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsInputHdmi
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsInputSvideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsOverscan
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsPhone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsPower
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsRemote
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsSystemDaydream
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SettingsVoice
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Share
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Shop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ShopTwo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ShoppingBasket
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ShortText
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ShowChart
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Shuffle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalCellular4Bar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalCellularConnectedNoInternet4Bar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalCellularNull
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalCellularOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalWifi4Bar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalWifi4BarLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SignalWifiOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SimCard
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SimCardAlert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SkipNext
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SkipPrevious
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Slideshow
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SlowMotionVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.StayPrimaryPortrait
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SmokeFree
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SmokingRooms
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Textsms
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Snooze
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Sort
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SortByAlpha
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Spa
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SpaceBar
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Speaker
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SpeakerGroup
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SpeakerNotes
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SpeakerNotesOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SpeakerPhone
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Spellcheck
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.StarBorder
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.StarHalf
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Stars
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.StayPrimaryLandscape
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Stop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.StopScreenShare
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Storage
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.StoreMallDirectory
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Straighten
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Streetview
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.StrikethroughS
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Style
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SubdirectoryArrowLeft
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SubdirectoryArrowRight
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Subject
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Subscriptions
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Subtitles
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Subway
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SupervisorAccount
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SurroundSound
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SwapCalls
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SwapHoriz
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SwapVert
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SwapVerticalCircle
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SwitchCamera
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SwitchVideo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SyncDisabled
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SyncProblem
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SystemUpdate
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.SystemUpdateAlt
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Tab
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TabUnselected
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Tablet
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TabletAndroid
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TabletMac
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TapAndPlay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TextFields
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TextFormat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Texture
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ThumbDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ThumbUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ThumbsUpDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Timelapse
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Timeline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Timer
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Timer10
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Timer3
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TimerOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Title
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Toc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Today
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Toll
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Tonality
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TouchApp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Toys
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TrackChanges
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Traffic
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Train
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Tram
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TransferWithinAStation
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Transform
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Translate
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TrendingDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TrendingFlat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.TrendingUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Tune
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Tv
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Unarchive
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Undo
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UnfoldLess
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.UnfoldMore
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Update
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Usb
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VerifiedUser
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VerticalAlignBottom
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VerticalAlignCenter
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VerticalAlignTop
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Vibration
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VideoCall
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VideoLabel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VideoLibrary
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Videocam
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VideocamOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VideogameAsset
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewAgenda
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewArray
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewCarousel
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewColumn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewComfy
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewCompact
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewDay
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewHeadline
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewList
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewModule
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewQuilt
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewStream
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ViewWeek
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Vignette
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VisibilityOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VoiceChat
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Voicemail
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VolumeDown
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VolumeMute
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VolumeOff
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VolumeUp
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VpnKey
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.VpnLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Wallpaper
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Watch
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WatchLater
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WbAuto
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WbIncandescent
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WbIridescent
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WbSunny
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Wc
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Web
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WebAsset
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Weekend
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Whatshot
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Widgets
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Wifi
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WifiLock
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WifiTethering
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.Work
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.WrapText
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.YoutubeSearchedFor
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ZoomIn
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ZoomOut
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
    <IconsM.ZoomOutMap
      iconSize={select(labelSize, sizes, defaultSizeValue, groupSizeId)}
      color={select(labelColor, colors, defaultValue, groupColorId)}
    />
  </div>
);
