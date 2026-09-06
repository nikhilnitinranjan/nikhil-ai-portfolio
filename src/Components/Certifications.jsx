import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Artificial Intelligence",
    provider: "Infosys Springboard",
    category: "Artificial Intelligence",
  },
  {
    title: "Introduction to Data Science",
    provider: "Infosys Springboard",
    category: "Data Science",
  },
  {
    title: "HTML5, CSS3, JavaScript, AngularJS & ReactJS",
    provider: "Infosys Springboard",
    category: "Web Development",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-medium text-cyan-400">
            LEARNING & DEVELOPMENT
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Certifications
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded bg-cyan-400" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">

          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-2 hover:border-cyan-400/50"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Award className="text-cyan-400" size={25} />
                </div>

                <ExternalLink
                  size={18}
                  className="text-slate-600 transition group-hover:text-cyan-400"
                />

              </div>

              <p className="mt-6 text-xs uppercase tracking-wider text-cyan-400">
                {certification.category}
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {certification.title}
              </h3>

              <p className="mt-4 text-sm text-slate-400">
                {certification.provider}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;