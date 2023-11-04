import React from 'react'
import MainWrapper from '../../ui/MainWrapper/MainWrapper'
import { useDispatch } from 'react-redux'
import Text from '../../ui/Text/Text'
import Heading from '../../ui/Text/Heading'

export default function TodoApp() {
  const dispatch = useDispatch()

  return (
    <MainWrapper>
      <Heading $type="h1">
        text
      </Heading>
    </MainWrapper>
  )
}