import Navbar from "../components/Navbar";

// pages/about.tsx
const About = () => {
    return (
        <>
            <Navbar />
            <main className="pt-[4rem]"></main> {/* Add padding below Navbar */}   
            <div className="max-w-4xl mx-auto mt-10">
                <h1 className="text-4xl font-bold text-center">About ArtBasketAI</h1>
                <p className="mt-4">
                    ArtBasketAI is a platform designed to empower content creators by providing advanced AI tools in an easy-to-use interface. Our goal is to make the production of content like text, comics, and videos faster and less tedious.
                </p>
            </div>
        </>
    );
};

export default About;
