
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
            <div className="space-y-6 text-gray-600 text-lg max-w-3xl mx-auto">
              <p className="text-center">
                We are a creative studio pioneering the Software 2.0 revolution, where neural networks and AI aren't just tools - they're the building blocks of modern software development.
              </p>
              <p className="text-center">
                Our approach transcends traditional programming by leveraging machine learning to create self-optimizing systems. We don't just write code; we teach computers to discover optimal solutions through data and neural architectures, delivering more robust and adaptable software solutions.
              </p>
              <p className="text-center">
                By embracing this paradigm shift, we're helping businesses transition from explicit programming to neural network-driven development, making software more efficient, maintainable, and capable of solving previously intractable problems.
              </p>
            </div>
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
