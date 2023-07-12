import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: black;
  border-radius: 4px 4px 0 0;
  flex-direction: row;
  justify-content: space-around;
  padding: 4%;
  align-items: top;
  width: 100%;
  height: 18%;
  bottom: 0;
`

export const Cart = styled.View`
  width: 17px;
  height: 17px;
  border-radius: 10px;

  background-color: white;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 15%;
  bottom: 108%;
`
