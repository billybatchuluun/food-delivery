import Image from "next/image";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { CategoryContainer } from "@/components/CategoryContainer";
import { Hero } from "@/components/Hero";
import { json } from "stream/consumers";
import { instance } from "@/components/instance";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ foodData }: { foodData: any }) {
  const age: number = 19;
  console.log(age);
  return (
    <div>
      <div>
        <TopBar />
        {/* <CategoryContainer /> */}
        <Hero foodData={foodData} />
        <Footer />
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await instance.get("/getFoods");
  const foodData = res.data;
  return {
    props: { foodData },
  };
};
