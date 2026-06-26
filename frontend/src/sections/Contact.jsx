import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact(){
const [form, setForm] = useState({
  name: "",
  email: "",
  project_type: "",
  message: ""
}); 
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("SUBMIT BUTTON CLICKED");

  console.log("Using backend:", "https://innovatech-backend-p2gv.onrender.com/api/contact/");
alert("Submitting to Render backend");

  try {
    const response = await axios.post(
      "https://innovatech-backend-p2gv.onrender.com/api/contact/",
      form
    );

    console.log(response.data);

    alert("Thank you! Your message has been sent successfully.!");

    setForm({
      name: "",
      email: "",
      project_type: "",
      message: ""
    });

  } catch (error) {
    console.error(error);
    alert("Error sending message");
  }
};

  return (
    <section id="contact" className="py-32 px-6 bg-[#071427]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >

          <p className="text-cyan-400 mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold">
            Let’s Build Something Together
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl">
            Have a project in mind? Reach out and let’s discuss how INNOVATECH can help your business grow.
          </p>

        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-300">
                +237 696 140 964
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Location
              </h3>
              <p className="text-gray-300">
                Yaoundé, Cameroon
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Response Time
              </h3>
              <p className="text-gray-300">
                Usually within 24 hours
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-4"
          >

            <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full p-4 rounded-xl bg-[#0A192F] border border-slate-700 text-white"
/>

            <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="w-full p-4 rounded-xl bg-[#0A192F] border border-slate-700 text-white"
/>

           <input
  type="text"
  name="project_type"
  value={form.project_type}
  onChange={handleChange}
  placeholder="Project Type"
  className="w-full p-4 rounded-xl bg-[#0A192F] border border-slate-700 text-white"
/>

            <textarea
  name="message"
  value={form.message}
  onChange={handleChange}
  placeholder="Project Description"
  rows="5"
  className="w-full p-4 rounded-xl bg-[#0A192F] border border-slate-700 text-white"
/>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/237696140964"
              target="_blank"
              rel="noreferrer"
              className="block text-center border border-cyan-400 hover:bg-cyan-400 hover:text-black py-4 rounded-xl font-semibold transition"
            >
              Contact on WhatsApp
            </a>

          </motion.form>

        </div>

      </div>

    </section>
  );
}