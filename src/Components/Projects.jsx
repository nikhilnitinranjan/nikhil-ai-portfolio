const projects = [
  ["Loan Prediction using Machine Learning", "Built a loan risk prediction solution using financial data, preprocessing, feature engineering, Random Forest, Gradient Boosting, and evaluation with accuracy, precision, recall, and F1-score.", "Python • Machine Learning • Data Analysis"],
  ["Hospital Management System", "Developed a MERN application with patient and administrator roles, JWT authentication, role-based access control, appointments, doctor availability, and patient history tracking.", "React.js • Node.js • Express.js • MongoDB"],
  ["Seeker Progressive Web Application", "Developed a content search and enrollment application during a Web Developer Internship, including responsive Angular components, multilingual support, and PWA features.", "Angular • Tailwind CSS • PWA • Beckn Protocol"],
];

const Projects = () => (
  <section id="projects" className="border-t border-slate-800 px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Projects</p>
      <h2 className="text-3xl font-bold md:text-4xl">Selected work</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map(([title, description, technologies]) => (
          <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{description}</p>
            <p className="mt-5 text-sm font-medium text-cyan-400">{technologies}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;