import { forwardRef } from "react"
import styled from "styled-components"
import Container from "../../ui/Containers/Container"
import Icon from "../../ui/Icons/Icon"
import { searchIcon } from "../../ui/Icons/iconTypes"

const SearchInput = forwardRef((props, ref) => {
  return (
    <Container 
      $mode={props.$mode} 
      $position="relative" 
      $marginBlock="0 20px"
    >
      <Icon $src={searchIcon} $left={"16px"} />
      <StyledSearchInput 
        ref={ref} placeholder="Search" 
        {...props} 
      />
    </Container>
  )
})

const StyledSearchInput = styled.input`
  display: flex;
  height: 58px;
  padding-block: 8px;
  padding-inline: calc(16px + 24px + 8px) 16px;
  align-items: center;
  align-self: stretch;
  border-radius: 4px 4px 0px 0px;
  color: ${props => props.$mode === "light" ? "black" : "white"};
  background: ${props => props.$mode === "light" ? "var(--light-grey)" : "var(--dark-grey)"};
  border-bottom: 2px solid ${props => props.$mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey-variant)"};
  caret-color: ${props => props.$mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey-variant)"};
`

export default SearchInput