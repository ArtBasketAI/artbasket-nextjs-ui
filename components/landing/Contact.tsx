// components/landing/Contact.tsx

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-left">Contact Us</h1>
      <div>
        <p className="mt-4 text-center">
          Have questions or want to get in touch? Fill out the form below, and
          we will get back to you as soon as possible.
        </p>
      </div>
      <div className="flex-1 max-w-md bg-white shadow-lg rounded-lg p-6 z-10 max-w-md mx-auto mt-8">
        {/* Add frame around the form */}
        <form action="https://formspree.io/f/xoqrpnny" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gray-700 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
