import { Button as TButton, styled } from "tamagui";

export const SButton = styled(TButton, {
  bg: "$blue10",
  bw: "$0",
  fontSize: "$4",
  color: "white",
  hoverStyle: {
    bg: "$blue8",
  },
  pressStyle: {
    bg: "$blue12Dark",
    outlineStyle: "solid",
    outlineWidth: 12,
  },
});
