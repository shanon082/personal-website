import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/portfolio';
export default function Footer() {
  return <footer className="site-footer section-padding">
    <div className="container-responsive">
      <div className="footer-top">
        <div>
          <a href="#home" className="footer-name">Shanon Simon Lubega<span aria-hidden="true">.</span>
          </a>
          <p>Full-Stack Software Engineer · Kampala, Uganda</p>
        </div>
        <a href={profile.company}>Shanvexa Technologies <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shanon Simon Lubega</p>
        <nav aria-label="Footer navigation">
          <a href="#projects">Projects</a>
          <a href={profile.github}>GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#home">Back to top ↑</a>
        </nav>
      </div>
    </div>
  </footer>;
}
