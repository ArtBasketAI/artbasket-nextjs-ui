// pages/docs.tsx
import Navbar from "../components/Navbar";

const Docs = () => {
  return (
    <>
      <Navbar />
      <main>
        {" "}
        {/* Add padding below Navbar */}
        <iframe
          src="https://docs.artbasket.ai"
          width="100%"
          height="100%"
          style={{ minHeight: "100vh" }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </main>
    </>
  );
};

export default Docs;
