import React, { useState } from 'react';
import styles from './SimpleContactForm.module.css';

const SimpleContactForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // ✅ YOUR FORMPREE URL (already correct!)
    const FORMPREE_URL = 'https://formspree.io/f/mwvbdjvy';

    const validate = () => {
        const newErrors = {};
        if (!formData.full_name.trim()) newErrors.full_name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // ✅ FORMPREE: Use FormData instead of JSON
            const formDataToSend = new FormData();
            formDataToSend.append('Full Name', formData.full_name);
            formDataToSend.append('Email', formData.email);
            formDataToSend.append('Subject', formData.subject);
            formDataToSend.append('Message', formData.message);

            // ✅ FORMPREE: Send to Formspree URL
            const response = await fetch(FORMPREE_URL, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // ✅ Check if submission was successful
            if (response.ok) {
                setSubmitted(true);
                // Reset form
                setFormData({
                    full_name: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            } else {
                // Try to get error from Formspree
                const result = await response.json();
                throw new Error(result.error || 'Submission failed. Please try again.');
            }
            
        } catch (error) {
            console.error('Formspree submission error:', error);
            setSubmitError(error.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <span className={styles.successIcon}>🎉</span>
                        <h2>Message Sent Successfully!</h2>
                        <p>Thank you for contacting Yubokits.</p>
                        <p>We'll get back to you within 24-48 hours.</p>
                        <p><small>Check your email for an automatic confirmation.</small></p>
                        <button
                            className={styles.submitBtn}
                            style={{ marginTop: '2rem', width: 'auto', padding: '0.75rem 2rem' }}
                            onClick={() => setSubmitted(false)}
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Contact Yubokits</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name *</label>
                        <input
                            type="text"
                            name="full_name"
                            className={`${styles.input} ${errors.full_name ? styles.error : ''}`}
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                        {errors.full_name && <span className={styles.errorMessage}>{errors.full_name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            className={`${styles.input} ${errors.email ? styles.error : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Subject</label>
                        <select
                            name="subject"
                            className={styles.select}
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Workshop">Workshop Inquiry</option>
                            <option value="Support">Technical Support</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Message *</label>
                        <textarea
                            name="message"
                            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you with robotics education?"
                            rows="5"
                            required
                        />
                        {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                    </div>

                    {submitError && (
                        <div className={styles.submitError}>
                            ⚠️ {submitError}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className={styles.submitBtn} 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className={styles.spinner}></span>
                                Sending...
                            </>
                        ) : 'Send Message'}
                    </button>

                    <p className={styles.formNote}>
                        * Required fields. We respect your privacy and won't share your information.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SimpleContactForm;