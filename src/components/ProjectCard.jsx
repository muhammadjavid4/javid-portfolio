import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowUpRightFromSquare, FaFolderOpen } from "react-icons/fa6";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex flex-col border border-line/10 bg-ink hover:border-amber/50 hover:shadow-glow transition-all"
    >
      <div className="flex items-center gap-2 px-5 py-3 border-b border-line/10 font-mono text-xs text-paper-dim">
        <FaFolderOpen className="text-amber" />
        {project.id}/
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-paper leading-snug">
          {project.title}
        </h3>

        <p className="mt-3 text-paper-dim text-sm leading-relaxed flex-1">
          {project.shortDesc}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-1 border border-line/10 text-paper-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6 pt-5 border-t border-line/10 font-mono text-xs">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-paper-dim hover:text-amber transition-colors"
          >
            <FaGithub /> code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-paper-dim hover:text-sage transition-colors"
            >
              <FaArrowUpRightFromSquare /> live
            </a>
          )}

          <Link
            to={`/project/${project.id}`}
            className="ml-auto text-amber hover:text-amber-soft transition-colors"
          >
            details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
