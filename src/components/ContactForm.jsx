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
<section
  id="contact"
  className="w-full flex flex-col lg:flex-row px-4 lg:px-10 py-12 gap-10 items-center lg:items-center"
>
  {/* Left side */}
  <div className="flex-[4] flex flex-col justify-center items-start text-[#e4d9d1] space-y-4">
    <h2 className="text-6xl font-bold text-[#4e1f2f]">AT</h2>
    <h2 className="font-body text-3xl font-bold">Let's Connect!</h2>
    <p className="font-body text-base">
      I’m currently open to opportunities and collaborations.<br />
      Feel free to reach out using the contact form.
    </p>
  </div>

  {/* Right side - Transparent Contact Form */}
  <div className="flex-[6] flex justify-end items-center"> {/* items-center centers form vertically */}
    <form
      className="w-full max-w-2xl bg-transparent rounded-2xl space-y-4"
      onSubmit={handleSubmit}
    >

      {/* Inputs */}
      <div className="flex gap-4 items-stretch h-full mt-8">
        {/* Left column: Name & Email */}
        <div className="flex flex-col gap-2.5 flex-1">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="
              font-body w-full px-3 py-2
              bg-[#fbfaf8]/30
              border-b-2
              text-[#4e1f2f]
              placeholder-[#4e1f2f]/60 
              rounded-md
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
              font-body w-full px-3 py-2
              bg-[#fbfaf8]/30
              border-b-2
              text-[#4e1f2f]
              placeholder-[#4e1f2f]/60 
              rounded-md
              transition
            "
            required
          />
        </div>

        {/* Right column: Message */}
        <div className="flex-1 flex flex-col h-full">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="
              font-body w-full h-full min-h-[95px] px-3 py-2
              bg-[#fbfaf8]/30
              border-b-2
              text-[#4e1f2f]
              placeholder-[#4e1f2f]/60 
              rounded-md
              transition
            "
            required
          />
        </div>
        
      </div>
      {/* Heading + Button Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-body text-[#e4d9d1] font-extrabold tracking-wider leading-tight text-3xl">
          (CONTACT ME)
        </h2>
        <button
          type="submit"
          className="
            px-8 py-2 rounded-xl
            bg-[#4e1f2f] text-[#e4d9d1] font-semibold
            hover:bg-[#3b0f1b]
            hover:scale-105 hover:-translate-y-1
            transition transform duration-300 ease-in-out
            shadow-lg hover:shadow-xl cursor-pointer
          "
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>
  );
}