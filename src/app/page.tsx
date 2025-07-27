import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Services from "../components/services";
import About from "../components/techStack";
import Contact from "../components/contact";
import Footer from "../components/footer";
import SocialLinks from "../components/social-links";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-gray-800 to-black text-white">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
