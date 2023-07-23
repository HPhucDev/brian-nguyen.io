/* eslint-disable @typescript-eslint/no-empty-interface */
import { ColorPartial } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading01: React.CSSProperties;
    heading02: React.CSSProperties;
    heading03: React.CSSProperties;
    heading04: React.CSSProperties;
    heading05: React.CSSProperties;
    paragraph01: React.CSSProperties;
    paragraph02: React.CSSProperties;
    caption01: React.CSSProperties;
    caption02: React.CSSProperties;

    webHeading01: React.CSSProperties;
    webHeading02: React.CSSProperties;
    webHeading03: React.CSSProperties;
    webHeading04: React.CSSProperties;
    webHeading05: React.CSSProperties;
    webHeading06: React.CSSProperties;
    webParagraph01: React.CSSProperties;
    webParagraph02: React.CSSProperties;

    footerHeading05: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    heading01: React.CSSProperties;
    heading02: React.CSSProperties;
    heading03: React.CSSProperties;
    heading04: React.CSSProperties;
    heading05: React.CSSProperties;
    paragraph01: React.CSSProperties;
    paragraph02: React.CSSProperties;
    caption01: React.CSSProperties;
    caption02: React.CSSProperties;

    webHeading01: React.CSSProperties;
    webHeading02: React.CSSProperties;
    webHeading03: React.CSSProperties;
    webHeading04: React.CSSProperties;
    webHeading05: React.CSSProperties;
    webHeading06: React.CSSProperties;
    webParagraph01: React.CSSProperties;
    webParagraph02: React.CSSProperties;

    footerHeading05: React.CSSProperties;
  }

  interface Palette {
    global01: ColorPartial;
    neutral01: ColorPartial;
  }
  interface PaletteOptions {
    global01: ColorPartial;
    neutral01: ColorPartial;
  }

  interface ThemeOptions {}
}

// https://mui.com/customization/typography/#adding-amp-disabling-variants
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading01: true;
    heading02: true;
    heading03: true;
    heading04: true;
    heading05: true;
    paragraph01: true;
    paragraph02: true;
    caption01: true;
    caption02: true;

    webHeading01: true;
    webHeading02: true;
    webHeading03: true;
    webHeading04: true;
    webHeading05: true;
    webHeading06: true;
    webParagraph01: true;
    webParagraph02: true;

    footerHeading05: true;
  }
}

export {};
