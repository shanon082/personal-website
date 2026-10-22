const categories = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Laravel', 'PHP', 'Django', 'Node.js', 'Express', 'REST APIs'] },
  { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'SQL', 'SQLite'] },
  { title: 'Mobile', skills: ['Android integration'] },
  { title: 'Tools & deployment', skills: ['Git', 'GitHub', 'Vercel'] },
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
      <div className="skills-grid">{categories.map((category, index) => <article className="skill-card" key={category.title}>
        <span className="skill-number" aria-hidden="true">0{index + 1}</span>
        <h3>{category.title}</h3>
        <ul>{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
      </article>)}</div>
    </div>
  </section>;
}
