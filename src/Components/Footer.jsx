const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        <div>
          <p className="text-lg font-bold">
            Nikhil<span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            AI/ML PhD Researcher & Developer
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Nikhil Nitin Ranjan. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;