import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import useColorMode from "../hooks/useColorMode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <button
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        className="bg-red-500 dark:bg-sky-600 text-black dark:text-white"
      >
        TOGGLE THEME
      </button>
    </div>
  );
}
