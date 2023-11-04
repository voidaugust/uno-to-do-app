import { useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { keyframes } from 'styled-components'

export default function Transition() {
  const [isGoing, setIsGoing] = useState(true)
  setTimeout(() => setIsGoing(false), 2001)
  console.log("go")

  if(!isGoing) return null

  return createPortal(
    <StyledTransition />, 
    document.getElementById('modal')
  )
}

const fade = keyframes`
  0%   { opacity: 0 }
  50%  { opacity: 1 }
  100% { opacity: 0 }
`

const StyledTransition = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: #000;
  opacity: 0;
  animation: ${fade} 2s;
`