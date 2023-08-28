import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  remove?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => {
    if (props.primary) return props.theme.colors.primary;
    if (props.secondary) return props.theme.colors.secondary;
    if (props.remove) return props.theme.colors.remove;
    return "black";
  }};
  color: ${(props) =>
    props.primary || props.secondary || props.remove ? "white" : "black"};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  svg {
    color: ${(props) => (props.remove ? "red" : "inherit")};
  }
`;

export default Button;
