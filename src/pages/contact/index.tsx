import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faCopy,
    faCheck,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { personalInfo, socialLinks } from '../../config';
import { ContactFormData, ContactFormErrors } from '../../types';

const ContactPage: FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = (value: string, field: string) => {
        navigator.clipboard.writeText(value);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 1800);
    };

    const validateForm = (): boolean => {
        const newErrors: ContactFormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const subject = formData.subject?.trim()
                ? formData.subject
                : `Portfolio Contact from ${formData.name}`;

            const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

            const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoUrl;

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 6000);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 6000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactFormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <div className="main-content">
            <section className="contact-intro surface-card">
                <span className="section-eyebrow">// 04. DIRECT CHANNEL</span>
                <h1>Get In Touch</h1>
                <p className="contact-subtitle">
                    Have a question, architecture challenge, or want to collaborate? Reach
                    out directly or send a message below.
                </p>
            </section>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>
                        <span className="const">const</span> contactInfo = {'{'}
                    </h2>
                    <div className="contact-details">
                        <div className="contact-item surface-card">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <div className="contact-item-body">
                                <span className="contact-label">Email</span>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="contact-value"
                                >
                                    {personalInfo.email}
                                </a>
                            </div>
                            <button
                                type="button"
                                className="contact-copy-btn"
                                onClick={() => handleCopy(personalInfo.email, 'email')}
                                title="Copy Email"
                            >
                                <FontAwesomeIcon
                                    icon={copiedField === 'email' ? faCheck : faCopy}
                                />
                            </button>
                        </div>

                        <div className="contact-item surface-card">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                            <div className="contact-item-body">
                                <span className="contact-label">Phone</span>
                                <a
                                    href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                                    className="contact-value"
                                >
                                    {personalInfo.phone}
                                </a>
                            </div>
                            <button
                                type="button"
                                className="contact-copy-btn"
                                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                                title="Copy Phone"
                            >
                                <FontAwesomeIcon
                                    icon={copiedField === 'phone' ? faCheck : faCopy}
                                />
                            </button>
                        </div>

                        <div className="contact-item surface-card">
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="contact-icon"
                            />
                            <div className="contact-item-body">
                                <span className="contact-label">Location</span>
                                <span className="contact-value">{personalInfo.location}</span>
                            </div>
                        </div>
                    </div>
                    <h2>{'}'}</h2>

                    <div className="contact-social">
                        <h3 className="comment">// Connect on social platforms</h3>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link-card"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="contact-form-container surface-card">
                    <h2>
                        <span className="const">const</span> sendMessage = () =&gt; {'{'}
                    </h2>
                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                                aria-invalid={Boolean(errors.name)}
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <span className="error-message" role="alert">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                aria-invalid={Boolean(errors.email)}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <span className="error-message" role="alert">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                                aria-invalid={Boolean(errors.message)}
                                placeholder="Your message..."
                                rows={5}
                            />
                            {errors.message && (
                                <span className="error-message" role="alert">
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />{' '}
                            <span>
                                {isSubmitting ? 'Opening Mail Client...' : 'Send Message'}
                            </span>
                        </button>

                        {submitStatus === 'success' && (
                            <div className="form-message success" role="status">
                                Opening your email app to send the message to{' '}
                                {personalInfo.email}.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="form-message error" role="alert">
                                Oops! Something went wrong. Please try emailing directly to{' '}
                                {personalInfo.email}.
                            </div>
                        )}
                    </form>

                    <h2>{'}'}</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
