// External Libraries
import React, { useState } from 'react'

// Components

// Styles
import { Container } from './styles'
import { BottomBar } from '@components/structure/BottomBar'
import { ShipmentAddress } from '../ShipmentAddress'
import { CartDetails } from '../CartDetails'
import { OrderComplete } from '@screens/OrderComplete'
import { ContinueButton } from '@components/buttons/ContinueButton'
import { useCartContext } from '@contexts/useCartContext'
import { useNavigation } from '@react-navigation/native'

export const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState('cart')
  const cartContext = useCartContext()
  const navigation = useNavigation()

  function handleNextStep() {
    if (currentStep === 'cart') {
      setCurrentStep('shipmentAddress')
    } else if (currentStep === 'shipmentAddress') {
      cartContext.clearProducts()
      setCurrentStep('orderComplete')
    } else if (currentStep === 'orderComplete') {
      navigation.goBack()
    }
  }

  function setButtonLabel() {
    let label = 'Continuar'
    if (currentStep === 'shipmentAddress') {
      label = 'Finalizar Pedido'
    } else if (currentStep === 'orderComplete') {
      label = 'Fechar'
    }
    return label
  }

  return (
    <Container>
      {currentStep === 'cart' && <CartDetails />}
      {currentStep === 'shipmentAddress' && <ShipmentAddress />}
      {currentStep === 'orderComplete' && <OrderComplete />}
      <BottomBar>
        <ContinueButton onPress={handleNextStep} label={setButtonLabel()} />
      </BottomBar>
    </Container>
  )
}
