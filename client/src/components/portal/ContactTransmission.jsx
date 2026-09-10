import React, { useState } from 'react';
import ContactField from './ContactField';
import { VERIFIED_CONTACT } from '../../data/portalData';

/**
 * ContactTransmission — Main message transmission gateway inspired by Stitch Screen 25
 * (`the_final_portal_mission_conclusion`) and `mobile_resume_contact`.
 *
 * Requirements:
 * - Clean, accessible fields: NAME, EMAIL, SUBJECT (optional), MESSAGE
 * - Client-side validation with technical error signatures
 * - Honest submission state: When valid, transitions to TRANSMISSION READY
 *   with an encoded mailto: fallback link to the verified recipient.
 * - Strictly avoids fake "MESSAGE SENT" claims when no backend exists.
 * - Prevents duplicate submission and preserves message payload for user edits.
 */
export default function ContactTransmission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isPreparing, setIsPreparing] = useState(false);
  const [transmissionReady, setTransmissionReady] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const validate = () => {
    const nextErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      nextErrors.name = 'IDENTIFIER REQUIRED (MIN 2 CHARACTERS)';
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = 'IDENTIFIER TOO SHORT (MIN 2 CHARACTERS)';
    } else if (formData.name.trim().length > 100) {
      nextErrors.name = 'IDENTIFIER EXCEEDS 100 CHARACTERS';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nextErrors.email = 'COMMS_LINK REQUIRED [VALID EMAIL ADDRESS]';
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'TRANSMISSION REJECTED: INVALID EMAIL SIGNATURE';
    }

    // Validate Message
    if (!formData.message.trim()) {
      nextErrors.message = 'MESSAGE PAYLOAD INCOMPLETE (MIN 10 CHARACTERS)';
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'MESSAGE PAYLOAD TOO SHORT (MIN 10 CHARACTERS)';
    } else if (formData.message.trim().length > 3000) {
      nextErrors.message = 'PAYLOAD EXCEEDS MAXIMUM 3000 CHARACTERS';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsPreparing(true);

    // Build properly encoded mailto URL
    const recipient = VERIFIED_CONTACT.email;
    const subjectText = formData.subject.trim()
      ? `[SMIT QUEST] ${formData.subject.trim()} — From ${formData.name.trim()}`
      : `[SMIT QUEST Transmission] Message from ${formData.name.trim()}`;

    const bodyText = `Operative Name: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}\n\nPayload Message:\n${formData.message.trim()}\n\n---\nTransmitted via SMIT QUEST Final Portal`;

    const encodedSubject = encodeURIComponent(subjectText);
    const encodedBody = encodeURIComponent(bodyText);
    const generatedMailto = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

    setMailtoUrl(generatedMailto);
    setIsPreparing(false);
    setTransmissionReady(true);
  };

  const handleReset = () => {
    setTransmissionReady(false);
    setMailtoUrl('');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section 
      id="transmission" 
      aria-label="Contact Message Transmission Gateway"
      className="relative w-full max-w-4xl mx-auto my-12 sm:my-16 px-4 select-none scroll-mt-24"
    >
      {/* Background Subtle Spotlight */}
      <div 
        className="absolute right-0 top-1/4 w-72 h-72 opacity-20 pointer-events-none blur-3xl bg-primary/[0.08]" 
        aria-hidden="true" 
      />

      {/* Main Glass Panel (Stitch Screen 25) */}
      <div className="relative w-full bg-surface-container-highest/35 backdrop-blur-2xl border border-outline-variant/30 rounded-xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.7)] flex flex-col md:flex-row gap-8 md:gap-12">
        
        {/* Left Side: Editorial Context & Direct Status */}
        <div className="md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-outline-variant/20 pb-6 md:pb-0 md:pr-6">
          <div>
            {/* Title: Bodoni Moda */}
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-2 tracking-tight uppercase">
              Transmit
            </h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed opacity-80 mb-6">
              Initialize a direct communication channel to {VERIFIED_CONTACT.handle}. Discuss project architectures, engineering opportunities, or collaborative expeditions.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs text-outline">
            <div className="flex items-center gap-2 text-primary/90">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                location_on
              </span>
              <span>SECTOR: {VERIFIED_CONTACT.sector}</span>
            </div>

            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm text-secondary" aria-hidden="true">
                mark_email_read
              </span>
              <span className="break-all">{VERIFIED_CONTACT.email}</span>
            </div>

            <div className="flex items-center gap-2 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" aria-hidden="true" />
              <span>STATUS: {VERIFIED_CONTACT.status}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form or Honest Transmission State */}
        <div className="md:w-2/3">
          {transmissionReady ? (
            /* Honest Unconfigured Server State per Section 17 & 21 */
            <div 
              role="status" 
              className="bg-surface-container-lowest/90 border border-primary/40 rounded-lg p-6 flex flex-col items-center text-center space-y-4 shadow-[0_0_30px_rgba(242,202,80,0.15)] animate-fadeIn"
            >
              <div className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10 text-primary mb-1">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  outgoing_mail
                </span>
              </div>

              <span className="font-mono text-[10px] sm:text-xs text-primary tracking-[0.25em] uppercase font-semibold">
                TRANSMISSION READY // SERVER ENDPOINT UNCONFIGURED
              </span>

              <h4 className="font-serif text-2xl font-bold text-on-surface">
                Payload Formatted for Delivery
              </h4>

              <p className="font-sans text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed opacity-90">
                Server-side routing is unconfigured in this frontend phase (scheduled for Phase 15 backend). 
                To ensure your transmission reaches the developer directly, click below to launch your default mail client with your prefilled message.
              </p>

              <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[48px] px-6 py-3 rounded border border-primary/60 bg-primary/15 hover:bg-primary hover:text-surface-container-lowest text-primary font-mono text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,202,80,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">send</span>
                  <span>OPEN IN EMAIL CLIENT</span>
                </a>

                <button
                  type="button"
                  onClick={() => setTransmissionReady(false)}
                  className="min-h-[48px] px-5 py-3 rounded border border-outline-variant/30 hover:border-primary/40 text-outline hover:text-primary font-mono text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">edit</span>
                  <span>EDIT PAYLOAD</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="font-mono text-[10px] text-outline/60 hover:text-outline underline uppercase tracking-widest pt-1"
              >
                RESET FORM
              </button>
            </div>
          ) : (
            /* Active Accessible Form */
            <form 
              onSubmit={handleSubmit} 
              noValidate 
              className="flex flex-col gap-5 text-left"
            >
              {/* Field 1: Name */}
              <ContactField
                id="name"
                label="IDENTIFIER [NAME]"
                placeholder="GUEST_01 // YOUR NAME"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
                autoComplete="name"
                icon="person"
              />

              {/* Field 2: Email */}
              <ContactField
                id="email"
                type="email"
                label="COMMS_LINK [EMAIL]"
                placeholder="OPERATIVE@DOMAIN.COM"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
                autoComplete="email"
                icon="mail"
              />

              {/* Field 3: Subject (Optional) */}
              <ContactField
                id="subject"
                label="QUERY_TYPE [SUBJECT]"
                placeholder="ENGINEERING COLLABORATION / PROJECT INQUIRY"
                value={formData.subject}
                onChange={handleInputChange}
                error={errors.subject}
                icon="tag"
              />

              {/* Field 4: Message */}
              <ContactField
                id="message"
                as="textarea"
                rows={4}
                label="PAYLOAD [MESSAGE]"
                placeholder="ENTER MISSION BRIEFING OR DIRECT COMMUNICATION PAYLOAD..."
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                required
                icon="chat"
              />

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="font-mono text-[10px] text-outline/70 tracking-wider">
                  ENCRYPTION: CLIENT DIRECT // NO STORED LOGS
                </span>

                <button
                  type="submit"
                  disabled={isPreparing}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded border border-primary/40 bg-primary/10 hover:bg-primary hover:text-surface-container-lowest text-primary font-mono text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(242,202,80,0.1)] hover:shadow-[0_0_30px_rgba(242,202,80,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss active:scale-95"
                >
                  {isPreparing ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" aria-hidden="true" />
                      <span>PREPARING TRANSMISSION...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND TRANSMISSION</span>
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">
                        send
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
