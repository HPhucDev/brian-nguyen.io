import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_audio'}</title>
    <path
      id="audio"
      d="M20,12.06a6.71,6.71,0,0,1-2.71,5.3l-.71-.71A5.78,5.78,0,0,0,19,12.06a5.76,5.76,0,0,0-2.41-4.58l.71-.71A6.73,6.73,0,0,1,20,12.06ZM15,9l-.71.71A2.87,2.87,0,0,1,15.5,12a2.88,2.88,0,0,1-1.26,2.31L15,15A3.72,3.72,0,0,0,15,9Zm-3.1-2.41a.43.43,0,0,1,.07.25V17.12a.5.5,0,0,1-.5.5.59.59,0,0,1-.26-.07l-4-2.4A.54.54,0,0,1,7.09,15H4.5a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,4.5,9H7.09a.54.54,0,0,1,.15-.15l4-2.4A.51.51,0,0,1,11.93,6.63ZM7,10H5v4H7Zm4-2.23L8,9.57v4.86l3,1.8Z"
    />
  </svg>
);
const Memo = memo(SvgIcoAudio);
export default Memo;
