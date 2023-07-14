import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 44px;
  gap: 2px;
  background-color: black;
  border-radius: 4px;
  opacity: ${(props: { disabled: any }) => (props.disabled ? 0.4 : 1)};
`

export const Message = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`
