import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const OrderListSVG = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M17.64 21.2H7.36c-1.14 0-2.06-.92-2.06-2.06V4.75c0-1.14.92-2.06 2.06-2.06h10.28c1.14 0 2.06.92 2.06 2.06v14.39a2.07 2.07 0 0 1-2.06 2.06ZM8.39 6.86h8.22M8.39 12h8.22M8.39 17.14h8.22"
    />
  </Svg>
)
export default OrderListSVG
