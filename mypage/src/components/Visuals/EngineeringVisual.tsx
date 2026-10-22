/** Conceptual artwork, kept separate so a future genuine photo can replace it. */
export default function EngineeringVisual() {
  return (
    <figure className="engineering-visual">
      <div className="visual-heading"><span className="visual-dot" />From interface to infrastructure<span aria-hidden="true">↗</span></div>
      <svg viewBox="0 0 440 390" role="img" aria-label="Conceptual software architecture: a frontend connects to an API, which reads and writes to a database. Not an application screenshot.">
        <g fill="none" stroke="#bdcde4" strokeWidth="1">
          <path d="M20 65H420M20 135H420M20 205H420M20 275H420M20 345H420M65 20V370M135 20V370M205 20V370M275 20V370M345 20V370" opacity=".4" />
          <path d="M250 90H345V180H295M145 215V300H190" stroke="#6486b8" strokeWidth="2" />
        </g>
        <g fill="#244b9b"><circle cx="345" cy="135" r="4" /><circle cx="145" cy="264" r="4" /></g>
        <g className="architecture-node">
          <rect x="35" y="35" width="215" height="110" rx="12" fill="white" stroke="#c6d4e8" />
          <rect x="51" y="51" width="32" height="28" rx="6" fill="#edf2fa" />
          <path d="m63 60-5 5 5 5m8-10 5 5-5 5" fill="none" stroke="#244b9b" strokeWidth="1.5" />
          <text x="96" y="71" fontSize="18" fontWeight="600" fill="#142344">Frontend</text>
          <text x="52" y="105" fontSize="14" fill="#536079">React / TypeScript</text>
          <path d="M52 122H125M135 122H175" stroke="#dce6f3" strokeWidth="4" strokeLinecap="round" />
        </g>
        <g className="architecture-node">
          <rect x="85" y="160" width="210" height="92" rx="12" fill="#142344" />
          <text x="105" y="190" fontSize="13" fill="#b6c9e8" fontFamily="monospace">request → response</text>
          <text x="105" y="224" fontSize="20" fill="white" fontWeight="600">API & business logic</text>
        </g>
        <g className="architecture-node">
          <rect x="190" y="280" width="215" height="84" rx="12" fill="white" stroke="#c6d4e8" />
          <g fill="none" stroke="#244b9b" strokeWidth="1.6"><ellipse cx="220" cy="309" rx="11" ry="4" /><path d="M209 309v19c0 6 22 6 22 0v-19M209 319c0 6 22 6 22 0" /></g>
          <text x="245" y="314" fontSize="18" fontWeight="600" fill="#142344">Database</text>
          <text x="245" y="339" fontSize="14" fill="#536079">PostgreSQL</text>
        </g>
        <text x="32" y="343" fontSize="12" fill="#536079" fontFamily="monospace">build. connect.</text>
        <text x="32" y="362" fontSize="12" fill="#536079" fontFamily="monospace">maintain.</text>
      </svg>
      <figcaption>Software architecture illustration<span>Interfaces · APIs · Data</span></figcaption>
    </figure>
  );
}
