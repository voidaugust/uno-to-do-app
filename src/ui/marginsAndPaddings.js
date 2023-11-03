import { css } from "styled-components"

export const marginsAndPaddings = css`
  margin-block: ${props => props.$marginBlock || "0"};
  margin-inline: ${props => props.$marginInline || "0"};
  padding-block: ${props => props.$paddingBlock || "0"};
  padding-inline: ${props => props.$paddingInline || "0"};
`