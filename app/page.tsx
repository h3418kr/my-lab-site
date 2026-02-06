import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import News from "@/components/News";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Publications from "@/components/Publications";
import Patents from "@/components/Patents";
import Awards from "@/components/Awards";
import CTA from "@/components/CTA";

export default function Home() {
    return (
        <main className="min-h-screen bg-black">
            <Hero />
            <Profile />
            <News />
            <Problem />
            <Solution />
            <Publications />
            <Patents />
            <Awards />
            <CTA />
        </main>
    );
}
