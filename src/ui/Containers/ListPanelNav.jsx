import styled from 'styled-components'

export default function ListPanelNav({ children }) {
  return <StyledListPanelNav>{children}</StyledListPanelNav>
}

const StyledListPanelNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`