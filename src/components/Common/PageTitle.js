import styled from "styled-components";
import {theme} from "../../styles/theme";

export const PageTitle = styled.h1`
  margin: ${theme.space.m}px 0;
  color: ${theme.colors.red};
  ${theme.media.md} {
    margin: ${theme.space.l}px 0;
  }
  ${theme.media.lg} {
    margin: ${theme.space.xl}px 0;
  }
`