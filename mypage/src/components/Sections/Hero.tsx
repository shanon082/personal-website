import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';
import EngineeringVisual from '@/components/Visuals/EngineeringVisual';
import { profile } from '@/data/portfolio';
export default function Hero() {
    return (<section id="home" className="hero section-padding">
      <div className="container-responsive hero-grid">
        <div>
          <p className="eyebrow">Based in Uganda · Building for the web & mobile</p>
          <h1>Shanon Simon <span>Lubega.</span></h1>
          <p className="hero-role">Full-Stack Software Engineer</p>
          <p className="hero-stack">Laravel <span aria-hidden="true">/</span> React <span aria-hidden="true">/</span> TypeScript <span aria-hidden="true">/</span> PostgreSQL</p>
          <p className="hero-description">I build software that solves real-world problems, from backend architecture and APIs to thoughtful web and mobile experiences. My work brings together database design, practical interfaces, and maintainable code.</p>
          <p className="founder">Founder of <a href={profile.company}>Shanvexa Technologies <ArrowUpRight size={15} aria-hidden="true"/></a></p>
          <div className="actions">
            <a href="#projects" className="btn-primary">Explore my work <ArrowDownRight size={18} aria-hidden="true"/></a>
            <a href={profile.cv} download className="btn-secondary"><Download size={18} aria-hidden="true"/> Download CV</a>
          </div>
          <p className="hero-note">Open to engineering roles, remote opportunities & freelance projects.</p>
        </div>
        <div className="hero-visual-slot"><EngineeringVisual /></div>
      </div>
    </section>);
}
