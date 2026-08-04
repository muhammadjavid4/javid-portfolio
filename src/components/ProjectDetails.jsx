import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { FaGithub, FaArrowUpRightFromSquare, FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="min-h-screen bg-ink text-paper flex items-center justify-center px-8">
        <div className="text-center">
          <p className="font-mono text-sage">404</p>
          <p className="mt-3 text-paper-dim">Project not found.</p>
          <Link to="/" className="mt-6 inline-block text-amber hover:text-amber-soft">
            ← back home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-ink bg-grid-pattern bg-fade-vignette px-6 md:px-10 py-24">
      <div className="ambient-blob w-96 h-96 bg-amber -top-20 -left-20 animate-float-slow" />
      <div className="ambient-blob w-80 h-80 bg-sage bottom-0 -right-16 animate-float" />

      <div className="relative max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-paper-dim hover:text-amber transition-colors"
        >
          <FaArrowLeft /> back to projects/
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 border border-line/10 bg-ink-soft"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line/10 font-mono text-xs text-paper-dim">
            <span className="w-2 h-2 rounded-full bg-amber" />
            {project.id}/README.md
          </div>

          <div className="p-6 md:p-10">
            <h1 className="font-display text-3xl md:text-4xl text-paper">
              {project.title}
            </h1>

            <p className="mt-6 text-paper-dim leading-relaxed whitespace-pre-line">
              {project.description.trim()}
            </p>

            <div className="mt-10">
              <p className="font-mono text-xs text-sage tracking-wide mb-4">
                // technologies used
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1.5 border border-line/10 text-paper-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="font-mono text-xs text-sage tracking-wide mb-4">
                // key features
              </p>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-paper-dim text-sm">
                    <span className="text-sage font-mono">+</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 pt-8 border-t border-line/10">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-line/10 text-paper hover:border-amber hover:text-amber transition-colors font-mono text-sm"
              >
                <FaGithub /> view code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-amber text-ink font-mono text-sm font-medium hover:bg-amber-soft transition-colors"
                >
                  <FaArrowUpRightFromSquare /> live demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
