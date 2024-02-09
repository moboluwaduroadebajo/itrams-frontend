import { useRouter } from "next/router";
import { Navbar } from "@/components/Home";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  const router = useRouter();

  return (
    <main className="px-12">
      <Navbar />
      <HeroSection />
    </main>
  );
}

