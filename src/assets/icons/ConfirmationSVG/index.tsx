import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const ConfirmationSVG = (props: SvgProps) => (
  <Svg width={67} height={66} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M11.087 23.705a10.999 10.999 0 0 1 13.145-13.117 11 11 0 0 1 18.535 0 11 11 0 0 1 13.145 13.145 11 11 0 0 1 0 18.534 11 11 0 0 1-13.117 13.145 11 11 0 0 1-18.563 0 11 11 0 0 1-13.145-13.117 11 11 0 0 1 0-18.59Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m25.25 33 5.5 5.5 11-11"
    />
  </Svg>
)
export default ConfirmationSVG
