import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgLoaderAnalysis = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 100 34" role="img" {...props}>
    <title>{'loader analysis'}</title>
    <desc>{'Created with Sketch.'}</desc>
    <defs>
      <linearGradient x1="3.061617e-15%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
        <stop stopColor="#E3E3E3" offset="0%" />
        <stop stopColor="#E6E6E6" offset="20%" />
        <stop stopColor="#E9E9E9" offset="35.4352679%" />
        <stop stopColor="#E8E8E8" offset="50%" />
        <stop stopColor="#E3E3E3" offset="100%" />
      </linearGradient>
    </defs>
    <g id="slices" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="svg" transform="translate(-707.000000, -365.000000)" fill="url(#linearGradient-1)">
        <g id="loader-analysis" transform="translate(707.000000, 365.000000)">
          <path
            d="M0,0 L100,0 L100,14 L0,14 L0,0 Z M22,22 L78,22 L78,34 L22,34 L22,22 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);
const Memo = memo(SvgLoaderAnalysis);
export default Memo;
