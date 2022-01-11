import React, { BaseHTMLAttributes } from 'react';
import { fontFace, style } from 'typestyle';
import materialinearTtfUrl from '../../../Common/theming/materialinear/fonts/materialinear.ttf';
import {
  getFontClassName,
  isNullOrUndef,
  stringIsNullOrEmpty,
  AttributPolice,
  getFontSizeNumber,
} from '../../../Common/utils/helpers';

fontFace({
  fontFamily: 'materialinear',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: 'url(' + materialinearTtfUrl + ')',
});

const materialinearfont = {
  fontFamily: 'materialinear',
  speak: 'none',
  //fontStyle: 'normal',
  //fontWeight: 'normal',
  //fontVariant: 'normal',
  //textTransform: 'none',
  //lineHeight: 1,
};

//@font-face {
//    font - family: 'materialinear';
//    src: url('./fonts/materialinear.eot?sr2wtz');
//    src: url('./fonts/materialinear.eot?sr2wtz#iefix') format('embedded-opentype'), url('./fonts/materialinear.ttf?sr2wtz') format('truetype'), url('./fonts/materialinear.woff?sr2wtz') format('woff'), url('./fonts/materialinear.svg?sr2wtz#materialinear') format('svg');
//    font - weight: normal;
//    font - style: normal;
//}

//[class^= "icon-"], [class*= " icon-"] {
//    /* use !important to prevent issues with browser extensions that change fonts */
//    font - family: 'materialinear'!important;
//    speak: none;
//    font - style: normal;
//    font - weight: normal;
//    font - variant: normal;
//    text - transform: none;
//    line - height: 1;
//    /* Better Font Rendering =========== */
//    -webkit - font - smoothing: antialiased;
//    -moz - osx - font - smoothing: grayscale;
//}

export interface AlertIconProps {
  iconSize?: string | number;
  className?: string;
  alertNumber?: string | number;
  alertFont?: AttributPolice;
  alertCircle?: {
    active: boolean;
    color?: string;
  };
}
interface AlertIconState {}
class AlertIcon extends React.Component<AlertIconProps, AlertIconState> {
  constructor(p, c) {
    super(p, c);
  }

  render() {
    const fontSize: string = (getFontSizeNumber(this.props.iconSize) * 0.6).toString() + 'px';
    const nbChar: number = this.props.alertNumber.toString().length;

    const styleAlerteG = style({
      position: 'relative',
    });
    let styleAlerteNumber = style({
      position: 'absolute',
      top: '-0.5em',
      right: '-' + (0.3 * nbChar).toString() + 'em',
      fontSize: fontSize,
    });

    if (isNullOrUndef(this.props.alertFont) === false) {
      this.props.alertFont.fontSize = fontSize;
      styleAlerteNumber += ' ' + getFontClassName(this.props.alertFont);
    }

    if (isNullOrUndef(this.props.alertCircle) === false && this.props.alertCircle.active) {
      styleAlerteNumber +=
        ' ' +
        style({
          padding: '0.1em 0.3em',
          borderRadius: '50%',
          backgroundColor: this.props.alertCircle.color,
        });
    }

    return (
      <span className={this.props.className + ' ' + styleAlerteG}>
        {this.props.children}
        <span className={styleAlerteNumber}>{this.props.alertNumber}</span>
      </span>
    );
  }
}

export interface IconProps extends AlertIconProps {
  color?: string;
  backgroundColor?: string;
  withCircle?: boolean;
  iconSize?: string | number;
  className?: string;

  onClick?: (event) => void;
  onMouseDown?: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;

  fontWeight?: any;
  fontStyle?: any;
  fontStrech?: any;
  lineHeight?: any;
  letterSpacing?: any;
}

interface MaterialIconProps {
  code?: string;
}

interface MaterialIconState {}

class BaseIcon extends React.Component<
  IconProps & MaterialIconProps & React.HTMLAttributes<HTMLSpanElement>,
  MaterialIconState
> {
  constructor(p, c) {
    super(p, c);
  }
  render() {
    const styleFocus = style({
      $nest: {
        '&:focus': {
          outline: 'none',
        },
      },
    });
    const styleIcon =
      style({
        backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '',
        padding: this.props.withCircle ? '5px' : '0',
        borderRadius: this.props.withCircle ? '50%' : '0',
        cursor: this.props.onClick || this.props.onMouseDown ? 'pointer' : 'auto',

        fontSize: this.props.iconSize,
        color: this.props.color ? this.props.color : '#3f3b37',
        fontWeight: this.props.fontWeight ? this.props.fontWeight : 'normal',
        fontStyle: this.props.fontStyle ? this.props.fontStyle : 'normal',
        fontStretch: this.props.fontStrech ? this.props.fontStrech : 'normal',
        lineHeight: this.props.lineHeight ? this.props.lineHeight : 'normal',
        letterSpacing: this.props.letterSpacing ? this.props.letterSpacing : 'normal',
      }) +
      (this.props.className ? ' ' + this.props.className : '') +
      ' ';

    const {
      iconSize: IconSize,
      alertNumber: AlertNumber,
      alertFont: AlertFont,
      alertCircle: AlertCircle,
      backgroundColor: BackgroundColor,
      withCircle: AvecCercle,
      fontWeight,
      fontStyle,
      fontStrech,
      lineHeight,
      letterSpacing,
      className,
      code,
      ...rest
    } = this.props;

    const classNameIcon =
      style(materialinearfont, {
        $nest: { '&::before': { content: code } },
      }) +
      ' ' +
      styleIcon;

    if (this.props.alertNumber) {
      return (
        <AlertIcon
          iconSize={this.props.iconSize}
          className={styleIcon}
          alertNumber={this.props.alertNumber}
          alertCircle={this.props.alertCircle}
          alertFont={this.props.alertFont}
        >
          <span {...rest} className={classNameIcon} />
        </AlertIcon>
      );
    }

    return <span {...rest} className={classNameIcon} />;
  }
}

//ligth version
//const BaseIcon = (props) => {
//    const { className, code, ...rest } = props;
//    return <span {...rest} className={style(materialinearfont, { $nest: { "&::before": { content: code } } }) + (className != undefined ? " " + className : "")} />
//};

