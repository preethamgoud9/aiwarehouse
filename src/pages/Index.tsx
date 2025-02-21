
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="work">
        <Projects />
      </section>
      <section id="about">
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
              We are a creative studio dedicated to crafting exceptional digital experiences. 
              Our team combines innovative design with cutting-edge technology to create 
              meaningful solutions for our clients.
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
