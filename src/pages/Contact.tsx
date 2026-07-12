import { useState } from 'react';
import { contactPage } from '../data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="space-y-6">
      <div className="bg-panel rounded-3xl py-10 text-center">
        <h1 className="font-display text-5xl md:text-6xl">{contactPage.title}</h1>
      </div>

      <div className="bg-lime text-black rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">{contactPage.heading}</h2>
          <p className="max-w-sm leading-relaxed text-[15px] md:text-base">{contactPage.text}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1.5 text-sm">{contactPage.form.nameLabel}</label>
            <input type="text" required className="w-full rounded-md px-4 py-2.5 bg-white outline-none" />
          </div>
          <div>
            <label className="block font-semibold mb-1.5 text-sm">{contactPage.form.emailLabel}</label>
            <input type="email" required className="w-full rounded-md px-4 py-2.5 bg-white outline-none" />
          </div>
          <div>
            <label className="block font-semibold mb-1.5 text-sm">{contactPage.form.messageLabel}</label>
            <textarea rows={6} required className="w-full rounded-md px-4 py-2.5 bg-white outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-panel text-lime py-3 rounded-lg font-medium">
            {contactPage.form.submitLabel}
          </button>
          {submitted && (
            <p className="text-black/70 text-sm text-center">{contactPage.form.successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
