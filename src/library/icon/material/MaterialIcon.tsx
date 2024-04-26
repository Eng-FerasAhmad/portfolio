import * as React from 'react';

export default function MaterialIcon(
    props: React.SVGProps<SVGSVGElement>
): JSX.Element {
    return (
  <svg
    width="24px"
    height="24px"
    viewBox="0 -26 256 256"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <g>
      <polygon
        fill="#00B0FF"
        points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
      />
      <polygon
        fill="#0081CB"
        points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
      />
      <polygon
        fill="#00B0FF"
        points="96 129.322667 96 166.272 160 203.221333 160 166.272"
      />
      <path
        d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z"
        fill="#0081CB"
      />
    </g>
  </svg>
    );
}
