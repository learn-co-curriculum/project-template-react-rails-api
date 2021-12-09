import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "#4f2004",
    "--accent": "white",
  }
};

function PlayNow({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 2.15rem;
  border: 1px solid transparent;
  border-radius: 6px;
  font-family: Copperplate, fantasy;
  padding: 15px 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);
  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);
  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default PlayNow;