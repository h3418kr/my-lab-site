import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Publications from "@/components/Publications";
import Patents from "@/components/Patents";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Profile />
      <Problem />
      <Solution />
      <Publications />
      <Patents />
      <CTA />
    </main>
  );
}
