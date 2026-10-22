import { ImageResponse } from 'next/og';
export const alt = 'Shanon Simon Lubega — Full-Stack Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{ background: '#142344', color: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '90px', fontFamily: 'sans-serif' }}>
    <div style={{ color: '#a6c4ff', fontSize: 25, marginBottom: 35 }}>UGANDA · WEB & MOBILE APPLICATIONS</div>
    <div style={{ fontSize: 76, fontWeight: 700 }}>Shanon Simon Lubega</div>
    <div style={{ fontSize: 38, marginTop: 24 }}>Full-Stack Software Engineer</div>
    <div style={{ color: '#b9c9e3', fontSize: 25, marginTop: 45 }}>Laravel · React · TypeScript · PostgreSQL</div>
  </div>, size);
}
