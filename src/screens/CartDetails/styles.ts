import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: white;
  width: 100%;
  height: 87%;
`

export const TopBar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  align-items: center;
  margin-top: 15%;
`

export const BottomBar = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  padding: 7%;
  bottom: 0;
  height: auto;

  background-color: white;
  border-width: 1px;
  border-color: #eaeaea;
`
export const Message = styled.View`
  height: 10%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
