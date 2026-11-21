import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
    <Navbar />
      <main>
        <Hero />
        <Experience />
        <Stack />
        <Projects />
      </main>
      <Footer />
  </>
);
}