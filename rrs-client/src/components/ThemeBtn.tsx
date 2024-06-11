import { Button } from "@nextui-org/button"
import { MdSunny, MdModeNight } from "react-icons/md";

interface ThemeBtnProps {
	theme: string;
	toggleTheme: () => void;
}

export const ThemeBtn = ({ theme, toggleTheme }: ThemeBtnProps) => {
  return (
    <Button isIconOnly variant="faded" onClick={toggleTheme} className="m-4">
      {theme === "light" ? (
        <MdSunny color="#000000" />
      ) : (
        <MdModeNight color="#FFFFFF" />
      )}
    </Button>
  )
}
