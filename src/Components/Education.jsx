const Education = () => (
  <section id="education" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Education</p>
      <h2 className="text-3xl font-bold md:text-4xl">Academic foundation</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          ["PhD in Computer Applications", "Artificial Intelligence and Machine Learning", "2025 – Present"],
          ["Master of Computer Applications", "Web Development • CGPA: 75.4", "2022 – 2024"],
          ["Bachelor of Computer Applications", "Cybersecurity • CGPA: 79", "2019 – 2022"],
        ].map(([degree, focus, period]) => (
          <article key={degree} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold">{degree}</h3>
            <p className="mt-3 text-slate-400">{focus}</p>
            <p className="mt-4 text-sm text-cyan-400">{period}</p>
            <p className="mt-2 text-sm text-slate-500">Lovely Professional University</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;