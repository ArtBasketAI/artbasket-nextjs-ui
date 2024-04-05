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
          <section className="min-h-screen flex flex-col justify-start items-center p-4 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/artbasket-background.webp')] bg-cover bg-fixed bg-center blur-3xl z-0"></div>
            <div className="z-10 w-full">
              <Overview />
            </div>
          </section>
          <section className="min-h-screen flex flex-col justify-start items-center p-4 relative">
            <div className="z-10 w-full">
              <Features />
            </div>
          </section>
          <section className="min-h-screen flex flex-col justify-start items-center p-4 relative">
            <div className="z-10 w-full">
              <About />
            </div>
          </section>
          <section className="min-h-screen flex flex-col justify-start items-center p-4 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/landscape.webp')] bg-cover bg-fixed bg-center blur-3xl z-0"></div>
            <div className="z-10 w-full">
              <Contact />
            </div>
          </section>
        </main>
      </Navbar>
      <ScrollToTopButton />
    </>
  );
};

export default Home;
