import React from 'react'
import { Container, ContainerEmpty, ContainerFull } from './styles'

interface Props {
  numberOfSteps: number
  currentStep: number
}
export const ProgressBar: React.FC<Props> = ({
  numberOfSteps,
  currentStep
}) => {
  const renderContainers = () => {
    const containers = []
    for (let i = 0; i < numberOfSteps; i++) {
      if (i < currentStep) {
        containers.push(<ContainerFull key={i} numberOfSteps={numberOfSteps} />)
      } else {
        containers.push(<ContainerEmpty key={i} />)
      }
    }
    return containers
  }

  return <Container>{renderContainers()}</Container>
}
