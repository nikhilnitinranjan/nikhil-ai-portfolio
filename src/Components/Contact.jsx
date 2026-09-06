import { motion } from "framer-motion";
import {
  Mail,
  BriefcaseBusiness,
  GitFork,
  MapPin,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-medium text-cyan-400">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Connect
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded bg-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Interested in AI/ML, research, machine learning projects,
            collaboration or professional opportunities? Feel free to
            connect with me.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Email */}
          <motion.a
            href="mailto:nikhilnitinranjan@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition hover:-translate-y-2 hover:border-cyan-400/50"
          >
            <Mail className="text-cyan-400" size={28} />

            <h3 className="mt-5 font-semibold">
              Email
            </h3>

            <p className="mt-2 break-all text-sm text-slate-400">
              nikhilnitinranjan@gmail.com
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/nikhil-nitin-ranjan/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition hover:-translate-y-2 hover:border-cyan-400/50"
          >
            <BriefcaseBusiness className="text-cyan-400" size={28} />

            <h3 className="mt-5 font-semibold">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Connect with me professionally
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/nikhilnitinranjan"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition hover:-translate-y-2 hover:border-cyan-400/50"
          >
            <GitFork className="text-cyan-400" size={28} />

            <h3 className="mt-5 font-semibold">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Explore my projects
            </p>
          </motion.a>

        </div>

        {/* Location */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <MapPin size={17} />
          Jalandhar, Punjab, India
        </div>
        <a
          href="tel:+919944074046"
          className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
        >
          <Phone size={17} />
          +91 99440 74046
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/Nikhil%20Nitin%20Ranjan%20PHD.pdf"
            download
            className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Download PhD CV
          </a>
          <a
            href="/Nikhil%20Nitin%20Ranjan%20Admin.pdf"
            download
            className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Download Admin CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;