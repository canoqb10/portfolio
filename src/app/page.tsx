import { Navbar, Footer } from "@/components/layout";
import { Hero, About, Experience, Skills, Projects, Education, Achievements, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-border-soft to-transparent" />

        <About />

        <div className="h-px bg-linear-to-r from-transparent via-border-dim to-transparent" />

        <Experience />

        <div className="h-px bg-linear-to-r from-transparent via-border-dim to-transparent" />

        <Skills />

        <div className="h-px bg-linear-to-r from-transparent via-border-dim to-transparent" />

        <Achievements />

        <div className="h-px bg-linear-to-r from-transparent via-border-dim to-transparent" />

        <Projects />

        <div className="h-px bg-linear-to-r from-transparent via-border-dim to-transparent" />

        <Education />

        <div className="h-px bg-linear-to-r from-transparent via-border-dim to-transparent" />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
