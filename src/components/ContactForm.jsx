import { useState } from "react";

// -------------------- INPUT CLASS --------------------
const inputClass = `
  font-body w-full px-3 py-2
  bg-[#fbfaf8]/30
  border-b-2
  text-[#4e1f2f]
  placeholder-[#4e1f2f]/60
  rounded-md
  transition
`;

// -------------------- CONTACT FORM --------------------
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section
      id="contact"
      className="
        w-full flex flex-col lg:flex-row px-4 lg:px-10 py-6 gap-10
        items-center lg:items-center
      "
    >
      {/* LEFT SIDE */}
      <div className="
        flex flex-col flex-1 w-full text-[#e4d9d1] space-y-4
        text-center lg:text-left 
        items-center lg:items-start
      ">
        <h2 className="text-6xl font-bold text-[#4e1f2f] scale-y-135">AT</h2>
        <h2 className="font-body text-3xl font-bold">Let's Connect!</h2>
        <p className="font-body text-base">
          I'm currently open to opportunities and collaborations.<br />
          Feel free to reach out using the contact form.
        </p>
      </div>

      {/* RIGHT SIDE — FORM */}
      <div className="flex flex-1 w-full justify-center lg:justify-end">
        <form
          onSubmit={handleSubmit}
          className="
            w-full 
            max-w-2xl 
            bg-transparent 
            rounded-2xl 
            space-y-4
          "
        >
          {/* STATUS MSG */}
          {status && (
            <p className="text-[#e4d9d1] text-center font-body text-sm transition-opacity duration-300">
              {status}
            </p>
          )}

          {/* INPUTS */}
          <div className="flex gap-4 items-start mt-3 flex-col sm:flex-row">
            {/* Left column: Name & Email */}
            <div className="flex flex-col gap-2.5 flex-1 w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            {/* Right column: Message */}
            <div className="flex-1 flex flex-col w-full">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} min-h-[95px]`}
                required
              />
            </div>
          </div>

          {/* Heading + Button */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-body text-[#e4d9d1] font-extrabold tracking-wider leading-tight text-3xl">
              (CONTACT ME)
            </h2>

            <button
              type="submit"
              className="
                px-8 py-2 rounded-xl
                bg-[#4e1f2f] text-[#e4d9d1] font-semibold
                transition transform duration-300 ease-in-out
                hover:bg-[#3b0f1b] hover:scale-105 hover:-translate-y-1
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