import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
  background-color: white;
  margin: 3%;
  /* display: flex;
  justify-content: center;
  align-items: left;
  width: 175px;
  height: 210px; */
`
export const TextInfo = styled.View`
  flex-direction: column;
  width: 100%;
`
export const Bottom = styled.View`
  /* background-color: white;
  padding: 6%;
  margin-right: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around; */

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  position: absolute;
  padding: 2%;
  bottom: 0;
  height: auto;
  gap: 120px;

  background-color: white;
`

export const ContainerPrices = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
`
export const ButtonWithIcon = styled.View``
