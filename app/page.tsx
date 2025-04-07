import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import GetApp from "@/components/GetApp";
import Image from "next/image";
import Camp from "@/components/Camp";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
