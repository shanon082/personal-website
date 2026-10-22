const entries = [
  { category: 'Engineering & entrepreneurship', title: 'Founder', organisation: 'Shanvexa Technologies', period: '', description: 'Building a software development practice focused on web and mobile applications.', link: 'https://shanvexa-technologies.vercel.app/' },
  { category: 'Professional experience', title: 'Support Engineer / NOC Operations', organisation: 'Soliton Telmec', period: '2026 – October 2026', description: 'Supported network operations and ZTE GPON troubleshooting, escalated technical issues, and coordinated with field teams to restore connectivity.', link: '' },
  { category: 'Professional experience', title: 'Full-Stack Developer', organisation: 'Code Craft', period: '2024 – 2025 · Remote, India', description: 'Contributed to web application development using React and Node.js.', link: '' },
  { category: 'Education', title: 'Bachelor of Engineering in Electronics and Computer Engineering', organisation: 'Soroti University', period: 'Soroti, Uganda', description: 'Engineering studies spanning electronics and computing, with an interest in software development. Attendance dates and qualification status are awaiting confirmation.', link: '' },
];
export default function Experience() {
  return <section id="experience" className="section section-tint section-padding">
    <div className="container-responsive">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Background</p>
          <h2>Software meets systems thinking.</h2>
        </div>
        <p>Application development, operational troubleshooting, and an engineering education.</p>
      </div>
      <div className="experience-list">{entries.map(entry => <article className="experience-item" key={entry.organisation}>
        <div>
          <p className="eyebrow">{entry.category}</p>
          <p className="muted">{entry.period}</p>
        </div>
        <div>
          <h3>{entry.title}</h3>
          <p className="organisation">{entry.link ? <a href={entry.link}>{entry.organisation}</a> : entry.organisation}</p>
          <p>{entry.description}</p>
        </div>
      </article>)}</div>
    </div>
  </section>;
}
