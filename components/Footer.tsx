// components/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-white shadow-inner mt-8">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <p className="text-gray-700 text-center">&copy; {new Date().getFullYear()} ArtBasketAI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
