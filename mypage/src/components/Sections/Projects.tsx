import { ArrowUpRight, Github } from 'lucide-react';
import { projects, additionalProjects, profile } from '@/data/portfolio';
export default function Projects() {
  return (<section id="projects" className="section section-tint section-padding">
    <div className="container-responsive">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2>Ideas turned into applications.</h2>
        </div>
        <p>Scheduling, energy, authentication, and the interfaces that make software useful.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (<article key={project.title} className="project-card">
          <div className="project-top">
            <span className="eyebrow">{project.category}</span>
            <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-status">{project.status}</p>
          <p>{project.problem}</p>
          <p>{project.solution}</p>
          <p className="contribution">
            <strong>My contribution</strong> {project.contribution}</p>
          <ul className="tags" aria-label="Technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <div className="project-links">
            {project.github && <a href={project.github}>
              <Github size={17} aria-hidden="true" /> Source code<span className="sr-only"> for {project.title}</span>
            </a>}
            {project.demo && <a href={project.demo}>View concept<span className="sr-only">: {project.title}</span> <ArrowUpRight size={17} aria-hidden="true" />
            </a>}
            {!project.github && !project.demo && <span>Demo and source not publicly linked.</span>}
          </div>
        </article>))}
      </div>
      <details className="other-work">
        <summary>More from my project archive</summary>
        <div className="archive-grid">{additionalProjects.map(project => <article key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="muted">My contribution: application development.</p>
          <p className="muted">{project.technologies}</p>
          <p className="muted">Portfolio archive · current status and public links unverified.</p>
        </article>)}</div>
      </details>
      <a href={profile.github} className="text-link">Explore GitHub <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  </section>);
}
