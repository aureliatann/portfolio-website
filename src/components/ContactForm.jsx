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
<section id="contact" className="w-full flex flex-col lg:flex-row px-4 lg:px-10 py-12 gap-10 items-center">

  {/* Left side - Footer / Info (smaller, left-aligned) */}
  <div className="flex-[3] flex flex-col justify-center items-start text-[#e4d9d1] space-y-4">
    <h2 className="text-6xl font-bold text-[#4e1f2f]">AT</h2>
    <h2 className="font-body text-3xl font-bold">Let's Connect!</h2>
    <p className="font-body text-base">
      I’m currently open to opportunities and collaborations.<br />
      Feel free to reach out using the contact form.
    </p>
  </div>

{/* Right side - Transparent Contact Form (5/8) */}
<div className="flex-[5] flex justify-end items-start">
  <form
    className="w-full lg:w-5/6 xl:w-4/5 bg-transparent rounded-2xl space-y-2.5"
    onSubmit={handleSubmit}
  >
    {/* Heading */}
    <h2 className="font-body text-[#4e1f2f] font-heading font-extrabold tracking-wider leading-tight drop-shadow-lg text-right text-5xl font-bold">
      (CONTACT ME)
    </h2>

    {/* Inputs */}
    <div className="space-y-2.5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="
          font-body w-full px-0 py-2
          border-b-2 border-[#e4d9d1]/50
          bg-transparent
          text-[#e4d9d1] placeholder-[#e4d9d1]/70
          focus:border-[#e4d9d1] focus:ring-0
          outline-none
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
          font-body w-full px-0 py-2
          border-b-2 border-[#e4d9d1]/50
          bg-transparent
          text-[#e4d9d1] placeholder-[#e4d9d1]/70
          focus:border-[#e4d9d1] focus:ring-0
          outline-none
          transition
        "
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        className="
          font-body w-full px-0 py-2
          border-b-2 border-[#e4d9d1]/50
          bg-transparent
          text-[#e4d9d1] placeholder-[#e4d9d1]/70
          focus:border-[#e4d9d1] focus:ring-0
          outline-none
          transition
        "
        required
      />
    </div>

    {/* Button */}
    <div className="flex justify-end mt-3">
      <button
        type="submit"
        className="
          px-8 py-2 rounded-xl
          bg-[#4e1f2f] text-[#e4d9d1] font-semibold 
          hover:bg-[#3b0f1b]
          transition
          shadow-lg hover:shadow-xl
        "
      >
        Send Message
      </button>
    </div>

    {/* Status Message */}
    <p className="text-right text-sm text-[#e4d9d1] mt-2">{status}</p>
  </form>
</div>

</section>
  );
}