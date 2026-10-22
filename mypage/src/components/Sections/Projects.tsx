import { ArrowUpRight, Github } from 'lucide-react';
import { projects, archivedProjects, additionalProjects, profile } from '@/data/portfolio';
import ProjectVisual from '@/components/Visuals/ProjectVisual';

export default function Projects() {
  return (
    <section id="projects" className="section section-tint section-padding">
      <div className="container-responsive">
        <div className="section-heading">
          <div><p className="eyebrow">01 / Selected work</p><h2>Ideas turned into applications.</h2></div>
          <p>A closer look at four projects, from scheduling constraints to web and mobile prototypes.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <ProjectVisual variant={project.artwork} />
              <div className="project-body">
                <div className="project-top">
                  <span className="eyebrow">{project.category}</span>
                  <span className="project-number" aria-hidden="true">0{index + 1}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-status">{project.status}</p>
                <p className="project-problem">{project.problem}</p>
                <p>{project.solution}</p>
                <p className="contribution"><strong>My role</strong> {project.contribution}</p>
                <ul className="tags" aria-label="Technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && <a href={project.github}><Github size={17} aria-hidden="true" />Source code<span className="sr-only"> for {project.title}</span></a>}
                    {project.demo && <a href={project.demo}>Explore the concept<span className="sr-only"> for {project.title}</span><ArrowUpRight size={17} aria-hidden="true" /></a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <details className="other-work">
          <summary>More projects <span className="archive-count">04 / Archive</span></summary>
          <div className="archive-grid">
            {archivedProjects.map(project => (
              <article key={project.title}>
                <p className="eyebrow">{project.category} · {project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.problem} {project.solution}</p>
                <p className="muted">My role: {project.contribution}</p>
                <ul className="tags" aria-label="Technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
                {project.github && <a className="archive-link" href={project.github}><Github size={17} aria-hidden="true" /> Source code<span className="sr-only"> for {project.title}</span></a>}
              </article>
            ))}
            {additionalProjects.map(project => (
              <article key={project.title}>
                <p className="eyebrow">Project archive</p>
                <h3>{project.title}</h3><p>{project.description}</p>
                <p className="muted">My role: application development.</p>
                <p className="muted">{project.technologies}</p>
              </article>
            ))}
          </div>
        </details>
        <a href={profile.github} className="text-link">Explore GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
