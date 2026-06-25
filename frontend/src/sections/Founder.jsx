import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section id="founder" className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-400 mb-4">
            Founder
          </p>

          <h2 className="text-5xl font-bold">
            Built by a Developer, Driven by Vision
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <p className="text-gray-300 text-lg leading-8">
              I am a Computer Science graduate specializing in Information Systems Management,
              with a strong focus on Data, Artificial Intelligence, and Digital Transformation.
            </p>

            <p className="text-gray-300 text-lg leading-8">
              I founded INNOVATECH with the goal of helping businesses in Cameroon and internationally
              adopt modern digital systems that improve efficiency, automate operations, and unlock data value.
            </p>

            <p className="text-gray-300 text-lg leading-8">
              My approach is simple: build practical, scalable and intelligent systems that create real business impact.
            </p>

          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-cyan-400 transition"
          >

            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-6"></div>

            <h3 className="text-2xl font-semibold">
              Founder — INNOVATECH
            </h3>

            <p className="text-gray-400 mt-2">
              Yaoundé, Cameroon
            </p>

            <p className="text-gray-400 mt-2">
              Digital Solutions Developer
            </p>

            {/* contact highlight */}
            <div className="mt-6 text-cyan-400 font-semibold">
              WhatsApp: +237 696 140 964
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}