export const Exclam = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\21'" />;
};
export const Quotedbl = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\22'" />;
};
export const Numbersign = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\23'" />;
};
export const Dollar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\24'" />;
};
export const Percent = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\25'" />;
};
export const Ampersand = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\26'" />;
};
export const Quotesingle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\27'" />;
};
export const Parenleft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\28'" />;
};
export const Parenright = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\29'" />;
};
export const Asterisk = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\2a'" />;
};
export const Plus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\2b'" />;
};
export const Comma = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\2c'" />;
};
export const Hyphen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\2d'" />;
};
export const Period = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\2e'" />;
};
export const Slash = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\2f'" />;
};
export const Zero = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\30'" />;
};
export const One = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\31'" />;
};
export const Two = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\32'" />;
};
export const Three = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\33'" />;
};
export const Four = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\34'" />;
};
export const Five = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\35'" />;
};
export const Six = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\36'" />;
};
export const Seven = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\37'" />;
};
export const Eight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\38'" />;
};
export const Nine = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\39'" />;
};
export const Colon = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\3a'" />;
};
export const Semicolon = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\3b'" />;
};
export const Less = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\3c'" />;
};
export const Equal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\3d'" />;
};
export const Greater = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\3e'" />;
};
export const Question = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\3f'" />;
};
export const At = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\40'" />;
};
export const A = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\41'" />;
};
export const B = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\42'" />;
};
export const C = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\43'" />;
};
export const D = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\44'" />;
};
export const E = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\45'" />;
};
export const F = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\46'" />;
};
export const G = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\47'" />;
};
export const H = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\48'" />;
};
export const I = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\49'" />;
};
export const J = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\4a'" />;
};
export const K = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\4b'" />;
};
export const L = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\4c'" />;
};
export const M = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\4d'" />;
};
export const N = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\4e'" />;
};
export const O = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\4f'" />;
};
export const P = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\50'" />;
};
export const Q = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\51'" />;
};
export const R = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\52'" />;
};
export const S = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\53'" />;
};
export const T = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\54'" />;
};
export const U = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\55'" />;
};
export const V = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\56'" />;
};
export const W = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\57'" />;
};
export const X = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\58'" />;
};
export const Y = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\59'" />;
};
export const Z = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\5a'" />;
};
export const Bracketleft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\5b'" />;
};
export const Backslash = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\5c'" />;
};
export const Bracketright = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\5d'" />;
};
export const Asciicircum = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\5e'" />;
};
export const Underscore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\5f'" />;
};
export const Grave = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\60'" />;
};
export const a = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\61'" />;
};
export const b = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\62'" />;
};
export const c = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\63'" />;
};
export const d = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\64'" />;
};
export const e = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\65'" />;
};
export const f = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\66'" />;
};
export const g = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\67'" />;
};
export const h = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\68'" />;
};
export const i = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\69'" />;
};
export const j = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\6a'" />;
};
export const k = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\6b'" />;
};
export const l = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\6c'" />;
};
export const m = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\6d'" />;
};
export const n = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\6e'" />;
};
export const o = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\6f'" />;
};
export const p = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\70'" />;
};
export const q = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\71'" />;
};
export const r = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\72'" />;
};
export const s = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\73'" />;
};
export const t = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\74'" />;
};
export const u = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\75'" />;
};
export const v = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\76'" />;
};
export const w = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\77'" />;
};
export const x = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\78'" />;
};
export const y = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\79'" />;
};
export const z = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\7a'" />;
};
export const Braceleft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\7b'" />;
};
export const Bar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\7c'" />;
};
export const Braceright = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\7d'" />;
};
export const Asciitilde = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\7e'" />;
};
export const Copyright = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\a9'" />;
};
export const Lhome = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e900'" />;
};
export const Lhome2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e901'" />;
};
export const Lhome3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e902'" />;
};
export const Lhome4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e903'" />;
};
export const Lhome5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e904'" />;
};
export const Lhome6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e905'" />;
};
export const Lbathtub = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e906'" />;
};
export const Ltoothbrush = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e907'" />;
};
export const Lbed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e908'" />;
};
export const Lcouch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e909'" />;
};
export const Lchair = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e90a'" />;
};
export const Lcity = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e90b'" />;
};
export const Lapartment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e90c'" />;
};
export const Lpencil = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e90d'" />;
};
export const Lpencil2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e90e'" />;
};
export const Lpen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e90f'" />;
};
export const Lpencil3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e910'" />;
};
export const Leraser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e911'" />;
};
export const Lpencil4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e912'" />;
};
export const Lpencil5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e913'" />;
};
export const Lfeather = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e914'" />;
};
export const Lfeather2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e915'" />;
};
export const Lfeather3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e916'" />;
};
export const Lpen2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e917'" />;
};
export const LpenAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e918'" />;
};
export const LpenRemove = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e919'" />;
};
export const Lvector = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e91a'" />;
};
export const Lpen3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e91b'" />;
};
export const Lblog = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e91c'" />;
};
export const Lbrush = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e91d'" />;
};
export const Lbrush2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e91e'" />;
};
export const Lspray = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e91f'" />;
};
export const LpaintRoller = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e920'" />;
};
export const Lstamp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e921'" />;
};
export const Ltape = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e922'" />;
};
export const LdeskTape = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e923'" />;
};
export const Ltexture = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e924'" />;
};
export const LcolorPicker = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e925'" />;
};
export const Lpalette = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e926'" />;
};
export const LcolorSampler = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e927'" />;
};
export const Lbucket = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e928'" />;
};
export const Lgradient = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e929'" />;
};
export const Lgradient2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e92a'" />;
};
export const LmagicWand = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e92b'" />;
};
export const Lmagnet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e92c'" />;
};
export const LpencilRuler = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e92d'" />;
};
export const LpencilRuler2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e92e'" />;
};
export const Lcompass = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e92f'" />;
};
export const Ltarget = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e930'" />;
};
export const Lgun = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e931'" />;
};
export const Lbottle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e932'" />;
};
export const Ldrop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e933'" />;
};
export const LdropCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e934'" />;
};
export const Ldrop2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e935'" />;
};
export const Lsnow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e936'" />;
};
export const Lsnow2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e937'" />;
};
export const Lfire = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e938'" />;
};
export const Llighter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e939'" />;
};
export const Lknife = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e93a'" />;
};
export const Ldagger = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e93b'" />;
};
export const Ltissue = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e93c'" />;
};
export const LtoiletPaper = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e93d'" />;
};
export const Lpoop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e93e'" />;
};
export const Lumbrella = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e93f'" />;
};
export const Lumbrella2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e940'" />;
};
export const Lrain3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e941'" />;
};
export const Ltornado = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e942'" />;
};
export const Lwind = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e943'" />;
};
export const Lcooling = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e944'" />;
};
export const Lcontrast = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e945'" />;
};
export const LsunSmall = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e946'" />;
};
export const Lsun = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e947'" />;
};
export const Lsun2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e948'" />;
};
export const Lmoon = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e949'" />;
};
export const Lcloud = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e94a'" />;
};
export const LcloudUpload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e94b'" />;
};
export const LcloudDowload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e94c'" />;
};
export const LcloudRain = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e94d'" />;
};
export const LcloudHailstones = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e94e'" />;
};
export const LcloudSnow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e94f'" />;
};
export const LcloudWind = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e950'" />;
};
export const LsunWind = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e951'" />;
};
export const CloudFog = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e952'" />;
};
export const LcloudSun = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e953'" />;
};
export const LcloudLightning = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e954'" />;
};
export const LcloudSync = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e955'" />;
};
export const LcloudLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e956'" />;
};
export const LcloudGear = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e957'" />;
};
export const LcloudAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e958'" />;
};
export const LcloudCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e959'" />;
};
export const LcloudCross = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e95a'" />;
};
export const LcloudCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e95b'" />;
};
export const LcloudDatabase = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e95c'" />;
};
export const Ldatabase = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e95d'" />;
};
export const LdatabaseAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e95e'" />;
};
export const LdatabaseRemove = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e95f'" />;
};
export const LdatabaseLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e960'" />;
};
export const LdatabaseRefresh = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e961'" />;
};
export const LdatabaseCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e962'" />;
};
export const LdatabaseHistory = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e963'" />;
};
export const LdatabaseUpload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e964'" />;
};
export const LdatabaseDownload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e965'" />;
};
export const Lserver = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e966'" />;
};
export const Lshield = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e967'" />;
};
export const LshieldCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e968'" />;
};
export const LshieldAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e969'" />;
};
export const LshieldCross = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e96a'" />;
};
export const Llock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e96b'" />;
};
export const LrotationLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e96c'" />;
};
export const Lunlock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e96d'" />;
};
export const Lkey = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e96e'" />;
};
export const LkeyHole = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e96f'" />;
};
export const LtoggleOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e970'" />;
};
export const LtoggleOn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e971'" />;
};
export const Lcog = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e972'" />;
};
export const Lcog2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e973'" />;
};
export const Ltool = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e974'" />;
};
export const Ltool1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e975'" />;
};
export const Ltool3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e976'" />;
};
export const Ltool4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e977'" />;
};
export const Ltool5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e978'" />;
};
export const Ltool6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e979'" />;
};
export const Ltool7 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e97a'" />;
};
export const Ltoole8 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e97b'" />;
};
export const Ltool9 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e97c'" />;
};
export const Lfactory = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e97d'" />;
};
export const Lfactory2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e97e'" />;
};
export const Lrecycle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e97f'" />;
};
export const Ltrash = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e980'" />;
};
export const Ltrash2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e981'" />;
};
export const Ltrash3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e982'" />;
};
export const Lbroom = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e983'" />;
};
export const Lgame = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e984'" />;
};
export const Lgamepad = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e985'" />;
};
export const Ljoystick = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e986'" />;
};
export const Ldice = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e987'" />;
};
export const Lspades = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e988'" />;
};
export const Ldiamonds = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e989'" />;
};
export const Lclubs = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e98a'" />;
};
export const Lhearts = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e98b'" />;
};
export const Lheart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e98c'" />;
};
export const Lstar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e98d'" />;
};
export const LstarHalf = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e98e'" />;
};
export const LstarEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e98f'" />;
};
export const Lflag = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e990'" />;
};
export const Lflag2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e991'" />;
};
export const Lflag3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e992'" />;
};
export const LmailboxFull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e993'" />;
};
export const LmailboxEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e994'" />;
};
export const LatSign = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e995'" />;
};
export const Lenvelope = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e996'" />;
};
export const LenvelopeOpen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e997'" />;
};
export const Lpaperclip = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e998'" />;
};
export const LpaperPlane = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e999'" />;
};
export const Lreply = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e99a'" />;
};
export const LreplyAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e99b'" />;
};
export const Linbox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e99c'" />;
};
export const Linbox2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e99d'" />;
};
export const Loutbox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e99e'" />;
};
export const Lbox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e99f'" />;
};
export const Larchive = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a0'" />;
};
export const Larchive2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a1'" />;
};
export const Ldrawers = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a2'" />;
};
export const Ldrawers2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a3'" />;
};
export const Ldrawers3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a4'" />;
};
export const Leye = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a5'" />;
};
export const LeyeCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a6'" />;
};
export const LeyesPlus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a7'" />;
};
export const LeyeMinus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a8'" />;
};
export const Lbinoclars = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9a9'" />;
};
export const Lbinoclars2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9aa'" />;
};
export const Lhdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ab'" />;
};
export const LhddDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ac'" />;
};
export const LhddUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ad'" />;
};
export const LfloppyDisk = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ae'" />;
};
export const Ldisc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9af'" />;
};
export const Ltape2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b0'" />;
};
export const Lprinter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b1'" />;
};
export const Lshredder = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b2'" />;
};
export const LfileEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b3'" />;
};
export const LfileAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b4'" />;
};
export const LfileCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b5'" />;
};
export const LfileLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b6'" />;
};
export const Lfiles = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b7'" />;
};
export const Lcopy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b8'" />;
};
export const Lcompare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9b9'" />;
};
export const Lfolder = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ba'" />;
};
export const LfolderSearch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9bb'" />;
};
export const LfolderPlus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9bc'" />;
};
export const LfolderMinus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9bd'" />;
};
export const LfolderDownload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9be'" />;
};
export const LfolderUpload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9bf'" />;
};
export const LfolderStar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c0'" />;
};
export const LfolderHeart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c1'" />;
};
export const LfolderUser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c2'" />;
};
export const LfolderShared = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c3'" />;
};
export const LfolderMusic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c4'" />;
};
export const LfolderPicture = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c5'" />;
};
export const LfolderFilm = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c6'" />;
};
export const Lscissors = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c7'" />;
};
export const Lpaste = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c8'" />;
};
export const LclipboardEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9c9'" />;
};
export const LclipboardPencil = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ca'" />;
};
export const LclipboardText = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9cb'" />;
};
export const LclipboardCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9cc'" />;
};
export const LclipboardDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9cd'" />;
};
export const LclipboardLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ce'" />;
};
export const LclipboardAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9cf'" />;
};
export const LclipboardUser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d0'" />;
};
export const Lregister = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d1'" />;
};
export const Lenter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d2'" />;
};
export const Lexit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d3'" />;
};
export const Lpapers = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d4'" />;
};
export const Lnews = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d5'" />;
};
export const Lreading = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d6'" />;
};
export const Ltypewriter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d7'" />;
};
export const Ldocument = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d8'" />;
};
export const Ldocument2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9d9'" />;
};
export const LgraduationHat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9da'" />;
};
export const Llicense = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9db'" />;
};
export const Llicense2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9dc'" />;
};
export const LmedalEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9dd'" />;
};
export const LmedalFirst = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9de'" />;
};
export const LmedalSecond = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9df'" />;
};
export const LmedalThird = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e0'" />;
};
export const Lpodium = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e1'" />;
};
export const Ltrophy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e2'" />;
};
export const Ltrophy2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e3'" />;
};
export const LmusicNote = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e4'" />;
};
export const LmusicNote2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e5'" />;
};
export const LmusicNote3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e6'" />;
};
export const Lplaylist = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e7'" />;
};
export const LplaylistAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e8'" />;
};
export const Lguitar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9e9'" />;
};
export const Ltrumpet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ea'" />;
};
export const Lalbum = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9eb'" />;
};
export const Lshuffle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ec'" />;
};
export const LrepeatOne = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ed'" />;
};
export const Lrepeat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ee'" />;
};
export const Lheadphones = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ef'" />;
};
export const Lheadset = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f0'" />;
};
export const Lloudspeacker = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f1'" />;
};
export const Lequalizer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f2'" />;
};
export const Ltheater = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f3'" />;
};
export const L3dGlasses = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f4'" />;
};
export const Lticket = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f5'" />;
};
export const Lpresentation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f6'" />;
};
export const Lplay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f7'" />;
};
export const LfilmPlay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f8'" />;
};
export const LclapboardPlay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9f9'" />;
};
export const Lmedia = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9fa'" />;
};
export const Lfilm = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9fb'" />;
};
export const Lfilm2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9fc'" />;
};
export const Lsurveillance = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9fd'" />;
};
export const Lsurveillance2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9fe'" />;
};
export const Lcamera = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e9ff'" />;
};
export const LcameraCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea00'" />;
};
export const LcameraPlay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea01'" />;
};
export const LtimeLapse = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea02'" />;
};
export const Lrecord = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea03'" />;
};
export const Lcamera2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea04'" />;
};
export const LcameraFilp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea05'" />;
};
export const Lpanorama = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea06'" />;
};
export const LtimeLapse2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea07'" />;
};
export const Lshutter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea08'" />;
};
export const Lshutter2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea09'" />;
};
export const LfaceDetection = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea0a'" />;
};
export const Lflare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea0b'" />;
};
export const Lconvex = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea0c'" />;
};
export const Lconcave = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea0d'" />;
};
export const Lpicture = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea0e'" />;
};
export const Lpicture2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea0f'" />;
};
export const Lpicture3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea10'" />;
};
export const Lpictures = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea11'" />;
};
export const Lbook = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea12'" />;
};
export const LaudioBook = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea13'" />;
};
export const Lbook2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea14'" />;
};
export const Lbookmark = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea15'" />;
};
export const Lbookmark2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea16'" />;
};
export const Lbookmark3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea17'" />;
};
export const Llibrary = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea18'" />;
};
export const Llibrary2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea19'" />;
};
export const Lcontacts = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea1a'" />;
};
export const Lprofile = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea1b'" />;
};
export const Lportrait = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea1c'" />;
};
export const Lportrait2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea1d'" />;
};
export const Luser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea1e'" />;
};
export const LuserAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea1f'" />;
};
export const LuserMinus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea20'" />;
};
export const LuserLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea21'" />;
};
export const Lusers = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea22'" />;
};
export const Lusers2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea23'" />;
};
export const LusersAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea24'" />;
};
export const LusersMinus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea25'" />;
};
export const LgroupWork = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea26'" />;
};
export const Lwoman = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea27'" />;
};
export const Lman = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea28'" />;
};
export const Lbaby = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea29'" />;
};
export const Lbaby2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea2a'" />;
};
export const Lbaby3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea2b'" />;
};
export const LbabyBottle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea2c'" />;
};
export const Lwalk = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea2d'" />;
};
export const LhandWaving = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea2e'" />;
};
export const Ljump = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea2f'" />;
};
export const Lrun = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea30'" />;
};
export const Lwoman2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea31'" />;
};
export const Lman2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea32'" />;
};
export const LmanWoman = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea33'" />;
};
export const Lheight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea34'" />;
};
export const Lweight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea35'" />;
};
export const Lscale2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea36'" />;
};
export const Lbutton = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea37'" />;
};
export const LbowTie = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea38'" />;
};
export const Ltie = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea39'" />;
};
export const Lsocks = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea3a'" />;
};
export const Lshoe = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea3b'" />;
};
export const Lshoes = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea3c'" />;
};
export const Lhat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea3d'" />;
};
export const Lpants = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea3e'" />;
};
export const Lshorts = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea3f'" />;
};
export const LflipFlop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea40'" />;
};
export const Lshirt = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea41'" />;
};
export const Lhanger = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea42'" />;
};
export const Llaundry = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea43'" />;
};
export const Lstore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea44'" />;
};
export const Lhaircut = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea45'" />;
};
export const Lstore24 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea46'" />;
};
export const Lbarcode = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea47'" />;
};
export const Lbarcode2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea48'" />;
};
export const Lbarcode3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea49'" />;
};
export const Lcashier = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea4a'" />;
};
export const Lbag = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea4b'" />;
};
export const Lbag2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea4c'" />;
};
export const Lcart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea4d'" />;
};
export const LcartEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea4e'" />;
};
export const LcartFull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea4f'" />;
};
export const LcartPlus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea50'" />;
};
export const LcartPlus2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea51'" />;
};
export const LcartAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea52'" />;
};
export const LcartRemove = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea53'" />;
};
export const LcartExchange = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea54'" />;
};
export const Ltag = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea55'" />;
};
export const Ltags = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea56'" />;
};
export const Lreceipt = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea57'" />;
};
export const Lwallet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea58'" />;
};
export const LcreditCard = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea59'" />;
};
export const LcashDollar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea5a'" />;
};
export const LcashEuro = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea5b'" />;
};
export const LcashPound = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea5c'" />;
};
export const LcashYen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea5d'" />;
};
export const LbagDollar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea5e'" />;
};
export const LbagEuro = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea5f'" />;
};
export const LbagPound = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea60'" />;
};
export const LbagYen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea61'" />;
};
export const LcoinDollar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea62'" />;
};
export const LcoinEurp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea63'" />;
};
export const LcoinPound = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea64'" />;
};
export const LcoinYen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea65'" />;
};
export const Lcalculator = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea66'" />;
};
export const Lcalculator2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea67'" />;
};
export const Labacus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea68'" />;
};
export const Lvault = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea69'" />;
};
export const Ltelephone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea6a'" />;
};
export const LphoneLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea6b'" />;
};
export const LphoneWave = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea6c'" />;
};
export const LphonePause = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea6d'" />;
};
export const LphoneOugoing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea6e'" />;
};
export const LphoneIncoming = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea6f'" />;
};
export const LphoneInOut = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea70'" />;
};
export const LphoneError = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea71'" />;
};
export const LphoneSip = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea72'" />;
};
export const LphonePlus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea73'" />;
};
export const LphoneMinus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea74'" />;
};
export const Lvoicemail = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea75'" />;
};
export const Ldial = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea76'" />;
};
export const Ltelephone2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea77'" />;
};
export const Lpin = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea78'" />;
};
export const Lpin2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea79'" />;
};
export const LmapMarker = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea7a'" />;
};
export const LmapMarkerUser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea7b'" />;
};
export const LmapMarkerDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea7c'" />;
};
export const LmapMarkerCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea7d'" />;
};
export const LmapMarkerCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea7e'" />;
};
export const Lradar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea7f'" />;
};
export const Lcompass2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea80'" />;
};
export const Lmap = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea81'" />;
};
export const Lmap2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea82'" />;
};
export const Llocation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea83'" />;
};
export const LroadSign = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea84'" />;
};
export const LcalendarEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea85'" />;
};
export const LcalendarCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea86'" />;
};
export const LcalendarCross = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea87'" />;
};
export const Lcalendar31 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea88'" />;
};
export const LcalendarFull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea89'" />;
};
export const LcalendarInsert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea8a'" />;
};
export const LcalendarText = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea8b'" />;
};
export const LcalendarUser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea8c'" />;
};
export const Lmouse = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea8d'" />;
};
export const LmouseLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea8e'" />;
};
export const LmouseRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea8f'" />;
};
export const LmouseBoth = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea90'" />;
};
export const Lkeyboard = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea91'" />;
};
export const LkeyboardUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea92'" />;
};
export const LkeyboardDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea93'" />;
};
export const UniE794 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea94'" />;
};
export const SpellCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea95'" />;
};
export const Lescape = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea96'" />;
};
export const Lenter2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea97'" />;
};
export const Lscreen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea98'" />;
};
export const LaspectRatio = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea99'" />;
};
export const Lsignal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea9a'" />;
};
export const LsignalLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea9b'" />;
};
export const Lsignal80 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea9c'" />;
};
export const Lsignal60 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea9d'" />;
};
export const Lsignal40 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea9e'" />;
};
export const Lsignal20 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ea9f'" />;
};
export const Lsignal0 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa0'" />;
};
export const LsignalBlocked = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa1'" />;
};
export const Lsim = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa2'" />;
};
export const LflashMemory = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa3'" />;
};
export const LusbDrive = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa4'" />;
};
export const Lmobile = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa5'" />;
};
export const Lmobile2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa6'" />;
};
export const LmobileNotification = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa7'" />;
};
export const LmobileVibrator = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa8'" />;
};
export const LmobileEmbed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaa9'" />;
};
export const LmobileWave = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaaa'" />;
};
export const Ltablet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaab'" />;
};
export const Ltablet2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaac'" />;
};
export const Llaptop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaad'" />;
};
export const LlaptopPhone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaae'" />;
};
export const Ldesktop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaaf'" />;
};
export const Llaunch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab0'" />;
};
export const LnewTab = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab1'" />;
};
export const Lwindow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab2'" />;
};
export const Lcable = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab3'" />;
};
export const Lcable2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab4'" />;
};
export const Ltv = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab5'" />;
};
export const Lradio = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab6'" />;
};
export const Lremote = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab7'" />;
};
export const LpowerSwitch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab8'" />;
};
export const Lpower = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eab9'" />;
};
export const LpowerCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaba'" />;
};
export const LflashAuto = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eabb'" />;
};
export const Llamp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eabc'" />;
};
export const Lflashlight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eabd'" />;
};
export const Llampshade = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eabe'" />;
};
export const Lcord = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eabf'" />;
};
export const Loutlet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac0'" />;
};
export const LbatteryPower = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac1'" />;
};
export const LbatteryEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac2'" />;
};
export const LbatteryAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac3'" />;
};
export const LbatteryError = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac4'" />;
};
export const LbatteryLow1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac5'" />;
};
export const LbatteryLow2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac6'" />;
};
export const LbatteryLow3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac7'" />;
};
export const LbatteryMid1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac8'" />;
};
export const LbatteryMid2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eac9'" />;
};
export const LbatteryMid3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaca'" />;
};
export const LbatteryFull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eacb'" />;
};
export const LbatteryCharging = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eacc'" />;
};
export const LbatteryCharging2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eacd'" />;
};
export const LbatteryCharging3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eace'" />;
};
export const LbatteryCharging4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eacf'" />;
};
export const LbatteryCharging5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead0'" />;
};
export const UniE7D1LbatteryCharging6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead1'" />;
};
export const LbatteryCharging7 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead2'" />;
};
export const Lchip = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead3'" />;
};
export const LchipX64 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead4'" />;
};
export const LchipX86 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead5'" />;
};
export const Lbubble = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead6'" />;
};
export const Lbubbles = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead7'" />;
};
export const LbubbleDots = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead8'" />;
};
export const LbubbleAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ead9'" />;
};
export const LbubbleQuestion = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eada'" />;
};
export const LbubbleText = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eadb'" />;
};
export const UniE7DCLbubblePencil = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eadc'" />;
};
export const LbubblePicture = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eadd'" />;
};
export const LbubbleVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eade'" />;
};
export const LbubbleUser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eadf'" />;
};
export const LbubbleQuote = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae0'" />;
};
export const LbubbleHeart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae1'" />;
};
export const LbubbleEmoticon = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae2'" />;
};
export const LbubbleAttachment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae3'" />;
};
export const LphoneBubble = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae4'" />;
};
export const LquotteOpen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae5'" />;
};
export const LquotteClose = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae6'" />;
};
export const Ldna = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae7'" />;
};
export const LheartPulse = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae8'" />;
};
export const Lpulse = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eae9'" />;
};
export const Lsyringe = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaea'" />;
};
export const Lpills = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaeb'" />;
};
export const LfirstAid = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaec'" />;
};
export const Lhelp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaed'" />;
};
export const Lbandage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaee'" />;
};
export const Lbandages = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaef'" />;
};
export const Lthermometer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf0'" />;
};
export const Lmicroscope = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf1'" />;
};
export const Lbrain = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf2'" />;
};
export const Lbeaker = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf3'" />;
};
export const Lskull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf4'" />;
};
export const Lbone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf5'" />;
};
export const Lconstruction = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf6'" />;
};
export const Lconstruction2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf7'" />;
};
export const LpieChart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf8'" />;
};
export const LpieChart2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaf9'" />;
};
export const Lgraph = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eafa'" />;
};
export const LchartGrowth = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eafb'" />;
};
export const LchartBars = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eafc'" />;
};
export const LchartSettings = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eafd'" />;
};
export const Lcake = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eafe'" />;
};
export const Lgift = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eaff'" />;
};
export const Lballoon = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb00'" />;
};
export const Lrank = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb01'" />;
};
export const Lrank2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb02'" />;
};
export const Lrank3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb03'" />;
};
export const Lcrown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb04'" />;
};
export const Llotus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb05'" />;
};
export const Ldiamond = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb06'" />;
};
export const Ldiamond2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb07'" />;
};
export const Ldiamond3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb08'" />;
};
export const Ldiamond4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb09'" />;
};
export const Lteacup = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb0b'" />;
};
export const Lteapot = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb0c'" />;
};
export const Lglass = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb0d'" />;
};
export const Lbottle1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb0e'" />;
};
export const Lglass2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb0f'" />;
};
export const Lglass3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb10'" />;
};
export const Ldinner = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb11'" />;
};
export const Ldinner2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb12'" />;
};
export const Lchef = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb13'" />;
};
export const Lscale3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb14'" />;
};
export const Legg = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb15'" />;
};
export const Legg2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb16'" />;
};
export const Leggs = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb17'" />;
};
export const Lplatter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb18'" />;
};
export const Lsteak = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb19'" />;
};
export const Lhamburger = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb1a'" />;
};
export const Lhotdog = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb1b'" />;
};
export const Lpizza = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb1c'" />;
};
export const Lsausage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb1d'" />;
};
export const Lchicken = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb1e'" />;
};
export const Lfish = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb1f'" />;
};
export const Lcarrot = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb20'" />;
};
export const Lcheese = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb21'" />;
};
export const Lbread = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb22'" />;
};
export const LiceCream = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb23'" />;
};
export const LiceCream2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb24'" />;
};
export const Lcandy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb25'" />;
};
export const Llollipop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb26'" />;
};
export const LcoffeBean = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb27'" />;
};
export const LcoffeCup = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb28'" />;
};
export const Lcherry = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb29'" />;
};
export const Lgrapes = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb2a'" />;
};
export const Lcitrus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb2b'" />;
};
export const Lapple = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb2c'" />;
};
export const Lleaf = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb2d'" />;
};
export const Llandscape = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb2e'" />;
};
export const LpineTree = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb2f'" />;
};
export const Ltree = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb30'" />;
};
export const Lcastus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb31'" />;
};
export const Lpaw = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb32'" />;
};
export const Lfootprint = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb33'" />;
};
export const LspeedSlow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb34'" />;
};
export const LspeedMedium = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb35'" />;
};
export const LspeedFast = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb36'" />;
};
export const Lrocket = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb37'" />;
};
export const Ljustice = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb38'" />;
};
export const Ljustice2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb39'" />;
};
export const Lsuitcase = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb3a'" />;
};
export const LluggageWeight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb3b'" />;
};
export const Ldolly = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb3c'" />;
};
export const Lplane = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb3d'" />;
};
export const LplaneCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb3e'" />;
};
export const Lhelicopter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb3f'" />;
};
export const LtrafficLights = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb40'" />;
};
export const Lsiren = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb41'" />;
};
export const Lroad = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb42'" />;
};
export const Lengine = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb43'" />;
};
export const LoilPressure = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb44'" />;
};
export const LcoolantTemperature = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb45'" />;
};
export const LcarBattery = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb46'" />;
};
export const Lgas = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb47'" />;
};
export const Lgallon = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb48'" />;
};
export const Ltransmission = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb49'" />;
};
export const Lcar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb4a'" />;
};
export const LcarWash = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb4b'" />;
};
export const LcarWash2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb4c'" />;
};
export const Lbus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb4d'" />;
};
export const Lbus2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb4e'" />;
};
export const Lcar1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb4f'" />;
};
export const Lparking = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb50'" />;
};
export const LcarLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb51'" />;
};
export const Ltaxi = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb52'" />;
};
export const LcarSiren = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb53'" />;
};
export const LcarWash3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb54'" />;
};
export const LcarWash4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb55'" />;
};
export const Lambulance = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb56'" />;
};
export const Ltruck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb57'" />;
};
export const Ltruck2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb58'" />;
};
export const LtruckWeight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb59'" />;
};
export const Ltrain = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb5a'" />;
};
export const Lboat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb5b'" />;
};
export const Lboat2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb5c'" />;
};
export const Lanchor = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb5d'" />;
};
export const UniE85E = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb5e'" />;
};
export const Lbicycle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb5f'" />;
};
export const Lbicycle2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb60'" />;
};
export const Lexercise = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb61'" />;
};
export const Lexercise2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb62'" />;
};
export const Lswim = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb63'" />;
};
export const Lfootball = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb64'" />;
};
export const Lbaseball = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb65'" />;
};
export const Lbaseball2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb66'" />;
};
export const Ltennis = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb67'" />;
};
export const Ltennis2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb68'" />;
};
export const LpingPong = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb69'" />;
};
export const Lhockey = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb6a'" />;
};
export const L8ball = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb6b'" />;
};
export const Lbowling = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb6c'" />;
};
export const Lbowling2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb6d'" />;
};
export const Lgolf = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb6e'" />;
};
export const Lgolf2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb6f'" />;
};
export const Larchery = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb70'" />;
};
export const Lslingshot = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb71'" />;
};
export const Lsoccer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb72'" />;
};
export const Lbasketball = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb73'" />;
};
export const Lcube = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb74'" />;
};
export const L3dRotate = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb75'" />;
};
export const Lpuzzle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb76'" />;
};
export const Lglasses = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb77'" />;
};
export const Lglasses2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb78'" />;
};
export const Laccessibility = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb79'" />;
};
export const Laccessibility2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb7a'" />;
};
export const Lwall = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb7b'" />;
};
export const Lfence = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb7c'" />;
};
export const Lwall2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb7d'" />;
};
export const Lgrid = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb7e'" />;
};
export const LresizeHandle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb7f'" />;
};
export const Lgrid2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb80'" />;
};
export const Lselect = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb81'" />;
};
export const Lselect2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb82'" />;
};
export const LsiteMap = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb83'" />;
};
export const Learth = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb84'" />;
};
export const LearthLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb85'" />;
};
export const Lnetwork = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb86'" />;
};
export const LnetworkLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb87'" />;
};
export const Lplanet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb88'" />;
};
export const Lemoticone1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb89'" />;
};
export const Lemoticone2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb8a'" />;
};
export const Lemoticone3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb8b'" />;
};
export const Lemoticone4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb8c'" />;
};
export const Lemoticone5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb8d'" />;
};
export const Lemoticone6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb8e'" />;
};
export const Lemoticone7 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb8f'" />;
};
export const Lemoticone8 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb90'" />;
};
export const Lemoticone9 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb91'" />;
};
export const Lemoticone10 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb92'" />;
};
export const Lemoticone11 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb93'" />;
};
export const Lemoticone12 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb94'" />;
};
export const Lemoticone13 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb95'" />;
};
export const Lemoticone14 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb96'" />;
};
export const Lemoticone15 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb97'" />;
};
export const Lemoticone16 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb98'" />;
};
export const Lemoticone17 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb99'" />;
};
export const Lemoticone18 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb9a'" />;
};
export const Lemoticone19 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb9b'" />;
};
export const Lemoticone20 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb9c'" />;
};
export const Lemoticone21 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb9d'" />;
};
export const Lemoticone22 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb9e'" />;
};
export const Lemoticone23 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eb9f'" />;
};
export const Lghost = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba2'" />;
};
export const Lghost2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba3'" />;
};
export const Lhalloween = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba4'" />;
};
export const Lchristmas = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba5'" />;
};
export const Leaster = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba6'" />;
};
export const Lmustache = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba7'" />;
};
export const Lmustache2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba8'" />;
};
export const Lpipe = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eba9'" />;
};
export const Lbell = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebaa'" />;
};
export const LalarmAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebab'" />;
};
export const LalarmSnooze = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebac'" />;
};
export const LalarmRinging = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebad'" />;
};
export const Lmegaphone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebae'" />;
};
export const Lhearing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebaf'" />;
};
export const LvolumeHight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb0'" />;
};
export const LvolumeMiddle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb1'" />;
};
export const LvolumeLow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb2'" />;
};
export const Lvolume = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb3'" />;
};
export const Lmute = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb4'" />;
};
export const Llan = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb5'" />;
};
export const Llan2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb6'" />;
};
export const Lwifi = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb7'" />;
};
export const LwifiLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb8'" />;
};
export const LwifiBlocked = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebb9'" />;
};
export const LwifiMid = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebba'" />;
};
export const LwifiLow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebbb'" />;
};
export const LwifiLow2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebbc'" />;
};
export const LwifiAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebbd'" />;
};
export const LwifiAlert2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebbe'" />;
};
export const LwifiAlert3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebbf'" />;
};
export const LwifiAlert4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc0'" />;
};
export const Lstream = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc1'" />;
};
export const LstreamCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc2'" />;
};
export const LstreamError = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc3'" />;
};
export const LstreamAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc4'" />;
};
export const Lcommunication = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc5'" />;
};
export const LcommunicationCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc6'" />;
};
export const Lwaves = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc7'" />;
};
export const Lwaves2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc8'" />;
};
export const Lsatellite = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebc9'" />;
};
export const Lsatellite2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebca'" />;
};
export const Lmic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebcb'" />;
};
export const LmicMute = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebcc'" />;
};
export const Lmic2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebcd'" />;
};
export const Lspotlight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebce'" />;
};
export const Lloading = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebcf'" />;
};
export const Lloadinge = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd0'" />;
};
export const Lloading3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd1'" />;
};
export const Lloading4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd2'" />;
};
export const Lrefresh = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd3'" />;
};
export const Lrefresh2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd4'" />;
};
export const Lundo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd5'" />;
};
export const Lredo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd6'" />;
};
export const Ljump2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd7'" />;
};
export const Lundo2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd8'" />;
};
export const Lredo2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebd9'" />;
};
export const Lsync = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebda'" />;
};
export const LrepeatOne2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebdb'" />;
};
export const LsyncCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebdc'" />;
};
export const Lsync2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebdd'" />;
};
export const LrepeatOne3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebde'" />;
};
export const LsyncCrossed2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebdf'" />;
};
export const Lreturn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe0'" />;
};
export const Lreturn2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe1'" />;
};
export const Lrefund = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe2'" />;
};
export const Lhistory = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe3'" />;
};
export const Lhistory2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe4'" />;
};
export const Lhistory3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe5'" />;
};
export const Lclock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe6'" />;
};
export const Lclock2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe7'" />;
};
export const Lclock3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe8'" />;
};
export const Lwatch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebe9'" />;
};
export const Lalarm3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebea'" />;
};
export const LalarmAdd2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebeb'" />;
};
export const LalarmRemove2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebec'" />;
};
export const LalarmCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebed'" />;
};
export const LalarmError = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebee'" />;
};
export const Ltimer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebef'" />;
};
export const LtimerCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf0'" />;
};
export const Ltimer2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf1'" />;
};
export const LtimerCrossed2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf2'" />;
};
export const Ldownload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf3'" />;
};
export const Lupload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf4'" />;
};
export const Ldownload2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf5'" />;
};
export const Lupload2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf6'" />;
};
export const LenterUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf7'" />;
};
export const LenterDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf8'" />;
};
export const LenterLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebf9'" />;
};
export const LenterRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebfa'" />;
};
export const LexitUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebfb'" />;
};
export const LexitDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebfc'" />;
};
export const LexitLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebfd'" />;
};
export const LexitRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebfe'" />;
};
export const LenterUp2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ebff'" />;
};
export const LenterDown2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec00'" />;
};
export const LenterVertical = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec01'" />;
};
export const LenterLeft2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec02'" />;
};
export const LenterRight2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec03'" />;
};
export const LenterHorizontal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec04'" />;
};
export const LexitUp2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec05'" />;
};
export const LexitDown2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec06'" />;
};
export const LexitLeft2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec07'" />;
};
export const LexitRight2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec08'" />;
};
export const Lcli = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec09'" />;
};
export const Lbug = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec0a'" />;
};
export const Lcode = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec0b'" />;
};
export const LfileCode = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec0c'" />;
};
export const LfileImage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec0d'" />;
};
export const LfileZip = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec0e'" />;
};
export const LfileAudio = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec0f'" />;
};
export const LfileVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec10'" />;
};
export const LfilePreview = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec11'" />;
};
export const LfileCharts = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec12'" />;
};
export const LfileStats = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec13'" />;
};
export const LfileSpreadsheet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec14'" />;
};
export const Llink = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec15'" />;
};
export const Lunlink = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec16'" />;
};
export const Llink2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec17'" />;
};
export const Lunlink2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec18'" />;
};
export const LthumbsUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec19'" />;
};
export const LthumbsDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec1a'" />;
};
export const LthumbsUp2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec1b'" />;
};
export const UniE91CLthumbsDown2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec1c'" />;
};
export const UniE91DLthumbsUp3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec1d'" />;
};
export const LthumbsDown3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec1e'" />;
};
export const Lshare2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec1f'" />;
};
export const Lshare3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec20'" />;
};
export const Lshare4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec21'" />;
};
export const Lsearch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec22'" />;
};
export const LfileSearch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec23'" />;
};
export const LfindReplace = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec24'" />;
};
export const LzoomIn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec25'" />;
};
export const LzoomOut = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec26'" />;
};
export const Lloupe = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec27'" />;
};
export const LloupeZoomIn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec28'" />;
};
export const LloupeZoomOut = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec29'" />;
};
export const Lcancel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec2a'" />;
};
export const Lmenu = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec2b'" />;
};
export const Llist = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec2c'" />;
};
export const Llist2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec2d'" />;
};
export const Llist3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec2e'" />;
};
export const Llist4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec2f'" />;
};
export const Llist5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec30'" />;
};
export const Lmenu2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec31'" />;
};
export const Lexclamation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec32'" />;
};
export const Lquestion = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec33'" />;
};
export const Lcheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec34'" />;
};
export const Lcross = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec35'" />;
};
export const Lplus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec36'" />;
};
export const Lminus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec37'" />;
};
export const Lpercent = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec38'" />;
};
export const LchevronUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec39'" />;
};
export const LchevronDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec3a'" />;
};
export const LchevronLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec3b'" />;
};
export const LchevronRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec3c'" />;
};
export const LchevronsExpandVertical = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec3d'" />;
};
export const LchevronsExpandHorizontal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec3e'" />;
};
export const LchevronsContractVertical = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec3f'" />;
};
export const LchevronsContractHorizontal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec40'" />;
};
export const LarrowUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec41'" />;
};
export const LarrowDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec42'" />;
};
export const LarrowLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec43'" />;
};
export const LarrowRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec44'" />;
};
export const LarrowUpRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec45'" />;
};
export const LarrowMerge = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec46'" />;
};
export const LarrowSplit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec47'" />;
};
export const LarrowDivert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec48'" />;
};
export const LarrowReturn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec49'" />;
};
export const Lexpand = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec4a'" />;
};
export const Lcontract = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec4b'" />;
};
export const Lexpand2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec4c'" />;
};
export const Lcontract2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec4d'" />;
};
export const Lmove = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec4e'" />;
};
export const Ltab = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec4f'" />;
};
export const LarrowWave = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec50'" />;
};
export const Lexpand3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec51'" />;
};
export const Lexpand4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec52'" />;
};
export const Lcontract3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec53'" />;
};
export const Lnotification = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec54'" />;
};
export const Lwarning = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec55'" />;
};
export const LnotificationCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec56'" />;
};
export const LquestionCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec57'" />;
};
export const LmenuCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec58'" />;
};
export const LcheckCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec59'" />;
};
export const LcrossCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec5a'" />;
};
export const LplusCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec5b'" />;
};
export const LminusCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec5c'" />;
};
export const LpercentCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec5d'" />;
};
export const LarrowUpCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec5e'" />;
};
export const LarrowDownCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec5f'" />;
};
export const LarrowLeftCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec60'" />;
};
export const LarrowRightCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec61'" />;
};
export const LchevronUpCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec62'" />;
};
export const LchevronDownCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec63'" />;
};
export const LchevronLeftCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec64'" />;
};
export const LchevronRightCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec65'" />;
};
export const LbackwardCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec66'" />;
};
export const LfirstCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec67'" />;
};
export const LpreviousCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec68'" />;
};
export const LstopCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec69'" />;
};
export const LplayCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec6a'" />;
};
export const Lpause = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec6b'" />;
};
export const LnextCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec6c'" />;
};
export const LlastCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec6d'" />;
};
export const LforwardCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec6e'" />;
};
export const LejectCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec6f'" />;
};
export const Lcrop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec70'" />;
};
export const LframeExpand = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec71'" />;
};
export const LframeContract = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec72'" />;
};
export const Lfocus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec73'" />;
};
export const Ltransform = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec74'" />;
};
export const Lgrid3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec75'" />;
};
export const LgridCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec76'" />;
};
export const Llayers = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec77'" />;
};
export const LlayersCrossed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec78'" />;
};
export const Lfold = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec79'" />;
};
export const Lrulers = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec7a'" />;
};
export const Lruler = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec7b'" />;
};
export const Lfunnel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec7c'" />;
};
export const Lmirror1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec7d'" />;
};
export const Lmirror2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec7e'" />;
};
export const Lflip1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec7f'" />;
};
export const Lfli2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec80'" />;
};
export const Langle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec81'" />;
};
export const Langle2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec82'" />;
};
export const Lsubstract = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec83'" />;
};
export const Lunion = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec84'" />;
};
export const Lintersect = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec85'" />;
};
export const Lexclude = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec86'" />;
};
export const LalignCenterVertical = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec87'" />;
};
export const LalignRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec88'" />;
};
export const LalignBottom = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec89'" />;
};
export const LalignLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec8a'" />;
};
export const LalignCenterHorizontal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec8b'" />;
};
export const LalignTop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec8c'" />;
};
export const Lquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec8d'" />;
};
export const LplusSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec8e'" />;
};
export const LminusSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec8f'" />;
};
export const LpercentSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec90'" />;
};
export const LarrowUpSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec91'" />;
};
export const LarrowDownSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec92'" />;
};
export const LarrowLeftSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec93'" />;
};
export const LarrowRightSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec94'" />;
};
export const LchevronUpSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec95'" />;
};
export const LchevronDownSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec96'" />;
};
export const LchevronLeftSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec97'" />;
};
export const LchevronRightSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec98'" />;
};
export const LcheckSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec99'" />;
};
export const LcrossSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec9a'" />;
};
export const LmenuSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec9b'" />;
};
export const Lforbiden = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec9c'" />;
};
export const Lcircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec9d'" />;
};
export const LradioButton = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec9e'" />;
};
export const Lligature = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ec9f'" />;
};
export const LtextFormat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca0'" />;
};
export const LtextFormatRemove = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca1'" />;
};
export const LtextSize = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca2'" />;
};
export const Lbold = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca3'" />;
};
export const Litalic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca4'" />;
};
export const Lunderline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca5'" />;
};
export const Lstrikethrough = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca6'" />;
};
export const Lhighlight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca7'" />;
};
export const LtextAlignLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca8'" />;
};
export const LtextAlignCenter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eca9'" />;
};
export const LtextAlignRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecaa'" />;
};
export const LtextAlignJustify = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecab'" />;
};
export const LlineSpacing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecac'" />;
};
export const LindentIncrease = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecad'" />;
};
export const LindentDecrease = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecae'" />;
};
export const LtextWrap = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecaf'" />;
};
export const Lpilcrow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb0'" />;
};
export const LdirectionLtr = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb1'" />;
};
export const LdirectionRtl = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb2'" />;
};
export const LpageBreak = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb3'" />;
};
export const LpageBreak2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb4'" />;
};
export const LsortAlphaAsc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb5'" />;
};
export const LsortAlphaDesc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb6'" />;
};
export const LsortNumericAsc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb7'" />;
};
export const LsortNumericDesc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb8'" />;
};
export const LsortAmountAsc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecb9'" />;
};
export const LsortAmountDesc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecba'" />;
};
export const LsortTimeAsc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecbb'" />;
};
export const LsortTimeDesc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecbc'" />;
};
export const Lsigma = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecbd'" />;
};
export const LpencilLine = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecbe'" />;
};
export const Lhand = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecbf'" />;
};
export const Lhand2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc0'" />;
};
export const Lhand3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc1'" />;
};
export const Lhand4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc2'" />;
};
export const Lhand5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc3'" />;
};
export const Lhand6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc4'" />;
};
export const Lhand7 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc5'" />;
};
export const Lhand8 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc6'" />;
};
export const Lhand9 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc7'" />;
};
export const Lhand10 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc8'" />;
};
export const Lhand11 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecc9'" />;
};
export const Lhand12 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecca'" />;
};
export const Lhand13 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eccb'" />;
};
export const Lhand14 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eccc'" />;
};
export const Lhand15 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eccd'" />;
};
export const Lhand16 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecce'" />;
};
export const Lpointer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eccf'" />;
};
export const Lpointer2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd0'" />;
};
export const Lpointer3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd1'" />;
};
export const Lpointer4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd2'" />;
};
export const Lpointer5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd3'" />;
};
export const Lpointer6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd4'" />;
};
export const Lpointer7 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd5'" />;
};
export const Lpointer8 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd6'" />;
};
export const Lpointer9 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd7'" />;
};
export const Lpointer10 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd8'" />;
};
export const Lpointer11 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecd9'" />;
};
export const Lpointer12 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecda'" />;
};
export const Lpointer13 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecdb'" />;
};
export const Lpointer14 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecdc'" />;
};
export const Lpointer15 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecdd'" />;
};
export const LborderStyle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecde'" />;
};
export const LborderAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecdf'" />;
};
export const LborderOuter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece0'" />;
};
export const LborderInner = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece1'" />;
};
export const LborderTop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece2'" />;
};
export const LborderHorizontal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece3'" />;
};
export const LborderBottm = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece4'" />;
};
export const LborderLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece5'" />;
};
export const LborderVertical = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece6'" />;
};
export const LborderRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece7'" />;
};
export const LborderNone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece8'" />;
};
export const Lellipsis = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ece9'" />;
};
export const Google = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecea'" />;
};
export const Google2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eceb'" />;
};
export const Google3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecec'" />;
};
export const GooglePlus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\eced'" />;
};
export const GooglePlus2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecee'" />;
};
export const GooglePlus3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecef'" />;
};
export const Facebook = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf0'" />;
};
export const Facebook2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf1'" />;
};
export const Instagram = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf2'" />;
};
export const Twitter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf3'" />;
};
export const R3dRotation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e84d'" />;
};
export const AcUnit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf4'" />;
};
export const Alarm = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e855'" />;
};
export const AccessAlarms = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e191'" />;
};
export const Schedule = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b5'" />;
};
export const Accessibility = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e84e'" />;
};
export const Accessible = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf5'" />;
};
export const AccountBalance = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e84f'" />;
};
export const AccountBalanceWallet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e850'" />;
};
export const AccountBox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e851'" />;
};
export const AccountCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e853'" />;
};
export const Adb = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e60e'" />;
};
export const Add = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e145'" />;
};
export const AddAPhoto = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e439'" />;
};
export const AlarmAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e856'" />;
};
export const AddAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e003'" />;
};
export const AddBox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e146'" />;
};
export const AddCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e147'" />;
};
export const ControlPoint = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ba'" />;
};
export const AddLocation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e567'" />;
};
export const AddShoppingCart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e854'" />;
};
export const Queue = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e03c'" />;
};
export const AddToQueue = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e05c'" />;
};
export const Adjust = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e39e'" />;
};
export const AirlineSeatFlat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e630'" />;
};
export const AirlineSeatFlatAngled = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e631'" />;
};
export const AirlineSeatIndividualSuite = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e632'" />;
};
export const AirlineSeatLegroomExtra = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e633'" />;
};
export const AirlineSeatLegroomNormal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e634'" />;
};
export const AirlineSeatLegroomReduced = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e635'" />;
};
export const AirlineSeatReclineExtra = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e636'" />;
};
export const AirlineSeatReclineNormal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e637'" />;
};
export const Flight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e539'" />;
};
export const AirplanemodeInactive = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e194'" />;
};
export const Airplay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e055'" />;
};
export const AirportShuttle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf6'" />;
};
export const AlarmOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e857'" />;
};
export const AlarmOn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e858'" />;
};
export const Album = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e019'" />;
};
export const AllInclusive = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf7'" />;
};
export const AllOut = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf8'" />;
};
export const Android = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e859'" />;
};
export const Announcement = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e85a'" />;
};
export const Apps = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5c3'" />;
};
export const Archive = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e149'" />;
};
export const ArrowBack = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5c4'" />;
};
export const ArrowDownward = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5db'" />;
};
export const ArrowDropDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5c5'" />;
};
export const ArrowDropDownCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5c6'" />;
};
export const ArrowDropUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5c7'" />;
};
export const ArrowForward = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5c8'" />;
};
export const ArrowUpward = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d8'" />;
};
export const ArtTrack = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e060'" />;
};
export const AspectRatio = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e85b'" />;
};
export const Poll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e801'" />;
};
export const Assignment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e85d'" />;
};
export const AssignmentInd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e85e'" />;
};
export const AssignmentLate = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e85f'" />;
};
export const AssignmentReturn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e860'" />;
};
export const AssignmentReturned = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e861'" />;
};
export const AssignmentTurnedIn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e862'" />;
};
export const Assistant = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e39f'" />;
};
export const Flag = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e153'" />;
};
export const AttachFile = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e226'" />;
};
export const AttachMoney = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e227'" />;
};
export const Attachment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2bc'" />;
};
export const Audiotrack = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a1'" />;
};
export const Autorenew = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e863'" />;
};
export const AvTimer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e01b'" />;
};
export const Backspace = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e14a'" />;
};
export const CloudUpload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c3'" />;
};
export const BatteryAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e19c'" />;
};
export const BatteryChargingFull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1a3'" />;
};
export const BatteryStd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1a5'" />;
};
export const BatteryUnknown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1a6'" />;
};
export const BeachAccess = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecf9'" />;
};
export const Beenhere = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e52d'" />;
};
export const Block = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e14b'" />;
};
export const Bluetooth = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1a7'" />;
};
export const BluetoothSearching = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1aa'" />;
};
export const BluetoothConnected = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1a8'" />;
};
export const BluetoothDisabled = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1a9'" />;
};
export const BlurCircular = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a2'" />;
};
export const BlurLinear = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a3'" />;
};
export const BlurOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a4'" />;
};
export const BlurOn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a5'" />;
};
export const Class = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e86e'" />;
};
export const TurnedIn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e6'" />;
};
export const TurnedInNot = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e7'" />;
};
export const BorderAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e228'" />;
};
export const BorderBottom = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e229'" />;
};
export const BorderClear = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e22a'" />;
};
export const BorderColor = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e22b'" />;
};
export const BorderHorizontal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e22c'" />;
};
export const BorderInner = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e22d'" />;
};
export const BorderLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e22e'" />;
};
export const BorderOuter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e22f'" />;
};
export const BorderRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e230'" />;
};
export const BorderStyle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e231'" />;
};
export const BorderTop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e232'" />;
};
export const BorderVertical = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e233'" />;
};
export const BrandingWatermark = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e06b'" />;
};
export const Brightness1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a6'" />;
};
export const Brightness2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a7'" />;
};
export const Brightness3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a8'" />;
};
export const Brightness4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3a9'" />;
};
export const BrightnessLow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1ad'" />;
};
export const BrightnessMedium = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1ae'" />;
};
export const BrightnessHigh = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1ac'" />;
};
export const BrightnessAuto = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1ab'" />;
};
export const BrokenImage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ad'" />;
};
export const Brush = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ae'" />;
};
export const BubbleChart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e6dd'" />;
};
export const BugReport = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e868'" />;
};
export const Build = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e869'" />;
};
export const BurstMode = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e43c'" />;
};
export const Domain = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7ee'" />;
};
export const BusinessCenter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecfa'" />;
};
export const Cached = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e86a'" />;
};
export const Cake = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7e9'" />;
};
export const Phone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0cd'" />;
};
export const CallEnd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b1'" />;
};
export const CallMade = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b2'" />;
};
export const MergeType = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e252'" />;
};
export const CallMissed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b4'" />;
};
export const CallMissedOutgoing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0e4'" />;
};
export const CallReceived = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b5'" />;
};
export const CallSplit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b6'" />;
};
export const CallToAction = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e06c'" />;
};
export const Camera = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3af'" />;
};
export const PhotoCamera = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e412'" />;
};
export const CameraEnhance = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8fc'" />;
};
export const CameraFront = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3b1'" />;
};
export const CameraRear = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3b2'" />;
};
export const CameraRoll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3b3'" />;
};
export const Cancel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5c9'" />;
};
export const Redeem = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b1'" />;
};
export const CardMembership = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f7'" />;
};
export const CardTravel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f8'" />;
};
export const Casino = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecfb'" />;
};
export const Cast = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e307'" />;
};
export const CastConnected = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e308'" />;
};
export const CenterFocusStrong = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3b4'" />;
};
export const CenterFocusWeak = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3b5'" />;
};
export const ChangeHistory = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e86b'" />;
};
export const Chat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b7'" />;
};
export const ChatBubble = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0ca'" />;
};
export const ChatBubbleOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0cb'" />;
};
export const Check = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5ca'" />;
};
export const CheckBox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e834'" />;
};
export const CheckBoxOutlineBlank = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e835'" />;
};
export const CheckCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e86c'" />;
};
export const NavigateBefore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e408'" />;
};
export const NavigateNext = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e409'" />;
};
export const ChildCare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecfc'" />;
};
export const ChildFriendly = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecfd'" />;
};
export const ChromeReaderMode = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e86d'" />;
};
export const Close = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5cd'" />;
};
export const ClearAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b8'" />;
};
export const ClosedCaption = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e01c'" />;
};
export const WbCloudy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e42d'" />;
};
export const CloudCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2be'" />;
};
export const CloudDone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2bf'" />;
};
export const CloudDownload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c0'" />;
};
export const CloudOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c1'" />;
};
export const CloudQueue = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c2'" />;
};
export const Code = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e86f'" />;
};
export const PhotoLibrary = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e413'" />;
};
export const CollectionsBookmark = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e431'" />;
};
export const Palette = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e40a'" />;
};
export const Colorize = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3b8'" />;
};
export const Comment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0b9'" />;
};
export const Compare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3b9'" />;
};
export const CompareArrows = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecfe'" />;
};
export const Laptop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e31e'" />;
};
export const ConfirmationNumber = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e638'" />;
};
export const ContactMail = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d0'" />;
};
export const ContactPhone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0cf'" />;
};
export const Contacts = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0ba'" />;
};
export const ContentCopy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e14d'" />;
};
export const ContentCut = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e14e'" />;
};
export const ContentPaste = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e14f'" />;
};
export const ControlPointDuplicate = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3bb'" />;
};
export const Copyright2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ecff'" />;
};
export const ModeEdit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e254'" />;
};
export const CreateNewFolder = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2cc'" />;
};
export const Payment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a1'" />;
};
export const Crop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3be'" />;
};
export const Crop169 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3bc'" />;
};
export const Crop32 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3bd'" />;
};
export const CropLandscape = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c3'" />;
};
export const Crop75 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c0'" />;
};
export const CropDin = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c1'" />;
};
export const CropFree = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c2'" />;
};
export const CropOriginal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c4'" />;
};
export const CropPortrait = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c5'" />;
};
export const CropRotate = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e437'" />;
};
export const CropSquare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c6'" />;
};
export const Dashboard = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e871'" />;
};
export const DataUsage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1af'" />;
};
export const DateRange = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed00'" />;
};
export const Dehaze = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c7'" />;
};
export const Delete = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e872'" />;
};
export const DeleteForever = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed01'" />;
};
export const DeleteSweep = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e16c'" />;
};
export const Description = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e873'" />;
};
export const DesktopMac = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e30b'" />;
};
export const DesktopWindows = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e30c'" />;
};
export const Details = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3c8'" />;
};
export const DeveloperBoard = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e30d'" />;
};
export const DeveloperMode = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1b0'" />;
};
export const DeviceHub = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e335'" />;
};
export const Phonelink = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e326'" />;
};
export const DevicesOther = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e337'" />;
};
export const DialerSip = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0bb'" />;
};
export const Dialpad = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0bc'" />;
};
export const Directions = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e52e'" />;
};
export const DirectionsBike = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e52f'" />;
};
export const DirectionsBoat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e532'" />;
};
export const DirectionsBus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e530'" />;
};
export const DirectionsCar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e531'" />;
};
export const DirectionsRailway = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e534'" />;
};
export const DirectionsRun = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e566'" />;
};
export const DirectionsTransit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e535'" />;
};
export const DirectionsWalk = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e536'" />;
};
export const DiscFull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e610'" />;
};
export const Dns = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e875'" />;
};
export const NotInterested = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e033'" />;
};
export const DoNotDisturbAlt = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e611'" />;
};
export const DoNotDisturbOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e643'" />;
};
export const RemoveCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e15c'" />;
};
export const Dock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e30e'" />;
};
export const Done = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e876'" />;
};
export const DoneAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e877'" />;
};
export const DonutLarge = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed02'" />;
};
export const DonutSmall = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed03'" />;
};
export const Drafts = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e151'" />;
};
export const DragHandle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e25d'" />;
};
export const TimeToLeave = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e62c'" />;
};
export const Dvr = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1b2'" />;
};
export const EditLocation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e568'" />;
};
export const Eject = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8fb'" />;
};
export const Markunread = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e159'" />;
};
export const EnhancedEncryption = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e63f'" />;
};
export const Equalizer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e01d'" />;
};
export const Error = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e000'" />;
};
export const ErrorOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e001'" />;
};
export const EuroSymbol = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed04'" />;
};
export const EvStation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e56d'" />;
};
export const InsertInvitation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e24f'" />;
};
export const EventAvailable = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e614'" />;
};
export const EventBusy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e615'" />;
};
export const EventNote = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e616'" />;
};
export const EventSeat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed05'" />;
};
export const ExitToApp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e879'" />;
};
export const ExpandLess = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5ce'" />;
};
export const ExpandMore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5cf'" />;
};
export const Explicit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e01e'" />;
};
export const Explore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e87a'" />;
};
export const Exposure = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ca'" />;
};
export const ExposureNeg1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3cb'" />;
};
export const ExposureNeg2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3cc'" />;
};
export const ExposurePlus1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3cd'" />;
};
export const ExposurePlus2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ce'" />;
};
export const ExposureZero = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3cf'" />;
};
export const Extension = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e87b'" />;
};
export const Face = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e87c'" />;
};
export const FastForward = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e01f'" />;
};
export const FastRewind = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e020'" />;
};
export const Favorite = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e87d'" />;
};
export const FavoriteBorder = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e87e'" />;
};
export const FeaturedPlayList = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e06d'" />;
};
export const FeaturedVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e06e'" />;
};
export const SmsFailed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e626'" />;
};
export const FiberDvr = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e05d'" />;
};
export const FiberManualRecord = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e061'" />;
};
export const FiberNew = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e05e'" />;
};
export const FiberPin = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e06a'" />;
};
export const FiberSmartRecord = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e062'" />;
};
export const GetApp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e884'" />;
};
export const FileUpload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c6'" />;
};
export const Filter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d3'" />;
};
export const Filter1 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d0'" />;
};
export const Filter2 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d1'" />;
};
export const Filter3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d2'" />;
};
export const Filter4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d4'" />;
};
export const Filter5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d5'" />;
};
export const Filter6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d6'" />;
};
export const Filter7 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d7'" />;
};
export const Filter8 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d8'" />;
};
export const Filter9 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3d9'" />;
};
export const Filter9Plus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3da'" />;
};
export const FilterBAndW = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3db'" />;
};
export const FilterCenterFocus = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3dc'" />;
};
export const FilterDrama = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3dd'" />;
};
export const FilterFrames = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3de'" />;
};
export const Terrain = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e564'" />;
};
export const FilterList = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e152'" />;
};
export const FilterNone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e0'" />;
};
export const FilterTiltShift = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e2'" />;
};
export const FilterVintage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e3'" />;
};
export const FindInPage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e880'" />;
};
export const FindReplace = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e881'" />;
};
export const Fingerprint = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed06'" />;
};
export const FirstPage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5dc'" />;
};
export const FitnessCenter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed07'" />;
};
export const Flare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e4'" />;
};
export const FlashAuto = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e5'" />;
};
export const FlashOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e6'" />;
};
export const FlashOn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e7'" />;
};
export const FlightLand = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed08'" />;
};
export const FlightTakeoff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed09'" />;
};
export const Flip = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e8'" />;
};
export const FlipToBack = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e882'" />;
};
export const FlipToFront = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e883'" />;
};
export const Folder = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c7'" />;
};
export const FolderOpen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c8'" />;
};
export const FolderShared = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e2c9'" />;
};
export const FolderSpecial = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e617'" />;
};
export const FontDownload = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e167'" />;
};
export const FormatAlignCenter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e234'" />;
};
export const FormatAlignJustify = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e235'" />;
};
export const FormatAlignLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e236'" />;
};
export const FormatAlignRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e237'" />;
};
export const FormatBold = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e238'" />;
};
export const FormatClear = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e239'" />;
};
export const FormatColorFill = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e23a'" />;
};
export const FormatColorReset = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e23b'" />;
};
export const FormatColorText = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e23c'" />;
};
export const FormatIndentDecrease = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e23d'" />;
};
export const FormatIndentIncrease = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e23e'" />;
};
export const FormatItalic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e23f'" />;
};
export const FormatLineSpacing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e240'" />;
};
export const FormatListBulleted = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e241'" />;
};
export const FormatListNumbered = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e242'" />;
};
export const FormatPaint = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e243'" />;
};
export const FormatQuote = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e244'" />;
};
export const FormatShapes = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e25e'" />;
};
export const FormatSize = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e245'" />;
};
export const FormatStrikethrough = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e246'" />;
};
export const FormatTextdirectionLToR = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e247'" />;
};
export const FormatTextdirectionRToL = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e248'" />;
};
export const FormatUnderlined = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e249'" />;
};
export const QuestionAnswer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8af'" />;
};
export const Forward = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e154'" />;
};
export const Forward10 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e056'" />;
};
export const Forward30 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e057'" />;
};
export const Forward5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e058'" />;
};
export const FreeBreakfast = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed0a'" />;
};
export const Fullscreen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d0'" />;
};
export const FullscreenExit = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d1'" />;
};
export const Functions = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e24a'" />;
};
export const GTranslate = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed0b'" />;
};
export const Games = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e021'" />;
};
export const Gavel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed0c'" />;
};
export const Gesture = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e155'" />;
};
export const Gif = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed0d'" />;
};
export const Goat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed0e'" />;
};
export const GolfCourse = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed0f'" />;
};
export const MyLocation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e55c'" />;
};
export const LocationSearching = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1b7'" />;
};
export const LocationDisabled = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1b6'" />;
};
export const Star = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e838'" />;
};
export const Gradient = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3e9'" />;
};
export const Grain = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ea'" />;
};
export const GraphicEq = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1b8'" />;
};
export const GridOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3eb'" />;
};
export const GridOn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ec'" />;
};
export const People = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7fb'" />;
};
export const GroupAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f0'" />;
};
export const GroupWork = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e886'" />;
};
export const Hd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e052'" />;
};
export const HdrOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ed'" />;
};
export const HdrOn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ee'" />;
};
export const HdrStrong = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3f1'" />;
};
export const HdrWeak = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3f2'" />;
};
export const Headset = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e310'" />;
};
export const HeadsetMic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e311'" />;
};
export const Healing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3f3'" />;
};
export const Hearing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e023'" />;
};
export const Help = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e887'" />;
};
export const HelpOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8fd'" />;
};
export const HighQuality = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e024'" />;
};
export const Highlight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e25f'" />;
};
export const HighlightOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e888'" />;
};
export const Restore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b3'" />;
};
export const Home = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e88a'" />;
};
export const HotTub = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed10'" />;
};
export const LocalHotel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e549'" />;
};
export const HourglassEmpty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e88b'" />;
};
export const HourglassFull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e88c'" />;
};
export const Http = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed11'" />;
};
export const Lock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e897'" />;
};
export const Photo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e410'" />;
};
export const ImageAspectRatio = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3f5'" />;
};
export const ImportContacts = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0e0'" />;
};
export const ImportExport = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0c3'" />;
};
export const ImportantDevices = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed12'" />;
};
export const Inbox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e156'" />;
};
export const IndeterminateCheckBox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed13'" />;
};
export const Info = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e88e'" />;
};
export const InfoOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e88f'" />;
};
export const Input = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e890'" />;
};
export const InsertComment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e24c'" />;
};
export const InsertDriveFile = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e24d'" />;
};
export const TagFaces = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e420'" />;
};
export const Link = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e157'" />;
};
export const InvertColors = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e891'" />;
};
export const InvertColorsOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0c4'" />;
};
export const Iso = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3f6'" />;
};
export const Keyboard = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e312'" />;
};
export const KeyboardArrowDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e313'" />;
};
export const KeyboardArrowLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e314'" />;
};
export const KeyboardArrowRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e315'" />;
};
export const KeyboardArrowUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e316'" />;
};
export const KeyboardBackspace = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e317'" />;
};
export const KeyboardCapslock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e318'" />;
};
export const KeyboardHide = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e31a'" />;
};
export const KeyboardReturn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e31b'" />;
};
export const KeyboardTab = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e31c'" />;
};
export const KeyboardVoice = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e31d'" />;
};
export const Kitchen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed14'" />;
};
export const Label = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e892'" />;
};
export const LabelOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e893'" />;
};
export const Language = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e894'" />;
};
export const LaptopChromebook = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e31f'" />;
};
export const LaptopMac = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e320'" />;
};
export const LaptopWindows = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e321'" />;
};
export const LastPage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5dd'" />;
};
export const OpenInNew = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e89e'" />;
};
export const Layers = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e53b'" />;
};
export const LayersClear = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e53c'" />;
};
export const LeakAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3f8'" />;
};
export const LeakRemove = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3f9'" />;
};
export const Lens = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3fa'" />;
};
export const LibraryBooks = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e02f'" />;
};
export const LibraryMusic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e030'" />;
};
export const LightbulbOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed15'" />;
};
export const LineStyle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed16'" />;
};
export const LineWeight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed17'" />;
};
export const LinearScale = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e260'" />;
};
export const LinkedCamera = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e438'" />;
};
export const List = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e896'" />;
};
export const LiveHelp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0c6'" />;
};
export const LiveTv = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e639'" />;
};
export const LocalPlay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e553'" />;
};
export const LocalAirport = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e53d'" />;
};
export const LocalAtm = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e53e'" />;
};
export const LocalBar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e540'" />;
};
export const LocalCafe = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e541'" />;
};
export const LocalCarWash = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e542'" />;
};
export const LocalConvenienceStore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e543'" />;
};
export const RestaurantMenu = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e561'" />;
};
export const LocalDrink = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e544'" />;
};
export const LocalFlorist = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e545'" />;
};
export const LocalGasStation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e546'" />;
};
export const ShoppingCart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8cc'" />;
};
export const LocalHospital = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e548'" />;
};
export const LocalLaundryService = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e54a'" />;
};
export const LocalLibrary = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e54b'" />;
};
export const LocalMall = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e54c'" />;
};
export const Theaters = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8da'" />;
};
export const LocalOffer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e54e'" />;
};
export const LocalParking = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e54f'" />;
};
export const LocalPharmacy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e550'" />;
};
export const LocalPizza = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e552'" />;
};
export const Print = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ad'" />;
};
export const LocalShipping = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e558'" />;
};
export const LocalTaxi = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e559'" />;
};
export const LocationCity = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f1'" />;
};
export const LocationOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0c7'" />;
};
export const Room = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b4'" />;
};
export const LockOpen = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e898'" />;
};
export const LockOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e899'" />;
};
export const Looks = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3fc'" />;
};
export const Looks3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3fb'" />;
};
export const Looks4 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3fd'" />;
};
export const Looks5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3fe'" />;
};
export const Looks6 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e3ff'" />;
};
export const LooksOne = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e400'" />;
};
export const LooksTwo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e401'" />;
};
export const Sync = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e627'" />;
};
export const Loupe = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e402'" />;
};
export const LowPriority = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e16d'" />;
};
export const Loyalty = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e89a'" />;
};
export const MailOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0e1'" />;
};
export const Map = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e55b'" />;
};
export const MarkunreadMailbox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e89b'" />;
};
export const Memory = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e322'" />;
};
export const Menu = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d2'" />;
};
export const Message = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0c9'" />;
};
export const Mic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e029'" />;
};
export const MicNone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e02a'" />;
};
export const MicOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e02b'" />;
};
export const Mms = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e618'" />;
};
export const ModeComment = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e253'" />;
};
export const MonetizationOn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e263'" />;
};
export const MoneyOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e25c'" />;
};
export const MonochromePhotos = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e403'" />;
};
export const MoodBad = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f3'" />;
};
export const More = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e619'" />;
};
export const MoreHoriz = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d3'" />;
};
export const MoreVert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d4'" />;
};
export const Motorcycle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed18'" />;
};
export const Mouse = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e323'" />;
};
export const MoveToInbox = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e168'" />;
};
export const MovieCreation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e404'" />;
};
export const MovieFilter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e43a'" />;
};
export const MultilineChart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e6df'" />;
};
export const MusicNote = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e405'" />;
};
export const MusicVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e063'" />;
};
export const Nature = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e406'" />;
};
export const NaturePeople = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e407'" />;
};
export const Navigation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e55d'" />;
};
export const NearMe = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e569'" />;
};
export const NetworkCell = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1b9'" />;
};
export const NetworkCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e640'" />;
};
export const NetworkLocked = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e61a'" />;
};
export const NetworkWifi = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1ba'" />;
};
export const NewReleases = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e031'" />;
};
export const NextWeek = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e16a'" />;
};
export const Nfc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1bb'" />;
};
export const NoEncryption = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e641'" />;
};
export const SignalCellularNoSim = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1ce'" />;
};
export const Note = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e06f'" />;
};
export const NoteAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e89c'" />;
};
export const Notifications = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f4'" />;
};
export const NotificationsActive = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f7'" />;
};
export const NotificationsNone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f5'" />;
};
export const NotificationsOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f6'" />;
};
export const NotificationsPaused = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f8'" />;
};
export const OfflinePin = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed19'" />;
};
export const OndemandVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e63a'" />;
};
export const Opacity = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed1a'" />;
};
export const OpenInBrowser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e89d'" />;
};
export const OpenWith = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e89f'" />;
};
export const Pages = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7f9'" />;
};
export const Pageview = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a0'" />;
};
export const PanTool = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed1b'" />;
};
export const Panorama = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e40b'" />;
};
export const RadioButtonUnchecked = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e836'" />;
};
export const PanoramaHorizontal = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e40d'" />;
};
export const PanoramaVertical = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e40e'" />;
};
export const PanoramaWideAngle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e40f'" />;
};
export const PartyMode = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7fa'" />;
};
export const Pause = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e034'" />;
};
export const PauseCircleFilled = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e035'" />;
};
export const PauseCircleOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e036'" />;
};
export const PeopleOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7fc'" />;
};
export const PermCameraMic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a2'" />;
};
export const PermContactCalendar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a3'" />;
};
export const PermDataSetting = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a4'" />;
};
export const PermDeviceInformation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a5'" />;
};
export const PersonOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7ff'" />;
};
export const PermMedia = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a7'" />;
};
export const PermPhoneMsg = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a8'" />;
};
export const PermScanWifi = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8a9'" />;
};
export const Person = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7fd'" />;
};
export const PersonAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e7fe'" />;
};
export const PersonPin = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e55a'" />;
};
export const PersonPinCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e56a'" />;
};
export const PersonalVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e63b'" />;
};
export const Pets = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed1c'" />;
};
export const PhoneAndroid = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e324'" />;
};
export const PhoneBluetoothSpeaker = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e61b'" />;
};
export const PhoneForwarded = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e61c'" />;
};
export const PhoneInTalk = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e61d'" />;
};
export const PhoneIphone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e325'" />;
};
export const PhoneLocked = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e61e'" />;
};
export const PhoneMissed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e61f'" />;
};
export const PhonePaused = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e620'" />;
};
export const PhonelinkErase = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0db'" />;
};
export const PhonelinkLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0dc'" />;
};
export const PhonelinkOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e327'" />;
};
export const PhonelinkRing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0dd'" />;
};
export const PhonelinkSetup = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0de'" />;
};
export const PhotoAlbum = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e411'" />;
};
export const PhotoFilter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e43b'" />;
};
export const PhotoSizeSelectActual = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e432'" />;
};
export const PhotoSizeSelectLarge = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e433'" />;
};
export const PhotoSizeSelectSmall = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e434'" />;
};
export const PictureAsPdf = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e415'" />;
};
export const PictureInPicture = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8aa'" />;
};
export const PictureInPictureAlt = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed1d'" />;
};
export const PieChart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e6c4'" />;
};
export const PieChartOutlined = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e6c5'" />;
};
export const PinDrop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e55e'" />;
};
export const PlayArrow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e037'" />;
};
export const PlayCircleFilled = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e038'" />;
};
export const PlayCircleOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e039'" />;
};
export const PlayForWork = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed1e'" />;
};
export const PlaylistAdd = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e03b'" />;
};
export const PlaylistAddCheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e065'" />;
};
export const PlaylistPlay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e05f'" />;
};
export const PlusOne = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e800'" />;
};
export const Polymer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ab'" />;
};
export const Pool = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed1f'" />;
};
export const PortableWifiOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0ce'" />;
};
export const Portrait = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e416'" />;
};
export const Power = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e63c'" />;
};
export const PowerInput = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e336'" />;
};
export const PowerSettingsNew = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ac'" />;
};
export const PregnantWoman = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed20'" />;
};
export const PresentToAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0df'" />;
};
export const PriorityHigh = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e645'" />;
};
export const Public = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e80b'" />;
};
export const Publish = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e255'" />;
};
export const QueueMusic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e03d'" />;
};
export const QueuePlayNext = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e066'" />;
};
export const Radio = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e03e'" />;
};
export const RadioButtonChecked = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e837'" />;
};
export const RateReview = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e560'" />;
};
export const Receipt = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b0'" />;
};
export const RecentActors = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e03f'" />;
};
export const RecordVoiceOver = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed21'" />;
};
export const Redo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e15a'" />;
};
export const Refresh = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d5'" />;
};
export const Remove = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e15b'" />;
};
export const RemoveCircleOutline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e15d'" />;
};
export const RemoveFromQueue = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e067'" />;
};
export const Visibility = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f4'" />;
};
export const RemoveShoppingCart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed22'" />;
};
export const Reorder = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8fe'" />;
};
export const Repeat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e040'" />;
};
export const RepeatOne = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e041'" />;
};
export const Replay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e042'" />;
};
export const Replay10 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e059'" />;
};
export const Replay30 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e05a'" />;
};
export const Replay5 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e05b'" />;
};
export const Reply = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e15e'" />;
};
export const ReplyAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e15f'" />;
};
export const Report = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e160'" />;
};
export const Warning = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e002'" />;
};
export const Restaurant = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e56c'" />;
};
export const RestorePage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed23'" />;
};
export const RingVolume = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d1'" />;
};
export const RoomService = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed24'" />;
};
export const Rotate90DegreesCcw = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e418'" />;
};
export const RotateLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e419'" />;
};
export const RotateRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e41a'" />;
};
export const RoundedCorner = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed25'" />;
};
export const Router = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e328'" />;
};
export const Rowing = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed26'" />;
};
export const RssFeed = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0e5'" />;
};
export const RvHookup = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e642'" />;
};
export const Satellite = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e562'" />;
};
export const Save = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e161'" />;
};
export const Scanner = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e329'" />;
};
export const School = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e80c'" />;
};
export const ScreenLockLandscape = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1be'" />;
};
export const ScreenLockPortrait = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1bf'" />;
};
export const ScreenLockRotation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1c0'" />;
};
export const ScreenRotation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1c1'" />;
};
export const ScreenShare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0e2'" />;
};
export const SdStorage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1c2'" />;
};
export const Search = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b6'" />;
};
export const Security = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e32a'" />;
};
export const SelectAll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e162'" />;
};
export const Send = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e163'" />;
};
export const SentimentDissatisfied = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e811'" />;
};
export const SentimentNeutral = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e812'" />;
};
export const SentimentSatisfied = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e813'" />;
};
export const SentimentVeryDissatisfied = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e814'" />;
};
export const SentimentVerySatisfied = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e815'" />;
};
export const Settings = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b8'" />;
};
export const SettingsApplications = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8b9'" />;
};
export const SettingsBackupRestore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ba'" />;
};
export const SettingsBluetooth = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8bb'" />;
};
export const SettingsBrightness = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8bd'" />;
};
export const SettingsCell = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8bc'" />;
};
export const SettingsEthernet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8be'" />;
};
export const SettingsInputAntenna = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8bf'" />;
};
export const SettingsInputComposite = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c1'" />;
};
export const SettingsInputHdmi = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c2'" />;
};
export const SettingsInputSvideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c3'" />;
};
export const SettingsOverscan = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c4'" />;
};
export const SettingsPhone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c5'" />;
};
export const SettingsPower = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c6'" />;
};
export const SettingsRemote = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c7'" />;
};
export const SettingsSystemDaydream = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1c3'" />;
};
export const SettingsVoice = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c8'" />;
};
export const Share = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e80d'" />;
};
export const Shop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8c9'" />;
};
export const ShopTwo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ca'" />;
};
export const ShoppingBasket = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8cb'" />;
};
export const ShortText = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e261'" />;
};
export const ShowChart = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e6e1'" />;
};
export const Shuffle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e043'" />;
};
export const SignalCellular4Bar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1c8'" />;
};
export const SignalCellularConnectedNoInternet4Bar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1cd'" />;
};
export const SignalCellularNull = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1cf'" />;
};
export const SignalCellularOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1d0'" />;
};
export const SignalWifi4Bar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1d8'" />;
};
export const SignalWifi4BarLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1d9'" />;
};
export const SignalWifiOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1da'" />;
};
export const SimCard = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e32b'" />;
};
export const SimCardAlert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e624'" />;
};
export const SkipNext = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e044'" />;
};
export const SkipPrevious = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e045'" />;
};
export const Slideshow = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e41b'" />;
};
export const SlowMotionVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e068'" />;
};
export const StayPrimaryPortrait = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d6'" />;
};
export const SmokeFree = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed27'" />;
};
export const SmokingRooms = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed28'" />;
};
export const Textsms = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d8'" />;
};
export const Snooze = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e046'" />;
};
export const Sort = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e164'" />;
};
export const SortByAlpha = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e053'" />;
};
export const Spa = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed29'" />;
};
export const SpaceBar = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e256'" />;
};
export const Speaker = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e32d'" />;
};
export const SpeakerGroup = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e32e'" />;
};
export const SpeakerNotes = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8cd'" />;
};
export const SpeakerNotesOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed2a'" />;
};
export const SpeakerPhone = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d2'" />;
};
export const Spellcheck = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ce'" />;
};
export const StarBorder = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e83a'" />;
};
export const StarHalf = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e839'" />;
};
export const Stars = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d0'" />;
};
export const StayPrimaryLandscape = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d5'" />;
};
export const Stop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e047'" />;
};
export const StopScreenShare = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0e3'" />;
};
export const Storage = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1db'" />;
};
export const StoreMallDirectory = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e563'" />;
};
export const Straighten = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e41c'" />;
};
export const Streetview = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e56e'" />;
};
export const StrikethroughS = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e257'" />;
};
export const Style = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e41d'" />;
};
export const SubdirectoryArrowLeft = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d9'" />;
};
export const SubdirectoryArrowRight = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5da'" />;
};
export const Subject = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d2'" />;
};
export const Subscriptions = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e064'" />;
};
export const Subtitles = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e048'" />;
};
export const Subway = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e56f'" />;
};
export const SupervisorAccount = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d3'" />;
};
export const SurroundSound = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e049'" />;
};
export const SwapCalls = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d7'" />;
};
export const SwapHoriz = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d4'" />;
};
export const SwapVert = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d5'" />;
};
export const SwapVerticalCircle = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d6'" />;
};
export const SwitchCamera = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e41e'" />;
};
export const SwitchVideo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e41f'" />;
};
export const SyncDisabled = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e628'" />;
};
export const SyncProblem = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e629'" />;
};
export const SystemUpdate = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e62a'" />;
};
export const SystemUpdateAlt = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d7'" />;
};
export const Tab = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d8'" />;
};
export const TabUnselected = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8d9'" />;
};
export const Tablet = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e32f'" />;
};
export const TabletAndroid = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e330'" />;
};
export const TabletMac = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e331'" />;
};
export const TapAndPlay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e62b'" />;
};
export const TextFields = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e262'" />;
};
export const TextFormat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e165'" />;
};
export const Texture = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e421'" />;
};
export const ThumbDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8db'" />;
};
export const ThumbUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8dc'" />;
};
export const ThumbsUpDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8dd'" />;
};
export const Timelapse = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e422'" />;
};
export const Timeline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed2b'" />;
};
export const Timer = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e425'" />;
};
export const Timer10 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e423'" />;
};
export const Timer3 = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e424'" />;
};
export const TimerOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e426'" />;
};
export const Title = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e264'" />;
};
export const Toc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8de'" />;
};
export const Today = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8df'" />;
};
export const Toll = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e0'" />;
};
export const Tonality = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e427'" />;
};
export const TouchApp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed2c'" />;
};
export const Toys = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e332'" />;
};
export const TrackChanges = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e1'" />;
};
export const Traffic = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e565'" />;
};
export const Train = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e570'" />;
};
export const Tram = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e571'" />;
};
export const TransferWithinAStation = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e572'" />;
};
export const Transform = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e428'" />;
};
export const Translate = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e2'" />;
};
export const TrendingDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e3'" />;
};
export const TrendingFlat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e4'" />;
};
export const TrendingUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e5'" />;
};
export const Tune = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e429'" />;
};
export const Tv = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e333'" />;
};
export const Unarchive = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e169'" />;
};
export const Undo = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e166'" />;
};
export const UnfoldLess = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d6'" />;
};
export const UnfoldMore = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e5d7'" />;
};
export const Update = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed2d'" />;
};
export const Usb = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1e0'" />;
};
export const VerifiedUser = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e8'" />;
};
export const VerticalAlignBottom = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e258'" />;
};
export const VerticalAlignCenter = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e259'" />;
};
export const VerticalAlignTop = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e25a'" />;
};
export const Vibration = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e62d'" />;
};
export const VideoCall = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e070'" />;
};
export const VideoLabel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e071'" />;
};
export const VideoLibrary = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e04a'" />;
};
export const Videocam = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e04b'" />;
};
export const VideocamOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e04c'" />;
};
export const VideogameAsset = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e338'" />;
};
export const ViewAgenda = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8e9'" />;
};
export const ViewArray = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ea'" />;
};
export const ViewCarousel = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8eb'" />;
};
export const ViewColumn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ec'" />;
};
export const ViewComfy = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e42a'" />;
};
export const ViewCompact = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e42b'" />;
};
export const ViewDay = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ed'" />;
};
export const ViewHeadline = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ee'" />;
};
export const ViewList = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ef'" />;
};
export const ViewModule = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f0'" />;
};
export const ViewQuilt = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f1'" />;
};
export const ViewStream = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f2'" />;
};
export const ViewWeek = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f3'" />;
};
export const Vignette = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e435'" />;
};
export const VisibilityOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f5'" />;
};
export const VoiceChat = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e62e'" />;
};
export const Voicemail = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0d9'" />;
};
export const VolumeDown = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e04d'" />;
};
export const VolumeMute = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e04e'" />;
};
export const VolumeOff = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e04f'" />;
};
export const VolumeUp = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e050'" />;
};
export const VpnKey = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e0da'" />;
};
export const VpnLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e62f'" />;
};
export const Wallpaper = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1bc'" />;
};
export const Watch = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e334'" />;
};
export const WatchLater = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed2e'" />;
};
export const WbAuto = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e42c'" />;
};
export const WbIncandescent = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e42e'" />;
};
export const WbIridescent = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e436'" />;
};
export const WbSunny = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e430'" />;
};
export const Wc = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e63d'" />;
};
export const Web = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e051'" />;
};
export const WebAsset = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e069'" />;
};
export const Weekend = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e16b'" />;
};
export const Whatshot = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e80e'" />;
};
export const Widgets = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1bd'" />;
};
export const Wifi = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e63e'" />;
};
export const WifiLock = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1e1'" />;
};
export const WifiTethering = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e1e2'" />;
};
export const Work = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8f9'" />;
};
export const WrapText = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e25b'" />;
};
export const YoutubeSearchedFor = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8fa'" />;
};
export const ZoomIn = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e8ff'" />;
};
export const ZoomOut = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\ed2f'" />;
};
export const ZoomOutMap = (props: IconProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return <BaseIcon {...props} code="'\e56b'" />;
};
