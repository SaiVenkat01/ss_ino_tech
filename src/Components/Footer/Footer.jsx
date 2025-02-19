import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const SERVICE_ID = "service_xsswb5d"
const TEMPLATE_ID = "template_8kk5yrf"
const PUBLIC_KEY = "9xcvQztuGTLs3K5a1"

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="Footer" className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20 px-30 md:px-20 lg:px-60">
        <div className="w-full md:w-1/2 text-center md:text-left">
            <div>
                <h1 className='py-4 text-3xl sm:text-4xl md:text-6xl font-bold'>Contact</h1>
                <h2 className='text-sm md:text-2xl font-normal'>Feel free to reach out</h2>
            </div>
            <div>
                <ul className="py-10 text-sm md:text-xl">
                <li className="flex gap-2 items-center justify-center md:justify-start">
                  <MdOutlineEmail size={20} />
                  myemail@gmail.com
                </li>
                <li className="flex gap-2 items-center justify-center md:justify-start">
                  <CiLinkedin />
                  linkdlin.com/username
                </li>
                <li className="flex gap-2 items-center justify-center md:justify-start">
                  <FaGithub />
                  github.com/username
                </li>
              </ul>
            </div> 
        </div>
                
      <RevealOnScroll>
        <div className="w-full md:w-1/2 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-100 md:px-50 ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-black/5 border border-black/10 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Footer;