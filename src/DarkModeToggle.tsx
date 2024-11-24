import { Moon } from "react-feather";

export const DarkModeToggle: React.FC = (): JSX.Element => {
  return (
    <button
      className="rounded-lg border p-2"
      onClick={() => {
        document.documentElement.classList.toggle("dark");
      }}
    >
      <Moon />
    </button>
  );
};
