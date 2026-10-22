export type ProjectArtwork = 'schedule' | 'energy' | 'foundation' | 'authentication';

/** Abstract category artwork, never a representation of the real application UI. */
export default function ProjectVisual({ variant }: { variant: ProjectArtwork }) {
  const descriptions = {
    schedule: 'Abstract scheduling artwork: linked time blocks arranged around constraints.',
    energy: 'Abstract energy-sharing artwork: connected nodes surrounding an energy symbol.',
    foundation: 'Abstract foundation artwork: an open book and a growing branch.',
    authentication: 'Abstract authentication artwork: a shield and keyhole with connected access points.',
  };
  return (
    <figure className={`project-artwork artwork-${variant}`}>
      <svg viewBox="0 0 480 190" role="img" aria-label={descriptions[variant]}>
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="240" cy="95" r="72" opacity=".13" />
          <circle cx="240" cy="95" r="91" opacity=".07" />
          {variant === 'schedule' && <>
            <path d="M100 62H180M300 127H380M155 95H325" strokeDasharray="4 6" opacity=".6" />
            <rect x="170" y="42" width="140" height="106" rx="10" fill="white" />
            <path d="M170 72H310M202 33V51M277 33V51" />
            <g fill="currentColor" stroke="none"><rect x="185" y="85" width="30" height="16" rx="3" opacity=".2" /><rect x="222" y="85" width="30" height="16" rx="3" opacity=".7" /><rect x="259" y="85" width="30" height="16" rx="3" opacity=".2" /><rect x="185" y="111" width="30" height="16" rx="3" opacity=".7" /><rect x="222" y="111" width="30" height="16" rx="3" opacity=".2" /><rect x="259" y="111" width="30" height="16" rx="3" opacity=".7" /></g>
            <circle cx="100" cy="62" r="7" /><circle cx="380" cy="127" r="7" />
          </>}
          {variant === 'energy' && <>
            <path d="M240 95 120 51M240 95 361 51M240 95 120 140M240 95 361 140" opacity=".5" />
            {[ [120,51], [361,51], [120,140], [361,140] ].map(([x,y]) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="21" fill="white" /><circle cx={x} cy={y} r="6" /></g>)}
            <circle cx="240" cy="95" r="43" fill="white" /><path d="m245 62-24 39h19l-5 29 25-42h-20z" fill="currentColor" stroke="none" />
          </>}
          {variant === 'foundation' && <>
            <path d="M240 145c-24-16-50-18-80-14V65c34-4 59 3 80 18 21-15 46-22 80-18v66c-30-4-56-2-80 14Z" fill="white" /><path d="M240 83V145M179 84l39 8M179 100l39 8M262 101l39-8" opacity=".5" />
            <path d="M240 82V41m0 17c-21 0-30-12-28-23 17-1 28 9 28 23Zm0-8c21 0 30-12 28-23-17-1-28 9-28 23Z" />
          </>}
          {variant === 'authentication' && <>
            <path d="M240 33 292 53v43c0 31-24 49-52 64-28-15-52-33-52-64V53Z" fill="white" />
            <circle cx="240" cy="83" r="12" /><path d="M236 95v24h8V95M110 95H175M305 95H370" /><circle cx="110" cy="95" r="7" /><circle cx="370" cy="95" r="7" />
          </>}
        </g>
      </svg>
      <figcaption>Conceptual artwork <span aria-hidden="true">/</span> Not a screenshot</figcaption>
    </figure>
  );
}
