import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="md:min-h-[88vh] bg-zinc-900 text-zinc-200 flex flex-col items-center justify-center ubuntu-text">
      <div className="max-w-4xl w-full bg-zinc-800 rounded-lg shadow-lg p-4 md:flex md:space-x-4 justify-center items-center">
        <div className="md:w-2/3 p-4">
          <h2 className="text-2xl font-bold text-green-400 mb-3 roboto">
            Let's work together
          </h2>
          <p className="text-zinc-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nesciunt
            sit illo esse commodi.
          </p>
          <form className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
              />
            </div>
            <select className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400">
              <option>Select a service</option>
              <option>Full stack Development</option>
              <option>Web Development</option>
              <option>Front-end Development</option>
              <option>UI/UX Design</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Type your message here."
              className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400 h-32"
            />
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-zinc-900 rounded hover:bg-green-600 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="md:w-1/3 h-full   mt-6 md:mt-0 space-y-4">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-green-400" />
            <div>
              <p className="text-zinc-400">Phone</p>
              <p>+91 9216363747</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-green-400" />
            <div>
              <p className="text-zinc-400">Email</p>
              <p>sharmahimanshu6478@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-green-400" />
            <div>
              <p className="text-zinc-400">Address</p>
              <p>302033 Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
