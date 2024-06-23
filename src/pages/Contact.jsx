import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact({ text }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_9frkmmu",
        "template_0p0rhi5",
        form.current,
        "_LfSFPhbG0hWC44tW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="lg:min-h-[88vh] bg-zinc-900 text-zinc-200 flex flex-col items-center justify-center ubuntu-text">
      <div className=" w-full bg-zinc-800 rounded-lg shadow-lg p-4 lg:flex lg:space-x-4 justify-center items-center">
        <div className="lg:w-2/3 p-4">
          <h2 className="text-2xl font-bold text-green-400 mb-3 roboto">
            {text}
          </h2>
          <p className="text-zinc-400 mb-4">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new ideas and opportunities. Feel free to reach out, and
            let's connect! Together, we can create something amazing.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
                required
              />
            </div>
            <select
              name="service"
              className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400"
              required
            >
              <option value="">Select a service</option>
              <option value="Full stack Development">
                Full stack Development
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Front-end Development">
                Front-end Development
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Type your message here."
              className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:border-green-400 h-32"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-zinc-900 rounded hover:bg-green-600 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
            {submitMessage && (
              <p className="text-center text-green-400">{submitMessage}</p>
            )}
          </form>
        </div>
        <div className="lg:w-1/3 h-full   mt-6 lg:mt-0 space-y-4">
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
              <p className="text-zinc-400 ">Email</p>
              <p className="flex text-wrap">sharmahimanshu6478@gmail.com</p>
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
