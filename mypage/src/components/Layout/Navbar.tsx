'use client';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links = ['Projects', 'Skills', 'Experience', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <header className="site-header">
    <nav aria-label="Main navigation" className="container-responsive section-padding nav-inner">
      <a href="#home" className="brand" aria-label="Shanon Simon Lubega, home">
        <span className="brand-mark" aria-hidden="true">sl.</span>
        <span>Shanon Lubega<span className="brand-caption">Software Engineer</span>
        </span>
      </a>
      <div className="desktop-nav">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}<a className="nav-cta" href="/SHANON_SIMON_LUBEGA_CV.pdf" download>Download CV <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      </div>
      <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      <div id="mobile-navigation" className="mobile-nav" hidden={!open}>{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}<a href="/SHANON_SIMON_LUBEGA_CV.pdf" download onClick={() => setOpen(false)}>Download CV</a>
      </div>
    </nav>
  </header>;
}
