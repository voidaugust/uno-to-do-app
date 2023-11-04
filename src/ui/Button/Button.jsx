import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'

export default function Button(props) {
  const context = useSelector(state => state.userPanelUI)
  const preparedProps = {
    ...props, 
    $palette: context.palette,
  }

  return <StyledButton {...preparedProps} />
}

const StyledButton = styled.button`
  display: flex;
  padding: 10px 24px 10px 16px;
  justify-content: center;
  align-items: center;
  width: ${props => props.$width || "100%"};
  gap: 8px;
  border-radius: 20px;
  color: var(--primary-purple);
  background: transparent;
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.24); 
  }

  ${props => props.$filled && css`
    ${'' /* color: ${props => props.$palette === "dark" ? 'white' : 'black'}; */}
    color: white;
    background: var(--primary-purple);
  `}

  ${props => props.$tonal && css`
    color: var(--over-secondary-purple);
    background: var(--secondary-purple);
  `}
`