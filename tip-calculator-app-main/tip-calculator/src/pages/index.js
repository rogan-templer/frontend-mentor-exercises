
import { Inter } from "next/font/google";
import MainTile from "../components/Calculator/mainTile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1>SPLI</h1>
      <h1>TTER</h1>
      <MainTile />
    </main>
  );
}
