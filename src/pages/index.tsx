import Image from "next/image";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { CategoryContainer } from "@/components/CategoryContainer";
import { Desktop } from "@/components/Desktop";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const age: number = 19;
  console.log(age);
  return (
    <div>
      <div>
        <TopBar />
        {/* <CategoryContainer /> */}
        <Desktop />

        {/* <Footer /> */}
      </div>
    </div>
  );
}
