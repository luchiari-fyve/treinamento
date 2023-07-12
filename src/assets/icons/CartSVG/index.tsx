import * as React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'
const CartSVG = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M6 16.5A.75.75 0 1 0 6 15a.75.75 0 0 0 0 1.5ZM14.25 16.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM1.538 1.538h1.5l1.995 9.315a1.5 1.5 0 0 0 1.5 1.185h7.335a1.5 1.5 0 0 0 1.462-1.178l1.238-5.572H3.84" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CartSVG
