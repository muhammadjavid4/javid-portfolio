import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <p className="text-white p-10">
        Project not found
      </p>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white px-8 py-20">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-sky-400"
        >
          {project.title}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-300 leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* TECH STACK */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-sky-400">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-3 mt-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-slate-800 text-gray-300 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-sky-400">
            Key Features
          </h3>

          <ul className="mt-4 space-y-2 text-gray-400 list-disc ml-6">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-12 flex flex-wrap gap-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              px-6 py-3 rounded-xl
              bg-slate-800 hover:bg-slate-700
              text-white
            "
          >
            <FaGithub /> View Code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-green-500 to-emerald-400
                text-black font-semibold
              "
            >
              <FaArrowUpRightFromSquare />
              Live Demo
            </a>
          )}
        </div>

        {/* BACK */}
        <Link
          to="/"
          className="inline-block mt-14 text-gray-400 underline"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
