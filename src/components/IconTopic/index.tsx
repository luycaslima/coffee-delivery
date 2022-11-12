import { ReactElement } from 'react'
import { IconContainer, IconTopicContainer } from './styles'

interface IconTopicProps {
  icon: ReactElement
  text: string
  backgroundColor: string
}

export default function IconTopic({
  icon,
  text,
  backgroundColor,
}: IconTopicProps) {
  return (
    <IconTopicContainer>
      <IconContainer color={backgroundColor}>{icon}</IconContainer>
      {text}
    </IconTopicContainer>
  )
}
