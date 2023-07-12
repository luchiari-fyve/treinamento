// External Libraries
import React, { ReactElement } from 'react'

// Components

// Styles
import { Container } from './styles'
import { ButtonWithIcon } from '@components/buttons/ButtonWithIcon'
import DownArrowSVG from '@assets/icons/DownArrowSVG'
import { Typography } from '@components/toolkit/Typography'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types/navigationProps'
import { Dimensions } from 'react-native'

interface Props {
  label: string
  thirdButton?: ReactElement
}

export const TopBar: React.FC<Props> = ({ label, thirdButton }) => {
  const windowHeight = Dimensions.get('window').height

  const navigate = useNavigation<NavigationProps>()

  const goBack = () => {
    navigate.goBack()
  }

  return (
    <Container style={{ height: windowHeight / 14 }}>
      <ButtonWithIcon
        icon={<DownArrowSVG />}
        bgColor="white"
        onPress={goBack}
      />
      <Typography variant="s1">{label}</Typography>

      {thirdButton}

      {/* <ButtonWithText
        text="Limpar"
        textColor={theme.colors.textSecondary}
        bgColor="white"
        onPress={goBack}
      /> */}
    </Container>
  )
}
