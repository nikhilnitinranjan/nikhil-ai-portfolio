const skills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Python",
  "Data Analysis",
  "Angular",
  "React.js",
  "Node.js",
  "Progressive Web Applications",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "OBP Management",
  "UMS",
  "Academic Reporting",
  "CRM & MIS",
];

const Skills = () => (
  <section id="skills" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Skills</p>
      <h2 className="text-3xl font-bold md:text-4xl">Technical and professional skills</h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;