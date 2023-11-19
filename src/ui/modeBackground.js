import { css } from "styled-components";

export const modeBackground = css`
  ${props => props.$modeBg && css`
    background-color: ${props => props.$mode === "light" ? "white" : "var(--dark-mode-background)"};
  `};
`