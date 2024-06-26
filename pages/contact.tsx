import Navbar from "../components/Navbar";

// pages/contact.tsx
const Contact = () => {
    return (
        <>
            <Navbar />
            <main className="pt-[4rem]"></main> {/* Add padding below Navbar */}  
            <div className="max-w-4xl mx-auto mt-10">
                <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                <p className="mt-4 text-center">Have questions or want to get in touch? Fill out the form below, and we will get back to you as soon as possible.</p>
            </div>
        </>
    );
};

export default Contact;
