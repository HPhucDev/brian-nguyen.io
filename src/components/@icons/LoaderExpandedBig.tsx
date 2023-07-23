import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgLoaderExpandedBig = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 429 181" role="img" {...props}>
    <title>{'loader_expanded_big'}</title>
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
      <g id="svg" transform="translate(-28.000000, -36.000000)" fill="url(#linearGradient-1)">
        <g id="loader_expanded_big" transform="translate(28.000000, 36.000000)">
          <path
            d="M0,0 L56,0 L56,56 L0,56 L0,0 Z M73,5 L380,5 L380,21 L73,21 L73,5 Z M73,29 L259,29 L259,45 L73,45 L73,29 Z M73,54 L151,54 L151,64 L73,64 L73,54 Z M2,87 L429,87 L429,97 L2,97 L2,87 Z M2,129 L405,129 L405,139 L2,139 L2,129 Z M2,150 L417,150 L417,160 L2,160 L2,150 Z M2,171 L162,171 L162,181 L2,181 L2,171 Z M2,108 L375,108 L375,118 L2,118 L2,108 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);
const Memo = memo(SvgLoaderExpandedBig);
export default Memo;
