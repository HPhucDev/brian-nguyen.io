import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" role="img" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.64645 12.3536C7.84171 12.5488 8.15829 12.5488 8.35355 12.3536L11.5 9.20711V16.5C11.5 16.7761 11.7239 17 12 17C12.2761 17 12.5 16.7761 12.5 16.5V9.20711L15.6464 12.3536C15.8417 12.5488 16.1583 12.5488 16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L12.3536 7.64645C12.1583 7.45118 11.8417 7.45118 11.6464 7.64645L7.64645 11.6464C7.45118 11.8417 7.45118 12.1583 7.64645 12.3536Z"
      fill="white"
    />
    <mask
      id="mask0_12802_460608"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={7}
      y={7}
      width={10}
      height={10}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64645 12.3536C7.84171 12.5488 8.15829 12.5488 8.35355 12.3536L11.5 9.20711V16.5C11.5 16.7761 11.7239 17 12 17C12.2761 17 12.5 16.7761 12.5 16.5V9.20711L15.6464 12.3536C15.8417 12.5488 16.1583 12.5488 16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L12.3536 7.64645C12.1583 7.45118 11.8417 7.45118 11.6464 7.64645L7.64645 11.6464C7.45118 11.8417 7.45118 12.1583 7.64645 12.3536Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_12802_460608)">
      <rect y={24} width={24} height={24} transform="rotate(-90 0 24)" fill="#A1A2B2" />
    </g>
  </svg>
);
const Memo = memo(SvgIcoArrowUp);
export default Memo;
