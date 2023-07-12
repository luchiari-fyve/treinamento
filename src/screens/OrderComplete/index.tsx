// External Libraries
import React from 'react'

// Components

// Styles
import { Container, SuccessMessage } from './styles'
import ConfirmationSVG from '@assets/icons/ConfirmationSVG'
import { Typography } from '@components/toolkit/Typography'
import theme from '@global/theme'
import { TopBar } from '@components/structure/TopBar'
import { ProgressBar } from '@components/toolkit/ProgressBar'

export const OrderComplete: React.FC = () => {
  return (
    <Container>
      <TopBar label="Concluído" />
      <ProgressBar numberOfSteps={3} currentStep={3} />
      <SuccessMessage>
        <ConfirmationSVG />
        <Typography variant="s1">Pedido finalizado com sucesso</Typography>
        <Typography
          variant="b2"
          align="center"
          color={theme.colors.textSecondary}
        >
          Para acompanhar os seus pedidos, basta acessar o menu pedidos dentro
          do aplicativo
        </Typography>
      </SuccessMessage>
    </Container>
  )
}
