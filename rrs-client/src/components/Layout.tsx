import { useTheme } from "@/hooks/use-theme"
import { ThemeBtn } from "./ThemeBtn"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header>
        <ThemeBtn theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main className="flex flex-col justify-center items-center gap-4">{children}</main>
    </>
  )
}
