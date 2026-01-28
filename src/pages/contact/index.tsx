import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Simulate form submission (replace with actual API call)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // For now, just log the form data
            console.log('Form submitted:', formData);

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof ContactFormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <div className="main-content">
            <section className="contact-intro">
                <h1>Get In Touch</h1>
                <p className="contact-subtitle">
                    Have a question or want to work together? Feel free to reach out!
                </p>
            </section>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>
                        <span className="const">const</span> contactInfo = {'{'}
                    </h2>
                    <div className="contact-details">
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <div>
                                <span className="contact-label">Email</span>
                                <a href={`mailto:${personalInfo.email}`} className="contact-value">
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                            <div>
                                <span className="contact-label">Phone</span>
                                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="contact-value">
                                    {personalInfo.phone}
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                            <div>
                                <span className="contact-label">Location</span>
                                <span className="contact-value">{personalInfo.location}</span>
                            </div>
                        </div>
                    </div>
                    <h2>{'}'}</h2>

                    <div className="contact-social">
                        <h3 className="comment">// Find me on social media</h3>
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

                <div className="contact-form-container">
                    <h2>
                        <span className="const">const</span> sendMessage = () =&gt; {'{'}
                    </h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                                placeholder="Your name"
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
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
                                placeholder="Your message..."
                                rows={6}
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="form-message success">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="form-message error">
                                Oops! Something went wrong. Please try again.
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
