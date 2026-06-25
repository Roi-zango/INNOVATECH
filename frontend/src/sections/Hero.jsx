import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >

      {/* Background glow system */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 border border-cyan-400/30 rounded-full text-cyan-400 text-sm mb-6"
        >
          Digital Transformation Company — Yaoundé, Cameroon
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Building Modern
          <br />
          Digital Solutions
          <br />
          for Businesses
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-xl text-gray-300 max-w-2xl leading-8"
        >
          INNOVATECH helps businesses build powerful web platforms,
          automate workflows, analyze data and integrate AI-driven systems
          to scale efficiently in a digital world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex gap-4 flex-wrap"
        >

          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition">
            Get Started
          </button>

          <button className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition">
            View Services
          </button>

        </motion.div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl text-center">

          <div>
            <p className="text-3xl font-bold text-cyan-400">10+</p>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-400">2+</p>
            <p className="text-gray-400 text-sm">Clients</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-400">100%</p>
            <p className="text-gray-400 text-sm">Commitment</p>
          </div>

        </div>

      </div>

    </section>
  );
}