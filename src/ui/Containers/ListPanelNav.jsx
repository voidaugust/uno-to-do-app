import styled from 'styled-components'

export default function ListPanelNav({ children }) {
  return <StyledListPanelNav>{children}</StyledListPanelNav>
}

const StyledListPanelNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`