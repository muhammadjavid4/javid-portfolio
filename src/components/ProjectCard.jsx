import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="
        bg-slate-900/80 backdrop-blur-lg
        border border-white/10
        rounded-2xl p-6
        hover:border-sky-400/40 transition
      "
    >
      <h3 className="text-xl font-bold text-sky-400">
        {project.title}
      </h3>

      <p className="text-gray-300 mt-3">
        {project.shortDesc}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-6">
        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-gray-300 hover:text-sky-400"
        >
          <FaGithub /> <span className="text-sm">Code</span>
        </a>

        {/* Live */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-green-400"
          >
            <FaArrowUpRightFromSquare />
            <span className="text-sm">Live</span>
          </a>
        )}

        <Link
          to={`/project/${project.id}`}
          className="ml-auto text-sky-400 text-sm underline"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
