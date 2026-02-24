import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5050/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "cors",
      });
      const data = await res.json();
      if (data.status === "success") {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <form className="w-full bg-white/80 p-10 rounded-2xl shadow-xl border border-gray-200 space-y-6">

    {/* Heading */}
      <h2 className="text-[#3a000c] font-heading font-extrabold tracking-wider leading-tight drop-shadow-lg text-center text-5xl sm:text-6xl font-bold">
        Contact Me
      </h2>
      
      {/* Inputs */}
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full px-4 py-3
            border border-gray-300 rounded-xl 
            bg-white/70 backdrop-blur-sm
            focus:ring-2 focus:ring-[#7a0022]
            focus:border-transparent
            transition
          "
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full px-4 py-3
            border border-gray-300 rounded-xl 
            bg-white/70 backdrop-blur-sm
            focus:ring-2 focus:ring-[#7a0022]
            focus:border-transparent
            transition
          "
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="
            w-full px-4 py-3
            border border-gray-300 rounded-xl 
            bg-white/70 backdrop-blur-sm
            focus:ring-2 focus:ring-[#7a0022]
            focus:border-transparent
            transition
          "
          required
        />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="
            px-6 py-2.5 rounded-xl
            bg-[#3a000c] text-white font-semibold 
            hover:bg-[#590016]
            transition
            shadow-lg hover:shadow-xl
          "
        >
          Send Message
        </button>
      </div>

      {/* Status Message */}
      <p className="text-center text-sm text-gray-700">{status}</p>
    </form>
  );
}