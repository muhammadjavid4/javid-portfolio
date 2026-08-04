import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowUpRightFromSquare, FaFolder } from "react-icons/fa6";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { SectionHeading } from "./About";

const featuredIds = ["splitwise", "event-platform", "vectorshift"];

export default function Projects() {
  const featured = projects.filter((p) => featuredIds.includes(p.id));
  const archive = projects.filter((p) => !featuredIds.includes(p.id));

  return (
    <section id="projects" className="relative py-28 bg-ink-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="04 / projects"
          title="projects/"
          description="A curated set of full-stack builds, followed by an archive of smaller practice projects."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ARCHIVE — directory listing */}
        <div className="mt-16">
          <p className="font-mono text-xs text-sage tracking-wide mb-4">
            // archive — smaller builds & practice projects
          </p>

          <div className="border border-line/10 bg-ink">
            {archive.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`
                  flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6
                  px-5 py-4
                  ${i !== archive.length - 1 ? "border-b border-line/10" : ""}
                  hover:bg-ink-softer transition-colors
                `}
              >
                <div className="flex items-center gap-3 sm:w-64 shrink-0">
                  <FaFolder className="text-amber shrink-0" />
                  <Link
                    to={`/project/${project.id}`}
                    className="text-paper hover:text-amber transition-colors font-medium"
                  >
                    {project.title}
                  </Link>
                </div>

                <p className="text-paper-dim text-sm flex-1">
                  {project.shortDesc}
                </p>

                <div className="flex items-center gap-4 font-mono text-xs text-paper-dim shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber transition-colors"
                  >
                    <FaGithub /> code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 hover:text-sage transition-colors"
                    >
                      <FaArrowUpRightFromSquare /> live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
