import { Code2, Database, GitBranch, Layers, Smartphone } from 'lucide-react';
const categories = [
  { icon: Layers, title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { icon: Code2, title: 'Backend', skills: ['Laravel', 'PHP', 'Django', 'Node.js', 'Express', 'REST APIs'] },
  { icon: Database, title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'SQL', 'SQLite'] },
  { icon: Smartphone, title: 'Mobile', skills: ['Android integration'] },
  { icon: GitBranch, title: 'Tools & deployment', skills: ['Git', 'GitHub', 'Vercel'] },
];
export default function Skills() {
  return <section id="skills" className="section section-padding">
    <div className="container-responsive">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Toolkit</p>
          <h2>The tools behind the work.</h2>
        </div>
        <p>A practical stack for building interfaces, APIs, and the data layers that connect them.</p>
      </div>
      <div className="skills-grid">{categories.map((category) => <article className="skill-card" key={category.title}>
        <category.icon className="skill-icon" size={23} strokeWidth={1.5} aria-hidden="true" />
        <h3>{category.title}</h3>
        <ul>{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
      </article>)}</div>
    </div>
  </section>;
}
