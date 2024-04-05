// components/landing/Overview.tsx
import ArtbasketIcon from "../misc/ArtbasketIcon";

const Overview = () => {
  return (
    <div className="relative max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-8 px-4 lg:px-8">
      {/* Content */}
      <div className="flex-1 z-10">
        <h1 className="text-4xl font-bold text-left">Welcome to ArtbasketAI</h1>
        <br />
        <h2 className="text-2xl text-left">Unleash Your Creativity</h2>
        <br />
        <ul className="list-disc list-inside">
          <li>
            Artbasket.ai is your ultimate destination for creating, sharing, and
            exploring the world of comics.
          </li>
          <li>
            Let's help you get started with the AI tools to create content like
            text, comics, and videos faster and less tedious.
          </li>
        </ul>
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
            className="w-full p-2 bg-gray-700 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-800"
          >
            Sign me up!!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Overview;
