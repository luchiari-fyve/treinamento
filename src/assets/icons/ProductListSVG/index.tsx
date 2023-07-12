import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const ProductListSVG = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.68 10.36H5.32c-.93 0-1.68-.75-1.68-1.68V5.32c0-.93.75-1.68 1.68-1.68h3.36c.93 0 1.68.75 1.68 1.68v3.36c0 .93-.75 1.68-1.68 1.68ZM18.68 10.36h-3.36c-.93 0-1.68-.75-1.68-1.68V5.32c0-.93.75-1.68 1.68-1.68h3.36c.93 0 1.68.75 1.68 1.68v3.36c0 .93-.75 1.68-1.68 1.68ZM8.68 20.36H5.32c-.93 0-1.68-.75-1.68-1.68v-3.36c0-.93.75-1.68 1.68-1.68h3.36c.93 0 1.68.75 1.68 1.68v3.36c0 .93-.75 1.68-1.68 1.68ZM18.68 20.36h-3.36c-.93 0-1.68-.75-1.68-1.68v-3.36c0-.93.75-1.68 1.68-1.68h3.36c.93 0 1.68.75 1.68 1.68v3.36c0 .93-.75 1.68-1.68 1.68Z"
    />
  </Svg>
)
export default ProductListSVG
