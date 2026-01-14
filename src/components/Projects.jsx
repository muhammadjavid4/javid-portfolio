import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-slate-950 text-white"
    >
      <h2 className="text-4xl font-extrabold text-sky-400 text-center">
        Projects
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        A curated collection of my personal, academic and full-stack
        projects demonstrating real-world problem solving.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
