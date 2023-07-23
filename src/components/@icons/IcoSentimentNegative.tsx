import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSentimentNegative = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 40 40" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_sentiment_negative'}</title>
    <path d="M29,29a1,1,0,0,1-2,0c0-3.66-3-6-7-6s-7,2.33-7,6a1,1,0,0,1-2,0c0-4.9,4-8,9-8S29,24.11,29,29ZM25,18a2,2,0,1,1,2-2A2,2,0,0,1,25,18ZM15,18a2,2,0,1,1,2-2A2,2,0,0,1,15,18ZM13,7a6,6,0,0,0-6,6V27a6,6,0,0,0,6,6H27a6,6,0,0,0,6-6V13a6,6,0,0,0-6-6Zm0-2H27a8,8,0,0,1,8,8V27a8,8,0,0,1-8,8H13a8,8,0,0,1-8-8V13A8,8,0,0,1,13,5Z" />
  </svg>
);
const Memo = memo(SvgIcoSentimentNegative);
export default Memo;
