'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Copy, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Copy is unavailable. Select and copy the email address above.');
    }
  }

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) {
      setDraft('');
      setError('Please enter a name and message containing more than spaces.');
      const field = !name ? 'name' : !email ? 'email' : 'message';
      (event.currentTarget.elements.namedItem(field) as HTMLElement | null)?.focus();
      return;
    }
    setError('');
    setDraft(`mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + '\nReply to: ' + email)}`);
  }

  return (
    <section id="contact" className="section section-padding">
      <div className="container-responsive contact-grid">
        <div>
          <p className="eyebrow">04 / Let’s connect</p>
          <h2>Have a problem worth solving?</h2>
          <p className="contact-intro">
            Let’s talk about an engineering role, a web or mobile application,
            or software for your organisation.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail size={21} aria-hidden="true" />{profile.email}
          </a>
          <button type="button" className="copy-email" onClick={copyEmail}><Copy size={16} aria-hidden="true" />Copy email address</button>
          <p className="copy-feedback" role="status">{copyStatus}</p>
          <p className="muted">Kampala, Uganda</p>
          <div className="contact-links">
            <a href={profile.github}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={profile.company}>Shanvexa Technologies <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <form action={`mailto:${profile.email}`} method="post" encType="text/plain" onSubmit={prepareEmail} onChange={() => { setDraft(''); setError(''); }} className="contact-form">
          <h3>Start a conversation</h3>
          <p className="form-note">All fields are required. Nothing is sent from this website.</p>
          <p id="contact-privacy" className="muted">
            Prepare an email draft here, then open your email app to review and send it.
            This form does not transmit or store your details. Your email provider
            handles the message when you send it.
          </p>
          <div className="form-row">
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required maxLength={100} aria-describedby={error ? "contact-error" : undefined} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
            </div>
          </div>
          <label htmlFor="message">What would you like to discuss?</label>
          <textarea id="message" name="message" rows={5} required maxLength={2500} aria-describedby={error ? "contact-error" : undefined} />
          <button type="submit" className="btn-primary" aria-describedby="contact-privacy">
            Prepare email draft <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <div aria-live="polite">
            {error && <p id="contact-error" className="form-error">{error}</p>}
            {draft && (
              <p className="draft-feedback">
                Your draft is ready. <a href={draft}>Open your email app</a> to review and send.
                If no app opens, email <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.
                Nothing has been sent yet.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
