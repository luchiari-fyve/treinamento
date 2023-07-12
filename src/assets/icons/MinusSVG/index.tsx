import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const MinusSVG = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12h14"
    />
  </Svg>
)
export default MinusSVG
