import * as React from 'react';

export default function VuetifyIcon(
    props: React.SVGProps<SVGSVGElement>
): JSX.Element {
    return (
  <svg
    width="24px"
    height="24px"
    viewBox="-18.5 0 293 293"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <polyline fill="#1697F6" points="128 0 68 0 128 141.816367" />
      <polyline fill="#1867C0" points="128 0 188 0 128 141.816367" />
      <polyline
        fill="#7BC6FF"
        points="128 182.743732 128 292.459439 0 42.5575194 67.0490402 42.5575194"
      />
      <polyline
        fill="#AEDDFF"
        points="128 182.746214 128 292.461921 256 42.5600014 188.95096 42.5600014"
      />
    </g>
  </svg>
    );
}