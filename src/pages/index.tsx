import { useRouter } from "next/router";
import {
  About,
  Footer,
  HeroSection,
  JoinTrain,
  Navbar,
} from "@/components/Home";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <JoinTrain />
      <Footer />
    </main>
  );
}

