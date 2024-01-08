import { forwardRef } from 'react'
import styled, { css } from 'styled-components'

const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref ? ref : null} {...props} />
})

export default Input

const StyledInput = styled.input`
  display: flex;
  height: 60px;
  padding-block: 8px;
  padding-inline: ${props => props.$paddingInline || "16px"};
  align-items: center;
  align-self: stretch;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  color: ${props => props.$mode === "light" ? "black" : "white"};
  background-color: ${props => props.$mode === "light" ? "var(--input-light-grey)" : "var(--over-dark-grey-variant)"};
  border-bottom: 2px solid ${props => props.$mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey-variant)"};
  caret-color: ${props => props.$mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey-variant)"};

  ${props => props.$search && css`
    background: ${props => props.$mode === "light" ? "var(--light-grey)" : "var(--dark-grey)"};
  `};

  ${props => props.$note && css`
    padding-inline: 0;
    border-radius: 0;
    border: 0;
    background: transparent;
  `};
`