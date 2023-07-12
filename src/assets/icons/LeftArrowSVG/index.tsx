import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */
const LeftArrowSVG = (props: SvgProps) => (
  <Svg width={8} height={14} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13 1 7l6-6"
    />
  </Svg>
)
export default LeftArrowSVG
