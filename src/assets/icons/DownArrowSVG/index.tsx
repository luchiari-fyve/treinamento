import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const DownArrowSVG = (props: SvgProps) => (
  <Svg width={13} height={7} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 1 6.5 6 1 1"
    />
  </Svg>
)
export default DownArrowSVG
