import { Inter } from "next/font/google";
import MainTile from "../components/Calculator/mainTile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 bg-teal-100 ${inter.className}`}
    >
      <div className="p-8">
        <h1 className="font-custom font-bold text-2xl">SPLI</h1>
        <h1 className="font-custom font-bold text-2xl">TTER</h1>
      </div>
      <MainTile />
    </main>
  );
}
