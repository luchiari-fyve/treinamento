import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const PlusSVG = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5v14M5 12h14"
    />
  </Svg>
)
export default PlusSVG
