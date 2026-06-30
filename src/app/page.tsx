import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageSections from "@/components/home/PageSections";
import Hero from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-x-hidden">
        <Hero />
        <PageSections />
      </main>

      <Footer />
    </>
  );
}
