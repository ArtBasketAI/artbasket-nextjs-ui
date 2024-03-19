import Navbar from "../components/Navbar";

// pages/features.tsx
const Features = () => {
    return (
        <>
            <Navbar />
            <main className="pt-[4rem]"></main> {/* Add padding below Navbar */}  
            <div className="max-w-4xl mx-auto mt-10">
                <h1 className="text-4xl font-bold text-center">Features</h1>
                <ul className="mt-4">
                    <li>Story Writing Assistant</li>
                    <li>Comic Creation Tool</li>
                    <li>Video Production Suite</li>
                </ul>
            </div>
        </>
    );
};

export default Features;
