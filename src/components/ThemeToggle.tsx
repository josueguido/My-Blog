/*
import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

export default function ThemeToggle(): FunctionalComponent {
 const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

 const handleClick = () => {
   setTheme(theme === "light" ? "dark" : "light");
 };

 useEffect(() => {
   if (theme === "dark") {
     document.documentElement.classList.add("dark");
   } else {
     document.documentElement.classList.remove("dark");
   }
   localStorage.setItem("theme", theme);
 }, [theme]);

 return (
   <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
 );
}

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);

if (!isMounted) {
  return <null />; // or null;
}

return <button>{theme === "light" ? "🌙" : "🌞"}</button>;
*/
