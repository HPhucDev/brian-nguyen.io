import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgLoaderThin = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 280 34" role="img" {...props}>
    <title>{'loader_thin'}</title>
    <desc>{'Created with Sketch.'}</desc>
    <defs>
      <linearGradient x1="0%" y1="50.000006%" x2="100%" y2="50.000006%" id="linearGradient-1">
        <stop stopColor="#EEF0F0" offset="0%" />
        <stop stopColor="#EEF0F0" offset="20%" />
        <stop stopColor="#F7F7F7" offset="30%" />
        <stop stopColor="#EEF0F0" offset="40%" />
        <stop stopColor="#EEF0F0" offset="100%" />
      </linearGradient>
    </defs>
    <g id="slices" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="svg" transform="translate(-631.000000, -42.000000)" fill="url(#linearGradient-1)">
        <g id="loader_thin" transform="translate(631.000000, 42.000000)">
          <path
            d="M0,0 L280,0 L280,16 L0,16 L0,0 Z M0,24 L78,24 L78,34 L0,34 L0,24 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);
const Memo = memo(SvgLoaderThin);
export default Memo;
