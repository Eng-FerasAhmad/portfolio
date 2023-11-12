import { IoMoon, IoSunny } from "react-icons/io5";
import { ThemeToggleWrapper } from "./styles";
import { color } from "../../style/color";

interface Props {
  clickHandler: () => void;
  isDark: boolean;
}

export default function ThemeToggle({isDark, clickHandler}: Props) {
  return (
    <ThemeToggleWrapper onClick={clickHandler}>
      {isDark ? <IoSunny size={24} color={color.light} /> :
        <IoMoon size={24} color={color.dark} />}
    </ThemeToggleWrapper>
  )
}

