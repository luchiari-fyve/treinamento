import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const MagnifierIconSVG = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#BBB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.142 15.992a6.85 6.85 0 1 1 0-13.7 6.85 6.85 0 0 1 0 13.7ZM17.708 17.708l-3.425-3.425"
    />
  </Svg>
)
export default MagnifierIconSVG
