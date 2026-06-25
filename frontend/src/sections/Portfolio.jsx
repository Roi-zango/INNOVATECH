import { motion } from "framer-motion";

export default function Portfolio() {

  const projects = [

    {
      title: "INNOVATECH Analytics Dashboard",
      type: "Demo Project",
      description:
        "Modern analytics dashboard with business KPIs, charts and insights visualization.",
    },

    {
      title: "Inventory Management System",
      type: "Demo Project",
      description:
        "Full business system for stock, sales tracking and reporting automation.",
    },

    {
      title: "School Management Platform",
      type: "Client Project",
      description:
        "Educational platform for managing students, teachers and academic processes.",
    },

    {
      title: "E-commerce Platform",
      type: "Client Project",
      description:
        "Online store system with product management, cart and checkout workflow.",
    },

  ];

  return (

    <section id="portfolio" className="py-32 px-6 bg-[#071427]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-cyan-400 mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Our Work & Experience
          </h2>

        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4, delay: index * 0.1 }}

              whileHover={{ scale: 1.03 }}

              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"

            >

              <p className="text-cyan-400 text-sm mb-2">
                {project.type}
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}