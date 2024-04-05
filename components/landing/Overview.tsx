// components/landing/Overview.tsx
import ArtbasketIcon from "../misc/ArtbasketIcon";

const Overview = () => {
  return (
    <div className="relative max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-8 px-4 lg:px-8">
      {/* Background image with heavy blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/asrtbasket-background.webp')] bg-cover bg-fixed bg-center blur-3xl"></div>

      {/* Content */}
      <div className="flex-1 z-10">
        <h1 className="text-4xl font-bold text-left">Welcome to ArtbasketAI</h1>
        <p className="mt-4 text-left">
          Let's get started with the AI tools to create content like text,
          comics, and videos faster and less tedious.
        </p>
      </div>
      <div className="flex-1 max-w-md bg-white shadow-lg rounded-lg p-6 z-10">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ArtbasketIcon /> ArtbasketAI
        </h2>
        <h3 className="text-2xl mt-4">
          Get notified when we launch to public use
        </h3>
        <p className="mt-2">
          Get on the waitlist to be one of the first beta testers for our
          product when we launch.
        </p>
        <form className="mt-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Sign me up!!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Overview;
