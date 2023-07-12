import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const TrashCanSVG = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M2.25 4.5h13.5M14.25 4.5V15c0 .75-.75 1.5-1.5 1.5h-7.5c-.75 0-1.5-.75-1.5-1.5V4.5M6 4.5V3c0-.75.75-1.5 1.5-1.5h3c.75 0 1.5.75 1.5 1.5v1.5"
    />
  </Svg>
)
export default TrashCanSVG
