import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Musicians } from "@/components/Musicians";
import { Repertoire } from "@/components/Repertoire";
import { SocialQR } from "@/components/SocialQR";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Musicians />
      <Repertoire />
      <SocialQR />
    </>
  );
}
