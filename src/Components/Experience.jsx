const experiences = [
  {
    role: "Senior Assistant – Academic Administration",
    organization: "Lovely Professional University • Jalandhar, Punjab",
    period: "Nov 2024 – Present",
    details: "Manage OBP and UMS activities for academic leadership, assign and monitor OBP metrics, coordinate HODs, HOSs and faculty, prepare reports and meeting documentation, support inspections and compliance monitoring, and maintain academic data for performance tracking.",
  },
  {
    role: "Business Development Trainee",
    organization: "Ediglobe • Bangalore, Karnataka",
    period: "Dec 2024 – May 2025",
    details: "Generated leads through market research, cold calling, and email outreach; maintained CRM records; prepared proposals and presentations; coordinated client requirements, follow-ups, meetings, and internal business support.",
  },
  {
    role: "Web Developer Intern",
    organization: "Infosys Springboard • Remote",
    period: "Mar 2024 – Jun 2024",
    details: "Developed a Seeker content search and enrollment application using Angular, Tailwind CSS, and Tailblock, with multilingual content, PWA features, Beckn Protocol integration, testing, debugging, and performance improvements.",
  },
];

const Experience = () => (
  <section id="experience" className="border-t border-slate-800 px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Experience</p>
      <h2 className="text-3xl font-bold md:text-4xl">Professional experience</h2>
      <div className="mt-10 space-y-8">
        {experiences.map((experience) => (
          <article key={experience.role} className="border-l border-cyan-500/40 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p className="text-sm text-cyan-400">{experience.period}</p>
            </div>
            <p className="mt-2 text-slate-300">{experience.organization}</p>
            <p className="mt-3 max-w-4xl leading-7 text-slate-400">{experience.details}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;