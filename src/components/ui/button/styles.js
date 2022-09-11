import styled from "styled-components";

export const StyledButton = styled.a`
  box-sizing: border-box;
  display: block;
  min-height: 60px;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  padding: 0 24px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: bold;
  line-height: 58px;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  cursor: pointer;
  transition: background-color 0, 2s ease-out, box-shadow 0.2s ease-out;
  font-family: ${(props) => props.theme.fontFamily};
}

.button:hover,
.button:active {
  background-color: ${(props) => props.theme.buttonColorHoverActive};
  box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
}

.button:active {
  box-shadow: none;
}

&:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
`;
