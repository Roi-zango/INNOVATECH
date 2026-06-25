import { motion } from "framer-motion";
import { FaGlobe, FaCode, FaChartBar, FaRobot } from "react-icons/fa";

export default function Services() {

  const services = [
    {
      icon: <FaGlobe />,
      title: "Web Development",
      description:
        "Modern, responsive and high-performance websites for businesses and startups."
    },
    {
      icon: <FaCode />,
      title: "Custom Software",
      description:
        "Tailored business systems and internal tools to automate operations."
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights for better decision making."
    },
    {
      icon: <FaRobot />,
      title: "AI & Automation",
      description:
        "Integrate AI and automation to improve productivity and reduce manual work."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#071427]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 mb-4">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mb-16">
            What We Deliver
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >

              <div className="text-cyan-400 text-4xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}