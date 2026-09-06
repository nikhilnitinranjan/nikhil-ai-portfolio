import { motion } from "framer-motion";
import {
  GitFork,
  BriefcaseBusiness,
  Mail,
  ArrowDown,
  Download,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-6xl w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-cyan-400 font-medium">
              AI/ML PhD Researcher & Academic Professional
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nikhil Nitin
              <span className="block text-cyan-400">
                Ranjan
              </span>
            </h1>

            <h2 className="mt-6 text-xl md:text-2xl text-slate-300">
              AI/ML • Academic Administration • Web Development
            </h2>

            <p className="mt-6 max-w-xl text-slate-400 leading-7">
              PhD researcher in Computer Applications at Lovely Professional
              University, with experience across artificial intelligence,
              academic operations, data analysis, and web application development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects
                <ArrowDown size={18} />
              </a>

              <a
                href="/Nikhil%20Nitin%20Ranjan%20PHD.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Download CV
                <Download size={18} />
              </a>

            </div>

            {/* Social */}
            <div className="mt-8 flex gap-5">

              <a
                href="https://github.com/nikhilnitinranjan"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                <GitFork size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-nitin-ranjan/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                <BriefcaseBusiness size={24} />
              </a>

              <a
                href="mailto:nikhilnitinranjan@gmail.com"
                className="text-slate-400 hover:text-cyan-400"
              >
                <Mail size={24} />
              </a>

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

              <div className="relative flex h-72 w-72 md:h-96 md:w-96 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-900">

                <div className="text-center">

                  <div className="text-7xl font-bold text-cyan-400">
                    AI
                  </div>

                  <div className="mt-2 text-slate-400">
                    Machine Learning
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    Research • Data • Intelligence
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;