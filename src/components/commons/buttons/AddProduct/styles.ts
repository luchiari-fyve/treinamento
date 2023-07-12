import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 44px;
  gap: 2px;
  background-color: black;
  border-radius: 4px;
`

export const Message = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`
