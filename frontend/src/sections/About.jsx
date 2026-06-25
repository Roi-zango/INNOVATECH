import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 mb-4">
            About INNOVATECH
          </p>

          <h2 className="text-5xl font-bold mb-12">
            We Build Technology That Solves Real Problems
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-8 text-lg">
              INNOVATECH is a digital solutions company based in Yaoundé, Cameroon.
              We specialize in building modern web applications, business systems,
              and AI-powered solutions for both local and international clients.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              Our goal is to help businesses transition into the digital era by
              creating scalable, efficient, and intelligent systems that improve
              productivity and decision-making.
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              We focus on practical solutions — not just code — but real systems
              that create measurable business value.
            </p>
          </motion.div>

          {/* Right side cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                Mission
              </h3>
              <p className="text-gray-300">
                Empower businesses through modern digital solutions and automation.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                Vision
              </h3>
              <p className="text-gray-300">
                Become a leading digital transformation company in Africa and beyond.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                Approach
              </h3>
              <p className="text-gray-300">
                We combine software engineering, data analysis and AI to deliver results-driven systems.
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}