// pages/index.tsx
import Navbar from "../components/Navbar";
import Overview from "../components/landing/Overview";
import Features from "../components/landing/Features";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Navbar>
        <main>
          <section className="min-h-screen flex flex-col justify-start items-center p-4">
            <Overview />
          </section>
          <section className="min-h-screen flex flex-col justify-start items-center p-4">
            <Features />
          </section>
          <section className="min-h-screen flex flex-col justify-start items-center p-4">
            <About />
          </section>
          <section className="min-h-screen flex flex-col justify-start items-center p-4">
            <Contact />
          </section>
        </main>
      </Navbar>
      <ScrollToTopButton />
    </>
  );
};

export default Home;
